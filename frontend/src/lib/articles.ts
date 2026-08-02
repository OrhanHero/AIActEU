import { categories, type Category } from "./categories";

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

// Platzhalter-Inhalte für die Frontend-Entwicklung (Phase 2), bis die
// Strapi-Ingestion-Pipeline (siehe ARCHITECTURE.md) produktiv ist. Struktur
// entspricht dem geplanten Content-Modell 1:1, damit der Umstieg auf echte
// API-Daten ohne UI-Änderungen möglich ist.
export const articles: Article[] = [
  {
    slug: "eu-ai-act-transparenzpflichten-2026",
    title: "EU AI Act: Transparenzpflichten für KI-Inhalte treten in Kraft",
    summary:
      "Ab August 2026 müssen Anbieter KI-generierte Inhalte klar kennzeichnen. Ein Überblick über die konkreten Pflichten für Medien- und Content-Plattformen.",
    categorySlug: "policy",
    tags: ["EU AI Act", "Regulierung", "Transparenz"],
    sourceName: "EU Digital Strategy",
    sourceUrl: "https://digital-strategy.ec.europa.eu/",
    publishedAt: "2026-08-01",
    aiGenerated: true,
    humanReviewed: true,
    breaking: true,
  },
  {
    slug: "claude-neues-agentic-release",
    title: "Anthropic stellt neue Agentic-Fähigkeiten für Claude vor",
    summary:
      "Verbesserte Tool-Use- und Planungsfähigkeiten sollen längere, autonome Workflows ermöglichen. Anthropic betont weiterhin Sicherheits- und Alignment-Fokus.",
    categorySlug: "technisch",
    tags: ["LLM", "Agentic AI", "Anthropic"],
    sourceName: "Anthropic News",
    sourceUrl: "https://www.anthropic.com/news",
    publishedAt: "2026-07-31",
    aiGenerated: true,
    humanReviewed: false,
    breaking: true,
  },
  {
    slug: "deutsches-ki-startup-serie-a",
    title: "Münchner KI-Startup sichert sich 18-Mio.-Euro-Series-A",
    summary:
      "Das Startup entwickelt Agentic-Workflows für die Fertigungsindustrie und will mit der Finanzierung die Expansion in weitere EU-Länder vorantreiben.",
    categorySlug: "business",
    tags: ["Funding", "Deutschland", "Industrie 4.0"],
    sourceName: "Gründerszene",
    sourceUrl: "https://www.gruenderszene.de/",
    publishedAt: "2026-07-30",
    aiGenerated: true,
    humanReviewed: false,
  },
  {
    slug: "mechanistic-interpretability-survey",
    title: "Neue Survey systematisiert Fortschritte in Mechanistic Interpretability",
    summary:
      "Ein Paper von Forscher:innen mehrerer Universitäten ordnet aktuelle Circuit- und Feature-Analyse-Methoden ein und benennt offene Probleme.",
    categorySlug: "research",
    tags: ["Interpretability", "AI Safety", "Paper"],
    sourceName: "arXiv cs.AI",
    sourceUrl: "https://arxiv.org/list/cs.AI/recent",
    publishedAt: "2026-07-29",
    aiGenerated: true,
    humanReviewed: false,
  },
  {
    slug: "rag-chunking-best-practices",
    title: "Chunking-Strategien für RAG-Systeme: Was 2026 wirklich funktioniert",
    summary:
      "Ein praxisnaher Vergleich semantischer, rekursiver und satzbasierter Chunking-Verfahren anhand aktueller Retrieval-Benchmarks.",
    categorySlug: "technisch",
    tags: ["RAG", "Vector Databases", "Best Practices"],
    sourceName: "LangChain Blog",
    sourceUrl: "https://blog.langchain.dev/",
    publishedAt: "2026-07-28",
    aiGenerated: true,
    humanReviewed: false,
  },
  {
    slug: "bmi-ki-gesetz-referentenentwurf",
    title: "BMI legt Referentenentwurf zur nationalen KI-Aufsicht vor",
    summary:
      "Der Entwurf regelt Zuständigkeiten für die Marktüberwachung nach dem EU AI Act auf Bundesebene. Verbände fordern klarere Fristen.",
    categorySlug: "policy",
    tags: ["Deutschland", "Gesetzgebung", "AI Act"],
    sourceName: "Bundesministerium des Innern",
    sourceUrl: "https://www.bmi.bund.de/",
    publishedAt: "2026-07-27",
    aiGenerated: true,
    humanReviewed: true,
  },
  {
    slug: "lokale-llms-ollama-quantisierung",
    title: "Ollama verbessert Quantisierung für Edge-Deployment",
    summary:
      "Neue Quantisierungsverfahren senken den Speicherbedarf gängiger Modelle spürbar, bei nur geringem Qualitätsverlust auf Consumer-Hardware.",
    categorySlug: "technisch",
    tags: ["Lokale LLMs", "Edge AI", "Quantization"],
    sourceName: "Ollama Blog",
    sourceUrl: "https://ollama.com/blog",
    publishedAt: "2026-07-26",
    aiGenerated: true,
    humanReviewed: false,
  },
  {
    slug: "huggingface-spaces-evaluation-suite",
    title: "Hugging Face erweitert Evaluation-Suite für Open-Source-Modelle",
    summary:
      "Neue Benchmarks decken Agentic-Tool-Use und mehrsprachige Aufgaben ab und sollen die Vergleichbarkeit von Leaderboard-Ergebnissen verbessern.",
    categorySlug: "tools",
    tags: ["Benchmarks", "Open Source", "Hugging Face"],
    sourceName: "Hugging Face Blog",
    sourceUrl: "https://huggingface.co/blog",
    publishedAt: "2026-07-25",
    aiGenerated: true,
    humanReviewed: false,
  },
  {
    slug: "fraunhofer-ki-mittelstand-studie",
    title: "Fraunhofer-Studie: KI-Adoption im deutschen Mittelstand stagniert",
    summary:
      "Trotz hoher Erwartungen scheitert der produktive Einsatz oft an Datenqualität und fehlenden internen Kompetenzen, zeigt eine neue Befragung.",
    categorySlug: "business",
    tags: ["Mittelstand", "Studie", "Adoption"],
    sourceName: "Fraunhofer-Institut",
    sourceUrl: "https://www.fraunhofer.de/",
    publishedAt: "2026-07-24",
    aiGenerated: true,
    humanReviewed: true,
    editorsPick: true,
    editorsNote:
      "Relevant für alle, die KI-Projekte im Mittelstand verantworten – zeigt konkrete Blocker jenseits der reinen Technologiefrage.",
  },
  {
    slug: "prompt-engineering-kurs-empfehlung",
    title: "Kostenloser Kurs: Fortgeschrittenes Prompt Engineering für Agentic Systems",
    summary:
      "Eine neue, kostenlose Kursreihe behandelt Planungsstrategien, Tool-Use-Patterns und Evaluationsmethoden für agentenbasierte LLM-Anwendungen.",
    categorySlug: "education",
    tags: ["Kurs", "Prompt Engineering", "Agentic AI"],
    sourceName: "DeepLearning.AI – The Batch",
    sourceUrl: "https://www.deeplearning.ai/the-batch/",
    publishedAt: "2026-07-23",
    aiGenerated: true,
    humanReviewed: false,
  },
  {
    slug: "vektor-db-vergleich-2026",
    title: "Vector-Database-Vergleich 2026: Latenz, Kosten, Skalierung",
    summary:
      "Ein aktualisierter Benchmark vergleicht Weaviate, Pinecone, Milvus und Chroma unter realistischen Produktions-Workloads.",
    categorySlug: "technisch",
    tags: ["RAG", "Vector Databases", "Benchmark"],
    sourceName: "Weights & Biases Blog",
    sourceUrl: "https://wandb.ai/site/",
    publishedAt: "2026-07-22",
    aiGenerated: true,
    humanReviewed: false,
  },
  {
    slug: "ki-jobs-nachfrage-europa",
    title: "Nachfrage nach ML-Engineering-Rollen in Europa weiter gestiegen",
    summary:
      "Aktuelle Arbeitsmarktdaten zeigen ein deutliches Plus bei Stellenausschreibungen für MLOps und Agentic-Engineering-Profile.",
    categorySlug: "business",
    tags: ["Jobs", "Karriere", "Europa"],
    sourceName: "TechCrunch",
    sourceUrl: "https://techcrunch.com/category/artificial-intelligence/",
    publishedAt: "2026-07-21",
    aiGenerated: true,
    humanReviewed: false,
  },
  {
    slug: "deepfake-erkennung-eu-projekt",
    title: "EU-Förderprojekt entwickelt Open-Source-Tool zur Deepfake-Erkennung",
    summary:
      "Das Konsortium aus mehreren Universitäten will die Erkennungsrate bei Video-Deepfakes verbessern und die Ergebnisse offen zugänglich machen.",
    categorySlug: "policy",
    tags: ["Deepfakes", "Misinformation", "EU-Förderung"],
    sourceName: "EU Digital Strategy",
    sourceUrl: "https://digital-strategy.ec.europa.eu/",
    publishedAt: "2026-07-20",
    aiGenerated: true,
    humanReviewed: true,
    editorsPick: true,
    editorsNote:
      "Gutes Beispiel für konstruktive Regulierung: Förderung statt reinem Verbot, mit offenem Tooling für die ganze Community.",
  },
  {
    slug: "multimodale-modelle-video-verstehen",
    title: "Neue multimodale Modelle verbessern Langzeit-Video-Verständnis",
    summary:
      "Aktuelle Forschung zeigt Fortschritte beim Verständnis mehrstündiger Videoinhalte – relevant für Überwachung, Bildung und Content-Analyse.",
    categorySlug: "research",
    tags: ["Multimodal", "Video", "Paper"],
    sourceName: "arXiv cs.CL",
    sourceUrl: "https://arxiv.org/list/cs.CL/recent",
    publishedAt: "2026-07-19",
    aiGenerated: true,
    humanReviewed: false,
  },
];

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
