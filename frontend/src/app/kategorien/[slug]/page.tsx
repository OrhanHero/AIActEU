import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories } from "@/lib/categories";
import { getArticlesByCategory } from "@/lib/articles";
import { CategoryArticleFilter } from "@/components/CategoryArticleFilter";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return {};
  return {
    title: category.title,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const categoryArticles = getArticlesByCategory(slug);

  return (
    <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
      <Link href="/kategorien" className="text-sm text-primary hover:underline">
        ← Alle Kategorien
      </Link>

      <div className="mt-4 mb-8 flex items-start gap-3">
        <span className="text-3xl" aria-hidden>
          {category.emoji}
        </span>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            {category.title}
          </h1>
          <p className="mt-1 max-w-2xl text-muted leading-relaxed">{category.description}</p>
        </div>
      </div>

      <CategoryArticleFilter articles={categoryArticles} />
    </div>
  );
}
