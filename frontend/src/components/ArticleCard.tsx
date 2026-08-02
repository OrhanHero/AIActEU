import { getCategoryForArticle, type Article } from "@/lib/articles";
import { ComplianceBadges } from "./ComplianceBadges";

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" }).format(
    new Date(iso)
  );
}

export function ArticleCard({ article }: { article: Article }) {
  const category = getCategoryForArticle(article);

  return (
    <article className="group flex flex-col gap-3 rounded-lg border border-border bg-surface p-5 transition-colors hover:border-primary/40">
      <div className="flex items-center justify-between gap-2 text-xs text-muted">
        {category && (
          <span className="inline-flex items-center gap-1">
            <span aria-hidden>{category.emoji}</span>
            {category.title}
          </span>
        )}
        <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
      </div>

      <h3 className="text-lg font-semibold leading-snug tracking-tight text-foreground">
        {article.title}
      </h3>

      <p className="text-sm leading-relaxed text-muted">{article.summary}</p>

      {article.editorsNote && (
        <p className="rounded-md border border-accent/30 bg-accent/10 px-3 py-2 text-xs leading-relaxed text-foreground">
          <span className="font-medium">Editor&apos;s Pick:</span> {article.editorsNote}
        </p>
      )}

      <div className="flex flex-wrap gap-1.5 text-xs text-muted">
        {article.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-border px-2 py-0.5">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-1 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-3">
        <ComplianceBadges article={article} />
        <a
          href={article.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-primary hover:underline"
        >
          Quelle: {article.sourceName} ↗
        </a>
      </div>
    </article>
  );
}
