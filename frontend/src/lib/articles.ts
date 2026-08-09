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
    "slug": "in-diesen-kleinen-stadten-sind-milliarden-businesses-entstanden",
    "title": "In diesen kleinen Städten sind Milliarden-Businesses entstanden",
    "summary": "Bei gehypten Startups denken die meisten an London, Berlin oder Paris. Aber auch deutlich kleinere Städte können Milliardengründungen hervorbringen.",
    "categorySlug": "business",
    "tags": [
      "EU AI Act",
      "Deutschland"
    ],
    "sourceName": "Gründerszene (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.businessinsider.de/gruenderszene/milliarden-business-in-der-karl-marx-stadt/",
    "publishedAt": "2026-08-08",
    "aiGenerated": false,
    "humanReviewed": false,
    "breaking": true
  },
  {
    "slug": "urlaubsgru-e-von-maschmeyer-co-hier-verbringen-deutschlands-grunder-ihren-sommer",
    "title": "Urlaubsgrüße von Maschmeyer & Co.: Hier verbringen Deutschlands Gründer ihren Sommer",
    "summary": "Lest hier, wo die Startup-Szene ihren Sommerurlaub macht und warum Kult-Investor Carsten Maschmeyer Esel streichelt.",
    "categorySlug": "business",
    "tags": [
      "EU AI Act",
      "Deutschland"
    ],
    "sourceName": "Gründerszene (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.businessinsider.de/gruenderszene/urlaubsgruesse-von-maschmeyer-co-hier-machen-unsere-gruender-urlaub/",
    "publishedAt": "2026-08-08",
    "aiGenerated": false,
    "humanReviewed": false,
    "breaking": true,
    "editorsPick": true,
    "editorsNote": "Sehr relevante Entwicklung für das KI-Ökosystem – direkte Leseempfehlung."
  },
  {
    "slug": "openai-acquires-presentation-startup-nextslide",
    "title": "OpenAI acquires presentation startup NextSlide",
    "summary": "NextSlide says its team members are now working on ChatGPT.",
    "categorySlug": "business",
    "tags": [
      "OpenAI",
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/08/08/openai-acquires-presentation-startup-nextslide/",
    "publishedAt": "2026-08-08",
    "aiGenerated": false,
    "humanReviewed": false,
    "breaking": true
  },
  {
    "slug": "planned-amazon-data-center-could-become-the-biggest-climate-polluter-in-the-u-s",
    "title": "Planned Amazon data center could become the biggest climate polluter in the U.S.",
    "summary": "As part of a planned Texas data center, Amazon is investing in an on-site power plant that could reportedly become the largest source of climate pollution in the United States.",
    "categorySlug": "business",
    "tags": [
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/08/08/planned-amazon-data-center-could-become-the-biggest-climate-polluter-in-the-u-s/",
    "publishedAt": "2026-08-08",
    "aiGenerated": false,
    "humanReviewed": false,
    "breaking": true
  },
  {
    "slug": "ki-als-hausaufgabenhilfe-wie-gruppenzwang-die-zahlungsbereitschaft-von-eltern-er",
    "title": "KI als Hausaufgabenhilfe: Wie Gruppenzwang die Zahlungsbereitschaft von Eltern erhöht",
    "summary": "Viele Eltern befürchten, dass KI-Tools die kognitiven Fähigkeiten ihrer Kinder beeinträchtigen könnten. Trotzdem wären viele bereit, für entsprechende Hausaufgaben-Software tief in die Tasche zu greifen.\nweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "t3n (allgemein, nach KI filtern)",
    "sourceUrl": "https://t3n.de/news/ki-als-hausaufgabenhilfe-wie-gruppenzwang-die-zahlungsbereitschaft-von-eltern-erhoeht-1757176/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-08",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "ai-act-wie-die-sparkasse-ki-prozesse-sicher-automatisiert",
    "title": "AI Act: Wie die Sparkasse KI-Prozesse sicher automatisiert",
    "summary": "Seit dem 2. August 2026 gilt der AI Act vollständig und verlangt von Unternehmen KI-Governance. Der Newsroom der Sparkassen-Finanzgruppe hat sie längst.\nweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "t3n (allgemein, nach KI filtern)",
    "sourceUrl": "https://t3n.de/news/ai-act-ki-prozesse-automatisierung-sparkasse-1756364/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-08",
    "aiGenerated": false,
    "humanReviewed": false,
    "editorsPick": true,
    "editorsNote": "Sehr relevante Entwicklung für das KI-Ökosystem – direkte Leseempfehlung."
  },
  {
    "slug": "google-maps-neuer-modus-spart-uber-die-halfte-des-akkus-mit-einem-simplen-trick",
    "title": "Google Maps: Neuer Modus spart über die Hälfte des Akkus – mit einem simplen Trick",
    "summary": "Nutzer:innen von Smartphones der Pixel-10-Serie bekommen einen neuen Energiesparmodus für Google Maps. So aktiviert ihr ihn.\nweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "Google DeepMind",
      "EU AI Act"
    ],
    "sourceName": "t3n (allgemein, nach KI filtern)",
    "sourceUrl": "https://t3n.de/news/google-maps-neuer-energiesparmodus-1750008/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-08",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "direct-air-capture-neues-verfahren-macht-aus-kohlendioxid-direkt-batterie-grafit",
    "title": "Direct Air Capture: Neues Verfahren macht aus Kohlendioxid direkt Batterie-Grafit",
    "summary": "Die Suche nach nachhaltigen Rohstoffen für die globale Batterieproduktion läuft weltweit auf Hochtouren. Ein neues Verfahren könnte gleich zwei drängende Probleme lösen, verlangt der Industrie bei der Skalierung aber einiges ab.\nweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "t3n (allgemein, nach KI filtern)",
    "sourceUrl": "https://t3n.de/news/co2-umwandlung-batterie-graphit-1757190/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-08",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "studie-mit-5-000-jugendlichen-ab-diesem-alter-schadet-social-media-den-schulnote",
    "title": "Studie mit 5.000 Jugendlichen: Ab diesem Alter schadet Social Media den Schulnoten nicht mehr",
    "summary": "Videos schauen bei den Hausaufgaben, abends mit den Freunden schreiben, statt zu schlafen: Soziale Medien bestimmen den Alltag vieler Kinder. Das hat Auswirkungen auf die Noten.weiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "t3n (allgemein, nach KI filtern)",
    "sourceUrl": "https://t3n.de/news/studie-5000-jugendliche-tiktok-instagram-1756078/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-08",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "in-nur-zwei-tagen-und-fur-200-dollar-vibe-coder-baut-spielbaren-wow-klon-mit-cla",
    "title": "In nur zwei Tagen und für 200 Dollar: Vibe-Coder baut spielbaren WoW-Klon mit Claude",
    "summary": "Mit „World of Claudecraft“ hat ein Vibe-Coder eine eigene Version des MMORPG World of Warcraft erschaffen. Dafür musste er nur wenige hundert US-Dollar in das Projekt investieren. Was das Spiel auf dem Kasten hat und wo es bisher nicht an das Original heranreicht.\nweiterlesen auf",
    "categorySlug": "breaking-news",
    "tags": [
      "Anthropic"
    ],
    "sourceName": "t3n (allgemein, nach KI filtern)",
    "sourceUrl": "https://t3n.de/news/world-of-claudecraft-in-2-tagen-1749653/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-08",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "historischer-tiefpunkt-im-juli-wollten-nur-367-deutsche-einen-neuen-tesla",
    "title": "Historischer Tiefpunkt: Im Juli wollten nur 367 Deutsche einen neuen Tesla",
    "summary": "Tesla hat auf dem eigentlich boomenden E-Auto-Markt Deutschland einen heftigen Einbruch bei den Neuzulassungen erlebt. Im Juli 2026 wurden gerade einmal 367 Fahrzeuge neu angemeldet. Der Anteil am Gesamtmarkt schrumpfte auf 0,1 Prozent.weiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act",
      "Deutschland"
    ],
    "sourceName": "t3n (allgemein, nach KI filtern)",
    "sourceUrl": "https://t3n.de/news/tesla-367-neuzulassungen-1756924/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-08",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "3d-drucker-warum-sie-das-perfekte-midlife-crisis-werkzeug-fur-manner-sind",
    "title": "3D-Drucker: Warum sie das perfekte Midlife-Crisis-Werkzeug für Männer sind",
    "summary": "Neue Technologie kann Leben retten, weiß unsere Kolumnistin. Manchmal hilft sie aber auch einfach nur Männern durch ihre Midlife-Crisis. Wie beispielsweise 3D-Dweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "t3n (allgemein, nach KI filtern)",
    "sourceUrl": "https://t3n.de/news/3d-drucker-midlife-crisis-1756239/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-08",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "hort-auf-nach-freien-tagen-zu-fragen-meta-setzt-auf-mehr-arbeit-statt-mehr-freiz",
    "title": "„Hört auf, nach freien Tagen zu fragen“: Meta setzt auf mehr Arbeit statt mehr Freizeit",
    "summary": "Während neue Tools die Effizienz der Mitarbeiter:innen steigern, stellt sich die Frage, ob und wie sie an der gewonnenen Zeit beteiligt werden sollten. Einige Tech-Manager sind sich einig – nämlich gar nicht.\nweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "Meta AI",
      "RAG",
      "EU AI Act"
    ],
    "sourceName": "t3n (allgemein, nach KI filtern)",
    "sourceUrl": "https://t3n.de/news/hoert-auf-nach-freien-tagen-zu-fragen-meta-setzt-auf-mehr-arbeit-statt-mehr-freizeit-1757201/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-08",
    "aiGenerated": false,
    "humanReviewed": false,
    "editorsPick": true,
    "editorsNote": "Sehr relevante Entwicklung für das KI-Ökosystem – direkte Leseempfehlung."
  },
  {
    "slug": "durchbruch-zur-behandlung-von-infektionskrankheiten-forscher-entwickeln-virus-mi",
    "title": "Durchbruch zur Behandlung von Infektionskrankheiten: Forscher entwickeln Virus mit KI",
    "summary": "Die Studie ebne den Weg, um wirkungsvolle Therapien für hartnäckige Krankheitserreger zu finden. Sie beweist einmal mehr das medizinische Potenzial von KI – ebenso wie die enormen Sicherheitsrisiken.\nweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "t3n (allgemein, nach KI filtern)",
    "sourceUrl": "https://t3n.de/news/durchbruch-zur-behandlung-von-infektionskrankheiten-forscher-entwickeln-virus-mit-ki-1757206/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-08-08",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "anzeige-acezuk-9000a-starthilfe-powerbank-fallt-unter-60-euro",
    "title": "Anzeige: ACEZUK 9000A Starthilfe-Powerbank fällt unter 60 Euro",
    "summary": "Eine leere Autobatterie ist ein großes Ärgernis. Die ACEZUK Starthilfe-Powerbank mit integriertem Kompressor gibt es bei Amazon nun für unter 60 Euro zu kaufen. (Technik/Hardware)",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act",
      "Hardware"
    ],
    "sourceName": "Golem – KI",
    "sourceUrl": "https://www.golem.de/news/anzeige-acezuk-9000a-starthilfe-powerbank-faellt-unter-60-euro-2608-211707.html",
    "publishedAt": "2026-08-08",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "sicherheitsnorm-ab-2027-pflicht-china-macht-autonomes-fahren-zur-chefsache",
    "title": "Sicherheitsnorm ab 2027 Pflicht: China macht autonomes Fahren zur Chefsache",
    "summary": "China hat einen nationalen Standard für autonomes Fahren verabschiedet. Ab Juli 2027 müssen Hersteller ihre Technik daran ausrichten. (Autonomes Fahren, Auto)",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "Golem – KI",
    "sourceUrl": "https://www.golem.de/news/sicherheitsnorm-ab-2027-pflicht-china-macht-autonomes-fahren-zur-chefsache-2608-211728.html",
    "publishedAt": "2026-08-08",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "henna-virkkunen-eu-nimmt-meta-und-tiktok-wegen-ceuta-krise-ins-visier",
    "title": "Henna Virkkunen: EU nimmt Meta und Tiktok wegen Ceuta-Krise ins Visier",
    "summary": "Falschinformationen sollen zum massenhaften Grenzübertritt nach Ceuta beigetragen haben, sagt EU-Kommissarin Henna Virkkunen. (EU, Soziales Netz)",
    "categorySlug": "breaking-news",
    "tags": [
      "Meta AI",
      "RAG",
      "EU AI Act"
    ],
    "sourceName": "Golem – KI",
    "sourceUrl": "https://www.golem.de/news/henna-virkkunen-eu-nimmt-meta-und-tiktok-wegen-ceuta-krise-ins-visier-2608-211735.html",
    "publishedAt": "2026-08-08",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "freifahren-diese-app-warnt-berliner-fahrgaste-vor-ticket-kontrollen",
    "title": "\"Freifahren\": Diese App warnt Berliner Fahrgäste vor Ticket-Kontrollen",
    "summary": "Ein Informatikstudent hat eine App entwickelt, die Kontrollen in Berliner U- und S-Bahnen anzeigt. Rund 40.000 Menschen nutzen \"Freifahren\" mittlerweile. (ÖPNV, Web Apps)",
    "categorySlug": "breaking-news",
    "tags": [
      "Deutschland"
    ],
    "sourceName": "Golem – KI",
    "sourceUrl": "https://www.golem.de/news/freifahren-diese-app-warnt-berliner-fahrgaeste-vor-ticket-kontrollen-2608-211733.html",
    "publishedAt": "2026-08-08",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "schluss-mit-dem-limit-chatgpt-offnet-sich-fur-alle",
    "title": "Schluss mit dem Limit: ChatGPT öffnet sich für alle",
    "summary": "ChatGPT-Gratisnutzer haben künftig kein Nachrichtenlimit mehr, zahlende Nutzer erhalten ein besseres Modell und eine Anpassung der Denkdauer. (ChatGPT, KI)",
    "categorySlug": "breaking-news",
    "tags": [
      "OpenAI"
    ],
    "sourceName": "Golem – KI",
    "sourceUrl": "https://www.golem.de/news/schluss-mit-dem-limit-chatgpt-oeffnet-sich-fuer-alle-2608-211734.html",
    "publishedAt": "2026-08-08",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "anzeige-high-end-mini-pc-mit-ryzen-9-und-16-gbyte-ddr5-ram-fur-unter-670-euro",
    "title": "Anzeige: High-End-Mini-PC mit Ryzen 9 und 16 GByte DDR5-RAM für unter 670 Euro",
    "summary": "Der Geekom A7 Max Mini-PC ist bei Amazon rund 50 Euro gegenüber dem Durchschnittspreis reduziert. Er könnte vorerst zum letzten Mal so günstig wie jetzt sein. (Technik/Hardware, Computer)",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act",
      "Hardware"
    ],
    "sourceName": "Golem – KI",
    "sourceUrl": "https://www.golem.de/news/anzeige-high-end-mini-pc-mit-ryzen-9-und-16-gbyte-ddr5-ram-fuer-unter-670-euro-2608-211730.html",
    "publishedAt": "2026-08-08",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "kinderarzte-social-media-macht-junge-menschen-krank-und-dumm",
    "title": "Kinderärzte: Social Media macht junge Menschen \"krank und dumm\"",
    "summary": "Kinderärzte erheben schwere Vorwürfe gegen Eltern. Soziale Medien gefährdeten massiv die Entwicklung junger Menschen. (Jugendschutz, Soziales Netz)",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "Golem – KI",
    "sourceUrl": "https://www.golem.de/news/kinderaerzte-social-media-macht-junge-menschen-krank-und-dumm-2608-211736.html",
    "publishedAt": "2026-08-08",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "rollenspiel-gothic-remake-bekommt-mod-kit-und-legendaren-marvin-modus",
    "title": "Rollenspiel: Gothic Remake bekommt Mod-Kit und legendären Marvin-Modus",
    "summary": "THQ Nordic baut das Gothic Remake weiter aus. Gleichzeitig kommen alle drei klassischen Gothic-Spiele auf aktuelle Konsolen. (Gothic, Rollenspiel)",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "Golem – KI",
    "sourceUrl": "https://www.golem.de/news/rollenspiel-gothic-remake-bekommt-mod-kit-und-legendaeren-marvin-modus-2608-211737.html",
    "publishedAt": "2026-08-08",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "astra-openai-will-neues-ki-modell-vorerst-nicht-veroffentlichen",
    "title": "Astra: OpenAI will neues KI-Modell vorerst nicht veröffentlichen",
    "summary": "Wie gefährlich darf eine KI werden, bevor sie zur Waffe wird? OpenAI kann diese Frage bei seinem Modell Astra derzeit nicht mehr sicher beantworten. (OpenAI, KI)",
    "categorySlug": "breaking-news",
    "tags": [
      "OpenAI",
      "RAG",
      "EU AI Act"
    ],
    "sourceName": "Golem – KI",
    "sourceUrl": "https://www.golem.de/news/astra-openai-will-neues-ki-modell-vorerst-nicht-veroeffentlichen-2608-211738.html",
    "publishedAt": "2026-08-08",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "cloudflare-menschen-werden-im-internet-nur-ein-rundungsfehler-sein",
    "title": "Cloudflare: \"Menschen werden im Internet nur ein Rundungsfehler sein\"",
    "summary": "KI-Systeme erzeugen immer mehr Datenverkehr. Cloudflare erwartet, dass Maschinen Menschen im Internet geradezu überrollen werden. (Cloudflare, KI)",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "Golem – KI",
    "sourceUrl": "https://www.golem.de/news/cloudflare-menschen-werden-im-internet-nur-ein-rundungsfehler-sein-2608-211739.html",
    "publishedAt": "2026-08-08",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "developer-happchen-kotlin-lsp-fur-cursor-und-sneak-peak-fur-kubernetes",
    "title": "Developer-Häppchen:  Kotlin-LSP für Cursor und Sneak Peak für Kubernetes",
    "summary": "Kleine, aber interessante Meldungshäppchen vom News-Buffet zu Kubernetes, Servo, Symfony Polyfill, Python, Rust, Pandoc, Coreutils, JetBrains und Quasar.",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "Heise Online (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.heise.de/news/Developer-Haeppchen-Kotlin-LSP-fuer-Cursor-und-Sneak-Peak-fuer-Kubernetes-11399144.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-08",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "heise-angebot-ix-workshop-lokales-active-directory-gegen-angriffe-absichern",
    "title": "heise-Angebot: iX-Workshop: Lokales Active Directory gegen Angriffe absichern",
    "summary": "Lernen Sie, wie Angreifer Active Directory kompromittieren und wie Sie Ihre AD-Umgebung effektiv vor Ransomware und anderen Cyberangriffen schützen.",
    "categorySlug": "breaking-news",
    "tags": [
      "AI Safety"
    ],
    "sourceName": "Heise Online (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.heise.de/news/iX-Workshop-Lokales-Active-Directory-gegen-Angriffe-absichern-11378640.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-08",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "google-threat-intelligence-chefin-dank-ki-mehr-zero-days-als-je-zuvor",
    "title": "Google-Threat-Intelligence-Chefin: Dank KI „mehr Zero-Days als je zuvor“",
    "summary": "Bug-Bounty-Programme werden mit Fehlerberichten geflutet, User und Firmen leiden unter KI-Angriffen: Der Security-Bereich ändert sich rasant, sagt Sandra Joyce.",
    "categorySlug": "breaking-news",
    "tags": [
      "Google DeepMind",
      "AI Safety",
      "Hardware"
    ],
    "sourceName": "Heise Online (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.heise.de/hintergrund/Google-Threat-Intelligence-Chefin-Dank-KI-mehr-Zero-Days-als-je-zuvor-11400371.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-08",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "daimler-truck-setzt-nach-gewinneinbruch-auf-zweites-halbjahr",
    "title": "Daimler Truck setzt nach Gewinneinbruch auf zweites Halbjahr",
    "summary": "Erneut ist der Gewinn bei Daimler Truck eingebrochen. Zölle drückten auf die Profitabilität. Der Dax-Konzern sieht seine Geschäfte aber an einem Wendepunkt.",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "Heise Online (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.heise.de/news/Daimler-Truck-setzt-nach-Gewinneinbruch-auf-zweites-Halbjahr-11403958.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-08",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "heise-angebot-komplett-uberarbeitetes-desinfec-t-2026-ab-sofort-auf-usb-stick-er",
    "title": "heise-Angebot: Komplett überarbeitetes Desinfec't 2026 ab sofort auf USB-Stick erhältlich",
    "summary": "Jetzt kaufen und Windows-PCs komfortabler scannen: Dank der neuen technischen Basis von Desinfec’t 2026 laufen Signaturupdates und Scans wesentlich stabiler.",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "Heise Online (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.heise.de/news/Komplett-ueberarbeitetes-Desinfec-t-2026-ab-sofort-auf-USB-Stick-erhaeltlich-11401846.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-08",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "openai-tritt-bei-arbeit-an-neuem-ki-modell-auf-die-bremse",
    "title": "OpenAI tritt bei Arbeit an neuem KI-Modell auf die Bremse",
    "summary": "OpenAI will beim Training neuer KI die Sicherheitsmaßnahmen stärken. Die Entwicklung eines neuen Modells soll sich dadurch verzögern.",
    "categorySlug": "breaking-news",
    "tags": [
      "OpenAI",
      "EU AI Act"
    ],
    "sourceName": "Heise Online (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.heise.de/news/OpenAI-tritt-bei-Arbeit-an-neuem-KI-Modell-auf-die-Bremse-11403942.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-08",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "mahroboter-eufy-c15-im-test-einfacher-geht-es-nicht",
    "title": "Mähroboter Eufy C15 im Test: Einfacher geht es nicht",
    "summary": "Der Eufy C15 kartiert kleine Gärten automatisch und erkennt Hindernisse gut. Zudem ist er relativ günstig. Wir haben ihn getestet und verraten seine Schwächen.",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "Heise Online (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.heise.de/bestenlisten/testbericht/maehroboter-eufy-c15-im-test-einfacher-geht-es-nicht/25crgyj?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-08",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "spacex-raketenstufe-kracht-in-den-mond-erste-aufnahmen-des-einschlagskraters",
    "title": "SpaceX-Raketenstufe kracht in den Mond: Erste Aufnahmen des Einschlagskraters",
    "summary": "Mit Spannung war der Einschlag einer Falcon9-Raketenstufe auf dem Mond erwartet worden. Jetzt gibt es erste Bilder vom Krater.",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "Heise Online (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.heise.de/news/Suedkoreanische-Mondsonde-liefert-Bilder-vom-Falcon-Einschlagskrater-11404018.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-08",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "amazon-plant-gigantisches-gaskraftwerk-fur-neues-ki-rechenzentrum",
    "title": "Amazon plant gigantisches Gaskraftwerk für neues KI-Rechenzentrum",
    "summary": "Der Cloud-Riese Amazon baut in Texas eine Insel-Stromversorgung mit 7,65 Gigawatt. Die CO2-Emissionen könnten alle US-Kohlekraftwerke in den Schatten stellen.",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "Heise Online (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.heise.de/news/Amazon-plant-gigantisches-Gaskraftwerk-fuer-neues-KI-Rechenzentrum-11404032.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-08",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "testsieger-die-beste-mobile-klimaanlage-im-test",
    "title": "Testsieger: Die beste mobile Klimaanlage im Test",
    "summary": "Mobile Klimaanlagen schaffen Abhilfe, wenn es im Sommer heiß wird. Wir zeigen die besten Monoblock-Klimageräte.",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "Heise Online (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.heise.de/bestenlisten/testsieger/testsieger-die-beste-mobile-klimaanlage-im-test-diese-modelle-gibt-es-noch/hkk399y?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-08-08",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "poolbench-a-benchmark-for-pooling-strategies-in-concept-representation-evaluatio",
    "title": "PoolBench: A Benchmark for Pooling Strategies in Concept Representation Evaluation for Decoder-Only LLMs",
    "summary": "arXiv:2608.05162v1 Announce Type: new \nAbstract: Pooling is a consequential but under-examined design choice in decoder-only concept representation work: practitioners must collapse token-level hidden states into a passage-level vector, yet no shared protocol exists for comparing",
    "categorySlug": "research",
    "tags": [
      "RAG",
      "AI Safety"
    ],
    "sourceName": "arXiv cs.CL (Computation and Language)",
    "sourceUrl": "https://arxiv.org/abs/2608.05162",
    "publishedAt": "2026-08-08",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "semiadapt-instruct-extensible-instruction-tuning-via-latent-domain-specialised-a",
    "title": "SemiAdapt-Instruct: Extensible Instruction Tuning via Latent Domain-Specialised Adapters",
    "summary": "arXiv:2608.05161v1 Announce Type: new \nAbstract: Instruction-tuned LLMs are deployed into environments where domains evolve, yet extending a fine-tuned model's capabilities without full retraining remains an unsolved practical challenge. We present SemiAdapt-Instruct, a modular f",
    "categorySlug": "research",
    "tags": [
      "KI News"
    ],
    "sourceName": "arXiv cs.CL (Computation and Language)",
    "sourceUrl": "https://arxiv.org/abs/2608.05161",
    "publishedAt": "2026-08-08",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "safe-evolution-with-circuit-anchors",
    "title": "Safe Evolution with Circuit Anchors",
    "summary": "arXiv:2608.05158v1 Announce Type: new \nAbstract: In biological evolution, unconstrained mutation can lead to catastrophic outcomes: organisms may evolve enhanced capabilities while losing essential functions for survival. Nature's solution is \\textit{developmental constraints}, w",
    "categorySlug": "research",
    "tags": [
      "KI News"
    ],
    "sourceName": "arXiv cs.CL (Computation and Language)",
    "sourceUrl": "https://arxiv.org/abs/2608.05158",
    "publishedAt": "2026-08-08",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "large-language-models-threaten-double-blind-review",
    "title": "Large Language Models Threaten Double-blind Review",
    "summary": "arXiv:2608.05157v1 Announce Type: new \nAbstract: Double blind peer review serves as the scientific community primary defense against status and affiliation bias. Its effectiveness rests on the assumption that anonymized manuscripts convey scientific merit without revealing their ",
    "categorySlug": "research",
    "tags": [
      "KI News"
    ],
    "sourceName": "arXiv cs.CL (Computation and Language)",
    "sourceUrl": "https://arxiv.org/abs/2608.05157",
    "publishedAt": "2026-08-08",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "scaffold-mediated-post-training-co-evolving-model-parameters-and-procedural-scaf",
    "title": "Scaffold-Mediated Post-Training: Co-Evolving Model Parameters and Procedural Scaffold Graphs",
    "summary": "arXiv:2608.05156v1 Announce Type: new \nAbstract: Post-training of large language models optimizes only parameters, while inference-time procedural scaffolds are typically designed independently of parameter training. This disconnect makes it difficult to automatically acquire and",
    "categorySlug": "research",
    "tags": [
      "KI News"
    ],
    "sourceName": "arXiv cs.CL (Computation and Language)",
    "sourceUrl": "https://arxiv.org/abs/2608.05156",
    "publishedAt": "2026-08-08",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "beyond-sentiment-comparing-traditional-nlp-and-llm-based-multi-dimensional-analy",
    "title": "Beyond Sentiment: Comparing Traditional NLP and LLM-Based Multi-Dimensional Analysis for Political News Evaluation",
    "summary": "arXiv:2608.05155v1 Announce Type: new \nAbstract: Traditional sentiment analysis (SA) models, while effective for polarity classification, provide limited insight into the rhetorical, ideological, and framing dimensions of political discourse -- dimensions that are central to rese",
    "categorySlug": "research",
    "tags": [
      "AI Safety"
    ],
    "sourceName": "arXiv cs.CL (Computation and Language)",
    "sourceUrl": "https://arxiv.org/abs/2608.05155",
    "publishedAt": "2026-08-08",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "rig-rope-relation-and-instance-gated-rotary-positional-encoding-with-duration-aw",
    "title": "RIG-RoPE: Relation- and Instance-Gated Rotary Positional Encoding with Duration-Aware Temporal Coordinates",
    "summary": "arXiv:2608.05154v1 Announce Type: new \nAbstract: Rotary positional encoding (RoPE) is a core component of modern language models and has been extended to multimodal LLMs through multidimensional variants such as multimodal RoPE (M-RoPE), which split positional channels into tempo",
    "categorySlug": "research",
    "tags": [
      "KI News"
    ],
    "sourceName": "arXiv cs.CL (Computation and Language)",
    "sourceUrl": "https://arxiv.org/abs/2608.05154",
    "publishedAt": "2026-08-08",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "universal-pathologies-conditional-consequences-a-triple-robustness-analysis-of-r",
    "title": "Universal Pathologies, Conditional Consequences: A Triple-Robustness Analysis of RAG for Multi-Hop Traceability",
    "summary": "arXiv:2608.05153v1 Announce Type: new \nAbstract: GraphRAG underperforms vector RAG on citation precision in many reports, but where and why have remained corpus-bound. We present a triple-robustness analysis that holds the retrieval architecture fixed and varies three orthogonal ",
    "categorySlug": "research",
    "tags": [
      "RAG",
      "AI Safety"
    ],
    "sourceName": "arXiv cs.CL (Computation and Language)",
    "sourceUrl": "https://arxiv.org/abs/2608.05153",
    "publishedAt": "2026-08-08",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "mean-field-dynamics-of-chain-of-thought-reasoning-in-large-language-models",
    "title": "Mean-Field Dynamics of Chain-of-Thought Reasoning in Large Language Models",
    "summary": "arXiv:2608.05152v1 Announce Type: new \nAbstract: Large language models (LLMs) with chain-of-thought reasoning have been widely applied in recent years, and theoretical explanations of their behavior may help deepen our understanding and guide model optimization. In this study, we",
    "categorySlug": "research",
    "tags": [
      "KI News"
    ],
    "sourceName": "arXiv cs.CL (Computation and Language)",
    "sourceUrl": "https://arxiv.org/abs/2608.05152",
    "publishedAt": "2026-08-08",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "simulator-grounded-large-language-models-for-industrial-causal-reasoning-tool-us",
    "title": "Simulator-Grounded Large Language Models for Industrial Causal Reasoning: Tool-Use, Structured Injection, and Plant-Portable Retrieval for Wastewater Treatment Decision Support",
    "summary": "arXiv:2608.05151v1 Announce Type: new \nAbstract: Wastewater operators need answers grounded in how their plant's variables interact and how fast effects propagate, not in generic pretraining text, when asking causal questions such as \"why is N2O rising?\" or \"what happens if I cut",
    "categorySlug": "research",
    "tags": [
      "RAG",
      "AI Safety"
    ],
    "sourceName": "arXiv cs.CL (Computation and Language)",
    "sourceUrl": "https://arxiv.org/abs/2608.05151",
    "publishedAt": "2026-08-08",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "firebird-launches-cis-region-s-largest-ai-factory-in-armenia",
    "title": "Firebird Launches CIS Region’s Largest AI Factory in Armenia",
    "summary": "The global buildout of AI infrastructure reached a new milestone today — Firebird, an emerging AI cloud, launched the CIS region’s largest AI factory in Armenia, establishing a new AI computing hub powered by NVIDIA accelerated computing and Dell Technologies high-performance AI ",
    "categorySlug": "hardware",
    "tags": [
      "NVIDIA"
    ],
    "sourceName": "NVIDIA AI Blog",
    "sourceUrl": "https://blogs.nvidia.com/blog/firebird-ai-factory-armenia-blackwell-rubin-dsx/",
    "publishedAt": "2026-08-08",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "ben-s-session",
    "title": "Ben's session",
    "summary": "Field notes from my agent activity",
    "categorySlug": "breaking-news",
    "tags": [
      "Agentic AI"
    ],
    "sourceName": "Ben's Bites",
    "sourceUrl": "https://www.bensbites.com/p/bens-session",
    "publishedAt": "2026-08-07",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "gpt-5-6-luna-default-agent-plugins-amd-taalas-acquisition",
    "title": "GPT-5.6 Luna default 🌙, Agent Plugins 🔌, AMD Taalas acquisition 🧩",
    "summary": "(Keine Zusammenfassung verfügbar – Originalquelle prüfen.)",
    "categorySlug": "breaking-news",
    "tags": [
      "OpenAI",
      "Agentic AI",
      "Hardware"
    ],
    "sourceName": "TLDR AI",
    "sourceUrl": "https://tldr.tech/ai/2026-08-07",
    "publishedAt": "2026-08-07",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "telekom-investiert-in-ki-startup-und-macht-es-zum-unicorn",
    "title": "Telekom investiert in KI-Startup – und macht es zum Unicorn",
    "summary": "Das KI-Startup HappyRobot hat 130 Millionen Euro frisches Kapital eingesammelt und erreicht damit eine Bewertung von rund einer Milliarde.",
    "categorySlug": "business",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "Gründerszene (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.businessinsider.de/gruenderszene/ki-startup-ist-jetzt-ein-unicorn-150-konzerne-nutzen-es-bereits/",
    "publishedAt": "2026-08-07",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "schickt-ihr-euren-freunden-links-per-whatsapp-bitte-hort-damit-auf",
    "title": "Schickt ihr euren Freunden Links per Whatsapp? Bitte hört damit auf",
    "summary": "Der Link war mal der Grundbaustein des Digitalen. Seit langem arbeiten KI-Firmen und Startups an seinem Ende.",
    "categorySlug": "business",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "Gründerszene (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.businessinsider.de/gruenderszene/rip-url-bitte-hoert-auf-euren-freunden-links-per-whatsapp-zu-senden/",
    "publishedAt": "2026-08-07",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "die-meisten-firmen-haben-kein-ki-problem-der-wahre-grund-ist-uberraschend-banal",
    "title": "Die meisten Firmen haben kein KI-Problem – der wahre Grund ist überraschend banal",
    "summary": "Mit KI könnten Unternehmen viel effizienter arbeiten – wüssten sie nur, wie sie die Technologie richtig einsetzen, schreibt Fabian Westerheide.",
    "categorySlug": "business",
    "tags": [
      "KI News"
    ],
    "sourceName": "Gründerszene (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.businessinsider.de/gruenderszene/firmen-verstehen-ki-laengst-doch-ihnen-fehlt-etwas-ueberraschend-banales/",
    "publishedAt": "2026-08-07",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "neues-unicorn-berliner-fintech-moss-knackt-milliarden-bewertung",
    "title": "Neues Unicorn: Berliner Fintech Moss knackt Milliarden-Bewertung",
    "summary": "Das Berliner Startup Moss bietet Buchhaltung und Kreditkarten für Firmen an. Ein Detail der jüngsten Finanzierungsrunde überrascht.",
    "categorySlug": "business",
    "tags": [
      "EU AI Act",
      "Deutschland"
    ],
    "sourceName": "Gründerszene (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.businessinsider.de/gruenderszene/berliner-unicorn-deutsches-fintech-moss-knackt-die-milliarden-bewertung/",
    "publishedAt": "2026-08-07",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "diese-drei-eigenschaften-trennen-erfolgreiche-unternehmer-vom-rest",
    "title": "Diese drei Eigenschaften trennen erfolgreiche Unternehmer vom Rest",
    "summary": "Valerie Bures, Partnerin bei dem VC XAnge, war im Sommercamp von Gründerszene zu Besuch – und hat ihre besten Gründertipps verraten.",
    "categorySlug": "business",
    "tags": [
      "KI News"
    ],
    "sourceName": "Gründerszene (allgemein, nach KI filtern)",
    "sourceUrl": "https://www.businessinsider.de/gruenderszene/diese-3-dinge-sind-der-vc-partnerin-bei-gruendern-besonders-wichtig/",
    "publishedAt": "2026-08-07",
    "aiGenerated": false,
    "humanReviewed": false
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
    "sourceUrl": "https://www.businessinsider.de/gruenderszene/unbekannte-alternative-zu-aktien-neobroker-fuer-genossenschaften/",
    "publishedAt": "2026-08-07",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "new-mexico-court-orders-meta-to-pay-additional-567m-in-child-safety-case",
    "title": "New Mexico court orders Meta to pay additional $567M in child safety case",
    "summary": "Meta's total fine has racked up to $942 million in this case.",
    "categorySlug": "business",
    "tags": [
      "Meta AI",
      "AI Safety",
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/08/07/new-mexico-court-orders-meta-to-pay-additional-567m-in-child-safety-case/",
    "publishedAt": "2026-08-07",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "jill-lepore-on-the-artificial-state-and-why-silicon-valley-s-leaders-are-bad-sci",
    "title": "Jill Lepore on the ‘Artificial State’ and why Silicon Valley’s leaders are bad sci-fi readers",
    "summary": "Historian Jill Lepore has a theory about why tech companies often use soaring language to describe their products — almost as if they’re forming a new government. And whether you’re thinking of Twitter’s old “town hall in your pocket” or Anthropic’s Claude constitution, it’s a th",
    "categorySlug": "business",
    "tags": [
      "Anthropic",
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/podcast/jill-lepore-on-the-artificial-state-and-why-silicon-valleys-leaders-are-bad-sci-fi-readers/",
    "publishedAt": "2026-08-07",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "airbnb-says-ai-is-helping-it-ship-features-faster-as-it-tests-a-new-search-funct",
    "title": "Airbnb says AI is helping it ship features faster as it tests a new search function",
    "summary": "Airbnb will debut a new AI-powered search experience with a toggle.",
    "categorySlug": "business",
    "tags": [
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/08/07/airbnb-says-ai-is-helping-it-ship-features-faster-as-it-tests-a-new-search-function/",
    "publishedAt": "2026-08-07",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "cloudflare-launches-kitesurf-a-browser-built-for-ai-agents",
    "title": "Cloudflare launches Kitesurf, a browser built for AI agents",
    "summary": "Kitesurf is a cloud-hosted browser designed for AI agents instead of people. It uses less computing power than Chromium for common automation tasks, helping developers build browser-based AI agents more efficiently.",
    "categorySlug": "business",
    "tags": [
      "Agentic AI",
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/08/07/cloudflare-launches-kitesurf-a-browser-built-for-ai-agents/",
    "publishedAt": "2026-08-07",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "after-rippling-blew-millions-on-ai-in-months-it-built-an-employee-roi-tool",
    "title": "After Rippling blew millions on AI in months, it built an employee ROI tool",
    "summary": "After its own AI usage wake-up call, Rippling this week unveiled AI Spend Console, a product that tracks individual and team employee AI spending.",
    "categorySlug": "business",
    "tags": [
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/08/07/after-rippling-blew-millions-on-ai-in-months-it-built-an-employee-roi-tool/",
    "publishedAt": "2026-08-07",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "openai-says-it-slowed-astra-model-development-over-security-concerns",
    "title": "OpenAI says it slowed Astra model development over security concerns",
    "summary": "OpenAI said this model, which is still in development, reached its \"critical cybersecurity threshold,\" meaning it could independently identify and carry out cyberattacks against traditionally well-protected real-world systems.",
    "categorySlug": "business",
    "tags": [
      "OpenAI",
      "AI Safety",
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/08/07/openai-says-it-slowed-astra-model-development-over-security-concerns/",
    "publishedAt": "2026-08-07",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "deep-agents-vs-langchain-vs-langgraph",
    "title": "Deep Agents vs LangChain vs LangGraph",
    "summary": "Deep Agents, LangChain, and LangGraph each offer distinct approaches to building agents. In this post, we cover the key distinctions between our open source frameworks and when you should reach for each one.",
    "categorySlug": "technisch",
    "tags": [
      "Open Source",
      "Agentic AI"
    ],
    "sourceName": "LangChain Blog",
    "sourceUrl": "https://www.langchain.com/blog/deep-agents-vs-langchain-vs-langgraph",
    "publishedAt": "2026-08-07",
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
