import { LeakCycler } from "../LeakCycler";

export function LiveDemo() {
  return (
    <section id="inaction" className="htv-section">
      <div className="htv-wrap">
        <div className="htv-sec-head htv-center">
          <span className="htv-kicker">See it in action</span>
          <h2>Here&rsquo;s what &ldquo;handled&rdquo; actually looks like.</h2>
          <p>
            Pick a moment from a normal day and watch it play out &mdash; start to finish, without
            you lifting a finger.
          </p>
        </div>

        <LeakCycler />
      </div>
    </section>
  );
}
