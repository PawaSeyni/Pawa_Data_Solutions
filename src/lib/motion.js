// Smooth scrolling is motion too. The CSS media query cannot reach a JS-driven
// scroll, so this asks the same question before choosing a behaviour.
export function scrollToId(id) {
  const reduce = typeof window !== 'undefined'
    && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  document.getElementById(id)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
}
