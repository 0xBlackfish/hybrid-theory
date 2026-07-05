import { Fragment, type ReactNode } from "react";

/**
 * Render a string with a tiny **bold** markup into React nodes.
 * Even segments are plain text; odd segments (captured between **…**) render
 * as <b>, optionally with a class (e.g. the lime digest figure).
 */
export function renderRich(text: string, boldClassName?: string): ReactNode {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <b key={i} className={boldClassName}>
        {part}
      </b>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}
