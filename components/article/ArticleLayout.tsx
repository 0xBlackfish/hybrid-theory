import type { ReactNode } from "react";
import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageCTA } from "@/components/PageCTA";
import { ArticleSidecard } from "./ArticleSidecard";
import { getListArticle, type ArticleFrontmatter } from "@/lib/posts";

interface Props {
  frontmatter: ArticleFrontmatter;
  children: ReactNode;
}

export function ArticleLayout({ frontmatter, children }: Props) {
  const fm = frontmatter;
  const related = (fm.related ?? [])
    .map((slug) => getListArticle(slug))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  return (
    <>
      <SiteNav />
      <main>
        <article className="article">
          <header className="article-header">
            <div className="wrap">
              <Link href="/insights" className="mono article-back">← Insights · From the studio</Link>
              <div className="article-meta-row">
                <span className="mono article-kicker">{fm.kicker}</span>
                <span className="mono article-meta-dot">·</span>
                <span className="mono article-date">{fm.date}</span>
              </div>
              <h1 className="article-title">{fm.title}</h1>
              <p className="article-lead">{fm.lead}</p>
            </div>
          </header>

          <div className="article-body-wrap">
            <div className="wrap article-body-grid">
              <div className="article-body">{children}</div>
              <ArticleSidecard author={fm.author} authorTitle={fm.authorTitle} toc={fm.toc} />
            </div>
          </div>
        </article>

        {related.length > 0 && (
          <section className="article-related">
            <div className="wrap">
              <div className="mono article-related-label">Keep reading</div>
              <div className="article-related-grid">
                {related.map((r) => (
                  <Link key={r.slug} href={`/insights/${r.slug}`} className="article-related-card">
                    <div className="ins-page-card-meta">
                      <span className="kicker">{r.tag}</span>
                      <span className="dot" />
                      <span>{r.date}</span>
                    </div>
                    <div className="article-related-title">{r.title}</div>
                    <div className="mono article-related-read">Read →</div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <PageCTA
          title={<>Want help making one of these for your business?</>}
          sub="A 30-minute call. We'll listen, ask a few questions, and tell you whether it's worth doing."
        />
      </main>
      <SiteFooter />
    </>
  );
}
