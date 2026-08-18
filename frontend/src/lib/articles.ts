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
  // Optionale Primaerquelle hinter einer Meldung, z.B. das zugehoerige Paper -
  // gesetzt ueber data/featured.json.
  studyUrl?: string;
  studyLabel?: string;
  // Weiterfuehrendes Quellen-Dossier einer kuratierten Hauptstory. Die Gruppe
  // steuert Reihenfolge und Ueberschrift der Darstellung in der Hero-Sektion.
  relatedLinks?: RelatedLink[];
};

export type RelatedLinkGroup = "berichterstattung" | "community" | "hintergrund";

export type RelatedLink = {
  group: RelatedLinkGroup;
  sourceName: string;
  label: string;
  url: string;
};

// Automatisch aktualisierte KI-News Artikel aus den verifizierten RSS-Quellen
// plus die redaktionell kuratierten Hauptstories aus data/featured.json
export const articles: Article[] = [
  {
    "slug": "openai-loest-preparedness-team-fuer-ki-risiken-auf",
    "title": "OpenAI löst Preparedness-Team für KI-Risiken auf: Umstrukturierung sorgt für Debatte",
    "summary": "OpenAI hat sein eigenständiges 'Preparedness'-Team für KI-Risiken aufgelöst und die Zuständigkeiten in allgemeine Forschungsteams integriert. Das Team war maßgeblich dafür verantwortlich, katastrophale Risiken moderner Frontier-Modelle zu bewerten und Sicherheitsgrenzen zu definieren. Die Umstrukturierung erfolgt unmittelbar nach dem Durchsetzungsstart des EU AI Act und löst in der internationalen Sicherheitsforschung sowie unter europäischen Regulierungsbehörden Debatten über die künftige Governance von KI-Systemen mit Systemrisiko aus.",
    "categorySlug": "safety",
    "tags": [
      "AI Safety",
      "OpenAI",
      "EU AI Act"
    ],
    "sourceName": "Heise Online",
    "sourceUrl": "https://www.heise.de/news/OpenAI-loest-Preparedness-Team-fuer-KI-Risiken-auf-11416601.html",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": true,
    "editorsNote": "Hauptstory der Woche: Die Umstrukturierung der Sicherheitsarchitektur bei OpenAI fällt zeitlich direkt mit der Inkraftsetzung des EU AI Act zusammen. Sie stellt Fragen an die künftige Governance und Risikoevaluierung von Frontier-Modellen mit Systemrisiko.",
    "relatedLinks": [
      {
        "group": "berichterstattung",
        "sourceName": "Heise Online",
        "label": "OpenAI löst Preparedness-Team für KI-Risiken auf",
        "url": "https://www.heise.de/news/OpenAI-loest-Preparedness-Team-fuer-KI-Risiken-auf-11416601.html"
      },
      {
        "group": "berichterstattung",
        "sourceName": "TechCrunch",
        "label": "OpenAI reorganizes AI safety divisions as EU AI Act takes effect",
        "url": "https://techcrunch.com/category/artificial-intelligence/"
      },
      {
        "group": "hintergrund",
        "sourceName": "Europäische Kommission",
        "label": "EU AI Act: Regelungen und Governance für General-Purpose AI mit Systemrisiko",
        "url": "https://ec.europa.eu/commission/presscorner/detail/de/ip_26_1714"
      }
    ],
    "breaking": true,
    "editorsPick": true
  },
  {
    "slug": "claude-wasserzeichen-nutzer-kritisieren-anthropic",
    "title": "Claude: Nutzer äußern wegen des neuen Wasserzeichens Kritik an Anthropic",
    "summary": "Anthropic versieht die Textausgaben von Claude seit August 2026 mit einem unsichtbaren, maschinenlesbaren Wasserzeichen – ein für Menschen nicht wahrnehmbares Muster, das direkt im Text steckt und auch das Kopieren und Einfügen an anderer Stelle übersteht; bei Dateien kommt zusätzlich signierte Herkunfts-Metadatierung nach dem C2PA-Standard hinzu. Ausgerollt wird die Kennzeichnung nicht nur in der EU, sondern weltweit und über alle Claude-Produkte hinweg. Auslöser sind die seit dem 2. August 2026 durchgesetzten Transparenzpflichten des EU AI Act. In der Nutzerschaft löst der Schritt eine Kontroverse aus: Ein Teil fürchtet, dass Arbeitgeber und Hochschulen den KI-Einsatz nun nachweisen können, ein anderer begrüßt die Kennzeichnung ausdrücklich als Mittel gegen verschleierten KI-Einsatz.",
    "categorySlug": "policy",
    "tags": [
      "Anthropic",
      "EU AI Act",
      "Transparenz"
    ],
    "sourceName": "t3n",
    "sourceUrl": "https://t3n.de/news/claude-wasserzeichen-nutzer-kritisieren-anthropic-1757852/",
    "publishedAt": "2026-08-13",
    "aiGenerated": true,
    "humanReviewed": false,
    "editorsNote": "Direkt anschlussfähig an die Hauptstory darunter: Hier wird sichtbar, wie Artikel 50 in der Praxis umgesetzt wird – und woran sich die Debatte entzündet. Bemerkenswert ist der Einwand aus der Community, dass hier ausgerechnet Texte gekennzeichnet werden, die es nur gibt, weil Claude auf urheberrechtlich geschuetzten Buechern trainiert wurde; der Verweis auf den 1,5-Milliarden-Dollar-Vergleich mit den Autoren steht deshalb unten im Dossier. HINWEIS REDAKTION: Policy/Kontroverse ist laut EDITORIAL_POLICY.md Abschnitt 2 eine kritische Kategorie (Stufe 4) und braucht die menschliche Freigabe; bis dahin humanReviewed: false.",
    "relatedLinks": [
      {
        "group": "berichterstattung",
        "sourceName": "heise online",
        "label": "Keine Chance für Schummler: Claude bekommt jetzt ein unsichtbares Wasserzeichen",
        "url": "https://www.heise.de/news/Keine-Chance-fuer-Schummler-Claude-bekommt-jetzt-ein-unsichtbares-Wasserzeichen-11410129.html"
      },
      {
        "group": "berichterstattung",
        "sourceName": "heise online",
        "label": "Claude-Nutzer äußern wegen des neuen Wasserzeichens Kritik an Anthropic",
        "url": "https://www.heise.de/news/Claude-Nutzer-aeussern-wegen-des-neuen-Wasserzeichens-Kritik-an-Anthropic-11412904.html"
      },
      {
        "group": "berichterstattung",
        "sourceName": "TechCrunch",
        "label": "Some Claude users are mad that Anthropic's new watermarks will catch them cheating at their jobs, classes",
        "url": "https://techcrunch.com/2026/08/12/some-claude-users-are-mad-that-anthropics-new-watermarks-will-catch-them-cheating-at-their-jobs-classes/"
      },
      {
        "group": "community",
        "sourceName": "Reddit – r/artificial",
        "label": "About the new Claude watermark",
        "url": "https://www.reddit.com/r/artificial/comments/1vlzjc8/about_the_new_claude_watermark/"
      },
      {
        "group": "community",
        "sourceName": "Reddit – r/Anthropic",
        "label": "Claude watermarking our work is unethical and …",
        "url": "https://www.reddit.com/r/Anthropic/comments/1vlcl0d/claude_watermarking_our_work_is_unethical_and/"
      },
      {
        "group": "hintergrund",
        "sourceName": "heise online",
        "label": "KI-Firma Anthropic will Autoren 1,5 Milliarden Dollar zahlen",
        "url": "https://www.heise.de/news/KI-Firma-Anthropic-will-Autoren-1-5-Milliarden-Dollar-zahlen-10635149.html"
      }
    ],
    "breaking": true,
    "editorsPick": true
  },
  {
    "slug": "eu-ai-act-durchsetzung-transparenzpflichten-artikel-50-gestartet",
    "title": "EU AI Act: Durchsetzung gestartet – Transparenzpflichten nach Artikel 50 gelten jetzt",
    "summary": "Seit dem 2. August 2026 setzen das AI Office der EU-Kommission und die nationalen Aufsichtsbehörden die KI-Verordnung durch. Damit gelten die Transparenzpflichten aus Artikel 50 verbindlich: Chatbots und andere interaktive KI-Systeme müssen Nutzerinnen und Nutzer darauf hinweisen, dass sie mit einer Maschine sprechen, und KI-generierte oder -veränderte Inhalte – einschließlich Deepfakes – müssen als solche gekennzeichnet werden. Für bereits im Markt befindliche Systeme läuft eine Übergangsfrist bis zum 2. Dezember 2026.",
    "categorySlug": "policy",
    "tags": [
      "EU AI Act",
      "Policy",
      "Compliance"
    ],
    "sourceName": "Europäische Kommission",
    "sourceUrl": "https://ec.europa.eu/commission/presscorner/detail/de/ip_26_1714",
    "studyUrl": "https://www.heise.de/ratgeber/KI-Kennzeichnungspflicht-Was-die-EU-ab-August-2026-verlangt-11340625.html",
    "studyLabel": "Einordnung: KI-Kennzeichnungspflicht – Was die EU ab August 2026 verlangt (heise online)",
    "publishedAt": "2026-08-02",
    "aiGenerated": true,
    "humanReviewed": true,
    "editorsNote": "Kernthema dieser Seite: Artikel 50 ist genau die Norm, auf der die Kennzeichnung hier auf AIActEU beruht. Verstoesse gegen die Transparenzpflichten koennen mit bis zu 15 Mio. Euro oder 3 Prozent des weltweiten Jahresumsatzes geahndet werden, bei verbotenen KI-Praktiken sind bis zu 35 Mio. Euro oder 7 Prozent vorgesehen - jeweils der hoehere Betrag. Stufe-4-Freigabe durch die Projektleitung am 13.08.2026 erteilt.",
    "breaking": true,
    "editorsPick": true
  },
  {
    "slug": "verschluesselter-ki-denkprozess-gehackt-schwache-modelle-verraten-geheimnisse",
    "title": "Verschlüsselter KI-Denkprozess gehackt: Schwache Modelle verraten Geheimnisse",
    "summary": "Ein Forschungsteam von MATS, Max-Planck-Institut, ELLIS-Institut Tübingen, Universität Tübingen und Snyk hat eine Architektur-Schwachstelle bei GPT-5, Claude und Gemini offengelegt: Die verschlüsselten Reasoning-Blöcke, mit denen Anbieter den Denkprozess ihrer Modelle vor Kunden verbergen, sind innerhalb einer Anbieter-Familie über Sessions, Nutzer und Modelle hinweg beliebig austauschbar. Wird der Block eines Flaggschiff-Modells an ein schwächeres, geringer abgesichertes Modell desselben Anbieters geschickt, entschlüsselt dieses den fremden Denkprozess und gibt ihn wörtlich im Klartext aus – das stärkere Modell muss dafür nie selbst angegriffen werden.",
    "categorySlug": "safety",
    "tags": [
      "AI Safety",
      "OpenAI",
      "Anthropic",
      "Google DeepMind"
    ],
    "sourceName": "Heise Online",
    "sourceUrl": "https://www.heise.de/hintergrund/Verschluesselter-KI-Denkprozess-gehackt-Schwache-Modelle-verraten-Geheimnisse-11412087.html",
    "studyUrl": "https://arxiv.org/abs/2608.09867",
    "studyLabel": "Studie: Stealing Reasoning Traces from Proprietary LLM APIs (arXiv)",
    "publishedAt": "2026-08-12",
    "aiGenerated": false,
    "humanReviewed": true,
    "editorsNote": "Hauptstory der Woche: Vier Angriffsvektoren folgen aus der Schwachstelle – Umgehung des Anti-Distillation-Schutzes, Extraktion privater Daten im grossen Stil, Offenlegung gefaehrlicher Inhalte trotz sauberer sichtbarer Antwort und unsichtbare Prompt-Injections in oeffentlichen Agenten-Rollouts. Aus 315.320 aus oeffentlichen Repositories eingesammelten Reasoning-Bloecken rekonstruierte das Team 367 personenbezogene Datensaetze und 182 Zugangsdaten. Die Veroeffentlichung erfolgte nach Responsible Disclosure zusammen mit konkreten kryptografischen und systemseitigen Gegenmassnahmen.",
    "breaking": true,
    "editorsPick": true
  },
  {
    "slug": "fragwurdige-zusammenarbeit-world-liberty-financial-kooperiert-mit-worldclaw",
    "title": "Fragwürdige Zusammenarbeit: World Liberty Financial kooperiert mit WorldClaw",
    "summary": "Von US-Präsident Trump unterstützte Krypto-Firma arbeitet laut einem Bericht mit dem Anbieter von KI-Modellen sanktionierter chinesischer Unternehmen zusammen.",
    "categorySlug": "breaking-news",
    "tags": [
      "RAG"
    ],
    "sourceName": "Heise Online",
    "sourceUrl": "https://www.heise.de/news/Fragwuerdige-Zusammenarbeit-World-Liberty-Financial-kooperiert-mit-WorldClaw-11416689.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "ki-training-und-urheberrecht-heftiger-streit-uber-daten-und-lizenzen",
    "title": "KI-Training und Urheberrecht: Heftiger Streit über Daten und Lizenzen",
    "summary": "Eine EU-Konsultation legt Gräben zwischen Tech-Branche und Rechteinhabern beim KI-Training offen. Zwischen Extrempositionen keimen aber auch Kompromissansätze.",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "Heise Online",
    "sourceUrl": "https://www.heise.de/news/KI-Training-und-Urheberrecht-Heftiger-Streit-ueber-Daten-und-Lizenzen-11416611.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false,
    "editorsPick": true,
    "editorsNote": "Sehr relevante Entwicklung für das KI-Ökosystem – direkte Leseempfehlung."
  },
  {
    "slug": "30-jahre-itsg-wie-aus-einem-trust-center-ein-zentraler-it-dienstleister-wurde",
    "title": "30 Jahre ITSG: Wie aus einem Trust Center ein zentraler IT-Dienstleister wurde",
    "summary": "ITSG feiert 30 Jahre. Ein Interview über den Datenaustausch, IT-Sicherheit und Strategien zu KI und Open Source.",
    "categorySlug": "breaking-news",
    "tags": [
      "Open Source"
    ],
    "sourceName": "Heise Online",
    "sourceUrl": "https://www.heise.de/hintergrund/30-Jahre-ITSG-Wie-aus-einem-Trust-Center-ein-zentraler-IT-Dienstleister-wurde-11415866.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "ki-firmen-zerstoren-bucher-was-steckt-dahinter",
    "title": "KI-Firmen zerstören Bücher: Was steckt dahinter?",
    "summary": "KI-Unternehmen kaufen massenhaft gebrauchte Bücher, scannen sie und zerstören sie dabei. Was steckt dahinter und ist das legal?",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "Heise Online",
    "sourceUrl": "https://www.heise.de/news/KI-Firmen-zerstoeren-Buecher-Was-steckt-dahinter-11416278.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "weitere-nvidia-prozessoren-in-russischem-marschflugkorper-entdeckt",
    "title": "Weitere Nvidia-Prozessoren in russischem Marschflugkörper entdeckt",
    "summary": "In Russlands Marschflugkörper steckt offenbar Nvidias Jetson Orin NX. Die integrierte GPU könnte bei der Zielfindung assistieren.",
    "categorySlug": "breaking-news",
    "tags": [
      "NVIDIA"
    ],
    "sourceName": "Heise Online",
    "sourceUrl": "https://www.heise.de/news/Ukraine-findet-weiter-Nvidias-Auto-Prozessoren-in-russischen-Waffen-11416368.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "ki-update-kompakt-ki-brillen-selbstbewusstsein-sicherheitslucken-ki-musik",
    "title": "KI-Update kompakt: KI-Brillen, Selbstbewusstsein, Sicherheitslücken, KI-Musik",
    "summary": "Das \"KI-Update\" liefert drei mal pro Woche eine Zusammenfassung der wichtigsten KI-Entwicklungen.",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "Heise Online",
    "sourceUrl": "https://www.heise.de/news/KI-Update-kompakt-KI-Brillen-Selbstbewusstsein-Sicherheitsluecken-KI-Musik-11416088.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false,
    "editorsPick": true,
    "editorsNote": "Sehr relevante Entwicklung für das KI-Ökosystem – direkte Leseempfehlung."
  },
  {
    "slug": "gefahr-durch-sonnensturme-ki-modell-sagt-aktive-region-auf-sonne-fruher-vorher",
    "title": "Gefahr durch Sonnenstürme: KI-Modell sagt aktive Region auf Sonne früher vorher",
    "summary": "Heftige Sonneneruptionen können auf der Erde Schäden anrichten. Ein KI-Modell kann mögliche erste Hinweise viel früher erkennen als bisherige Technik.",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "Heise Online",
    "sourceUrl": "https://www.heise.de/news/Gefahr-durch-Sonnenstuerme-KI-Modell-sagt-aktive-Region-auf-Sonne-frueher-vorher-11415886.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "nvidia-kappt-openai-garantie-auf-rund-100-milliarden-dollar",
    "title": "Nvidia kappt OpenAI-Garantie auf rund 100 Milliarden Dollar",
    "summary": "Nvidia und OpenAI stehen kurz vor einem Deal für eines der größten KI-Rechenzentren der Welt, aber mit einer kleineren Garantiesumme als zunächst berichtet.",
    "categorySlug": "breaking-news",
    "tags": [
      "OpenAI",
      "NVIDIA"
    ],
    "sourceName": "Heise Online",
    "sourceUrl": "https://www.heise.de/news/Nvidia-will-Milliardenrisiko-bei-OpenAIs-Rechenzentrum-begrenzen-11415946.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "heise-angebot-last-call-ki-im-unternehmen-verankern-vom-use-case-zu-skalierter-k",
    "title": "heise-Angebot: Last Call: KI im Unternehmen verankern – vom Use Case zu skalierter KI-Strategie",
    "summary": "In fünf Sessions lernen IT-Entscheider, KI strategisch im Unternehmen zu verankern und dabei Mitarbeitende mitzunehmen – alles im Einklang mit dem EU AI Act.",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "Heise Online",
    "sourceUrl": "https://www.heise.de/news/Last-Call-KI-im-Unternehmen-verankern-vom-Use-Case-zu-skalierter-KI-Strategie-11353416.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "the-defender-s-window",
    "title": "The Defender’s Window",
    "summary": "AI is reshaping cybersecurity for attackers and defenders alike. Learn how OpenAI is strengthening its defenses and what security teams can do now.",
    "categorySlug": "technisch",
    "tags": [
      "OpenAI",
      "AI Safety"
    ],
    "sourceName": "OpenAI News",
    "sourceUrl": "https://openai.com/index/the-defenders-window",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "openai-joins-ports-pike-project",
    "title": "OpenAI joins PORTS-Pike project",
    "summary": "OpenAI joins PORTS-Pike project, expanding community investment and supporting thousands of Southern Ohio jobs",
    "categorySlug": "technisch",
    "tags": [
      "OpenAI"
    ],
    "sourceName": "OpenAI News",
    "sourceUrl": "https://openai.com/index/openai-joins-ports-pike-project",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "new-policy-ideas-for-the-intelligence-age",
    "title": "New policy ideas for the Intelligence Age",
    "summary": "OpenAI funds 14 independent projects exploring new AI policy ideas to expand economic opportunity and strengthen societal resilience in the Intelligence Age.",
    "categorySlug": "technisch",
    "tags": [
      "OpenAI",
      "EU AI Act",
      "Hardware"
    ],
    "sourceName": "OpenAI News",
    "sourceUrl": "https://openai.com/index/new-policy-ideas-for-the-intelligence-age",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "securing-the-infrastructure-of-intelligence",
    "title": "Securing the Infrastructure of Intelligence",
    "summary": "AI factories are the defining infrastructure of the AI era — where compute transforms energy and data into intelligence that powers every business, industry and country. In the AI economy, compute is revenue. AI factories require a full stack of critical resources: advanced chips",
    "categorySlug": "hardware",
    "tags": [
      "NVIDIA",
      "Hardware"
    ],
    "sourceName": "NVIDIA AI Blog",
    "sourceUrl": "https://blogs.nvidia.com/blog/securing-the-infrastructure-of-intelligence/",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false,
    "editorsPick": true,
    "editorsNote": "Sehr relevante Entwicklung für das KI-Ökosystem – direkte Leseempfehlung."
  },
  {
    "slug": "nvidia-nemotron-3-5-lightning-now-available-in-amazon-sagemaker-jumpstart",
    "title": "NVIDIA Nemotron 3.5 Lightning now available in Amazon SageMaker JumpStart",
    "summary": "NVIDIA Nemotron 3.5 Lightning, an open model built for high-volume agentic workloads, is now available in Amazon SageMaker JumpStart. This post shows how to deploy the 30B Mixture-of-Experts model (3B active), which delivers up to 4x higher throughput and up to 30% faster task co",
    "categorySlug": "technisch",
    "tags": [
      "NVIDIA",
      "Agentic AI"
    ],
    "sourceName": "AWS Machine Learning Blog",
    "sourceUrl": "https://aws.amazon.com/blogs/machine-learning/nvidia-nemotron-3-5-lightning-now-available-in-amazon-sagemaker-jumpstart/",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "build-openclaw-agents-that-transact-with-amazon-bedrock-agentcore-payments",
    "title": "Build OpenClaw agents that transact with Amazon Bedrock AgentCore payments",
    "summary": "Give an autonomous agent a wallet and spending guardrails so it can pay for paywalled APIs, MCP servers, and web content. This post connects OpenClaw to Amazon Bedrock AgentCore payments and the x402 protocol, using the aws-agents-pay plugin to make bounded, human-approved testne",
    "categorySlug": "technisch",
    "tags": [
      "Agentic AI"
    ],
    "sourceName": "AWS Machine Learning Blog",
    "sourceUrl": "https://aws.amazon.com/blogs/machine-learning/build-openclaw-agents-that-transact-with-amazon-bedrock-agentcore-payments/",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "same-cluster-33-points-more-utilization-what-changed-was-the-order",
    "title": "Same Cluster, 33 Points More Utilization: What Changed Was the Order",
    "summary": "(Keine Zusammenfassung verfügbar – Originalquelle prüfen.)",
    "categorySlug": "tools",
    "tags": [
      "Hugging Face"
    ],
    "sourceName": "Hugging Face Blog",
    "sourceUrl": "https://huggingface.co/blog/Dharma-AI/gpu-management-pt2",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "agentcore-payments-middleware-for-langchain-agents",
    "title": "AgentCore Payments middleware for LangChain agents",
    "summary": "Let your LangChain agents pay for APIs with deterministic session budgets. AgentCore Payments middleware signs x402 payments; LangSmith traces every one.",
    "categorySlug": "technisch",
    "tags": [
      "Agentic AI"
    ],
    "sourceName": "LangChain Blog",
    "sourceUrl": "https://www.langchain.com/blog/langchain-agentcore-payments",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "g-luxury-goods-the-new-ai-super-rich-are-reshaping-the-market-for-jets-yachts-an",
    "title": "(g+) Luxury Goods: The new AI super-rich are reshaping the market for jets, yachts and cars",
    "summary": "Those making fortunes in Silicon Valley are ditching the champagne for premium water while splashing their bitcoin Von Stephanie Stacey (Wirtschaft, Ferrari)",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "Golem.de",
    "sourceUrl": "https://www.golem.de/news/luxury-goods-the-new-ai-super-rich-are-reshaping-the-market-for-jets-yachts-and-cars-2608-212005.html",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "qwen-wird-zum-standard-china-dominiert-veroffentlichungen-gro-er-frontier-ki-mod",
    "title": "Qwen wird zum Standard: China dominiert Veröffentlichungen großer Frontier-KI-Modelle",
    "summary": "Während chinesische KI-Labore sehr große Modelle veröffentlichen, konzentrieren sich US-Unternehmen auf Hardware-Optimierung. (KI, Open Source)",
    "categorySlug": "breaking-news",
    "tags": [
      "Open Source",
      "Hardware"
    ],
    "sourceName": "Golem.de",
    "sourceUrl": "https://www.golem.de/news/qwen-wird-zum-standard-china-dominiert-veroeffentlichungen-grosser-frontier-ki-modelle-2608-212009.html",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "7-milliarden-us-dollar-stripe-soll-ki-startup-openrouter-gekauft-haben",
    "title": "7 Milliarden US-Dollar: Stripe soll KI-Startup Openrouter gekauft haben",
    "summary": "Stripe hat sich laut Bloomberg mit dem kalifornischen KI-Start-up Openrouter auf eine Übernahme geeinigt. (API, KI)",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "Golem.de",
    "sourceUrl": "https://www.golem.de/news/7-milliarden-us-dollar-stripe-soll-ki-startup-openrouter-gekauft-haben-2608-212001.html",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "g-ki-agenten-im-entwickleralltag-wie-ki-agenten-jira-git-slack-und-ci-cd-verande",
    "title": "(g+) KI-Agenten im Entwickleralltag: Wie KI-Agenten Jira, Git, Slack und CI/CD verändern",
    "summary": "KI-Agenten schreiben nicht nur Code. Sie koordinieren Jira, Git, Slack und CI/CD - und verändern so den gesamten Softwareentwicklungsprozess. Wir erklären, wie. Ein Ratgebertext von Klaus Manhart (Die Agenten kommen, KI)",
    "categorySlug": "breaking-news",
    "tags": [
      "Agentic AI"
    ],
    "sourceName": "Golem.de",
    "sourceUrl": "https://www.golem.de/news/ki-agenten-im-entwickleralltag-wie-ki-agenten-jira-git-slack-und-ci-cd-veraendern-2608-211994.html",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "nasdaq-die-technologiewerte-fahren-achterbahn",
    "title": "NASDAQ: Die Technologiewerte fahren Achterbahn",
    "summary": "Bis Ende Juli büßte der Nasdaq-Index rund 2.000 Punkte ein, legte im August wieder zu - und ist nun etwa auf dem Stand ex ante. Wie die Ankündigungspolitik von Nvidia die Aktienkurse seiner Kunden künstlich hochhält. Eine Analyse von Erich Moechel (Börse, Nvidia)",
    "categorySlug": "breaking-news",
    "tags": [
      "NVIDIA"
    ],
    "sourceName": "Golem.de",
    "sourceUrl": "https://www.golem.de/news/nasdaq-die-technologiewerte-fahren-achterbahn-2608-211985.html",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "prompt-injection-klager-versteckt-ki-anweisungen-in-schriftsatzen",
    "title": "Prompt Injection: Kläger versteckt KI-Anweisungen in Schriftsätzen",
    "summary": "Weil er ein KI-System bei Gericht vermutete, versteckt ein Kläger in den USA geheime Anweisungen in seinen Schriftsätzen. (KI, Politik)",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "Golem.de",
    "sourceUrl": "https://www.golem.de/news/prompt-injection-klaeger-versteckt-ki-anweisungen-in-schriftsaetzen-2608-211992.html",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "umsetzung-der-eu-vorgaben-claudes-wasserzeichen-lasst-sich-kaum-entfernen",
    "title": "Umsetzung der EU-Vorgaben: Claudes Wasserzeichen lässt sich kaum entfernen",
    "summary": "Anthropic erklärt, wie das Wasserzeichen in Claude-Texten funktioniert, woher die Methode stammt und wie leicht es sich umgehen lässt. (Claude, KI)",
    "categorySlug": "breaking-news",
    "tags": [
      "Anthropic",
      "EU AI Act"
    ],
    "sourceName": "Golem.de",
    "sourceUrl": "https://www.golem.de/news/umsetzung-der-eu-vorgaben-claudes-wasserzeichen-laesst-sich-kaum-entfernen-2608-211982.html",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "aufrustung-nato-plant-digitalen-schutzschild-an-ostflanke",
    "title": "Aufrüstung: Nato plant digitalen Schutzschild an Ostflanke",
    "summary": "Ein Netzwerk aus Drohnen, Sensoren und KI soll die Nato-Ostgrenze sichern. Über Angriffe entscheiden aber weiterhin menschliche Operatoren. (Militär, KI)",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "Golem.de",
    "sourceUrl": "https://www.golem.de/news/aufruestung-nato-plant-digitales-schutzschild-an-ostflanke-2608-211979.html",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "in-diesem-game-kannst-du-einen-ki-chatbot-spielen-und-usern-antworten-schreiben",
    "title": "In diesem Game kannst du einen KI-Chatbot spielen – und Usern Antworten schreiben",
    "summary": "Millionen Menschen nutzen täglich Chatbots, um Fragen beantwortet zu bekommen. Doch was, wenn du plötzlich in die Rolle der KI geworfen wirst? Dieses Spiel zeigt dir, wie es ist, für deine Nutzer:innen Texte und Bilder zu generieren.\nweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "RAG"
    ],
    "sourceName": "t3n",
    "sourceUrl": "https://t3n.de/news/ki-chatbot-spiel-1758468/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "was-wei-chatgpt-uber-mich-dieses-tool-wertet-deine-chats-aus",
    "title": "Was weiß ChatGPT über mich? Dieses Tool wertet deine Chats aus",
    "summary": "Künstliche Intelligenz wird für viele Nutzer:innen zur Alltagshilfe – auch bei sensiblen Fragen. Doch mit den eingegebenen Daten können die Anbieter leicht einen Einblick ins Privatleben erhaschen. Ein neues Tool soll deswegen zeigen, was ChatGPT und Claude über euch wissen. Unse",
    "categorySlug": "breaking-news",
    "tags": [
      "OpenAI",
      "Anthropic",
      "RAG"
    ],
    "sourceName": "t3n",
    "sourceUrl": "https://t3n.de/news/chatgpt-claude-nutzerdaten-wissen-chats-tool-analyse-1758355/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "openai-lost-krisen-team-fur-ki-sicherheit-auf-warum-dieser-schritt-jetzt-erfolgt",
    "title": "OpenAI löst Krisen-Team für KI-Sicherheit auf: Warum dieser Schritt jetzt erfolgt",
    "summary": "OpenAI hat interne Veränderungen vorgenommen. Laut Insider:innen soll der ChatGPT-Entwickler ein wichtiges Team aufgelöst und auf andere Bereiche des Unternehmens aufgeteilt haben. Die Mitarbeiter:innen haben sich mit dem Risiko von KI-Modellen beschäftigt.\nweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "OpenAI"
    ],
    "sourceName": "t3n",
    "sourceUrl": "https://t3n.de/news/openai-ki-sicherheits-team-aufgeloest-1758441/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "ki-kurt-die-besten-studien-der-welt-und-spaltet-die-wissenschaft",
    "title": "KI kürt die besten Studien der Welt – und spaltet die Wissenschaft",
    "summary": "Das Startup QED Science setzt auf KI, um die Qualität von wissenschaftlichen Arbeiten schneller zu bewerten. Doch das Verfahren wirft selbst Fragen nach Transparenz, Bias und Objektivität auf.weiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "RAG"
    ],
    "sourceName": "t3n",
    "sourceUrl": "https://t3n.de/news/ki-kuert-die-besten-studien-der-welt-und-spaltet-die-wissenschaft-1758362/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "chatgpt-zeigt-bald-auch-in-deutschland-werbung-doch-es-gibt-einen-ausweg",
    "title": "ChatGPT zeigt bald auch in Deutschland Werbung – doch es gibt einen Ausweg",
    "summary": "Die werbefreie Zeit in ChatGPT ist für viele Nutzer:innen auch hierzulande schon bald vorbei. Ende August startet OpenAI Anzeigen in Deutschland. Wie die Ads aussehen und warum für EU-Nutzer:innen andere Regeln gelten.\nweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "OpenAI",
      "EU AI Act",
      "Deutschland"
    ],
    "sourceName": "t3n",
    "sourceUrl": "https://t3n.de/news/chatgpt-werbung-deutschland-1758391/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "5-dinge-die-du-diese-woche-wissen-musst-es-muss-ja-nicht-immer-ki-sein",
    "title": "5 Dinge, die du diese Woche wissen musst: Es muss ja nicht immer KI sein",
    "summary": "Jeden Montagmorgen berichten wir über fünf Dinge, die zum Wochenstart wichtig sind. Diesmal geht es um KI-freie Produktivitäts-Tools, Wasserzeichen in Claude, Googles neue Pixel-Smartphones, die bislang größte Sternenkarte und Tipps für Google Maps.\nweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "Google DeepMind",
      "Anthropic",
      "EU AI Act"
    ],
    "sourceName": "t3n",
    "sourceUrl": "https://t3n.de/news/5-dinge-die-du-diese-woche-wissen-musst-ki-freie-tools-claude-pixel-11-sternenkarte-google-maps-1758120/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "virtual-try-on-warum-fashion-zeigt-wie-ki-skalierbar-wird",
    "title": "Virtual Try-On: Warum Fashion zeigt, wie KI skalierbar wird",
    "summary": "Generative KI löst zunehmend echte, operative Geschäftsprobleme im Onlinehandel. Kaum ein Beispiel führt das so eindrucksvoll vor Augen wie Virtual Try-On (VTO). Was lange als technische Spielerei galt, entwickelt sich 2026 zum Business Case.weiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "t3n",
    "sourceUrl": "https://t3n.de/news/virtual-try-on-warum-fashion-zeigt-wie-ki-skalierbar-wird-1756722/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "bildungsforscher-warnt-diese-metakompetenz-entscheidet-uber-eure-zukunft",
    "title": "Bildungsforscher warnt: Diese Metakompetenz entscheidet über eure Zukunft",
    "summary": "Wer KI blind vertraut, verliert die Fähigkeit, Ergebnisse zu hinterfragen. Bildungsforscher Ulrich Trautwein fordert, Schulen und Hochschulen stärker auf Selbstweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "Meta AI",
      "RAG",
      "EU AI Act"
    ],
    "sourceName": "t3n",
    "sourceUrl": "https://t3n.de/news/bildungsforscher-warnt-vor-ki-in-der-schule-diese-metakompetenz-entscheidet-ueber-eure-zukunft-1756476/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "anthropic-s-annualized-revenue-surges-to-65b",
    "title": "Anthropic’s annualized revenue surges to $65B",
    "summary": "The model maker added $18 billion in annualized revenue in two months.",
    "categorySlug": "business",
    "tags": [
      "Anthropic",
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/08/17/anthropics-annualized-revenue-surges-to-65b/",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "ai-automation-startup-relay-shuts-down-staff-joins-google-s-chrome-team",
    "title": "AI automation startup Relay shuts down, staff joins Google’s Chrome team",
    "summary": "\"We have some really ambitious plans to help you work with AI in Chrome to get things done, and I’ll have more to share soon,\" Jacob Bank, Relay founder and CEO, said.",
    "categorySlug": "business",
    "tags": [
      "Google DeepMind",
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/08/17/ai-automation-startup-relay-shuts-down-staff-joins-googles-chrome-team/",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "amazon-which-started-off-selling-books-is-destroying-rare-texts-to-train-ai",
    "title": "Amazon, which started off selling books, is destroying rare texts to train AI",
    "summary": "Rare books are incredibly valuable for training LLMs, since these models have already trained on whatever's available online.",
    "categorySlug": "business",
    "tags": [
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/08/17/amazon-once-an-online-bookseller-is-destroying-rare-books-to-train-ai-models/",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "groq-raises-350m-to-fuel-its-pivot-from-ai-chips-to-neocloud",
    "title": "Groq raises $350M to fuel its pivot from AI chips to neocloud",
    "summary": "Groq raised $350 million at a $3.5 billion valuation as the former AI chipmaker pivots to a neocloud business and expands its Nvidia-powered data center footprint.",
    "categorySlug": "business",
    "tags": [
      "NVIDIA",
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/08/17/groq-raises-350m-to-fuel-its-pivot-from-ai-chips-to-neocloud/",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "nvidia-investing-1-5b-in-softbank-data-center-developer-behind-openai-project",
    "title": "Nvidia investing $1.5B in SoftBank data center developer behind OpenAI project",
    "summary": "Nvidia's investment in SoftBank's data center developer will guarantee its chips power an OpenAI data center.",
    "categorySlug": "business",
    "tags": [
      "OpenAI",
      "NVIDIA",
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/08/17/nvidia-investing-1-5b-in-softbank-data-center-developer-behind-openai-project/",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "wispr-raises-280m-at-2b-valuation-as-it-looks-beyond-dictation",
    "title": "Wispr raises $280M at $2B valuation as it looks beyond dictation",
    "summary": "The funds will allow Wispr to increase its footprint as it ventures into new areas, such as meetings, with its newly released note-taker tool.",
    "categorySlug": "business",
    "tags": [
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/08/17/wispr-raises-280m-at-2b-valuation-as-it-looks-beyond-dictation/",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "man-muss-nicht-ins-silicon-valley-um-erfolgreich-zu-sein-openai-manager-verrat-s",
    "title": "„Man muss nicht ins Silicon Valley, um erfolgreich zu sein“ – OpenAI Manager verrät seine größten Startup-Insights",
    "summary": "De Longvilliers arbeitet bei OpenAI und ist für Startups in Europa verantwortlich – er hat verraten, worauf er bei seiner Arbeit achtet.",
    "categorySlug": "business",
    "tags": [
      "OpenAI",
      "EU AI Act"
    ],
    "sourceName": "Gründerszene",
    "sourceUrl": "https://www.businessinsider.de/gruenderszene/openai-manager-man-muss-nicht-ins-silicon-valley-um-erfolgreich-zu-sein/",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "import-ai-469-science-ai-rsi-simulator-and-zuck-s-technological-pessimism",
    "title": "Import AI 469: Science AI; RSI simulator; and Zuck's technological pessimism",
    "summary": "The new frontier of AI is developing capable autonomous researchers",
    "categorySlug": "policy",
    "tags": [
      "KI News"
    ],
    "sourceName": "Import AI (Jack Clark Newsletter)",
    "sourceUrl": "https://importai.substack.com/p/import-ai-469-science-ai-rsi-simulator",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "glm-5-3-stripe-openrouter-deal-ai-agent-consensus",
    "title": "GLM-5.3, Stripe OpenRouter deal, AI agent consensus",
    "summary": "(Keine Zusammenfassung verfügbar – Originalquelle prüfen.)",
    "categorySlug": "breaking-news",
    "tags": [
      "Agentic AI"
    ],
    "sourceName": "TLDR AI",
    "sourceUrl": "https://tldr.tech/ai/2026-08-17",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "seeing-beyond-bmi-estimating-cardiometabolic-risk-with-smartphone-imagery",
    "title": "Seeing beyond BMI: Estimating cardiometabolic risk with smartphone imagery",
    "summary": "General Science",
    "categorySlug": "research",
    "tags": [
      "Google DeepMind",
      "Meta AI"
    ],
    "sourceName": "Google Research Blog",
    "sourceUrl": "https://research.google/blog/seeing-beyond-bmi-estimating-cardiometabolic-risk-with-smartphone-imagery/",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "inducing-reward-free-judging-rubrics-that-reduce-over-crediting-in-agent-evaluat",
    "title": "Inducing Reward-Free Judging Rubrics that Reduce Over-Crediting in Agent Evaluation",
    "summary": "arXiv:2608.13564v1 Announce Type: new \nAbstract: Evaluating language-model agents at scale increasingly relies on a second language model as an automatic judge, because the gold signal, an executable environment reward, is expensive, slow, or unavailable at deployment time. Such ",
    "categorySlug": "research",
    "tags": [
      "Agentic AI",
      "AI Safety",
      "Hardware"
    ],
    "sourceName": "arXiv cs.AI (Artificial Intelligence)",
    "sourceUrl": "https://arxiv.org/abs/2608.13564",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "depth-aware-sensitivity-analysis-of-mixture-of-experts-models-via-magnitude-base",
    "title": "Depth-Aware Sensitivity Analysis of Mixture-of-Experts Models via Magnitude-Based Expert Masking",
    "summary": "arXiv:2608.13565v1 Announce Type: new \nAbstract: Mixture-of-Experts (MoE) architectures scale large language models (LLMs) while preserving computational efficiency through sparse activation. Despite their widespread adoption, the relative importance of individual MoE layers rema",
    "categorySlug": "research",
    "tags": [
      "Hardware"
    ],
    "sourceName": "arXiv cs.AI (Artificial Intelligence)",
    "sourceUrl": "https://arxiv.org/abs/2608.13565",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "modular-cognitive-architecture-emerges-in-large-language-models",
    "title": "Modular Cognitive Architecture Emerges in Large Language Models",
    "summary": "arXiv:2608.13567v1 Announce Type: new \nAbstract: The human brain exhibits a striking degree of functional specialization, with distinct networks supporting language, formal reasoning, reasoning about other minds, and reasoning about the physical world. Is this modular organizatio",
    "categorySlug": "research",
    "tags": [
      "Hardware"
    ],
    "sourceName": "arXiv cs.AI (Artificial Intelligence)",
    "sourceUrl": "https://arxiv.org/abs/2608.13567",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "a-year-in-llm-serving-workload-evolution-caching-and-load-balancing",
    "title": "A Year in LLM Serving: Workload Evolution, Caching and Load-Balancing",
    "summary": "arXiv:2608.13573v1 Announce Type: new \nAbstract: Large Language Model (LLM) serving has become a critical cloud workload, and realistic traces are essential for motivating and benchmarking serving systems. However, existing LLM serving workload studies remain limited in scale and",
    "categorySlug": "research",
    "tags": [
      "Hardware"
    ],
    "sourceName": "arXiv cs.AI (Artificial Intelligence)",
    "sourceUrl": "https://arxiv.org/abs/2608.13573",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "agentao-a-governed-local-first-runtime-for-tool-using-llm-agents",
    "title": "Agentao: A Governed Local-First Runtime for Tool-Using LLM Agents",
    "summary": "arXiv:2608.13574v1 Announce Type: new \nAbstract: LLM agents increasingly operate as execution systems that invoke tools, modify local state, use persistent memory, and interact with external protocols. These capabilities make agents useful, but they also introduce risks related t",
    "categorySlug": "research",
    "tags": [
      "Agentic AI",
      "Hardware"
    ],
    "sourceName": "arXiv cs.AI (Artificial Intelligence)",
    "sourceUrl": "https://arxiv.org/abs/2608.13574",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "ai-evaluation-should-work-with-humans",
    "title": "AI Evaluation Should Work With Humans",
    "summary": "arXiv:2608.13577v1 Announce Type: new \nAbstract: This position paper argues that the dominant paradigm of AI evaluation (which focuses on superhuman autonomous performance and so implicitly targets the goal of replacing humans) is guiding AI development in the wrong direction. In",
    "categorySlug": "research",
    "tags": [
      "AI Safety",
      "Hardware"
    ],
    "sourceName": "arXiv cs.AI (Artificial Intelligence)",
    "sourceUrl": "https://arxiv.org/abs/2608.13577",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "stable-miscalibration-in-large-language-models-a-practical-view-of-high-confiden",
    "title": "Stable Miscalibration in Large Language Models: A Practical View of High-Confidence Errors",
    "summary": "arXiv:2608.13591v1 Announce Type: new \nAbstract: High-confidence errors in large language models are often treated as evidence of fragile internal inference. We study a different possibility: stable miscalibration, where a confident wrong answer remains locally stable under small",
    "categorySlug": "research",
    "tags": [
      "RAG",
      "Hardware"
    ],
    "sourceName": "arXiv cs.AI (Artificial Intelligence)",
    "sourceUrl": "https://arxiv.org/abs/2608.13591",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "measuring-cross-task-behavioral-consistency-in-language-model-agents",
    "title": "Measuring Cross-Task Behavioral Consistency in Language Model Agents",
    "summary": "arXiv:2608.13598v1 Announce Type: new \nAbstract: Agent evaluation relies almost entirely on outcome metrics such as success rate, which capture whether an agent succeeds but not how consistently it behaves. We argue that behavioral consistency across tasks is a distinct and measu",
    "categorySlug": "research",
    "tags": [
      "Agentic AI",
      "AI Safety",
      "Hardware"
    ],
    "sourceName": "arXiv cs.AI (Artificial Intelligence)",
    "sourceUrl": "https://arxiv.org/abs/2608.13598",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "cross-disciplinary-taxonomy-and-modeling-of-misunderstanding-generation-amplific",
    "title": "Cross-Disciplinary Taxonomy and Modeling of Misunderstanding Generation, Amplification, and Detection, from Pragmatics to AI Agents",
    "summary": "arXiv:2608.13604v1 Announce Type: new \nAbstract: Detection of misunderstanding is an urgent problem to solve because communication has moved away from real-time, in-person interaction and is increasingly handled by AI-mediated channels. This shift cuts communicators off from the ",
    "categorySlug": "research",
    "tags": [
      "RAG",
      "Agentic AI",
      "Hardware"
    ],
    "sourceName": "arXiv cs.AI (Artificial Intelligence)",
    "sourceUrl": "https://arxiv.org/abs/2608.13604",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "active-perception-for-embodied-disambiguation",
    "title": "Active Perception for Embodied Disambiguation",
    "summary": "arXiv:2608.13605v1 Announce Type: new \nAbstract: Natural language provides robots with a flexible task interface, but target ambiguity in embodied environments arises not only from user intent; it can also result from missing taskrelevant physical evidence in the current observat",
    "categorySlug": "research",
    "tags": [
      "Hardware"
    ],
    "sourceName": "arXiv cs.AI (Artificial Intelligence)",
    "sourceUrl": "https://arxiv.org/abs/2608.13605",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "does-a-language-server-save-tokens-for-coding-agents-a-measurement-methodology-a",
    "title": "Does a Language Server Save Tokens for Coding Agents? A Measurement Methodology and Preliminary Study",
    "summary": "arXiv:2608.13568v1 Announce Type: new \nAbstract: Coding agents spend most of their context budget on retrieval. Lexical retrieval (grep) is universal, instant, and zero-setup, but noisy: it cannot tell a definition from a call from a comment. Semantic retrieval via the Language S",
    "categorySlug": "research",
    "tags": [
      "RAG",
      "Agentic AI",
      "AI Safety"
    ],
    "sourceName": "arXiv cs.CL (Computation and Language)",
    "sourceUrl": "https://arxiv.org/abs/2608.13568",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "think-in-latent-explain-in-language-self-explainable-latent-reasoning",
    "title": "Think in Latent, Explain in Language: Self-Explainable Latent Reasoning",
    "summary": "arXiv:2608.13570v1 Announce Type: new \nAbstract: Latent reasoning has emerged as a powerful alternative to text-based Chain-of-Thought (CoT), offering significant gains in computational efficiency by compressing verbose reasoning into compact embeddings. However, compressing reas",
    "categorySlug": "research",
    "tags": [
      "KI News"
    ],
    "sourceName": "arXiv cs.CL (Computation and Language)",
    "sourceUrl": "https://arxiv.org/abs/2608.13570",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "not-all-tokens-are-equal-inflation-aware-routing-for-agentic-llm-systems",
    "title": "Not All Tokens Are Equal: Inflation-Aware Routing for Agentic LLM Systems",
    "summary": "arXiv:2608.13571v1 Announce Type: new \nAbstract: When a language model fails to answer a query on the first attempt, an agentic system retries, consuming additional tokens each time. This retry overhead creates a gap between what a model's per-token price implies and what a full ",
    "categorySlug": "research",
    "tags": [
      "Agentic AI"
    ],
    "sourceName": "arXiv cs.CL (Computation and Language)",
    "sourceUrl": "https://arxiv.org/abs/2608.13571",
    "publishedAt": "2026-08-17",
    "aiGenerated": false,
    "humanReviewed": false
  }
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
