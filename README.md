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
├── data/sources.json           RSS/API-Quellenliste für die Ingestion-Pipeline
├── data/tools-directory.json   Anbieter-Verzeichnis (Top 10 je Bereich), siehe /verzeichnis
└── data/benchmarks.json        Top-3-Benchmark-Plattformen, siehe /verzeichnis
```

## Status

Phase 2 (Core Content) – siehe [`PROJEKTPLAN.md`](./PROJEKTPLAN.md#-projektphasen).

## Setup (lokal)

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend (Strapi)
```bash
cd backend
npm install
npm run develop
```

Läuft lokal mit SQLite (kein separater DB-Server nötig); PostgreSQL ist für die
Produktivumgebung vorgesehen, siehe [`ARCHITECTURE.md`](./ARCHITECTURE.md) und
`backend/.env.example`.
