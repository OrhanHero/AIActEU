# Technische Architektur

Entscheidung getroffen: 02.08.2026 (Action Item #2 aus PROJEKTPLAN.md).

## Stack

| Layer | Wahl | Begründung |
|---|---|---|
| Frontend | **Next.js 14 (App Router) + TypeScript + Tailwind CSS** | Größtes Ökosystem für News-/Content-Seiten, ISR für schnelle News-Updates ohne Full-Rebuild, einfaches Vercel-Deployment, SSR für SEO |
| Backend/CMS | **Strapi (Headless CMS) + PostgreSQL** | Fertiges Admin-Panel für Artikel/Kategorien/Editor's-Picks, REST- und GraphQL-API out-of-the-box, spart eigenen CRUD-Code für den MVP |
| Datenbank | **PostgreSQL** | Von Strapi nativ unterstützt, robust für relationale Artikel/Kategorie/Tag-Struktur |
| Ingestion-Pipeline | **Node.js Cron-Jobs (Phase 2) → ggf. Python/Airflow (Phase 3+)** | Start einfach mit `node-cron` + RSS-Parser innerhalb eines Strapi-Plugins/Custom-Service; erst bei Skalierungsbedarf auf Airflow/Prefect wechseln |
| KI-Integration | **Anthropic Claude API** (Summarization, Tagging) | Lt. Plan primäre Wahl; via Strapi Lifecycle-Hooks beim Artikel-Import angebunden |
| Suche | **Postgres Full-Text-Search (MVP) → Vector Search (Phase 3)** | Kein Elasticsearch/Qdrant-Overhead für den MVP; erst bei Bedarf für semantische Suche nachziehen |
| Hosting | **Vercel (Frontend) + Hetzner/EU-Cloud (Strapi + Postgres)** | EU-Datenresidenz für Compliance, Vercel für Frontend-Performance/CDN |
| CI/CD | **GitHub Actions** | Lint/Typecheck/Build auf jeden PR, Deploy auf Merge in `main` |

## Monorepo-Struktur

```
/frontend    Next.js App (Consumer-facing Website)
/backend     Strapi Instanz (Content-API, Admin-Panel)
/data        Statische Konfigurationsdaten (RSS-Quellen etc.)
```

Kein gemeinsames Package-Management (kein Turborepo/Nx) im MVP – beide Teile haben unabhängige `package.json`, um die Komplexität niedrig zu halten. Re-Evaluierung in Phase 3, falls geteilter Code (z. B. TypeScript-Typen für Artikel-Schema) nötig wird.

## Content-Modell (Strapi Collection Types, Phase 2)

- `Article` (title, slug, summary, body, sourceUrl, sourceName, category, tags[], publishedAt, aiGenerated: boolean, humanReviewed: boolean)
- `Category` (7 Hauptkategorien lt. Plan, mit Subkategorien als Tags statt eigenem Content-Type für MVP-Einfachheit)
- `Source` (name, feedUrl, type: lab-blog|newsletter|paper|dev-blog|de-quelle|startup|policy, refreshIntervalMinutes)

## Offene Punkte für Phase 2

- Entscheidung: Strapi-Plugin vs. externer Worker-Service für RSS-Ingestion
- Rate-Limiting-Strategie für Claude-API-Aufrufe bei Batch-Summarization
- Caching-Strategie Frontend (ISR-Intervall pro Kategorie-Seite)
