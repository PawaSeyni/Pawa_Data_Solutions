import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { translations } from "@/components/translations";
import { PRACTICES } from "@/lib/practices";
import { prefixFor } from "@/lib/i18n";
import { track, EVENTS } from "@/lib/analytics";

// The Services mega-menu. Sprint 8 §3 and §5.
//
// Five practices plus the Data Health Check, one level deep, which is what makes
// "every practice reachable in two interactions or fewer" true.
//
// Keyboard contract from §5: Escape closes and returns focus to the trigger,
// outside pointerdown and focusin close it. Opened on click rather than hover —
// a hover menu is unusable on touch and hostile to anyone using a switch device
// or tracking a pointer imprecisely.
export default function ServicesMenu({ language, deviceType = 'desktop' }) {
  const t = translations[language];
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  const triggerRef = useRef(null);
  const prefix = prefixFor(language);

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

  const toggle = () => {
    setOpen((v) => {
      if (!v) track(EVENTS.NAV_OPEN, { menu: 'services', device_type: deviceType, language });
      return !v;
    });
  };

  const itemClick = (item) => {
    track(EVENTS.NAV_ITEM_CLICK, { item, parent_menu: 'services', device_type: deviceType, language });
    setOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div ref={wrapRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={toggle}
        className="inline-flex items-center gap-1 py-2 font-medium text-gray-700 transition-colors hover:text-blue-600"
      >
        {t.navServicesMenu}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>

      <div
        hidden={!open}
        className="absolute left-1/2 z-50 mt-2 w-[min(46rem,calc(100vw-2rem))] -translate-x-1/2 rounded-xl border border-gray-200 bg-white p-6 shadow-xl"
      >
        <p className="mb-5 text-sm text-gray-500">{t.navServicesIntro}</p>

        <ul className="grid list-none gap-1 p-0 m-0 sm:grid-cols-2">
          {PRACTICES.map((p) => (
            <li key={p.id}>
              <Link
                to={`${prefix}${p.href}`}
                onClick={() => itemClick(p.id)}
                className="block rounded-lg p-3 transition-colors hover:bg-gray-50"
              >
                <span className="block font-semibold text-gray-900">{t[p.labelKey]}</span>
                <span className="mt-0.5 block text-sm leading-relaxed text-gray-600">{t[p.capabilityKey]}</span>
              </Link>
              {/* Integration covers two pages. The second is surfaced here rather
                  than promoted to a sixth practice nobody asks for by name. */}
              {p.alsoHref && (
                <Link
                  to={`${prefix}${p.alsoHref}`}
                  onClick={() => itemClick(`${p.id}_also`)}
                  className="ml-3 mb-1 inline-block text-sm text-blue-600 hover:underline"
                >
                  {t[p.alsoKey]}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <Link
          to={`${prefix}/data-health-check/`}
          onClick={() => itemClick('health_check')}
          className="mt-4 flex items-center justify-between rounded-lg border border-blue-200 bg-blue-50/60 p-4 transition-colors hover:border-blue-400"
        >
          <span>
            <span className="block font-semibold text-gray-900">{t.hcTitle}</span>
            <span className="text-sm text-gray-600">{t.hcDuration}</span>
          </span>
          <ArrowRight className="h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
