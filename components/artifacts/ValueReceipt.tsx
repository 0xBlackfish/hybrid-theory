import styles from "./artifacts.module.css";
import { CheckIcon } from "./icons";

type Props = {
  /** The outcome line, e.g. "Booked · $420 · Thu 9:00 AM". */
  label: string;
  className?: string;
};

/** The lime outcome chip — an outcome shown, never a result claimed. */
export function ValueReceipt({ label, className }: Props) {
  return (
    <div className={className ? `${styles.receipt} ${className}` : styles.receipt}>
      <CheckIcon />
      {label}
    </div>
  );
}
