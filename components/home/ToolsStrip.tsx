const TOOLS = [
  { name: "QuickBooks", cat: "Accounting" }, { name: "Square", cat: "Payments" },
  { name: "Shopify", cat: "Commerce" }, { name: "Toast", cat: "Restaurants" },
  { name: "Stripe", cat: "Payments" }, { name: "Gmail", cat: "Email" },
  { name: "Outlook", cat: "Email" }, { name: "Calendly", cat: "Scheduling" },
  { name: "Slack", cat: "Comms" }, { name: "Notion", cat: "Docs" },
  { name: "HubSpot", cat: "CRM" }, { name: "Mailchimp", cat: "Marketing" },
  { name: "Zapier", cat: "Glue" }, { name: "Sheets", cat: "Spreadsheets" },
  { name: "Drive", cat: "Files" }, { name: "ChatGPT", cat: "AI" },
  { name: "Salesforce", cat: "CRM" }, { name: "Airtable", cat: "Database" },
  { name: "Excel", cat: "Spreadsheets" }, { name: "Klaviyo", cat: "Marketing" },
  { name: "Acuity", cat: "Scheduling" }, { name: "Jobber", cat: "Field service" },
  { name: "FreshBooks", cat: "Accounting" }, { name: "Microsoft 365", cat: "Workspace" },
];

export function ToolsStrip() {
  return (
    <section className="tools-studio">
      <div className="wrap">
        <header className="sec-overhead sec-overhead-dark">
          <div className="sec-marker mono">
            <span className="sec-num">§ 05</span>
            <span className="sec-name">Toolkit</span>
          </div>
          <h2 className="sec-h">
            We build with the tools you{" "}
            <span className="italic" style={{ color: "var(--accent)" }}>already pay for</span>.
          </h2>
          <div className="sec-sub">
            <p>
              You don&apos;t change your stack — we meet it where it is. A short list of what
              we work with daily; if it has an API or a login, we&apos;ll find a way.
            </p>
          </div>
        </header>
        <div className="tools-grid">
          {TOOLS.map((t, i) => (
            <div className="tool-cell" key={t.name} style={{ animationDelay: i * 40 + "ms" }}>
              <div className="tool-glyph">{t.name.slice(0, 2).toUpperCase()}</div>
              <div className="tool-name">{t.name}</div>
              <div className="tool-cat mono">{t.cat}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
