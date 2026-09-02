# CTA hierarchy and tracking

Sprint 5 deliverable. The rules, and what the events mean.

Last reviewed: 2026-09-02

---

## What the audit found

One button was wearing **eight different tracking labels**:

```
health_check_primary   health_check_about   health_check_bp     health_check_book
health_check_locations health_check_hub     health_check_cases  health_check_case
```

Every one of them is "Book a Data Health Check". In Plausible you could not ask
how many people clicked the site's main CTA without summing eight rows and
knowing all eight existed. Meanwhile a `location` field already existed and was
carrying the same information, inconsistently (`about` vs `about_cta`).

The label says **what** was clicked. The location says **where**. Those are
different questions and one field was answering both.

## The hierarchy

| Tier | What it is | Rule |
|---|---|---|
| **Primary** | Book a Data Health Check | One per page. Never two different primaries. |
| **Secondary** | Moves the visitor on without converting — see the process, read a case study, browse solutions | Visually subordinate. Never styled as the primary. |
| **Tertiary** | Quiet links — LinkedIn, external articles, the writing index | Text links. |

Repeating the *same* primary at the top and bottom of a long page is not a
competing CTA — it is one action offered twice. Two *different* primary actions
on one page is what §5 rules out.

### By page type

| Page type | Primary | Notes |
|---|---|---|
| Home | Health Check (hero + contact section) | Same action twice, not two actions |
| Solution pages | Health Check, in the contact section | The entry engagement for every solution |
| Data Health Check | The form on the page | `showPrimary={false}` — a CTA to itself is a loop |
| About / Locations / Case studies / Best practices | Health Check, at page end | Single CTA, end of content |
| Insights, books, articles | **None** | A content hub converting is a different decision — see open items |
| Workshop | Health Check, in the contact section | See open items: the workshop is its own offer |
| Careers | Job application | Different funnel entirely |

## Implementation

`src/components/PrimaryCta.jsx` is the only place the primary CTA exists. Copy,
destination and tracking all come from it; callers pass `page` and `location`
only. It was previously copy-pasted into seven files, which is how the labels
drifted apart without anyone noticing.

`src/lib/cta.js` holds `CTA_PRIMARY`, the `CTA_LOCATIONS` values, and
`BOOKING_URL`.

## Events

| Event | Fires when | Props |
|---|---|---|
| `cta_click` | Any tracked CTA | `label`, `location`, `page`, `language` |
| `contact_start` | First interaction with the form | `page`, `language` |
| `contact_submit` | Successful submission | `page`, `language`, `role`, `timeline` |
| `contact_error` | Submission failed | `page`, `language` |
| `calendar_open` | Booking link opened | `page`, `location`, `language` |
| `calendar_book` | Booking confirmed | **Not yet wired — see below** |
| `scroll_50` / `scroll_90` | Scroll depth | `page`, `language` |

`page` is where the click happened. With `source` on the form (Sprint 4) and
`page` on every CTA, a conversion traces back to its landing page and service
context, which is §5's fourth criterion.

## The form

Fields, after this sprint:

| Field | Required | Why it is kept |
|---|---|---|
| Name | yes | — |
| Work email | yes | — |
| Company | no | — |
| Role | no | Routes the first reply |
| Timeline | no | Separates research from a live project |
| Main problem | yes | The one thing needed to reply usefully |
| What good looks like | no | Different from the problem, and the gap is the engagement |
| Preferred language | no | Four-locale site |
| `source` | hidden | Which page the enquiry came from |

**Phone was removed.** §7 rules out collecting fields sales will not use, it was
not in the brief's field list, and it was optional and largely unused.

**Netlify field registration.** `index.html` carries hidden static form
declarations that Netlify parses at deploy time. A field added to the React
component but not to that declaration is not a registered field. The two must
mirror each other — this was already out of step before this sprint (`source`
from Sprint 4 was never declared).

## Open items handed to the next sprint

Per §8, recorded rather than silently deferred:

- **No booking destination exists.** §6 lists one as a dependency. `BOOKING_URL`
  in `src/lib/cta.js` is `null`, so the "Book a call directly" affordance and
  `calendar_open` stay switched off. Setting it to a Calendly/Cal.com URL turns
  both on with no other change.
- **`calendar_book` cannot be wired from this site.** It fires inside the
  booking tool, so it needs that tool's webhook or embed callback. Declared in
  `EVENTS` so the name is fixed when someone implements it.
- **Workshop shows the Health Check as its primary CTA.** The workshop is its own
  offer with its own price; it arguably deserves its own primary. Left as-is
  because the Health Check is the stated entry engagement, but it is a real
  judgment call.
- **Insights has no CTA at all.** Deliberate for a content hub, but it is the one
  page a reader can reach and leave with no next step.
- **Historic `cta_click` data is not comparable across the label change.** Events
  before 2026-09-02 use the eight old labels; after, one. Any funnel report
  spanning the boundary needs both.
