import Link from "next/link";
import type { Category } from "@/lib/categories";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/kategorien/${category.slug}`}
      className="group flex flex-col gap-2 rounded-lg border border-border bg-surface p-5 transition-colors hover:border-primary/40"
    >
      <span className="text-2xl" aria-hidden>
        {category.emoji}
      </span>
      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
        {category.title}
      </h3>
      <p className="text-sm text-muted leading-relaxed">{category.description}</p>
    </Link>
  );
}
