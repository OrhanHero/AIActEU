"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { SearchBox } from "./SearchBox";
import { useLanguage } from "@/context/LanguageContext";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LanguageToggleButton({ className }: { className?: string }) {
  const { lang, toggleLanguage } = useLanguage();
  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label="Sprache / Language"
      title="Sprache zwischen Deutsch und Englisch umschalten"
      className={`inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs font-semibold text-primary transition-all duration-200 hover:scale-105 hover:bg-primary/20 hover:shadow-sm ${className ?? ""}`}
    >
      <span className={lang === "de" ? "font-bold text-primary" : "text-muted"}>DE</span>
      <span className="text-muted">/</span>
      <span className={lang === "en" ? "font-bold text-primary" : "text-muted"}>EN</span>
    </button>
  );
}

/** "Tools"-Dropdown: fasst die 5 sekundären Nav-Links zusammen */
function ToolsDropdown({ onNavigate }: { onNavigate?: () => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const toolLinks = [
    { href: "/verzeichnis", label: "KI-Modell-Register" },
    { href: "/ki-analyse", label: "KI-Analyse" },
    { href: "/audit", label: "Audit-Tools" },
    { href: "/tutorials", label: "Tutorials" },
    { href: "/publikationen", label: "Publikationen" },
  ];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="true"
        className="flex items-center gap-1 text-sm font-medium text-muted transition-all duration-200 hover:text-primary"
      >
        Tools
        <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-2 min-w-[180px] rounded-xl border border-border bg-surface/95 p-2 shadow-xl backdrop-blur-xl">
          {toolLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => { setOpen(false); onNavigate?.(); }}
              className="block rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-surface-hover hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function PrimaryNavLinks({ className, onNavigate }: { className?: string; onNavigate?: () => void }) {
  const { t } = useLanguage();
  const primaryLinks = [
    { href: "/", label: "News" },
    { href: "/compliance", label: "Compliance" },
    { href: "/kategorien", label: "Kategorien" },
    { href: "/ueber-uns", label: t("navUeberUns") },
  ];
  return (
    <>
      {primaryLinks.map((link) => (
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
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3 font-semibold">
          <span className="relative inline-flex h-10 w-10 overflow-hidden rounded-xl border border-primary/30 shadow-md shadow-primary/20 transition-all duration-300 group-hover:scale-105 group-hover:border-primary/60 group-hover:shadow-primary/40">
            <Image
              src="/images/hero_ai_act_governance.png"
              alt="AIActEU Logo"
              fill
              sizes="40px"
              className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
            />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
              AIActEU
            </span>
            <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-muted">
              KI News Hub
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-5 text-sm font-medium md:flex lg:gap-7" aria-label="Hauptnavigation">
          <PrimaryNavLinks className="text-muted transition-all duration-200 hover:text-primary" />
          <ToolsDropdown />
        </nav>

        <div className="flex items-center gap-2 text-sm">
          <SearchBox className="hidden w-48 md:block" />
          <LanguageToggleButton className="hidden sm:inline-flex" />

          {/* A5: GitHub-Link */}
          <a
            href="https://github.com/OrhanHero/AIActEU"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository öffnen"
            title="Quellcode auf GitHub"
            className="hidden items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 font-mono text-xs text-muted transition-all duration-200 hover:border-primary/50 hover:text-foreground sm:inline-flex"
          >
            <GitHubIcon className="h-3.5 w-3.5" />
            <span>GitHub</span>
          </a>

          <ThemeToggle />

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-primary/50 hover:text-foreground md:hidden"
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

      {/* Mobile Nav */}
      {mobileOpen && (
        <div id="mobile-nav" className="border-t border-border bg-background/95 backdrop-blur-2xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4">
            <SearchBox onSubmit={() => setMobileOpen(false)} />
            <nav className="flex flex-col gap-1 text-sm font-medium" aria-label="Mobile Navigation">
              <PrimaryNavLinks
                className="rounded-lg px-3 py-2 text-muted transition-all hover:bg-surface-hover hover:text-foreground"
                onNavigate={() => setMobileOpen(false)}
              />
              {/* Tools-Links direkt im Mobile-Menu aufklappen */}
              <div className="mt-1 border-t border-border/50 pt-2">
                <p className="px-3 pb-1 font-mono text-[10px] uppercase tracking-wider text-muted">Tools</p>
                {[
                  { href: "/verzeichnis", label: "KI-Modell-Register" },
                  { href: "/ki-analyse", label: "KI-Analyse" },
                  { href: "/audit", label: "Audit-Tools" },
                  { href: "/tutorials", label: "Tutorials" },
                  { href: "/publikationen", label: "Publikationen" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-2 text-muted transition-all hover:bg-surface-hover hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>
            <div className="flex items-center gap-3">
              <LanguageToggleButton />
              <a
                href="https://github.com/OrhanHero/AIActEU"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 font-mono text-xs text-muted hover:text-foreground"
              >
                <GitHubIcon className="h-3.5 w-3.5" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
