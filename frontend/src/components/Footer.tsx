import Link from "next/link";
import { AiGeneratedLabel } from "./AiGeneratedLabel";
import { LogoMark } from "./Logo";

const socialLinks = [
  { label: "TikTok", href: "https://www.tiktok.com/@aiacteu" },
  { label: "YouTube", href: "https://www.youtube.com/@AIActEU" },
  { label: "X (Twitter)", href: "https://x.com/AIActEUR" },
  { label: "GitHub", href: "https://github.com/OrhanHero" },
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border/80 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 text-sm text-muted sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2.5 font-bold text-foreground">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 text-white shadow-md">
              <LogoMark />
            </span>
            <span className="text-lg">AIActEU</span>
          </Link>
          <p className="text-xs leading-relaxed">
            Zentralisierte, kuratierte Nachrichten- und Wissensplattform für den deutschsprachigen KI-Sektor.
          </p>
          <div className="flex flex-col gap-1.5 text-xs font-medium">
            <Link href="/verzeichnis" className="text-primary hover:underline">
              Anbieter- & Benchmark-Verzeichnis →
            </Link>
            <Link href="/tutorials" className="text-primary hover:underline">
              Tutorials: Lokale KI & RAG →
            </Link>
            <Link href="/publikationen" className="text-primary hover:underline">
              Publikationen & Research →
            </Link>
          </div>
        </div>

        <div>
          <p className="mb-3 font-semibold text-foreground">EU-Compliance & Rechtliches</p>
          <ul className="flex flex-col gap-2 text-xs">
            <li>
              <Link href="/compliance" className="transition-colors hover:text-foreground">
                EU-Verhaltenskodex & Transparenz
              </Link>
            </li>
            <li>
              <Link href="/impressum" className="transition-colors hover:text-foreground">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="transition-colors hover:text-foreground">
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-3 font-semibold text-foreground">Redaktion & Kennzeichnung</p>
          <p className="mb-3 text-xs leading-relaxed">
            Die Redaktion kombiniert automatisiertes Ingestion-Tooling mit menschlicher Kontrolle.
          </p>
          <AiGeneratedLabel className="mb-2" />
          <a
            href="https://digital-strategy.ec.europa.eu/en/policies/eu-icons-labelling-ai-generated-content"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-primary transition-colors hover:underline"
          >
            EU-Kennzeichnung Dokumentation →
          </a>
        </div>

        <div>
          <p className="mb-3 font-semibold text-foreground">Social Media & Community</p>
          <ul className="flex flex-col gap-2 text-xs">
            {socialLinks.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium transition-colors hover:text-primary"
                >
                  {social.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60 py-6 text-center text-xs text-muted">
        <p>© {new Date().getFullYear()} AIActEU · Alle Rechte vorbehalten · EU AI Act Standard Compliant</p>
      </div>
    </footer>
  );
}
