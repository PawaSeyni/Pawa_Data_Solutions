# Proof inventory

Sprint 1 deliverable 4. What this site is allowed to claim, and on what basis.

This replaces the build-time approval gate that used to sit in
`scripts/check-case-studies.mjs`. Approval tracking belongs in a document a person
maintains, not in a script that blocks a deploy. The script now checks only the
two things the Sprint 1 brief actually names in §7: no bare numbers, and no
anonymised study that names its client.

Last reviewed: 2026-09-02

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

## 6. Open items handed to the next sprint

Per §8 of the brief, recorded rather than silently deferred:

- **Case study body copy is English in all four locales.** Section labels,
  navigation and metadata are translated; the narrative is not. Same position as
  the Blog index. Needs a translation pass or a locale-aware fallback notice.
- **No PaWa-delivered engagements exist to publish.** The three studies are
  practitioner background. This is disclosed, but it is the real gap.
- **Client permission outreach drafted, unsent.** Would unlock named studies
  and quotes.
