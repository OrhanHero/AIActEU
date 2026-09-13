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
    "slug": "ki-sicherheitskrise-eu-kommission-anthropic-openai-entwicklungspause",
    "title": "KI-Sicherheitskrise: EU-Kommission mahnt Tech-Konzerne, Anthropic & OpenAI fordern Entwicklungspause",
    "summary": "Nach einer Serie gravierender Sicherheitsvorfälle – darunter Ausbrüche autonomer Agenten aus Testumgebungen, Angriffe auf Open-Source-Infrastrukturen wie RubyGems und der Missbrauch von Modellen für Waffensysteme – verschärft die EU-Kommission ihren Ton gegenüber führenden KI-Entwicklern mit einer deutlichen Warnung („Bringt euren Laden in Ordnung“) und leitet erste Schritte unter dem EU AI Act ein. Nahezu zeitgleich fordern Anthropic-Chef Dario Amodei, OpenAI-Chef Sam Altman und Elon Musk überraschend einhellig eine Drosselung des Entwicklungstempos („Pace the Frontier“), während OpenAI seinen geplanten Börsengang wegen Sicherheitsbedenken verschiebt. Zur Wiederherstellung des Vertrauens schlägt Anthropic staatlich akkreditierte Prüfer direkt in den Laboren vor („Embedded Evaluators“) – ein Modell, das sich eng an die Aufsichtsarchitektur des EU AI Act anlehnt.",
    "categorySlug": "policy",
    "tags": [
      "EU AI Act",
      "AI Safety",
      "Anthropic",
      "OpenAI"
    ],
    "sourceName": "heise online",
    "sourceUrl": "https://www.heise.de/news/EU-Kommission-an-KI-Firmen-Bringt-euren-Laden-in-Ordnung-11451387.html",
    "publishedAt": "2026-09-13",
    "aiGenerated": false,
    "humanReviewed": true,
    "editorsNote": "Hauptstory der Woche: Die historische Einigkeit zwischen den schärfsten Rivalen (Anthropic, OpenAI, xAI) bei der Forderung nach einer Drosselung des KI-Frontier-Tempos markiert eine Zeitenwende. Zusammen mit der Intervention der EU-Kommission und Vorfällen mit autonomen Agenten wird deutlich: Die Durchsetzung von Transparenz-, Auditierungs- und Governance-Vorgaben nach dem EU AI Act (Art. 50/53/55) entwickelt sich zum globalen Maßstab für vertrauenswürdige KI.",
    "relatedLinks": [
      {
        "group": "berichterstattung",
        "sourceName": "heise online",
        "label": "EU-Kommission an KI-Firmen: „Bringt euren Laden in Ordnung“",
        "url": "https://www.heise.de/news/EU-Kommission-an-KI-Firmen-Bringt-euren-Laden-in-Ordnung-11451387.html"
      },
      {
        "group": "berichterstattung",
        "sourceName": "heise online",
        "label": "Anthropic, OpenAI & Co. fordern Pause bei KI-Modellen",
        "url": "https://www.heise.de/news/Anthropic-OpenAI-Co-fordern-Pause-bei-KI-Modellen-11451543.html"
      },
      {
        "group": "hintergrund",
        "sourceName": "heise online",
        "label": "„Sicherheitsbedenken“: OpenAI verschiebt Börsengang",
        "url": "https://www.heise.de/news/Sam-Altman-Boersengang-von-OpenAI-verschoben-11451477.html"
      },
      {
        "group": "hintergrund",
        "sourceName": "heise online",
        "label": "Autonome KI-Agenten: KI-Bots von OpenAI griffen RubyGems an",
        "url": "https://www.heise.de/news/Autonome-KI-Agenten-von-OpenAI-an-Cyberangriff-gegen-RubyGems-beteiligt-11451345.html"
      },
      {
        "group": "hintergrund",
        "sourceName": "TechCrunch",
        "label": "Anthropic CEO outlines plan to slow AI development & introduce embedded evaluators",
        "url": "https://techcrunch.com/2026/09/12/anthropic-ceo-outlines-plan-to-pace-the-frontier/"
      },
      {
        "group": "community",
        "sourceName": "Golem.de",
        "label": "Angst vor Super-KI eint plötzlich die größten Rivalen (Amodei, Altman, Musk)",
        "url": "https://www.golem.de/news/anthropic-angst-vor-super-ki-eint-ploetzlich-die-groessten-rivalen-2609-212954.html"
      },
      {
        "group": "community",
        "sourceName": "t3n",
        "label": "Nach KI-Agenten-Vorfall: Anthropic-Chef fordert Drosselung der KI-Entwicklung",
        "url": "https://t3n.de/news/anthropic-openai-drosselung-ki-entwicklung-agenten-ausbruch-1763082/"
      }
    ],
    "breaking": true,
    "editorsPick": true
  },
  {
    "slug": "ki-update-weworm-tuev-ki-zertifizierung-mistral-meta-muse",
    "title": "KI-Update kompakt: WeWorm-Exploit, TÜV-Zertifizierung, Mistrals Milliarden & Meta Muse",
    "summary": "Das heise-Format „KI-Update“ bündelt die wichtigsten Entwicklungen der Woche: Mit KI-Unterstützung deckten Sicherheitsforscher den verheerenden Zero-Click-Exploit „WeWorm“ in WeChat auf, der die Übernahme von bis zu einer Milliarde Konten ermöglichte – zeitgleich schlagen US-Sicherheitsbehörden wegen gezielter Modell-Destillation durch chinesische KI-Labore Alarm. In Europa kündigt der TÜV ein dreistufiges Prüf- und Zertifizierungsprogramm für KI-Systeme an, während das OWASP GenAI Security Project mit dem neuen „Crosswalk“ eine direkte Brücke zwischen 51 Sicherheitsrisiken und den Vorgaben der EU-KI-Verordnung (EU AI Act) schlägt. Zugleich sichert sich das europäische Vorzeige-Start-up Mistral AI drei Milliarden Euro frisches Kapital, und Meta schickt mit „Muse“ seinen ersten agentischen Assistenten in virtualisierten Sicherheitsumgebungen an den Start.",
    "categorySlug": "policy",
    "tags": [
      "EU AI Act",
      "AI Safety",
      "Agentic AI",
      "Mistral AI"
    ],
    "sourceName": "heise online",
    "sourceUrl": "https://www.heise.de/news/KI-Update-kompakt-Schoene-Neue-KI-Welt-WeWorm-KI-Agenten-Tiersprache-11446942.html",
    "publishedAt": "2026-09-09",
    "aiGenerated": false,
    "humanReviewed": true,
    "editorsNote": "Hauptstory der Woche: Das heise-Format „KI-Update“ beleuchtet die entscheidende Schnittstelle zwischen Governance, Systemsicherheit und wirtschaftlicher Dynamik: Während der TÜV mit Prüfkriterien und OWASP mit dem Compliance-Crosswalk konkrete Leitplanken für den EU AI Act errichten, verdeutlichen der WeWorm-Exploit und autonome Agenten wie Meta Muse die akuten Sicherheitsherausforderungen für Entwickler und Anwender.",
    "relatedLinks": [
      {
        "group": "berichterstattung",
        "sourceName": "heise online",
        "label": "KI-Update kompakt: Schöne Neue KI-Welt, WeWorm, KI-Agenten, Tiersprache",
        "url": "https://www.heise.de/news/KI-Update-kompakt-Schoene-Neue-KI-Welt-WeWorm-KI-Agenten-Tiersprache-11446942.html"
      },
      {
        "group": "berichterstattung",
        "sourceName": "KI-Update Podcast (Podigee)",
        "label": "Episode 657: Begleitende Audiofassung & vollständiges Episodentranskript",
        "url": "https://kiupdate.podigee.io/657"
      },
      {
        "group": "hintergrund",
        "sourceName": "heise online",
        "label": "KI absichern und belegen: OWASP veröffentlicht neue Hilfe (Crosswalk zu EU AI Act)",
        "url": "https://www.heise.de/news/Neue-OWASP-Hilfe-fuer-sichere-KI-im-Unternehmen-11446620.html"
      },
      {
        "group": "hintergrund",
        "sourceName": "heise online",
        "label": "Industrielle Spionage: US-Behörden warnen vor KI-Wissensabfluss nach China",
        "url": "https://www.heise.de/news/US-Behoerden-warnen-vor-KI-Wissensabfluss-nach-China-11447411.html"
      }
    ],
    "breaking": true,
    "editorsPick": true
  },
  {
    "slug": "ki-update-chatgpt-vlose-mhs-openclaw-git-schadcode",
    "title": "KI-Update kompakt: ChatGPT als Suchmaschine, MHS, OpenClaw 2.0 & Git-Schadcode",
    "summary": "Die EU-Kommission stuft ChatGPT erstmals als „sehr große Online-Suchmaschine“ (VLOSE) nach dem Digital Services Act (DSA) ein, da der Dienst über 45 Millionen monatlich aktive Nutzer in der EU verzeichnet – OpenAI muss bis Januar 2027 strenge Risikobewertungen und Meldeverfahren vorlegen. Zugleich stellt Anthropic mit dem „Model Hardware Standard“ (MHS) eine universelle Treiberschicht für KI-Agenten zur Steuerung von Labor- und Industriegeräten vor, während OpenClaw 2.0 mit Multiplayer-Sessions und Langzeitgedächtnis debütiert. Parallel warnt die IT-Sicherheitsforschung vor Schadcode in Git-Konfigurationen, den Entwickleragenten beim Öffnen manipulierter Repositories unbemerkt mit vollen Rechten ausführen.",
    "categorySlug": "policy",
    "tags": [
      "EU AI Act",
      "ChatGPT",
      "AI Safety",
      "Digital Services Act"
    ],
    "sourceName": "heise online",
    "sourceUrl": "https://www.heise.de/news/KI-Update-kompakt-ChatGPT-als-Suchmaschine-MHS-OpenClaw-2-0-git-Schadcode-11437809.html",
    "publishedAt": "2026-09-02",
    "aiGenerated": false,
    "humanReviewed": true,
    "editorsNote": "Hauptstory der Woche: Das heise-Format „KI-Update“ beleuchtet die doppelgleisige Dynamik europäischer KI-Governance und technischer Risiken: Während die EU-Kommission ChatGPT unter das strenge Aufsichtsregime des Digital Services Act stellt, offenbaren Sicherheitsanalysen zu Git-Konfigurationen und autonomen Agenten (OpenClaw) neue Angriffsflächen in Entwickler-Workflows.",
    "relatedLinks": [
      {
        "group": "berichterstattung",
        "sourceName": "heise online",
        "label": "KI-Update kompakt: ChatGPT als Suchmaschine, MHS, OpenClaw 2.0, git-Schadcode",
        "url": "https://www.heise.de/news/KI-Update-kompakt-ChatGPT-als-Suchmaschine-MHS-OpenClaw-2-0-git-Schadcode-11437809.html"
      },
      {
        "group": "berichterstattung",
        "sourceName": "KI-Update Podcast (Podigee)",
        "label": "Episode 654: Begleitende Audiofassung & vollständiges Episodentranskript",
        "url": "https://kiupdate.podigee.io/654"
      },
      {
        "group": "hintergrund",
        "sourceName": "Europäische Kommission",
        "label": "Digital Services Act (DSA): Aufsichtsregeln für sehr große Online-Suchmaschinen (VLOSE)",
        "url": "https://ec.europa.eu/commission/presscorner/detail/de/ip_26_1714"
      },
      {
        "group": "hintergrund",
        "sourceName": "The Decoder",
        "label": "Hintergrund: Einstufung von ChatGPT als sehr große Online-Suchmaschine durch die EU",
        "url": "https://the-decoder.de/"
      }
    ],
    "breaking": true,
    "editorsPick": true
  },
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
    "slug": "perplexity-trusts-gpt-6-astra-with-end-to-end-systems",
    "title": "Perplexity trusts GPT-6 Astra with end-to-end systems",
    "summary": "Perplexity uses Astra to write communications, change software, and monitor production systems, and checks in much less frequently than with earlier models.",
    "categorySlug": "technisch",
    "tags": [
      "OpenAI"
    ],
    "sourceName": "OpenAI News",
    "sourceUrl": "https://openai.com/index/perplexity-improving-accuracy-with-astra",
    "publishedAt": "2026-09-14",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "jugendschutz-im-netz-kalifornien-erlasst-strenge-regeln-fur-ki-und-social-media",
    "title": "Jugendschutz im Netz: Kalifornien erlässt strenge Regeln für KI und Social Media",
    "summary": "Gouverneur Newsom hat ein Gesetzespaket zur Regulierung von Tech-Konzernen unterzeichnet, das Suchtfaktoren bremsen und KI-Anbieter in die Pflicht nehmen soll.",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "Heise Online",
    "sourceUrl": "https://www.heise.de/news/Jugendschutz-im-Netz-Kalifornien-erlaesst-strenge-Regeln-fuer-KI-und-Social-Media-11451599.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-09-13",
    "aiGenerated": false,
    "humanReviewed": false,
    "editorsPick": true,
    "editorsNote": "Sehr relevante Entwicklung für das KI-Ökosystem – direkte Leseempfehlung."
  },
  {
    "slug": "dsgvo-vs-smart-glasses-warum-ray-ban-meta-trager-haftbar-gemacht-werden-konnen",
    "title": "DSGVO vs. Smart Glasses: Warum Ray-Ban-Meta-Träger haftbar gemacht werden können",
    "summary": "Ein neuer Datenschutzbericht lehrt: Wer unbeteiligte Dritte mit Smart Glasses filmt oder Metas KI-Training zulässt, verliert das Privileg der Haushaltsausnahme.",
    "categorySlug": "breaking-news",
    "tags": [
      "Meta AI",
      "EU AI Act"
    ],
    "sourceName": "Heise Online",
    "sourceUrl": "https://www.heise.de/news/DSGVO-Falle-Smart-Glasses-Warum-Ray-Ban-Meta-Traeger-haftbar-werden-koennen-11451607.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-09-13",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "anthropic-openai-co-fordern-pause-bei-ki-modellen",
    "title": "Anthropic, OpenAI & Co. fordern Pause bei KI-Modellen",
    "summary": "Die Sorge vor außer Kontrolle geratener KI wächst: Anthropic und OpenAI sprechen sich nach jüngsten Hacking-Vorfällen für weniger Tempo bei der Entwicklung aus.",
    "categorySlug": "breaking-news",
    "tags": [
      "OpenAI",
      "Anthropic"
    ],
    "sourceName": "Heise Online",
    "sourceUrl": "https://www.heise.de/news/Anthropic-OpenAI-Co-fordern-Pause-bei-KI-Modellen-11451543.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-09-13",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "anthropic-angst-vor-super-ki-eint-plotzlich-die-gro-ten-rivalen",
    "title": "Anthropic: Angst vor Super-KI eint plötzlich die größten Rivalen",
    "summary": "Anthropic-Chef Dario Amodei fordert eine Notbremse bei der KI-Entwicklung. Seine härtesten Rivalen Sam Altman und Elon Musk stimmen zu. (Anthropic, KI)",
    "categorySlug": "breaking-news",
    "tags": [
      "Anthropic"
    ],
    "sourceName": "Golem.de",
    "sourceUrl": "https://www.golem.de/news/anthropic-angst-vor-super-ki-eint-ploetzlich-die-groessten-rivalen-2609-212954.html",
    "publishedAt": "2026-09-13",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "g-vibecoding-welche-fahigkeiten-entwickler-im-ki-zeitalter-bewahren-mussen",
    "title": "(g+) Vibecoding: Welche Fähigkeiten Entwickler im KI-Zeitalter bewahren müssen",
    "summary": "Dank LLMs und Coding-Assistenten lagern Entwickler ihre kognitiven Aufgaben zunehmend an die KI aus. Aber wer trainiert dann das problemlösende Denken, das hinter jedem Code steckt? Ein Ratgebertext von Marc Favre (Arbeit, KI)",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "Golem.de",
    "sourceUrl": "https://www.golem.de/news/vibecoding-welche-faehigkeiten-entwickler-im-ki-zeitalter-bewahren-muessen-2609-212925.html",
    "publishedAt": "2026-09-13",
    "aiGenerated": false,
    "humanReviewed": false,
    "editorsPick": true,
    "editorsNote": "Sehr relevante Entwicklung für das KI-Ökosystem – direkte Leseempfehlung."
  },
  {
    "slug": "90-000-ki-songs-pro-tag-warum-streaming-dienste-jetzt-labels-einfuhren",
    "title": "90.000 KI-Songs pro Tag: Warum Streaming-Dienste jetzt Labels einführen",
    "summary": "KI-generierte Musik flutet die Kulturbranche und die entsprechenden Streaming-Plattformen. Spotify und Co. gehen dazu über, Labels zur Kennzeichnung zu etablierweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "t3n",
    "sourceUrl": "https://t3n.de/news/ki-musik-labels-spotify-apple-music-deezer-kennzeichnung-streaming-1762011/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-09-13",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "ki-agentin-als-chefin-warum-luna-zwar-verluste-macht-die-mitarbeiter-aber-zufrie",
    "title": "KI-Agentin als Chefin: Warum Luna zwar Verluste macht, die Mitarbeiter aber zufrieden sind",
    "summary": "Seit April 2026 führt die KI-Agentin Luna einen physischen Shop in San Francisco – ausgerüstet mit einem Budget von 100.000 US-Dollar. Finanziell läuft es bisher eher mittelprächtig. Aber die Mitarbeiter:innen sind zufrieden. Woran liegt das?weiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "Agentic AI"
    ],
    "sourceName": "t3n",
    "sourceUrl": "https://t3n.de/news/ki-agentin-verluste-zufrieden-1763101/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-09-13",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "das-gro-e-ki-glossar-25-begriffe-die-du-kennen-solltest",
    "title": "Das große KI-Glossar: 25 Begriffe, die du kennen solltest",
    "summary": "Wer über generative KI spricht, benutzt oft komplexe Fachbegriffe. Dabei sind die Ideen hinter den Konzepten oft simpel. Wir erklären sie euch.\nweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "t3n",
    "sourceUrl": "https://t3n.de/news/ki-glossar-begriffe-agi-token-weltmodell-transformer-erklaert-1690182/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-09-13",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "14-ki-agenten-schummeln-24-petzen-google-entdeckt-digitale-moral",
    "title": "14 KI-Agenten schummeln, 24 petzen: Google entdeckt digitale Moral",
    "summary": "Manche KI-Modelle neigen dazu, zu schummeln, wenn sie eine Aufgabe nicht lösen können. Wie Google-Forscher:innen jetzt zeigen, gibt es aber in einer KI-Gruppe auch Modelle, die dieses Verhalten nicht gutheißen und ihre digitalen Kolleg:innen verpetzen wollen.\nweiterlesen auf t3n.",
    "categorySlug": "breaking-news",
    "tags": [
      "Google DeepMind",
      "Agentic AI"
    ],
    "sourceName": "t3n",
    "sourceUrl": "https://t3n.de/news/ki-agenten-schummeln-petzen-google-deepmind-studie-digitale-moral-1762301/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-09-13",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "15-000-mal-effizienter-als-menschen-anthropic-lasst-claude-andere-ki-modelle-tra",
    "title": "15.000-mal effizienter als Menschen: Anthropic lässt Claude andere KI-Modelle trainieren",
    "summary": "Die Fähigkeiten neuer KI-Modelle entwickeln sich rasant weiter – oft zu schnell, um rechtzeitig passende Sicherheitsmaßnahmen zu etablieren. Automatisiertes Alignment-Training könnte eine Lösung sein, wie Anthropic beleuchtet.\nweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "Anthropic",
      "EU AI Act"
    ],
    "sourceName": "t3n",
    "sourceUrl": "https://t3n.de/news/claude-trainiert-andere-ki-modelle-1760678/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-09-13",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "nach-ki-agenten-vorfall-anthropic-chef-fordert-drosselung-der-ki-entwicklung",
    "title": "Nach KI-Agenten-Vorfall: Anthropic-Chef fordert Drosselung der KI-Entwicklung",
    "summary": "Ein Sicherheitsvorfall mit KI-Agenten liefert der Debatte über das Tempo der KI-Entwicklung neuen Zündstoff. Ausgerechnet Anthropic-Chef Dario Amodei, OpenAI-Chef Sam Altman und Elon Musk zeigen sich in der Grundrichtung ungewöhnlich einig.\nweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "OpenAI",
      "Anthropic",
      "Agentic AI"
    ],
    "sourceName": "t3n",
    "sourceUrl": "https://t3n.de/news/anthropic-openai-drosselung-ki-entwicklung-agenten-ausbruch-1763082/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-09-13",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "keine-filter-keine-zensur-warum-dieses-ki-startup-alle-sicherheitsregeln-absicht",
    "title": "Keine Filter, keine Zensur: Warum dieses KI-Startup alle Sicherheitsregeln absichtlich löscht",
    "summary": "Während große KI-Labore die Einführung strengerer Sicherheitsbeschränkungen diskutieren, hat das Startup Abliteration diese absichtlich aus seinem neuen Modell entfernt. Was steckt dahinter?\nweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "t3n",
    "sourceUrl": "https://t3n.de/news/abliteration-ki-startup-1761286/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-09-13",
    "aiGenerated": false,
    "humanReviewed": false,
    "editorsPick": true,
    "editorsNote": "Sehr relevante Entwicklung für das KI-Ökosystem – direkte Leseempfehlung."
  },
  {
    "slug": "selbstversuch-ich-habe-die-smarthome-steuerung-an-eine-ki-abgegeben-mit-uberrasc",
    "title": "Selbstversuch: Ich habe die Smarthome-Steuerung an eine KI abgegeben – mit überraschendem Ergebnis",
    "summary": "Eine KI im Smarthome zu installieren, klingt im ersten Moment schwierig. Dank Opencode und Home Assistant ist es das aber nicht. Aber bleibt es womöglich trotzdweiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "EU AI Act"
    ],
    "sourceName": "t3n",
    "sourceUrl": "https://t3n.de/news/selbstversuch-smart-home-ki-1759948/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-09-13",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "ki-akzeptanz-warum-rewe-digital-den-chatbot-umbenannte",
    "title": "KI-Akzeptanz: Warum Rewe digital den Chatbot umbenannte",
    "summary": "Ein KI-Chatbot lief technisch einwandfrei – und wurde trotzdem kaum genutzt. Erst ein Rebranding brachte bei Rewe digital den Durchbruch: 5.000 Anfragen im Monat automatisiert gelöst.weiterlesen auf t3n.de",
    "categorySlug": "breaking-news",
    "tags": [
      "RAG"
    ],
    "sourceName": "t3n",
    "sourceUrl": "https://t3n.de/news/ki-akzeptanz-rewe-digital-chatbot-lumi-1762215/?utm_source=rss&utm_medium=newsFeed&utm_campaign=newsFeed",
    "publishedAt": "2026-09-13",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "what-s-behind-the-ai-industry-s-latest-warnings-of-doom",
    "title": "What’s behind the AI industry’s latest warnings of doom?",
    "summary": "On Equity, we discussed the AI industry's latest debate about whether it poses an existential threat to humanity.",
    "categorySlug": "business",
    "tags": [
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/09/13/whats-behind-the-ai-industrys-latest-warnings-of-doom/",
    "publishedAt": "2026-09-13",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "obama-urges-democrats-to-have-a-clear-plan-for-ai-safeguards",
    "title": "Obama urges Democrats to have a ‘clear plan’ for AI safeguards",
    "summary": "Obama recently said that Democrats need to make artificial intelligence one of their “central agendas” and “have a very clear plan” to address concerns around the technology’s economic impact and safety.",
    "categorySlug": "business",
    "tags": [
      "AI Safety",
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/09/13/obama-urges-democrats-to-have-a-clear-plan-for-ai-safeguards/",
    "publishedAt": "2026-09-13",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "sicherheitsbedenken-openai-verschiebt-borsengang",
    "title": "„Sicherheitsbedenken“: OpenAI verschiebt Börsengang",
    "summary": "Der ChatGPT-Entwickler OpenAI ist das wohl bekannteste KI-Unternehmen und plant einen großen Börsengang. Doch Firmenchef Sam Altman findet den Moment ungünstig.",
    "categorySlug": "breaking-news",
    "tags": [
      "OpenAI"
    ],
    "sourceName": "Heise Online",
    "sourceUrl": "https://www.heise.de/news/Sam-Altman-Boersengang-von-OpenAI-verschoben-11451477.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-09-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "fraunhofer-studie-ki-robotik-ist-umfassender-als-humanoide",
    "title": "Fraunhofer-Studie: KI-Robotik ist umfassender als Humanoide",
    "summary": "KI-basierte Robotik wird laut Fraunhofer zur Wachstumsbranche. Humanoide erhalten Milliarden, entscheidend sind aber Daten, Software und Integration.",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "Heise Online",
    "sourceUrl": "https://www.heise.de/news/Fraunhofer-Studie-KI-Robotik-ist-umfassender-als-Humanoide-11451427.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-09-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "ki-bots-von-openai-griffen-open-source-plattform-rubygems-an",
    "title": "KI-Bots von OpenAI griffen Open-Source-Plattform RubyGems an",
    "summary": "Ein Schwarm KI-Bots griff im Mai die Open-Source-Plattform RubyGems an. KI-Experten führten die Spur auf OpenAI zurück.",
    "categorySlug": "breaking-news",
    "tags": [
      "OpenAI",
      "Open Source"
    ],
    "sourceName": "Heise Online",
    "sourceUrl": "https://www.heise.de/news/Autonome-KI-Agenten-von-OpenAI-an-Cyberangriff-gegen-RubyGems-beteiligt-11451345.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-09-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "heise-angebot-java-in-seiner-besten-form-noch-fruhbucherticket-fur-bettercode-ja",
    "title": "heise-Angebot: Java in seiner besten Form: Noch Frühbucherticket für betterCode() Java sichern",
    "summary": "Die betterCode() Java 2026 zeigt, wie man die Änderungen der jüngsten JDKs sinnvoll nutzt, und hilft bei der KI-gestützten Softwareentwicklung in Java.",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "Heise Online",
    "sourceUrl": "https://www.heise.de/news/Java-in-seiner-besten-Form-Noch-Fruehbucherticket-fuer-betterCode-Java-sichern-11449790.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-09-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "salto-ruckwarts-apple-mochte-ki-modelle-doch-mit-nutzerdaten-trainieren",
    "title": "Salto rückwärts: Apple möchte KI-Modelle doch mit Nutzerdaten trainieren",
    "summary": "Apples Versprechen war simpel: Persönliche Daten von iPhone-Nutzern fließen niemals in das Training von KI-Modellen ein. Damit ist es jetzt vorbei.",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "Heise Online",
    "sourceUrl": "https://www.heise.de/news/Salto-rueckwaerts-Apple-moechte-KI-Modelle-doch-mit-Nutzerdaten-trainieren-11451138.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-09-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "developer-happchen-cuda-fur-arm-node-sicherheit-und-rust-umfrage",
    "title": "Developer-Häppchen – CUDA für ARM, Node-Sicherheit und Rust-Umfrage",
    "summary": "Kleine, aber interessante Meldungshäppchen vom News-Buffet zu W3C, ESLint, GitHub, Cyber Resilience Act, PostgreSQL, Astro, Rust, Node.js, GPT-6 Astra und CUDA.",
    "categorySlug": "breaking-news",
    "tags": [
      "OpenAI",
      "NVIDIA",
      "RAG"
    ],
    "sourceName": "Heise Online",
    "sourceUrl": "https://www.heise.de/news/Developer-Haeppchen-CUDA-fuer-ARM-Node-Sicherheit-und-Rust-Umfrage-11446151.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "publishedAt": "2026-09-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "ki-anthropic-entlarvt-claude-missbrauch-fur-russische-drohnenschwarme",
    "title": "KI: Anthropic entlarvt Claude-Missbrauch für russische Drohnenschwärme",
    "summary": "Russische Entwickler hatten mit Claude einen autonomen Kamikaze-Drohnenschwarm zum Einsatz gegen die Ukraine gebaut. (Drohne, KI)",
    "categorySlug": "breaking-news",
    "tags": [
      "Anthropic"
    ],
    "sourceName": "Golem.de",
    "sourceUrl": "https://www.golem.de/news/ki-anthropic-entlarvt-claude-missbrauch-fuer-russische-drohnenschwaerme-2609-212949.html",
    "publishedAt": "2026-09-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "ki-als-waffeningenieur-huthi-sollen-claude-fur-raketensoftware-missbraucht-haben",
    "title": "KI als Waffeningenieur: Huthi sollen Claude für Raketensoftware missbraucht haben",
    "summary": "Huthi-Rebellen haben offenbar Claude genutzt, Steuerungssoftware für ballistische Raketen zu entwickeln, und dabei die eingebauten Sicherheitsvorkehrungen umgangen. (KI, Politik)",
    "categorySlug": "breaking-news",
    "tags": [
      "Anthropic",
      "EU AI Act"
    ],
    "sourceName": "Golem.de",
    "sourceUrl": "https://www.golem.de/news/ki-als-waffeningenieur-huthi-sollen-claude-fuer-raketensoftware-missbraucht-haben-2609-212947.html",
    "publishedAt": "2026-09-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "kunstliche-intelligenz-openai-erwagt-verlangsamung-der-ki-entwicklung",
    "title": "Künstliche Intelligenz: OpenAI erwägt Verlangsamung der KI-Entwicklung",
    "summary": "OpenAI prüft eine Drosselung der Entwicklungsgeschwindigkeit bei KI. Sam Altman hofft dabei auf eine Branchenvereinbarung. (Anthropic, KI)",
    "categorySlug": "breaking-news",
    "tags": [
      "OpenAI",
      "Anthropic",
      "Hardware"
    ],
    "sourceName": "Golem.de",
    "sourceUrl": "https://www.golem.de/news/kuenstliche-intelligenz-openai-erwaegt-verlangsamung-der-ki-entwicklung-2609-212946.html",
    "publishedAt": "2026-09-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "openai-s-sam-altman-says-it-would-be-ill-advised-to-go-public-in-2026",
    "title": "OpenAI’s Sam Altman says it would be ‘ill-advised’ to go public in 2026",
    "summary": "While OpenAI has filed confidentially for an IPO, the company will not be going public this year, according to CEO Sam Altman.",
    "categorySlug": "business",
    "tags": [
      "OpenAI",
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/09/12/openais-sam-altman-says-it-would-be-ill-advised-to-go-public-in-2026/",
    "publishedAt": "2026-09-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "anthropic-ceo-outlines-plan-to-slow-ai-development",
    "title": "Anthropic CEO outlines plan to slow AI development",
    "summary": "Anthropic's Dario Amodei and OpenAI's Sam Altman seem to agree that it's time to \"pace the frontier.\" What would that actually look like?",
    "categorySlug": "business",
    "tags": [
      "OpenAI",
      "Anthropic",
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/09/12/anthropic-ceo-outlines-plan-to-pace-the-frontier/",
    "publishedAt": "2026-09-12",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "rapidly-scaling-online-storage-to-serve-over-1-billion-chatgpt-users",
    "title": "Rapidly scaling online storage to serve over 1 billion ChatGPT users",
    "summary": "Learn how OpenAI evolved Habitat from a Python library into a globally distributed storage platform serving 1 billion ChatGPT users and 22M requests per second.",
    "categorySlug": "technisch",
    "tags": [
      "OpenAI",
      "RAG"
    ],
    "sourceName": "OpenAI News",
    "sourceUrl": "https://openai.com/index/scaling-storage-one-billion-users-part-one",
    "publishedAt": "2026-09-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "cognition-helps-devin-test-its-own-work-with-gpt-6-astra",
    "title": "Cognition helps Devin test its own work with GPT‑6 Astra",
    "summary": "GPT‑6 Astra improves Devin’s ability to test software and show that it works, with the goal of helping engineers review less code and ship more.",
    "categorySlug": "technisch",
    "tags": [
      "OpenAI"
    ],
    "sourceName": "OpenAI News",
    "sourceUrl": "https://openai.com/index/cognition-devin-testing-with-astra",
    "publishedAt": "2026-09-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "monitoring-production-agent-lifecycle-with-aws-devops-agent-and-agentcore-evalua",
    "title": "Monitoring production agent lifecycle with AWS DevOps Agent and AgentCore Evaluations",
    "summary": "Multi-agent systems fail in ways traditional monitoring misses. This post presents a dual-layer approach to monitoring production agents: Amazon Bedrock AgentCore Evaluations for continuous quality scoring and AWS DevOps Agent for autonomous infrastructure investigation, shown on",
    "categorySlug": "technisch",
    "tags": [
      "Agentic AI",
      "AI Safety"
    ],
    "sourceName": "AWS Machine Learning Blog",
    "sourceUrl": "https://aws.amazon.com/blogs/machine-learning/monitoring-production-agent-lifecycle-with-aws-devops-agent-and-agentcore-evaluations/",
    "publishedAt": "2026-09-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "beyond-the-price-per-token-choosing-the-right-openai-model-on-amazon-bedrock-for",
    "title": "Beyond the price per token: Choosing the right OpenAI model on Amazon Bedrock for your workload",
    "summary": "Comparing models on dollars per million tokens misses what production workloads actually pay for: outcomes. This post shares an open-source benchmarking harness that measures cost per correct answer, agent trajectory cost, and rubric-graded deliverable quality across OpenAI model",
    "categorySlug": "technisch",
    "tags": [
      "OpenAI",
      "Open Source",
      "Agentic AI"
    ],
    "sourceName": "AWS Machine Learning Blog",
    "sourceUrl": "https://aws.amazon.com/blogs/machine-learning/beyond-the-price-per-token-choosing-the-right-openai-model-on-amazon-bedrock-for-your-workload/",
    "publishedAt": "2026-09-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "build-interactive-mcp-apps-using-amazon-bedrock-agentcore",
    "title": "Build interactive MCP Apps using Amazon Bedrock AgentCore",
    "summary": "Learn how to build and deploy an MCP App with interactive HTML widgets on Amazon Bedrock AgentCore. Because MCP Apps is a host-agnostic standard, the same server delivers the same rich experience across AI hosts like ChatGPT and Claude that support the extension.",
    "categorySlug": "technisch",
    "tags": [
      "OpenAI",
      "Anthropic",
      "Agentic AI"
    ],
    "sourceName": "AWS Machine Learning Blog",
    "sourceUrl": "https://aws.amazon.com/blogs/machine-learning/build-interactive-mcp-apps-using-amazon-bedrock-agentcore/",
    "publishedAt": "2026-09-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "g-ipo-chinese-nvidia-challenger-enflame-jumps-179-in-shanghai-market-debut",
    "title": "(g+) IPO: Chinese Nvidia challenger Enflame jumps 179% in Shanghai market debut",
    "summary": "Tencent-backed 'little dragon' raises $910m; tech stocks' post-IPO slumps draw scrutiny Von Loretta Chen und Wataru Suzuki (Prozessor, Nvidia)",
    "categorySlug": "breaking-news",
    "tags": [
      "NVIDIA",
      "RAG"
    ],
    "sourceName": "Golem.de",
    "sourceUrl": "https://www.golem.de/news/ipo-chinese-nvidia-challenger-enflame-jumps-179-in-shanghai-market-debut-2609-212927.html",
    "publishedAt": "2026-09-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "gefahr-fur-die-menschheit-trump-sorgt-sich-nicht-um-gefahren-bei-ki-entwicklung",
    "title": "Gefahr für die Menschheit: Trump sorgt sich nicht um Gefahren bei KI-Entwicklung",
    "summary": "Der US-Präsident teilt die Sorge zahlreicher KI-Forscher nicht: KI sei nicht riskant, es gehe darum, gegen China zu gewinnen. (Donald Trump, KI)",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "Golem.de",
    "sourceUrl": "https://www.golem.de/news/gefahr-fuer-die-menschheit-trump-sorgt-sich-nicht-um-gefahren-bei-ki-entwicklung-2609-212930.html",
    "publishedAt": "2026-09-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "kunstliche-intelligenz-mehrheit-der-amerikaner-will-ki-enwicklungspause",
    "title": "Künstliche Intelligenz: Mehrheit der Amerikaner will KI-Enwicklungspause",
    "summary": "Bernie Sanders fordert eine Pause bei der KI-Entwicklung, bis Sicherungsmaßnahmen umgesetzt sind. Eine große Mehrheit steht hinter ihm, über Parteigrenzen hinweg. (KI, Rechenzentrum)",
    "categorySlug": "breaking-news",
    "tags": [
      "Hardware"
    ],
    "sourceName": "Golem.de",
    "sourceUrl": "https://www.golem.de/news/kuenstliche-intelligenz-mehrheit-der-amerikaner-will-ki-enwicklungspause-2609-212926.html",
    "publishedAt": "2026-09-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "ki-effekt-shopify-setzt-wieder-auf-native-apps",
    "title": "KI-Effekt: Shopify setzt wieder auf native Apps",
    "summary": "React Native hat bei Shopify ausgedient. Fortschritte beim KI-Coding ermöglichen die Rückkehr zur nativen Entwicklung mobiler Apps. (Softwareentwicklung, KI)",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "Golem.de",
    "sourceUrl": "https://www.golem.de/news/ki-effekt-shopify-setzt-wieder-auf-native-apps-2609-212922.html",
    "publishedAt": "2026-09-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "g-kunstliche-intelligenz-lokal-gehostete-sprachmodelle-auf-sbcs",
    "title": "(g+) Künstliche Intelligenz: Lokal gehostete Sprachmodelle auf SBCs",
    "summary": "Bei KI denken die meisten an Rechenzentren, die Sprachmodelle und Agenten mit enormem Rechen- und Speicheraufwand betreiben. Doch inzwischen taugen sogar Einplatinencomputer für den KI-Einsatz. Eine Anleitung von Erik Bärwaldt (Technik/Hardware, KI)",
    "categorySlug": "breaking-news",
    "tags": [
      "Agentic AI",
      "Hardware"
    ],
    "sourceName": "Golem.de",
    "sourceUrl": "https://www.golem.de/news/kuenstliche-intelligenz-lokal-gehostete-sprachmodelle-auf-sbcs-2609-212923.html",
    "publishedAt": "2026-09-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "mecka-ai-nears-500m-valuation-in-sequoia-led-deal-amid-rush-for-robot-training-d",
    "title": "Mecka AI nears $500M valuation in Sequoia-led deal amid rush for robot training data",
    "summary": "The round for the two-year-old startup is coming together months after Mecka announced its Series A.",
    "categorySlug": "business",
    "tags": [
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/09/11/mecka-ai-nears-500m-valuation-in-sequoia-led-deal-amid-rush-for-robot-training-data/",
    "publishedAt": "2026-09-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "y-combinator-s-garry-tan-wants-us-open-weight-ai-labs-to-distill-frontier-models",
    "title": "Y Combinator’s Garry Tan wants US open-weight AI labs to ‘distill’ frontier models, too",
    "summary": "Tan wants smaller, American open-weight AI labs to use the same kind of training techniques on American frontier AI labs, giving the U.S. a more robust set of open-weight options that aren’t Chinese.",
    "categorySlug": "business",
    "tags": [
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/09/11/y-combinators-garry-tan-wants-u-s-open-weight-ai-labs-to-distill-frontier-models-too/",
    "publishedAt": "2026-09-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "openai-s-feud-with-mathematicians-is-only-escalating",
    "title": "OpenAI’s feud with mathematicians is only escalating",
    "summary": "Twenty-five leading mathematicians signed an open letter arguing that AI labs are threatening their intellectual work.",
    "categorySlug": "business",
    "tags": [
      "OpenAI",
      "EU AI Act",
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/09/11/openais-feud-with-mathematicians-is-only-escalating/",
    "publishedAt": "2026-09-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "one-week-left-to-book-your-exhibit-table-at-techcrunch-disrupt-2026",
    "title": "One week left to book your exhibit table at TechCrunch Disrupt 2026",
    "summary": "Only one week left to secure your exhibit table. Tables are limited and can sell out before the September 18 deadline.",
    "categorySlug": "business",
    "tags": [
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/09/11/one-week-left-to-book-your-exhibit-table-at-techcrunch-disrupt-2026/",
    "publishedAt": "2026-09-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "final-final-final-call-for-techcrunch-disrupt-2026-side-events",
    "title": "Final, final, final call for TechCrunch Disrupt 2026 Side Events",
    "summary": "The absolute last chance to apply to host an official Side Event during TechCrunch Disrupt 2026 is tonight, September 11, at 11:59 p.m. PT.",
    "categorySlug": "business",
    "tags": [
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/09/11/final-final-final-call-for-techcrunch-disrupt-2026-side-events/",
    "publishedAt": "2026-09-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "kimi-maker-moonshot-ai-targets-2b-in-annual-revenue",
    "title": "Kimi-maker Moonshot AI targets $2B in annual revenue",
    "summary": "While K3's usage figures have declined slightly in recent months, OpenRouter data currently shows as many as 300 billion tokens being generated each day by K3 models on the system.",
    "categorySlug": "business",
    "tags": [
      "Hardware"
    ],
    "sourceName": "TechCrunch – Artificial Intelligence",
    "sourceUrl": "https://techcrunch.com/2026/09/11/kimi-maker-moonshot-ai-targets-2-billion-in-annual-revenue/",
    "publishedAt": "2026-09-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "agents-api-cognition-swe-2-muse-shared-agents",
    "title": "Agents API, Cognition SWE-2 ‍, Muse Shared Agents ‍‍",
    "summary": "(Keine Zusammenfassung verfügbar – Originalquelle prüfen.)",
    "categorySlug": "breaking-news",
    "tags": [
      "Agentic AI"
    ],
    "sourceName": "TLDR AI",
    "sourceUrl": "https://tldr.tech/ai/2026-09-11",
    "publishedAt": "2026-09-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "telling-ai-to-design-is-hard",
    "title": "Telling AI to design is hard",
    "summary": "Ben’s session #6",
    "categorySlug": "breaking-news",
    "tags": [
      "KI News"
    ],
    "sourceName": "Ben's Bites",
    "sourceUrl": "https://www.bensbites.com/p/telling-ai-to-design-is-hard",
    "publishedAt": "2026-09-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "together-ai-expands-fine-tuning-service-with-more-models-live-metrics-and-finer-",
    "title": "Together AI expands fine-tuning service with more models, live metrics, and finer controls",
    "summary": "Together Fine-Tuning adds the latest open-weight models, live experiment tracking, Expert LoRA, early stopping, tokenized dataset previews, pre-flight validation, and lower training prices on selected models.",
    "categorySlug": "tools",
    "tags": [
      "KI News"
    ],
    "sourceName": "Together AI Blog",
    "sourceUrl": "https://www.together.ai/blog/together-ai-expands-fine-tuning-service-with-more-models-live-metrics-and-finer-controls",
    "publishedAt": "2026-09-11",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "how-a-researcher-uses-codex-and-chatgpt-to-search-for-new-antimicrobial-molecule",
    "title": "How a researcher uses Codex and ChatGPT to search for new antimicrobial molecules",
    "summary": "César de la Fuente’s lab uses Codex and ChatGPT to search living and extinct genomes for antimicrobial candidates to fight drug-resistant infections.",
    "categorySlug": "technisch",
    "tags": [
      "OpenAI"
    ],
    "sourceName": "OpenAI News",
    "sourceUrl": "https://openai.com/index/using-codex-chatgpt-to-search-for-new-antimicrobials",
    "publishedAt": "2026-09-10",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "now-everyone-can-put-data-to-work",
    "title": "Now everyone can put data to work",
    "summary": "Meet the Data agent in ChatGPT Work. Connect company data, uncover insights, and build interactive dashboards with AI using natural language.",
    "categorySlug": "technisch",
    "tags": [
      "OpenAI",
      "Agentic AI"
    ],
    "sourceName": "OpenAI News",
    "sourceUrl": "https://openai.com/index/put-data-to-work",
    "publishedAt": "2026-09-10",
    "aiGenerated": false,
    "humanReviewed": false
  },
  {
    "slug": "introducing-chatgpt-for-financial-services",
    "title": "Introducing ChatGPT for Financial Services",
    "summary": "Introducing ChatGPT for Financial Services, combining built-in financial data and GPT-6 Astra for research, modeling, and client-ready materials.",
    "categorySlug": "technisch",
    "tags": [
      "OpenAI"
    ],
    "sourceName": "OpenAI News",
    "sourceUrl": "https://openai.com/index/introducing-chatgpt-financial-services",
    "publishedAt": "2026-09-10",
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
