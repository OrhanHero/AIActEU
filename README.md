# AIActEU – KI News Hub

Zentrale, kuratierte Nachrichtenplattform für den deutschsprachigen KI-Sektor mit EU-Verhaltenskodex-konformer Kennzeichnung von KI-generierten/-kuratierten Inhalten.

Der vollständige Projektplan steht in [`PROJEKTPLAN.md`](./PROJEKTPLAN.md).

## Projektstruktur

```
.
├── frontend/    Next.js (App Router) + TypeScript + Tailwind CSS
├── backend/     Strapi Headless CMS + PostgreSQL
├── ARCHITECTURE.md      Technische Architekturentscheidungen
├── DESIGN.md             Design-System (Farben, Typografie, Komponenten)
├── COMPLIANCE.md          EU-Verhaltenskodex- & DSGVO-Checkliste
├── EDITORIAL_POLICY.md    Kuratierungs- und Faktencheck-Richtlinien
└── data/sources.json      RSS/API-Quellenliste
```

## Status

Phase 1 (Foundations) – siehe [`PROJEKTPLAN.md`](./PROJEKTPLAN.md#-projektphasen).

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

Erfordert eine lokale PostgreSQL-Instanz, siehe `backend/.env.example`.
