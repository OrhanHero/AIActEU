import Link from "next/link";
import type { Category } from "@/lib/categories";
import { CategoryIcon } from "./CategoryIcon";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/kategorien/${category.slug}`}
      className="group flex flex-col gap-2 rounded-lg border border-border bg-surface p-5 transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 hover:shadow-lg"
    >
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
        <CategoryIcon slug={category.slug} className="h-5 w-5" />
      </span>
      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
        {category.title}
      </h3>
      <p className="text-sm text-muted leading-relaxed">{category.description}</p>
    </Link>
  );
}
