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

## Host topology

Netlify serves this site on more than one hostname. Worth knowing before
diagnosing "different versions of the site" again.

| Host | Serves | Indexable |
|---|---|---|
| `pawadata.com` | Current published deploy | Yes — the canonical host |
| `www.pawadata.com` | 301 to apex (DNS CNAME) | n/a |
| `pawa-data-solutions.netlify.app` | 301 to apex (netlify.toml) | No, since 2026-09-03 |
| `main--pawa-data-solutions.netlify.app` | 301 to apex (netlify.toml) | No, since 2026-09-03 |
| `<deploy-id>--pawa-data-solutions.netlify.app` | **That deploy, frozen forever** | No — Netlify sets `x-robots-tag: noindex` |

**The permalinks are the trap.** Every published deploy stays individually
reachable at its own URL and never updates. At the time of writing, 39 of them
are live, and the oldest returns "We can't find that page" for `/solutions/`
where production returns "Data Consulting Services". Anyone holding one — a
bookmark, a Slack link, an SEO tool configured months ago — is looking at a
frozen old site and will report that the site is broken or out of date.

They stay reachable on purpose: they are what makes rollback instant.

### What was investigated, 2026-09-03

Prompted by a report that different routes were serving different generations.
Production was consistent on every dimension tested: identical asset fingerprint
across 15 routes and 4 locales, one published deploy, HTML at
`max-age=0, must-revalidate`, all 14 historical URLs 301ing, dist and sitemap
matching 96↔96 with no orphans either way, live sitemap byte-identical to the
generated one, and no variation by user agent.

The two bare netlify.app hosts were a genuine finding — 200 on every page with no
`X-Robots-Tag` and a `robots.txt` saying `Allow: /`, so a fully indexable second
copy. They now 301.

That exposure turned out to be **theoretical, not live**: Search Console's
"Duplicate, Google chose different canonical" row on the `pawadata.com` property
was empty, meaning Google never preferred the duplicate. The canonical tags on
that host always pointed home, which is what Google weights most heavily.

Note for next time: Search Console cannot see the netlify.app host at all.
`pawadata.com` is verified as a **Domain property** (DNS TXT), which covers that
domain and its subdomains — `netlify.app` is a different registrable domain. And
the Page indexing report is UI-only; the API exposes Search Analytics, Sitemaps
and URL Inspection, nothing else.

## After a deploy is live

```bash
npm run indexnow
```

Submits URLs changed in the last two days to IndexNow — Bing, Yandex, Seznam,
Naver. `--all` re-seeds everything, `--dry-run` shows the plan, `--force`
resubmits URLs unchanged since the last run.

Before submitting it fetches every selected URL and refuses the whole run unless
each one returns 200, on the canonical host, with no redirect. A redirect here is
a sitemap bug rather than something to hand a crawler. `--dry-run` exits non-zero
when validation fails, so it can gate a release.

Each run appends to `docs/indexnow-log.jsonl`: timestamp, commit, Netlify deploy
id, window, count, response status, a SHA-256 of the submitted list, and the
url→lastmod map. That file is both the audit trail and the idempotency state — a
URL already submitted at its current lastmod is skipped unless `--force`.

Run it **after** confirming the deploy is live, never from `npm run build`. The
build finishes before the deploy is serving, so submitting there points crawlers
at URLs that are not up yet, and a failed deploy would have invited a crawl of
content that never shipped.

**Google is not part of IndexNow.** For Google the lever is the `<lastmod>` field
in the sitemap, which `scripts/gen-sitemap.mjs` derives from the git history of
each page's real content files. Google retired its ping endpoint in 2023 —
`https://www.google.com/ping?sitemap=…` now returns 404 — in favour of reading
exactly that field. A Search Console resubmit is a nudge on top; the accuracy of
`lastmod` is what actually drives recrawl.

The IndexNow key file in `public/` is public by design: fetching
`https://pawadata.com/<key>.txt` and finding the key inside is how domain
ownership is proved. It is not a secret. The script refuses to run if the file's
contents and filename disagree, since that mismatch fails verification silently.

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
