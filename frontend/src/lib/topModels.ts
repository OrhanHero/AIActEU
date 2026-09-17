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
    name: "Claude Fable 5.1 / Opus 5",
    provider: "Anthropic (USA)",
    license: "Proprietär",
    cutoff: "Juni 2026",
    benchmarkHighlights: "Artificial Analysis Intelligence Index #1 (Score: 66), AA-Briefcase #1, SWE-bench Verified 78.4%",
    dataSources: {
      web: "Massiv gefilterter Qualitäts-Web-Crawl unter strengem Ausschluss von PII und synthetischem Textrauschen; kuratierte Enzyklopädien und internationale Qualitätsmedien.",
      books: "Wissenschaftliche Verlagsarchive, lizenzierte Fachbibliotheken und akademische Repositorien (arXiv, PubMed, IEEE).",
      code: "Hochwertige GitHub-Repositories (Permissive Lizenzen), synthetische Reasoning-Traces und verifizierte Multi-Agenten-Workflows.",
      media: "Nativ omnimodal verarbeitete Architekturdiagramme, GUI-Interaktionsdaten und hochauflösende Dokumente mit Strukturparsing.",
    },
    strengths: "Weltweit führend bei agentischer Wissensarbeit, komplexem Software-Engineering und autonomer Forschung mit präziser Selbstreflexion und Extended-Thinking.",
  },
  {
    rank: 2,
    name: "OpenAI GPT-6 Astra / o3",
    provider: "OpenAI (USA)",
    license: "Proprietär",
    cutoff: "Juli 2026",
    benchmarkHighlights: "Gleichauf mit Fable 5.1 in Intelligence & Coding Agent Index, ARC-AGI-2 Top-Score, ~40% geringere Inferenzkosten",
    dataSources: {
      web: "Kuratierter globaler Web-Crawl mit strukturierter Echtzeit-Indizierung, lizenzierte Verlags- und Medienkooperationen sowie strukturierte Diskursdaten.",
      books: "Fachliteratur aus Höherer Mathematik, theoretischer Physik, Biomedizin und Rechtswissenschaften.",
      code: "Wettbewerbs-Coding-Plattformen, Algorithmensammlungen und massives Reinforcement Learning (RL) auf synthetischen Verifikations-Umgebungen.",
      media: "Multimodale Vektorgrafiken, Schaltpläne, wissenschaftliche Datenvisualisierungen und synchrone Audioströme.",
    },
    strengths: "Durchbruch bei wissenschaftlichem Frontier-Reasoning, Test-Time Compute Optimierung und industrieller Code-Synthese.",
  },
  {
    rank: 3,
    name: "Gemini 3.8 Flash / Gemini 3.7 Pro",
    provider: "Google DeepMind (USA)",
    license: "Proprietär",
    cutoff: "August 2026",
    benchmarkHighlights: "Intelligence Index 59, Führend an der Pareto-Frontier (Geschwindigkeit vs. Kosten), 4 Mio. Tokens Kontext",
    dataSources: {
      web: "Echtzeitnaher Google Web-Index, weltweite News-Archive, Wikipedia und mehrsprachige redaktionelle Sammlungen.",
      books: "Google Books Digitalisierungsprojekte, akademische Fachzeitschriften und internationale Rechtskommentare.",
      code: "Interne und Open-Source-Codebasen, hochparallele Programmier-Pipelines und kontinuierliches automatisiertes Unit-Testing.",
      media: "Nativ durchgehend omnimodal trainiert auf Live-Video, Audio-Streams, Satelliten- und 3D-Geometriedaten.",
    },
    strengths: "Unübertroffenes 4-Millionen-Token-Kontextfenster für ganze Codebasen; subsekundäre Latenz bei multimodaler Sprach- und Bildinteraktion sowie Google-Workspace-Integration.",
  },
  {
    rank: 4,
    name: "DeepSeek V4.1 Flash / V4 Pro",
    provider: "DeepSeek (China)",
    license: "Open-Weight",
    cutoff: "August 2026",
    benchmarkHighlights: "Intelligence Index 40–52, MATH-500 #1, Multi-Head Latent Attention v2, Ultra-Low Latency",
    dataSources: {
      web: "Multilingualer Web-Crawl (Chinesisch, Englisch, europäische Sprachen), offene Wissenschaftsarchive und kuratierte Fachforen.",
      books: "Mathematische Monografien, Lehrbücher und Preprints (arXiv) unter strikter Wahrung von Open-Access-Lizenzen.",
      code: "Öffentliche GitHub-Repositories und bahnbrechendes Reinforcement Learning mit reinen Selbstverifikations-Umgebungen.",
      media: "Hochgradig optimierte MoE-Architektur mit minimalem VRAM-Fußabdruck; native Dokumenten- und Chart-Verarbeitung.",
    },
    strengths: "Führende Open-Weight-Architektur mit bahnbrechender Kosteneffizienz; unübertroffenes mathematisches und algorithmisches Reasoning bei extrem geringem Ressourcenbedarf.",
  },
  {
    rank: 5,
    name: "Grok 4.6 / Grok 4.5",
    provider: "xAI (USA)",
    license: "Proprietär",
    cutoff: "August 2026 (mit X-Echtzeit-Feed)",
    benchmarkHighlights: "Colossus Supercluster II Training (200k+ GPUs), führend bei agentischer Effizienz und mathematischem Reasoning",
    dataSources: {
      web: "Echtzeit-Datenstrom der X-Plattform, globale Nachrichtenfeeds und strukturierte Wissensdatenbanken.",
      books: "Technische Standardwerke, digitalisierte wissenschaftliche Bibliotheken und Enzyklopädien.",
      code: "Umfangreiche Open-Source-Repositories und systemnahe Dokumentationen für C++, Rust und Python.",
      media: "Multimodale Satelliten-, Bild- und Videoanalyse für Lagebeurteilungen in Echtzeit.",
    },
    strengths: "Höchste Echtzeit-Aktualität durch Live-Synthese globaler Ereignisse; exzellente logische Dekonstruktion komplexer Systeme und agentische Ausführung.",
  },
  {
    rank: 6,
    name: "Kimi K3 (max)",
    provider: "Moonshot AI (China)",
    license: "Proprietär",
    cutoff: "Juli 2026",
    benchmarkHighlights: "Intelligence Index Top 3, AA-Briefcase #2 (Elo 980+), 10 Mio. Long-Context Inferenz",
    dataSources: {
      web: "Globaler multilingualer Web-Crawl mit Fokus auf asiatische und europäische Primärquellen und Finanzarchive.",
      books: "Internationale wissenschaftliche Publikationen, juristische Urteilssammlungen und Fachmonografien.",
      code: "Umfangreiche Programmierkorpora für Web-, System- und Datenanalyse-Workflows.",
      media: "Optimierte Dokumenten- und Langform-PDF-Verarbeitung mit nativer Tabellen- und Diagrammextraktion.",
    },
    strengths: "Überragende Fähigkeiten bei agentischer Wissensarbeit und extrem langen Dokumentenanalysen ohne 'Lost-in-the-Middle'-Effekt.",
  },
  {
    rank: 7,
    name: "Qwen 3.8 Max / QwQ-32B",
    provider: "Alibaba Cloud (China)",
    license: "Open-Weight",
    cutoff: "August 2026",
    benchmarkHighlights: "Intelligence Index 45 (0902 Checkpoint), HumanEval 94%, Multilingual in 35+ Sprachen",
    dataSources: {
      web: "Über 20 Billionen Tokens aus globalen Web-Crawls unter ausgewogener Berücksichtigung europäischer und asiatischer Sprachen.",
      books: "Lexika, technische Fachbücher, Gesetzessammlungen und Bildungsmaterialien.",
      code: "GitHub, Entwicklerplattformen und umfangreiche synthetische Code-Instruktionsdaten.",
      media: "Qwen 3.5-VL Integration für hochauflösende technische Zeichnungen, Schaltpläne und Videos.",
    },
    strengths: "Hervorragende Programmierleistung, starkes mathematisches Reasoning und breite internationale Sprachabdeckung für globale Industrieanwendungen.",
  },
  {
    rank: 8,
    name: "Muse Spark 1.3 / Llama 4",
    provider: "Meta AI (USA)",
    license: "Open-Weight",
    cutoff: "Juli 2026",
    benchmarkHighlights: "Frontier Open-Weight Flagship, SWE-bench Verified 64%, Virtualisierte Agenten-Umgebungen ('Muse')",
    dataSources: {
      web: "Über 20 Billionen Tokens aus öffentlich zugänglichem Web unter strengen Qualitäts- und Entfernungsfiltern für PII.",
      books: "Bereinigte Open-Access-Buchdatensätze und akademische Textarchive.",
      code: "Über 5 Billionen Tokens Quellcode aller modernen Programmiersprachen inklusive synthetischer Denkketten.",
      media: "Nativ omnimodal trainiert auf lizenzierten Bild-, Audio- und Videosequenzen.",
    },
    strengths: "Das globale Fundament für Open-Source-KI und Unternehmens-Deployments mit vollständiger Datenhoheit ohne Vendor-Lock-in.",
  },
  {
    rank: 9,
    name: "Mistral Large 3 / Mistral 3B",
    provider: "Mistral AI (Frankreich / EU)",
    license: "Proprietär",
    cutoff: "Juli 2026",
    benchmarkHighlights: "Top EU Flagship Model, 3 Mrd. € Skalierung, Native EU AI Act Compliance & Governance-Audits",
    dataSources: {
      web: "Multilingualer Web-Crawl mit Schwerpunkt auf EU-Amtssprachen unter vollständiger europäischer Datenschutz-Auditierung.",
      books: "Europäische wissenschaftliche Archive, juristische Primärtexte (EUR-Lex) und Fachliteratur.",
      code: "Hochwertige GitHub-Repositories aller relevanten modernen Programmiersprachen.",
      media: "Pixtral-Architektur für hochpräzises Verstehen komplexer europäischer Industrie- und Verwaltungsdokumente.",
    },
    strengths: "Das europäische Spitzenmodell mit nativem Fokus auf europäische Datensouveränität, DSGVO-Konformität und präzise Funktionsaufrufe.",
  },
  {
    rank: 10,
    name: "Nemotron 3.5 Lightning",
    provider: "NVIDIA (USA)",
    license: "Open-Weight",
    cutoff: "August 2026",
    benchmarkHighlights: "Efficient On-Device Scale Intelligence, Sub-10ms TTFT, Native TensorRT-LLM Integration",
    dataSources: {
      web: "Gezielt auf Dichte und Informationsgehalt gefilterte Web-Auszüge und technische Dokumentationen.",
      books: "Informatik-, Robotik- und ingenieurwissenschaftliche Fachpublikationen.",
      code: "CUDA-, C++- und Python-Repositories, Systemtreiber und hardwarenahe Optimierungs-Traces.",
      media: "Echtzeit-Sensorik- und Bilddaten für Robotik- und Edge-KI-Anwendungen.",
    },
    strengths: "Extreme Inferenzgeschwindigkeit und Ressourcen-Effizienz für lokale Edge-Systeme, autonome Robotik und Workstations.",
  },
];
