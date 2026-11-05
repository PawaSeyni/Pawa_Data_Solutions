// External on purpose: the site CSP has no 'unsafe-inline' on script-src.
(function () {
  var share = document.getElementById('share-linkedin');
  if (share) {
    share.href = 'https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(location.origin + location.pathname);
  }
  var form = document.getElementById('rsvp-form');
  if (form) {
    form.addEventListener('submit', function () {
      var btn = form.querySelector('button[type="submit"]');
      if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
    });
  }
})();
