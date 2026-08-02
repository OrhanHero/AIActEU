import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/lib/articles";
import { ArticleCard } from "@/components/ArticleCard";

export const metadata: Metadata = {
  title: "Suche",
  description: "Artikel nach Titel, Zusammenfassung oder Tags durchsuchen.",
};

function search(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return articles.filter(
    (article) =>
      article.title.toLowerCase().includes(q) ||
      article.summary.toLowerCase().includes(q) ||
      article.tags.some((tag) => tag.toLowerCase().includes(q))
  );
}

type Props = {
  searchParams: Promise<{ q?: string }>;
};

export default async function SearchPage({ searchParams }: Props) {
  const { q = "" } = await searchParams;
  const results = search(q);

  return (
    <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="mb-2 text-3xl font-semibold tracking-tight text-foreground">Suche</h1>
      <p className="mb-8 text-muted leading-relaxed">
        {q ? (
          <>
            {results.length} Treffer für &bdquo;{q}&ldquo;
          </>
        ) : (
          "Bitte einen Suchbegriff eingeben."
        )}
      </p>

      {q && results.length === 0 && (
        <p className="text-muted">
          Keine Treffer. Versuche einen anderen Begriff oder stöbere in den{" "}
          <Link href="/kategorien" className="text-primary hover:underline">
            Kategorien
          </Link>
          .
        </p>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        {results.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
