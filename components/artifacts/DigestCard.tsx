import type { ScenarioDigest } from "@/content/verticals/types";
import styles from "./artifacts.module.css";
import { renderRich } from "./rich";

type Props = {
  digest: ScenarioDigest;
  className?: string;
};

/** The dark morning-digest notification: greeting, headline stat, readout row. */
export function DigestCard({ digest, className }: Props) {
  const rootClass = className ? `${styles.digest} ${className}` : styles.digest;
  return (
    <div className={rootClass}>
      <div className={styles.digestHead}>
        <div className={styles.digestIco}>H</div>
        <div className={styles.digestApp}>Hybrid</div>
        <div className={styles.digestTime}>now</div>
      </div>
      <div className={styles.digestTitle}>{digest.title}</div>
      <div className={styles.digestBody}>{renderRich(digest.body, styles.digestNum)}</div>
      <div className={styles.digestRow}>
        {digest.stats.map((s, i) => (
          <div key={i} className={styles.digestStat}>
            <div className={styles.statK}>{s.value}</div>
            <div className={styles.statL}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
