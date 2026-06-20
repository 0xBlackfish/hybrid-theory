// Hybrid Theory logo — built from the authored SVG.
// Three variants: full lockup (mark + wordmark), mark only, wordmark only.

const MARK_PATHS = (
  <g>
    <path d="m52.4 25.2-1 1.8c-2.4 5.1-4.9 11.6-4.8 18.2 0.4 13.9 7.4 26.3 17.3 32.3 5 3.5 10.7 7.2 18.5 7.3 16.3 0.1 33.2-12.4 33.3-35-1.2 8-9.6 18.7-24.7 18.7-15.1 0.2-26.1-12.9-25.8-25.2l0.3-3.8-14.1-14.4 1 0.1z"/>
    <path d="m52.4 1.2-42.7 43.2 22.3 24c5.6 6.3 11.6 12.7 18.5 21l9.6-10.4c-4-3.1-8.5-9.1-11.5-13.5l-11.5-13-7.8-8.1 23-23.3 22.8 23.3-5.4 5.5c0.9 3.2 4.8 8.6 8.7 11.1l16.7-16.6-42.7-43.8v0.6z"/>
    <path d="m66.1 9.2 13.2 13.9c2.8-1.4 7.1-2.6 11.9-2.6 6.2 0 10.9 1.9 14.7 4.5 6.5 4.2 12.1 12.4 12.1 24.9 0.2 16.3-10.9 32.5-29.8 36.7 0.9 0.3 20.7 2 35.2-13.2 7.2-7.4 12.4-17.3 12.4-29-0.3-21.5-18.3-42.5-44.5-42.6-8.9 0-16.7 2-25.2 7.1v0.3z"/>
  </g>
);

const WORDMARK_PATHS = (
  <g>
    <path d="m2.3 96.9h2.7v6.4h6.7v-6.4h2.8v16h-2.8v-7.2h-6.7v7.1h-2.7v-15.9z"/>
    <path d="m20.8 112.2-4.9-11.3h3l3.2 8 3.1-8h2.9l-6.6 16.4h-2.9l2.1-5.1h0.1z"/>
    <path d="m32 111-0.1 1.8h-2.5v-16.3h2.7v6c0.9-1.2 2.2-1.9 4-1.9 3.2 0 5.4 2.5 5.4 6s-2.2 6.4-5.5 6.4c-1.7 0-3-0.6-4-2zm6.7-4.4c0-2-1.4-3.6-3.2-3.6s-3.5 1.3-3.5 3.6c0 2.5 1.6 3.8 3.5 3.8 1.8-0.1 3.2-1.5 3.2-3.8z"/>
    <path d="m43.3 100.8h2.7v2.2c0.7-1.7 2.1-2.4 3.7-2.4h0.7v2.8c-0.5 0-0.7-0.1-1.1-0.1-1.9 0-3.2 1.3-3.2 3.6v5.9h-2.8v-12z"/>
    <path d="m51.5 97.7c0-0.9 0.7-1.5 1.7-1.5s1.8 0.7 1.8 1.6-0.7 1.6-1.6 1.6c-1 0-1.9-0.7-1.9-1.7zm0.3 3.1h2.8v12h-2.8v-12z"/>
    <path d="m56.6 106.6c0-3.4 2.3-6 5.5-6 1.6 0 3 0.6 3.7 1.8v-5.9h2.8v16.3h-2.5l-0.2-1.7c-0.8 1.2-2.2 1.9-3.9 1.9-3.1 0-5.4-2.4-5.4-6.1v-0.3zm9.3 0c0-2-1.3-3.6-3.2-3.6s-3.3 1.4-3.3 3.6c0 2 1.3 3.8 3.3 3.8 1.9 0 3.2-1.7 3.2-3.8z"/>
    <path d="m79.4 99.2h-4.7v-2.3h12.6v2.3h-5.1v13.6h-2.8v-13.6z"/>
    <path d="m89.1 96.5h2.7v6.1c0.8-1.2 2.2-2 3.9-2 2.7 0 4.3 1.7 4.3 4.5v7.7h-2.7v-6.7c0-2-0.9-2.9-2.5-2.9s-3 1.1-3 3.3v6.3h-2.7v-16.3z"/>
    <path d="m101.9 106.6c0-3.4 2.5-6 5.9-6 3.6 0 6.1 2.6 6.1 5.9v1.1h-9.3c0.2 1.7 1.6 3 3.4 3s2.8-0.7 3.4-1.9l2.2 1.1c-1 1.8-2.7 3.2-5.6 3.2-3.4 0.1-6.1-2.4-6.1-6.3v-0.1zm9.4-1.1c-0.3-1.6-1.5-2.7-3.4-2.7-1.7 0-3 1.1-3.3 2.7h6.7z"/>
    <path d="m115.2 106.6c0-3.2 2.4-6 6-6 3.7 0 6.4 2.6 6.4 6 0 3.5-2.3 6.4-6.2 6.4s-6.2-2.6-6.2-6.1v-0.3zm9.5 0c0-2-1.5-3.6-3.4-3.6s-3.5 1.4-3.5 3.6c0 2.3 1.5 3.8 3.5 3.8 1.8 0 3.4-1.7 3.4-3.8z"/>
    <path d="m129.5 100.8h2.8v2.2c0.7-1.7 2-2.4 3.5-2.4h0.6v2.8c-0.3 0-0.6-0.1-1-0.1-1.8 0-3 1.3-3 3.6v5.9h-2.9v-12z"/>
    <path d="m141 112.2-4.3-11.4h2.8l3 7.9 2.8-7.9h2.6l-6.1 16.5h-2.8l2-5v-0.1z"/>
  </g>
);

// Full lockup — mark on top, wordmark below. viewBox 150x118.
// "size" controls the wordmark height (the visible row in nav).
// For the full lockup, the natural height : wordmark-height ratio is ~118/17.
const Logo = ({ variant = "wordmark", size = 22, color }) => {
  if (variant === "mark") return <LogoMark size={size} color={color} />;
  if (variant === "lockup") return <LogoLockup size={size} color={color} />;
  return <LogoWordmark size={size} color={color} />;
};

// Wordmark — just the "Hybrid Theory" text portion. Cropped from full viewBox.
const LogoWordmark = ({ size = 22, color = "currentColor" }) => {
  // wordmark spans y≈96 to y≈117.5, x≈2 to x≈147 → 145w × 22h
  const w = size * (147 / 21);
  return (
    <svg width={w} height={size} viewBox="2 96 145 22" fill={color} style={{ display: "inline-block", verticalAlign: "middle" }}>
      {WORDMARK_PATHS}
    </svg>
  );
};

// Mark only — the abstract emblem portion.
const LogoMark = ({ size = 28, color = "currentColor" }) => {
  // mark spans roughly x=9..136, y=1..91 → 127w × 90h
  const w = size * (127 / 90);
  return (
    <svg width={w} height={size} viewBox="9 1 127 91" fill={color} style={{ display: "inline-block", verticalAlign: "middle" }}>
      {MARK_PATHS}
    </svg>
  );
};

// Stacked lockup: mark above wordmark.
const LogoLockup = ({ size = 22, color = "currentColor" }) => {
  // full svg 150x118, with mark + wordmark stacked
  const w = size * (150 / 118);
  return (
    <svg width={w} height={size} viewBox="0 0 150 118" fill={color} style={{ display: "inline-block", verticalAlign: "middle" }}>
      {MARK_PATHS}
      {WORDMARK_PATHS}
    </svg>
  );
};

Object.assign(window, { Logo, LogoWordmark, LogoMark, LogoLockup });
