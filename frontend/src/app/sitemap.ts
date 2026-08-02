import type { MetadataRoute } from "next";
import { categories } from "@/lib/categories";
import { tutorials } from "@/lib/tutorials";
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
    "/tutorials",
    ...categories.map((category) => `/kategorien/${category.slug}`),
    ...tutorials.map((tutorial) => `/tutorials/${tutorial.slug}`),
  ];

  return paths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));
}
