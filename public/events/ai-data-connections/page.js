// External on purpose: the site CSP has no 'unsafe-inline' on script-src.
(function () {
  var plausible = function (name) { if (window.plausible) window.plausible(name); };

  var form = document.getElementById('rsvp-form');
  if (form) {
    form.addEventListener('submit', function () {
      plausible('RSVP Submit');
      var btn = form.querySelector('button[type="submit"]');
      if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
    });
  }

  // The phone-only sticky RSVP bar hides once the form itself is on screen.
  var bar = document.getElementById('sticky-rsvp');
  var rsvp = document.getElementById('rsvp');
  if (bar && rsvp && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      bar.classList.toggle('is-hidden', entries[0].isIntersecting);
    }, { threshold: 0.15 }).observe(rsvp);
  }
})();
