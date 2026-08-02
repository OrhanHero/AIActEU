import type { MetadataRoute } from "next";
import { categories } from "@/lib/categories";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/kategorien",
    "/compliance",
    "/ueber-uns",
    "/impressum",
    "/datenschutz",
    "/suche",
    "/verzeichnis",
    ...categories.map((category) => `/kategorien/${category.slug}`),
  ];

  return paths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));
}
