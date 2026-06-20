"use client";

export function ContactForm() {
  return (
    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
      <label className="contact-field">
        <span className="mono contact-field-label">Your name</span>
        <input type="text" placeholder="Jordan Hill" />
      </label>
      <label className="contact-field">
        <span className="mono contact-field-label">Email</span>
        <input type="email" placeholder="you@yourbusiness.com" />
      </label>
      <label className="contact-field">
        <span className="mono contact-field-label">What kind of business?</span>
        <input type="text" placeholder="Auto shop · dental group · agency · …" />
      </label>
      <label className="contact-field">
        <span className="mono contact-field-label">What&apos;s on your mind?</span>
        <textarea rows={4} placeholder="The thing in your business that shouldn't still be manual…" />
      </label>
      <button type="submit" className="btn btn-primary contact-submit">
        Send it <span style={{ opacity: 0.6, fontSize: 11 }}>→</span>
      </button>
    </form>
  );
}
