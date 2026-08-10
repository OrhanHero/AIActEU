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
    "slug": "openai-astra-pause-claude-code-cross-session-how-cursor-router-works",
    "title": "OpenAI Astra pause 🚨, Claude Code cross-session 🤖, how Cursor Router works 🔀",
    "summary": "(Keine Zusammenfassung verfügbar – Originalquelle prüfen.)",
    "categorySlug": "breaking-news",
    "tags": [
      "OpenAI",
      "Anthropic"
    ],
    "sourceName": "TLDR AI",
    "sourceUrl": "https://tldr.tech/ai/2026-08-10",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false,
    "breaking": true
  },
  {
    "slug": "import-ai-468-23-rsi-ideas-posttrainbench-and-how-trust-and-transparency-interpl",
    "title": "Import AI 468: 23 RSI ideas; PostTrainBench+; and how trust and transparency interplay with AI racing",
    "summary": "Which galaxy will you choose?",
    "categorySlug": "policy",
    "tags": [
      "KI News"
    ],
    "sourceName": "Import AI (Jack Clark Newsletter)",
    "sourceUrl": "https://importai.substack.com/p/import-ai-468-23-rsi-ideas-posttrainbench",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false,
    "breaking": true,
    "editorsPick": true,
    "editorsNote": "Sehr relevante Entwicklung für das KI-Ökosystem – direkte Leseempfehlung."
  },
  {
    "slug": "join-the-inaugural-d-tect-forum",
    "title": "Join the Inaugural D-TECT Forum",
    "summary": "Join the Inaugural D-TECT Forum\nlobacni\nMon, 08/10/2026 - 14:07\n\n\n\n  \n \n      11 November 2026\n  \nThe Drone Tech for Countering Threats (D-TECT) Forum is the EU industrial coordination mechanism for drone and counter-drone technologies.\n\n\n          © Marcus Jacobi\n          \n  \nT",
    "categorySlug": "policy",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "EU Digital Strategy – News",
    "sourceUrl": "https://digital-strategy.ec.europa.eu/en/events/join-inaugural-d-tect-forum",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false,
    "breaking": true
  },
  {
    "slug": "unbekannte-alternative-zu-aktien-grunder-bauen-neobroker-fur-genossenschaften",
    "title": "Unbekannte Alternative zu Aktien: Gründer bauen Neobroker für Genossenschaften",
    "summary": "Genossenschaften betreiben Wohnungen, Weinhandel und Windparks. Valueverde will sie allen zugänglich machen. Spekulation ausgeschlossen, Rendite keineswegs.",
    "categorySlug": "business",
    "tags": [
      "KI News"
    ],
    "sourceName": "Gründerszene (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.businessinsider.de/gruenderszene/unbekannte-alternative-zu-aktien-das-ist-der-grosse-unterschied/",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false,
    "breaking": true
  },
  {
    "slug": "openai-kauft-nextslide-dieses-neue-tool-konnte-jetzt-fur-chatgpt-kommen",
    "title": "OpenAI kauft NextSlide: Dieses neue Tool könnte jetzt für ChatGPT kommen",
    "summary": "OpenAI hat Nextslide übernommen. Das Startup hat eine KI gebaut, die Präsentationen per Prompt erstellt.",
    "categorySlug": "business",
    "tags": [
      "OpenAI",
      "EU AI Act"
    ],
    "sourceName": "Gründerszene (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.businessinsider.de/gruenderszene/openai-kauft-nextslide-dieses-neue-tool-koennte-jetzt-fuer-chatgpt-kommen/",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "ich-nutze-ki-statt-praktikanten-und-bin-damit-produktiver",
    "title": "Ich nutze KI statt Praktikanten – und bin damit produktiver",
    "summary": "VCs investieren nicht nur in KI, sondern nutzen sie auch immer stärker selbst. Wie dabei sogar Praktikanten ersetzt werden, zeigt dieser VC.",
    "categorySlug": "business",
    "tags": [
      "KI News"
    ],
    "sourceName": "Gründerszene (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.businessinsider.de/gruenderszene/ich-nutze-ki-statt-praktikanten-und-bin-damit-produktiver/",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false,
    "editorsPick": true,
    "editorsNote": "Sehr relevante Entwicklung für das KI-Ökosystem – direkte Leseempfehlung."
  },
  {
    "slug": "warum-der-richtige-startup-name-oft-die-gro-te-herausforderung-ist",
    "title": "Warum der richtige Startup-Name oft die größte Herausforderung ist",
    "summary": "„Libelle“ heißt die neue GLP-1-App von Jolina van Laaten – zumindest vorerst. Warum die Gründerin mit dem Branding hadert, aber dem Rat eines Investors folgt.",
    "categorySlug": "business",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "Gründerszene (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.businessinsider.de/gruenderszene/warum-der-richtige-startup-name-oft-die-groesste-herausforderung-ist/",
    "publishedAt": "2026-08-10",
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
    "sourceUrl": "https://www.businessinsider.de/gruenderszene/gruenderszene-sucht-die-super-gruender/fellows/so-habe-ich-meine-app-in-den-app-store-gebracht-schritt-fuer-schritt/",
    "publishedAt": "2026-08-10",
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
    "publishedAt": "2026-08-10",
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
    "sourceUrl": "https://www.businessinsider.de/gruenderszene/diese-7-ki-startups-haben-einen-ueberraschenden-investor-die-telekom/",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "discovered-materials-is-playing-ai-whack-a-mole-to-hunt-cooler-chips",
    "title": "Discovered Materials is playing AI whack-a-mole to hunt cooler chips",
    "summary": "Discovered Materials raised $9 million to fund the hunt for more novel materials to build more efficient chips.",
    "categorySlug": "business",
    "tags": [
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/08/10/discovered-materials-is-playing-ai-whack-a-mole-to-hunt-cooler-chips/",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "meta-s-new-glimmer-ai-model-offers-a-hint-at-zuckerberg-s-personal-intelligence-",
    "title": "Meta’s new Glimmer AI model offers a hint at Zuckerberg’s personal intelligence vision",
    "summary": "Meta’s new open-weight Muse Glimmer model offers a glimpse of Mark Zuckerberg’s personal superintelligence vision, as well as  the emerging divide between AI users can own and access.",
    "categorySlug": "business",
    "tags": [
      "Meta AI",
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/08/10/metas-new-glimmer-ai-model-offers-a-hint-at-zuckerbergs-personal-intelligence-vision/",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "tech-industry-is-buzzing-after-a-claude-agent-hacked-into-a-gym",
    "title": "Tech industry is buzzing after a Claude agent hacked into a gym",
    "summary": "An OpenClaw agent hacked into a gym's reservation system to bump its human boss higher on a class' waitlist. And the tech industry took notice.",
    "categorySlug": "business",
    "tags": [
      "Anthropic",
      "Agentic AI",
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/08/10/tech-industry-is-buzzing-after-a-claude-agent-hacked-into-a-gym/",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false,
    "editorsPick": true,
    "editorsNote": "Sehr relevante Entwicklung für das KI-Ökosystem – direkte Leseempfehlung."
  },
  {
    "slug": "ki-projekte-skalieren-so-gelingt-der-weg-vom-pilot-zum-impact",
    "title": "KI-Projekte skalieren: So gelingt der Weg vom Pilot zum Impact",
    "summary": "Viele Unternehmen haben überzeugende KI-Piloten und trotzdem keinen messbaren ROI. Die Ursache liegt selten in der Technologie. Sie liegt in der Lücke zwischen Demo und produktivem Alltag. Was erfolgreiche Transformation von steckengebliebenen Piloten unterscheidet und worauf es ",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "t3n (allgemein, nach KI filtern)",
    "sourceUrl": "https://t3n.de/news/ki-piloten-erfolgsschwelle-business-impact-1756968/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "cyberkriminalitat-warum-hackergruppen-bei-google-jetzt-einen-vor-und-nachnamen-h",
    "title": "Cyberkriminalität: Warum Hackergruppen bei Google jetzt einen Vor- und Nachnamen haben",
    "summary": "Codenamen sollen dabei helfen, die Aktivitäten von Hackergruppen besser verfolgen und entsprechend reagieren zu können. Trotzdem fällt es selbst Expert:innen manchmal schwer, den Überblick zu behalten.\nweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "Google DeepMind",
      "AI Safety"
    ],
    "sourceName": "t3n (allgemein, nach KI filtern)",
    "sourceUrl": "https://t3n.de/news/cyberkriminalitaet-warum-hackergruppen-bei-google-jetzt-einen-vor-und-nachnamen-haben-1757307/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "mehrere-minuten-taglich-diese-android-einstellung-spart-dir-viel-zeit",
    "title": "Mehrere Minuten täglich: Diese Android-Einstellung spart dir viel Zeit",
    "summary": "Wer häufig das Android-Smartphone entsperren muss, verschwendet damit viel Zeit. Denn es gibt eine Einstellung auf den Geräten, die dir Zeit und Nerven spart, ohne die Sicherheit deines Geräts zu gefährden.\nweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "t3n (allgemein, nach KI filtern)",
    "sourceUrl": "https://t3n.de/news/android-einstellungen-zeit-sparen-1757296/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "33-millionen-tonnen-co2-pro-jahr-warum-amazon-jetzt-ein-riesiges-erdgaskraftwerk",
    "title": "33 Millionen Tonnen CO2 pro Jahr: Warum Amazon jetzt ein riesiges Erdgaskraftwerk bauen will",
    "summary": "Eigentlich hat sich Amazon vorgenommen, bis 2040 klimaneutral zu sein. Trotzdem soll ein neues KI-Rechenzentrum mit Strom aus Erdgas betrieben werden – und könnte so zum größten Klimakiller der USA werden.\nweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "t3n (allgemein, nach KI filtern)",
    "sourceUrl": "https://t3n.de/news/33-millionen-tonnen-co2-pro-jahr-warum-amazon-jetzt-ein-riesiges-erdgaskraftwerk-bauen-will-1757328/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "chatbots-vor-der-wahl-ki-uberzeugt-besser-als-menschen-es-gibt-aber-eine-entsche",
    "title": "Chatbots vor der Wahl: KI überzeugt besser als Menschen – es gibt aber eine entscheidende Hürde",
    "summary": "Große Sprachmodelle können Menschen unter bestimmten Umständen dazu bringen, ihre politische Position zu ändern. Manchmal sogar besser als geschulte Kampagnen-Mweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "t3n (allgemein, nach KI filtern)",
    "sourceUrl": "https://t3n.de/news/chatbots-vor-der-wahl-ki-ueberzeugt-besser-als-menschen-es-gibt-aber-eine-entscheidende-huerde-1756226/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "android-ohne-hande-steuern-wie-du-die-bedienungshilfen-auf-deinem-smartphone-ric",
    "title": "Android ohne Hände steuern: Wie du die Bedienungshilfen auf deinem Smartphone richtig nutzt",
    "summary": "Zahlreiche Menschen können aufgrund einer körperlichen Einschränkung Smartphones nicht benutzen. Unter Android gibt es allerdings ein Tool, das die Geräte rein über Sprache steuerbar macht. Was damit möglich ist.\nweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "t3n (allgemein, nach KI filtern)",
    "sourceUrl": "https://t3n.de/news/android-ohne-haende-steuern-bedienungshilfen-smartphone-1756590/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "apple-watch-mit-rundem-display-und-whoop-konkurrent-so-sollen-apples-plane-ausse",
    "title": "Apple Watch mit rundem Display und Whoop-Konkurrent? So sollen Apples Pläne aussehen",
    "summary": "Gibt es bald eine Apple Watch mit rundem Display? Einem Insider zufolge soll der Hersteller über neue Designoptionen nachdenken. Auch ein Konkurrenzgerät für Whoop und Fitbit könnte auf dem Zettel stehen.weiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "t3n (allgemein, nach KI filtern)",
    "sourceUrl": "https://t3n.de/news/apple-watch-mit-rundem-display-und-whoop-konkurrent-so-sollen-apples-plaene-aussehen-1757347/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "verlorene-nasa-sonde-maven-lost-ratsel-so-entstehen-die-polarlichter-auf-dem-mar",
    "title": "Verlorene Nasa-Sonde Maven löst Rätsel: So entstehen die Polarlichter auf dem Mars",
    "summary": "Der Mars birgt ein Geheimnis, das bisherige Annahmen der Astrophysik herausfordert. Historische Messdaten einer längst verstummten Weltraumsonde offenbaren nun ein Wetterphänomen, das dort eigentlich nicht existieren dürfte.\nweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "t3n (allgemein, nach KI filtern)",
    "sourceUrl": "https://t3n.de/news/nasa-maven-daten-mars-polarlichter-1757344/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "windows-11-wie-die-wetter-app-deinen-computer-ausbremst",
    "title": "Windows 11: Wie die Wetter-App deinen Computer ausbremst",
    "summary": "Wer die Wetter-App unter Windows 11 nutzt, könnte damit unabsichtlich den eigenen PC langsamer machen. Die Anwendung verbraucht unverhältnismäßig viel Arbeitsspeicher – und das selbst im Ruhezustand. Woran das liegt.\nweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "t3n (allgemein, nach KI filtern)",
    "sourceUrl": "https://t3n.de/news/windows-11-wetter-app-bremst-computer-aus-1757341/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "unerwartetes-signal-was-im-hellsten-objekt-des-universums-wirklich-vor-sich-geht",
    "title": "Unerwartetes Signal: Was im hellsten Objekt des Universums wirklich vor sich geht",
    "summary": "Astronom:innen haben das Leuchten der hellsten Objekte im All 20 Jahre lang beobachtet. Die gesammelten Daten zeigen: Etablierte Modelle greifen zu kurz. Ein unerwartetes Signal wirft nun ein vollkommen neues Licht auf tiefgreifende kosmische Prozesse.\nweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "t3n (allgemein, nach KI filtern)",
    "sourceUrl": "https://t3n.de/news/blazar-pks-2155-304-astrophysik-raetsel-langzeitstudie-1757407/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "430-millionen-pfund-unterseekabel-wegen-dobbys-grab-aus-harry-potter-verlegt",
    "title": "430 Millionen Pfund: Unterseekabel wegen Dobbys Grab aus Harry Potter verlegt",
    "summary": "Das Greenlink-Kabel zerstört nicht mehr die Pilgerstätte von Harry-Potter-Fans. Es führt nun aber an echten Funden der Bronzezeit vorbei. (Seekabel, Kabelnetz)",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "Golem – KI",
    "sourceUrl": "https://www.golem.de/news/430-millionen-pfund-unterseekabel-wegen-dobbys-grab-aus-harry-potter-verlegt-2608-211773.html",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "anzeige-vielseitiger-enders-grill-bei-amazon-gunstig-wie-nie-zuvor",
    "title": "Anzeige: Vielseitiger Enders-Grill bei Amazon günstig wie nie zuvor",
    "summary": "Bei Amazon gibt es derzeit den Enders Explorer II im Angebot. Der vielseitige Gasgrill ist günstig wie nie zuvor erhältlich. (Küche, Amazon)",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "Golem – KI",
    "sourceUrl": "https://www.golem.de/news/anzeige-vielseitiger-enders-grill-bei-amazon-guenstig-wie-nie-zuvor-2608-211765.html",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "cloud-und-netzwerkprobleme-verbindungsfehler-kosten-mehr-als-einen-arbeitstag-pr",
    "title": "Cloud- und Netzwerkprobleme: Verbindungsfehler kosten mehr als einen Arbeitstag pro Woche",
    "summary": "Viele IT-Entscheider halten ihre Netzwerke für Cloud- und KI-Dienste geeignet. Dennoch muss viel Zeit in die Fehlerbehebung investiert werden. (Infrastruktur, KI)",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "Golem – KI",
    "sourceUrl": "https://www.golem.de/news/cloud-und-netzwerkprobleme-verbindungsfehler-kosten-mehr-als-einen-arbeitstag-pro-woche-2608-211777.html",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "anzeige-drehmomentschlussel-furs-fahrrad-zum-sparpreis-bei-amazon",
    "title": "Anzeige: Drehmomentschlüssel fürs Fahrrad zum Sparpreis bei Amazon",
    "summary": "Ein Drehmomentschlüssel für Fahrrad und Motorrad mit 15 Teilen und einem Messbereich von 2 bis 26 Nm ist bei Amazon reduziert. (Technik/Hardware)",
    "categorySlug": "breaking-news",
    "tags": [
      "Hardware"
    ],
    "sourceName": "Golem – KI",
    "sourceUrl": "https://www.golem.de/news/anzeige-drehmomentschluessel-fuers-fahrrad-zum-sparpreis-bei-amazon-2608-211776.html",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "extrem-beliebt-smart-glasses-von-duckduckgo-sind-einfach-nur-sonnenbrillen",
    "title": "Extrem beliebt: Smart Glasses von Duckduckgo sind einfach nur Sonnenbrillen",
    "summary": "Die neue Sonnenbrille der Suchmaschine ist ein Symbol für den Protest gegen Smart Glasses, mit denen Menschen heimlich aufgenommen werden. (Duckduckgo, KI)",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "Golem – KI",
    "sourceUrl": "https://www.golem.de/news/extrem-beliebt-smart-glasses-von-duckduckgo-sind-einfach-nur-sonnenbrillen-2608-211780.html",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "zhbm-znand-hbf-stapelspeicher-fur-ki-hardware-soll-schneller-und-gro-er-werden",
    "title": "zHBM, zNAND & HBF: Stapelspeicher für KI-Hardware soll schneller und größer werden",
    "summary": "Samsung und SK Hynix haben beim Future Memory Summit ihre Neuerungen bei 3D-Speicher vorgestellt. Direkt aufgestapelter HBM soll die Bandbreite steigern. (3D-Speicher, KI)",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act",
      "Hardware"
    ],
    "sourceName": "Golem – KI",
    "sourceUrl": "https://www.golem.de/news/zhbm-znand-hbf-stapelspeicher-fuer-ki-hardware-soll-schneller-und-groesser-werden-2608-211778.html",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "anzeige-microsoft-365-mit-zero-trust-absichern",
    "title": "Anzeige: Microsoft 365 mit Zero Trust absichern",
    "summary": "Microsoft 365 Zero Trust verlangt klare Kontrollen für Identitäten, Daten und Geräte. Ein Online-Workshop zeigt, wie Schutzmechanismen und Monitoring strukturiert umgesetzt werden. (Golem Karrierewelt, Server-Applikationen)",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "Golem – KI",
    "sourceUrl": "https://www.golem.de/news/anzeige-microsoft-365-mit-zero-trust-absichern-2608-210522.html",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "g-argentina-the-argentine-ranch-where-tech-ceos-plan-to-ride-out-the-apocalypse",
    "title": "(g+) Argentina: The Argentine ranch where tech CEOs plan to ride out the apocalypse",
    "summary": "Drawn by wild landscapes and an eccentric president, executives are building a refuge Von Ciara Nugent (Wirtschaft, Mark Zuckerberg)",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "Golem – KI",
    "sourceUrl": "https://www.golem.de/news/argentina-the-argentine-ranch-where-tech-ceos-plan-to-ride-out-the-apocalypse-2608-211779.html",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "anzeige-24-5-zoll-gro-er-gaming-monitor-mit-400-hz-fur-unter-198-euro-bei-amazon",
    "title": "Anzeige: 24,5 Zoll großer Gaming-Monitor mit 400 Hz für unter 198 Euro bei Amazon",
    "summary": "Wenigstens gute Gaming-Monitore werden immer preiswerter: Ein 400-Hz-Modell von KTC ist bei Amazon rund 50 Euro reduziert. Günstiger war er bisher nur einmal. (Technik/Hardware, Display)",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act",
      "Hardware"
    ],
    "sourceName": "Golem – KI",
    "sourceUrl": "https://www.golem.de/news/anzeige-24-5-zoll-grosser-gaming-monitor-mit-400-hz-fuer-unter-198-euro-bei-amazon-2608-211783.html",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "anzeige-wera-winkelschlussel-bei-amazon-auf-14-39-euro-gefallen",
    "title": "Anzeige: Wera Winkelschlüssel bei Amazon auf 14,39 Euro gefallen",
    "summary": "Bei Amazon gibt es ein Winkelschlüssel-Set aus dem Hause Wera für unter 15 Euro. Der Preis gilt nur kurze Zeit. (Technik/Hardware)",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act",
      "Hardware"
    ],
    "sourceName": "Golem – KI",
    "sourceUrl": "https://www.golem.de/news/anzeige-wera-winkelschluessel-bei-amazon-auf-14-39-euro-gefallen-2608-211781.html",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "heise-usb-c-hubs-im-test-mehr-buchsen-fur-das-macbook-inklusive-neo",
    "title": "heise+ | USB-C-Hubs im Test: Mehr Buchsen für das MacBook – inklusive Neo",
    "summary": "USB-C-Hubs geben Apple-Geräten mehr Ports. Wir testen neun Geräte mit HDMI und Power Delivery, die sich besonders gut fürs MacBook Neo eignen – aber nicht nur.",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "Heise Online (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.heise.de/tests/USB-C-Hubs-im-Test-Mehr-Buchsen-fuer-das-MacBook-inklusive-Neo-11379552.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "erste-lufthansa-maschine-mit-starlink-internet-an-bord-startet-in-kurze",
    "title": "Erste Lufthansa-Maschine mit Starlink-Internet an Bord startet in Kürze",
    "summary": "Fluggäste von Lufthansa können in Kürze in einem ersten Airbus schnelles Internet von Starlink nutzen.",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "Heise Online (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.heise.de/news/Erste-Lufthansa-Maschine-mit-Starlink-Internet-an-Bord-startet-in-Kuerze-11409248.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "meta-veroffentlicht-muse-glimmer-offenes-30-milliarden-parameter-modell",
    "title": "Meta veröffentlicht Muse Glimmer: Offenes 30-Milliarden-Parameter-Modell",
    "summary": "Meta hat mit Muse Glimmer ein offenes 30-Milliarden-Parameter-Modell veröffentlicht, das lokal auf Consumer-Hardware läuft und kommerziell nutzbar ist.",
    "categorySlug": "breaking-news",
    "tags": [
      "Meta AI",
      "Hardware"
    ],
    "sourceName": "Heise Online (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.heise.de/news/Meta-veroeffentlicht-Muse-Glimmer-Offenes-30-Milliarden-Parameter-Modell-11409218.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "bundesregierung-nutzt-ki-als-arbeitswerkzeug-ohne-kennzeichnungspflicht",
    "title": "Bundesregierung nutzt KI als Arbeitswerkzeug ohne Kennzeichnungspflicht",
    "summary": "Die Bundesregierung nutzt KI zunehmend als Werkzeug. Während Schulungen für Beamte verpflichtend sind, bleibt die Transparenz bei KI-generierten Reden vage.",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "Heise Online (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.heise.de/news/KI-in-der-Bundesregierung-Wenn-ein-Sprachmodell-die-Ministerrede-schreibt-11409212.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "dobrindt-baut-drohnenabwehr-nach-vorfall-in-leipzig-massiv-aus",
    "title": "Dobrindt baut Drohnenabwehr nach Vorfall in Leipzig massiv aus",
    "summary": "Nach dem versuchten Drohnenanschlag auf dem Leipziger Flughafen wächst der politische Druck. Innenminister Dobrindt reagiert mit mehr Abwehreinheiten.",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "Heise Online (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.heise.de/news/Debatte-um-Drohnenabwehr-Bundespolizei-soll-mehr-koennen-11409300.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "grafikkarten-werden-nochmals-rund-20-prozent-teurer",
    "title": "Grafikkarten werden nochmals rund 20 Prozent teurer",
    "summary": "Spiele-Grafikkarten werden erneut teurer, weil Nvidia die Preise für Bundles aus GPU und RAM erhöht hat. Auch AMD-Karten sind betroffen.",
    "categorySlug": "breaking-news",
    "tags": [
      "NVIDIA",
      "EU AI Act",
      "Hardware"
    ],
    "sourceName": "Heise Online (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.heise.de/news/Grafikkarten-werden-nochmals-rund-20-Prozent-teurer-11409262.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "lahmer-x86-befehl-hebelt-triviale-schutzfunktion-aus",
    "title": "Lahmer x86-Befehl hebelt triviale Schutzfunktion aus",
    "summary": "Der mächtige System Management Mode (SMM) von x86-Prozessoren ist ein bevorzugtes Ziel von Angriffen. Ein Trick hebelt eine SMM-Schutzfunktion aus.",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "Heise Online (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.heise.de/news/Lahmer-x86-Befehl-hebelt-triviale-Schutzfunktion-aus-11409272.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "chatgpt-im-gerichtssaal-hessische-richter-kopieren-erkennbar-ki-quellen",
    "title": "ChatGPT im Gerichtssaal: Hessische Richter kopieren erkennbar KI-Quellen",
    "summary": "Am Hessischen Verwaltungsgerichtshof hinterlässt ChatGPT Spuren in einem Beschluss für den EuGH. Das verschärft die Debatte über Risiken von KI in der Justiz.",
    "categorySlug": "breaking-news",
    "tags": [
      "OpenAI",
      "EU AI Act"
    ],
    "sourceName": "Heise Online (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.heise.de/news/ChatGPT-im-Gerichtssaal-Hessische-Richter-kopieren-erkennbar-KI-Quellen-11409312.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "top-10-android-auto-wireless-nachrusten-die-besten-adapter-im-test",
    "title": "Top 10: Android Auto Wireless nachrüsten – die besten Adapter im Test",
    "summary": "Android-Smartphone drahtlos mit dem Auto verbinden? Wir zeigen die besten Wireless-Adapter für Android Auto im Vergleich.",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "Heise Online (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.heise.de/bestenlisten/testsieger/top-10-android-auto-wireless-nachruesten-die-besten-adapter-im-test/nv5rxl9?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "amazon-grunder-jeff-bezos-vor-einstieg-bei-ex-klub-von-jurgen-klopp",
    "title": "Amazon-Gründer Jeff Bezos vor Einstieg bei Ex-Klub von Jürgen Klopp",
    "summary": "Eine Investorengruppe um Bezos steht Medienberichten zufolge kurz vor einer Einigung über den Erwerb eines Anteils am Premier-League-Klub FC Liverpool.",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "Heise Online (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.heise.de/news/Amazon-Gruender-Jeff-Bezos-vor-Einstieg-bei-Ex-Club-von-Juergen-Klopp-11409386.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false
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
    "humanReviewed": false
  },
  {
    "slug": "confidence-estimation-for-financial-vision-language-models-in-chart-and-document",
    "title": "Confidence Estimation for Financial Vision-Language Models in Chart and Document Understanding",
    "summary": "arXiv:2608.06532v1 Announce Type: new \nAbstract: LVLMs are increasingly used to read financial charts, tables, and documents, where a single misread figure can move a decision and the most authoritative-looking answer is sometimes one the model produced without reading the exhibi",
    "categorySlug": "research",
    "tags": [
      "KI News"
    ],
    "sourceName": "arXiv cs.CL (Computation and Language)",
    "sourceUrl": "https://arxiv.org/abs/2608.06532",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "lost-in-interpolation-why-predictive-feedback-fails-in-diffusion-language-models",
    "title": "Lost in Interpolation: Why Predictive Feedback Fails in Diffusion Language Models",
    "summary": "arXiv:2608.06529v1 Announce Type: new \nAbstract: Soft-masking accelerates the convergence of Masked Diffusion Language Models (MDLMs). Existing formulations build this blend with linear interpolation (LERP) in the raw embedding space, which implicitly treats that space as Euclide",
    "categorySlug": "research",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "arXiv cs.CL (Computation and Language)",
    "sourceUrl": "https://arxiv.org/abs/2608.06529",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "grasp-reinforcing-language-model-anonymizers-with-group-relative-policy-optimiza",
    "title": "GRASP: Reinforcing Language Model Anonymizers with Group Relative Policy Optimization",
    "summary": "arXiv:2608.06526v1 Announce Type: new \nAbstract: Large language models can infer sensitive personal attributes, such as age, location, and occupation, from ordinary text, turning everyday writing into a privacy risk. Adversarial anonymization defends against this by rewriting a t",
    "categorySlug": "research",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "arXiv cs.CL (Computation and Language)",
    "sourceUrl": "https://arxiv.org/abs/2608.06526",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "measuring-the-cross-lingual-comprehension-gap-how-the-language-of-the-evidence-s",
    "title": "Measuring the Cross-Lingual Comprehension Gap: How the language of the evidence shapes what language models understand",
    "summary": "arXiv:2608.06506v1 Announce Type: new \nAbstract: Language models are often evaluated as though capabilities demonstrated in English remain equally available when the same content is presented in other languages. Traditional multilingual benchmarks rarely isolate language while ho",
    "categorySlug": "research",
    "tags": [
      "AI Safety"
    ],
    "sourceName": "arXiv cs.CL (Computation and Language)",
    "sourceUrl": "https://arxiv.org/abs/2608.06506",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "constructcie-a-dataset-for-extracting-causal-information-from-construction-accid",
    "title": "ConstructCIE: A Dataset for Extracting Causal Information from Construction Accident Narratives",
    "summary": "arXiv:2608.06495v1 Announce Type: new \nAbstract: Construction accident narratives contain rich causal information, but the evidence is often implicit, long-span, and distributed. We introduce ConstructCIE, a manually annotated dataset for Causal Information Extraction from OSHA c",
    "categorySlug": "research",
    "tags": [
      "KI News"
    ],
    "sourceName": "arXiv cs.CL (Computation and Language)",
    "sourceUrl": "https://arxiv.org/abs/2608.06495",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "do-ai-personas-grow-analyzing-and-benchmarking-personality-evolution-in-llm-agen",
    "title": "Do AI Personas Grow? Analyzing and Benchmarking Personality Evolution in LLM Agents After Life Events",
    "summary": "arXiv:2608.06485v1 Announce Type: new \nAbstract: Personality-conditioned LLM agents (PC-Agents) are increasingly used in emotional support, social simulation, and role-playing, motivating the development of lifelong agents that remain coherent over extended interactions. A key co",
    "categorySlug": "research",
    "tags": [
      "Agentic AI"
    ],
    "sourceName": "arXiv cs.CL (Computation and Language)",
    "sourceUrl": "https://arxiv.org/abs/2608.06485",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "recovering-lesion-parameters-from-aphasic-picture-naming-error-profiles-in-large",
    "title": "Recovering Lesion Parameters from Aphasic Picture Naming Error Profiles in Large Language Models",
    "summary": "arXiv:2608.06429v1 Announce Type: new \nAbstract: Interpretability methods for large language models (LLMs) describe internal state but do not directly test whether that state is causally sufficient to produce the observed behavior. In earlier work, we lesioned LLMs to produce err",
    "categorySlug": "research",
    "tags": [
      "KI News"
    ],
    "sourceName": "arXiv cs.CL (Computation and Language)",
    "sourceUrl": "https://arxiv.org/abs/2608.06429",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "ntdh-complex-reasoning-for-comprehensive-affective-analysis",
    "title": "NTDH: Complex Reasoning for Comprehensive Affective Analysis",
    "summary": "arXiv:2608.06425v1 Announce Type: new \nAbstract: Comprehensive affective analysis is challenging for two reasons: it spans heterogeneous prediction tasks with continuous, ordinal, and multi-label outputs, and affective meaning is context-dependent, requiring conflicting cues to b",
    "categorySlug": "research",
    "tags": [
      "KI News"
    ],
    "sourceName": "arXiv cs.CL (Computation and Language)",
    "sourceUrl": "https://arxiv.org/abs/2608.06425",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "separating-decision-rule-misalignment-from-readout-coverage-limitations-in-speec",
    "title": "Separating Decision-Rule Misalignment from Readout-Coverage Limitations in Speech Language Models",
    "summary": "arXiv:2608.06409v1 Announce Type: new \nAbstract: Speech language models are increasingly evaluated on paralinguistic tasks by the accuracy of prompted answers, but answer accuracy combines failures at different stages of the audio-to-answer computation. We introduce a generation-",
    "categorySlug": "research",
    "tags": [
      "RAG",
      "AI Safety"
    ],
    "sourceName": "arXiv cs.CL (Computation and Language)",
    "sourceUrl": "https://arxiv.org/abs/2608.06409",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "texas-task-expert-aware-supervision-for-downstream-mixture-of-experts-llm-adapta",
    "title": "TEXAS: Task-Expert-Aware Supervision for Downstream Mixture-of-Experts LLM Adaptation",
    "summary": "arXiv:2608.06396v1 Announce Type: new \nAbstract: Mixture-of-Experts (MoE) language models route each token through a small subset of experts, making routing patterns useful for identifying task-relevant experts during downstream adaptation. Yet current approaches have two limitat",
    "categorySlug": "research",
    "tags": [
      "KI News"
    ],
    "sourceName": "arXiv cs.CL (Computation and Language)",
    "sourceUrl": "https://arxiv.org/abs/2608.06396",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "tasksense-focusing-on-what-matters-in-world-models",
    "title": "TaskSense: Focusing on What Matters in World Models",
    "summary": "arXiv:2608.06544v1 Announce Type: new \nAbstract: World models for visual control typically learn compact latent states by reconstructing observations, implicitly encouraging representations to preserve information across the entire visual input. However, task-relevant content oft",
    "categorySlug": "research",
    "tags": [
      "RAG",
      "Hardware"
    ],
    "sourceName": "arXiv cs.AI (Artificial Intelligence)",
    "sourceUrl": "https://arxiv.org/abs/2608.06544",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "knowplan-knowledge-driven-ai-agents-for-smart-degree-pathway-planning",
    "title": "KNOWPLAN: Knowledge-Driven AI Agents for Smart Degree Pathway Planning",
    "summary": "arXiv:2608.06530v1 Announce Type: new \nAbstract: Planning a degree from official university sources requires solving two problems in order. The institution's curriculum must first be reconstructed from catalogs, departmental pages, JSON endpoints, and PDFs that share no schema, a",
    "categorySlug": "research",
    "tags": [
      "Agentic AI",
      "Hardware"
    ],
    "sourceName": "arXiv cs.AI (Artificial Intelligence)",
    "sourceUrl": "https://arxiv.org/abs/2608.06530",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "can-mllms-decode-the-creative-leap-introducing-c4-for-cross-concept-understandin",
    "title": "Can MLLMs Decode the Creative Leap? Introducing C4 for Cross-Concept Understanding",
    "summary": "arXiv:2608.06501v1 Announce Type: new \nAbstract: Creative capabilities of MLLMs matter in design, communication, education, and human--AI collaboration, yet remain difficult to evaluate because explicit targets and reward signals are scarce compared with accuracy-oriented tasks. ",
    "categorySlug": "research",
    "tags": [
      "AI Safety",
      "Hardware"
    ],
    "sourceName": "arXiv cs.AI (Artificial Intelligence)",
    "sourceUrl": "https://arxiv.org/abs/2608.06501",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "webgrader-training-llms-for-web-development-with-self-evolving-programmatic-grad",
    "title": "WebGrader: Training LLMs for Web Development with Self-Evolving Programmatic Grader",
    "summary": "arXiv:2608.06474v1 Announce Type: new \nAbstract: Large language models increasingly generate complete websites from natural-language descriptions, and reinforcement learning has become a central approach to closing their remaining functional gap. This training regime is bottlenec",
    "categorySlug": "research",
    "tags": [
      "Hardware"
    ],
    "sourceName": "arXiv cs.AI (Artificial Intelligence)",
    "sourceUrl": "https://arxiv.org/abs/2608.06474",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "learning-to-predict-middle-layer-attention-in-mllms-for-visual-token-prunin",
    "title": "Learning to Predict Middle-Layer Attention in MLLMs for Visual Token Prunin",
    "summary": "arXiv:2608.06411v1 Announce Type: new \nAbstract: Multimodal large language models (MLLMs) achieve strong performance across diverse vision-language tasks, but their efficiency is limited by the cost of processing numerous visual tokens. Visual token pruning can reduce this cost, ",
    "categorySlug": "research",
    "tags": [
      "Hardware"
    ],
    "sourceName": "arXiv cs.AI (Artificial Intelligence)",
    "sourceUrl": "https://arxiv.org/abs/2608.06411",
    "publishedAt": "2026-08-10",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "adias-automated-design-of-interactive-agentic-systems",
    "title": "ADIAS: Automated Design of Interactive Agentic Systems",
    "summary": "arXiv:2608.06410v1 Announce Type: new \nAbstract: Automated agent design improves agent harnesses through iterative revision, evaluation, and feedback summarization. Existing methods are largely candidate-centric: cross-round experience is organized around candidate agents, which ",
    "categorySlug": "research",
    "tags": [
      "Agentic AI",
      "AI Safety",
      "Hardware"
    ],
    "sourceName": "arXiv cs.AI (Artificial Intelligence)",
    "sourceUrl": "https://arxiv.org/abs/2608.06410",
    "publishedAt": "2026-08-10",
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
