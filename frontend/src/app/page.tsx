import Link from "next/link";
import { categories } from "@/lib/categories";
import { getBreakingArticles, getEditorsPicks, getLatestArticles } from "@/lib/articles";
import { ArticleCard } from "@/components/ArticleCard";
import { CategoryCard } from "@/components/CategoryCard";
import { Sidebar } from "@/components/Sidebar";
import { LiveIndicator } from "@/components/LiveIndicator";
import { GlassCard } from "@/components/ui/GlassCard";

export default function Home() {
  const breaking = getBreakingArticles();
  const editorsPicks = getEditorsPicks();
  const latest = getLatestArticles(6);

  return (
    <div className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Banner */}
      <section className="relative mb-12 overflow-hidden">
        {/* Animated Background Mesh Glows */}
        <div
          className="pointer-events-none absolute -left-20 -top-20 h-96 w-96 animate-float rounded-full bg-indigo-500/20 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-20 top-10 h-96 w-96 animate-float rounded-full bg-cyan-500/20 blur-3xl [animation-delay:-4s]"
          aria-hidden
        />

        <GlassCard className="relative p-6 sm:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <LiveIndicator />
            <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[11px] font-semibold text-primary">
              EU AI ACT COMPLIANT PLATFORM
            </span>
          </div>

          <h1 className="mt-6 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Zentrale KI-News, Hardware &amp; Compliance
            </span>
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            Kuratierte Nachrichten und wissenschaftliche Einblicke für den deutschsprachigen KI-Sektor – von Hardware &amp; Silicon über LLMs und RAG bis EU-Verhaltenskodex-konformer Kennzeichnung. Erfahre mehr unter{" "}
            <Link href="/compliance" className="font-semibold text-primary underline underline-offset-4 hover:text-cyan-400">
              Compliance &amp; Transparenz
            </Link>
            .
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-8 grid grid-cols-2 gap-4 border-t border-border/80 pt-6 sm:grid-cols-4">
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">24/7 Feed</span>
              <span className="text-xs text-muted">Real-Time Ingestion</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary">Artikel 50</span>
              <span className="text-xs text-muted">EU AI Act Kennzeichnung</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">Hardware &amp; Silicon</span>
              <span className="text-xs text-muted">NVIDIA, AMD, Exascale</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">12 Kategorien</span>
              <span className="text-xs text-muted">Forschung, Business &amp; Tools</span>
            </div>
          </div>

          {/* Breaking News Section inside Hero */}
          {breaking.length > 0 && (
            <div className="mt-10 flex flex-col gap-4 border-t border-border/80 pt-8">
              <div className="flex items-center justify-between">
                <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-accent">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-accent animate-ping" aria-hidden />
                  🚨 Breaking News &amp; Eilmeldungen
                </h2>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {breaking.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            </div>
          )}
        </GlassCard>
      </section>

      {/* Main Grid: Content & Sidebar */}
      <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
        <div className="flex flex-col gap-12">
          {/* Kategorien Overview */}
          <section>
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground">Themenbereiche &amp; Kategorien</h2>
                <p className="text-xs text-muted">Entdecke alle 12 Fachkategorien des AIActEU Hubs</p>
              </div>
              <Link href="/kategorien" className="text-sm font-semibold text-primary transition-all hover:translate-x-1 hover:underline">
                Alle 12 Kategorien →
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <CategoryCard key={category.slug} category={category} />
              ))}
            </div>
          </section>

          {/* Editor's Picks */}
          {editorsPicks.length > 0 && (
            <section>
              <div className="mb-6">
                <h2 className="text-2xl font-bold tracking-tight text-foreground">⭐ Redaktionsempfehlungen (Editor&apos;s Picks)</h2>
                <p className="text-xs text-muted">Besonders relevante Analysen und Berichte für die KI-Praxis</p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {editorsPicks.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            </section>
          )}

          {/* Trending / Neueste Artikel */}
          <section>
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground">⚡ Neueste Entwicklungen</h2>
                <p className="text-xs text-muted">Aktuelle Beiträge aus verifizierten KI-Quellen</p>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {latest.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </section>
        </div>

        <Sidebar />
      </div>
    </div>
  );
}
