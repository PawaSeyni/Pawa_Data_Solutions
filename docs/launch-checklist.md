# Launch checklist

Sprint 6 deliverable. Run before any launch, and after.

Last run: 2026-09-02 against production.

---

## The one command

```bash
npm run build && node scripts/qa-audit.mjs https://pawadata.com
```

`scripts/qa-audit.mjs` reads the sitemap and checks every URL for: HTTP status,
title (presence, length, uniqueness), meta description, self-referential
canonical, exactly one `<h1>`, heading order, the reciprocal hreflang set plus
x-default, `<html lang>` matching the path, `alt` on every image, stray
`noindex`, and labelled form controls. It then tests every redirect rule for
status, target and chaining, checks the 404 and robots.txt, and follows every
internal and external link.

It exits non-zero on failure, so it can gate a deploy.

## Build gates (run automatically, block the build)

| Gate | Catches |
|---|---|
| `check-case-studies.mjs` | A metric with no basis; an anonymised study naming a client |
| `check-page-names.mjs` | `createPageUrl('X')` where X is not a page — these render as silent links to `/` |
| `prerender.mjs` | Canonical/hreflang mismatch, missing `<html lang>`, any route that fails to render |

## Results, 2026-09-02

**SEO — 92 URLs, 0 failures.** Titles all ≤65 chars (longest 64), brand suffix
kept on 80 of 92 where it fits. All canonicals self-referential. Reciprocal
hreflang with x-default on every page. One `<h1>` each. No stray noindex.

**Redirects — 88 rules, all pass.** Correct status, correct target, no chains.
`/blog/` and `/publications/` both resolve to `/insights/` in one hop in all four
locales.

**Links — 36 internal, 42 external, 0 broken.** LinkedIn answers 999 to
non-browser clients; that is anti-bot behaviour, not a broken link, and the audit
skips it deliberately.

**Core Web Vitals — production.**

| Page | LCP | CLS | INP | Transfer |
|---|---|---|---|---|
| Home | 404 ms | 0 | — | 168 KB / 5 req |
| Insights | 188 ms | 0 | <16 ms | 53 KB / 15 req |

Targets are LCP <2.5 s, CLS <0.1, INP <200 ms. Met with an order of magnitude to
spare. LCP element is the `<h1>` — text, not an image — because the pages are
prerendered and the critical path carries no blocking image.

**Accessibility.** Contrast audited on rendered output rather than on the
palette; five AA failures found and fixed (see below). Focus rings verified with
real Tab presses. Reduced motion added. Mobile nav toggles `aria-expanded` and
swaps its `aria-label`; no horizontal scroll at 375 px.

**Analytics — verified in production.** A hero CTA click emits
`cta_click {label: health_check, location: hero, page: Home, language: en}`.

**Consent.** Plausible is cookieless and sets no first-party cookies —
`document.cookie` is empty on a fresh production load. No consent banner is
required, which is why there isn't one.

## Fixed during this sprint

1. **Footer "Blog" link pointed at the homepage on all 92 pages.** The page was
   renamed to Insights in Sprint 3; `createPageUrl` falls back to `/` for an
   unknown name without warning, so the link stayed valid-looking and returned
   200. Live for three sprints. Now a build gate.
2. **`service5Title` was untranslated in Portuguese** — "Analytics Enablement"
   where every other service is translated in all four locales. Found by the
   duplicate-title check.
3. **Five WCAG AA contrast failures**, all introduced in Sprints 3 and 5:
   `text-gray-400` on light backgrounds (2.54:1, needs 4.5) across the Insights
   meta, six solution eyebrows, the Company menu heading and the contact divider;
   and `text-blue-100` on `blue-600` (4.24:1) for the active filter count.
4. **No `prefers-reduced-motion` support anywhere.** 23 `transition-all` and
   Radix enter/exit animations ran regardless. Added a global block, plus
   `scrollToId()` because a JS `scrollIntoView({behavior:'smooth'})` cannot be
   reached by a CSS media query.
5. **Twelve titles over 65 characters.** `withBrand()` now appends the site name
   only when the result fits; the page's own headline is never truncated.
6. **Focus ring was the 1px UA default** at 50% opacity, easy to lose on the dark
   footer and on blue buttons. Replaced with a two-tone ring that works on any
   background.

## Rollback

Netlify keeps every deploy. To roll back: Deploys → the last known-good deploy →
**Publish deploy**. It is atomic and takes about ten seconds; no rebuild.

`_redirects` and `netlify.toml` ship with the deploy, so a rollback restores the
previous redirect and header state too. Nothing in this site holds server state,
so there is no data migration to reverse.

**One caveat.** Netlify form *submissions* are not versioned — they accumulate
against the form definition. Rolling back to a deploy whose `index.html` declared
different fields changes which fields are registered going forward; it does not
alter submissions already received.

## Still open

- **No booking destination.** `BOOKING_URL` is `null`, so `calendar_open` and
  `calendar_book` never fire. Sprint 5 dependency, unresolved.
- **Health Check pricing model is unapproved.** See `proof-inventory.md` §7.
- **37 duplicate title/description warnings across locales.** Case study and book
  content is English in all four locales by decision; hreflang marks them as
  locale variants. Expected, not a defect, and it will not clear until that
  content is translated.
- **Main JS bundle is 542 KB (175 KB gzipped)** and over Vite's warning
  threshold. It does not currently hurt LCP because pages are prerendered, but it
  is the next performance item worth real work.
- **INP measured at the low end only.** No page here has a heavy interaction to
  stress; the number is honest but not a hard case.
