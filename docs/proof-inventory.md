# Proof inventory

Sprint 1 deliverable 4. What this site is allowed to claim, and on what basis.

This replaces the build-time approval gate that used to sit in
`scripts/check-case-studies.mjs`. Approval tracking belongs in a document a person
maintains, not in a script that blocks a deploy. The script now checks only the
two things the Sprint 1 brief actually names in §7: no bare numbers, and no
anonymised study that names its client.

Last reviewed: 2026-09-02 (Sprint 2)

---

## 1. Verified experience — publishable now

Source: the About page, already live and approved. Delivered at Informatica
(fifteen years, most recently Country Manager for Technical Sales in Canada),
before PaWa Data Solutions.

| Item | Basis | Publishable |
|---|---|---|
| 300+ customer-facing proving engagements, ~55/year, 60%+ success rate | Papa's own record | Yes — already on About |
| $93M+ influenced revenue over final four years | Papa's own record | Yes — already on About |
| Tier 1 institutions: JPMorgan Chase, PNC, CIBC, Scotiabank, Manulife, Sun Life, CN Rail, Air Canada, Bell Canada | Papa's own record | **Named list only, as background.** Never as PaWa client work, and never attached to a specific outcome |
| Domain depth: KYC/AML, entity resolution, MDM, governance, lineage, regulatory reporting | Papa's own record | Yes |
| Speaking: DAFS, CDAO Canada, road-shows with Deloitte, Accenture, Microsoft | Papa's own record | Yes |
| Author, *Winning the Moments That Matter* | Published, ASIN 1069628808 | Yes |
| SEN Yakaar Foundation co-founder and board member | Yes | Yes |

## 2. The three published case studies

All anonymised by sector. All carry the provenance note. **No quantitative
outcomes claimed in any of them.** This is what makes them publishable without
contacting anyone: no client is identifiable and no number is asserted.

| Slug | Sector | Client wording | Numbers |
|---|---|---|---|
| `entity-resolution-financial-crime` | Financial Services | A Tier 1 North American bank | none |
| `integration-platform-consolidation` | Data Platform & Integration | A North American insurer | none |
| `governance-regulatory-reporting` | Governance & Analytics | A Canadian financial institution | none |

## 3. Not approved — do not publish

- **Any named client of PaWa Data Solutions.** There are none yet.
- **Any testimonial or quote.** The site published fabricated ones in June 2026.
  Nothing goes in `quote` without a real person having actually said it.
- **Any metric attached to a case study**, until someone can say what was
  measured and over what period. The `metrics` field takes a `basis` for exactly
  this reason.
- **Partnership or certification claims** (Deloitte, Accenture, Microsoft
  appear as speaking venues, not as partnerships).

## 4. Anonymisation standard

- Sector plus region, never a name, never a detail that identifies (headcount,
  a distinctive product, a public incident).
- Consistent wording between the card, the index and the detail page.
- The check script fails the build if a study marked `anonymous` names an
  organisation.

## 5. When real PaWa engagements arrive

1. Add the entry with `provenance: 'pawa'` — the Informatica note disappears on its own.
2. Name the client only with written permission; otherwise keep `disclosure: 'anonymous'`.
3. Add numbers only with a `basis`. Record here who supplied them and when.
4. Update the "Last reviewed" date above.

## 6. People and trust assets (Sprint 2)

| Asset | State | Notes |
|---|---|---|
| Headshot | In place | `public/papa-nguer.jpg` + `.webp`, 400×400 |
| Personal LinkedIn | In place | Linked from the homepage people block and the Person schema |
| Credentials | Published | CISSP, TOGAF, Microsoft Azure, Informatica Certified, BSc Computer Science |
| Role history | Published | About page, sourced from Papa's own record |
| Team size | **One** | `src/lib/team.js` holds one entry. The site says so explicitly rather than implying a bench |

**Scale claims corrected this sprint.** The people block makes team size visible,
which turned two pieces of existing copy into contradictions:

- "A focused, senior team" → "Senior practitioners" (all four locales)
- "Contact our experts for a personalized consultation" → "Talk directly with the
  practitioner who would lead it" (all four locales)

**Differentiators: five, not four.** The brief's four pillars are all present
(Weeks Not Months, Built to Leave You Stronger, Governance-First, Senior
Hands-On Team). "End-to-End Expertise" was briefly dropped as over-claiming for a
one-person firm, then restored on Papa's call as a fifth item — it is a real
scope claim and the site was weaker without it.

If it is ever challenged, the supporting position is that the six solution pages
are all delivered by one senior practitioner rather than by separate teams, which
is the boutique argument rather than a contradiction of it.

## 7. Commercial claims on the Data Health Check (Sprint 4)

The Health Check page makes commitments the rest of the site does not. These are
the ones that bind, and **the pricing model needs Papa's sign-off** — the Sprint 4
brief itself says "price model if approved", and no price or model was supplied.

| Claim on the page | Status |
|---|---|
| Two to three weeks | Already published sitewide before this sprint |
| Runs remotely | Already published (Locations page) |
| Led by a senior practitioner, not a junior team | Consistent with Sprint 2 positioning |
| **Fixed price, agreed in writing before it starts** | **NEEDS SIGN-OFF — written by me, not supplied** |
| **Free 30-minute scoping call** | **NEEDS SIGN-OFF — written by me, not supplied** |
| NDA signed before any access | Standard, but confirm it is actually the practice |
| 3–6 people, ~1 hour each in week 1; 90-minute readout | Estimate written by me; adjust to reality |
| No obligation to continue afterwards | Consistent with existing copy ("whether or not you work with us") |
| No outcome guarantee | Deliberate — §7 forbids promising fixed outcomes |

No price figure appears anywhere on the page. If the fixed-price model is wrong,
the two flagged rows are the only copy to change (`hcFaq4A` in four locales).

## 8. Open items handed to the next sprint

Per §8 of the brief, recorded rather than silently deferred:

- **Case study body copy is English in all four locales.** Section labels,
  navigation and metadata are translated; the narrative is not. Same position as
  the Blog index. Needs a translation pass or a locale-aware fallback notice.
- **No PaWa-delivered engagements exist to publish.** The three studies are
  practitioner background. This is disclosed, but it is the real gap.
- **Client permission outreach drafted, unsent.** Would unlock named studies
  and quotes.
- **"Team" is one person.** Every component reads `src/lib/team.js` and lays out
  for its length, so adding people is a data change. If there are collaborators
  who should be listed, they are not recorded anywhere I could find.
- **Headshot is 400×400.** Adequate at the rendered size (128px) but there is no
  larger original in the repo if a bigger treatment is ever wanted.
- **Credentials are unverified from my side.** They were supplied directly and
  are published as given. No certificate numbers or issue dates are held.
- **Health Check pricing model is unapproved.** See section 7. The page states a
  fixed price agreed in writing and a free 30-minute scoping call; neither was
  supplied to me.
- **Historic contact-funnel data is wrong for non-home pages.** `page: 'Home'`
  was hardcoded in all three contact events, so every enquiry from a solution
  page, Workshop or Locations was attributed to the homepage. Fixed this sprint;
  data before 2026-09-02 cannot be corrected.
- **The example risk matrix is illustrative.** Labelled as such on the page. Its
  six sample findings are plausible generic examples, not anyone's real
  assessment.
