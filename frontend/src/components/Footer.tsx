"use client";

import Link from "next/link";
import Image from "next/image";
import { AiGeneratedLabel } from "./AiGeneratedLabel";
import { useLanguage } from "@/context/LanguageContext";

const socialLinks = [
  { label: "TikTok", href: "https://www.tiktok.com/@aiacteu" },
  { label: "YouTube", href: "https://www.youtube.com/@AIActEU" },
  { label: "X (Twitter)", href: "https://x.com/AIActEUR" },
  { label: "GitHub", href: "https://github.com/OrhanHero" },
];

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="mt-20 border-t border-border/80 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 text-sm text-muted sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="flex flex-col gap-4">
          <Link href="/" className="group flex items-center gap-3 font-bold text-foreground">
            <span className="relative inline-flex h-9 w-9 overflow-hidden rounded-xl border border-primary/30 shadow-md shadow-primary/20 transition-all duration-300 group-hover:scale-105 group-hover:border-primary/60">
              <Image
                src="/images/hero_ai_act_governance.png"
                alt="AIActEU Logo"
                fill
                sizes="36px"
                className="object-cover object-center"
              />
            </span>
            <span className="text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
              AIActEU
            </span>
          </Link>
          <p className="text-xs leading-relaxed">
            {t("footerText")}
          </p>
          <div className="flex flex-col gap-1.5 text-xs font-medium">
            <Link href="/verzeichnis" className="text-primary hover:underline">
              {t("navVerzeichnis")} →
            </Link>
            <Link href="/tutorials" className="text-primary hover:underline">
              {t("navTutorials")} →
            </Link>
            <Link href="/publikationen" className="text-primary hover:underline">
              {t("navPublikationen")} →
            </Link>
          </div>
        </div>

        <div>
          <p className="mb-3 font-semibold text-foreground">{t("footerLegal")}</p>
          <ul className="flex flex-col gap-2 text-xs">
            <li>
              <Link href="/compliance" className="transition-colors hover:text-foreground">
                {t("complianceTitle")}
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
          <p className="mb-3 font-semibold text-foreground">{t("footerRedaktion")}</p>
          <p className="mb-3 text-xs leading-relaxed">
            {t("complianceDesc")}
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
          <p className="mb-3 font-semibold text-foreground">Social Media &amp; Community</p>
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
        <p>{t("footerCopyright")}</p>
      </div>
    </footer>
  );
}
