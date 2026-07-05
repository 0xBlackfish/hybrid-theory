import styles from "./artifacts.module.css";

type Props = {
  quote: string;
  name: string;
  /** Avatar monogram; defaults to the first letters of `name`. */
  initials?: string;
  source: string; // "Google · asked for you"
  rating?: number; // 1–5, defaults to 5
  className?: string;
};

/** 5-star review: stars, quote, attribution, source. */
export function ReviewCard({ quote, name, initials, source, rating = 5, className }: Props) {
  const rootClass = [styles.card, styles.review, className].filter(Boolean).join(" ");
  const mono =
    initials ??
    name
      .split(/\s+/)
      .map((w) => w[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  return (
    <div className={rootClass}>
      <div className={styles.reviewStars}>{"★".repeat(rating)}</div>
      <div className={styles.reviewQuote}>{quote}</div>
      <div className={styles.reviewFoot}>
        <div className={styles.reviewAva}>{mono}</div>
        <div className={styles.reviewName}>{name}</div>
        <div className={styles.reviewSrc}>{source}</div>
      </div>
    </div>
  );
}
