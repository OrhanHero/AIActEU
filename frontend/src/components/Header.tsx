import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            AI
          </span>
          <span>
            AIActEU <span className="text-muted font-normal">KI News Hub</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
          <Link href="/" className="hover:text-foreground transition-colors">
            Start
          </Link>
          <Link href="/kategorien" className="hover:text-foreground transition-colors">
            Kategorien
          </Link>
          <Link href="/ueber-uns" className="hover:text-foreground transition-colors">
            Über uns & Compliance
          </Link>
        </nav>

        <div className="flex items-center gap-3 text-sm">
          <button
            type="button"
            aria-label="Sprache wechseln"
            title="Mehrsprachigkeit (DE/EN) ist für Phase 2/4 geplant, siehe PROJEKTPLAN.md"
            className="rounded-md border border-border px-2.5 py-1 text-muted hover:text-foreground hover:border-foreground/30 transition-colors"
          >
            DE / EN
          </button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
