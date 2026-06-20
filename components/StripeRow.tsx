import Link from "next/link";
import type { ListArticle } from "@/lib/posts";
import { TAG_ACCENT } from "@/lib/posts";
import { ArticleVisual } from "./ArticleVisual";

export function StripeRow({ a }: { a: ListArticle }) {
  const accent = TAG_ACCENT[a.tag] || "var(--accent)";
  return (
    <article className="stripe-row">
      <div className="stripe-row-text">
        <div className="stripe-tag mono" style={{ borderLeftColor: accent, color: accent }}>{a.tag}</div>
        <h2 className="stripe-row-title">{a.title}</h2>
        <p className="stripe-row-excerpt">{a.excerpt}</p>
        <Link href={`/insights/${a.slug}`} className="stripe-read-more">
          Read more <span className="mono">›</span>
        </Link>
      </div>
      <div className="stripe-row-meta">
        <div className="stripe-row-date">
          <span className="stripe-meta-bar" style={{ background: accent }} />
          <span className="mono">{a.date}</span>
        </div>
        <div className="stripe-row-author">
          <div className="stripe-author-avatar">{a.author.split(" ").map((n) => n[0]).join("")}</div>
          <div>
            <div className="stripe-author-name">{a.author}</div>
            <div className="stripe-author-role">{a.role}</div>
          </div>
        </div>
      </div>

      <div className="stripe-row-visual">
        <ArticleVisual v={a.visual} />
      </div>
    </article>
  );
}
