"use client";

import posthog from "posthog-js";

interface FaqItem {
  q: string;
  a: string;
}

interface VerticalFaqProps {
  items: FaqItem[];
  industrySlug: string;
}

export function VerticalFaq({ items, industrySlug }: VerticalFaqProps) {
  return (
    <div className="vfy-faq">
      {items.map((f, i) => (
        <details
          key={i}
          className="vfy-faq-item"
          onToggle={(e) => {
            if ((e.currentTarget as HTMLDetailsElement).open) {
              posthog.capture("vertical_faq_item_opened", { industry: industrySlug, question: f.q, question_index: i });
            }
          }}
        >
          <summary>
            <span>{f.q}</span>
            <span className="vfy-faq-mark" aria-hidden="true" />
          </summary>
          <p className="vfy-faq-a">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
