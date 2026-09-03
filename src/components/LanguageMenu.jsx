import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Check, ChevronDown, Globe } from "lucide-react";
import { translations } from "@/components/translations";
import { LANGUAGES, prefixFor } from "@/lib/i18n";
import { track, EVENTS } from "@/lib/analytics";

const NAMES = { en: 'English', fr: 'Français', es: 'Español', pt: 'Português' };

// One language control instead of four always-visible buttons. Sprint 8 §3.
//
// The four buttons cost four of the header's finite first-level slots and,
// worse, three of them were permanently wrong for any given visitor. Collapsed
// to a single control that states the current language — which §5 requires to be
// exposed "programmatically and visually", so the trigger carries both the code
// and an aria-label naming the language in full.
//
// Destination is preserved: switching language keeps you on the page you were
// reading rather than returning you to the homepage.
export default function LanguageMenu({ language, currentSlug }) {
  const t = translations[language];
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') { setOpen(false); triggerRef.current?.focus(); }
    };
    const onOutside = (e) => { if (!wrapRef.current?.contains(e.target)) setOpen(false); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onOutside);
    document.addEventListener('focusin', onOutside);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onOutside);
      document.removeEventListener('focusin', onOutside);
    };
  }, [open]);

  const hrefFor = (lang) => {
    const rest = currentSlug ? `/${currentSlug}/` : '/';
    return `${prefixFor(lang)}${rest}`.replace(/\/{2,}/g, '/');
  };

  return (
    <div ref={wrapRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={`${t.navLanguageLabel}: ${NAMES[language]}`}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-blue-500 hover:text-blue-600"
      >
        <Globe className="h-4 w-4" aria-hidden="true" />
        <span className="uppercase">{language}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>

      {/* Always in the DOM, hidden with the `hidden` attribute — a conditional
          render is invisible to the build-time prerender, which is how the
          Company dropdown's links went missing from every static page once. */}
      <ul
        hidden={!open}
        className="absolute right-0 z-50 mt-2 w-44 list-none rounded-lg border border-gray-200 bg-white p-1 shadow-lg m-0"
      >
        {LANGUAGES.map((lang) => (
          <li key={lang}>
            <Link
              to={hrefFor(lang)}
              hrefLang={lang}
              lang={lang}
              aria-current={lang === language ? 'true' : undefined}
              onClick={() => {
                track(EVENTS.LANGUAGE_CHANGE, { from_language: language, to_language: lang, page: currentSlug || 'home' });
                setOpen(false);
              }}
              className="flex min-h-[44px] items-center justify-between rounded-md px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
            >
              {NAMES[lang]}
              {lang === language && <Check className="h-4 w-4 text-blue-600" aria-hidden="true" />}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
