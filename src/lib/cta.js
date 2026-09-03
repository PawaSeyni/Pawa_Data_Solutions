// CTA hierarchy and the booking destination. Sprint 5 deliverable 1.
//
// The audit that started this sprint found ONE button wearing eight different
// tracking labels: health_check_primary, _about, _bp, _book, _case, _cases,
// _hub, _locations. Every one of them is "Book a Data Health Check". In Plausible
// you could not ask how many people clicked the site's main CTA without summing
// eight rows and knowing to look for all eight.
//
// The fix is that the label says WHAT was clicked and the location says WHERE.
// Those are different questions and they were being answered by the same field.
//
// Hierarchy, applied by page type:
//   primary    Book a Data Health Check. One per page, never two.
//   secondary  Moves the visitor along without converting (see the process,
//              read a case study, browse solutions).
//   tertiary   Quiet links — LinkedIn, an external article, the writing index.
//
// §7 rules out generic phrasing ("Start Your Transformation"). The primary CTA
// names a specific engagement with a known duration, everywhere, in one string.

/** The one label for the site's primary conversion action. */
export const CTA_PRIMARY = 'health_check';

/**
 * Where a primary CTA sits. Passed as `location` so the same label can be
 * compared across placements — which is the question the old scheme made
 * impossible to ask.
 */
export const CTA_LOCATIONS = {
  HEADER: 'header',
  HERO: 'hero',
  PAGE_END: 'page_end',
  CONTACT: 'contact_section',
  HEALTH_CHECK: 'health_check_page',
};

/**
 * Booking destination for a live calendar (Calendly, Cal.com, whatever is
 * chosen). §6 lists it as a dependency and none exists yet, so this stays null
 * and every booking affordance is gated on it — no dead button, no link to a
 * page that isn't there.
 *
 * Setting this to a URL turns on the "Book a call" button in the contact
 * section, with calendar_open already instrumented. Nothing else to change.
 */
export const BOOKING_URL = null;

export const hasBooking = () => typeof BOOKING_URL === 'string' && BOOKING_URL.length > 0;
