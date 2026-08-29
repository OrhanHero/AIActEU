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
    "slug": "siemens-chef-warnt-vor-zu-viel-regulierung-bei-ki",
    "title": "Siemens-Chef warnt vor zu viel Regulierung bei KI",
    "summary": "Siemens-Konzernchef Roland Busch äußert sich im Interview betont optimistisch zu den immensen Effizienz- und Innovationsgewinnen durch Künstliche Intelligenz in der Industrie, warnt jedoch eindringlich vor einer Überregulierung aus Brüssel. Neue gesetzliche Vorschriften und Bürokratiehürden im Umfeld von EU AI Act und Data Act dürften die Wettbewerbsfähigkeit und Innovationskraft europäischer Industrieunternehmen im globalen Wettbewerb nicht schwächen. Busch fordert praxistaugliche Leitlinien und den Abbau regulatorischer Hürden.",
    "categorySlug": "policy",
    "tags": [
      "EU AI Act",
      "Siemens",
      "Regulierung",
      "Wirtschaft"
    ],
    "sourceName": "heise online",
    "sourceUrl": "https://www.heise.de/news/Siemens-Chef-warnt-vor-zu-viel-Regulierung-bei-KI-11434313.html",
    "publishedAt": "2026-08-29",
    "aiGenerated": false,
    "humanReviewed": true,
    "editorsNote": "Hauptstory der Woche: Siemens-CEO Roland Busch bringt die Bedenken der europäischen Industrie in die laufende Umsetzungsdebatte des EU AI Act ein. Die Mahnung verdeutlicht die Herausforderung, strenge Governance-Vorgaben mit der Erhaltung der europäischen Innovationskraft in Einklang zu bringen.",
    "relatedLinks": [
      {
        "group": "berichterstattung",
        "sourceName": "heise online",
        "label": "Siemens-Chef warnt vor zu viel Regulierung bei KI",
        "url": "https://www.heise.de/news/Siemens-Chef-warnt-vor-zu-viel-Regulierung-bei-KI-11434313.html"
      },
      {
        "group": "hintergrund",
        "sourceName": "Europäische Kommission",
        "label": "EU AI Act & Data Act: Vorgaben für europäische Unternehmen",
        "url": "https://ec.europa.eu/commission/presscorner/detail/de/ip_26_1714"
      },
      {
        "group": "hintergrund",
        "sourceName": "heise online",
        "label": "Massiver Umbau gekippt: Meta wollte „KI-nativ“ werden – und scheiterte",
        "url": "https://www.heise.de/news/Massiver-Umbau-gekippt-Meta-wollte-KI-nativ-werden-und-scheiterte-11434074.html"
      }
    ],
    "breaking": true,
    "editorsPick": true
  },
  {
    "slug": "ox-alpha-anonymes-ki-modell-heise-hintergrund-z-ai-glm5",
    "title": "Ox Alpha: Was hinter dem Hype um das anonyme KI-Modell steckt",
    "summary": "Das mysteriöse KI-Modell 'Ox Alpha' sorgt in der internationalen Entwickler-Community für enorme Aufregung: Auf Plattformen wie OpenRouter und OpenCode überzeugt das als 'Stealth-Modell' bereitgestellte System bei komplexen Coding-Aufgaben und schlägt etablierte Spitzenmodelle. Eine Analyse von heise online beleuchtet die Hintergründe: Technische Fingerabdrücke und API-Merkmale führen eindeutig zum chinesischen KI-Labor Z.ai (Zhipu AI) und dessen kommender Modellgeneration. Der Fall unterstreicht den strategischen Trend zu anonymen Testläufen vor dem offiziellen Branding – und wirft zugleich drängende Fragen zur Transparenz- und Anbieterkennzeichnungspflicht nach Artikel 50 des EU AI Act auf.",
    "categorySlug": "technisch",
    "tags": [
      "Ox Alpha",
      "Zhipu AI",
      "AI Safety",
      "EU AI Act"
    ],
    "sourceName": "heise online",
    "sourceUrl": "https://www.heise.de/hintergrund/Ox-Alpha-Was-hinter-dem-Hype-um-das-anonyme-KI-Modell-steckt-11426268.html",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": true,
    "editorsNote": "Hauptstory der Woche: heise online beleuchtet das Phänomen 'Ox Alpha' im Detail. Das Stealth-Testing zeigt, wie führende Labore ihre Next-Gen-Modelle anonym in der Praxis erproben. Aus EU-Perspektive rückt dies die Durchsetzung der Transparenz- und Dokumentationsregeln für General-Purpose-KI in den Mittelpunkt.",
    "relatedLinks": [
      {
        "group": "berichterstattung",
        "sourceName": "heise online",
        "label": "Ox Alpha: Was hinter dem Hype um das anonyme KI-Modell steckt (Hintergrund)",
        "url": "https://www.heise.de/hintergrund/Ox-Alpha-Was-hinter-dem-Hype-um-das-anonyme-KI-Modell-steckt-11426268.html"
      },
      {
        "group": "berichterstattung",
        "sourceName": "OpenCode (X)",
        "label": "OpenCode Announcement: Ox Alpha is now available on OpenCode Go too",
        "url": "https://x.com/opencode/status/2090758645499728234"
      },
      {
        "group": "hintergrund",
        "sourceName": "OpenRouter",
        "label": "Model Spec & Benchmarks: stealth/ox-alpha (1M Token Kontext)",
        "url": "https://openrouter.ai/stealth/ox-alpha"
      }
    ],
    "breaking": true,
    "editorsPick": true
  },
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
    "slug": "viral-ai-startup-instinct-has-raised-350-million-at-a-2-5-billion-valuation",
    "title": "Viral AI startup Instinct has raised $350 million at a $2.5 billion valuation",
    "summary": "The startup is only a year old but it has already generated a massive amount of hype (and money) while also spurring privacy concerns.",
    "categorySlug": "business",
    "tags": [
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/08/26/viral-ai-startup-instinct-has-raised-350-million-at-a-2-5-billion-valuation/",
    "publishedAt": "2026-08-27",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "nvidia-will-bald-100-milliarden-us-dollar-quartalsumsatz-knacken",
    "title": "Nvidia will bald 100 Milliarden US-Dollar Quartalsumsatz knacken",
    "summary": "Die Marke von 100 Milliarden US-Dollar Quartalsumsatz ist nah, in drei Monaten will Nvidia sie knacken. Das Börsenpendel schwingt ins Plus.",
    "categorySlug": "breaking-news",
    "tags": [
      "NVIDIA"
    ],
    "sourceName": "Heise Online",
    "sourceUrl": "https://www.heise.de/news/Nvidia-will-bald-100-Milliarden-US-Dollar-Quartalsumsatz-knacken-11427213.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false,
    "editorsPick": true,
    "editorsNote": "Sehr relevante Entwicklung für das KI-Ökosystem – direkte Leseempfehlung."
  },
  {
    "slug": "arduino-ventuno-q-kann-jetzt-vorbestellt-werden",
    "title": "Arduino Ventuno Q kann jetzt vorbestellt werden",
    "summary": "Mit dem Ventuno Q bringt Arduino Linux, KI und Echtzeitsteuerung auf ein Board. Jetzt lässt sich die Plattform für 298,99 Euro vorbestellen.",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "Heise Online",
    "sourceUrl": "https://www.heise.de/news/Arduino-Ventuno-Q-kann-jetzt-vorbestellt-werden-11427027.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "spider-man-artbook-zeigt-den-mutma-lichen-ki-einsatz-bei-marvel",
    "title": "„Spider-Man“-Artbook zeigt den mutmaßlichen KI-Einsatz bei Marvel",
    "summary": "Es soll ein Liebhaberbuch für Comicfans sein. Seltsame Illustrationen und Artefakte machen das für viele Fans kaputt. Offenbar kam hier KI zum Einsatz.",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "Heise Online",
    "sourceUrl": "https://www.heise.de/news/Unmut-ueber-mutmasslichen-KI-Slop-in-offiziellem-Spider-Man-Artbook-11426947.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "ki-update-kompakt-computer-history-openai-jalapeno-militar-ki-ais-chat",
    "title": "KI-Update kompakt: Computer History, OpenAI Jalapeño, Militär-KI, AIS.Chat",
    "summary": "Das \"KI-Update\" liefert drei mal pro Woche eine Zusammenfassung der wichtigsten KI-Entwicklungen.",
    "categorySlug": "breaking-news",
    "tags": [
      "OpenAI"
    ],
    "sourceName": "Heise Online",
    "sourceUrl": "https://www.heise.de/news/KI-Update-kompakt-Computer-History-OpenAI-Jalapeno-Militaer-KI-AIS-Chat-11425186.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "nothing-os-5-0-ein-erster-blick-auf-den-android-17-aufsatz",
    "title": "Nothing OS 5.0: Ein erster Blick auf den Android-17-Aufsatz",
    "summary": "Nothing hat die Beta von Nothing OS 5.0 auf Basis von Android 17 veröffentlicht. Wir zeigen die Neuerungen bei Design, KI-Tools und Bedienoberfläche.",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "Heise Online",
    "sourceUrl": "https://www.heise.de/news/Nothing-OS-5-0-Ein-erster-Blick-auf-den-Android-17-Aufsatz-11426346.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false,
    "editorsPick": true,
    "editorsNote": "Sehr relevante Entwicklung für das KI-Ökosystem – direkte Leseempfehlung."
  },
  {
    "slug": "perplexity-bringt-ki-agent-mit-portable-computer-auf-lokale-nvidia-hardware",
    "title": "Perplexity bringt KI-Agent mit „Portable Computer“ auf lokale Nvidia-Hardware",
    "summary": "Kein Cloud-Zwang, keine Token-Kosten für lokale Aufgaben: Perplexity startet den KI-Agenten „Portable Computer“ – mit hohen Hardware-Hürden.",
    "categorySlug": "breaking-news",
    "tags": [
      "NVIDIA",
      "Agentic AI",
      "Hardware"
    ],
    "sourceName": "Heise Online",
    "sourceUrl": "https://www.heise.de/news/Perplexity-bringt-KI-Agent-mit-Portable-Computer-auf-lokale-Nvidia-Hardware-11426394.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "heise-angebot-wenn-die-ki-mitentwirft-was-bleibt-aufgabe-der-architektur",
    "title": "heise-Angebot: Wenn die KI mitentwirft: Was bleibt Aufgabe der Architektur?",
    "summary": "Sprachmodelle schreiben Code, die Entwürfe bleiben Handarbeit. Die InfoDays: Software-Architektur am 6. und 7. Oktober loten das Verhältnis aus.",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "Heise Online",
    "sourceUrl": "https://www.heise.de/news/Wenn-die-KI-mitentwirft-Was-bleibt-Aufgabe-der-Architektur-11424761.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "nie-wieder-pytorch-nvidia-veroffentlicht-cuda-python-1-0",
    "title": "Nie wieder PyTorch: Nvidia veröffentlicht CUDA Python 1.0",
    "summary": "Das Python-Paket von Nvidia ermöglicht einen direkten Zugriff auf alle Funktionen von CUDA. Drittbibliotheken sollen damit in vielen Fällen entbehrlich sein.",
    "categorySlug": "breaking-news",
    "tags": [
      "NVIDIA"
    ],
    "sourceName": "Heise Online",
    "sourceUrl": "https://www.heise.de/news/Nvidia-veroeffentlicht-CUDA-Python-1-0-Direkter-Zugriff-auf-CUDA-ohne-C-11426155.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "30-billionen-us-dollar-anthropic-will-der-borse-gigantischen-markt-versprechen",
    "title": "30 Billionen US-Dollar: Anthropic will der Börse gigantischen Markt versprechen",
    "summary": "Anthropic will an die Börse und den Rekordstart von SpaceX übertreffen. Dafür plant das KI-Unternehmen angeblich, einen gigantischen Markt zu prognostizieren.",
    "categorySlug": "breaking-news",
    "tags": [
      "Anthropic"
    ],
    "sourceName": "Heise Online",
    "sourceUrl": "https://www.heise.de/news/30-Billionen-US-Dollar-Anthropic-will-der-Boerse-gigantischen-Markt-versprechen-11425803.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "bringing-chatgpt-for-teachers-to-more-u-s-school-districts",
    "title": "Bringing ChatGPT for Teachers to more U.S. school districts",
    "summary": "ChatGPT for Teachers is expanding to 55 U.S. school systems, bringing secure AI tools, training, and support to over 100,000 more educators and staff.",
    "categorySlug": "technisch",
    "tags": [
      "OpenAI"
    ],
    "sourceName": "OpenAI News",
    "sourceUrl": "https://openai.com/index/bringing-chatgpt-for-teachers-to-more-us-school-districts",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "learning-never-stops-how-ai-makes-learning-continuous",
    "title": "Learning never stops: How AI makes learning continuous",
    "summary": "OpenAI’s new report explores how students and educators use ChatGPT to make learning more continuous, with support that extends beyond the classroom.",
    "categorySlug": "technisch",
    "tags": [
      "OpenAI"
    ],
    "sourceName": "OpenAI News",
    "sourceUrl": "https://openai.com/index/learning-never-stops",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "the-hugging-face-incident-and-the-road-ahead",
    "title": "The Hugging Face incident and the road ahead",
    "summary": "OpenAI shares findings from the Hugging Face security incident and the steps we’re taking to strengthen AI model security, monitoring, and alignment.",
    "categorySlug": "technisch",
    "tags": [
      "OpenAI",
      "Hugging Face",
      "AI Safety"
    ],
    "sourceName": "OpenAI News",
    "sourceUrl": "https://openai.com/index/hugging-face-incident-and-the-road-ahead",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false,
    "editorsPick": true,
    "editorsNote": "Sehr relevante Entwicklung für das KI-Ökosystem – direkte Leseempfehlung."
  },
  {
    "slug": "how-loveholidays-is-making-everyone-a-builder-with-codex",
    "title": "How loveholidays is making everyone a builder with Codex",
    "summary": "Discover how loveholidays uses OpenAI Codex to make software development accessible across the business, helping teams turn ideas into products faster.",
    "categorySlug": "technisch",
    "tags": [
      "OpenAI"
    ],
    "sourceName": "OpenAI News",
    "sourceUrl": "https://openai.com/index/loveholidays",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "intelligent-transcription-with-gemini-3-5-transcribe",
    "title": "Intelligent transcription with Gemini 3.5 Transcribe",
    "summary": "Now you can get more intelligent speech-to-text transcription with Gemini 3.5 Transcribe.",
    "categorySlug": "technisch",
    "tags": [
      "Google DeepMind",
      "Hardware"
    ],
    "sourceName": "Google DeepMind Blog",
    "sourceUrl": "https://deepmind.google/blog/intelligent-transcription-with-gemini-3-5-transcribe/",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "nvidia-nvlink-fusion-expands-with-nvhbm-custom-high-bandwidth-memory",
    "title": "NVIDIA NVLink Fusion Expands With NVHBM Custom High-Bandwidth Memory",
    "summary": "The next wave of AI is placing new demands on infrastructure.  As AI agents and trillion-parameter workloads become mainstream, the performance of AI infrastructure depends not only on compute, but on how compute, memory, storage, networking and software are designed together as ",
    "categorySlug": "hardware",
    "tags": [
      "NVIDIA",
      "RAG",
      "Agentic AI"
    ],
    "sourceName": "NVIDIA AI Blog",
    "sourceUrl": "https://blogs.nvidia.com/blog/nvlink-fusion-nvhbm-custom-high-bandwidth-memory/",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "evaluate-any-agent-framework-with-amazon-bedrock-agentcore-evaluations",
    "title": "Evaluate any agent framework with Amazon Bedrock AgentCore Evaluations",
    "summary": "Amazon Bedrock AgentCore Evaluations decouples agent evaluation from the framework you build on. As long as your agent emits OpenTelemetry telemetry, the service can score it, whether you use LangGraph, LlamaIndex, the OpenAI Agents SDK, Google ADK, the Claude Agent SDK, or Stran",
    "categorySlug": "technisch",
    "tags": [
      "OpenAI",
      "Google DeepMind",
      "Anthropic"
    ],
    "sourceName": "AWS Machine Learning Blog",
    "sourceUrl": "https://aws.amazon.com/blogs/machine-learning/evaluate-any-agent-framework-with-amazon-bedrock-agentcore-evaluations/",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "how-godaddy-transformed-its-analytics-with-amazon-quick",
    "title": "How GoDaddy transformed its analytics with Amazon Quick",
    "summary": "In this post, you will learn how GoDaddy migrated from their legacy business intelligence (BI) tool to Amazon Quick. This was a two-year transformation that delivered results across every dimension of the business: 15,000 hours saved annually, 50% reduction in dashboard count, re",
    "categorySlug": "technisch",
    "tags": [
      "Hardware"
    ],
    "sourceName": "AWS Machine Learning Blog",
    "sourceUrl": "https://aws.amazon.com/blogs/machine-learning/how-godaddy-transformed-its-analytics-with-amazon-quick/",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "natera-s-intelligent-appointment-scheduling-with-amazon-bedrock-agentcore",
    "title": "Natera’s intelligent appointment scheduling with Amazon Bedrock AgentCore",
    "summary": "Learn how Natera built an automated voice agent on Amazon Bedrock AgentCore that lets patients book mobile phlebotomy appointments through natural conversation. The post covers the dual-WebSocket bridge, event-driven latency masking, and progressive-trust authentication behind 10",
    "categorySlug": "technisch",
    "tags": [
      "Agentic AI",
      "Hardware"
    ],
    "sourceName": "AWS Machine Learning Blog",
    "sourceUrl": "https://aws.amazon.com/blogs/machine-learning/nateras-intelligent-appointment-scheduling-with-amazon-bedrock-agentcore/",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "bring-your-own-model-with-amazon-sagemaker-ai-script-mode-in-sdk-v3",
    "title": "Bring your own model with Amazon SageMaker AI: Script mode in SDK v3",
    "summary": "The SageMaker Python SDK v3 redesigns script mode with unified ModelTrainer and ModelBuilder classes. This post walks through two end-to-end examples, a scikit-learn Random Forest and a multi-GPU Stable Diffusion 3.5 LoRA fine-tune, showing how SourceCode syncs your local code in",
    "categorySlug": "technisch",
    "tags": [
      "NVIDIA"
    ],
    "sourceName": "AWS Machine Learning Blog",
    "sourceUrl": "https://aws.amazon.com/blogs/machine-learning/bring-your-own-model-with-amazon-sagemaker-ai-script-mode-in-sdk-v3/",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "preparing-data-for-supervised-fine-tuning-part-2-advanced-data-strategies",
    "title": "Preparing data for supervised fine-tuning Part 2: Advanced data strategies",
    "summary": "The advanced side of supervised fine-tuning data prep. This second post in a two-part series covers evaluating data readiness with learning curves, selecting high-value data subsets, augmenting data with synthetic and distilled examples, and mixing data sources to prevent catastr",
    "categorySlug": "technisch",
    "tags": [
      "AI Safety"
    ],
    "sourceName": "AWS Machine Learning Blog",
    "sourceUrl": "https://aws.amazon.com/blogs/machine-learning/preparing-data-for-supervised-fine-tuning-part-2-advanced-data-strategies/",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "preparing-data-for-supervised-fine-tuning-part-1-formatting-and-quality",
    "title": "Preparing data for supervised fine-tuning Part 1: Formatting and quality",
    "summary": "Data preparation determines the ceiling of any supervised fine-tuning project. This first post in a two-part series covers the foundations of SFT data prep: quality checks, conversational (JSONL) formatting, reasoning and tool-calling schemas, and a representative train/evaluatio",
    "categorySlug": "technisch",
    "tags": [
      "AI Safety"
    ],
    "sourceName": "AWS Machine Learning Blog",
    "sourceUrl": "https://aws.amazon.com/blogs/machine-learning/preparing-data-for-supervised-fine-tuning-part-1-formatting-and-quality/",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "connect-amazon-bedrock-agentcore-to-cross-account-knowledge-bases",
    "title": "Connect Amazon Bedrock AgentCore to cross-account knowledge bases",
    "summary": "Learn how Amazon Bedrock AgentCore agents in one account can generate answers from an Amazon Bedrock knowledge base backed by Amazon Redshift Serverless in another account, without copying source data. This post covers the architecture, security boundary, and two orchestration mo",
    "categorySlug": "technisch",
    "tags": [
      "Agentic AI",
      "AI Safety"
    ],
    "sourceName": "AWS Machine Learning Blog",
    "sourceUrl": "https://aws.amazon.com/blogs/machine-learning/connect-amazon-bedrock-agentcore-to-cross-account-knowledge-bases/",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "training-and-finetuning-multi-vector-embedding-models-with-sentence-transformers",
    "title": "Training and Finetuning Multi-Vector Embedding Models with Sentence Transformers",
    "summary": "(Keine Zusammenfassung verfügbar – Originalquelle prüfen.)",
    "categorySlug": "tools",
    "tags": [
      "Hugging Face",
      "RAG"
    ],
    "sourceName": "Hugging Face Blog",
    "sourceUrl": "https://huggingface.co/blog/train-multi-vector-encoder",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "august-2026-langchain-newsletter-managed-deep-agents-llm-gateway-and-more",
    "title": "August 2026: LangChain Newsletter — Managed Deep Agents, LLM Gateway, and More",
    "summary": "Managed Deep Agents and LLM Gateway hit public beta, plus Deep Agents v0.7, Tuned Evaluators, Bring Your Own Cloud on AWS, and LangSmith Engine upgrades.",
    "categorySlug": "technisch",
    "tags": [
      "Agentic AI",
      "AI Safety"
    ],
    "sourceName": "LangChain Blog",
    "sourceUrl": "https://www.langchain.com/blog/august-2026-langchain-newsletter",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "langsmith-llm-gateway-runtime-controls-for-agents",
    "title": "LangSmith LLM Gateway: Runtime Controls for Agents",
    "summary": "LangSmith LLM Gateway is in public beta: spend caps, rate limits, model fallbacks and PII redaction for production agents, without provider lock-in.",
    "categorySlug": "technisch",
    "tags": [
      "Agentic AI"
    ],
    "sourceName": "LangChain Blog",
    "sourceUrl": "https://www.langchain.com/blog/langsmith-llm-gateway-runtime-controls-for-production-agents",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "how-langsmith-and-langchain-oss-help-you-meet-eu-ai-act-requirements",
    "title": "How LangSmith and LangChain OSS Help You Meet EU AI Act Requirements",
    "summary": "The EU AI Act compliance deadline is August 2, 2026. Learn what the EU AI Act requires, and how LangSmith and LangChain OSS products help you meet each requirement.",
    "categorySlug": "technisch",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "LangChain Blog",
    "sourceUrl": "https://www.langchain.com/blog/langsmith-langchain-oss-eu-ai-act",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "how-factory-used-langsmith-to-automate-their-feedback-loop-and-improve-iteration",
    "title": "How Factory used LangSmith to automate their feedback loop and improve iteration speed by 2x",
    "summary": "How Factory AI uses LangSmith to debug issues and close the product feedback loop, resulting in a 2x improvement in iteration speed.",
    "categorySlug": "technisch",
    "tags": [
      "KI News"
    ],
    "sourceName": "LangChain Blog",
    "sourceUrl": "https://www.langchain.com/blog/customers-factory",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "aligning-llm-as-a-judge-with-human-preferences",
    "title": "Aligning LLM-as-a-Judge with Human Preferences",
    "summary": "Deep dive into self-improving evaluators in LangSmith, motivated by the rise of LLM-as-a-Judge evaluators plus research on few-shot learning and aligning human preferences.",
    "categorySlug": "technisch",
    "tags": [
      "AI Safety"
    ],
    "sourceName": "LangChain Blog",
    "sourceUrl": "https://www.langchain.com/blog/aligning-llm-as-a-judge-with-human-preferences",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "announcing-langgraph-v0-1-langgraph-cloud-running-agents-at-scale-reliably",
    "title": "Announcing LangGraph v0.1 & LangGraph Cloud: Running agents at scale, reliably",
    "summary": "Our new infrastructure for running agents at scale, LangGraph Cloud, is available in beta. We also have a new stable release of LangGraph.",
    "categorySlug": "technisch",
    "tags": [
      "Agentic AI"
    ],
    "sourceName": "LangChain Blog",
    "sourceUrl": "https://www.langchain.com/blog/langgraph-cloud",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "how-podium-optimized-agent-behavior-and-reduced-engineering-intervention-by-90-w",
    "title": "How Podium optimized agent behavior and reduced engineering intervention by 90% with LangSmith",
    "summary": "See how Podium tests across the lifecycle development of their AI employee agent, using LangSmith for dataset curation and finetuning. They improved agent F1 response quality to 98% and reduced the need for engineering intervention by 90%.",
    "categorySlug": "technisch",
    "tags": [
      "Agentic AI"
    ],
    "sourceName": "LangChain Blog",
    "sourceUrl": "https://www.langchain.com/blog/customers-podium",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "pushing-langsmith-to-new-limits-with-replit-agent-s-complex-workflows",
    "title": "Pushing LangSmith to new limits with Replit Agent's complex workflows",
    "summary": "See how Replit built their agents atop LangGraph and integrated LangSmith to pinpoint issues, improve the performance of their agents, and enable human-in-the-loop workflows.",
    "categorySlug": "technisch",
    "tags": [
      "Agentic AI"
    ],
    "sourceName": "LangChain Blog",
    "sourceUrl": "https://www.langchain.com/blog/customers-replit",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "langchain-s-second-birthday",
    "title": "LangChain's Second Birthday",
    "summary": "Reflections on how LangChain has evolved — including our products, ecosystem, and community — over the past two years, and where we're headed next.",
    "categorySlug": "technisch",
    "tags": [
      "KI News"
    ],
    "sourceName": "LangChain Blog",
    "sourceUrl": "https://www.langchain.com/blog/langchain-second-birthday",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "langsmith-redesigned-product-homepage-and-resource-tags-for-better-organization",
    "title": "LangSmith: Redesigned product homepage and Resource Tags for better organization",
    "summary": "LangSmith's homepage is now organized into Observability, Evaluation, and Prompt Engineering. Learn why we organized the homepage like this. Plus, see our latest Resource Tags updates.",
    "categorySlug": "technisch",
    "tags": [
      "AI Safety"
    ],
    "sourceName": "LangChain Blog",
    "sourceUrl": "https://www.langchain.com/blog/langsmith-homepage-redesign-and-resource-tags",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "g-opinion-business-insight-ai-has-opened-up-big-holes-in-cyber-security",
    "title": "(g+) Opinion Business Insight: AI has opened up big holes in cyber security",
    "summary": "It is too late to stop the technology being used as a damaging weapon, so great investment in defences is urgently needed Von Richard Waters (Security, KI)",
    "categorySlug": "breaking-news",
    "tags": [
      "AI Safety"
    ],
    "sourceName": "Golem.de",
    "sourceUrl": "https://www.golem.de/news/opinion-business-insight-ai-has-opened-up-big-holes-in-cyber-security-2608-212328.html",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "wissensarbeit-perplexities-lokaler-ki-agent-soll-hermes-und-pi-ubertreffen",
    "title": "Wissensarbeit: Perplexities lokaler KI-Agent soll Hermes und Pi übertreffen",
    "summary": "Agenten bräuchten für lokale KI eine andere Abstimmung, erklärt Perplexity, und liefert Modell und Agent. Uneigennützig ist das nicht. (Perplexity, Grafikkarten)",
    "categorySlug": "breaking-news",
    "tags": [
      "Agentic AI"
    ],
    "sourceName": "Golem.de",
    "sourceUrl": "https://www.golem.de/news/wissensarbeit-perplexities-lokaler-ki-agent-soll-hermes-und-pi-uebertreffen-2608-212336.html",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "ki-plane-der-regierung-klingbeil-warnt-vor-gefahrlicher-ideologie-der-tech-bros",
    "title": "KI-Pläne der Regierung: Klingbeil warnt vor \"gefährlicher Ideologie\" der Tech-Bros",
    "summary": "Auch Bundeskanzler Merz will nicht die besten KI-Modelle für die deutsche Wirtschaft. Souveräne Lösungen für alle Branchen seien wichtiger. (KI, Silicon Valley)",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "Golem.de",
    "sourceUrl": "https://www.golem.de/news/ki-plaene-der-regierung-klingbeil-warnt-vor-gefaehrlicher-ideologie-der-tech-bros-2608-212332.html",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "artificial-artificial-intelligence-amazon-stellt-crowdsourcing-plattform-mechani",
    "title": "Artificial Artificial Intelligence: Amazon stellt Crowdsourcing-Plattform Mechanical Turk ein",
    "summary": "Amazon-Gründer Jeff Bezos bezeichnete den Dienst als \"künstliche künstliche Intelligenz\". Nun wird die Crowdsourcing-Plattform Mechanical Turk geschlossen. (Crowdsourcing, Amazon)",
    "categorySlug": "breaking-news",
    "tags": [
      "Hardware"
    ],
    "sourceName": "Golem.de",
    "sourceUrl": "https://www.golem.de/news/artificial-artificial-intelligence-amazon-stellt-crowdsourcing-plattform-mechanical-turk-ein-2608-212318.html",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "jalapeno-openais-erster-ki-chip-schlagt-nvidia-bei-effizienz",
    "title": "Jalapeno: OpenAIs erster KI-Chip schlägt Nvidia bei Effizienz",
    "summary": "In weniger als eineinhalb Jahren hat OpenAI einen eigenen KI-Chip entwickelt - mit KI und hoher Effizienz. Das zeigt ein erster Test. (OpenAI, KI)",
    "categorySlug": "breaking-news",
    "tags": [
      "OpenAI",
      "NVIDIA",
      "Hardware"
    ],
    "sourceName": "Golem.de",
    "sourceUrl": "https://www.golem.de/news/jalapeno-openais-erster-ki-chip-schlaegt-nvidia-bei-effizienz-2608-212310.html",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "um-risiken-abzufedern-bill-gates-fordert-globalen-ki-aktionsplan",
    "title": "Um Risiken abzufedern: Bill Gates fordert globalen KI-Aktionsplan",
    "summary": "Die Weltgemeinschaft ist laut Bill Gates nicht ausreichend auf die grundlegenden Umbrüche durch KI-Technologien vorbereitet. (KI, Bill Gates)",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "Golem.de",
    "sourceUrl": "https://www.golem.de/news/um-risiken-abzufedern-bill-gates-fordert-globalen-ki-aktionsplan-2608-212313.html",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "monumentale-herausforderung-bill-gates-fordert-grenzen-fur-ki-einsatz-und-robote",
    "title": "Monumentale Herausforderung: Bill Gates fordert Grenzen für KI-Einsatz und Robotersteuer",
    "summary": "Microsoft-Mitgründer Bill Gates hat einmal mehr eindringlich vor Risiken durch KI gewarnt. Die Menschheit brauche einen Plan für die Begrenzung möglicher Gefahren durch die Technologie. Auch eine Robotersteuer brachte Gates ins Spiel.weiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "t3n",
    "sourceUrl": "https://t3n.de/news/bill-gates-ki-robotersteuer-1760025/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "ki-im-studium-dieser-chatbot-hat-beim-akademischen-schreiben-die-nase-vorn",
    "title": "KI im Studium: Dieser Chatbot hat beim akademischen Schreiben die Nase vorn",
    "summary": "KI ist für Student:innen längst zu einem Standardwerkzeug geworden. Aber welches Tool schneidet bei Textaufgaben am besten ab? In einem Blindtest sind drei Anbieter gegeneinander angetreten – das sind die Ergebnisse.\nweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "t3n",
    "sourceUrl": "https://t3n.de/news/ki-im-studium-dieser-chatbot-hat-beim-akademischen-schreiben-die-nase-vorn-1759919/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "bessere-performance-als-nvidia-so-gut-sollen-openais-eigene-ki-chips-sein",
    "title": "Bessere Performance als Nvidia? So gut sollen OpenAIs eigene KI-Chips sein",
    "summary": "OpenAI entwickelt eigene Chips, um nicht mehr von der Hardware von Dritten abhängig zu sein. Erste Prototypen zeigen laut dem Unternehmen bessere Performance als die Chips von Nvidia – mit Einschränkungen.\nweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "OpenAI",
      "NVIDIA",
      "Hardware"
    ],
    "sourceName": "t3n",
    "sourceUrl": "https://t3n.de/news/openai-chip-besser-als-nvidia-1759884/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "von-25-auf-3-fehler-pro-woche-so-automatisiert-ein-mittelstandler-seinen-dokumen",
    "title": "Von 25 auf 3 Fehler pro Woche: So automatisiert ein Mittelständler seinen Dokumenteneingang",
    "summary": "In vielen Unternehmen liest jemand ein PDF und tippt Zahlen ab. KI kann das übernehmen – aber wie viel darf sie allein entscheiden? Ein Mittelständler senkte den Aufwand um 70 Prozent.weiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "t3n",
    "sourceUrl": "https://t3n.de/news/intelligente-dokumentenverarbeitung-ki-use-case-1759695/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "mechanical-turk-amazons-gig-working-plattform-macht-nach-uber-20-jahren-dicht",
    "title": "Mechanical Turk: Amazons Gig-Working-Plattform macht nach über 20 Jahren dicht",
    "summary": "Schon im Juli hatte sich das Aus angedeutet, jetzt ist bald endgültig Schluss: Amazon macht die Gig-Working-Plattform Mechanical Turk Ende September 2026 dicht. Die auch darüber trainierten KI-Tools können vieles mittlerweile selbst erledigen.weiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "t3n",
    "sourceUrl": "https://t3n.de/news/mechanical-turk-amazon-aus-1759878/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "ki-im-unternehmen-warum-zu-viel-vorsicht-jetzt-zum-risiko-wird",
    "title": "KI im Unternehmen: Warum zu viel Vorsicht jetzt zum Risiko wird",
    "summary": "Deutsche Unternehmen rechnen beim KI-Einsatz herum – und werden so immer weiter abgehängt, befürchtet unser neuer Kolumnist. Sein dringender Rat: nicht abwartenweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "t3n",
    "sourceUrl": "https://t3n.de/news/ki-im-unternehmen-warum-zu-viel-vorsicht-jetzt-zum-risiko-wird-1757322/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "ki-im-internet-wie-viele-seiten-wurden-von-chatbots-und-agenten-geschrieben",
    "title": "KI im Internet: Wie viele Seiten wurden von Chatbots und Agenten geschrieben?",
    "summary": "Seit dem Aufschwung von KI wird das Internet mit generierten Inhalten gefüllt. Laut einer Studie weist schon ein großer Teil der Webseiten KI-Merkmale auf. Wo die Tools am häufigsten eingesetzt werden.\nweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "Agentic AI"
    ],
    "sourceName": "t3n",
    "sourceUrl": "https://t3n.de/news/ki-im-internet-seiten-von-chatbots-und-agenten-geschrieben-1759835/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "amazon-just-tripled-its-order-of-nvidia-chips-over-surging-demand",
    "title": "Amazon just tripled its order of Nvidia chips over ‘surging demand’",
    "summary": "Amazon is adding another 2 million Nvidia GPU chips to its data centers over the next two years. But this extended partnerships stretches beyond buying more chips.",
    "categorySlug": "business",
    "tags": [
      "NVIDIA",
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/08/26/amazon-just-tripled-its-order-of-nvidia-chips-over-surging-demand/",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "anthropic-continues-compute-gobbling-streak-in-45b-deal-with-nscale",
    "title": "Anthropic continues compute-gobbling streak in $45B deal with Nscale",
    "summary": "The new deal with the infrastructure provider is the latest example of Anthropic's white-hot compute-gobbling streak.",
    "categorySlug": "business",
    "tags": [
      "Anthropic",
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/08/26/anthropic-continues-compute-gobbling-streak-in-45-billion-deal-with-nscale/",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "google-s-gemini-has-a-branding-problem-and-so-does-the-rest-of-ai",
    "title": "Google’s Gemini has a branding problem, and so does the rest of AI",
    "summary": "Consumer AI apps need to stop making users learn their product architecture.",
    "categorySlug": "business",
    "tags": [
      "Google DeepMind",
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/08/26/googles-gemini-has-a-branding-problem-and-so-does-the-rest-of-ai/",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "how-do-we-explain-openai-s-executive-exodus",
    "title": "How do we explain OpenAI’s executive exodus?",
    "summary": "Was Greg Brockman the right executive all along?",
    "categorySlug": "business",
    "tags": [
      "OpenAI",
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/08/26/how-do-we-explain-openais-executive-exodus/",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "openai-releases-its-official-report-on-the-hugging-face-breach",
    "title": "OpenAI releases its official report on the Hugging Face breach",
    "summary": "The report, which spans several discrete cybersecurity compromises, is the most complete accounting of the incident to date.",
    "categorySlug": "business",
    "tags": [
      "OpenAI",
      "Hugging Face",
      "AI Safety"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/08/26/openai-releases-its-official-report-on-the-hugging-face-breach/",
    "publishedAt": "2026-08-26",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "radar-makes-podcasts-searchable-and-usable-by-ai-agents",
    "title": "Radar makes podcasts searchable — and usable by AI agents",
    "summary": "Particle’s new podcast intelligence platform transcribes and analyzes more than 130,000 podcasts, making their conversations searchable on the web and accessible to AI agents through an API and MCP.",
    "categorySlug": "business",
    "tags": [
      "Agentic AI",
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/08/26/radar-makes-podcasts-searchable-and-usable-by-ai-agents/",
    "publishedAt": "2026-08-26",
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
