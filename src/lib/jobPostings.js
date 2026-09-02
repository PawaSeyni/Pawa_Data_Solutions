// Open roles, and the JobPosting structured data derived from them.
//
// The role list used to live inside OpenPositions.jsx. It lives here so the
// rendered cards and the schema Google reads come from ONE source — a schema
// that disagrees with the visible page is a Google policy violation, not just an
// inconsistency, and that is exactly what drift between two lists produces.
//
// MAINTENANCE — this is now a Google-facing feed, not just page copy:
//   * Remove a role from ROLES the moment it is filled or withdrawn. Google
//     requires expired postings to come down, and leaving stale jobs indexed
//     risks the site's eligibility for job results entirely.
//   * Keep `datePosted` truthful. It is the original date the role was posted,
//     not the date this file changed.
//   * `validThrough` makes a posting expire on its own, which is the safety net
//     for the point above. Past that date Google drops it automatically.

import { translations } from '@/components/translations';

export const SITE_URL = 'https://pawadata.com';

const HIRING_ORGANIZATION = {
  '@type': 'Organization',
  name: 'PaWa Data Solutions',
  sameAs: SITE_URL,
  logo: `${SITE_URL}/pawa-logo.png`,
};

// Toronto is the registered address; see the Organization block in index.html.
const TORONTO = {
  '@type': 'Place',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Toronto',
    addressRegion: 'ON',
    addressCountry: 'CA',
  },
};

// Roles hire across Canada and the US — matches "areaServed" in the site's
// Organization schema. Claiming worldwide remote hiring would not be true.
const APPLICANT_LOCATIONS = [
  { '@type': 'Country', name: 'CA' },
  { '@type': 'Country', name: 'US' },
];

// Dates for every posting. Deliberately two constants rather than per-role
// fields: these four roles were published together, and one place to edit is one
// place to forget.
//
// datePosted must be the date the roles were ORIGINALLY advertised, not the date
// this file last changed — Google treats it as the age of the opening and ranks
// stale postings down.
//
// validThrough is the safety net: past it, Google drops the posting on its own,
// so a role nobody remembers to delete expires instead of misleading applicants.
// Push it forward while the roles are genuinely open.
export const DATE_POSTED = '2026-09-01';
export const VALID_THROUGH = '2026-12-01';

export const ROLES = [
  {
    id: 'senior-data-engineer',
    titleKey: 'jobDataEngineerTitle',
    descKey: 'jobDataEngineerDesc',
    location: 'Toronto, ON / Remote',
    onSite: true,
    type: 'Contract/Full-time',
    level: 'Mid-Senior',
    skills: ['Python', 'SQL', 'Apache Spark', 'Kubernetes', 'AWS/Azure'],
  },
  {
    id: 'data-architect',
    titleKey: 'jobDataArchitectTitle',
    descKey: 'jobDataArchitectDesc',
    location: 'Toronto, ON / Remote',
    onSite: true,
    type: 'Contract/Full-time',
    level: 'Senior',
    skills: ['Data Architecture', 'Cloud Platforms', 'Data Governance', 'Leadership'],
  },
  {
    id: 'data-pipeline-specialist',
    titleKey: 'jobDataPipelineTitle',
    descKey: 'jobDataPipelineDesc',
    location: 'Remote',
    onSite: false,
    type: 'Contract/Full-time',
    level: 'Mid-Senior',
    skills: ['Informatica', 'Salesforce (SFDC)', 'ETL/ELT Design', 'SQL', 'Python', 'API Integration'],
  },
  {
    id: 'analytics-consultant',
    titleKey: 'jobAnalyticsConsultantTitle',
    descKey: 'jobAnalyticsConsultantDesc',
    location: 'Remote',
    onSite: false,
    type: 'Contract/Full-time',
    level: 'Mid-Senior',
    skills: ['Analytics', 'BI Tools', 'Client Management', 'Data Visualization'],
  },
];

// "Contract/Full-time" -> the enum values Google accepts.
function employmentTypes(type) {
  const map = { 'Contract': 'CONTRACTOR', 'Full-time': 'FULL_TIME', 'Part-time': 'PART_TIME' };
  return type.split('/').map((part) => map[part.trim()]).filter(Boolean);
}

// Google wants a complete description, and accepts HTML. The visible card text is
// a single sentence, so the skills list is folded in — it is real information
// about the role and it is on the page, which keeps schema and page consistent.
function descriptionHtml(role, t) {
  const summary = t[role.descKey] || translations.en[role.descKey];
  const skills = role.skills.join(', ');
  return `<p>${summary}</p><p><strong>Level:</strong> ${role.level}</p><p><strong>Skills:</strong> ${skills}</p>`;
}

/**
 * Build the JobPosting nodes for the Careers page.
 *
 * @param {object} opts
 * @param {string} opts.language   locale for title/description copy
 * @param {string} opts.datePosted ISO date the roles were originally posted
 * @param {string} opts.validThrough ISO date the postings expire
 * @param {string} opts.careersUrl absolute URL of the page carrying the postings
 */
export function buildJobPostings({ language, datePosted, validThrough, careersUrl }) {
  const t = translations[language] || translations.en;

  return ROLES.map((role) => {
    const node = {
      '@context': 'https://schema.org',
      '@type': 'JobPosting',
      title: t[role.titleKey] || translations.en[role.titleKey],
      description: descriptionHtml(role, t),
      identifier: {
        '@type': 'PropertyValue',
        name: 'PaWa Data Solutions',
        value: role.id,
      },
      datePosted,
      validThrough,
      employmentType: employmentTypes(role.type),
      hiringOrganization: HIRING_ORGANIZATION,
      // The application form is on this page, so applying never leaves the site.
      directApply: true,
      url: `${careersUrl}#application`,
      jobLocationType: 'TELECOMMUTE',
      applicantLocationRequirements: APPLICANT_LOCATIONS,
    };

    // Hybrid roles keep a physical jobLocation alongside TELECOMMUTE; fully
    // remote ones must NOT carry one, or Google reads them as on-site.
    if (role.onSite) node.jobLocation = TORONTO;

    return node;
  });
}
