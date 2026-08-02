# Design-System

Entscheidung getroffen: 02.08.2026 (Action Item #1 aus PROJEKTPLAN.md). Basiert auf den
bereits im Frontend implementierten CSS-Variablen (`frontend/src/app/globals.css`).

## Farbpalette

| Token | Light | Dark | Verwendung |
|---|---|---|---|
| `--background` | `#ffffff` | `#0b1120` | Seitenhintergrund |
| `--foreground` | `#0f172a` | `#e2e8f0` | Fließtext, Überschriften |
| `--surface` | `#f8fafc` | `#111827` | Cards, Sidebar-Widgets |
| `--border` | `#e2e8f0` | `#1f2937` | Trennlinien, Card-Rahmen |
| `--primary` | `#4f46e5` (Indigo) | `#818cf8` | Links, Buttons, Logo-Badge |
| `--primary-foreground` | `#ffffff` | `#0b1120` | Text auf Primary-Flächen |
| `--accent` | `#f59e0b` (Amber) | `#fbbf24` | Breaking-News-Marker, Hervorhebungen |
| `--muted` | `#64748b` | `#94a3b8` | Sekundärtext, Meta-Infos, Nav-Links |

Dark Mode wird über `:root[data-theme="dark"]` UND `prefers-color-scheme: dark` gesteuert
(System-Präferenz als Default, manueller Toggle überschreibt via `data-theme`-Attribut).

## Typografie

- **Schriftart**: Geist Sans (`--font-geist-sans`) für Fließtext/UI, Geist Mono
  (`--font-geist-mono`) für Code/technische Werte (z. B. Timestamps, IDs).
- **Skala**: Tailwind-Defaultskala (`text-sm` … `text-4xl`), keine Custom-Skala im MVP.
- **Headings**: `font-semibold`, `tracking-tight` für Hero/Section-Titel.
- **Line-Height**: `leading-relaxed` für Artikel-Summaries (bessere Lesbarkeit bei Fließtext).

## Layout & Spacing

- **Max-Width**: `max-w-6xl` für Seiteninhalt (Header/Footer/Main konsistent).
- **Grid**: 7-Kategorien-Grid `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`.
- **Abstände**: Tailwind-Spacing-Skala (4/6/8/10/16), keine Custom-Werte.
- **Sticky Header**: `sticky top-0 z-40` mit `backdrop-blur` (bereits implementiert).

## Komponenten-Patterns

### Card (Artikel/Kategorie)
- `bg-surface`, `border border-border`, `rounded-lg`, Hover: `border-primary/40` + leichte
  Schatten-Transition.
- Kein Box-Shadow im Ruhezustand (flaches, ruhiges News-Layout), Shadow nur on-hover.

### Badges / Tags (EU-Verhaltenskodex-Kennzeichnung)
Pflicht-Badges auf jeder Artikel-Card (siehe COMPLIANCE.md):
- **EU-KI-Kennzeichnungs-Icon** ("AI GENERATED", `components/AiGeneratedLabel.tsx`) – wenn
  `aiGenerated: true`. Icon-Vorlage angelehnt an die EU-Seite zur Kennzeichnung KI-generierter
  Inhalte; Light-/Dark-Variante schaltet automatisch per Theme um (`ai-label-light`/
  `ai-label-dark`-Klassen in `globals.css`).
- `✓ Redaktionell geprüft` – wenn `humanReviewed: true`
- `⚙️ Automatisiert` – wenn `humanReviewed: false`

Badge-Style (Redaktions-Badges): `text-xs`, `rounded-full`, `px-2.5 py-0.5`,
`border border-border`, Hintergrund `bg-surface`.

### Buttons
- **Primary**: `bg-primary text-primary-foreground rounded-md`, Hover: leichtes Abdunkeln.
- **Secondary/Outline**: `border border-border text-muted hover:text-foreground`.

### Navigation
- Aktiver Link: `text-foreground font-medium`; inaktiv: `text-muted`.

## Responsive Design

- Mobile-First; Nav klappt bei `md:` zu horizontalem Menü aus (aktuell `hidden md:flex` –
  Mobile-Menü/Hamburger ist offener Punkt für Phase 2, siehe unten).
- Touch-Targets ≥ 44px Höhe für Buttons/Links auf Mobile.

## Accessibility (WCAG 2.1 AA)

- Farbkontraste der obigen Token wurden gegen WCAG AA (4.5:1 für Text) gewählt
  (Foreground/Background-Paare).
- Alle interaktiven Elemente brauchen sichtbaren `:focus-visible`-Ring
  (`focus-visible:ring-2 focus-visible:ring-primary`).
- Sprach-Toggle, Dark-Mode-Toggle etc. benötigen `aria-label`.

## Offene Punkte für Phase 2/4

- Mobile-Hamburger-Menü für Header-Navigation
- Logo als echtes Icon/SVG statt Text-Badge "AI"
- Illustrations-/Icon-Set für Kategorien (aktuell Emoji als Platzhalter)
