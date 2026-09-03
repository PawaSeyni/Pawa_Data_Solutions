import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, BookOpen, FileText, ListChecks } from "lucide-react";
import { translations } from "@/components/translations";
import { ARTICLES, booksFor, WRITING_INDEX } from "@/lib/writing";
import { BEST_PRACTICES } from "@/lib/bestPractices";
import { prefixFor } from "@/lib/i18n";
import { trackCta } from "@/lib/analytics";

// Insights hub — Sprint 3's consolidation of /blog/ and /publications/.
//
// Filtering hides cards with the `hidden` attribute rather than unmounting them.
// Everything stays in the DOM, so the prerendered HTML carries every item and a
// crawler sees the whole section regardless of which tab is selected. This is
// the same lesson the Company dropdown taught: a conditional render is invisible
// to the build.
//
// Articles link out. They are canonical on papanguer.com and reproducing them
// here would put two of our own pages in competition for one query.
//
// These are toggle buttons, not tabs. role="tablist"/"tab" would promise a
// tabpanel and arrow-key navigation that do not exist here, and a screen reader
// would announce "tab 1 of 3" for what is really a filter. aria-pressed says
// exactly what these do.
const AUTHOR = 'Papa S. Nguer';

export default function Insights({ language }) {
  const t = translations[language];
  const [filter, setFilter] = useState('all');

  const fmt = (iso) => {
    const map = { en: 'en-CA', fr: 'fr-CA', es: 'es-ES', pt: 'pt-BR' };
    return new Date(`${iso}T12:00:00Z`).toLocaleDateString(map[language] || 'en-CA', {
      year: 'numeric', month: 'long', day: 'numeric',
    });
  };

  const items = useMemo(() => [
    ...BEST_PRACTICES.map((b) => ({
      key: `bp-${b.slug}`,
      type: 'practices',
      title: b.title,
      summary: b.purpose,
      author: b.author,
      date: b.updated || b.published,
      to: `${prefixFor(language)}/insights/best-practices/${b.slug}/`,
    })),
    ...ARTICLES.map((a) => ({
      key: `ar-${a.href}`,
      type: 'articles',
      title: a.title,
      summary: a.excerpt,
      author: AUTHOR,
      date: a.date,
      meta: a.readingTime,
      href: a.href,
    })),
    ...booksFor(language).map((b) => ({
      key: `bk-${b.slug}`,
      type: 'books',
      title: b.title,
      summary: b.thesis,
      author: AUTHOR,
      status: b.status,
      to: `${prefixFor(language)}/insights/books/${b.slug}/`,
    })),
  ], [language]);

  const TABS = [
    { id: 'all',       label: t.insightsFilterAll,       icon: null },
    { id: 'articles',  label: t.insightsFilterArticles,  icon: FileText },
    { id: 'practices', label: t.insightsFilterPractices, icon: ListChecks },
    { id: 'books',     label: t.insightsFilterBooks,     icon: BookOpen },
  ];

  const typeLabel = { articles: t.insightsFilterArticles, practices: t.insightsFilterPractices, books: t.insightsFilterBooks };
  // Localised too — the featured card shows the book's thesis, which is our copy.
  const featured = booksFor(language).find((b) => b.status === 'available');
  const counts = items.reduce((acc, i) => ({ ...acc, [i.type]: (acc[i.type] || 0) + 1 }), {});

  return (
    <>
      <section className="bg-gradient-to-b from-blue-50/50 via-white to-white">
        <div className="max-w-5xl mx-auto px-4 py-20 lg:py-24">
          <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase mb-3">{t.insightsEyebrow}</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-5 tracking-tight">{t.insightsTitle}</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">{t.insightsSubtitle}</p>
        </div>
      </section>

      {featured && (
        <section className="pb-4">
          <div className="max-w-5xl mx-auto px-4">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm sm:flex sm:gap-9">
              {featured.cover && (
                <Link
                  to={`${prefixFor(language)}/insights/books/${featured.slug}/`}
                  onClick={() => window.scrollTo(0, 0)}
                  className="mb-6 block shrink-0 sm:mb-0"
                >
                  <picture>
                    {featured.coverWebp && <source srcSet={featured.coverWebp} type="image/webp" />}
                    <img
                      src={featured.cover}
                      alt={featured.title}
                      width="900"
                      height="1350"
                      className="h-56 w-auto rounded-lg shadow-md"
                    />
                  </picture>
                </Link>
              )}
              <div className="self-center">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
                  {t.insightsFeatured}
                </p>
                <h2 className="mb-2 text-2xl font-bold text-gray-900">{featured.title}</h2>
                <p className="mb-4 text-lg leading-relaxed text-gray-600">{featured.thesis}</p>
                <p className="mb-5 text-sm text-gray-500">{featured.meta}</p>
                <Link
                  to={`${prefixFor(language)}/insights/books/${featured.slug}/`}
                  onClick={() => {
                    trackCta({ label: `featured_${featured.slug}`, location: 'insights', page: 'Insights', language });
                    window.scrollTo(0, 0);
                  }}
                  className="inline-flex items-center gap-2 font-medium text-blue-600 hover:underline"
                >
                  {t.insightsReadMore}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label={t.insightsFilterLabel}>
            {TABS.map(({ id, label, icon: Icon }) => {
              const n = id === 'all' ? items.length : counts[id] || 0;
              if (n === 0 && id !== 'all') return null;
              const active = filter === id;
              return (
                <button
                  key={id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(id)}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    active
                      ? 'border-blue-600 bg-blue-600 text-white'
                      : 'border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600'
                  }`}
                >
                  {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
                  {label}
                  <span className={active ? 'text-white' : 'text-gray-500'}>{n}</span>
                </button>
              );
            })}
          </div>

          <ul className="list-none p-0 m-0 divide-y divide-gray-200 border-t border-gray-200">
            {items.map((item) => {
              const body = (
                <>
                  <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                    <span className="rounded-full bg-gray-100 px-2.5 py-0.5 font-semibold uppercase tracking-wider text-gray-600">
                      {typeLabel[item.type]}
                    </span>
                    <span className="text-gray-500">{item.author}</span>
                    {item.date && <span className="text-gray-500">{fmt(item.date)}</span>}
                    {item.meta && <span className="text-gray-500">{item.meta}</span>}
                    {item.status === 'forthcoming' && (
                      <span className="text-gray-500">{t.publicationsForthcoming}</span>
                    )}
                  </div>
                  <h3 className="mb-1.5 text-xl font-semibold text-gray-900 group-hover:text-blue-600">
                    {item.title}
                  </h3>
                  {item.summary && <p className="text-gray-600 leading-relaxed">{item.summary}</p>}
                </>
              );

              return (
                <li key={item.key} hidden={filter !== 'all' && filter !== item.type}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackCta({ label: item.key, location: 'insights', page: 'Insights', language })}
                      className="group block py-7"
                    >
                      {body}
                      <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-blue-600">
                        {t.insightsReadOn}
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </a>
                  ) : (
                    <Link
                      to={item.to}
                      onClick={() => {
                        trackCta({ label: item.key, location: 'insights', page: 'Insights', language });
                        window.scrollTo(0, 0);
                      }}
                      className="group block py-7"
                    >
                      {body}
                      <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-blue-600">
                        {t.insightsReadMore}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          <p className="mt-10 text-sm text-gray-500">
            {t.insightsCanonicalNote}{' '}
            <a
              href={WRITING_INDEX}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCta({ label: 'writing_index', location: 'insights', page: 'Insights', language })}
              className="text-blue-600 hover:underline"
            >
              papanguer.com/writing
              <ArrowUpRight className="ml-1 inline h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
