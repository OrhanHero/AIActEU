import type { ReactNode } from "react";

export function GlassCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-border/50 bg-surface/60 shadow-lg backdrop-blur-xl transition-all duration-300 hover:shadow-primary/10 ${className}`}
    >
      {children}
    </div>
  );
}
