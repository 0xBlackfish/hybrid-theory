import type { ReactNode } from "react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { PageCTA } from "@/components/PageCTA";

interface AsideItem {
  label: string;
  val: string;
  sub: string;
}
interface ServiceEntry {
  id: string;
  num: string;
  kicker: string;
  tagline: string;
  title: ReactNode;
  desc: string;
  bullets: string[];
  aside: AsideItem[];
}

const SERVICES_PAGE: ServiceEntry[] = [
  {
    id: "automation",
    num: "01",
    kicker: "Automation & Custom Tools",
    tagline: "We build the things that take busywork off your week.",
    title: (
      <>We find the work eating your week, and <span className="italic" style={{ color: "var(--lime)" }}>build the thing</span> that does it for you.</>
    ),
    desc: "Most of what we ship sits in this category. Workflow automation, custom internal tools, AI agents that read inputs and act on them — usually shaped around a single business outcome the owner can describe in one sentence.",
    bullets: [
      "Multi-tool workflows (Calendly + Gmail + CRM + Sheets)",
      "Custom internal tools — quoters, schedulers, internal apps",
      "AI agents for inbound triage, drafting, classifying",
      "Documented, deployed, and yours to keep",
    ],
    aside: [
      { label: "Typical engagement", val: "Project", sub: "Scoped on one page · fixed fee · 3–8 weeks" },
      { label: "Cost shape", val: "Fixed fee", sub: "Includes build, docs, and 60-day warranty" },
      { label: "Best when", val: "You can describe the win in a sentence", sub: "\"I want photo-to-quote\" · \"missed calls into bookings\" · \"weekly product backlog from tickets\"" },
    ],
  },
  {
    id: "strategy",
    num: "02",
    kicker: "AI Strategy",
    tagline: "A 30-day audit that maps where AI actually pays back.",
    title: <>A roadmap, <span className="italic" style={{ color: "var(--amber)" }}>not a slide deck</span>.</>,
    desc: "A 30-day readiness audit that maps where AI actually pays back in your business — and a plan you can hand to anyone, including us. Concrete, specific, short enough to actually use.",
    bullets: [
      "Owner + key-staff interviews",
      "Stack + workflow inventory",
      "Opportunities ranked by payback, effort, and risk",
      "Quarter-by-quarter roadmap you can act on alone",
    ],
    aside: [
      { label: "Typical engagement", val: "30-day project", sub: "Discovery, inventory, opportunities, roadmap" },
      { label: "Cost shape", val: "Fixed fee", sub: "Includes the audit, the roadmap, and a 60-min handoff" },
      { label: "Best when", val: "You know AI matters but not what to do first", sub: "We help you separate hype from payback, then sequence the bets." },
    ],
  },
  {
    id: "training",
    num: "03",
    kicker: "Team Training",
    tagline: "Hands-on workshops, on your tools, with your data.",
    title: <>Your team, <span className="italic" style={{ color: "var(--cyan)" }}>confident with AI</span>, in an afternoon.</>,
    desc: "Hands-on workshops on the tools your team will actually use — with your data, in your voice. No generic ChatGPT primer; we end with them shipping work.",
    bullets: [
      "On-site or remote workshops",
      "Custom curriculum tuned to each role",
      "Voice + prompt libraries · yours to keep",
      "30 days of async support after the session",
    ],
    aside: [
      { label: "Typical engagement", val: "Half-day or 2-day", sub: "Single-team or whole-company formats" },
      { label: "Cost shape", val: "Fixed fee", sub: "Includes session, materials, and 30-day support" },
      { label: "Best when", val: "Your team is ready for more than \"I tried ChatGPT once\"", sub: "We help them build real, role-specific habits — with your data, in your voice." },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <SiteNav />
      <main>
        <PageHero
          pretitle="§ Services"
          title={<>Three ways we work <span className="italic" style={{ color: "var(--accent)" }}>with you</span>.</>}
          lead="Most clients pick one. Many end up using more than one over time — the shapes compose around your business."
        />

        {SERVICES_PAGE.map((s, i) => (
          <section id={s.id} className="svc-page-section" key={s.id}>
            <div className="wrap">
              <div className={"svc-page-spread " + (i % 2 === 1 ? "reverse" : "")}>
                <div>
                  <div className="svc-page-num">{s.num}</div>
                  <div className="mono svc-page-kicker">{s.kicker}</div>
                  <h2 className="svc-page-h">{s.title}</h2>
                  <p className="svc-page-desc">{s.desc}</p>
                  <ul className="svc-page-bullets">
                    {s.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                  <a href="#contact" data-calendly className="btn btn-primary">
                    Talk through this <span style={{ opacity: 0.6, fontSize: 11 }}>↗</span>
                  </a>
                </div>
                <aside className="svc-page-aside">
                  <div className="svc-page-aside-h">What an engagement looks like</div>
                  {s.aside.map((a, j) => (
                    <div className="svc-page-aside-block" key={j}>
                      <div className="svc-page-aside-label">{a.label}</div>
                      <div className="svc-page-aside-val">{a.val}</div>
                      <div className="svc-page-aside-sub">{a.sub}</div>
                    </div>
                  ))}
                </aside>
              </div>
            </div>
          </section>
        ))}

        <PageCTA
          title={<>Not sure which one fits? <span className="italic" style={{ color: "var(--accent)" }}>Just call.</span></>}
          sub="A 30-minute conversation where we listen and you talk. We'll point you in the right direction."
        />
      </main>
      <SiteFooter />
    </>
  );
}
