import type { ComponentPropsWithoutRef, ReactNode } from "react";

export function PullQuote({ children }: { children: ReactNode }) {
  return (
    <figure className="article-pullquote">
      <blockquote>{children}</blockquote>
    </figure>
  );
}

export function ProductMock({ title, app, children }: { title: string; app: string; children: ReactNode }) {
  return (
    <div className="article-mock">
      <div className="article-mock-bar">
        <div className="mono">{title}</div>
        <div className="mono article-mock-app">{app}</div>
      </div>
      <div className="article-mock-body">{children}</div>
    </div>
  );
}

export function ClientCard({ items }: { items: { label: string; val: string }[] }) {
  return (
    <div className="article-clientcard">
      <div className="article-clientcard-row">
        {items.map((it) => (
          <div key={it.label}>
            <div className="mono article-clientcard-label">{it.label}</div>
            <div className="article-clientcard-val">{it.val}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Results({ children }: { children: ReactNode }) {
  return <div className="article-results">{children}</div>;
}

export function Result({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="article-result">
      <div className="article-result-val">{children}</div>
      <div className="article-result-label">{label}</div>
    </div>
  );
}

export const articleMdxComponents = {
  PullQuote,
  ProductMock,
  ClientCard,
  Results,
  Result,
  ol: (props: ComponentPropsWithoutRef<"ol">) => <ol className="article-ol" {...props} />,
};
