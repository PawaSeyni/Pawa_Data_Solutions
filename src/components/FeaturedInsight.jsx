import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { translations } from "@/components/translations";
import { ARTICLES, booksFor } from "@/lib/writing";
import { prefixFor } from "@/lib/i18n";
import { track, EVENTS } from "@/lib/analytics";

// §6 section 07: one current article, best practice or book. One, not a grid —
// the point is to demonstrate thinking, and three cards of it on a homepage is a
// content index, which Insights already is.
export default function FeaturedInsight({ language }) {
  const t = translations[language];
  const prefix = prefixFor(language);
  const article = ARTICLES[0];
  const book = booksFor(language).find((b) => b.status === 'available');
  if (!article && !book) return null;

  return (
    <section className="border-b border-gray-100 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-8 text-sm font-semibold uppercase tracking-wider text-gray-500">
          {t.homeFeaturedInsightTitle}
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {article && (
            <a
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track(EVENTS.INSIGHT_CLICK, { content_type: 'article', topic: 'governance', source_page: 'Home', language })}
              className="group rounded-xl border border-gray-200 bg-white p-7 transition-colors hover:border-blue-300"
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                {t.insightsFilterArticles}
              </p>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 group-hover:text-blue-600">
                {article.title}
              </h3>
              <p className="mb-4 leading-relaxed text-gray-600">{article.excerpt}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600">
                {t.insightsReadOn}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </a>
          )}
          {book && (
            <Link
              to={`${prefix}/insights/books/${book.slug}/`}
              onClick={() => {
                track(EVENTS.INSIGHT_CLICK, { content_type: 'book', topic: 'selling', source_page: 'Home', language });
                window.scrollTo(0, 0);
              }}
              className="group flex gap-6 rounded-xl border border-gray-200 bg-white p-7 transition-colors hover:border-blue-300"
            >
              {book.cover && (
                <picture className="shrink-0">
                  {book.coverWebp && <source srcSet={book.coverWebp} type="image/webp" />}
                  <img src={book.cover} alt="" width="900" height="1350" loading="lazy" className="h-32 w-auto rounded shadow-sm" />
                </picture>
              )}
              <span>
                <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {t.insightsFilterBooks}
                </span>
                <span className="mb-2 block text-xl font-semibold text-gray-900 group-hover:text-blue-600">
                  {book.title}
                </span>
                <span className="mb-4 block leading-relaxed text-gray-600">{book.thesis}</span>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600">
                  {t.insightsReadMore}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
