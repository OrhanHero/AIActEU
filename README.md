# AIActEU – KI News Hub

Zentrale, kuratierte Nachrichtenplattform für den deutschsprachigen KI-Sektor mit EU-Verhaltenskodex-konformer Kennzeichnung von KI-generierten/-kuratierten Inhalten.

Der vollständige Projektplan steht in [`PROJEKTPLAN.md`](./PROJEKTPLAN.md).

## Projektstruktur

```
.
├── frontend/    Next.js (App Router) + TypeScript + Tailwind CSS
├── backend/     Strapi Headless CMS (SQLite lokal, PostgreSQL in Produktion)
├── scripts/     Standalone Ingestion-/Wartungs-Skripte (RSS-Verifikation, Ingestion)
├── ARCHITECTURE.md            Technische Architekturentscheidungen
├── DESIGN.md                  Design-System (Farben, Typografie, Komponenten)
├── COMPLIANCE.md               EU-Verhaltenskodex- & DSGVO-Checkliste
├── EDITORIAL_POLICY.md         Kuratierungs- und Faktencheck-Richtlinien
├── data/sources.json           RSS/API-Quellenliste für die Ingestion-Pipeline (56 Quellen, inkl. Hardware & Silicon)
├── data/tools-directory.json   Anbieter-Verzeichnis (165 Anbieter über 15 Domänen), siehe /verzeichnis
├── data/benchmarks.json        Top-3-Benchmark-Plattformen, siehe /verzeichnis
├── data/publications.json      Kuratierte Forschungsberichte/Papers (Umwelt-Fußabdruck, KI-Landschaft & Sicherheit), siehe /publikationen
└── Docs/📋 AIActEU.docx        Master-Projektplan v2 (Hardware-Erweiterung, Tutorials)
```

## Status

Phase 2 (Core Content & Hardware-Erweiterung) – siehe [`PROJEKTPLAN.md`](./PROJEKTPLAN.md#-projektphasen).
12 Hauptkategorien (inkl. "Hardware & Silicon", "Nachhaltigkeit & Umwelt-Impact", "Applications
& Use Cases", "Community, Events & Ecosystem", "Safety, Alignment & Governance"); `/tutorials`
bietet MDX-Guides für lokale
KI-Setups (Ollama, Open WebUI/LM Studio/Jan.ai, Private RAG, Continue.dev,
ComfyUI/Automatic1111, Faster-Whisper).

## Setup (lokal)

### Frontend
```bash
cd frontend
npm install
npm run dev
```

Wichtigste Routen: `/` (Start), `/kategorien` (Übersicht + `/kategorien/[slug]` mit
Tag-Filter), `/tutorials` (MDX-Guides für lokale KI + `/tutorials/[slug]`), `/publikationen`
(kuratierte Forschungsberichte), `/suche` (Volltextsuche), `/verzeichnis` (Anbieter- &
Benchmark-Verzeichnis), `/compliance`, `/ueber-uns`, `/impressum`, `/datenschutz`.

### Backend (Strapi)
```bash
cd backend
npm install
npm run develop
```

Läuft lokal mit SQLite (kein separater DB-Server nötig); PostgreSQL ist für die
Produktivumgebung vorgesehen, siehe [`ARCHITECTURE.md`](./ARCHITECTURE.md) und
`backend/.env.example`. Beim ersten Start werden Kategorien/Artikel automatisch aus
`backend/data/seed-*.json` geseedet und öffentliche Lese-Rechte für die Artikel-/
Kategorien-API gesetzt (`backend/src/index.ts`).

### Ingestion-Skripte
```bash
cd scripts
npm install
node verify-sources.mjs        # prüft alle Feeds in data/sources.json per echtem HTTP-Request
node ingest.mjs --limit 5      # zieht Artikel aus den ersten 5 verifizierten Quellen
```

Mit gesetztem `ANTHROPIC_API_KEY` erzeugt `ingest.mjs` zusätzlich KI-Zusammenfassungen
(`aiGenerated: true`); ohne Key wird der Rohtext des Feeds übernommen. Ergebnis landet in
`scripts/output/ingested.json` (nicht versioniert) und muss vor einer Übernahme in Strapi
redaktionell geprüft werden, siehe [`EDITORIAL_POLICY.md`](./EDITORIAL_POLICY.md).
