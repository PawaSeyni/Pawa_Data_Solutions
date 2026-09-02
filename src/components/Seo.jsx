import { useEffect } from "react";
import { SITE_URL, getSeo } from "@/lib/seo";
import { DEFAULT_LANGUAGE } from "@/lib/i18n";

// Keep one tag of each kind, creating it if the static index.html didn't ship it.
function setNamedMeta(name, content) {
  let el = document.head.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setPropMeta(property, content) {
  let el = document.head.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

// Only the 404 sets robots. This has to REMOVE the tag as well as add it: the
// SPA keeps one <head> across client-side navigation, so a noindex left behind
// by the 404 would silently de-index the next page the visitor clicks through to.
function setRobots(noindex) {
  const existing = document.head.querySelector('meta[name="robots"]');
  if (!noindex) {
    if (existing) existing.remove();
    return;
  }
  const el = existing || document.createElement("meta");
  el.setAttribute("name", "robots");
  el.setAttribute("content", "noindex, follow");
  if (!existing) document.head.appendChild(el);
}

// Reciprocal hreflang set. Rewritten wholesale on every route change rather than
// patched: a leftover alternate from the previous page would point Google at the
// wrong cluster, which is worse than having none at all.
//
// The set includes the current page itself and an x-default pointing at English,
// both of which Google requires — a cluster whose members do not all reference
// each other is discarded.
function setAlternates(alternates, noindex) {
  document.head
    .querySelectorAll('link[rel="alternate"][hreflang]')
    .forEach((el) => el.remove());

  // A noindex page has nothing to cluster with.
  if (noindex) return;

  const frag = document.createDocumentFragment();
  const add = (hreflang, path) => {
    const el = document.createElement("link");
    el.setAttribute("rel", "alternate");
    el.setAttribute("hreflang", hreflang);
    el.setAttribute("href", SITE_URL + path);
    frag.appendChild(el);
  };

  alternates.forEach(({ language, path }) => add(language, path));
  const fallback = alternates.find((a) => a.language === DEFAULT_LANGUAGE);
  if (fallback) add("x-default", fallback.path);

  document.head.appendChild(frag);
}

export default function Seo({ pageName, language }) {
  useEffect(() => {
    const seo = getSeo(pageName, language);
    const url = SITE_URL + seo.path;

    document.title = seo.title;
    document.documentElement.lang = language || DEFAULT_LANGUAGE;

    setNamedMeta("description", seo.description);
    setRobots(seo.noindex);
    setPropMeta("og:title", seo.title);
    setPropMeta("og:description", seo.description);
    setPropMeta("og:url", url);
    setPropMeta("og:locale", language || DEFAULT_LANGUAGE);
    setNamedMeta("twitter:title", seo.title);
    setNamedMeta("twitter:description", seo.description);
    setCanonical(url);
    setAlternates(seo.alternates, seo.noindex);
  }, [pageName, language]);

  return null;
}
