import type { Metadata } from "next";
import Link from "next/link";
import { getSourcesByType, sources, verifiedSourceCount, type Source } from "@/lib/sources";
import { categories } from "@/lib/categories";
import lastUpdated from "@/lib/lastUpdated.json";
import { GlassCard } from "@/components/ui/GlassCard";

export const metadata: Metadata = {
  title: "Quellen",
  description:
    "Transparentes Quellenverzeichnis der AIActEU-Ingestion-Pipeline: alle RSS-/API-Feeds mit Prüfstatus, Prüfdatum und Kategorie-Zuordnung.",
};

const categoryTitle = (slug: string) => categories.find((c) => c.slug === slug)?.title ?? slug;

function feedHost(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function formatDate(iso?: string): string | null {
  if (!iso) return null;
  const [y, m, d] = iso.split("-");
  return y && m && d ? `${d}.${m}.${y}` : iso;
}

function formatInterval(minutes?: number): string | null {
  if (!minutes) return null;
  if (minutes < 60) return `alle ${minutes} Min.`;
  if (minutes % 1440 === 0) return minutes === 1440 ? "täglich" : `alle ${minutes / 1440} Tage`;
  return minutes === 60 ? "stündlich" : `alle ${Math.round(minutes / 60)} Std.`;
}

function StatusBadge({ verified }: { verified?: boolean }) {
  return verified ? (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--status-ok)]/40 bg-[var(--status-ok)]/10 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-[var(--status-ok)]">
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--status-ok)]" aria-hidden />
      Verifiziert
    </span>
  ) : (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--status-warn)]/40 bg-[var(--status-warn)]/10 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-[var(--status-warn)]">
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--status-warn)]" aria-hidden />
      Nicht aktiv
    </span>
  );
}

function SourceRow({ source }: { source: Source }) {
  const checked = formatDate(source.lastCheckedAt);
  const interval = formatInterval(source.refreshIntervalMinutes);
  const note = source.checkNote ?? source.scopeNote;
  return (
    <li className="flex flex-col gap-2 border-b border-border/60 py-3 last:border-b-0 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-semibold text-foreground">{source.displayName ?? source.name}</span>
          <StatusBadge verified={source.verified} />
          {source.requiresTopicFilter && (
            <span
              className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted"
              title="Allgemeine Quelle – es werden nur KI-relevante Beiträge übernommen"
            >
              KI-Filter
            </span>
          )}
        </div>
        <a
          href={source.feedUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-0.5 inline-block break-all font-mono text-xs text-muted transition-colors hover:text-primary"
        >
          {feedHost(source.feedUrl)}
        </a>
        {note && <p className="mt-1 text-xs leading-relaxed text-muted">{note}</p>}
      </div>
      <dl className="flex shrink-0 flex-wrap gap-x-4 gap-y-1 font-mono text-[11px] text-muted sm:flex-col sm:items-end sm:text-right">
        <div>
          <dt className="sr-only">Kategorie</dt>
          <dd>
            <Link href={`/kategorien/${source.category}`} className="text-primary hover:underline">
              {categoryTitle(source.category)}
            </Link>
          </dd>
        </div>
        {interval && (
          <div>
            <dt className="sr-only">Abrufintervall</dt>
            <dd>{interval}</dd>
          </div>
        )}
        {checked && (
          <div>
            <dt className="sr-only">Zuletzt geprüft</dt>
            <dd>geprüft {checked}</dd>
          </div>
        )}
      </dl>
    </li>
  );
}

export default function QuellenPage() {
  const groups = getSourcesByType();
  const total = sources.length;
  const ratio = total ? Math.round((verifiedSourceCount / total) * 100) : 0;

  return (
    <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="mb-2 text-3xl font-semibold tracking-tight text-foreground">Quellen</h1>
      <p className="mb-8 max-w-2xl leading-relaxed text-muted">
        Alle Feeds, die unsere Ingestion-Pipeline kennt – inklusive der Quellen, die aktuell nicht
        abgerufen werden. Nur <strong className="text-foreground">verifizierte</strong> Feeds
        (per HTTP geprüft, gültiges RSS/Atom) fließen in den Artikel-Feed ein. Jeder Artikel verlinkt
        zusätzlich direkt auf seine Originalquelle (siehe{" "}
        <Link href="/compliance" className="text-primary hover:underline">
          Compliance
        </Link>
        ).
      </p>

      {/* Kennzahlen */}
      <div className="mb-10 grid gap-4 sm:grid-cols-3">
        <GlassCard className="p-5">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted">Quellen gesamt</p>
          <p className="mt-1 text-3xl font-bold text-foreground">{total}</p>
        </GlassCard>
        <GlassCard className="p-5">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted">Aktiv &amp; verifiziert</p>
          <p className="mt-1 text-3xl font-bold text-[var(--status-ok)]">
            {verifiedSourceCount}
            <span className="ml-2 text-base font-medium text-muted">({ratio} %)</span>
          </p>
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-border/60" aria-hidden>
            <div className="h-full rounded-full bg-[var(--status-ok)]" style={{ width: `${ratio}%` }} />
          </div>
        </GlassCard>
        <GlassCard className="p-5">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted">Letzte Ingestion</p>
          <p className="mt-1 text-lg font-semibold text-foreground">
            <time dateTime={lastUpdated.iso}>{lastUpdated.formattedDE}</time>
          </p>
        </GlassCard>
      </div>

      {/* Inhaltsverzeichnis */}
      <nav aria-label="Quellentypen" className="mb-8 flex flex-wrap gap-2">
        {groups.map((g) => (
          <a
            key={g.type}
            href={`#${g.type}`}
            className="rounded-full border border-border px-3 py-1 text-xs text-muted transition-colors hover:border-primary/50 hover:text-foreground"
          >
            {g.label} <span className="font-mono">({g.items.filter((s) => s.verified).length}/{g.items.length})</span>
          </a>
        ))}
      </nav>

      <div className="flex flex-col gap-8">
        {groups.map((group) => (
          <section key={group.type} id={group.type} className="scroll-mt-24">
            <h2 className="mb-3 flex items-baseline gap-3 text-xl font-semibold tracking-tight text-foreground">
              {group.label}
              <span className="font-mono text-xs font-normal text-muted">
                {group.items.filter((s) => s.verified).length} von {group.items.length} aktiv
              </span>
            </h2>
            <GlassCard className="px-5 py-1">
              <ul>
                {group.items.map((source) => (
                  <SourceRow key={source.feedUrl} source={source} />
                ))}
              </ul>
            </GlassCard>
          </section>
        ))}
      </div>

      <p className="mt-10 text-xs leading-relaxed text-muted">
        Prüfung per <code className="font-mono">scripts/verify-sources.mjs</code>. Fehlt ein Feed oder
        ist eine Angabe veraltet? Hinweise gerne per{" "}
        <a
          href="https://github.com/OrhanHero/AIActEU/issues"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          GitHub-Issue
        </a>
        .
      </p>
    </div>
  );
}
