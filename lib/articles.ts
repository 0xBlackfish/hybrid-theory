import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { ArticleFrontmatter } from "./posts";

const CONTENT_DIR = path.join(process.cwd(), "content", "insights");

export function getArticleSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getArticle(slug: string): { frontmatter: ArticleFrontmatter; content: string } | null {
  const file = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  return { frontmatter: { slug, ...(data as Omit<ArticleFrontmatter, "slug">) }, content };
}
