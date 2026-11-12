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
