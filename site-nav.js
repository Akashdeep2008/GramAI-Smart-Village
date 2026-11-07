(() => {
  const sectors = [
    ['home', 'Home', 'index.html'],
    ['agriculture', 'Agriculture', 'agriculture/index.html'],
    ['water', 'Water', 'water/index.html'],
    ['health', 'Health', 'health/index.html'],
    ['education', 'Education', 'education/index.html'],
    ['infrastructure', 'Infrastructure', 'infrastructure/index.html']
  ];
  const path = decodeURI(location.pathname).replaceAll('\\', '/');
  const pageMatch = path.match(/\/(agriculture|water|health|education|infrastructure)\/(?:index\.html)?$/i);
  const base = pageMatch ? '..' : '.';
  const current = pageMatch ? pageMatch[1].toLowerCase() : 'home';
  const bar = document.createElement('div');
  bar.className = 'gramai-sitebar';
  bar.innerHTML = `<a class="sitebar-brand" href="${base}/index.html"><span class="sitebar-mark">G</span><span>GramAI<small>VILLAGE DEVELOPMENT HUB</small></span></a><nav class="sitebar-links" aria-label="GramAI sectors">${sectors.map(([key, label, href]) => `<a href="${base}/${href}"${key === current ? ' aria-current="page"' : ''}>${label}</a>`).join('')}</nav>`;
  document.body.classList.add('site-has-nav');
  document.body.prepend(bar);
})();
