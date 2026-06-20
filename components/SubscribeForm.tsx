"use client";

export function SubscribeForm() {
  return (
    <form className="optd-hero-form" onSubmit={(e) => e.preventDefault()}>
      <input type="email" placeholder="you@yourdomain.com" />
      <button type="submit">
        Subscribe <span style={{ opacity: 0.6, fontSize: 12 }}>→</span>
      </button>
    </form>
  );
}
