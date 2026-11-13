(function () {
  var btn = document.querySelector('.burger');
  var panel = document.getElementById('mobile-menu');
  if (!btn || !panel) return;
  btn.addEventListener('click', function () {
    var open = panel.hasAttribute('hidden');
    if (open) { panel.removeAttribute('hidden'); } else { panel.setAttribute('hidden', ''); }
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  panel.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { panel.setAttribute('hidden', ''); btn.setAttribute('aria-expanded', 'false'); }
  });
})();

// Kit forms: submit in the background and show the thank you message
(function () {
  document.querySelectorAll('form[data-kit-form]').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = f.querySelector('button');
      btn.disabled = true; btn.textContent = 'Sending…';
      fetch(f.action, { method: 'POST', body: new FormData(f), mode: 'no-cors' })
        .then(function () {
          f.hidden = true;
          var t = f.parentNode.querySelector('.news-thanks, .sq-thanks');
          if (t) t.hidden = false;
        })
        .catch(function () { f.submit(); });
    });
  });
})();
