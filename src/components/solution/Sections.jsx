import { useEffect, useRef } from "react";
import { ArrowDown, ArrowRight, Check, ChevronDown } from "lucide-react";
import { track, EVENTS } from "@/lib/analytics";

// The reusable deep-page sections. Sprint 7 §8 component inventory.
//
// One file rather than fourteen: these are small presentational pieces that are
// only ever used together by DeepSolution.jsx, and splitting them would mean
// fourteen imports for no isolation benefit. ProofCard is separate because it
// carries the disclosure rule and is used off these pages too.

/** Wraps a section and reports deep_section_view once, on first sight. */
export function Section({ id, solution, language, className = '', children }) {
  const ref = useRef(null);
  const fired = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver((es) => {
      for (const e of es) {
        if (e.isIntersecting && !fired.current) {
          fired.current = true;
          track(EVENTS.DEEP_SECTION_VIEW, { solution, section: id, language });
          io.disconnect();
        }
      }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [id, solution, language]);
  return <section ref={ref} id={id} className={className}>{children}</section>;
}

export function SectionHead({ eyebrow, title, intro }) {
  return (
    <div className="mb-10 max-w-3xl">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">{eyebrow}</p>
      )}
      <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">{title}</h2>
      {intro && <p className="text-lg leading-relaxed text-gray-600">{intro}</p>}
    </div>
  );
}

