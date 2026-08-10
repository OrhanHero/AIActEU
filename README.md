# AIActEU – KI News Hub

Zentrale, kuratierte Nachrichtenplattform für den deutschsprachigen KI-Sektor mit EU-Verhaltenskodex-konformer Kennzeichnung von KI-generierten/-kuratierten Inhalten (EU AI Act Art. 50 & Art. 53).

---

## 🚀 Technologie & Architektur

- **Framework:** Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- **Typografie:** Newsreader (Editorial Serif) + Plus Jakarta Sans (Sans-Serif) – 100 % lokal gehostet.
- **Export & Hosting:** Statischer Export (`output: "export"`), gehostet auf IONOS Webspace (`/aiacteu/`).
- **Mehrsprachigkeit (i18n):** Leichtgewichtiges Single-File Wörterbuch (`lib/i18n.ts`) & React Context für flüssiges DE/EN-Umschalten ohne Ordner-Wildwuchs.
- **DSGVO & Compliance:** 0 Tracking-Cookies, 0 externe Font-Calls, rechtssichere Pflichtangaben (Impressum & Datenschutz).
- **Automatisierte SFTP-Pipeline:** `.github/workflows/deploy.yml` baut das Projekt bei jedem Push auf den Branch `GoogleAntigravityIDE` und spiegelt die statischen Dateien automatisiert zu IONOS.

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
│   └── public/                 Statische Assets & .htaccess (HSTS & strikte CSP)
├── .github/workflows/
│   └── deploy.yml              GitHub Action für automatischen IONOS SFTP-Upload
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

## 🚢 Automatisches Deployment (GitHub Actions -> IONOS)

Das Deployment erfolgt vollautomatisch bei jedem Git Push auf den Branch **`GoogleAntigravityIDE`**.

### GitHub Secret Konfiguration:
Im GitHub Repository unter **Settings -> Secrets and variables -> Actions** muss ein einziges Secret hinterlegt sein:

- **Secret Name:** `SFTP_URL`
- **Secret Value Format:** `sftp://BENUTZERNAME:PASSWORT@HOST/aiacteu/`

Die GitHub Action parst das Secret automatisch, isoliert Passwörter mit Sonderzeichen sicher und spiegelt den Stand nach `/aiacteu/` auf deinen IONOS Webspace.

---

## 🇪🇺 EU AI Act Compliance

- **Art. 50 Transparenz:** Automatische Kennzeichnung KI-generierter Artikel und Grafiken mit dem `AI GENERATED` / `EU AI ACT ART. 50` Siegel.
- **Art. 53 Transparenz-Register (`/verzeichnis`):** Verzeichnis der Top 10 KI-Frontier-Modelle (Claude 3.5 Sonnet, OpenAI o1/o3-mini, DeepSeek-R1, GPT-4o etc.) mit Knowledge Cutoff-Stichtagen und aufklappbarer Herkunfts-Aufschlüsselung nach 4 Quellen-Kategorien (Web, Bücher, Code, Medien).
