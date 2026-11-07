const rainForm = document.querySelector('#rain-form');
rainForm.addEventListener('submit', event => {
  event.preventDefault();
  const area = Number(document.querySelector('#roof-area').value);
  const rainfall = Number(document.querySelector('#rainfall').value);
  const factor = Number(document.querySelector('#roof-type').value);
  const output = document.querySelector('#rain-result');
  if (!Number.isFinite(area) || !Number.isFinite(rainfall) || area <= 0 || rainfall <= 0) {
    output.textContent = 'Enter positive roof area and rainfall values.';
    return;
  }
  const litres = area * rainfall * factor;
  output.innerHTML = `<strong>Estimated seasonal runoff: ${Math.round(litres).toLocaleString('en-IN')} litres</strong><span>This is a rough estimate using a ${factor.toFixed(1)} runoff factor. Actual captured water will be lower.</span>`;
});

const menuToggle = document.querySelector('#menu-toggle');
menuToggle.addEventListener('click', () => {
  const nav = document.querySelector('#main-nav');
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', () => {
  document.querySelector('#main-nav').classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#language-button').addEventListener('click', () => alert('This student prototype is currently in English. More languages can be added in a future version.'));
