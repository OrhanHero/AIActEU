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
    "slug": "anonymes-ki-modell-ox-alpha-opencode-zhipu-ai",
    "title": "Anonymes KI-Modell „Ox Alpha“ erobert OpenCode Go: Spuren führen zu Zhipu AI",
    "summary": "Auf Entwicklerplattformen wie OpenRouter und OpenCode (jetzt auch im Abonnement OpenCode Go) sorgt ein unter dem Codenamen 'stealth/ox-alpha' anonym veröffentlichtes KI-Modell für Aufsehen. Ox Alpha beeindruckt in Benchmarks für Programmierung und komplexe Agenten-Workflows mit überlegener Leistung und schlägt etablierte Modelle wie GPT-5.6 Sol und Claude Fable 5. Technische Analysen (u. a. Tokenizer-Fingerabdrücke und API-Signaturen) deuten mit hoher Wahrscheinlichkeit auf das chinesische KI-Labor Zhipu AI und dessen kommende Modellgeneration GLM-5 hin. Der Vorfall unterstreicht den Trend zu Stealth-Launches im KI-Sektor und wirft zugleich Fragen zur Herkunftsnachweis- und Transparenzpflicht gemäß EU AI Act auf.",
    "categorySlug": "technisch",
    "tags": [
      "Zhipu AI",
      "OpenCode",
      "Coding AI",
      "EU AI Act"
    ],
    "sourceName": "KuCoin News / OpenCode",
    "sourceUrl": "https://www.kucoin.com/news/flash/anonymous-ai-model-stealth-ox-alpha-shows-superior-programming-skills-technical-clues-point-to-zhipu-ai-s-next-gen-model",
    "publishedAt": "2026-08-22",
    "aiGenerated": false,
    "humanReviewed": true,
    "editorsNote": "Hauptstory der Woche: Der Stealth-Launch von Ox Alpha auf OpenCode Go verdeutlicht, wie globale Entwicklerplattformen anonyme Hochleistungsmodelle vor dem offiziellen Branding testen. Zugleich rückt das Thema KI-Transparenz und Kennzeichnungspflicht (Art. 50/53 EU AI Act) erneut in den Fokus der Entwickler-Community.",
    "relatedLinks": [
      {
        "group": "berichterstattung",
        "sourceName": "OpenCode (X / Twitter)",
        "label": "OpenCode Announcement: Ox Alpha is now available on OpenCode Go too",
        "url": "https://x.com/opencode/status/2090758645499728234"
      },
      {
        "group": "berichterstattung",
        "sourceName": "KuCoin Flash News",
        "label": "Anonymous AI Model 'Stealth Ox Alpha' Shows Superior Programming Skills",
        "url": "https://www.kucoin.com/news/flash/anonymous-ai-model-stealth-ox-alpha-shows-superior-programming-skills-technical-clues-point-to-zhipu-ai-s-next-gen-model"
      },
      {
        "group": "hintergrund",
        "sourceName": "OpenRouter",
        "label": "Model Spec & Benchmarks: stealth/ox-alpha (1M Token Kontext & 131k Output)",
        "url": "https://openrouter.ai/stealth/ox-alpha"
      }
    ],
    "breaking": true,
    "editorsPick": true
  },
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
    "slug": "heise-angebot-ix-workshop-microsoft-365-copilot-fur-it-administratoren",
    "title": "heise-Angebot: iX-Workshop: Microsoft 365 Copilot für IT-Administratoren",
    "summary": "Lernen Sie, wie Sie Microsoft 365 Copilot sicher und datenschutzkonform implementieren.",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "Heise Online",
    "sourceUrl": "https://www.heise.de/news/iX-Workshop-Microsoft-365-Copilot-fuer-IT-Administratoren-11404588.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-22",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "ai-fur-sre-warum-automatisierung-das-ziel-ist-und-ki-nur-ein-werkzeug",
    "title": "AI für SRE: Warum Automatisierung das Ziel ist und KI nur ein Werkzeug",
    "summary": "Severin Neumann kritisiert das Schlagwort „AI SRE“ und plädiert für ein CNCF-Modell, das Reliability-Aufgaben statt Menschen automatisiert.",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "Heise Online",
    "sourceUrl": "https://www.heise.de/hintergrund/AI-fuer-SRE-Warum-Automatisierung-das-Ziel-ist-und-KI-nur-ein-Werkzeug-11364776.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-22",
    "aiGenerated": false,
    "humanReviewed": false,
    "editorsPick": true,
    "editorsNote": "Sehr relevante Entwicklung für das KI-Ökosystem – direkte Leseempfehlung."
  },
  {
    "slug": "ezb-analysten-einbruch-bei-ki-aktien-auch-ohne-blase-zu-erwarten",
    "title": "EZB-Analysten: Einbruch bei KI-Aktien auch ohne Blase zu erwarten",
    "summary": "Sind Aktien aus dem KI-Umfeld überbewertet? Spielt keine Rolle, sagen EZB-Analysten, der prognostizierte Einbruch habe andere Gründe. (Wirtschaft, Börse)",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "Golem.de",
    "sourceUrl": "https://www.golem.de/news/ezb-analysten-einbruch-bei-ki-aktien-auch-ohne-blase-zu-erwarten-2608-212196.html",
    "publishedAt": "2026-08-22",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "wegen-destruktiver-ki-scans-anna-s-archive-ruft-zum-scannen-von-buchern-auf",
    "title": "Wegen destruktiver KI-Scans: Anna's Archive ruft zum Scannen von Büchern auf",
    "summary": "KI-Firmen scannen und zerstören massenhaft Bücher. Die Schattenbibliothek Anna's Archive befürchtet einen Verlust von Kulturgütern. (KI, Urheberrecht)",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "Golem.de",
    "sourceUrl": "https://www.golem.de/news/wegen-destruktiver-ki-scans-anna-s-archive-ruft-zum-scannen-von-buechern-auf-2608-212195.html",
    "publishedAt": "2026-08-22",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "warum-chatgpt-deine-inhalte-ignoriert-und-wie-du-das-anderst",
    "title": "Warum ChatGPT deine Inhalte ignoriert – und wie du das änderst",
    "summary": "Gute Texte allein reichen nicht. Wer in KI-Antworten vorkommen will, muss anders gliedern. Was du an deinen Absätzen ändern musst, mit Vorher-Nachher-Beispiel.\nweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "OpenAI"
    ],
    "sourceName": "t3n",
    "sourceUrl": "https://t3n.de/news/chatgpt-inhalte-ignoriert-llm-readability-optimieren-1758412/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-22",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "wir-lassen-junge-menschen-allein-warum-schuler-sich-den-umgang-mit-ki-noch-oft-s",
    "title": "„Wir lassen junge Menschen allein“: Warum Schüler sich den Umgang mit KI noch oft selbst beibringen müssen",
    "summary": "Bei der aktuellen Debatte steht das Schummeln mit KI oft im Fokus. Genau das empfinden Schüler:innen als nervig. Sie fordern eine bessere Vermittlung von KI-Kompetenz – ohne unter Generalverdacht zu stehen.\nweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "t3n",
    "sourceUrl": "https://t3n.de/news/wir-lassen-junge-menschen-allein-warum-schueler-sich-den-umgang-mit-ki-noch-oft-selbst-beibringen-muessen-1759349/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-22",
    "aiGenerated": false,
    "humanReviewed": false,
    "editorsPick": true,
    "editorsNote": "Sehr relevante Entwicklung für das KI-Ökosystem – direkte Leseempfehlung."
  },
  {
    "slug": "firmendaten-fur-ki-training-google-kauft-mails-einer-pleite-airline",
    "title": "Firmendaten für KI-Training: Google kauft Mails einer Pleite-Airline",
    "summary": "Seit Monaten heißt es im Silicon Valley, interne Chats gescheiterter Startups seien begehrt zum Training Künstlicher Intelligenz. Google schnappt sich jetzt sogar Daten eines ganzen Billigfliegers.\nweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "Google DeepMind",
      "Hardware"
    ],
    "sourceName": "t3n",
    "sourceUrl": "https://t3n.de/news/google-kauft-spirit-airlines-daten-ki-training-1758532/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-22",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "lokale-ki-statt-chatgpt-amp-co-4-tools-fur-einsteiger-fortgeschrittene-und-profi",
    "title": "Lokale KI statt ChatGPT &amp; Co: 4 Tools für Einsteiger, Fortgeschrittene und Profis",
    "summary": "Kleinere Aufgaben lassen sich heute auch mit lokalen KI-Modellen erledigen – ganz ohne Cloud. Wir zeigen euch, mit welchen Tools Einsteiger, Fortgeschrittene unweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "OpenAI",
      "EU AI Act"
    ],
    "sourceName": "t3n",
    "sourceUrl": "https://t3n.de/news/lokale-ki-statt-chatgpt-tools-einsteiger-fortgeschrittene-profis-1751464/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-22",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "eu-ai-act-kommt-so-vermeidest-du-dass-dein-unternehmen-in-die-haftungsfalle-tapp",
    "title": "EU AI Act kommt: So vermeidest du, dass dein Unternehmen in die Haftungsfalle tappt",
    "summary": "75 Prozent der Knowledge Worker nutzen bereits KI, doch meist ohne offizielle Freigabe. Erfahre, wie du aus der Compliance-Lücke eine rechtssichere KI-Governance machst.\nweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "t3n",
    "sourceUrl": "https://t3n.de/news/eu-ai-act-ki-haftung-unternehmen-vermeiden-1755591/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-22",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "ki-sicherheit-neuer-filter-schutzt-sensible-daten-vor-chatgpt",
    "title": "KI-Sicherheit: Neuer Filter schützt sensible Daten vor ChatGPT",
    "summary": "Schon einzelne Informationen können Rückschlüsse auf Personen zulassen. Das stellt besonders für Unternehmen ein Risiko dar. Eine Lösung aus Deutschland soll das Problem beheben.\nweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "OpenAI",
      "EU AI Act",
      "Deutschland"
    ],
    "sourceName": "t3n",
    "sourceUrl": "https://t3n.de/news/ki-sicherheit-privacy-gateway-daten-schuetzen-1758725/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-22",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "your-ai-slop-bores-me-warum-menschen-jetzt-chatgpt-spielen",
    "title": "Your AI Slop Bores Me: Warum Menschen jetzt ChatGPT spielen",
    "summary": "Millionen Menschen nutzen täglich Chatbots, um Fragen beantwortet zu bekommen. Doch was, wenn du plötzlich in die Rolle der KI geworfen wirst? Dieses Spiel zeigt dir, wie es ist, für deine Nutzer:innen Texte und Bilder zu generieren.\nweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "OpenAI",
      "RAG"
    ],
    "sourceName": "t3n",
    "sourceUrl": "https://t3n.de/news/your-ai-slop-bores-me-ki-chat-spiel-1758468/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-22",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "ki-agenten-erobern-die-3d-welt-aber-das-eigentliche-problem-ist-ein-anderes",
    "title": "KI-Agenten erobern die 3D-Welt – aber das eigentliche Problem ist ein anderes",
    "summary": "Code, Text, Bilder, Audio: KI-Agenten haben fast jede kreative Disziplin erreicht. Jetzt kommt 3D dazu – per Chat, ohne CAD. Doch ein Modell zu erzeugen, war nie das Problem. Die Frage ist, ob das Ergebnis taugt. Ein Blick auf Meshys 3D Agent.\nweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "RAG",
      "Agentic AI",
      "EU AI Act"
    ],
    "sourceName": "t3n",
    "sourceUrl": "https://t3n.de/news/meshy-3d-agent-ki-modelle-per-chat-1752981/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-22",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "welche-workstation-fur-cad-3d-und-lokale-ki-warum-lenovo-thinkstations-die-richt",
    "title": "Welche Workstation für CAD, 3D und lokale KI? Warum Lenovo ThinkStations die richtige Wahl sind",
    "summary": "Nicht jeder moderne Arbeitsplatz braucht maximale Leistung. Doch bei CAD, 3D oder lokaler KI zeigt sich schnell die Grenze dieser Systeme. Lenovo ThinkStations wie die ThinkStation P4 sind für professionelle Workloads ausgelegt.\nweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "t3n",
    "sourceUrl": "https://t3n.de/news/lenovo-thinkstation-p4-cad-3d-ki-workstation-1754966/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-22",
    "aiGenerated": false,
    "humanReviewed": false,
    "editorsPick": true,
    "editorsNote": "Sehr relevante Entwicklung für das KI-Ökosystem – direkte Leseempfehlung."
  },
  {
    "slug": "ki-meeting-notizen-warum-sie-oft-falsch-liegen-und-wie-ihr-es-vermeidet",
    "title": "KI-Meeting-Notizen: Warum sie oft falsch liegen – und wie ihr es vermeidet",
    "summary": "KI-generierte Meeting-Notizen sind enorm praktisch. Wirklich fehlerfrei arbeiten diese Systeme allerdings nicht. Das ist ein Problem.Egal ob Microsofts Teams, Gweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "t3n",
    "sourceUrl": "https://t3n.de/news/ki-meeting-notizen-fehler-vermeiden-whisper-teams-zoom-1757464/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-22",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "ki-update-deep-dive-die-zukunft-menschlicher-synchronstimmen-ist-bedroht",
    "title": "KI-Update Deep-Dive: Die Zukunft menschlicher Synchronstimmen ist bedroht",
    "summary": "Streaming-Dienste wollen aufgenommene Synchronstimmen für das KI-Training nutzen. Die Menschen dahinter kämpfen gegen mehr als nur Stimmkopien.",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "Heise Online",
    "sourceUrl": "https://www.heise.de/news/KI-Update-Deep-Dive-Die-Zukunft-menschlicher-Synchronstimmen-ist-bedroht-11420198.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-21",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "heise-angebot-ix-workshop-make-com-und-n8n-geschaftsprozesse-mit-ki-agenten-auto",
    "title": "heise-Angebot: iX-Workshop: Make.com und n8n – Geschäftsprozesse mit KI-Agenten automatisieren",
    "summary": "Lernen Sie, wie Sie mit Make.com und n8n intelligente KI-Agenten für die Automatisierung Ihrer Geschäftsprozesse einsetzen, ohne selbst zu programmieren.",
    "categorySlug": "breaking-news",
    "tags": [
      "Agentic AI",
      "Hardware"
    ],
    "sourceName": "Heise Online",
    "sourceUrl": "https://www.heise.de/news/iX-Workshop-Make-com-und-n8n-Geschaeftsprozesse-mit-KI-Agenten-automatisieren-11404582.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-21",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "anthropic-tritt-aufs-gas-fur-mega-borsengang",
    "title": "Anthropic tritt aufs Gas für Mega-Börsengang",
    "summary": "KI-Anbieter Anthropic hat es offenbar eilig und will laut einem Bericht noch bis Ende dieses Monats den öffentlichen Antrag für seinen Börsengang einreichen.",
    "categorySlug": "breaking-news",
    "tags": [
      "Anthropic",
      "RAG"
    ],
    "sourceName": "Heise Online",
    "sourceUrl": "https://www.heise.de/news/Anthropic-tritt-aufs-Gas-fuer-Mega-Boersengang-11421857.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-21",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "doctolibs-opt-out-in-frankreich-blaupause-fur-gesundheitsdaten-in-deutschland",
    "title": "Doctolibs Opt-out in Frankreich: Blaupause für Gesundheitsdaten in Deutschland?",
    "summary": "Doctolib wird in Frankreich KI-Modelle mit Gesundheitsdaten trainieren. Betroffene können widersprechen. Warum das auch für Deutschland denkbar wäre.",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act",
      "Deutschland"
    ],
    "sourceName": "Heise Online",
    "sourceUrl": "https://www.heise.de/hintergrund/Interview-Doctolib-Gesundheitsdaten-und-Forschung-per-Opt-out-11421496.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-21",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "post-zum-freitag-traumjob-ki-coding-und-der-250-euro-pc",
    "title": "Post zum Freitag: Traumjob, KI-Coding und der 250-Euro-PC",
    "summary": "Der Jobmarkt ist hart umkämpft. Wie Sie Ihre Chancen mit LinkedIn und Co. verbessern sowie weitere Themen lesen Sie in der Post zum Freitag.",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "Heise Online",
    "sourceUrl": "https://www.heise.de/news/Post-zum-Freitag-Traumjob-KI-Coding-und-der-250-Euro-PC-11421572.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-21",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "statt-wearables-google-forscher-messen-korperfett-anhand-von-smartphone-fotos",
    "title": "Statt Wearables: Google-Forscher messen Körperfett anhand von Smartphone-Fotos",
    "summary": "Google zeigt mit Photoscan AI, dass künftig einfache 2D-Bilder ausreichen, um die genaue Verteilung des Fettanteils im Körper darzustellen.",
    "categorySlug": "breaking-news",
    "tags": [
      "Google DeepMind"
    ],
    "sourceName": "Heise Online",
    "sourceUrl": "https://www.heise.de/news/Statt-Wearables-Google-Forscher-messen-Koerperfett-anhand-von-Smartphone-Fotos-11421686.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-21",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "heise-angebot-m365-copilot-im-unternehmen-agents-mit-copilot-studio-und-foundry-",
    "title": "heise-Angebot: M365 Copilot im Unternehmen – Agents mit Copilot Studio und Foundry entwickeln",
    "summary": "M365 Copilot ist mehr als ein KI-Assistent in Office. Agents lassen sich produktiv entwickeln und mit Copilot Studio und Foundry unternehmensweit skalieren.",
    "categorySlug": "breaking-news",
    "tags": [
      "Agentic AI"
    ],
    "sourceName": "Heise Online",
    "sourceUrl": "https://www.heise.de/news/M365-Copilot-im-Unternehmen-Agents-mit-Copilot-Studio-und-Foundry-entwickeln-11420032.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-21",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "apple-tv-apple-intelligence-kommt-via-siri-ai",
    "title": "Apple TV: Apple Intelligence kommt – via Siri AI",
    "summary": "Hinweise in macOS 27 deuten auf einen Rollout der Chatbot-Assistentin auf Apples Fernsehbox hin. Allerdings braucht es dazu wohl ein neues Modell.",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act",
      "Hardware"
    ],
    "sourceName": "Heise Online",
    "sourceUrl": "https://www.heise.de/news/Apple-TV-Apple-Intelligence-kommt-via-Siri-AI-11420948.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-21",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "from-atari-to-eve-online-building-on-15-years-of-ai-research-in-games",
    "title": "From Atari to EVE Online: Building on 15 Years of AI Research in Games",
    "summary": "Google DeepMind partners with game studios to prototype breakthrough AI gameplay.",
    "categorySlug": "technisch",
    "tags": [
      "Google DeepMind"
    ],
    "sourceName": "Google DeepMind Blog",
    "sourceUrl": "https://deepmind.google/blog/from-atari-to-eve-online-building-on-15-years-of-ai-research-in-games/",
    "publishedAt": "2026-08-21",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "agentic-data-operations-platform-adop-data-engineering-into-hours",
    "title": "Agentic Data Operations Platform (ADOP): Data engineering into hours",
    "summary": "The Agentic Data Operations Platform (ADOP) is a reference architecture on Amazon Bedrock that uses specialized AI agents to automate the full Bronze-to-Silver-to-Gold data pipeline lifecycle, compressing new-source onboarding from weeks to hours while keeping data governance and",
    "categorySlug": "technisch",
    "tags": [
      "Agentic AI"
    ],
    "sourceName": "AWS Machine Learning Blog",
    "sourceUrl": "https://aws.amazon.com/blogs/machine-learning/agentic-data-operations-platform-adop-data-engineering-into-hours/",
    "publishedAt": "2026-08-21",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "govern-ai-agent-tool-access-with-amazon-bedrock-agentcore-gateway",
    "title": "Govern AI agent tool access with Amazon Bedrock AgentCore Gateway",
    "summary": "Give your AI agents governed, auditable access to enterprise tools without consolidating infrastructure. This post walks through a four-scope maturity model (Connect, Control, Catalog, and Harden) for building a governed tool gateway with Amazon Bedrock AgentCore, advancing only ",
    "categorySlug": "technisch",
    "tags": [
      "Agentic AI"
    ],
    "sourceName": "AWS Machine Learning Blog",
    "sourceUrl": "https://aws.amazon.com/blogs/machine-learning/govern-ai-agent-tool-access-with-amazon-bedrock-agentcore-gateway/",
    "publishedAt": "2026-08-21",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "reduce-rag-costs-on-amazon-bedrock-with-query-aware-compression",
    "title": "Reduce RAG costs on Amazon Bedrock with query-aware compression",
    "summary": "Input tokens are often a meaningful part of the cost of running Retrieval Augmented Generation (RAG) at scale. This post describes a query-aware context compression pattern on Amazon Bedrock: after retrieval, a smaller model filters retrieved chunks against the query before the p",
    "categorySlug": "technisch",
    "tags": [
      "RAG",
      "AI Safety"
    ],
    "sourceName": "AWS Machine Learning Blog",
    "sourceUrl": "https://aws.amazon.com/blogs/machine-learning/reduce-rag-costs-on-amazon-bedrock-with-query-aware-compression/",
    "publishedAt": "2026-08-21",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "accelerating-aircraft-ifec-diagnostics-with-agentic-ai-on-aws",
    "title": "Accelerating aircraft IFEC diagnostics with agentic AI on AWS",
    "summary": "Panasonic Avionics worked with AWS and the AWS Generative AI Innovation Center to build an agentic AI system on Amazon Bedrock, Amazon SageMaker, and AWS Glue that diagnoses in-flight entertainment and connectivity (IFEC) issues across a global fleet, reducing diagnosis time from",
    "categorySlug": "technisch",
    "tags": [
      "Agentic AI"
    ],
    "sourceName": "AWS Machine Learning Blog",
    "sourceUrl": "https://aws.amazon.com/blogs/machine-learning/accelerating-aircraft-ifec-diagnostics-with-agentic-ai-on-aws/",
    "publishedAt": "2026-08-21",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "measuring-benchmark-optimization-in-speech-recognition",
    "title": "Measuring benchmark optimization in speech recognition",
    "summary": "(Keine Zusammenfassung verfügbar – Originalquelle prüfen.)",
    "categorySlug": "tools",
    "tags": [
      "Hugging Face"
    ],
    "sourceName": "Hugging Face Blog",
    "sourceUrl": "https://huggingface.co/blog/asr-benchmark-optimization",
    "publishedAt": "2026-08-21",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "building-a-100x-cheaper-trace-judge-with-fireworks",
    "title": "Building a 100x Cheaper Trace Judge with Fireworks",
    "summary": "LangChain and Fireworks fine-tuned an open model to mine perceived error signals from production traces, matching frontier model performance at a fraction of the cost.",
    "categorySlug": "technisch",
    "tags": [
      "KI News"
    ],
    "sourceName": "LangChain Blog",
    "sourceUrl": "https://www.langchain.com/blog/building-a-100x-cheaper-trace-judge-with-fireworks",
    "publishedAt": "2026-08-21",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "azure-meta-ist-einer-der-besten-kunden-von-microsoft-ki",
    "title": "Azure: Meta ist einer der besten Kunden von Microsoft-KI",
    "summary": "Obwohl Meta eigene KI-Infrastruktur aufbaut, steigt das Unternehmen laut Insiderberichten zu einem der größten KI-Kunden von Microsofts Cloudsparte Azure auf. (Azure, Microsoft)",
    "categorySlug": "breaking-news",
    "tags": [
      "Meta AI"
    ],
    "sourceName": "Golem.de",
    "sourceUrl": "https://www.golem.de/news/azure-meta-ist-einer-der-besten-kunden-von-microsoft-ki-2608-212189.html",
    "publishedAt": "2026-08-21",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "g-artificial-intelligence-sick-of-ai-slop-so-are-tech-giants",
    "title": "(g+) Artificial Intelligence: Sick of AI Slop? So Are Tech Giants.",
    "summary": "Spotify, LinkedIn and others are trying to dig out of a digital sewage heap full of low-quality content made with artificial intelligence. Von Tiffany Hsu (KI, Google)",
    "categorySlug": "breaking-news",
    "tags": [
      "Google DeepMind",
      "Hardware"
    ],
    "sourceName": "Golem.de",
    "sourceUrl": "https://www.golem.de/news/artificial-intelligence-sick-of-ai-slop-so-are-tech-giants-2608-212185.html",
    "publishedAt": "2026-08-21",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "probefahrt-im-c-400-4matic-ein-kandidat-fur-das-klassische-mercedes-taxi",
    "title": "Probefahrt im C 400 4Matic: Ein Kandidat für das klassische Mercedes-Taxi",
    "summary": "Die neue elektrische C-Klasse hat so viel PS wie die stärkste AMG-Version. Der KI-Assistent äußert sich subtil zu Kanzler Merz und empfiehlt den Dacia Spring. Ein Bericht von Friedhelm Greis (Elektroauto, Auto)",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "Golem.de",
    "sourceUrl": "https://www.golem.de/news/probefahrt-im-c-400-4matic-ein-kandidat-fuer-das-klassische-mercedes-taxi-2608-212147.html",
    "publishedAt": "2026-08-21",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "anthropic-s-opus-4-6-is-a-smut-machine",
    "title": "Anthropic’s Opus 4.6 is a smut-machine",
    "summary": "Anthropic forbids its Claude models from generating sexually explicit content. But a series of tests conducted by TechCrunch found that it didn't take much to get past the restriction.",
    "categorySlug": "business",
    "tags": [
      "Anthropic",
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/08/21/anthropics-opus-4-6-is-a-smut-machine/",
    "publishedAt": "2026-08-21",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "nvidia-partners-with-data-center-developer-cloverleaf",
    "title": "Nvidia partners with data center developer Cloverleaf",
    "summary": "Nvidia continues to pour money into data center development — just as AI data centers bring lots of money into Nvidia.",
    "categorySlug": "business",
    "tags": [
      "NVIDIA",
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/08/21/nvidia-partners-with-data-center-developer-cloverleaf/",
    "publishedAt": "2026-08-21",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "nvidia-just-showed-that-the-harness-not-the-ai-model-is-now-the-real-hero",
    "title": "Nvidia just showed that the harness, not the AI model, is now the real hero",
    "summary": "Nvidia research shows that AI agents can perform well, and not go off the deep end, through fine-tuning, even if the AI model isn't that great at the task.",
    "categorySlug": "business",
    "tags": [
      "NVIDIA",
      "Agentic AI",
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/08/21/nvidia-just-showed-that-the-harness-not-the-ai-model-is-now-the-real-hero/",
    "publishedAt": "2026-08-21",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "starcloud-raises-250-million-for-orbital-data-centers-as-launch-options-dry-up",
    "title": "Starcloud raises $250 million for orbital data centers as launch options dry up",
    "summary": "There's about to be a big fight to secure access to space.",
    "categorySlug": "business",
    "tags": [
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/08/21/starcloud-raises-200-million-for-orbital-data-centers-as-launch-options-dry-up/",
    "publishedAt": "2026-08-21",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "the-doj-is-investigating-a16z-what-does-this-mean-for-venture-capital",
    "title": "The DOJ is investigating a16z. What does this mean for venture capital?",
    "summary": "Andreessen Horowitz has two partners sitting on the boards of companies that now compete with each other: Ben Horowitz at Databricks and Martin Casado at Fivetran. Nothing too scandalous on the surface, except the Department of Justice has reportedly been investigating the arrang",
    "categorySlug": "business",
    "tags": [
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/podcast/the-doj-is-investigating-a16z-what-does-this-mean-for-venture-capital/",
    "publishedAt": "2026-08-21",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "ai-data-startup-micro1-reaches-500m-gross-run-rate-amid-ai-training-boom",
    "title": "AI data startup Micro1 reaches $500M gross run rate amid AI training boom",
    "summary": "Surging demand for AI training data is driving rapid growth for the startup and its rivals.",
    "categorySlug": "business",
    "tags": [
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/08/20/ai-data-startup-micro1-reaches-500m-gross-run-rate-amid-ai-training-boom/",
    "publishedAt": "2026-08-21",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "entlassungswelle-bei-glow25-erst-mitarbeiterzahl-verdoppelt-jetzt-prozesse-mit-k",
    "title": "Entlassungswelle bei Glow25: Erst Mitarbeiterzahl verdoppelt – jetzt „Prozesse mit KI automatisiert“",
    "summary": "Glow25 ist in zwei Jahren von 130 auf 240 Mitarbeiter gewachsen. Jetzt werden Stellen massiv abgebaut. Grund: KI.",
    "categorySlug": "business",
    "tags": [
      "KI News"
    ],
    "sourceName": "Gründerszene",
    "sourceUrl": "https://www.businessinsider.de/gruenderszene/entlassungswelle-bei-glow25-erst-mitarbeiterzahl-verdoppelt-jetzt-durch-ki-ersetzt/",
    "publishedAt": "2026-08-21",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "chatgpt-apple-messages-anthropic-s-meeting-recorder-mistral-agentic-search",
    "title": "ChatGPT Apple Messages, Anthropic’s meeting recorder, Mistral Agentic Search",
    "summary": "(Keine Zusammenfassung verfügbar – Originalquelle prüfen.)",
    "categorySlug": "breaking-news",
    "tags": [
      "OpenAI",
      "Anthropic",
      "Agentic AI"
    ],
    "sourceName": "TLDR AI",
    "sourceUrl": "https://tldr.tech/ai/2026-08-21",
    "publishedAt": "2026-08-21",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "how-i-built-this",
    "title": "How I built this",
    "summary": "Ben’s session #3",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "Ben's Bites",
    "sourceUrl": "https://www.bensbites.com/p/how-i-built-this",
    "publishedAt": "2026-08-21",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "an-ai-tool-for-prioritizing-candidate-biomarkers-from-wearable-sensor-data",
    "title": "An AI tool for prioritizing candidate biomarkers from wearable sensor data",
    "summary": "Generative AI",
    "categorySlug": "research",
    "tags": [
      "Google DeepMind"
    ],
    "sourceName": "Google Research Blog",
    "sourceUrl": "https://research.google/blog/an-ai-tool-for-prioritizing-candidate-biomarkers-from-wearable-sensor-data/",
    "publishedAt": "2026-08-21",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "how-mobility-gives-language-models-a-deeper-understanding-of-place",
    "title": "How mobility gives language models a deeper understanding of place",
    "summary": "Algorithms & Theory",
    "categorySlug": "research",
    "tags": [
      "Google DeepMind"
    ],
    "sourceName": "Google Research Blog",
    "sourceUrl": "https://research.google/blog/how-mobility-gives-language-models-a-deeper-understanding-of-place/",
    "publishedAt": "2026-08-21",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "glm-5-3-vs-gpt-5-6-sol-on-deepswe-cost-coding-and-routing",
    "title": "GLM-5.3 vs. GPT-5.6 Sol on DeepSWE: Cost, Coding, and Routing",
    "summary": "We ran 904 DeepSWE rollouts on GLM-5.3 and GPT-5.6 Sol. Sol leads pass@1 by 3.7 points; GLM-5.3 wins pass@4 at half the cost, and a GLM-first cascade hits 85.9%.",
    "categorySlug": "tools",
    "tags": [
      "OpenAI"
    ],
    "sourceName": "Together AI Blog",
    "sourceUrl": "https://www.together.ai/blog/glm-5-3-vs-gpt-5-6-sol-on-deepswe-cost-coding-and-routing",
    "publishedAt": "2026-08-21",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "glm-5-3-vs-claude-fable-5-on-deepswe-cost-coding-and-routing",
    "title": "GLM-5.3 vs. Claude Fable 5 on DeepSWE: Cost, Coding, and Routing",
    "summary": "We ran 904 DeepSWE rollouts on GLM-5.3 and Claude Fable 5. A tie on pass@1, but GLM-5.3 wins pass@4 and costs 5.4x less: \\$3.99 per rollout vs. \\$21.63.",
    "categorySlug": "tools",
    "tags": [
      "Anthropic"
    ],
    "sourceName": "Together AI Blog",
    "sourceUrl": "https://www.together.ai/blog/glm-5-3-vs-claude-fable-5-on-deepswe-cost-coding-and-routing",
    "publishedAt": "2026-08-21",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "introducing-ai-futures",
    "title": "Introducing AI Futures",
    "summary": "Introducing AI Futures, a new OpenAI blog exploring how transformative AI could reshape power, governance, the economy, and individual freedom.",
    "categorySlug": "technisch",
    "tags": [
      "OpenAI"
    ],
    "sourceName": "OpenAI News",
    "sourceUrl": "https://openai.com/index/introducing-ai-futures",
    "publishedAt": "2026-08-20",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "stampli-cuts-launch-hours-by-68-using-chatgpt-work",
    "title": "Stampli cuts launch hours by 68% using ChatGPT Work",
    "summary": "With a fixed deadline and design resources committed elsewhere, Stampli used Codex and ChatGPT Work to compress weeks of launch production into days.",
    "categorySlug": "technisch",
    "tags": [
      "OpenAI"
    ],
    "sourceName": "OpenAI News",
    "sourceUrl": "https://openai.com/index/stampli",
    "publishedAt": "2026-08-20",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "bring-the-fire-play-games-on-geforce-now-with-new-firefox-browser-support",
    "title": "Bring the Fire: Play Games on GeForce NOW With New Firefox Browser Support",
    "summary": "It’s a new way into the cloud.  GeForce NOW welcomes Firefox support to the cloud, opening up another way to jump into high-performance PC gaming straight from the browser, starting today. Whether on a school laptop or everyday PC, it’s now even easier to play supported PC games ",
    "categorySlug": "hardware",
    "tags": [
      "NVIDIA"
    ],
    "sourceName": "NVIDIA AI Blog",
    "sourceUrl": "https://blogs.nvidia.com/blog/geforce-now-thursday-firefox/",
    "publishedAt": "2026-08-20",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "introducing-cross-region-inference-for-openai-gpt-5-6-models-on-amazon-bedrock",
    "title": "Introducing cross-Region inference for OpenAI GPT-5.6 models on Amazon Bedrock",
    "summary": "Amazon Bedrock now offers OpenAI GPT-5.6 models (Sol, Terra, and Luna) in more than 25 AWS Regions with cross-Region inference. Learn how US geographic and global inference profiles route requests for higher throughput, how to call the models with the OpenAI and Converse APIs, an",
    "categorySlug": "technisch",
    "tags": [
      "OpenAI"
    ],
    "sourceName": "AWS Machine Learning Blog",
    "sourceUrl": "https://aws.amazon.com/blogs/machine-learning/introducing-cross-region-inference-for-openai-gpt-5-6-models-on-amazon-bedrock/",
    "publishedAt": "2026-08-20",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "build-a-no-code-ml-workflow-with-snowflake-amazon-sagemaker-canvas-and-amazon-qu",
    "title": "Build a no-code ML workflow with Snowflake, Amazon SageMaker Canvas and Amazon Quick – Part 1: Setting up your Snowflake environment",
    "summary": "Healthcare, retail, and life sciences teams store large volumes of operational data in Snowflake, but turning it into predictions is hard. In Part 1 of this series, you set up your AWS account and Snowflake environment for a no-code ML workflow with Amazon SageMaker Canvas, layin",
    "categorySlug": "technisch",
    "tags": [
      "KI News"
    ],
    "sourceName": "AWS Machine Learning Blog",
    "sourceUrl": "https://aws.amazon.com/blogs/machine-learning/build-a-no-code-ml-workflow-with-snowflake-amazon-sagemaker-canvas-and-amazon-quick-part-1-setting-up-your-snowflake-environment/",
    "publishedAt": "2026-08-20",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "build-a-no-code-ml-workflow-with-snowflake-amazon-sagemaker-canvas-and-amazon-qu-1",
    "title": "Build a no-code ML workflow with Snowflake, Amazon SageMaker Canvas and Amazon Quick – Part 2: Data preparation and model building with Amazon SageMaker Canvas",
    "summary": "In Part 2 of this no-code ML series, you connect Amazon SageMaker Canvas to Snowflake, prepare and join transaction data with Data Wrangler visual transformations, and train an XGBoost fraud detection model. All without writing machine learning code, laying the groundwork for int",
    "categorySlug": "technisch",
    "tags": [
      "KI News"
    ],
    "sourceName": "AWS Machine Learning Blog",
    "sourceUrl": "https://aws.amazon.com/blogs/machine-learning/build-a-no-code-ml-workflow-with-snowflake-amazon-sagemaker-canvas-and-amazon-quick-part-2-data-preparation-and-model-building-with-amazon-sagemaker-canvas/",
    "publishedAt": "2026-08-20",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "build-a-no-code-ml-workflow-with-snowflake-amazon-sagemaker-canvas-and-amazon-qu-2",
    "title": "Build a no-code ML workflow with Snowflake, Amazon SageMaker Canvas and Amazon Quick – Part 3: Visualizing insights with Amazon Quick Sight",
    "summary": "In Part 3 of this no-code ML series, you bring fraud detection predictions to life. Import your Amazon SageMaker Canvas predictions into Amazon Quick Sight, build interactive dashboards, use generative BI to answer questions in natural language, and publish AI-generated executive",
    "categorySlug": "technisch",
    "tags": [
      "KI News"
    ],
    "sourceName": "AWS Machine Learning Blog",
    "sourceUrl": "https://aws.amazon.com/blogs/machine-learning/build-a-no-code-ml-workflow-with-snowflake-amazon-sagemaker-canvas-and-amazon-quick-part-3-visualizing-insights-with-amazon-quick-sight/",
    "publishedAt": "2026-08-20",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "authoring-dogwood-policies-from-natural-language-in-amazon-bedrock-agentcore",
    "title": "Authoring Dogwood policies from natural language in Amazon Bedrock AgentCore",
    "summary": "AI agents can take actions that do not match your organization's policies. Policy in Amazon Bedrock AgentCore lets teams enforce controls across agents, now including time-based constraints. This post shows how Policy Authoring turns natural-language policy documents into correct",
    "categorySlug": "technisch",
    "tags": [
      "Agentic AI",
      "EU AI Act"
    ],
    "sourceName": "AWS Machine Learning Blog",
    "sourceUrl": "https://aws.amazon.com/blogs/machine-learning/authoring-dogwood-policies-from-natural-language-in-amazon-bedrock-agentcore/",
    "publishedAt": "2026-08-20",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "scaling-agentic-ai-enterprise-patterns-without-vendor-lock-in",
    "title": "Scaling agentic AI: Enterprise patterns without vendor lock-in",
    "summary": "Scaling agentic AI across an enterprise requires patterns that preserve flexibility while avoiding vendor lock-in. In this second post of our multi-agent series, we examine how ML teams operate many agentic AI systems across a multi-everything environment of frameworks, models, a",
    "categorySlug": "technisch",
    "tags": [
      "Agentic AI"
    ],
    "sourceName": "AWS Machine Learning Blog",
    "sourceUrl": "https://aws.amazon.com/blogs/machine-learning/scaling-agentic-ai-enterprise-patterns-without-vendor-lock-in/",
    "publishedAt": "2026-08-20",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "up-to-3-2x-faster-inference-with-lfm2-5-dspark",
    "title": "Up to 3.2x Faster Inference with LFM2.5-DSpark",
    "summary": "(Keine Zusammenfassung verfügbar – Originalquelle prüfen.)",
    "categorySlug": "tools",
    "tags": [
      "Hugging Face"
    ],
    "sourceName": "Hugging Face Blog",
    "sourceUrl": "https://huggingface.co/blog/LiquidAI/lfm25-dspark",
    "publishedAt": "2026-08-20",
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
