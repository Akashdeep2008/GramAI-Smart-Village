const issueForm = document.querySelector('#issue-form');
const reportOutput = document.querySelector('#report-output');
issueForm.addEventListener('submit', event => {
  event.preventDefault();
  const asset = document.querySelector('#asset-type').value;
  const location = document.querySelector('#issue-location').value.trim();
  const details = document.querySelector('#issue-details').value.trim();
  const date = new Intl.DateTimeFormat('en-IN', {dateStyle:'medium'}).format(new Date());
  const draft = `COMMUNITY INFRASTRUCTURE NOTE\nDate observed: ${date}\nAsset: ${asset}\nPublic location: ${location}\nObservation: ${details}\n\nPlease inspect and advise on the appropriate next step.`;
  reportOutput.replaceChildren();
  const text = document.createElement('pre');
  text.textContent = draft;
  reportOutput.append(text);
  const copyButton = document.createElement('button');
  copyButton.type = 'button';
  copyButton.className = 'copy-note-button';
  copyButton.textContent = 'Copy note';
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(draft);
      copyButton.textContent = 'Copied';
    } catch {
      copyButton.textContent = 'Select and copy the note above';
    }
  });
  reportOutput.append(copyButton);
  reportOutput.hidden = false;
  reportOutput.scrollIntoView({behavior:'smooth', block:'nearest'});
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
