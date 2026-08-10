"use client";

import { useLanguage } from "@/context/LanguageContext";

export function LiveIndicator({ className = "" }: { className?: string }) {
  const { lang } = useLanguage();

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-border/50 bg-surface/60 px-3 py-1 text-xs text-muted backdrop-blur-sm ${className}`}
    >
      <span className="relative flex h-2 w-2" aria-hidden>
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
      </span>
      {lang === "en" ? "Live · Updated every 4h" : "Live · Aktualisiert alle 4 Std."}
    </span>
  );
}
