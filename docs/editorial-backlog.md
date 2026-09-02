# Editorial backlog

Sprint 3 deliverable 5. Topics queued for Insights, not drafts.

Last reviewed: 2026-09-02

---

## How this section is divided

Two sites, two jobs, decided before this sprint and unchanged by it:

- **papanguer.com** publishes the essays. They are canonical there and syndicated
  to LinkedIn as full-text posts. Insights indexes them and links out.
- **pawadata.com** publishes **best practices**: reference artifacts with a
  checklist you can use during an engagement. Different object, different moment,
  no duplicate content.

Books sit on pawadata.com because they are the firm's long-form IP and §5 asks
that they get stronger treatment than an ordinary post.

## Why there are no best practices yet

§7 rules out generating content volume for its own sake. A best practice written
by someone who has not run the engagement is exactly that, and it would be
obvious to the buyer this site is trying to reach.

The template, routing, filtering, schema and sitemap wiring are all built and
tested. Adding an entry to `src/lib/bestPractices.js` makes its page, canonical,
hreflang, sitemap line and Insights filter appear on the next build. What is
missing is a practitioner writing one.

**The bar:** each one needs a named author, a real checklist, and pitfalls
observed in delivery rather than imagined.

## Queued topics

Drawn from the domain depth already published on the About page — KYC/AML, entity
resolution, MDM, governance, lineage, regulatory reporting — and from the three
case studies. These are the subjects where there is genuine experience to draw
on, which is the only reason they are on this list.

### Governance
1. **What a data owner is actually accountable for.** The RACI everyone writes
   and nobody follows, and the smaller version that works.
2. **Making a reported figure explainable.** Lineage from reporting layer back to
   source, and what an auditor asks next.
3. **Business glossary with one owner per term.** Why committee ownership fails.

### Integration
4. **Deciding which pipeline is authoritative.** A method for consolidations where
   three routes move the same data.
5. **Decommissioning as a delivery step.** Why the old pipeline keeps running, and
   how to make retirement someone's job.

### Analytics
6. **Definitional disagreement between business areas.** Surfacing it during the
   work rather than during a review.

### Automation
7. **What not to automate first.** Process automation candidates that look ideal
   and are not.

### AI readiness
8. **The data conditions that decide an AI project before it starts.** Entity
   resolution and lineage as prerequisites, not follow-ups.
9. **AI readiness assessment.** Deferred from the Sprint 1 redesign band pending
   Search Console query data.

## Article topics for papanguer.com

Recorded here only so the two pipelines stay visible in one place. These belong
on the personal site, not this one.

- Continuation of the Governance Crisis series (four published).
- The Seven Pillars series is separately scheduled through April 2027.

## Open items handed to the next sprint

Per §8, recorded rather than silently deferred:

- **No best practice has been written.** The type ships with zero entries.
- **Article body copy is not translated.** Titles and excerpts stay in the
  language they were written in across all four locales, and the page chrome
  translates around them. Machine-translating someone's prose and presenting it
  as their writing would be worse than leaving it in English.
- **Two of three books have no cover.** `winning-the-moments` uses the real cover
  from papanguer.com; the hardcover edition reuses it; *The Accountability Gap*
  has none and shows a text-only treatment rather than a mock-up.
- **Insights filter state is not in the URL.** Selecting "Books" does not produce
  a linkable URL. Fine for four types and eleven items; revisit if the section
  grows.
