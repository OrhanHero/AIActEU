import Link from "next/link";
import { categories } from "@/lib/categories";
import { getBreakingArticles, getEditorsPicks, getLatestArticles } from "@/lib/articles";
import { ArticleCard } from "@/components/ArticleCard";
import { CategoryCard } from "@/components/CategoryCard";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  const breaking = getBreakingArticles();
  const editorsPicks = getEditorsPicks();
  const latest = getLatestArticles(6);

  return (
    <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
      {/* Hero */}
      <section className="mb-12">
        <h1 className="max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Was gibt&apos;s Neues in KI?
        </h1>
        <p className="mt-3 max-w-2xl text-muted leading-relaxed">
          Kuratierte KI-News für den deutschsprachigen Raum – von Forschung über Hardware &amp;
          Silicon bis Startups und Regulierung. Transparent gekennzeichnet nach dem
          EU-Verhaltenskodex, siehe{" "}
          <Link href="/compliance" className="text-primary hover:underline">
            Compliance
          </Link>
          .
        </p>

        {breaking.length > 0 && (
          <div className="mt-6 flex flex-col gap-3">
            <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-accent">
              <span className="inline-flex h-2 w-2 rounded-full bg-accent" aria-hidden />
              Breaking News
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {breaking.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        )}
      </section>

      <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
        <div className="flex flex-col gap-12">
          {/* Kategorien */}
          <section>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold tracking-tight text-foreground">Kategorien</h2>
              <Link href="/kategorien" className="text-sm text-primary hover:underline">
                Alle Kategorien →
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
              <h2 className="mb-4 text-xl font-semibold tracking-tight text-foreground">
                Editor&apos;s Picks
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {editorsPicks.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            </section>
          )}

          {/* Trending / Neueste Artikel */}
          <section>
            <h2 className="mb-4 text-xl font-semibold tracking-tight text-foreground">
              Trending diese Woche
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
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
