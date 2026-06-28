const NICHES = [
  "Roofers",
  "Dentists",
  "Landscapers",
  "Med spas",
  "Realtors",
  "Accounting firms",
  "HVAC & plumbing",
  "Law practices",
  "Auto shops",
  "Contractors",
];

export function WhoFor() {
  return (
    <section id="who" className="htv-section htv-band">
      <div className="htv-wrap">
        <div className="htv-sec-head">
          <span className="htv-kicker">Who it&rsquo;s for</span>
          <h2>For owners who run real businesses.</h2>
          <p>
            If you grow by answering customers fast and doing great work, this was built for you. A
            few we know well &mdash; and the list keeps growing:
          </p>
        </div>
        <div className="htv-niches">
          {NICHES.map((n) => (
            <span className="htv-niche" key={n}>
              {n}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
