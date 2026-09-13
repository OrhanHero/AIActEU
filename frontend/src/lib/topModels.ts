export type TopModel = {
  rank: number;
  name: string;
  provider: string;
  license: "Proprietär" | "Open-Weight" | "Open-Source";
  cutoff: string; // Zeitpunkt des Trainingsendes / Datenstichtag
  benchmarkHighlights: string;
  dataSources: {
    web: string;
    books: string;
    code: string;
    media: string;
  };
  strengths: string;
};

export const topModels: TopModel[] = [
  {
    rank: 1,
    name: "Claude 3.7 Sonnet",
    provider: "Anthropic (USA)",
    license: "Proprietär",
    cutoff: "November 2024",
    benchmarkHighlights: "SWE-bench Verified #1 (70.3%), Hybrid Reasoning, OSWorld",
    dataSources: {
      web: "Streng gefilterter Web-Crawl (Common Crawl), kuratierte Enzyklopädien und internationale Qualitätsmedien unter Ausschluss von Copyright-Verletzungen und PII.",
      books: "Wissenschaftliche Verlagsarchive, lizenzierte Fachbibliotheken, akademische Repositorien (arXiv, PubMed).",
      code: "Hochwertige GitHub-Repositories (Permissive Lizenzen), synthetische Reasoning-Traces und verifizierte Unit-Tests für autonome Agenten.",
      media: "Multimodale Diagramme, UI-Screenshots, Dokumenten-Scans mit optischer Strukturerkennung (OCR) für Frontend- & System-Interaktion.",
    },
    strengths: "Weltweit führend bei Software-Engineering-Agenten, flexibler Umschaltung zwischen Instant-Antwort und Extended-Thinking-Modus sowie nuancierter Textanalyse.",
  },
  {
    rank: 2,
    name: "OpenAI o3 / o3-mini",
    provider: "OpenAI (USA)",
    license: "Proprietär",
    cutoff: "Dezember 2024",
    benchmarkHighlights: "Frontier Reasoning, ARC-AGI-1 #1, AIME 2024 Mathe, Codeforces 2700+",
    dataSources: {
      web: "Kuratierter Qualitäts-Crawl des weltweiten Webs, strukturierte Foren und kollaborative Wissensdatenbanken.",
      books: "Fachliteratur aus Höherer Mathematik, Quantenphysik, organischer Chemie und theoretischer Informatik.",
      code: "Wettbewerbs-Coding-Plattformen, Algorithmensammlungen sowie massives Reinforcement Learning (RL) auf synthetischen Denkketten (Chain-of-Thought).",
      media: "Multimodale Bild- und Vektor-Graphiken für visuell-logische Deduktion und wissenschaftliche Datenanalyse.",
    },
    strengths: "Durchbruch bei komplexem wissenschaftlichem Reasoning, formaler Logik, Olympiade-Mathematik und unübertroffener Code-Optimierung durch Test-Time Compute.",
  },
  {
    rank: 3,
    name: "DeepSeek-R1 / DeepSeek-V3",
    provider: "DeepSeek (China)",
    license: "Open-Weight",
    cutoff: "Juli 2024",
    benchmarkHighlights: "MATH-500 (97.3%) #1, AIME 2024, SWE-bench Verified (49.2%)",
    dataSources: {
      web: "Multilingualer Web-Crawl (Chinesisch, Englisch, europäische Sprachen), Wikipedia, kuratierte Fachforen und Open-Access-Daten.",
      books: "Umfassende mathematische Monografien, Lehrbücher und wissenschaftliche Preprints (arXiv).",
      code: "Öffentliche GitHub-Repositories, Wettbewerbs-Programmieraufgaben sowie innovatives Reinforcement Learning mit Rein-RL ohne supervised Warm-up (DeepSeek-R1-Zero).",
      media: "Primär text- und logikbasiertes MoE-Kernmodell (671B Parameter / 37B aktiv); Janus-Pro Varianten für Bild-Text-Multimodalität.",
    },
    strengths: "Disruptive Open-Weight-Architektur mit extrem effizientem Multi-Head Latent Attention (MLA) und FP8-Training bei einem Bruchteil der Rechenkosten westlicher Labs.",
  },
  {
    rank: 4,
    name: "Gemini 2.0 Flash / Pro",
    provider: "Google DeepMind (USA)",
    license: "Proprietär",
    cutoff: "August 2024",
    benchmarkHighlights: "2 Mio. Tokens Kontext, Native Tool-Use, Realtime Multimodal Streaming",
    dataSources: {
      web: "Proprietärer Google Web-Index, weltweite News-Archive, Wikipedia und mehrsprachige redaktionelle Sammlungen.",
      books: "Google Books Digitalisierungsprojekte, akademische Fachzeitschriften und juristische Kommentare.",
      code: "Großflächige interne und Open-Source-Code-Repositories sowie automatisierte synthetische Programmierübungen.",
      media: "Nativ durchgehend omnimodal trainiert auf Live-Audio-Streams, Video-Sequenzen, hochauflösenden Satelliten- und Dokumentenbildern.",
    },
    strengths: "Unübertroffenes Kontextfenster (bis zu 2 Millionen Tokens), extrem geringe Latenz bei multimodaler Sprach- und Bildinteraktion sowie nahtlose Google-Workspace-Integration.",
  },
  {
    rank: 5,
    name: "GPT-4.5 / GPT-4o",
    provider: "OpenAI (USA)",
    license: "Proprietär",
    cutoff: "Oktober 2024",
    benchmarkHighlights: "LMSYS Chatbot Arena Top-Tier, Vision MMMU, Human-like Voice",
    dataSources: {
      web: "Massiver Web-Crawl, kuratierte Medienpartnerschaften (Axel Springer, Le Monde, Financial Times, Reddit) und enzyklopädische Datenbanken.",
      books: "Lizenzierte E-Book-Archive, Fachliteratur und wissenschaftliche Monografien.",
      code: "Globaler GitHub-Quellcode aller gängigen Programmiersprachen, StackOverflow-Archive und Entwickler-Dokumentationen.",
      media: "Nativ omnimodal verarbeitete Audio-Streams, hochauflösende Bilder, UI-Elemente und Video-Frames mit synchroner Sprachsynthese.",
    },
    strengths: "Höchste Sprachnatürlichkeit, herausragendes Allgemeinwissen und vielseitige multimodale Assistenz mit minimaler Reaktionszeit.",
  },
  {
    rank: 6,
    name: "Grok 3 / Grok 2",
    provider: "xAI (USA)",
    license: "Proprietär",
    cutoff: "Januar 2025 (mit X-Echtzeit-Feed)",
    benchmarkHighlights: "Colossus Supercluster Training (100k+ H100), Math & Coding Reasoning",
    dataSources: {
      web: "Öffentliches Web-Archiv, wissenschaftliche Publikationen, Wikipedia sowie direkter Echtzeit-Ereignisdatenstrom der X-Plattform.",
      books: "Digitalisierte Fachbibliotheken und technische Standardwerke.",
      code: "Öffentlicher Quellcode, GitHub-Repositories und systemnahe Dokumentationen.",
      media: "Multimodale Bild-, Diagramm- und Satelliten-Analyse für visuelle Lageberichte.",
    },
    strengths: "Trainiert auf dem weltgrößten homogenen GPU-Cluster (Colossus); unübertroffene Aktualität durch Echtzeit-Informationssynthese und starke Reasoning-Kapazitäten.",
  },
  {
    rank: 7,
    name: "Llama 3.3 70B / Llama 3.1 405B",
    provider: "Meta AI (USA)",
    license: "Open-Weight",
    cutoff: "Dezember 2024",
    benchmarkHighlights: "Open-Weight Flagship, MMLU-Pro, 128k Kontextfenster",
    dataSources: {
      web: "Über 15 Billionen Tokens aus öffentlich zugänglichem Web (Common Crawl), Wikipedia in über 30 Sprachen unter strengen Qualitätsfiltern.",
      books: "Bereinigte Open-Access-Buchdatensätze und akademische Textarchive.",
      code: "Mehr als 4 Billionen Tokens an Quellcode (Python, C++, Java, Rust, TypeScript, SQL) inklusive synthetischer Programmierdaten.",
      media: "Textbasiertes Kernmodell; Llama 3.2 Vision ergänzt um lizenzierte Bild-Text-Datensätze.",
    },
    strengths: "Das globale Fundament für Open-Source-KI: Perfekt optimiert für On-Premise-Hosting, Fine-Tuning und vollständige Datenhoheit ohne Vendor-Lock-in.",
  },
  {
    rank: 8,
    name: "Qwen 2.5 Max / QwQ-32B",
    provider: "Alibaba Cloud (China)",
    license: "Open-Weight",
    cutoff: "Dezember 2024",
    benchmarkHighlights: "MMLU-Pro, LiveCodeBench, HumanEval, Multilingual 29+ Languages",
    dataSources: {
      web: "Über 18 Billionen Tokens aus globalen Web-Crawls mit ausgewogener Abdeckung des asiatischen, europäischen und nordamerikanischen Sprachraums.",
      books: "Wissenschaftliche Publikationen, Lexika, technische Lehrbücher und Gesetzessammlungen.",
      code: "GitHub, Entwickler-Foren und umfangreiche synthetische Code-Instruktionsdaten.",
      media: "Text & Code im Basismodell; Qwen 2.5-VL verarbeitet hochauflösende Dokumente, technische Zeichnungen und Langform-Videos.",
    },
    strengths: "Hervorragende Programmierleistung, führend bei mathematischem Reasoning (QwQ-32B) und extrem stark in mehrsprachigen Industrieanwendungen.",
  },
  {
    rank: 9,
    name: "Mistral Large 2 / Pixtral Large",
    provider: "Mistral AI (Frankreich / EU)",
    license: "Proprietär",
    cutoff: "November 2024",
    benchmarkHighlights: "Top EU Flagship Model (123B), CodeGen, Function Calling, 128k Kontext",
    dataSources: {
      web: "Multilingualer Web-Crawl mit Schwerpunkt auf EU-Amtssprachen (Deutsch, Französisch, Spanisch, Italienisch, Englisch) unter DSGVO-Auditierung.",
      books: "Europäische wissenschaftliche Archive, juristische Primärtexte (EUR-Lex) und Fachliteratur.",
      code: "Hochwertige GitHub-Repositories aller relevanten modernen Programmiersprachen.",
      media: "Text & Code im Large 2; Pixtral Large erweitert um hochpräzises Verstehen komplexer Dokumenten- und Bildstrukturen.",
    },
    strengths: "Das europäische Spitzenmodell: Entwickelt mit nativem Fokus auf europäische Souveränität, EU AI Act Compliance, DSGVO-Konformität und präzise Werkzeugaufrufe.",
  },
  {
    rank: 10,
    name: "Claude 3.5 Haiku",
    provider: "Anthropic (USA)",
    license: "Proprietär",
    cutoff: "Juli 2024",
    benchmarkHighlights: "Sub-Second Latency, SWE-bench Verified (40.6%), Cost-Efficiency Leader",
    dataSources: {
      web: "Bereinigtes öffentliches Web-Archiv, Enzyklopädien und internationale redaktionelle Quellen.",
      books: "Akademische Textsammlungen, Fachaufsätze und Bildungsmedien.",
      code: "Kuratierter GitHub-Code, API-Spezifikationen und synthetische Workflow-Traces.",
      media: "Multimodale Text- und Bildpaare für schnelle Dokumentenverarbeitung.",
    },
    strengths: "Erreicht die Intelligenz und Coding-Fähigkeiten der früheren Opus-Flaggschiffe bei Bruchteilen der Latenz und Kosten – ideal für hochfrequente Agenten-Pipelines.",
  },
];
