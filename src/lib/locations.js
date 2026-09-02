// Where the firm works.
//
// Deliberately no street addresses or phone numbers. Toronto is the registered
// address and appears in the Organization schema and the privacy policy; the
// other three are stated as cities only, because that is what is known to be
// true. Inventing a suite number to make a page look substantial is the same
// failure mode as an invented case study.
//
// Region values match `areaServed` in index.html — North America, Africa,
// Europe — so the map of where the firm operates says the same thing in the
// copy, the schema, and the contact block.

export const LOCATIONS = [
  {
    id: 'toronto',
    city: 'Toronto',
    country: 'Canada',
    countryCode: 'CA',
    region: 'northAmerica',
    timezone: 'Eastern Time',
    languages: ['English', 'Français'],
    primary: true,
  },
  {
    id: 'washington',
    city: 'Washington, DC',
    country: 'United States',
    countryCode: 'US',
    region: 'northAmerica',
    timezone: 'Eastern Time',
    languages: ['English'],
  },
  {
    id: 'geneva',
    city: 'Geneva',
    country: 'Switzerland',
    countryCode: 'CH',
    region: 'europe',
    timezone: 'Central European Time',
    languages: ['Français', 'English'],
  },
  {
    id: 'dakar',
    city: 'Dakar',
    country: 'Senegal',
    countryCode: 'SN',
    region: 'africa',
    timezone: 'Greenwich Mean Time',
    languages: ['Français', 'English'],
  },
];

// Schema.org Place entries for the Organization block. addressLocality plus
// addressCountry is a complete PostalAddress — a street address is optional,
// and omitting one we do not have is better than fabricating it.
export const locationSchema = () =>
  LOCATIONS.map((l) => ({
    '@type': 'Place',
    name: `${l.city}, ${l.country}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: l.city.replace(/,.*$/, ''),
      addressCountry: l.countryCode,
    },
  }));
