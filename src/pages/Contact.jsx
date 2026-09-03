import { Mail, MapPin } from "lucide-react";
import { translations } from "@/components/translations";
import ContactForm from "@/components/ContactForm";

// The qualification form's home. Sprint 8 §6 removes it from the homepage and
// §10 keeps it here: "Contact page: retain qualification form with only fields
// that will be used."
//
// The homepage previously ended in a full seven-field form, which competed with
// the Health Check as a second primary conversion. Moving it here leaves the
// homepage with one dominant action and gives people who already know they want
// to talk a destination they can link to and return to.
//
// Email and location are utility contact methods (§10), so they sit quietly
// above the form rather than as competing hero actions.
export default function Contact({ language }) {
  const t = translations[language];

  return (
    <>
      <section className="bg-gradient-to-b from-blue-50/50 via-white to-white">
        <div className="mx-auto max-w-4xl px-4 py-20 lg:py-24">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            {t.contactPageEyebrow}
          </p>
          <h1 className="mb-5 text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
            {t.contactPageTitle}
          </h1>
          <p className="max-w-3xl text-xl leading-relaxed text-gray-600">
            {t.contactPageSubtitle}
          </p>

          <ul className="mt-10 flex flex-wrap gap-x-10 gap-y-4 list-none p-0 m-0">
            <li className="flex items-center gap-2.5 text-gray-700">
              <Mail className="h-5 w-5 text-blue-600" aria-hidden="true" />
              <a href="mailto:hello@pawadata.com" className="hover:text-blue-600 hover:underline">
                hello@pawadata.com
              </a>
            </li>
            <li className="flex items-center gap-2.5 text-gray-700">
              <MapPin className="h-5 w-5 text-blue-600" aria-hidden="true" />
              <span>{t.contactInfoLocationValue}</span>
            </li>
          </ul>
        </div>
      </section>

      <ContactForm
        source="Contact"
        title={t.contactFormTitle}
        description={t.contactPageSubtitle}
        language={language}
        showPrimary={false}
      />
    </>
  );
}
