import { articles, getTopTags } from "@/lib/articles";
import { GlassCard } from "@/components/ui/GlassCard";
import Link from "next/link";

function WidgetCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <GlassCard className="p-6">
      <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-muted">{title}</h2>
      {children}
    </GlassCard>
  );
}

export function Sidebar() {
  const trendingTags = getTopTags(articles, 10);

  return (
    <aside className="flex flex-col gap-6">
      {/* EU Compliance Highlight Widget */}
      <GlassCard className="relative overflow-hidden p-6">
        <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/20 blur-2xl" />
        <div className="mb-3 flex items-center gap-2">
          <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            EU Compliance Verified
          </span>
        </div>
        <h3 className="text-base font-bold text-foreground">EU-Verhaltenskodex & Transparenz</h3>
        <p className="mt-2 text-xs leading-relaxed text-muted">
          Alle Beiträge sind transparent gemäß Artikel 50 des EU AI Act hinsichtlich KI-Generierung und humaner Redaktionsprüfung gekennzeichnet.
        </p>
        <Link
          href="/compliance"
          className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
        >
          Compliance-Richtlinien lesen →
        </Link>
      </GlassCard>

      {/* Trending Topics */}
      <WidgetCard title="🔥 Trending Themen">
        <ul className="flex flex-wrap gap-2">
          {trendingTags.map((tag) => (
            <li key={tag}>
              <span className="rounded-xl border border-border/80 bg-surface/80 px-3 py-1.5 text-xs font-medium text-muted transition-all duration-200 hover:border-primary/40 hover:text-foreground hover:shadow-sm">
                #{tag}
              </span>
            </li>
          ))}
        </ul>
      </WidgetCard>

      {/* Real-time Ingestion Metrics */}
      <WidgetCard title="⚡ Ingestion Pipeline">
        <div className="flex flex-col gap-3 text-xs text-muted">
          <div className="flex items-center justify-between border-b border-border/60 pb-2">
            <span>Aktive RSS-Quellen:</span>
            <span className="font-mono font-bold text-foreground">24 Verifiziert</span>
          </div>
          <div className="flex items-center justify-between border-b border-border/60 pb-2">
            <span>Live Artikel-Feed:</span>
            <span className="font-mono font-bold text-foreground">60 Top News</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Fokus-Region:</span>
            <span className="font-semibold text-primary">DACH & EU Sector</span>
          </div>
        </div>
      </WidgetCard>
    </aside>
  );
}
