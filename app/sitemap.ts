import type { MetadataRoute } from "next";
import { VERTICALS } from "@/content/verticals";
import { getArticleSlugs } from "@/lib/articles";

const BASE = "https://hybridtheory.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, changeFrequency: "weekly", priority: 1 },
    ...VERTICALS.map((v) => ({
      url: `${BASE}/for/${v.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    { url: `${BASE}/contact`, changeFrequency: "yearly", priority: 0.4 },
    { url: `${BASE}/insights`, changeFrequency: "monthly", priority: 0.5 },
    ...getArticleSlugs().map((slug) => ({
      url: `${BASE}/insights/${slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
