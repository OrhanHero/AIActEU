import { articles } from "@/lib/articles";

function getTrendingTags(limit = 8) {
  const counts = new Map<string, number>();
  for (const article of articles) {
    for (const tag of article.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([tag]) => tag);
}

function WidgetCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-lg border border-border bg-surface p-5">
      <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted">{title}</h2>
      {children}
    </section>
  );
}

export function Sidebar() {
  const trendingTags = getTrendingTags();

  return (
    <aside className="flex flex-col gap-6">
      <WidgetCard title="Newsletter">
        <p className="mb-3 text-sm text-muted leading-relaxed">
          Wöchentlicher Überblick über die wichtigsten KI-News – kuratiert von der Redaktion.
        </p>
        <form className="flex flex-col gap-2">
          <label htmlFor="newsletter-email" className="sr-only">
            E-Mail-Adresse
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="deine@email.de"
            className="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          />
          <button
            type="submit"
            disabled
            title="Newsletter-Versand folgt in Phase 2/4 (siehe PROJEKTPLAN.md)"
            className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground opacity-60 cursor-not-allowed"
          >
            Anmelden (bald verfügbar)
          </button>
          <p className="text-xs text-muted">
            Double-Opt-In, jederzeit abbestellbar. Siehe{" "}
            <a href="/datenschutz" className="hover:text-foreground underline">
              Datenschutz
            </a>
            .
          </p>
        </form>
      </WidgetCard>

      <WidgetCard title="Trending Themen">
        <ul className="flex flex-wrap gap-1.5">
          {trendingTags.map((tag) => (
            <li key={tag}>
              <span className="rounded-full border border-border px-2.5 py-1 text-xs text-muted">
                {tag}
              </span>
            </li>
          ))}
        </ul>
      </WidgetCard>

      <WidgetCard title="Events">
        <p className="text-sm text-muted leading-relaxed">
          Event-Kalender (AI-Konferenzen, Meetups, Workshops Deutschland) folgt in Phase 4.
        </p>
      </WidgetCard>

      <WidgetCard title="Podcast-Empfehlungen">
        <p className="text-sm text-muted leading-relaxed">
          Kuratierte Podcast- & Video-Empfehlungen folgen in Phase 4.
        </p>
      </WidgetCard>
    </aside>
  );
}
