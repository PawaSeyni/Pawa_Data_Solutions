import { useEffect } from "react";
import { SITE_URL, getSeo } from "@/lib/seo";

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

export default function Seo({ pageName, language }) {
  useEffect(() => {
    const seo = getSeo(pageName);
    const url = SITE_URL + seo.path;

    document.title = seo.title;
    document.documentElement.lang = language || "en";

    setNamedMeta("description", seo.description);
    setRobots(seo.noindex);
    setPropMeta("og:title", seo.title);
    setPropMeta("og:description", seo.description);
    setPropMeta("og:url", url);
    setNamedMeta("twitter:title", seo.title);
    setNamedMeta("twitter:description", seo.description);
    setCanonical(url);
  }, [pageName, language]);

  return null;
}
