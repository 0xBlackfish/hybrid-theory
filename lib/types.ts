import type { CSSProperties } from "react";

/** CSSProperties extended to allow CSS custom properties (e.g. --case-accent). */
export type CSSVars = CSSProperties & Record<`--${string}`, string | number>;
