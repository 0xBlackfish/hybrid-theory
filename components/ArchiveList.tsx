"use client";

import { useEffect, useState } from "react";
import type { ListArticle } from "@/lib/posts";
import { STRIPE_FILTERS } from "@/lib/posts";
import { StripeRow } from "./StripeRow";

const PER_PAGE = 4;

export function ArchiveList({ articles }: { articles: ListArticle[] }) {
  const [filter, setFilter] = useState<string>("All");
  const [page, setPage] = useState(1);

  const list = filter === "All" ? articles : articles.filter((a) => a.tag === filter);
  const pages = Math.max(1, Math.ceil(list.length / PER_PAGE));
  const visible = list.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  useEffect(() => {
    setPage(1);
  }, [filter]);

  return (
    <>
      <section className="stripe-filters-wrap">
        <div className="wrap">
          <div className="stripe-filters">
            {STRIPE_FILTERS.map((f) => (
              <button key={f} onClick={() => setFilter(f)} className={"stripe-pill " + (filter === f ? "active" : "")}>
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="stripe-list">
        <div className="wrap">
          <div className="stripe-list-grid">
            {visible.map((a) => <StripeRow key={a.slug} a={a} />)}
          </div>

          <div className="stripe-pagination">
            <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1} className="stripe-page-arrow">
              ‹ Previous
            </button>
            <div className="stripe-page-numbers">
              {Array.from({ length: pages }).map((_, i) => (
                <button key={i} onClick={() => setPage(i + 1)} className={"stripe-page-num " + (page === i + 1 ? "active" : "")}>
                  {i + 1}
                </button>
              ))}
            </div>
            <button onClick={() => setPage((p) => Math.min(pages, p + 1))} disabled={page === pages} className="stripe-page-arrow">
              Next ›
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
