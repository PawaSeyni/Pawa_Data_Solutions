// Custom event tracking on top of Plausible.
//
// Plausible alone answers "how many people came". These events answer the
// questions the site actually needs: which CTA they clicked, whether they
// started the form, and whether they finished it. Without that, every
// "launch by demand" decision is opinion.
//
// Deliberately calls window.plausible from the bundle rather than adding the
// inline queue stub Plausible's docs suggest. The stub exists to catch events
// fired before the deferred script loads; every event here is user-triggered,
// so the script is always up by then — and skipping it keeps the CSP at
// script-src 'self' https://plausible.io with no 'unsafe-inline'.
//
// Every call is guarded. plausible is absent during the build-time prerender
// (whose requests to plausible.io are blocked on purpose) and for anyone
// running a content blocker. Analytics must never be able to break the page.

/** Event names. Keep this list closed — a typo'd event is a silently lost funnel step. */
export const EVENTS = {
  CTA_CLICK: 'cta_click',
  CONTACT_START: 'contact_start',
  CONTACT_SUBMIT: 'contact_submit',
  CONTACT_ERROR: 'contact_error',
  APPLICATION_START: 'application_start',
  APPLICATION_SUBMIT: 'application_submit',
  // Fire only when a booking destination is configured (see lib/cta.js).
  // Declared here because EVENTS is a closed list and a name invented at the
  // call site is a silently lost funnel step.
  // Sprint 8 §15 — navigation and language.
  NAV_OPEN: 'nav_open',
  NAV_ITEM_CLICK: 'nav_item_click',
  LANGUAGE_CHANGE: 'language_change',
  PRACTICE_VIEW: 'practice_view',
  // Sprint 7 §8 — deep solution page funnel.
  SOLUTION_VIEW: 'solution_view',
  DEEP_SECTION_VIEW: 'deep_section_view',
  PROOF_VIEW: 'proof_view',
  INSIGHT_CLICK: 'insight_click',
  ENTRY_OFFER_CLICK: 'entry_offer_click',
  PRACTITIONER_CLICK: 'practitioner_click',
  CALENDAR_OPEN: 'calendar_open',
  CALENDAR_BOOK: 'calendar_book',
  SCROLL_50: 'scroll_50',
  SCROLL_90: 'scroll_90',
};

export function track(event, props = {}) {
  try {
    if (typeof window === 'undefined' || typeof window.plausible !== 'function') return;
    // Drop empty values so the props list in the dashboard stays readable.
    const clean = Object.fromEntries(
      Object.entries(props).filter(([, v]) => v !== undefined && v !== null && v !== ''),
    );
    window.plausible(event, { props: clean });
  } catch {
    // Never let a tracking failure surface to a visitor.
  }
}

/**
 * A CTA click. `location` is what makes this useful — the same label in the
 * hero and in the footer are different results, and averaging them hides which
 * placement actually works.
 */
export function trackCta({ label, location, page, language }) {
  track(EVENTS.CTA_CLICK, { label, location, page, language });
}

/**
 * Fires once per page view, on first interaction with a form. Paired with
 * contact_submit this gives an abandonment rate, which is the number that says
 * whether the form is too long.
 */
export function makeStartTracker(event, meta) {
  let fired = false;
  return () => {
    if (fired) return;
    fired = true;
    track(event, meta);
  };
}

/**
 * Scroll depth on a single page. Returns a cleanup function.
 * Passive listener, and detaches itself once 90% is reached so a long reading
 * session is not paying for a scroll handler it no longer needs.
 */
export function trackScrollDepth({ page, language }) {
  if (typeof window === 'undefined') return () => {};
  let hit50 = false;
  let hit90 = false;

  const onScroll = () => {
    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - window.innerHeight;
    if (scrollable <= 0) return;
    const pct = (window.scrollY / scrollable) * 100;

    if (!hit50 && pct >= 50) {
      hit50 = true;
      track(EVENTS.SCROLL_50, { page, language });
    }
    if (!hit90 && pct >= 90) {
      hit90 = true;
      track(EVENTS.SCROLL_90, { page, language });
      window.removeEventListener('scroll', onScroll);
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  return () => window.removeEventListener('scroll', onScroll);
}
