import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 sm:grid-cols-3 text-sm text-muted">
        <div>
          <p className="font-medium text-foreground mb-2">Quellen-Transparenz</p>
          <p className="mb-2">
            Jeder Artikel verlinkt zur Originalquelle. Automatisiert kuratierte und
            KI-unterstützt zusammengefasste Inhalte sind entsprechend gekennzeichnet.
          </p>
          <Link href="/verzeichnis" className="hover:text-foreground transition-colors">
            Anbieter- & Benchmark-Verzeichnis →
          </Link>
          <br />
          <Link href="/tutorials" className="hover:text-foreground transition-colors">
            Tutorials: Lokale KI →
          </Link>
        </div>
        <div>
          <p className="font-medium text-foreground mb-2">EU-Compliance</p>
          <ul className="space-y-1">
            <li>
              <Link href="/compliance" className="hover:text-foreground transition-colors">
                EU-Verhaltenskodex & Transparenz
              </Link>
            </li>
            <li>
              <Link href="/impressum" className="hover:text-foreground transition-colors">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="hover:text-foreground transition-colors">
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-medium text-foreground mb-2">Redaktion</p>
          <p>
            Diese Seite nutzt KI zur Inhalts-Kuratierung; die editorielle Kontrolle liegt
            bei Menschen.
          </p>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} AIActEU
      </div>
    </footer>
  );
}
