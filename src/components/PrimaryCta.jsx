import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { translations } from "@/components/translations";
import { createPageUrl } from "@/utils";
import { CTA_PRIMARY } from "@/lib/cta";
import { trackCta } from "@/lib/analytics";

// The site's primary CTA, in one place.
//
// It was previously copy-pasted into seven pages, which is how one button ended
// up with eight tracking labels and how the copy could have drifted apart
// without anyone noticing. Now the label, the destination and the wording come
// from here; the caller supplies only where it sits.
//
// `page` is the page it was clicked FROM and `location` the section within it.
// Together they answer "which page and which placement converts", which the old
// label-encodes-everything scheme could not.
export default function PrimaryCta({ language, page, location, size = 'md', className = '' }) {
  const t = translations[language];
  const sizes = {
    md: 'px-6 py-3',
    lg: 'px-7 py-3.5 text-lg',
  };

  return (
    <Link
      to={createPageUrl('HealthCheck', language)}
      onClick={() => {
        trackCta({ label: CTA_PRIMARY, location, page, language });
        window.scrollTo(0, 0);
      }}
      className={`inline-flex items-center gap-2 rounded-lg bg-blue-600 font-medium text-white transition-colors hover:bg-blue-700 ${sizes[size]} ${className}`}
    >
      {t.heroCtaPrimary}
      <ArrowRight className={size === 'lg' ? 'h-5 w-5' : 'h-4 w-4'} aria-hidden="true" />
    </Link>
  );
}
