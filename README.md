# AIActEU – KI News Hub

Zentrale, kuratierte Nachrichtenplattform für den deutschsprachigen KI-Sektor mit EU-Verhaltenskodex-konformer Kennzeichnung von KI-generierten/-kuratierten Inhalten (EU AI Act Art. 50 & Art. 53).

---

## 🚀 Technologie & Architektur

- **Framework:** Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- **Typografie:** Newsreader (Editorial Serif) + Plus Jakarta Sans (Sans-Serif) – 100 % lokal gehostet.
- **Export:** Statischer Export (`output: "export"`).
- **Mehrsprachigkeit (i18n):** Leichtgewichtiges Single-File Wörterbuch (`lib/i18n.ts`) & React Context für flüssiges DE/EN-Umschalten ohne Ordner-Wildwuchs.
- **DSGVO & Compliance:** 0 Tracking-Cookies, 0 externe Font-Calls, rechtssichere Pflichtangaben (Impressum & Datenschutz).
<!-- deploy-only:start -->
- **Hosting:** IONOS Webspace (`/aiacteu/`).
- **Automatisierte SFTP-Pipeline:** `.github/workflows/deploy.yml` baut das Projekt bei jedem Push auf den Branch `GoogleAntigravityIDE` und spiegelt die statischen Dateien automatisiert zu IONOS.
<!-- deploy-only:end -->

---

## 📁 Projektstruktur

```text
.
├── frontend/                   Next.js App Router (TypeScript, Tailwind CSS)
│   ├── src/
│   │   ├── app/                Seiten (Start, Verzeichnis, Compliance, Tutorials, etc.)
│   │   ├── components/         UI-Komponenten (Header, Footer, Leaderboard, Cards)
│   │   ├── context/            LanguageContext (DE / EN Umschaltung)
│   │   └── lib/                Daten & Hilfsfunktionen (i18n, articles, topModels)
│   └── public/                 Statische Assets
├── ARCHITECTURE.md             Technische Architekturentscheidungen
├── DESIGN.md                   Design-System (Farben, Typografie, Glassmorphismus)
├── COMPLIANCE.md              EU-Verhaltenskodex- & DSGVO-Checkliste
└── PROJEKTPLAN.md              Projektverlauf & Roadmap
```

---

## 🛠️ Lokale Entwicklung

### 1. Abhängigkeiten installieren & Entwicklungs-Server starten
```bash
cd frontend
npm install
npm run dev
```
Die Anwendung läuft anschließend unter `http://localhost:3000`.

### 2. Linting & Produktions-Build testen
```bash
npm run lint      # Code-Qualitätsprüfung (0 Fehler)
npm run build     # Compiliert den statischen Export nach frontend/out/
```

---

<!-- deploy-only:start -->
## 🚢 Automatisches Deployment (GitHub Actions -> IONOS)

Das Deployment erfolgt vollautomatisch bei jedem Git Push auf den Branch **`GoogleAntigravityIDE`**.

### GitHub Secret Konfiguration:
Im GitHub Repository unter **Settings -> Secrets and variables -> Actions** muss ein einziges Secret hinterlegt sein:

- **Secret Name:** `SFTP_URL`
- **Secret Value Format:** `sftp://BENUTZERNAME:PASSWORT@HOST/aiacteu/`

Die GitHub Action parst das Secret automatisch, isoliert Passwörter mit Sonderzeichen sicher und spiegelt den Stand nach `/aiacteu/` auf deinen IONOS Webspace.

> **Sicherheitshinweis:** Dieses Deployment-Repository ist privat, die Actions-Logs sind es damit ebenfalls. Die folgende Regel gilt trotzdem unverändert, weil ein einzelner Fehlgriff (Repo wieder öffentlich, Log-Export, geteilter Screenshot) die Zugangsdaten sonst sofort preisgibt. GitHub maskiert ausschließlich den **exakten** Secret-Wert – Teilstrings, die der Code daraus herausparst (Host, Benutzername), erkennt die Maskierung **nicht**. `frontend/scripts/deploy.mjs` gibt deshalb nur noch `gesetzt`/`FEHLT` aus und filtert Zugangsdaten über `redact()` aus fremden Fehlermeldungen. Beim Anpassen der Diagnose-Ausgaben diese Regel beibehalten: niemals Host, Benutzername oder Passwort in ein `console.log` schreiben.

### Zugangsdaten wechseln (IONOS-Benutzer rotieren)

1. Im IONOS-Kundenmenü den neuen SFTP-Benutzer anlegen und dessen Zielverzeichnis notieren.
2. Secret `SFTP_URL` in den GitHub Repository Settings auf das neue Format aktualisieren.
3. Deployment auslösen – entweder per Push auf `GoogleAntigravityIDE` oder unter **Actions -> Build and Deploy to IONOS -> Run workflow** (`workflow_dispatch`).
4. Den Schritt **Verify Live Deployment** im Run prüfen (siehe unten). Er ist der eigentliche Beleg dafür, dass die neuen Zugangsdaten funktionieren.

### Verifikation: Warum ein grüner Upload nicht genügt

Ein erfolgreicher SFTP-Upload beweist nur, dass die Verbindung stand – **nicht**, dass die Dateien dort gelandet sind, wo der Webserver sie ausliefert. Liefert ein neu angelegter IONOS-Benutzer ein abweichendes Home-Verzeichnis, lädt der Upload sauber an die falsche Stelle hoch, meldet Erfolg, und aiacteu.de serviert stumm weiter den alten Stand. Genau diese Lücke schließt der Schritt **Verify Live Deployment**:

- `frontend/src/lib/lastUpdated.json` wird bei jedem Lauf neu geschrieben und ist damit ein pro Run eindeutiger Fingerabdruck des gebauten Stands.
- Nach dem Upload ruft der Schritt `https://aiacteu.de` ab und vergleicht den dort ausgelieferten Zeitstempel mit dem erwarteten.
- Bis zu 6 Versuche im Abstand von 10 Sekunden fangen Verzögerungen beim Ausliefern ab.
- Schlägt der Abgleich fehl, wird der Run **rot** – mit dem Hinweis, das Zielverzeichnis der Zugangsdaten zu prüfen.

Damit macht jeder grüne Run eine belastbare Aussage: gebaut, hochgeladen **und** live nachweisbar.

---
<!-- deploy-only:end -->

## 🇪🇺 EU AI Act Compliance

- **Art. 50 Transparenz:** Automatische Kennzeichnung KI-generierter Artikel und Grafiken mit dem `AI GENERATED` / `EU AI ACT ART. 50` Siegel.
- **Art. 53 Transparenz-Register (`/verzeichnis`):** Verzeichnis der Top 10 KI-Frontier-Modelle (Claude 3.7 Sonnet, OpenAI o3/o3-mini, DeepSeek-R1, Gemini 2.0 Flash/Pro etc.) mit Knowledge Cutoff-Stichtagen und aufklappbarer Herkunfts-Aufschlüsselung nach 4 Quellen-Kategorien (Web, Bücher, Code, Medien).
