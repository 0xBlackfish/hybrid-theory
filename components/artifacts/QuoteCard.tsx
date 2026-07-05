import type { ScenarioQuoteValue } from "@/content/verticals/types";
import styles from "./artifacts.module.css";
import { ValueReceipt } from "./ValueReceipt";
import { PhotoIcon } from "./icons";

type Props = {
  value: ScenarioQuoteValue;
  className?: string;
};

/** An estimate doc: business name, photo thumbnails, line items, total, receipt. */
export function QuoteCard({ value, className }: Props) {
  const rootClass = [styles.card, styles.valueCard, className].filter(Boolean).join(" ");
  const photoCount = value.photoCount ?? 0;
  return (
    <div className={rootClass}>
      <div className={styles.qcHead}>
        <span className={styles.qcCo}>{value.company}</span>
        <span className={styles.qcSt}>{value.sentStamp}</span>
      </div>
      <div className={styles.qcBody}>
        {photoCount > 0 && (
          <div className={styles.qcPhotos}>
            {Array.from({ length: photoCount }).map((_, i) => (
              <div key={i} className={styles.qcPhoto}>
                <PhotoIcon />
              </div>
            ))}
            <span className={styles.qcPhotoLab}>
              {value.photoLabel ?? `${photoCount} photos from the customer`}
            </span>
          </div>
        )}
        {value.lineItems.map((it, i) => (
          <div key={i} className={styles.qcLine}>
            <span>{it.label}</span>
            <span>{it.amount}</span>
          </div>
        ))}
        <div className={styles.qcTotal}>
          <span className={styles.qcTotalLab}>{value.totalLabel ?? "Estimate total"}</span>
          <span className={styles.qcTotalAmt}>{value.total}</span>
        </div>
        <ValueReceipt label={value.receipt} />
      </div>
    </div>
  );
}
