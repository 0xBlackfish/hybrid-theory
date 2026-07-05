import styles from "./artifacts.module.css";

type Bar = { height: number; tone?: "hi" | "mid" };

type Props = {
  value: string; // "$8,400", "9", "4.9"
  unit?: string; // " hrs", " ★"
  label: string; // "recovered / month · leads that used to slip"
  /** Small trailing pill, e.g. "+31%" or "auto". */
  delta?: string;
  deltaDir?: "up" | "check";
  /** Mini bar chart (the money/time levers). */
  bars?: Bar[];
  /** Star strip variant (the rating lever). */
  stars?: { glyphs?: string; caption: string };
  className?: string;
};

/** Big value + label with an optional mini bar chart or star strip. */
export function StatReadout({
  value,
  unit,
  label,
  delta,
  deltaDir = "up",
  bars,
  stars,
  className,
}: Props) {
  const rootClass = className ? `${styles.readout} ${className}` : styles.readout;
  return (
    <div className={rootClass}>
      <div className={styles.readoutTop}>
        <div>
          <div className={styles.readoutNum}>
            {value}
            {unit && <span className={styles.readoutUnit}>{unit}</span>}
          </div>
          <div className={styles.readoutLab}>{label}</div>
        </div>
        {delta && (
          <span className={styles.readoutDelta}>
            {deltaDir === "up" ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17 17 7M9 7h8v8" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            )}
            {delta}
          </span>
        )}
      </div>

      {bars && (
        <div className={styles.bars}>
          {bars.map((b, i) => (
            <i
              key={i}
              className={b.tone === "hi" ? styles.barHi : b.tone === "mid" ? styles.barMid : undefined}
              style={{ height: `${b.height}%` }}
            />
          ))}
        </div>
      )}

      {stars && (
        <div className={styles.starsRow}>
          <span className={styles.s}>{stars.glyphs ?? "★★★★★"}</span>
          <span className={styles.c}>{stars.caption}</span>
        </div>
      )}
    </div>
  );
}
