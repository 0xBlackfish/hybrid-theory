import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageCTA } from "@/components/PageCTA";
import { ArchiveList } from "@/components/ArchiveList";
import { ARCHIVE_ARTICLES } from "@/lib/posts";

export const metadata = {
  title: "Archive — Hybrid Theory",
};

export default function ArchivePage() {
  return (
    <>
      <SiteNav />
      <main className="stripe-blog">
        <section className="stripe-archive-hero">
          <div className="wrap">
            <Link href="/insights" className="mono stripe-archive-back">← Back to From the studio</Link>
            <h1 className="stripe-archive-h">Archive</h1>
            <div className="mono stripe-archive-meta">{ARCHIVE_ARTICLES.length} pieces · 2024 → present</div>
          </div>
        </section>

        <ArchiveList articles={ARCHIVE_ARTICLES} />

        <PageCTA
          title={<>Or talk to us directly — <span className="italic" style={{ color: "var(--accent)" }}>book a call</span>.</>}
          sub="A 30-minute conversation. No slides, no pitch."
        />
      </main>
      <SiteFooter />
    </>
  );
}
