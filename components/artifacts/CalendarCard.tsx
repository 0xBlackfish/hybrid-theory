import type { ScenarioCalendarValue } from "@/content/verticals/types";
import styles from "./artifacts.module.css";
import { ValueReceipt } from "./ValueReceipt";

type Props = {
  value: ScenarioCalendarValue;
  className?: string;
};

/** A day column with open slots and one filled "JUST ADDED" slot + receipt. */
export function CalendarCard({ value, className }: Props) {
  const rootClass = [styles.card, styles.valueCard, className].filter(Boolean).join(" ");
  return (
    <div className={rootClass}>
      <div className={styles.calHead}>
        <div>
          <div className={styles.calDow}>{value.dayOfWeek}</div>
          <div className={styles.calDate}>{value.date}</div>
        </div>
        <div className={styles.calLive}>
          <span className={styles.pulse} />
          Live
        </div>
      </div>
      <div className={styles.calGrid}>
        {value.slots.map((s, i) => (
          <div key={i} className={styles.slot}>
            <div className={styles.slotT}>{s.time}</div>
            {s.booking ? (
              <div className={`${styles.slotE} ${styles.slotFilled}`}>
                <div className={styles.slotTitle}>
                  <span>{s.booking.title}</span>
                  <span className={styles.just}>{value.addedLabel}</span>
                </div>
                <div className={styles.slotSub}>{s.booking.sub}</div>
                <ValueReceipt label={s.booking.receipt} />
              </div>
            ) : (
              <div className={`${styles.slotE} ${styles.slotEmpty}`}>Open</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
