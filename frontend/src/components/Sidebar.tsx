import { articles, getTopTags } from "@/lib/articles";
import { GlassCard } from "@/components/ui/GlassCard";

function WidgetCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <GlassCard className="p-5">
      <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted">{title}</h2>
      {children}
    </GlassCard>
  );
}

export function Sidebar() {
  const trendingTags = getTopTags(articles, 8);

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
