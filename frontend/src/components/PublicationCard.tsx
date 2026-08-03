import type { Publication } from "@/lib/publications";

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" }).format(
    new Date(iso)
  );
}

export function PublicationCard({ publication }: { publication: Publication }) {
  return (
    <a
      href={publication.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-2 rounded-lg border border-border bg-surface p-5 transition-colors hover:border-primary/40"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold leading-snug text-foreground group-hover:text-primary transition-colors">
          {publication.title}
        </h3>
        <span className="shrink-0 text-muted opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden>
          ↗
        </span>
      </div>
      <p className="text-xs text-muted">
        {publication.authors} · <time dateTime={publication.publishedDate}>{formatDate(publication.publishedDate)}</time>
      </p>
      <p className="text-sm leading-relaxed text-muted">{publication.summary}</p>
    </a>
  );
}
