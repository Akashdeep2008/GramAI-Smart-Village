const learningStarts = {
  school: [
    ['DIKSHA', 'Digital learning materials for school education', 'https://pmevidya.education.gov.in/diksha.html'],
    ['ePathshala', 'NCERT textbooks and learning resources', 'https://epathshala.nic.in/epathshala.php?id=Students&ln=en'],
    ['Rashtriya e-Pustakalaya', 'Digital reading across subjects and ages', 'https://ndl.education.gov.in/']
  ],
  youth: [
    ['DIKSHA', 'Explore digital school-learning resources', 'https://pmevidya.education.gov.in/diksha.html'],
    ['NIOS', 'Check open-schooling programmes and official admission information', 'https://sdmis.nios.ac.in/'],
    ['SWAYAM', 'Browse courses and subjects for self-directed learning', 'https://swayam.gov.in/']
  ],
  higher: [
    ['SWAYAM', 'Browse online courses from participating institutions', 'https://swayam.gov.in/'],
    ['SWAYAM Plus', 'Explore industry-oriented and skill courses', 'https://swayamplus.education.gov.in/'],
    ['National Scholarship Portal', 'Check current schemes, eligibility and notices', 'https://scholarships.gov.in/Students']
  ],
  adult: [
    ['ULLAS', 'Find adult literacy and lifelong-learning information', 'https://ullas.education.gov.in/nilp'],
    ['Rashtriya e-Pustakalaya', 'Explore digital books and reading resources', 'https://ndl.education.gov.in/'],
    ['SWAYAM Plus', 'Explore courses for learners and working professionals', 'https://swayamplus.education.gov.in/']
  ],
  teacher: [
    ['DIKSHA', 'Explore teaching and school-learning resources', 'https://pmevidya.education.gov.in/diksha.html'],
    ['ULLAS', 'Learn about adult-literacy and volunteer-learning initiatives', 'https://ullas.education.gov.in/nilp'],
    ['Samagra Shiksha', 'Read about the school-education programme', 'https://samagra.education.gov.in/']
  ]
};

const learnerSelect = document.querySelector('#learner-select');
const finderResult = document.querySelector('#finder-result');
function renderStartingPoints() {
  finderResult.innerHTML = learningStarts[learnerSelect.value].map(([name, description, url], index) =>
    `<a href="${url}" target="_blank" rel="noopener"><span>0${index + 1}</span><strong>${name}</strong><small>${description}</small><b aria-hidden="true">↗</b></a>`
  ).join('');
}
learnerSelect.addEventListener('change', renderStartingPoints);
document.querySelectorAll('[data-preset]').forEach(link => link.addEventListener('click', () => {
  learnerSelect.value = link.dataset.preset;
  renderStartingPoints();
}));

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
renderStartingPoints();