/** 02 — recognition symptoms in buyer language. */
export function ProblemSignals({ items }) {
  return (
    <ul className="grid list-none gap-4 p-0 m-0 sm:grid-cols-2">
      {items.map((s) => (
        <li key={s} className="flex min-w-0 gap-3 rounded-lg border border-gray-200 bg-white p-5 leading-relaxed text-gray-700">
          <Check className="mt-1 h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
          <span className="min-w-0">{s}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * 03 — cause and effect. A vertical chain, not a decorative graphic: it reads as
 * an ordered list to a screen reader because that is what it is.
 */
export function ConsequenceFlow({ steps, note }) {
  return (
    <>
      <ol className="list-none p-0 m-0">
        {steps.map((s, i) => (
          <li key={s}>
            <div className="rounded-lg border border-gray-200 bg-white px-5 py-4 text-gray-800">{s}</div>
            {i < steps.length - 1 && (
              <div className="flex justify-center py-1.5" aria-hidden="true">
                <ArrowDown className="h-5 w-5 text-gray-400" />
              </div>
            )}
          </li>
        ))}
      </ol>
      {note && <p className="mt-6 max-w-3xl leading-relaxed text-gray-600">{note}</p>}
    </>
  );
}

/**
 * 04 — before/after. §12 requires this to stay readable on small screens, so it
 * is a real <table> at sm+ and stacked cards below, rather than a table forced
 * to scroll sideways.
 */
export function TransformationTable({ rows, beforeLabel, afterLabel }) {
  return (
    <>
      <table className="hidden w-full border-collapse text-left sm:table">
        <thead>
          <tr>
            <th scope="col" className="w-1/2 border-b border-gray-200 pb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
              {beforeLabel}
            </th>
            <th scope="col" className="w-1/2 border-b border-gray-200 pb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
              {afterLabel}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.before}>
              <td className="border-b border-gray-100 py-4 pr-6 align-top text-gray-500">{r.before}</td>
              <td className="border-b border-gray-100 py-4 align-top font-medium text-gray-900">{r.after}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <ul className="list-none space-y-4 p-0 m-0 sm:hidden">
        {rows.map((r) => (
          <li key={r.before} className="rounded-lg border border-gray-200 bg-white p-5">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-500">{beforeLabel}</p>
            <p className="mb-3 text-gray-500">{r.before}</p>
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-blue-600">{afterLabel}</p>
            <p className="font-medium text-gray-900">{r.after}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

/** 05 — mechanisms, not adjectives. */
export function CapabilityGrid({ items }) {
  return (
    <ul className="grid list-none gap-6 p-0 m-0 md:grid-cols-2">
      {items.map((c) => (
        <li key={c.title} className="rounded-xl border border-gray-200 bg-white p-6">
          <h3 className="mb-2 text-lg font-semibold text-gray-900">{c.title}</h3>
          <p className="leading-relaxed text-gray-600">{c.body}</p>
        </li>
      ))}
    </ul>
  );
}

/**
 * 06 — reference architecture. Built from DOM elements rather than an SVG or a
 * diagram library: §12 requires a readable mobile alternative and a text
 * equivalent, and the cheapest way to guarantee both is for the diagram to BE
 * text. It reflows to one column on a phone, and the description above it says
 * the same thing in a sentence.
 */
export function ReferenceArchitecture({ layers, crossCutting, crossCuttingLabel, description }) {
  // Six layers fit one desktop row at ~170px each and read fine. Seven do not:
  // measured on the Governance & MDM page, boxes fell to 96-135px and 14 of 26
  // items wrapped onto multiple lines. So past six, the flow wraps to a grid
  // instead of being squeezed.
  //
  // When it wraps, the arrows stop being true — the last box in a row does not
  // flow into the one below it visually — so the stages are numbered instead.
  // The number carries the order in both layouts, and it is an <ol> either way.
  const wraps = layers.length > 6;

  return (
    <>
      <p className="mb-8 max-w-3xl leading-relaxed text-gray-600">{description}</p>
      <div className="rounded-xl border border-gray-200 bg-gray-50/60 p-5 sm:p-7">
        <ol
          className={
            wraps
              ? 'grid list-none gap-3 p-0 m-0 sm:grid-cols-2 lg:grid-cols-4'
              : 'flex list-none flex-col gap-3 p-0 m-0 lg:flex-row lg:items-stretch'
          }
        >
          {/* The stage number is gray-500, not gray-400: it carries the ORDER of
              the flow, so it is content rather than decoration and has to meet
              AA. gray-400 on white is 2.54:1 against a 4.5 requirement, and it
              shipped that way on all six pages. */}
          {layers.map((l, i) => (
            <li key={l.name} className={wraps ? '' : 'flex flex-1 items-stretch gap-3'}>
              <div className="h-full flex-1 rounded-lg border border-gray-200 bg-white p-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
                  <span className="mr-1.5 text-gray-500 tabular-nums">{i + 1}</span>
                  {l.name}
                </p>
                <ul className="list-none space-y-1 p-0 m-0 text-sm text-gray-700">
                  {l.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
              </div>
              {!wraps && i < layers.length - 1 && (
                <div className="hidden shrink-0 items-center lg:flex" aria-hidden="true">
                  <ArrowRight className="h-5 w-5 text-gray-400" />
                </div>
              )}
            </li>
          ))}
        </ol>

        {/* §12A: governance is a horizontal control plane on every architecture,
            not a box in the middle of the flow. */}
        <div className="mt-4 rounded-lg border border-dashed border-blue-300 bg-blue-50/50 p-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-700">{crossCuttingLabel}</p>
          <p className="text-sm text-gray-700">{crossCutting.join(' \u00b7 ')}</p>
        </div>
      </div>
    </>
  );
}

/** 07 — tangible artifacts. */
export function DeliverablesGrid({ items }) {
  return (
    <ul className="grid list-none gap-3 p-0 m-0 sm:grid-cols-2">
      {items.map((d) => (
        <li key={d} className="flex min-w-0 gap-3 leading-relaxed text-gray-700">
          <Check className="mt-1 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
          <span className="min-w-0">{d}</span>
        </li>
      ))}
    </ul>
  );
}

/** 08 — discover / design / deliver / enable, service-specific. */
export function EngagementProcess({ steps }) {
  return (
    <ol className="grid list-none gap-6 p-0 m-0 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <li key={s.step}>
          <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700 tabular-nums">
            {i + 1}
          </span>
          <h3 className="mb-1.5 font-semibold text-gray-900">{s.step}</h3>
          <p className="text-sm leading-relaxed text-gray-600">{s.body}</p>
        </li>
      ))}
    </ol>
  );
}

/** 10 — categorised experience. §6: never rendered under a "Partners" heading. */
export function TechnologyExperience({ groups, note }) {
  return (
    <>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g) => (
          <div key={g.group}>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">{g.group}</h3>
            <ul className="list-none space-y-1.5 p-0 m-0 text-gray-700">
              {g.items.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
      {note && <p className="mt-8 max-w-3xl text-sm leading-relaxed text-gray-500">{note}</p>}
    </>
  );
}

/**
 * 13 — FAQ. Native <details>, so it is keyboard-operable and expandable without
 * JavaScript, and the prerendered HTML carries every answer whether or not a
 * crawler runs scripts.
 */
export function SolutionFAQ({ faqs }) {
  return (
    <div className="divide-y divide-gray-200 border-t border-gray-200">
      {faqs.map((f) => (
        <details key={f.q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-lg font-semibold text-gray-900">
            <span>{f.q}</span>
            <ChevronDown className="mt-1 h-5 w-5 shrink-0 text-gray-400 transition-transform group-open:rotate-180" aria-hidden="true" />
          </summary>
          <p className="mt-3 max-w-3xl leading-relaxed text-gray-600">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
