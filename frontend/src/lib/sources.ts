import sourcesData from "@/data/sources.json";

/**
 * Quellenverzeichnis der Ingestion-Pipeline.
 *
 * Bewusst OHNE eigene Kopie unter frontend/data/: der Alias "@/data/*" faellt
 * laut tsconfig.json auf "../data/*" zurueck, sodass hier dieselbe Datei gelesen
 * wird, die auch scripts/ingest.mjs und scripts/verify-sources.mjs pflegen.
 * Eine frueher vorhandene Zweitkopie war unbemerkt veraltet (24 statt 25
 * verifizierte Quellen, alter Golem-Name) - genau die Zahl, die auf der
 * Startseite als "Verifizierte RSS-Quellen" fest im Markup stand.
 */
export type Source = {
  name: string;
  displayName?: string;
  type: string;
  category: string;
  feedUrl: string;
  verified?: boolean;
  requiresTopicFilter?: boolean;
  refreshIntervalMinutes?: number;
  lastCheckedAt?: string;
  checkNote?: string;
  scopeNote?: string;
  domain?: string;
};

export const sources: Source[] = sourcesData.sources;

/** Anzahl der als erreichbar verifizierten Feeds - Kennzahl auf der Startseite. */
export const verifiedSourceCount: number = sources.filter((s) => s.verified).length;

/** Lesbare Bezeichnungen fuer die Quellentypen aus sources.json (Seite /quellen). */
export const sourceTypeLabels: Record<string, string> = {
  "lab-blog": "Lab-Blogs",
  "dev-blog": "Developer-Blogs",
  paper: "Papers & Forschung",
  "de-quelle": "Deutsche Quellen",
  startup: "Startup & Business",
  policy: "Policy & Regulierung",
  newsletter: "Newsletter",
  "legal-tech": "Legal Tech",
};

/** Quellen nach Typ gruppiert, Reihenfolge wie in sourceTypeLabels, verifizierte zuerst. */
export function getSourcesByType(): { type: string; label: string; items: Source[] }[] {
  const types = [
    ...Object.keys(sourceTypeLabels),
    ...new Set(sources.map((s) => s.type).filter((t) => !(t in sourceTypeLabels))),
  ];
  return types
    .map((type) => ({
      type,
      label: sourceTypeLabels[type] ?? type,
      items: sources
        .filter((s) => s.type === type)
        .sort((a, b) => Number(!!b.verified) - Number(!!a.verified) || a.name.localeCompare(b.name, "de")),
    }))
    .filter((group) => group.items.length > 0);
}
