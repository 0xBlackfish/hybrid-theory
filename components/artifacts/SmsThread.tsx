import type { ScenarioSms } from "@/content/verticals/types";
import styles from "./artifacts.module.css";
import { renderRich } from "./rich";
import { PhoneIcon } from "./icons";

type Props = {
  sms: ScenarioSms;
  /** When true, messages cascade in on mount. Remount (change `key`) to replay. */
  animate?: boolean;
  className?: string;
};

/**
 * The hero anchor: a phone SMS thread. Inbound bubbles left, the AI's replies
 * right, each with a timestamp and an optional "Sent by Hybrid" attribution.
 * The cascade is pure CSS (staggered animation-delay) so it works without JS
 * and is neutralized under prefers-reduced-motion.
 */
export function SmsThread({ sms, animate = true, className }: Props) {
  const rootClass = [styles.card, styles.sms, className].filter(Boolean).join(" ");
  const rise = (delay: number) =>
    animate
      ? { className: styles.rise, style: { animationDelay: `${delay.toFixed(2)}s` } }
      : {};

  // Human texting rhythm: customer messages just arrive; business replies
  // "read" first, then show a live typing indicator before the text lands.
  const READ = 0.45; // pause before the reply side starts typing
  const TYPE = 0.95; // how long the typing dots run
  let t = 0.05;

  return (
    <div className={rootClass}>
      <div className={styles.smsHead}>
        <div className={styles.smsAva}>{sms.initials}</div>
        <div className={styles.smsWho}>
          <div className={styles.smsName}>{sms.name}</div>
          <div className={styles.smsSub}>
            <PhoneIcon />
            {sms.phone}
          </div>
        </div>
        <span className={styles.smsBadge}>{sms.badge}</span>
      </div>

      <div className={styles.smsBody}>
        <div className={styles.smsSys} {...rise(t)}>
          {renderRich(sms.system)}
        </div>

        {sms.messages.map((m, i) => {
          const isBiz = m.from === "business";
          let bubble;

          if (isBiz && animate) {
            // bubble rises with typing dots, text swaps in when "typed"
            t += READ;
            const typingStart = t;
            t += TYPE;
            const swap = { "--swap": `${t.toFixed(2)}s` } as React.CSSProperties;
            bubble = (
              <div
                key={`m${i}`}
                className={`${styles.bub} ${styles.bubOut} ${styles.bubPhase} ${styles.rise}`}
                style={{ animationDelay: `${typingStart.toFixed(2)}s` }}
              >
                <span className={styles.phDots} style={swap} aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <span className={styles.phText} style={swap}>
                  {renderRich(m.text)}
                  <span className={styles.bubTime}>{m.time}</span>
                </span>
              </div>
            );
          } else {
            t += 0.55;
            bubble = (
              <div
                key={`m${i}`}
                className={`${styles.bub} ${isBiz ? styles.bubOut : styles.bubIn}`}
                {...rise(t)}
              >
                {renderRich(m.text)}
                <span className={styles.bubTime}>{m.time}</span>
              </div>
            );
          }

          if (!m.note) return bubble;
          const note = (
            <div key={`n${i}`} className={styles.aitag} {...rise(t + 0.18)}>
              <span className={styles.aitagDot} />
              {renderRich(m.note)}
            </div>
          );
          return [bubble, note];
        })}
      </div>
    </div>
  );
}
