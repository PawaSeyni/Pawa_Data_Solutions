import React from "react";
import { ArrowUpRight } from "lucide-react";
import { translations } from "@/components/translations";
import { ARTICLES, WRITING_INDEX } from "@/lib/writing";
import { trackCta } from "@/lib/analytics";

// Index only. Every card links out to the canonical article on papanguer.com and
// nothing here reproduces an article body — an excerpt plus a link is a normal
// index; a copy would be duplicate content competing with the original.
//
// Titles and excerpts stay in the language they were written in, across all four
// locales. The page chrome translates; the articles do not, because machine
// translating someone's prose and presenting it as their writing would be worse
// than leaving it in English.
export default function Blog({ language }) {
  const t = translations[language];
  const fmt = (iso) => {
    const map = { en: 'en-CA', fr: 'fr-CA', es: 'es-ES', pt: 'pt-BR' };
    return new Date(`${iso}T12:00:00Z`).toLocaleDateString(map[language] || 'en-CA', {
      year: 'numeric', month: 'long', day: 'numeric',
    });
  };

  return (
    <>
      <section className="bg-gradient-to-b from-blue-50/50 via-white to-white">
        <div className="max-w-4xl mx-auto px-4 py-20 lg:py-24">
          <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase mb-3">{t.blogEyebrow}</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-5 tracking-tight">{t.blogTitle}</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">{t.blogSubtitle}</p>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <ul className="list-none p-0 m-0 divide-y divide-gray-200 border-t border-gray-200">
            {ARTICLES.map((a) => (
              <li key={a.href}>
                <a
                  href={a.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackCta({ label: 'article', location: 'blog_index', page: 'Blog', language })}
                  className="group block py-7 transition-colors"
                >
                  <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500">
                    <time dateTime={a.date}>{fmt(a.date)}</time>
                    {a.readingTime && <span aria-hidden="true">·</span>}
                    {a.readingTime && <span>{a.readingTime}</span>}
                  </div>
                  <h2 className="mb-2 text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {a.title}
                  </h2>
                  <p className="mb-3 text-lg leading-relaxed text-gray-600">{a.excerpt}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600">
                    {t.blogReadOn}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <a
              href={WRITING_INDEX}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCta({ label: 'all_articles', location: 'blog_index', page: 'Blog', language })}
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-900 transition-colors hover:border-gray-900"
            >
              {t.blogAll}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
