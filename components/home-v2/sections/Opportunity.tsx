import type { CSSProperties, ReactElement } from "react";
import { OPP_IDEAS } from "../icons";

// A curated, static grid — plays grouped two moves at a time. Each tile leads
// with a compact micro-artifact (Direction E): a rendered scrap of the AI's
// actual work, sitting above the title/body on a white product card.
//
// The top band (three groups) proves the "make more money" story exactly as
// the client approved it. The secondary band adds two groups so the section
// spans all three Reframe levers — money, time, and a sharper operation.
type Tile = { id: string; title?: string; body?: string };
type Group = { label: string; accent: string; tiles: Tile[] };

const GROUPS_PRIMARY: Group[] = [
  { label: "Win the lead", accent: "#F5A623", tiles: [{ id: "speed" }, { id: "missed" }] },
  { label: "Win the job", accent: "#5BE3FF", tiles: [{ id: "quote" }, { id: "booking" }] },
  { label: "Win them back", accent: "#FF3DA5", tiles: [{ id: "reviews" }, { id: "winback" }] },
];

const GROUPS_SECONDARY: Group[] = [
  {
    label: "A lighter week",
    accent: "#3FE0A8",
    tiles: [
      {
        id: "invoice",
        title: "The invoice gets paid — without the awkward call",
        body: "A friendly nudge on day 7, a pay link on day 14. The money stops aging out while you're running the next job.",
      },
      {
        id: "docs",
        title: "The missing paperwork chases itself",
        body: "Documents, signatures, photos — collected automatically, so the real work never stalls.",
      },
    ],
  },
  {
    label: "A sharper operation",
    accent: "#A78BFA",
    tiles: [
      {
        id: "scoring",
        title: "Every call scored, every rep coached",
        body: "Know how each sales call and session actually went — and exactly what to coach next.",
      },
      {
        id: "reviewmine",
        title: "Your reviews already wrote your ads",
        body: "Pulls the exact words happy customers use, ready to reuse — your best lines, straight from the source.",
      },
    ],
  },
];

const CHECK = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

