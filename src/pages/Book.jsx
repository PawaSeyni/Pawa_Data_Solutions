import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { translations } from "@/components/translations";
import { bookBySlug } from "@/lib/writing";
import { SOLUTIONS } from "@/lib/solutions";
import { createPageUrl } from "@/utils";
import { prefixFor, parsePath } from "@/lib/i18n";
import { SITE_URL } from "@/lib/jobPostings";
import { trackCta } from "@/lib/analytics";

// One book. §5 asks that books and long-form IP get stronger treatment than an
// ordinary post, which here means a page of its own with cover, thesis, audience
// and purchase links rather than a card in a list.
//
// Book schema, not Article: this is a product with an ISBN, and describing it as
// an article would be wrong in the one place structured data is read literally.
export default function Book({ language }) {
  const t = translations[language];
  const { slug } = parsePath(useLocation().pathname);
  const book = bookBySlug(slug.replace(/^insights\/books\//, ''), language);

  if (!book) return null;

  const isbn = (book.meta.match(/ISBN\s+([\d-]+)/) || [])[1];
  const related = SOLUTIONS.filter((s) => (book.relatedSolutions || []).includes(s.page));

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: book.title,
    author: { '@type': 'Person', name: 'Papa S. Nguer', url: 'https://papanguer.com/' },
    description: book.description,
    ...(isbn ? { isbn } : {}),
    ...(book.cover ? { image: `${SITE_URL}${book.cover}` } : {}),
    url: `${SITE_URL}${prefixFor(language)}/insights/books/${book.slug}/`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-gradient-to-b from-blue-50/50 via-white to-white">
        <div className="max-w-4xl mx-auto px-4 py-16 lg:py-20">
          <Link
            to={createPageUrl('Insights', language)}
            onClick={() => window.scrollTo(0, 0)}
            className="mb-8 inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-blue-600"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {t.insightsEyebrow}
          </Link>

          <div className="sm:flex sm:gap-10">
            {book.cover && (
              <picture className="mb-8 block shrink-0 sm:mb-0">
                {book.coverWebp && <source srcSet={book.coverWebp} type="image/webp" />}
                <img
                  src={book.cover}
                  alt={book.title}
                  width="900"
                  height="1350"
                  className="h-72 w-auto rounded-lg shadow-lg"
                />
              </picture>
            )}

            <div className="self-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-600">
                {book.status === 'available' ? t.publicationsAvailable : t.publicationsForthcoming}
              </p>
              <h1 className="mb-3 text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">{book.title}</h1>
              <p className="mb-5 text-xl leading-relaxed text-gray-600">{book.subtitle}</p>
              <p className="text-sm text-gray-500">{book.meta}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">{t.bookThesis}</h2>
          <p className="mb-10 text-lg leading-relaxed text-gray-700">{book.thesis}</p>

          <h2 className="mb-3 text-2xl font-semibold text-gray-900">{t.bookAudience}</h2>
          <p className="mb-10 text-lg leading-relaxed text-gray-700">{book.audience}</p>

          <h2 className="mb-3 text-2xl font-semibold text-gray-900">{t.bookAbout}</h2>
          <p className="mb-4 text-lg leading-relaxed text-gray-700">{book.description}</p>
          {/* The book itself is in English. Our copy about it is translated, so a
              reader arriving in French would otherwise have no way to know that
              until it turned up. */}
          {language !== 'en' && (
            <p className="mb-10 rounded-lg border border-gray-200 bg-gray-50/60 p-4 text-sm text-gray-600">
              {t.bookLanguageNote}
            </p>
          )}

          <h2 className="mb-3 text-2xl font-semibold text-gray-900">{t.bookAuthor}</h2>
          <p className="mb-4 text-lg leading-relaxed text-gray-700">{t.bookAuthorBio}</p>
          <Link
            to={createPageUrl('About', language)}
            onClick={() => window.scrollTo(0, 0)}
            className="mb-10 inline-flex items-center gap-1.5 font-medium text-blue-600 hover:underline"
          >
            {t.teamFullProfile}
          </Link>

          {book.links.length > 0 ? (
            <div className="mb-10 rounded-xl border border-gray-200 bg-gray-50/60 p-7">
              <h2 className="mb-4 text-lg font-semibold text-gray-900">{t.bookWhereToBuy}</h2>
              <ul className="flex flex-wrap gap-3 list-none p-0 m-0">
                {book.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackCta({ label: `buy_${book.slug}`, location: 'book', page: 'Book', language })}
                      className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition-colors hover:bg-blue-700"
                    >
                      {l.label}
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="mb-10 rounded-xl border border-gray-200 bg-gray-50/60 p-7 text-gray-600">
              {t.bookForthcomingNote}
            </p>
          )}

          {related.length > 0 && (
            <>
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
                {t.caseStudyRelated}
              </h2>
              <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
                {related.map((r) => (
                  <li key={r.page}>
                    <Link
                      to={createPageUrl(r.page, language)}
                      onClick={() => window.scrollTo(0, 0)}
                      className="inline-block rounded-full border border-gray-300 px-4 py-1.5 text-sm text-gray-700 transition-colors hover:border-blue-500 hover:text-blue-600"
                    >
                      {t[r.titleKey]}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </section>
    </>
  );
}
