import { useEffect, useRef } from "react";
import { Info } from "lucide-react";
import { translations } from "@/components/translations";
import { disclosureKeyFor, canClaimOutcome, PROOF_TYPES } from "@/lib/proof";
import { track, EVENTS } from "@/lib/analytics";

// A proof object with its disclosure attached. Sprint 7 §6.
//
// The disclosure is not a prop the caller can forget: it is derived from
// proofType, and a card whose type is unrecognised renders nothing rather than
// rendering unlabelled. An unlabelled proof card is how this site published six
// fabricated client results.
//
// `outcome` is refused for a representative pattern. That is the guardrail §6
// asks for — "may explain scope and deliverables, but may not imply achieved
// customer results" — enforced here rather than trusted to whoever writes copy.
// The old cards paired a percentage with a green upward arrow, and the arrow was
// doing as much work as the number.
export default function ProofCard({ language, proofType, title, body, outcome, solution }) {
  const t = translations[language];
  const disclosureKey = disclosureKeyFor(proofType);
  const ref = useRef(null);
  const fired = useRef(false);

  // proof_view (§8): fires once, when the card is actually seen.
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting && !fired.current) {
          fired.current = true;
          track(EVENTS.PROOF_VIEW, { solution, proof_type: proofType, language });
          io.disconnect();
        }
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [solution, proofType, language]);

  if (!disclosureKey) return null;

  return (
    <div ref={ref} className="rounded-xl border border-gray-200 bg-white p-7 shadow-sm">
      <h3 className="mb-3 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mb-5 leading-relaxed text-gray-600">{body}</p>

      {/* Deliverables, not results. Neutral treatment on purpose — no green, no
          upward arrow, nothing that reads as a measured gain. */}
      {outcome && proofType === PROOF_TYPES.REPRESENTATIVE && (
        <p className="mb-5 border-l-2 border-gray-300 pl-4 text-sm leading-relaxed text-gray-700">
          {outcome}
        </p>
      )}
      {outcome && canClaimOutcome(proofType) && (
        <p className="mb-5 text-lg font-semibold text-gray-900">{outcome}</p>
      )}

      <p className="flex gap-2 text-xs leading-relaxed text-gray-500">
        <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        <span>{t[disclosureKey]}</span>
      </p>
    </div>
  );
}
