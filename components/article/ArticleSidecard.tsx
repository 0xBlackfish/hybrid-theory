"use client";

import { useEffect, useState } from "react";
import type { TocEntry } from "@/lib/posts";

interface Props {
  author: string;
  authorTitle: string;
  toc: TocEntry[];
}

export function ArticleSidecard({ author, authorTitle, toc }: Props) {
  const [activeAnchor, setActiveAnchor] = useState(toc[0]?.id ?? "");

  useEffect(() => {
    if (toc.length === 0) return;
    const onScroll = () => {
      let cur = toc[0].id;
      for (const t of toc) {
        const el = document.getElementById(t.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top < 140) cur = t.id;
      }
      setActiveAnchor(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [toc]);

  const firstName = author.split(" ")[0];

  return (
    <aside className="article-sidecard">
      <div className="article-sidecard-author">
        <div className="article-author-avatar">{author.split(" ").map((n) => n[0]).join("")}</div>
        <div>
          <div className="article-author-name">{author}</div>
          <div className="article-author-title">{authorTitle}</div>
        </div>
      </div>

      <div className="article-sidecard-section">
        <div className="mono article-sidecard-label">In this piece</div>
        <ol className="article-toc-list">
          {toc.map((t, i) => (
            <li key={t.id} className={activeAnchor === t.id ? "active" : ""}>
              <a href={`#${t.id}`}>
                <span className="mono article-toc-n">0{i + 1}</span>
                <span>{t.label}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>

      <div className="article-sidecard-section">
        <div className="mono article-sidecard-label">Share</div>
        <div className="article-share-row">
          <button aria-label="Copy link" title="Copy link">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M6 8 L8 6 M5.5 4.5 L6.5 3.5 a2.1 2.1 0 0 1 3 3 L8.5 7.5 M3.5 6.5 L2.5 7.5 a2.1 2.1 0 0 0 3 3 L6.5 9.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button aria-label="Share on X" title="Share on X">
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <path d="M1.5 1.5 L12.5 12.5 M12.5 1.5 L1.5 12.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
            </svg>
          </button>
          <button aria-label="Share on LinkedIn" title="Share on LinkedIn">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="1" y="5" width="2.2" height="8" fill="currentColor" />
              <circle cx="2.1" cy="2.4" r="1.3" fill="currentColor" />
              <path d="M5 5 H7 V6.2 C7.4 5.4 8.5 4.8 9.5 4.8 C11.5 4.8 12.5 6 12.5 8.2 V13 H10.3 V8.6 C10.3 7.5 9.9 6.9 9 6.9 C8 6.9 7.2 7.6 7.2 8.8 V13 H5 V5 Z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>

      <div className="article-sidecard-cta">
        <a href="https://calendly.com/hybridtheory/30min" target="_blank" rel="noopener" data-calendly className="btn btn-primary">
          Talk to {firstName} <span style={{ opacity: 0.6, fontSize: 11 }}>↗</span>
        </a>
      </div>
    </aside>
  );
}
