import type { VerticalScenario } from "@/content/verticals/types";
import styles from "./artifacts.module.css";
import { SmsThread } from "./SmsThread";
import { DigestCard } from "./DigestCard";
import { CalendarCard } from "./CalendarCard";
import { QuoteCard } from "./QuoteCard";

type Props = {
  scenario: VerticalScenario;
  /** Cascade the SMS thread on mount (remount via `key` to replay on swap). */
  animate?: boolean;
  className?: string;
};

/**
 * The layered hero composition: SMS thread + morning digest + a value card
 * (calendar booking OR sent quote), stacked with E's depth/rotation/shadow
 * tiers. Reused by the home switcher hero and by each /for/[slug] hero.
 */
export function ScenarioComposition({ scenario, animate = true, className }: Props) {
  const { sms, digest, value } = scenario;
  const rootClass = className ? `${styles.stage} ${className}` : styles.stage;
  return (
    <div className={rootClass}>
      <SmsThread sms={sms} animate={animate} className={styles.posSms} />
      <DigestCard digest={digest} className={`${styles.posDigest} ${animate ? styles.swap : ""}`} />
      {value.kind === "quote" ? (
        <QuoteCard value={value} className={`${styles.posValue} ${animate ? styles.swap : ""}`} />
      ) : (
        <CalendarCard value={value} className={`${styles.posValue} ${animate ? styles.swap : ""}`} />
      )}
    </div>
  );
}
