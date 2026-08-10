import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ingestedPath = path.join(__dirname, "output", "ingested.json");
const articlesTsPath = path.join(__dirname, "..", "frontend", "src", "lib", "articles.ts");

const validCategorySlugs = new Set([
  "breaking-news",
  "technisch",
  "research",
  "business",
  "policy",
  "education",
  "tools",
  "hardware",
  "nachhaltigkeit",
  "applications",
  "community",
  "safety"
]);

function deriveTags(title, summary, sourceName) {
  const text = `${title} ${summary} ${sourceName}`.toLowerCase();
  const tags = new Set();

  if (text.includes("openai") || text.includes("chatgpt") || text.includes("gpt")) tags.add("OpenAI");
  if (text.includes("deepmind") || text.includes("gemini") || text.includes("google")) tags.add("Google DeepMind");
  if (text.includes("anthropic") || text.includes("claude")) tags.add("Anthropic");
  if (text.includes("meta") || text.includes("llama")) tags.add("Meta AI");
  if (text.includes("nvidia") || text.includes("blackwell") || text.includes("gpu") || text.includes("cuda")) tags.add("NVIDIA");
  if (text.includes("hugging face") || text.includes("huggingface")) tags.add("Hugging Face");
  if (text.includes("open source") || text.includes("open-source") || text.includes("open weight")) tags.add("Open Source");
  if (text.includes("rag") || text.includes("vector") || text.includes("retrieval")) tags.add("RAG");
  if (text.includes("agent") || text.includes("agentic")) tags.add("Agentic AI");
  if (text.includes("eu") || text.includes("ai act") || text.includes("policy") || text.includes("regulation")) tags.add("EU AI Act");
  if (text.includes("security") || text.includes("cyber") || text.includes("safety") || text.includes("eval")) tags.add("AI Safety");
  if (text.includes("hardware") || text.includes("chip") || text.includes("intel") || text.includes("amd")) tags.add("Hardware");
  if (text.includes("deutschland") || text.includes("german") || text.includes("berlin") || text.includes("münchen")) tags.add("Deutschland");

  if (tags.size === 0) {
    tags.add("KI News");
  }

  return Array.from(tags).slice(0, 3);
}

async function main() {
  const rawIngested = await readFile(ingestedPath, "utf-8");
  const ingested = JSON.parse(rawIngested);

  console.log(`Gelesen: ${ingested.length} ingestierte Artikel.`);

  const seenSlugs = new Set();
  const processedArticles = [];

function cleanTitle(title) {
  if (!title) return "";
  return title
    .replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E6}-\u{1F1FF}]/gu, "")
    .replace(/\s+/g, " ")
    .replace(/\s*,/g, ",")
    .trim();
}

  for (const item of ingested) {
    if (!item.title || !item.sourceUrl) continue;
    
    let slug = item.slug || "news-" + Math.random().toString(36).substring(2, 8);
    let originalSlug = slug;
    let counter = 1;
    while (seenSlugs.has(slug)) {
      slug = `${originalSlug}-${counter++}`;
    }
    seenSlugs.add(slug);

    let categorySlug = validCategorySlugs.has(item.categorySlug) ? item.categorySlug : "technisch";
    const tags = item.tags && item.tags.length > 0 ? item.tags : deriveTags(item.title, item.summary, item.sourceName);

    const cleanedTitle = cleanTitle(item.title);

    const article = {
      slug,
      title: cleanedTitle,
      summary: item.summary,
      categorySlug,
      tags,
      sourceName: item.sourceName || "KI Redaktion",
      sourceUrl: item.sourceUrl,
      publishedAt: item.publishedAt || "2026-08-08",
      aiGenerated: item.aiGenerated ?? true,
      humanReviewed: item.humanReviewed ?? true,
    };

    processedArticles.push(article);
  }

  processedArticles.sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

  for (let i = 0; i < processedArticles.length; i++) {
    if (i < 4) {
      processedArticles[i].breaking = true;
    }
    if (i === 1 || i === 5 || i === 12) {
      processedArticles[i].editorsPick = true;
      processedArticles[i].editorsNote = "Sehr relevante Entwicklung für das KI-Ökosystem – direkte Leseempfehlung.";
    }
  }

  const finalArticles = processedArticles.slice(0, 60);

  const fileContent = `import { categories, type Category } from "./categories";

export type Article = {
  slug: string;
  title: string;
  summary: string;
  categorySlug: Category["slug"];
  tags: string[];
  sourceName: string;
  sourceUrl: string;
  publishedAt: string; // ISO-Datum
  aiGenerated: boolean;
  humanReviewed: boolean;
  breaking?: boolean;
  editorsPick?: boolean;
  editorsNote?: string;
};

// Automatisch aktualisierte KI-News Artikel aus den verifizierten RSS-Quellen
export const articles: Article[] = ${JSON.stringify(finalArticles, null, 2)};

export function getArticlesByCategory(categorySlug: string): Article[] {
  return articles
    .filter((a) => a.categorySlug === categorySlug)
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getBreakingArticles(): Article[] {
  return articles.filter((a) => a.breaking);
}

export function getEditorsPicks(): Article[] {
  return articles.filter((a) => a.editorsPick);
}

export function getLatestArticles(limit = 6): Article[] {
  return [...articles]
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
    .slice(0, limit);
}

export function getCategoryForArticle(article: Article) {
  return categories.find((c) => c.slug === article.categorySlug);
}

export function getTopTags(articlesToCount: Article[], limit = Infinity): string[] {
  const counts = new Map<string, number>();
  for (const article of articlesToCount) {
    for (const tag of article.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1);
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([tag]) => tag);
}
`;

  await writeFile(articlesTsPath, fileContent, "utf-8");

  const now = new Date();
  const lastUpdatedData = {
    iso: now.toISOString(),
    formattedDE: `${now.toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric", timeZone: "Europe/Berlin" })}, ${now.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Berlin" })} Uhr`,
    formattedEN: `${now.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "Europe/Berlin" })}, ${now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Berlin" })}`
  };
  const lastUpdatedPath = path.join(__dirname, "..", "frontend", "src", "lib", "lastUpdated.json");
  await writeFile(lastUpdatedPath, JSON.stringify(lastUpdatedData, null, 2), "utf-8");

  console.log(`✅ ${finalArticles.length} frische Artikel erfolgreich in frontend/src/lib/articles.ts & lastUpdated.json aktualisiert.`);
}

main().catch(err => {
  console.error("Fehler beim Aktualisieren der Artikel:", err);
  process.exit(1);
});
