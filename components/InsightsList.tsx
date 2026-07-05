"use client";

import { useState } from "react";
import Link from "next/link";
import posthog from "posthog-js";
import type { ListArticle } from "@/lib/posts";
import { STRIPE_FILTERS } from "@/lib/posts";
import { StripeRow } from "./StripeRow";

export function InsightsList({ articles }: { articles: ListArticle[] }) {
  const [filter, setFilter] = useState<string>("All");
  const list = filter === "All" ? articles : articles.filter((a) => a.tag === filter);

  return (
    <>
      {/* Filter pills (sticky) */}
      <section className="stripe-filters-wrap">
        <div className="wrap">
          <div className="stripe-filters">
            {STRIPE_FILTERS.map((f) => (
              <button key={f} onClick={() => { setFilter(f); posthog.capture("insights_filter_changed", { filter: f }); }} className={"stripe-pill " + (filter === f ? "active" : "")}>
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Article list */}
      <section className="stripe-list">
        <div className="wrap">
          <div className="stripe-list-grid">
            {list.map((a) => <StripeRow key={a.slug} a={a} />)}
          </div>

          <div className="stripe-view-all">
            <Link href="/insights/archive" className="btn btn-ghost">
              View all posts <span style={{ opacity: 0.6, fontSize: 11 }}>›</span>
            </Link>
            <span className="mono stripe-archive-count">32 pieces · 2024 → present</span>
          </div>
        </div>
      </section>
    </>
  );
}
