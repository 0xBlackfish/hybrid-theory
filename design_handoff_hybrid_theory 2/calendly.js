/* eslint-disable */
// Calendly integration — popup booking.
// Loaded on every page. Any <a> / <button> whose text contains "Book a call"
// (or any element with data-calendly) opens the Calendly scheduler as a modal popup.
//
// PRODUCTION NOTE: the scheduling URL lives in one place below. To change it,
// edit CALENDLY_URL. The Calendly assets (widget.css + widget.js) are loaded
// from the page <head>.

const CALENDLY_URL = "https://calendly.com/hybridtheory/30min";

function openCalendly() {
  if (window.Calendly && typeof window.Calendly.initPopupWidget === "function") {
    window.Calendly.initPopupWidget({ url: CALENDLY_URL });
  } else {
    // Fallback if the script hasn't loaded yet — open in a new tab.
    window.open(CALENDLY_URL, "_blank", "noopener");
  }
  return false;
}

// Delegated click handler — catches every "Book a call" CTA across the site
// without needing to wire each button individually.
document.addEventListener("click", function (e) {
  const el = e.target.closest("a, button");
  if (!el) return;
  const isCalendly =
    el.hasAttribute("data-calendly") ||
    /book a call/i.test(el.textContent || "");
  if (isCalendly) {
    e.preventDefault();
    openCalendly();
  }
});

window.openCalendly = openCalendly;
