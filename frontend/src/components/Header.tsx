"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { SearchBox } from "./SearchBox";
import { LogoMark } from "./Logo";

const navLinks = [
  { href: "/", label: "Start" },
  { href: "/kategorien", label: "Kategorien" },
  { href: "/tutorials", label: "Tutorials" },
  { href: "/verzeichnis", label: "Verzeichnis" },
  { href: "/publikationen", label: "Publikationen" },
  { href: "/ueber-uns", label: "Über uns & Compliance" },
];

function LanguageToggleButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      aria-label="Sprache wechseln"
      title="Mehrsprachigkeit (DE/EN) ist für Phase 2/4 geplant, siehe PROJEKTPLAN.md"
      className={`rounded-md border border-border text-muted hover:text-foreground hover:border-foreground/30 transition-colors ${className ?? ""}`}
    >
      DE / EN
    </button>
  );
}

function NavLinks({ className, onNavigate }: { className?: string; onNavigate?: () => void }) {
  return (
    <>
      {navLinks.map((link) => (
        <Link key={link.href} href={link.href} onClick={onNavigate} className={className}>
          {link.label}
        </Link>
      ))}
    </>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <LogoMark />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-lg">AIActEU</span>
            <span className="text-xs text-muted font-normal">KI News Hub</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
          <NavLinks className="hover:text-foreground transition-colors" />
        </nav>

        <div className="flex items-center gap-3 text-sm">
          <SearchBox className="hidden md:block w-48" />
          <LanguageToggleButton className="hidden sm:inline-flex px-2.5 py-1" />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted hover:text-foreground hover:border-foreground/30 transition-colors md:hidden"
          >
            <span className="sr-only">Menü</span>
            {mobileOpen ? (
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div id="mobile-nav" className="border-t border-border md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-4">
            <SearchBox onSubmit={() => setMobileOpen(false)} />
            <nav className="flex flex-col gap-1 text-sm">
              <NavLinks
                className="rounded-md px-2 py-2 text-muted hover:bg-surface hover:text-foreground transition-colors"
                onNavigate={() => setMobileOpen(false)}
              />
            </nav>
            <LanguageToggleButton className="self-start px-2.5 py-1 text-sm" />
          </div>
        </div>
      )}
    </header>
  );
}
