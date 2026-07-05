import type { MetadataRoute } from "next";

// Everything is public. AI search/citation crawlers (GPTBot, PerplexityBot,
// ClaudeBot, Google-Extended, Bingbot) are deliberately ALLOWED — blocked bots
// can't cite you in AI answers. CCBot (Common Crawl) is training-only, so it's
// the one we decline.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "CCBot", disallow: "/" },
      { userAgent: "*", allow: "/" },
    ],
    sitemap: "https://hybridtheory.ai/sitemap.xml",
  };
}
