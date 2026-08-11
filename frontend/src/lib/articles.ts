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

// Automatisch aktualisierte KI-News Artikel aus den verifizierten RSS-Quellen
export const articles: Article[] = [
  {
    "slug": "e-recht24-ki-kennzeichnungspflicht-fuer-unternehmer-ai-act",
    "title": "KI-Kennzeichnungspflicht für Unternehmer: Was gilt ab August 2026?",
    "summary": "Am 2. August 2026 tritt die Kennzeichnungspflicht der EU-KI-Verordnung (AI Act Art. 50) in Kraft. eRecht24 analysiert die Anforderungen an KI-generierte Texte, Bilder, Audio-Inhalte und Deepfakes für Unternehmen und Solo-Selbstständige.",
    "categorySlug": "policy",
    "tags": [
      "EU AI Act",
      "Kennzeichnungspflicht",
      "Compliance",
      "Deutschland"
    ],
    "sourceName": "eRecht24",
    "sourceUrl": "https://www.e-recht24.de/ki/13336-ki-kennzeichnungspflicht-fuer-unternehmer.html",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": true,
    "breaking": true,
    "editorsPick": true,
    "editorsNote": "Wichtige rechtliche Analyse von eRecht24 zur praktischen Umsetzung der KI-Kennzeichnungspflicht gemäß EU AI Act Art. 50."
  },
  {
    "slug": "muse-glimmer-openai-cyber-claude-vs-riemann-hypothesis",
    "title": "Muse Glimmer, OpenAI Cyber ️, Claude vs Riemann Hypothesis",
    "summary": "(Keine Zusammenfassung verfügbar – Originalquelle prüfen.)",
    "categorySlug": "breaking-news",
    "tags": [
      "OpenAI",
      "Anthropic",
      "AI Safety"
    ],
    "sourceName": "TLDR AI",
    "sourceUrl": "https://tldr.tech/ai/2026-08-11",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false,
    "breaking": true
  },
  {
    "slug": "muse-glimmer-from-meta-superintelligence-labs-is-now-available",
    "title": "Muse Glimmer from Meta Superintelligence Labs is now available",
    "summary": "Meta's Muse Glimmer, the first open model released by Meta Superintelligence Labs, is now available. Muse Glimmer is a 30B multimodal model released under the Apache 2.0 license, designed for local coding agents, and accelerated by Ollama's MLX engine with new native DFlash and i",
    "categorySlug": "technisch",
    "tags": [
      "Meta AI",
      "Agentic AI",
      "Hardware"
    ],
    "sourceName": "Ollama Blog",
    "sourceUrl": "https://ollama.com/blog/muse-glimmer",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false,
    "breaking": true,
    "editorsPick": true,
    "editorsNote": "Sehr relevante Entwicklung für das KI-Ökosystem – direkte Leseempfehlung."
  },
  {
    "slug": "meta-is-back-with-muse-glimmer-local-agentic-multimodal-and-open-source",
    "title": "Meta is back with Muse Glimmer: local, agentic, multimodal, and open source",
    "summary": "(Keine Zusammenfassung verfügbar – Originalquelle prüfen.)",
    "categorySlug": "tools",
    "tags": [
      "Meta AI",
      "Hugging Face",
      "Open Source"
    ],
    "sourceName": "Hugging Face Blog",
    "sourceUrl": "https://huggingface.co/blog/muse-glimmer",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false,
    "breaking": true
  },
  {
    "slug": "e-recht24-ki-kennzeichnungspflicht-fuer-unternehmer-ai-act",
    "title": "KI-Kennzeichnungspflicht für Unternehmer: Was gilt ab August 2026?",
    "summary": "Am 2. August 2026 tritt die Kennzeichnungspflicht der EU-KI-Verordnung (AI Act) in Kraft. eRecht24 analysiert die rechtlichen Anforderungen an KI-generierte Texte, Bilder, Audio-Inhalte und Deepfakes für Unternehmen und Solo-Selbstständige.",
    "categorySlug": "policy",
    "tags": [
      "EU AI Act",
      "Kennzeichnungspflicht",
      "Compliance",
      "Deutschland"
    ],
    "sourceName": "eRecht24",
    "sourceUrl": "https://www.e-recht24.de/ki/13336-ki-kennzeichnungspflicht-fuer-unternehmer.html",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": true,
    "breaking": true
  },
  {
    "slug": "patch-seit-mai-verfugbar-ransomware-attackiert-microsoft-sharepoint",
    "title": "Patch seit Mai verfügbar: Ransomware attackiert Microsoft Sharepoint",
    "summary": "Eine schwere Sicherheitslücke in Microsoft SharePoint wird nun von Ransomware ausgenutzt. Ein Patch steht bereit, ungeschützte Systeme auch.",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "Heise Online (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.heise.de/news/Ransomware-attackiert-ungepatchte-Sharepoint-Instanzen-11410721.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "top-10-der-beste-mini-bluetooth-lautsprecher-im-test-marshall-vor-teufel-jbl",
    "title": "Top 10: Der beste Mini-Bluetooth-Lautsprecher im Test: Marshall vor Teufel & JBL",
    "summary": "Klein, leicht, überraschend laut: Das sind die zehn besten Mini-Bluetooth-Lautsprecher aus unseren Tests.",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "Heise Online (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.heise.de/bestenlisten/testsieger/top-10-der-beste-mini-bluetooth-lautsprecher-im-test-marshall-vor-teufel-und-jbl/zdbvdhp?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false,
    "editorsPick": true,
    "editorsNote": "Sehr relevante Entwicklung für das KI-Ökosystem – direkte Leseempfehlung."
  },
  {
    "slug": "brandenburg-cyberangriff-legt-it-system-der-gedenkstatten-lahm",
    "title": "Brandenburg: Cyberangriff legt IT-System der Gedenkstätten lahm",
    "summary": "Die Stiftung Brandenburgische Gedenkstätten wurde Opfer eines Ransomware-Angriffs. IT-Systeme sind derzeit außer Betrieb, ein Datenabfluss wird vermutet.",
    "categorySlug": "breaking-news",
    "tags": [
      "AI Safety"
    ],
    "sourceName": "Heise Online (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.heise.de/news/Brandenburg-Cyberangriff-legt-IT-System-der-Gedenkstaetten-lahm-11410695.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "heimliche-filmerei-petition-gegen-metas-smart-glasses",
    "title": "Heimliche Filmerei: Petition gegen Metas Smart Glasses",
    "summary": "Das Zentrum für Digitalrechte und Demokratie verlangt ein Eingreifen der Bundesnetzagentur gegen heimliche Videoaufnahmen im Alltag. Es drängt auf ein Verbot.",
    "categorySlug": "breaking-news",
    "tags": [
      "Meta AI",
      "Agentic AI"
    ],
    "sourceName": "Heise Online (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.heise.de/news/Kamerabrillen-Digitalrechtler-starten-Petition-gegen-Metas-Smart-Glasses-11410637.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "windows-11-fur-komplett-pcs-und-notebooks-soll-teurer-werden",
    "title": "Windows 11 für Komplett-PCs und Notebooks soll teurer werden",
    "summary": "Microsoft verlangt für OEM-Windows-Lizenzen angeblich bis zu zehn Prozent mehr Geld. Preiserhöhungen gingen bisher wohl unter.",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "Heise Online (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.heise.de/news/Windows-11-fuer-Komplett-PCs-und-Notebooks-soll-teurer-werden-11410587.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "ki-ethikchefin-verlasst-openai-nach-weniger-als-einem-jahr",
    "title": "KI-Ethikchefin verlässt OpenAI nach weniger als einem Jahr",
    "summary": "OpenAI verliert seine für KI-Ethik zuständige Führungskraft. Zugleich arbeitet die frühere Robotikchefin Caitlin Kalinowski nun für Anthropic.",
    "categorySlug": "breaking-news",
    "tags": [
      "OpenAI",
      "Anthropic"
    ],
    "sourceName": "Heise Online (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.heise.de/news/OpenAI-KI-Ethikchefin-geht-nach-weniger-als-einem-Jahr-11410597.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "claude-ki-wasserzeichen-ein-barendienst-fur-die-wahrheit",
    "title": "Claude: KI-Wasserzeichen – ein Bärendienst für die Wahrheit",
    "summary": "Die EU fordert eine Kennzeichnung für KI-Inhalte. Anthropic reagiert mit Wasserzeichen in Claude – doch die Technik birgt Risiken für Nutzer und die Wahrheit.",
    "categorySlug": "breaking-news",
    "tags": [
      "Anthropic",
      "EU AI Act"
    ],
    "sourceName": "Heise Online (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.heise.de/meinung/KI-Wasserzeichen-in-Text-Ein-Stempel-der-falsche-Sicherheit-schafft-11410549.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "heise-revolution-im-daten-dschungel-ki-erfindet-die-testdatengenerierung-neu",
    "title": "heise+ | Revolution im Daten-Dschungel: KI erfindet die Testdatengenerierung neu",
    "summary": "Die Bereitstellung von Testdaten ist komplex. GenAI ermöglicht eine automatisierte, effiziente Erzeugung plausibler und datenschutzkonformer Testdatensätze.",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "Heise Online (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.heise.de/hintergrund/Revolution-im-Daten-Dschungel-KI-erfindet-die-Testdatengenerierung-neu-11394240.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "behorde-erlasst-beschrankungen-bei-panamakanaldurchfahrt-wegen-el-nino",
    "title": "Behörde erlässt Beschränkungen bei Panamakanaldurchfahrt wegen El Niño",
    "summary": "Wegen des niedrigen Wasserstandes hat die Kanalbehörde Beschränkungen beim Passieren des Panamakanals verhängt. Das könnte den weltweiten Handel beeinflussen.",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "Heise Online (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.heise.de/news/Behoerde-erlaesst-Beschraenkungen-bei-Panamakanaldurchfahrt-wegen-El-Nino-11410577.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false,
    "editorsPick": true,
    "editorsNote": "Sehr relevante Entwicklung für das KI-Ökosystem – direkte Leseempfehlung."
  },
  {
    "slug": "akku-rasenmaher-litheli-u20-33-cm-im-test-maht-sehr-leise-und-ist-wendig",
    "title": "Akku-Rasenmäher Litheli U20 33 cm im Test: mäht sehr leise und ist wendig",
    "summary": "Leise, wendig und leicht: Der Akku-Rasenmäher Litheli U20 33 cm ist bestens ausgestattet, um in kleinen Gärten für einen sauber gemähten Rasen zu sorgen.",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "Heise Online (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.heise.de/bestenlisten/testbericht/akku-rasenmaeher-litheli-u20-33-cm-im-test-maeht-sehr-leise-und-ist-wendig/2048j3c?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "testing-ads-in-chatgpt",
    "title": "Testing ads in ChatGPT",
    "summary": "OpenAI begins testing ads in ChatGPT to support free access, with clear labeling, answer independence, strong privacy protections, and user control.",
    "categorySlug": "technisch",
    "tags": [
      "OpenAI"
    ],
    "sourceName": "OpenAI News",
    "sourceUrl": "https://openai.com/index/testing-ads-in-chatgpt",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "why-scaling-ai-compute-performance-requires-a-new-power-architecture",
    "title": "Why Scaling AI Compute Performance Requires a New Power Architecture",
    "summary": "Every new generation of accelerated computing demands more from the infrastructure underneath it — more compute performance, higher rack density and more efficient, scalable power distribution. The bottleneck isn’t just wattage. It’s how power gets from the grid to the GPU.  In t",
    "categorySlug": "hardware",
    "tags": [
      "NVIDIA"
    ],
    "sourceName": "NVIDIA AI Blog",
    "sourceUrl": "https://blogs.nvidia.com/blog/800-vdc-power-architecture-ai-factory/",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "nvidia-and-local-ai-community-fuel-open-source-models-and-intelligent-agents",
    "title": "NVIDIA and Local AI Community Fuel Open Source Models and Intelligent Agents",
    "summary": "The open source ecosystem is making it easier for AI enthusiasts and developers to build, customize and run increasingly capable agents locally.  Throughout August, NVIDIA is celebrating the partners and open source communities moving local AI forward, along with the models, appl",
    "categorySlug": "hardware",
    "tags": [
      "NVIDIA",
      "Open Source",
      "Agentic AI"
    ],
    "sourceName": "NVIDIA AI Blog",
    "sourceUrl": "https://blogs.nvidia.com/blog/local-ai-open-source-models-agents-nemotron/",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "nvidia-nemotron-3-5-lightning-and-nemo-switchyard-deliver-faster-smarter-more-ef",
    "title": "NVIDIA Nemotron 3.5 Lightning and NeMo Switchyard Deliver Faster, Smarter, More Efficient Agentic AI",
    "summary": "As AI shifts from chatbots to autonomous agents, open models are serving market demands for full control over where AI runs and how it’s deployed and evolves. Today, NVIDIA is expanding its Nemotron 3 model family with Nemotron 3.5 Lightning, the highest-efficiency model in its c",
    "categorySlug": "hardware",
    "tags": [
      "NVIDIA",
      "Agentic AI"
    ],
    "sourceName": "NVIDIA AI Blog",
    "sourceUrl": "https://blogs.nvidia.com/blog/nemotron-lightning-switchyard-rtx-dgx/",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "how-onestruction-built-the-ishigaki-ids-foundation-model-with-aws-genaiic",
    "title": "How ONESTRUCTION built the Ishigaki-IDS foundation model with AWS GenAIIC",
    "summary": "ONESTRUCTION, with technical advisory from the AWS Generative AI Innovation Center, built Ishigaki-IDS, a foundation model specialized for construction and BIM workflows. This architectural case study shows how they combined synthetic data, a three-stage training pipeline, and ve",
    "categorySlug": "technisch",
    "tags": [
      "KI News"
    ],
    "sourceName": "AWS Machine Learning Blog",
    "sourceUrl": "https://aws.amazon.com/blogs/machine-learning/how-onestruction-built-the-ishigaki-ids-foundation-model-with-aws-genaiic/",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "how-pixieset-achieved-35-ai-feature-adoption-by-solving-the-right-problem-with-a",
    "title": "How Pixieset achieved 35% AI feature adoption by solving the right problem with Amazon Bedrock",
    "summary": "Photographers are among the most skeptical audiences for generative AI. Learn how Pixieset used Amazon Bedrock to launch an AI-generated alt text feature to millions of users in four months, reaching 35% adoption by automating the tedious image SEO work photographers avoid, witho",
    "categorySlug": "technisch",
    "tags": [
      "KI News"
    ],
    "sourceName": "AWS Machine Learning Blog",
    "sourceUrl": "https://aws.amazon.com/blogs/machine-learning/how-pixieset-achieved-35-ai-feature-adoption-by-solving-the-right-problem-with-amazon-bedrock/",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "first-orion-accelerates-qa-automation-using-amazon-nova-act",
    "title": "First Orion accelerates QA automation using Amazon Nova Act",
    "summary": "Learn how First Orion, a branded communications company, shifted from brittle script-based UI testing to AI-driven QA automation with Amazon Nova Act. By describing tests in plain English instead of maintaining selector-based code, they cut QA cycle times, freed engineering capac",
    "categorySlug": "technisch",
    "tags": [
      "KI News"
    ],
    "sourceName": "AWS Machine Learning Blog",
    "sourceUrl": "https://aws.amazon.com/blogs/machine-learning/first-orion-accelerates-qa-automation-using-amazon-nova-act/",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "deploying-anthropic-claude-apps-gateway-for-aws-for-enterprise-workloads",
    "title": "Deploying Anthropic Claude apps gateway for AWS for enterprise workloads",
    "summary": "Claude apps gateway is a self-hosted governance layer between Claude Code and Claude Desktop and Amazon Bedrock or Claude Platform on AWS. This post presents a production reference deployment covering end-to-end architecture, enterprise deployment patterns, cost, and implementati",
    "categorySlug": "technisch",
    "tags": [
      "Anthropic"
    ],
    "sourceName": "AWS Machine Learning Blog",
    "sourceUrl": "https://aws.amazon.com/blogs/machine-learning/deploying-anthropic-claude-apps-gateway-for-aws-for-enterprise-workloads/",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "thinking-of-ace-we-can-do-it-with-fewer-tokens",
    "title": "Thinking of ACE? We Can Do It with Fewer Tokens",
    "summary": "(Keine Zusammenfassung verfügbar – Originalquelle prüfen.)",
    "categorySlug": "tools",
    "tags": [
      "Hugging Face"
    ],
    "sourceName": "Hugging Face Blog",
    "sourceUrl": "https://huggingface.co/blog/ibm-research/altk-evolve-sldd",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "how-many-of-your-agent-s-calls-actually-need-a-frontier-model",
    "title": "How many of your agent's calls actually need a frontier model?",
    "summary": "We benchmarked NVIDIA NeMo Switchyard on 145 agent tasks. Only 7% of turns needed a frontier model, and routing cut cost 74% for six points of accuracy.",
    "categorySlug": "technisch",
    "tags": [
      "NVIDIA",
      "Agentic AI"
    ],
    "sourceName": "LangChain Blog",
    "sourceUrl": "https://www.langchain.com/blog/switchyard-agent-routing-benchmark",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "nvidia-nemotron-3-5-lightning",
    "title": "NVIDIA Nemotron 3.5 Lightning",
    "summary": "NVIDIA Nemotron 3.5 Lightning is now available on Ollama. It's a 30 billion parameter (3B active) open model built for agents that stay running, gathering context, calling tools, and working through multi-step tasks on your own hardware.",
    "categorySlug": "technisch",
    "tags": [
      "Meta AI",
      "NVIDIA",
      "Agentic AI"
    ],
    "sourceName": "Ollama Blog",
    "sourceUrl": "https://ollama.com/blog/nemotron-3-5-lightning",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "digital-networks-acts-kupferabschaltung-ist-keine-enteignung",
    "title": "Digital Networks Acts: Kupferabschaltung ist keine Enteignung",
    "summary": "Die Abschaltung der alten Kupfernetze in der EU ist keine entschädigungspflichtige Enteignung. Zu diesem Ergebnis kommt ein Rechtsgutachten des Breko. (Glasfaser, DSL)",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "Golem – KI",
    "sourceUrl": "https://www.golem.de/news/digital-networks-acts-kupferabschaltung-ist-keine-enteignung-2608-211830.html",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "anzeige-hazet-smartcase-mit-69-teilen-bei-amazon-gunstiger",
    "title": "Anzeige: Hazet Smartcase mit 69 Teilen bei Amazon günstiger",
    "summary": "Das Hazet Smartcase mit kurzen und langen Bits ist bei Amazon günstiger als in vielen anderen Shops. (Technik/Hardware)",
    "categorySlug": "breaking-news",
    "tags": [
      "Hardware"
    ],
    "sourceName": "Golem – KI",
    "sourceUrl": "https://www.golem.de/news/anzeige-hazet-smartcase-mit-69-teilen-bei-amazon-guenstiger-2608-211828.html",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "anzeige-beliebtes-akku-multifunktionswerkzeug-von-fanttik-gunstig-wie-seit-monat",
    "title": "Anzeige: Beliebtes Akku-Multifunktionswerkzeug von Fanttik günstig wie seit Monaten nicht",
    "summary": "Das unter Amazon-Kunden beliebte Fanttik F2 Master Mini-Akku-Multifunktionswerkzeug ist für unter 60 Euro im Angebot. (Technik/Hardware, Amazon)",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act",
      "Hardware"
    ],
    "sourceName": "Golem – KI",
    "sourceUrl": "https://www.golem.de/news/anzeige-beliebtes-akku-multifunktionswerkzeug-von-fanttik-guenstig-wie-seit-monaten-nicht-2608-211829.html",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "frequenzen-starlink-konkurrent-iris2-wird-kein-direct-to-device-beherrschen",
    "title": "Frequenzen: Starlink-Konkurrent Iris² wird kein Direct-to-Device beherrschen",
    "summary": "Eutelsat hatte groß angekündigt, dass Iris² mit dem 5G-Standard für Non-Terrestrial Networks arbeiten wird. Doch das ist eher aus der Not geboren. (Satelliteninternet, Politik)",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "Golem – KI",
    "sourceUrl": "https://www.golem.de/news/frequenzen-starlink-konkurrent-iris-wird-kein-direct-to-device-beherrschen-2608-211826.html",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "anzeige-reiserouter-mit-wi-fi-7-wieder-zum-tiefstpreis",
    "title": "Anzeige: Reiserouter mit Wi-Fi 7 wieder zum Tiefstpreis",
    "summary": "War noch nie günstiger als jetzt: Amazon verkauft den GL.iNet EL-E5800 Reiserouter mit über 50 Euro Rabatt. (Router, WLAN)",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "Golem – KI",
    "sourceUrl": "https://www.golem.de/news/anzeige-reiserouter-mit-wi-fi-7-wieder-zum-tiefstpreis-2608-211825.html",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "g-artificial-intelligence-the-ai-threat-to-india-s-it-jobs-machine",
    "title": "(g+) Artificial Intelligence: The AI threat to India's IT jobs machine",
    "summary": "The country has bet big on tech services but disruption is coming Von Chris Kay (Wirtschaft, KI)",
    "categorySlug": "breaking-news",
    "tags": [
      "Hardware"
    ],
    "sourceName": "Golem – KI",
    "sourceUrl": "https://www.golem.de/news/artificial-intelligence-the-ai-threat-to-india-s-it-jobs-machine-2608-211823.html",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "anzeige-jbl-tune-530bt-kopfhorer-zum-tiefstpreis-fur-nur-34-99-euro",
    "title": "Anzeige: JBL Tune 530BT Kopfhörer zum Tiefstpreis für nur 34,99 Euro",
    "summary": "Die kabellosen JBL Tune 530BT On-Ear-Kopfhörer bieten eine sehr lange Akkulaufzeit und aktives Noise Cancelling. Bei Amazon gibt es die Kopfhörer zum Bestpreis. (Technik/Hardware, Kopfhörer)",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act",
      "Hardware"
    ],
    "sourceName": "Golem – KI",
    "sourceUrl": "https://www.golem.de/news/anzeige-jbl-tune-530bt-kopfhoerer-zum-tiefstpreis-fuer-nur-34-99-euro-2608-211821.html",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "porsche-bmw-audi-elektrische-luxusautos-mit-kaufpramie-finanziert",
    "title": "Porsche, BMW, Audi: Elektrische Luxusautos mit Kaufprämie finanziert",
    "summary": "Die Kaufprämie für E-Autos richtet sich an Haushalte mit niedrigem Einkommen. Doch gefördert wurden auch ein BMW i7 oder ein Porsche Taycan. (Elektroauto, Auto)",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "Golem – KI",
    "sourceUrl": "https://www.golem.de/news/porsche-bmw-audi-elektrische-luxusautos-mit-kaufpraemie-finanziert-2608-211822.html",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "meta-chef-ignoriert-realitat-mark-zuckerberg-traumt-von-positiver-ki-zukunft",
    "title": "Meta-Chef ignoriert Realität: Mark Zuckerberg träumt von positiver KI-Zukunft",
    "summary": "Mark Zuckerbergs Vorstellungen einer Zukunft mit KI enthalten viele Floskeln und kaum Neues. (KI, Mark Zuckerberg)",
    "categorySlug": "breaking-news",
    "tags": [
      "Meta AI",
      "EU AI Act"
    ],
    "sourceName": "Golem – KI",
    "sourceUrl": "https://www.golem.de/news/meta-chef-ignoriert-realitaet-mark-zuckerberg-traeumt-von-positiver-ki-zukunft-2608-211819.html",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "anzeige-bluetooth-tastatur-fur-ios-und-android-fur-16-97-euro-bei-amazon",
    "title": "Anzeige: Bluetooth-Tastatur für iOS und Android für 16,97 Euro bei Amazon",
    "summary": "Eine schlanke Bluetooth-Tastatur mit Akku für komfortable Eingaben auf dem Smartphone und Tablet ist bei Amazon zum Schnäppchenpreis erhältlich. (Tastatur, Eingabegerät)",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "Golem – KI",
    "sourceUrl": "https://www.golem.de/news/anzeige-bluetooth-tastatur-fuer-ios-und-android-fuer-16-97-euro-bei-amazon-2608-211818.html",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "abseits-der-schlagzeilen-warum-deutschlands-wichtigste-ki-projekte-in-fabriken-s",
    "title": "Abseits der Schlagzeilen: Warum Deutschlands wichtigste KI-Projekte in Fabriken stattfinden",
    "summary": "Deutschland ist nicht für seine KI-Modelle und -Infrastruktur bekannt. Im industriellen Mittelstand steht die Bundesrepublik aber gut da – noch. Kann KI „Made iweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act",
      "Deutschland"
    ],
    "sourceName": "t3n (allgemein, nach KI filtern)",
    "sourceUrl": "https://t3n.de/news/deutschland-industrial-ai-1750801/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "bucher-im-internet-verkaufen-warum-jeff-bezos-idee-im-jahr-1995-fur-viele-absurd",
    "title": "Bücher im Internet verkaufen? Warum Jeff Bezos’ Idee im Jahr 1995 für viele absurd klang",
    "summary": "In der Gründungsphase eines Unternehmens ist das Einsammeln von Startkapital oft eine frustrierende Angelegenheit. Selbst bei den heute wertvollsten Konzernen der Welt lief das nicht anders. Eine Rückschau zeigt erstaunliche Parallelen zur Gegenwart.\nweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "t3n (allgemein, nach KI filtern)",
    "sourceUrl": "https://t3n.de/news/jeff-bezos-amazon-1995-1751769/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "update-garantie-fur-smartphones-so-lange-kannst-du-die-gerate-von-samsung-apple-",
    "title": "Update-Garantie für Smartphones: So lange kannst du die Geräte von Samsung, Apple und Google nutzen",
    "summary": "Wer sich ein neues Smartphone aussucht, sollte nicht nur auf gute Hardware achten. Ebenso wichtig ist, wie lange Android-Geräte und iPhones Updates erhalten. Wie lange unterstützen die Hersteller ihre Smartphones?\nweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "Google DeepMind",
      "EU AI Act",
      "Hardware"
    ],
    "sourceName": "t3n (allgemein, nach KI filtern)",
    "sourceUrl": "https://t3n.de/news/update-garantie-smartphones-apple-google-samsung-1757485/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "digitale-barrierefreiheit-warum-es-um-viel-mehr-als-nur-das-vermeiden-von-bu-gel",
    "title": "Digitale Barrierefreiheit: Warum es um viel mehr als nur das Vermeiden von Bußgeldern geht",
    "summary": "Wer Websites und andere digitale Touchpoints barrierefrei gestaltet, erfüllt nicht nur gesetzliche Vorgaben, sondern verbessert gleichzeitig Reichweite, Sichtbaweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "t3n (allgemein, nach KI filtern)",
    "sourceUrl": "https://t3n.de/news/digitale-barrierefreiheit-marketing-1753917/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "world-train-map-diese-karte-zeigt-mehr-als-1-200-zugrouten-auf-der-ganzen-welt",
    "title": "World Train Map: Diese Karte zeigt mehr als 1.200 Zugrouten auf der ganzen Welt",
    "summary": "Ein norwegischer Entwickler hat ein Projekt veröffentlicht, das tief in die komplexe Struktur weltweiter Verkehrsdaten blickt. Das interaktive Ergebnis offenbart die Herausforderungen bei der fehlerfreien Kombination offener Datenquellen zu einem Gesamtbild.\nweiterlesen auf t3n.d",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "t3n (allgemein, nach KI filtern)",
    "sourceUrl": "https://t3n.de/news/world-train-map-architektur-globale-bahnkarte-1757600/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "flugsicherheit-in-den-usa-warum-ausgerechnet-gamer-fluglotsen-ersetzen-sollen",
    "title": "Flugsicherheit in den USA: Warum ausgerechnet Gamer Fluglotsen ersetzen sollen",
    "summary": "In Videospielen wie Fortnite sind Konzentration und schnelle Entscheidungen gefragt. Da diese Fähigkeiten auch bei der Sicherung des Flugverkehrs zählen, rekrutiert die US-Regierung jetzt in der Gaming-Szene.\nweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "RAG"
    ],
    "sourceName": "t3n (allgemein, nach KI filtern)",
    "sourceUrl": "https://t3n.de/news/flugsicherheit-in-den-usa-warum-ausgerechnet-gamer-fluglotsen-ersetzen-sollen-1757567/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "zu-abhangig-von-google-und-meta-so-machst-du-deine-marketing-infrastruktur-krise",
    "title": "Zu abhängig von Google und Meta? So machst du deine Marketing-Infrastruktur krisenfest",
    "summary": "Die Abhängigkeit von US-amerikanischen Tech-Giganten ist massiv. Cloud-Speicher, Werbe-Technologien, Daten – viele Bereiche sind auch im Marketing betroffen. Waweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "Google DeepMind",
      "Meta AI"
    ],
    "sourceName": "t3n (allgemein, nach KI filtern)",
    "sourceUrl": "https://t3n.de/news/abhaengig-von-google-und-meta-1732343/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "bastler-bringen-macos-aufs-ipad-warum-du-das-nicht-nachmachen-solltest",
    "title": "Bastler bringen macOS aufs iPad: Warum du das nicht nachmachen solltest",
    "summary": "Ein Open-Source-Projekt hat eine Möglichkeit entwickelt, ein echtes Mac-Betriebssystem auf Apple-Tablets zu installieren. Was man dafür braucht und welche Nachteile das hat.weiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "Open Source"
    ],
    "sourceName": "t3n (allgemein, nach KI filtern)",
    "sourceUrl": "https://t3n.de/news/bastler-bringen-macos-aufs-ipad-warum-du-das-nicht-nachmachen-solltest-1757523/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "funf-tage-so-gut-wie-fruher-einer-wie-der-dwd-mit-ki-satelliten-und-flugzeugen-b",
    "title": "„Fünf Tage so gut wie früher einer“: Wie der DWD mit KI, Satelliten und Flugzeugen bessere Wetterprognosen erstellt",
    "summary": "Seit 65 Jahren schon macht der Deutsche Wetterdienst Wettervorhersagen. Vieles lässt sich mittlerweile gut berechnen, doch vor allem ein atmosphärisches Phänomeweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "t3n (allgemein, nach KI filtern)",
    "sourceUrl": "https://t3n.de/news/fuenf-tage-so-gut-wie-frueher-einer-wie-der-dwd-mit-ki-satelliten-und-flugzeugen-bessere-wetterprognosen-erstellt-1757329/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "85-prozent-der-ki-projekte-scheitern-und-die-technologie-ist-nicht-schuld",
    "title": "85 Prozent der KI-Projekte scheitern – und die Technologie ist nicht schuld",
    "summary": "Laut einer neuen Umfrage zählt KI für Marketingentscheider zu den wichtigsten strategischen Themen. Viele Projekte kommen jedoch nicht über den Pilotmodus hinaus und scheitern. Was Unternehmen anders machen, die Künstliche Intelligenz wirklich erfolgreich in der Organisation vera",
    "categorySlug": "breaking-news",
    "tags": [
      "RAG",
      "EU AI Act",
      "Hardware"
    ],
    "sourceName": "t3n (allgemein, nach KI filtern)",
    "sourceUrl": "https://t3n.de/news/wieso-85-prozent-der-ki-projekte-scheitern-1754718/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "openai-launches-chatgpt-desktop-app-for-linux",
    "title": "OpenAI launches ChatGPT desktop app for Linux",
    "summary": "OpenAI is finally bringing a dedicated ChatGPT desktop app to Linux operating systems.",
    "categorySlug": "business",
    "tags": [
      "OpenAI",
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/08/11/openai-launches-chatgpt-desktop-app-for-linux/",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "google-s-gemini-app-surges-to-one-billion-users",
    "title": "Google’s Gemini app surges to one billion users",
    "summary": "Gemini is keeping pace with OpenAI’s ChatGPT, which hit 1 billion monthly active users back in June.",
    "categorySlug": "business",
    "tags": [
      "OpenAI",
      "Google DeepMind",
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/08/11/googles-gemini-app-surges-to-one-billion-users/",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "brad-lightcap-openai-s-longtime-coo-is-leaving-to-start-something-new",
    "title": "Brad Lightcap, OpenAI’s longtime COO, is leaving to ‘start something new’",
    "summary": "One of OpenAI's longest-serving executives is headed out the door, although the longtime COO told staff that he was \"excited to help you all advance the mission from a different vantage point.\"",
    "categorySlug": "business",
    "tags": [
      "OpenAI",
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/08/11/brad-lightcap-openais-longtime-coo-is-leaving-to-start-something-new/",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "general-catalyst-leads-1-1b-round-into-2-month-old-river-ai",
    "title": "General Catalyst leads $1.1B round into 2-month-old River AI",
    "summary": "River AI, a startup founded by xAI co-founder Igor Babuschkin, has a fascinating vision for personal agents and secured $1.1 billion out of the gate.",
    "categorySlug": "business",
    "tags": [
      "Agentic AI",
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/08/11/general-catalyst-leads-1-1b-round-into-2-month-old-river-ai/",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "an-unreleased-anthropic-model-made-progress-on-one-of-math-s-biggest-unsolved-pr",
    "title": "An unreleased Anthropic model made progress on one of math’s biggest unsolved problems",
    "summary": "For more than 150 years, the Riemann hypothesis has stood as one of the major unsolved problems in mathematics. Anthropic hasn't solved it — but the company's models made more progress than you might expect.",
    "categorySlug": "business",
    "tags": [
      "Anthropic",
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/08/11/an-unreleased-anthropic-model-made-progress-on-one-of-maths-biggest-unsolved-problems/",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "spotify-will-label-ai-persona-profiles-and-exclude-their-music-from-recommendati",
    "title": "Spotify will label ‘AI Persona’ profiles and exclude their music from recommendations",
    "summary": "Spotify is introducing “AI Persona” labels for artist profiles that represent AI-generated identities and will exclude their music from editorial, algorithmic, and personalized recommendations by default.",
    "categorySlug": "business",
    "tags": [
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/08/11/spotify-will-label-ai-persona-profiles-and-exclude-their-music-from-recommendations/",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "anthropic-says-it-will-watermark-text-generated-by-its-ai-models",
    "title": "Anthropic says it will watermark text generated by its AI models",
    "summary": "Anthropic will extend support for watermarking AI generations for older models as well.",
    "categorySlug": "business",
    "tags": [
      "Anthropic",
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/08/11/anthropic-says-it-will-watermark-text-generated-by-its-ai-models/",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "openai-reportedly-completed-a-7-billion-employee-tender-offer",
    "title": "OpenAI reportedly completed a $7 billion employee tender offer",
    "summary": "San Francisco's housing market is in trouble again.",
    "categorySlug": "business",
    "tags": [
      "OpenAI",
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/08/10/openai-reportedly-completed-a-7-billion-employee-tender-offer/",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "39-minuten-lesezeit-ich-habe-mark-zuckerbergs-ki-essay-gelesen-damit-ihr-es-nich",
    "title": "39 Minuten Lesezeit: Ich habe Mark Zuckerbergs KI-Essay gelesen, damit ihr es nicht müsst",
    "summary": "Hat sich sonst noch irgendwer die Zeit genommen? Zuckerberg schafft es trotz der vielen Worte nicht so richtig, eine positive Vision von KI zu entwickeln.",
    "categorySlug": "business",
    "tags": [
      "KI News"
    ],
    "sourceName": "Gründerszene (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.businessinsider.de/gruenderszene/ich-habe-mark-zuckerbergs-ki-essay-gelesen-damit-ihr-es-nicht-muesst/",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "wie-gewinnt-man-die-ersten-kunden-diese-grunder-setzen-auf-einen-ungewohnlichen-",
    "title": "Wie gewinnt man die ersten Kunden? Diese Gründer setzen auf einen ungewöhnlichen (Party)-Trick",
    "summary": "Garry Lazovskis und Minh Vu Ngo haben ihr Produkt fertiggestellt – und wollen es jetzt mit einer Party bekannt machen.",
    "categorySlug": "business",
    "tags": [
      "KI News"
    ],
    "sourceName": "Gründerszene (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.businessinsider.de/gruenderszene/wie-gewinnt-man-die-ersten-kunden-gruender-setzen-auf-einen-party-trick/",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "dieses-wort-verrat-ob-grunder-ihre-bewerbung-fur-den-beruhmtesten-startup-accele",
    "title": "Dieses Wort verrät, ob Gründer ihre Bewerbung für den berühmtesten Startup-Accelerator von KI schreiben ließen",
    "summary": "Y Combinator-Bewerbungen werden länger – und klingen zunehmend nach KI. Welche Wörter und Schreibweisen seit dem Siegeszug von ChatGPT häufiger auftauchen.",
    "categorySlug": "business",
    "tags": [
      "OpenAI"
    ],
    "sourceName": "Gründerszene (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.businessinsider.de/gruenderszene/news/dieses-wort-verraet-ob-gruender-ihre-bewerbung-von-ki-schreiben-liessen/",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "8-investoren-2-neuzugange-das-ist-das-neue-lowenrudel-in-staffel-20-von-die-hohl",
    "title": "8 Investoren, 2 Neuzugänge: Das ist das neue Löwenrudel in Staffel 20 von „Die Höhle der Löwen“",
    "summary": "Acht statt sechs Löwen kämpfen in der 20. Staffel um die besten Deals. Neu dabei sind SNOCKS-Gründer Johannes Kliesch und Getränkeun­ternehmer Andreas Herb.",
    "categorySlug": "business",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "Gründerszene (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.businessinsider.de/gruenderszene/news/8-investoren-2-neuzugaenge-das-ist-das-neue-loewenrudel-in-staffel-20-von-die-hoehle-der-loewen/",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "will-google-dieses-startup-fur-1-5-milliarden-dollar-kaufen",
    "title": "Will Google dieses Startup für 1,5 Milliarden Dollar kaufen?",
    "summary": "Programmierende Agenten gehören derzeit zu den gefragtesten Anwendungsfällen für KI. Wie Insider berichten, plant Google dafür den Kauf eines Startups.",
    "categorySlug": "business",
    "tags": [
      "Google DeepMind",
      "RAG",
      "Agentic AI"
    ],
    "sourceName": "Gründerszene (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.businessinsider.de/gruenderszene/business/will-google-dieses-startup-fuer-15-milliarden-dollar-kaufen/",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "so-habe-ich-meine-app-in-den-app-store-gebracht-schritt-fur-schritt",
    "title": "So habe ich meine App in den App Store gebracht – Schritt für Schritt",
    "summary": "Per Vibecoding hat Klaas Wibker seine App gebaut und im App Store veröffentlicht. Diese Tools und Workflows hat er genutzt.",
    "categorySlug": "business",
    "tags": [
      "KI News"
    ],
    "sourceName": "Gründerszene (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.businessinsider.de/gruenderszene/gruenderszene-sucht-die-super-gruender/fellows/app-in-den-app-store-bringen-schritt-fuer-schritt/",
    "publishedAt": "2026-08-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "diese-7-ki-startups-haben-einen-uberraschenden-investor-die-telekom",
    "title": "Diese 7 KI-Startups haben einen überraschenden Investor: die Telekom",
    "summary": "Von der Telefonzelle zum Unicorn-Hirten. Die Telekom hat in einige der namhaftesten deutschen Technologie-Startups investiert.",
    "categorySlug": "business",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "Gründerszene (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.businessinsider.de/gruenderszene/ki-startups-diese-7-haben-einen-ueberraschenden-investor/",
    "publishedAt": "2026-08-11",
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
