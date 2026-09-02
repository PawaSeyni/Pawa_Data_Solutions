import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { createPageUrl } from "@/utils";
import { trackCta } from "@/lib/analytics";

// Company dropdown.
//
// Opens on CLICK rather than hover. A hover menu is unusable on touch, and it
// fires on every accidental pass of the cursor; click is also what lets the
// trigger carry a truthful aria-expanded.
//
// Keyboard contract: Enter/Space opens, Escape closes and returns focus to the
// trigger, Tab moves through the items and closes the menu when it leaves.
// A dropdown that traps focus or cannot be dismissed is worse than a flat list.
export default function CompanyMenu({ language, label, items, align = 'left' }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const onPointerDown = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    // Closes when focus leaves the menu entirely — covers tabbing out, which a
    // pointer-only handler misses and which is how keyboard users exit.
    const onFocusIn = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('focusin', onFocusIn);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('focusin', onFocusIn);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="relative" ref={wrapRef}>
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      {/* Always in the DOM, hidden with the `hidden` attribute rather than
          conditionally rendered. Conditional rendering kept these links out of
          the prerendered HTML entirely, so a crawler never saw them — and the
          whole point of prerendering this site was that crawlers see what
          visitors see. `hidden` also removes them from the tab order, so the
          keyboard behaviour is unchanged. */}
      <ul
        hidden={!open}
        className={`absolute top-full ${align === 'right' ? 'right-0' : 'left-0'} z-50 mt-2 w-60 list-none rounded-lg border border-gray-200 bg-white p-2 shadow-lg m-0`}
      >
          {items.map((item) => (
            <li key={item.id}>
              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackCta({ label: item.id, location: 'nav_company', page: 'any', language });
                    close();
                  }}
                  className="flex items-center justify-between gap-2 rounded-md px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-60" aria-hidden="true" />
                </a>
              ) : (
                <Link
                  to={createPageUrl(item.page, language)}
                  onClick={() => {
                    trackCta({ label: item.id, location: 'nav_company', page: 'any', language });
                    close();
                    window.scrollTo(0, 0);
                  }}
                  className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}
