import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import SFTPClient from "ssh2-sftp-client";
import ftp from "basic-ftp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let raw = (process.env.SFTP_URL || process.env.IONOS_URL || process.env.IONOS_SFTP || "").trim();
if ((raw.startsWith('"') && raw.endsWith('"')) || (raw.startsWith("'") && raw.endsWith("'"))) {
  raw = raw.slice(1, -1).trim();
}

let server = process.env.DIRECT_SERVER || "";
let username = process.env.DIRECT_USERNAME || "";
let password = process.env.DIRECT_PASSWORD || "";
let port = parseInt(process.env.DIRECT_PORT || "22", 10);
let remoteDir = (process.env.DIRECT_DIR || "/aiacteu").replace(/\/+$/, "") || "/aiacteu";

function safeDecode(str) {
  try {
    return decodeURIComponent(str);
  } catch (e) {
    return str;
  }
}

if (!server && raw) {
  if (raw.startsWith("{")) {
    try {
      const p = JSON.parse(raw);
      server = p.server || "";
      username = p.username || "";
      password = p.password || "";
      port = parseInt(p.port || "22", 10);
      remoteDir = (p.remote_dir || "/aiacteu").replace(/\/+$/, "") || "/aiacteu";
    } catch (e) {}
  } else {
    let clean = raw.replace(/^(sftp|ftps|ftp):\/\//i, "");
    const lastAt = clean.lastIndexOf("@");
    if (lastAt !== -1) {
      const userPass = clean.substring(0, lastAt);
      const hostPath = clean.substring(lastAt + 1);
      const colon = userPass.indexOf(":");
      if (colon !== -1) {
        username = safeDecode(userPass.substring(0, colon));
        let passRaw = userPass.substring(colon + 1);
        if (passRaw.includes(";")) {
          passRaw = passRaw.split(";")[0];
        }
        password = safeDecode(passRaw);
      } else {
        username = safeDecode(userPass);
      }
      const slash = hostPath.indexOf("/");
      let hostPort = hostPath;
      if (slash !== -1) {
        hostPort = hostPath.substring(0, slash);
        remoteDir = hostPath.substring(slash).replace(/\/+$/, "") || "/aiacteu";
      }
      const hpColon = hostPort.indexOf(":");
      if (hpColon !== -1) {
        server = hostPort.substring(0, hpColon);
        port = parseInt(hostPort.substring(hpColon + 1), 10);
      } else {
        server = hostPort;
        port = 22;
      }
    } else {
      server = clean;
    }
  }
}

if (!server || !password) {
  console.error("❌ Keines der Secrets (SFTP_URL oder SFTP_SERVER / SFTP_PASSWORD) wurde gefunden.");
  console.error("Deployment nicht möglich. Bitte das Secret SFTP_URL in den GitHub Repository Settings hinterlegen.");
  // Bewusst exit 1: ein stillschweigend übersprungenes Deployment liesse den
  // Workflow gruen erscheinen, obwohl die Live-Seite nie aktualisiert wurde.
  process.exit(1);
}

console.log("=================================================");
console.log("🚀 SFTP/FTPS Deployment Diagnostik:");
console.log(`   Host: "${server}"`);
console.log(`   Port: ${port}`);
console.log(`   Benutzer: "${username}"`);
console.log(`   Passwort vorhanden: ${password ? "JA" : "NEIN"}`);
console.log(`   Ziel-Verzeichnis: "${remoteDir}"`);
console.log("=================================================");

const localDir = path.resolve(__dirname, "../out");
let sftpErrorMessage = "";
let ftpsErrorMessage = "";

async function run() {
  // Attempt 1: SFTP (SSH Port 22)
  try {
    console.log(`[Versuch 1/2] Verbinde über SFTP (SSH Port ${port})...`);
    const sftp = new SFTPClient();
    await sftp.connect({
      host: server,
      port: port,
      username: username,
      password: password,
      readyTimeout: 25000,
      retries: 1,
      algorithms: {
        serverHostKey: [
          "ssh-rsa",
          "ecdsa-sha2-nistp256",
          "ecdsa-sha2-nistp384",
          "ecdsa-sha2-nistp521",
          "ssh-ed25519",
        ],
      },
    });
    console.log("✅ SFTP-Verbindung erfolgreich! Übertrage Dateien...");
    try {
      await sftp.mkdir(remoteDir, true);
    } catch (e) {}
    await sftp.uploadDir(localDir, remoteDir);
    await sftp.end();
    console.log("🎉 SFTP-Upload erfolgreich abgeschlossen!");
    return;
  } catch (sftpErr) {
    sftpErrorMessage = sftpErr.message || String(sftpErr);
    console.log(`⚠️ SFTP-Hinweis: ${sftpErrorMessage}. Wechsle automatisch zu FTPS (Port 21)...`);
  }

  // Attempt 2: FTPS (TLS Port 21)
  console.log(`[Versuch 2/2] Verbinde über FTPS (TLS Port 21)...`);
  const ftpClient = new ftp.Client(30000);
  let ftpsConnected = false;

  try {
    await ftpClient.access({
      host: server,
      port: 21,
      user: username,
      password: password,
      secure: true,
      secureOptions: { rejectUnauthorized: false },
    });
    ftpsConnected = true;
  } catch (e1) {
    try {
      await ftpClient.access({
        host: server,
        port: 21,
        user: username,
        password: password,
        secure: false,
      });
      ftpsConnected = true;
    } catch (e2) {
      ftpsErrorMessage = e2.message || String(e2);
    }
  }

  if (ftpsConnected) {
    console.log("✅ FTPS-Verbindung erfolgreich! Übertrage Dateien...");
    await ftpClient.ensureDir(remoteDir);
    await ftpClient.clearWorkingDir();
    await ftpClient.uploadFromDir(localDir);
    ftpClient.close();
    console.log("🎉 FTPS-Upload erfolgreich abgeschlossen!");
    return;
  }

  throw new Error(`SFTP-Fehler: [${sftpErrorMessage}] | FTPS-Fehler: [${ftpsErrorMessage}]`);
}

run().catch((err) => {
  console.error("❌ FEHLER BEIM DEPLOYMENT ZU IONOS:");
  console.error(err.message);
  console.error("-------------------------------------------------");
  console.error("Erkennungs-Details:");
  console.error(`- Host: ${server}`);
  console.error(`- User: ${username}`);
  console.error(`- SFTP-Meldung: ${sftpErrorMessage}`);
  console.error(`- FTPS-Meldung: ${ftpsErrorMessage}`);
  console.error("-------------------------------------------------");
  process.exit(1);
});
