import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArticleLayout } from "@/components/article/ArticleLayout";
import { articleMdxComponents } from "@/components/article/mdx";
import { getArticle, getArticleSlugs } from "@/lib/articles";

export function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getArticle(slug);
  if (!post) return {};
  return {
    title: `${post.frontmatter.title} — Hybrid Theory`,
    description: post.frontmatter.lead,
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getArticle(slug);
  if (!post) notFound();

  return (
    <ArticleLayout frontmatter={post.frontmatter}>
      <MDXRemote source={post.content} components={articleMdxComponents} />
    </ArticleLayout>
  );
}
