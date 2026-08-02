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
