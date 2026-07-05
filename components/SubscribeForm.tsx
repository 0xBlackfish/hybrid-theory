"use client";

import posthog from "posthog-js";

export function SubscribeForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = (e.currentTarget.elements[0] as HTMLInputElement).value;
    if (email) {
      posthog.identify(email, { email });
    }
    posthog.capture("newsletter_subscribed");
  }

  return (
    <form className="optd-hero-form" onSubmit={handleSubmit}>
      <input type="email" placeholder="you@yourdomain.com" />
      <button type="submit">
        Subscribe <span style={{ opacity: 0.6, fontSize: 12 }}>→</span>
      </button>
    </form>
  );
}