// Each micro-artifact is lightweight inline JSX — copy lifted from Direction E
// and the WorkflowTheater scenes. Value moments stay lime/green like the
// existing tiles; each group's own hue lives only in its label mark.
const MICRO: Record<string, ReactElement> = {
  speed: (
    <div className="htv-mini">
      <div className="htv-mini-top"><span className="htv-mini-dot" />New website lead<span className="htv-mini-r">replied in 47s</span></div>
      <div className="htv-mbub htv-mbub--in">Hi, do you install standing-seam metal roofs? Getting quotes.<span className="htv-mbub-t">2:14:06 PM</span></div>
      <div className="htv-mbub htv-mbub--out">Yes we do! I can have a rough range to you today. What&rsquo;s the address?<span className="htv-mbub-t">2:14:53 PM</span></div>
    </div>
  ),
  missed: (
    <div className="htv-mini">
      <div className="htv-mini-top"><span className="htv-mini-dot htv-mini-dot--alert" />Missed call · 12:38 PM<span className="htv-mini-r">texted back</span></div>
      <div className="htv-mbub htv-mbub--out">Hi! This is Summit — sorry we couldn&rsquo;t grab your call. How can we help?<span className="htv-mbub-t">12:38 PM</span></div>
      <div className="htv-mbub htv-mbub--in">Need a quote to replace some shingles<span className="htv-mbub-t">12:39 PM</span></div>
    </div>
  ),
  quote: (
    <div className="htv-mini">
      <div className="htv-qhead"><span className="htv-qco">Summit Roofing · Estimate</span><span className="htv-qst">Sent 2:31 PM</span></div>
      <div className="htv-qline"><span>Tear-off &amp; disposal</span><span>$1,150</span></div>
      <div className="htv-qline"><span>Architectural shingles (18 sq)</span><span>$4,320</span></div>
      <div className="htv-qline"><span>Underlayment &amp; flashing</span><span>$980</span></div>
      <div className="htv-qtotal"><span className="htv-qtotal-l">Estimate total</span><span className="htv-qtotal-a">$6,450</span></div>
    </div>
  ),
  booking: (
    <div className="htv-mini">
      <div className="htv-bk-head"><span className="htv-bk-m">Thu</span><span className="htv-bk-d">October 24</span></div>
      <div className="htv-bk-slots">
        <div className="htv-bk-slot htv-bk-slot--taken">8:00</div>
        <div className="htv-bk-slot htv-bk-slot--sel">9:00</div>
        <div className="htv-bk-slot">11:00</div>
      </div>
      <div className="htv-bk-conf">{CHECK}Confirmed — no phone tag needed</div>
    </div>
  ),
  reviews: (
    <div className="htv-mini">
      <div className="htv-rev-stars">★★★★★</div>
      <div className="htv-rev-quote">&ldquo;Answered me in minutes and did great work. Crew was on time and cleaned up after.&rdquo;</div>
      <div className="htv-rev-foot">
        <div className="htv-rev-ava">DL</div>
        <div className="htv-rev-name">Dana L.</div>
        <div className="htv-rev-src">Google · asked for you</div>
      </div>
    </div>
  ),
  winback: (
    <div className="htv-mini">
      <div className="htv-mini-top"><span className="htv-mini-dot" />Last job: 11 months ago<span className="htv-mini-r">re-engaged</span></div>
      <div className="htv-mbub htv-mbub--out">Hi Dana — it&rsquo;s about time for your annual roof check. Want us to swing by?<span className="htv-mbub-t">9:02 AM</span></div>
      <div className="htv-mbub htv-mbub--in">Oh good timing, yes! Same as last year works<span className="htv-mbub-t">9:20 AM</span></div>
    </div>
  ),
  invoice: (
    <div className="htv-mini">
      <div className="htv-tl">
        <div className="htv-tl-row"><span className="htv-tl-dot" />Day 7 · friendly check-in</div>
        <div className="htv-tl-row"><span className="htv-tl-dot" />Day 14 · pay link</div>
      </div>
      <div className="htv-paidchip">{CHECK}Paid · $4,800</div>
    </div>
  ),
  docs: (
    <div className="htv-mini">
      <div className="htv-ck-row htv-ck-row--done"><span className="htv-ck-box">{CHECK}</span><span className="htv-ck-name">W-2</span><span className="htv-ck-tag">received</span></div>
      <div className="htv-ck-row htv-ck-row--done"><span className="htv-ck-box">{CHECK}</span><span className="htv-ck-name">1099</span><span className="htv-ck-tag">received</span></div>
      <div className="htv-ck-row htv-ck-row--pending"><span className="htv-ck-box htv-ck-box--pending" /><span className="htv-ck-name">Receipts</span><span className="htv-ck-tag htv-ck-tag--amber">nudged this morning</span></div>
    </div>
  ),
  scoring: (
    <div className="htv-mini">
      <div className="htv-mini-top"><span className="htv-mini-dot" />Call scored<span className="htv-mini-r">coaching ready</span></div>
      <div className="htv-rubric">
        <div className="htv-rubric-row"><span className="htv-rubric-l">Discovery</span><span className="htv-rubric-bar"><i style={{ width: "88%" }} /></span><span className="htv-rubric-v">8.8</span></div>
        <div className="htv-rubric-row"><span className="htv-rubric-l">Next steps</span><span className="htv-rubric-bar"><i style={{ width: "92%" }} /></span><span className="htv-rubric-v">9.2</span></div>
        <div className="htv-rubric-row"><span className="htv-rubric-l">Pacing</span><span className="htv-rubric-bar"><i style={{ width: "74%" }} /></span><span className="htv-rubric-v">7.4</span></div>
      </div>
    </div>
  ),
  reviewmine: (
    <div className="htv-mini">
      <div className="htv-rev-stars">★★★★★</div>
      <div className="htv-rev-quote">&ldquo;The crew was friendly and <mark className="htv-hl">showed up right on time</mark> — couldn&rsquo;t be happier with the work.&rdquo;</div>
      <div className="htv-mine-foot"><span className="htv-mine-chip">→ use this everywhere</span></div>
    </div>
  ),
};

function OppTile({ id, title, body }: Tile) {
  return (
    <div className="htv-opp">
      {MICRO[id]}
      <h3>{title ?? OPP_IDEAS[id].title}</h3>
      <p>{body ?? OPP_IDEAS[id].body}</p>
    </div>
  );
}

function GroupCol({ group }: { group: Group }) {
  return (
    <div className="htv-opp-group">
      <span className="htv-opp-glabel" style={{ "--c": group.accent } as CSSProperties}>{group.label}</span>
      <div className="htv-opp-pair">
        {group.tiles.map((t) => (
          <OppTile key={t.id} {...t} />
        ))}
      </div>
    </div>
  );
}

export function Opportunity() {
  return (
    <section id="opps" className="htv-section">
      <div className="htv-wrap">
        <div className="htv-sec-head htv-center">
          <span className="htv-kicker">Where the upside lives</span>
          <h2>The growth is hiding in the everyday moments.</h2>
          <p>You don&rsquo;t need a new system or ten new tools. Just the everyday moments, handled well — and each one quietly adds up: more booked work, a lighter week, a sharper operation.</p>
        </div>

        <div className="htv-opp-groups">
          {GROUPS_PRIMARY.map((g) => (
            <GroupCol group={g} key={g.label} />
          ))}
        </div>

        <div className="htv-opp-groups htv-opp-groups--secondary">
          {GROUPS_SECONDARY.map((g) => (
            <GroupCol group={g} key={g.label} />
          ))}
        </div>

        <p className="htv-opp-more">
          Plus a dozen more — referrals, reactivation, intake, upsell…
        </p>
      </div>
    </section>
  );
}
