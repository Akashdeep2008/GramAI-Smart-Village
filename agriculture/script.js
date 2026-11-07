const familyCare = {
  cereal: {routine:'Check crop stand, weeds, leaf colour and field drainage each day. Record rainfall and any patch of plants changing colour.', water:'Keep moisture suited to the crop stage; avoid prolonged waterlogging. Rice water management differs by system, so follow local extension guidance.', nutrition:'Base fertilizer on a soil test and local package of practices. Split applications at recommended growth stages; avoid adding nitrogen just because leaves look pale.', action:'Compare affected and healthy plants, inspect several spots, and ask the local KVK before applying a pesticide or changing fertilizer.'},
  pulse: {routine:'Check plant stand, weeds, leaf undersides, flowers and pods. Note rainfall and remove severely diseased residues where practical.', water:'Avoid waterlogging. Moisture is especially important around flowering and pod formation; rainfed schedules vary by soil and rainfall.', nutrition:'Use crop-specific soil-test advice. Pulses can fix nitrogen with effective nodulation, but phosphorus, sulphur and micronutrients still depend on soil and local recommendations.', action:'Inspect for symptoms and beneficial insects first. Confirm pest or disease identity with a KVK before treatment.'},
  oilseed: {routine:'Inspect seedlings, leaf undersides, flowering heads or pods, weeds and drainage. Keep notes on patches and spread.', water:'Maintain suitable moisture during establishment and key flowering or seed-fill stages; avoid standing water. Adjust to rainfall and soil texture.', nutrition:'Use a soil test and crop-specific local recommendations. Do not copy a fertilizer dose from another crop or region.', action:'Remove badly affected plant parts where appropriate, preserve beneficial insects, and get local confirmation before any spray.'},
  cane: {routine:'Check emergence, gaps, weeds, stalks and drainage. Look for borer entry holes or abnormal drying and record where they occur.', water:'Sugarcane needs planned moisture over its long growth period, but irrigation interval depends on soil, season and rainfall. Keep drainage working.', nutrition:'Use soil-test and state agricultural university guidance, with timing matched to the crop stage. Avoid unverified high doses.', action:'Inspect stalks and nearby plants; use locally recommended integrated management after confirming the problem.'},
  vegetable: {routine:'Inspect new growth and the underside of leaves, check for wilt, spots, insects and damaged fruit. Harvest ripe produce regularly and keep tools clean.', water:'Aim for even root-zone moisture; avoid both drought swings and waterlogged roots. Water near the soil rather than wetting foliage when feasible.', nutrition:'Use soil-test guidance and crop-stage recommendations. Compost improves soil structure, but it does not replace a balanced nutrient plan.', action:'Remove fallen or clearly diseased plant debris, avoid handling wet plants, and confirm the cause before treatment.'},
  cucurbit: {routine:'Check vine growth, leaf undersides, flowers and young fruits. Look for wilt, powdery patches, fruit damage and pollinator activity.', water:'Maintain steady moisture around roots, especially during flowering and fruit growth; prevent waterlogging and avoid frequent wetting of leaves.', nutrition:'Follow soil-test and locally recommended split feeding. Avoid excessive nitrogen if vines grow lush but set few fruits.', action:'Remove rotting fruit, inspect for fruit flies and disease spread, and seek crop-specific local advice before spraying.'},
  leafy: {routine:'Check leaf colour, underside, moisture and harvest readiness. Keep beds clean and harvest at the recommended stage.', water:'Leafy crops often need consistent shallow-root moisture. Check soil frequently; do not let beds stay saturated.', nutrition:'Use mature compost and soil-test-based nutrient advice. Follow the local safe interval and label directions for any input used on edible leaves.', action:'Remove damaged leaves, improve airflow and confirm disease before using any control product.'},
  root: {routine:'Check soil surface, leaves, cracking and root shoulders. Keep the bed weed-free and avoid injuring roots during cultivation.', water:'Keep moisture reasonably even while roots enlarge; large wet-dry swings can affect root quality. Ensure excess water drains away.', nutrition:'Use a soil test and crop-specific guidance. Avoid excessive nitrogen where it causes leafy growth at the expense of root development.', action:'Check whether symptoms are in roots, leaves or both; get local identification before applying a treatment.'},
  orchard: {routine:'Inspect leaves, young shoots, flowers and fruit; check trunk and the area around the tree. Note whether damage is isolated or spreading.', water:'Water the active root zone based on soil moisture, tree age, rainfall and season. Mulch can conserve moisture; keep drainage clear and avoid a fixed daily schedule.', nutrition:'Use a soil test and local horticulture recommendations based on tree age and bearing stage. Do not apply fertilizer against the trunk.', action:'Remove fallen diseased fruit where practical, keep a photo and date record, and confirm the cause with a horticulture officer or KVK.'},
  citrus: {routine:'Inspect new flush, leaf undersides, branches and fruit. Check for curling, miner trails, sticky residue or uneven decline.', water:'Keep the root zone evenly moist during establishment and fruit development; avoid waterlogging. Adjust irrigation for rainfall and soil.', nutrition:'Use soil and leaf-test guidance where available; citrus nutrient needs vary with tree age, crop load and soil. Avoid guessing micronutrient doses.', action:'Use clean tools and remove affected material only as advised. Ask a local horticulture expert to distinguish nutrient issues from disease.'},
  banana: {routine:'Check leaf condition, pseudostem, drainage and bunch development. Remove dry leaves carefully and monitor for abnormal wilting.', water:'Banana has relatively high moisture needs, but roots are damaged by waterlogging. Use frequent, measured irrigation according to soil, weather and local guidance.', nutrition:'Follow soil-test and state horticulture recommendations by plant age and crop cycle; avoid applying fertilizer in contact with the pseudostem.', action:'Check drainage and inspect the base and leaves; confirm wilt or pest symptoms locally before removing plants or treating.'},
  vine: {routine:'Inspect leaves on both sides, tendrils, stems and fruit clusters. Keep the canopy supported and note any mildew, cracking or rot.', water:'Use steady root-zone moisture and good drainage. Avoid overhead irrigation where it keeps foliage wet; tailor irrigation to local weather and growth stage.', nutrition:'Use soil-test-based, locally calibrated nutrition. Do not use a universal fertilizer schedule across varieties or regions.', action:'Remove spoiled fruit and improve airflow if appropriate; confirm disease before using crop-protection products.'}
};

// Crop-specific warning signs below are introductory watch-outs, not a complete pest list or a diagnosis.
const crops = [
  ['Rice','field','🌾','cereal','Tillering and panicle initiation','Stem borer, blast, brown spot, planthoppers','Check field water and drainage; scout a few plants in several parts of the field.'],
  ['Wheat','field','🌾','cereal','Crown-root development and flowering','Rusts, aphids, powdery mildew','Scout leaves for orange/brown rust pustules and compare with healthy plants.'],
  ['Maize','field','🌽','cereal','Rapid vegetative growth and tasseling','Fall armyworm, stem borers, leaf blights','Check the whorl and leaf surfaces for fresh feeding damage and caterpillars.'],
  ['Cotton','field','☁️','oilseed','Squaring, flowering and boll formation','Bollworms, whiteflies, jassids','Inspect terminal leaves, square and boll; note beneficial insects too.'],
  ['Sorghum','field','🌾','cereal','Seedling establishment and grain filling','Shoot fly, grain mould, aphids','Check the central shoot early and inspect heads during humid weather.'],
  ['Pearl millet','field','🌾','cereal','Establishment and flowering','Downy mildew, ergot, smut','Look for abnormal shoots and grain-head changes; use clean seed from reliable sources.'],
  ['Finger millet','field','🌾','cereal','Tillering and ear emergence','Blast, smut, root rot','Check leaves and necks for lesions, especially after humid weather.'],
  ['Barley','field','🌾','cereal','Tillering and grain filling','Rusts, aphids, net blotch','Scout lower leaves first and track whether lesions spread upward.'],
  ['Chickpea','field','🫘','pulse','Flowering and pod formation','Pod borer, wilt, Ascochyta blight','Inspect flowers and pods; check wilted plants and surrounding soil separately.'],
  ['Pigeon pea','field','🫘','pulse','Branching, flowering and pod fill','Pod borer, wilt, sterility mosaic','Compare affected and healthy plants and note whether symptoms are patchy.'],
  ['Lentil','field','🫘','pulse','Flowering and pod fill','Rust, wilt, Stemphylium blight','Check lower leaves and drainage; avoid moving soil from diseased patches.'],
  ['Green gram','field','🫘','pulse','Flowering and early pod development','Yellow mosaic, whitefly, powdery mildew','Look for yellow mosaic patterns and check for whiteflies under leaves.'],
  ['Black gram','field','🫘','pulse','Flowering and pod development','Yellow mosaic, whitefly, leaf crinkle','Check symptom spread and insect presence; use clean seed for the next sowing.'],
  ['Soybean','field','🫘','pulse','Canopy closure, flowering and pod fill','Girdle beetle, defoliators, yellow mosaic','Inspect stems for girdling and leaves for chewing or mosaic symptoms.'],
  ['Groundnut','field','🥜','oilseed','Flowering, pegging and pod filling','Leaf spots, rust, stem rot','Check leaf undersides and soil moisture near pegging; avoid waterlogging.'],
  ['Mustard','field','🌼','oilseed','Branching, flowering and pod formation','Aphids, Alternaria blight, white rust','Inspect flowering branches and leaf undersides; protect pollinators.'],
  ['Sugarcane','field','🎋','cane','Tillering and grand growth','Early shoot borer, top borer, red rot','Check for dead hearts, entry holes and stalk discoloration; maintain drainage.'],
  ['Jute','field','🌿','oilseed','Early growth and stem development','Stem weevil, semilooper, stem rot','Inspect stems and leaf undersides; remove weeds that host pests.'],
  ['Sesame','field','🌿','oilseed','Branching, flowering and capsule fill','Phyllody, leaf webber, capsule borer','Look for malformed flowers and webbed leaves; scout before capsules mature.'],
  ['Sunflower','field','🌻','oilseed','Bud formation, flowering and seed fill','Head borer, downy mildew, necrosis','Inspect the head and young leaves; avoid water stress at flowering.'],
  ['Oats','field','🌾','cereal','Tillering and heading','Rusts, aphids, leaf blights','Scout lower leaves and monitor aphid colonies without disturbing beneficial insects.'],
  ['Foxtail millet','field','🌾','cereal','Tillering and ear emergence','Blast, smut, shoot fly','Check central shoots and ears; use clean seed and timely local sowing advice.'],
  ['Tomato','vegetable','🍅','vegetable','Flowering and fruit setting','Fruit borer, early/late blight, bacterial wilt','Check leaves, stems and fruit; note whether spots begin on older or newer leaves.'],
  ['Potato','vegetable','🥔','root','Tuber initiation and bulking','Late blight, early blight, tuber moth','Inspect foliage after humid weather and keep exposed tubers covered with soil.'],
  ['Chilli','vegetable','🌶️','vegetable','Flowering and fruit development','Thrips, mites, anthracnose, leaf curl','Inspect new leaves and flowers with a hand lens; note curling and fruit lesions.'],
  ['Brinjal','vegetable','🍆','vegetable','Flowering and fruiting','Shoot and fruit borer, bacterial wilt','Check shoots for wilt and fruits for entry holes; remove affected fruits.'],
  ['Onion','vegetable','🧅','root','Bulb enlargement and curing','Thrips, purple blotch, downy mildew','Check inner leaves and necks; keep irrigation even as bulbs mature.'],
  ['Garlic','vegetable','🧄','root','Bulb formation and maturity','Thrips, purple blotch, rust','Inspect leaves and bed drainage; reduce irrigation as locally advised near harvest.'],
  ['Cabbage','vegetable','🥬','vegetable','Head formation','Diamondback moth, cabbage butterfly, black rot','Check leaf undersides and the growing point for larvae or rotting.'],
  ['Cauliflower','vegetable','🥦','vegetable','Curd initiation and development','Diamondback moth, black rot, downy mildew','Inspect the central curd and leaves; protect the crop from moisture stress.'],
  ['Okra','vegetable','🌱','vegetable','Flowering and repeated pod picking','Yellow vein mosaic, jassids, fruit borer','Check young leaves for vein yellowing and harvest tender pods regularly.'],
  ['Cucumber','vegetable','🥒','cucurbit','Flowering and fruit growth','Downy/powdery mildew, fruit fly, mosaic','Inspect leaf undersides and young fruits; remove overripe or damaged fruits.'],
  ['Pumpkin','vegetable','🎃','cucurbit','Vine growth, flowering and fruit set','Fruit fly, powdery mildew, mosaic','Check vines and developing fruits; support pollinators and remove rotting fruit.'],
  ['Bottle gourd','vegetable','🥒','cucurbit','Flowering and fruit development','Fruit fly, downy mildew, mosaic','Inspect young fruits and leaf undersides; pick market-ready gourds regularly.'],
  ['Bitter gourd','vegetable','🥒','cucurbit','Flowering and fruit development','Fruit fly, powdery mildew, mosaic','Look for fruit punctures and leaf patches; remove fallen damaged fruit.'],
  ['Spinach','vegetable','🥬','leafy','Leaf expansion and harvest','Leaf miner, downy mildew, damping-off','Check leaf undersides and avoid harvesting wet or visibly diseased leaves.'],
  ['Carrot','vegetable','🥕','root','Root enlargement','Leaf blights, nematodes, root cracking','Keep moisture even and inspect roots from a few sample plants.'],
  ['Green pea','vegetable','🫛','pulse','Flowering and pod fill','Pod borer, powdery mildew, aphids','Inspect flowers, pods and tendrils; provide support if the variety needs it.'],
  ['Capsicum','vegetable','🫑','vegetable','Flowering and fruit set','Thrips, mites, bacterial spot, fruit rot','Inspect new leaves and fruit; maintain airflow and even root moisture.'],
  ['Radish','vegetable','🥗','root','Root enlargement and harvest','Flea beetles, root maggots, downy mildew','Check leaf holes and sample roots; harvest at the locally recommended size.'],
  ['Sweet potato','vegetable','🍠','root','Vine establishment and root bulking','Weevils, scurf, root rot','Inspect vines and sample roots; use healthy planting material and rotate fields.'],
  ['Drumstick (Moringa)','vegetable','🌿','orchard','New flush, flowering and pod harvest','Hairy caterpillars, pod fly, leaf spots','Inspect young shoots and pods; prune only with clean tools and local guidance.'],
  ['Beetroot','vegetable','🟣','root','Root enlargement','Leaf spots, damping-off, root rot','Keep seedbed drainage good and moisture even; thin crowded seedlings.'],
  ['Fenugreek','vegetable','🌿','leafy','Leaf growth or seed formation','Aphids, powdery mildew, root rot','Inspect soft growth and bed drainage; avoid dense, persistently wet stands.'],
  ['Coriander','vegetable','🌿','leafy','Leaf growth, flowering or seed fill','Aphids, stem gall, powdery mildew','Check flower clusters and new leaves; use clean seed and avoid excess crowding.'],
  ['Mango','fruit','🥭','orchard','Flowering, fruit set and fruit development','Hoppers, powdery mildew, fruit fly, anthracnose','Inspect panicles and fruit; collect fallen fruit and note flowering/fruit stage.'],
  ['Banana','fruit','🍌','banana','Leaf development and bunch filling','Sigatoka, weevils, wilt, nematodes','Check drainage, new leaves and pseudostem; use clean suckers.'],
  ['Apple','fruit','🍎','orchard','Bud break, fruit set and fruit sizing','Apple scab, aphids, codling moth','Inspect leaves and fruit after wet weather; follow local orchard sanitation advice.'],
  ['Grapes','fruit','🍇','vine','Shoot growth, flowering and berry development','Downy/powdery mildew, mealybug, berry cracking','Check canopy airflow and clusters; avoid wet foliage and confirm mildew locally.'],
  ['Orange','fruit','🍊','citrus','New flush, flowering and fruit development','Citrus psylla, canker, leaf miner, greening','Inspect new flush for insects and mottling; use clean tools and planting stock.'],
  ['Papaya','fruit','🍈','orchard','Leaf growth, flowering and fruit development','Ringspot virus, mealybug, foot rot','Check for mosaic/ring patterns and stem-base rot; keep water from pooling.'],
  ['Guava','fruit','🍐','orchard','New flush, flowering and fruit development','Fruit fly, wilt, anthracnose','Remove fallen or damaged fruit and inspect branches for one-sided decline.'],
  ['Pomegranate','fruit','🍎','orchard','Flowering and fruit enlargement','Bacterial blight, fruit borer, wilt','Check leaves and fruit for spots or cracking; avoid irregular moisture swings.'],
  ['Watermelon','fruit','🍉','cucurbit','Flowering, fruit set and fruit enlargement','Fruit fly, downy/powdery mildew, wilt','Inspect vines and fruit; maintain even moisture and avoid wet foliage where possible.'],
  ['Lemon','fruit','🍋','citrus','New flush, flowering and fruit growth','Citrus leaf miner, canker, psylla','Inspect tender leaves and fruit; keep irrigation and drainage balanced.'],
  ['Pineapple','fruit','🍍','orchard','Leaf establishment, flowering and fruit growth','Mealybug wilt, heart rot, scale insects','Check the plant centre and roots; ensure drainage and use healthy planting material.'],
  ['Coconut','fruit','🥥','orchard','Frond production and nut development','Rhinoceros beetle, red palm weevil, bud rot','Inspect crown and trunk for fresh damage; seek a trained local palm-care worker promptly.'],
  ['Litchi','fruit','🍒','orchard','Panicle emergence, fruit set and fruit growth','Fruit borer, mites, anthracnose','Monitor panicles and fruit; keep soil moisture steady during fruit development.'],
  ['Jackfruit','fruit','🍈','orchard','Flowering and fruit enlargement','Fruit/stem borers, fruit rot','Inspect trunk, branches and fruit; remove rotting fruit and keep the tree base drained.'],
  ['Amla','fruit','🟢','orchard','New flush, flowering and fruit set','Rust, fruit drop, bark-eating caterpillar','Inspect branches and fruit; record premature drop and check water stress.']
].map(([name, filter, emoji, family, stage, risks, action]) => ({name, filter, emoji, family, stage, risks, action}));

const colors = {field:'#edf2d7', vegetable:'#e7eee0', fruit:'#f4ead7'};
const typeNames = {field:'Field crop', vegetable:'Vegetable', fruit:'Fruit'};
const grid = document.querySelector('#crop-grid');
const queryInput = document.querySelector('#crop-search');
let activeFilter = 'all';
const photoCache = new Map();
const esc = value => String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));

function renderCrops() {
  const q = queryInput.value.trim().toLocaleLowerCase();
  const visible = crops.filter(c => (activeFilter === 'all' || c.filter === activeFilter) && c.name.toLocaleLowerCase().includes(q));
  document.querySelector('#result-count').textContent = `Showing ${visible.length} of ${crops.length} crop guides`;
  grid.innerHTML = visible.length ? visible.map(c => `<article class="crop-card"><div class="crop-visual" style="background:${colors[c.filter]}"><img class="crop-photo" alt="Photo of ${esc(c.name)}" hidden><span class="crop-emoji" aria-hidden="true">${c.emoji}</span></div><div class="crop-info"><span class="crop-category">${typeNames[c.filter]}</span><h3>${esc(c.name)}</h3><p>Stage-aware water, nutrition and crop-health notes.</p><button class="crop-link guide-open" type="button" data-crop="${esc(c.name)}">Open care guide <span aria-hidden="true">↗</span></button><a class="image-credit" data-photo-link href="https://commons.wikimedia.org/w/index.php?search=${encodeURIComponent(c.name+' crop plant')}&title=Special:MediaSearch&type=image" target="_blank" rel="noopener">Find crop photo ↗</a></div></article>`).join('') : '<div class="empty-state">No crops match that search. Try another name.</div>';
  loadVisiblePhotos();
}

function loadVisiblePhotos() {
  const cards = [...grid.querySelectorAll('.crop-card')];
  if (!('IntersectionObserver' in window)) { cards.forEach(loadPhoto); return; }
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { observer.unobserve(entry.target); loadPhoto(entry.target); }
  }), {rootMargin:'160px'});
  cards.forEach(card => observer.observe(card));
}

function loadPhoto(card) {
  const cropName = card.querySelector('h3')?.textContent;
  const image = card.querySelector('.crop-photo');
  if (!cropName || !image) return;
  if (!photoCache.has(cropName)) {
    const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(cropName+' crop plant')}&gsrnamespace=6&gsrlimit=1&prop=imageinfo&iiprop=url&iiurlwidth=640&format=json&origin=*`;
    photoCache.set(cropName, fetch(url).then(r => r.ok ? r.json() : null).then(d => {
      const page = d?.query?.pages ? Object.values(d.query.pages)[0] : null;
      const info = page?.imageinfo?.[0];
      return info ? {url:info.thumburl || info.url, page:`https://commons.wikimedia.org/wiki/${page.title.replaceAll(' ','_')}`} : null;
    }).catch(() => null));
  }
  photoCache.get(cropName).then(photo => {
    if (!photo || !image.isConnected) return;
    image.onload = () => { image.hidden = false; image.nextElementSibling.hidden = true; };
    image.onerror = () => { image.hidden = true; image.nextElementSibling.hidden = false; };
    image.src = photo.url;
    const link = card.querySelector('[data-photo-link]');
    link.href = photo.page; link.textContent = 'Photo source ↗';
  });
}

function openGuide(name) {
  const crop = crops.find(item => item.name === name);
  if (!crop) return;
  const care = familyCare[crop.family];
  document.querySelector('#guide-content').innerHTML = `<div class="guide-kicker">${typeNames[crop.filter].toUpperCase()} · CROP CARE GUIDE</div><h2 id="guide-title">${esc(crop.name)}</h2><p class="guide-stage"><strong>Pay extra attention at:</strong> ${esc(crop.stage)}.</p><div class="guide-detail-grid"><article><h3>Daily field check</h3><p>${esc(care.routine)}</p></article><article><h3>Watering</h3><p>${esc(care.water)}</p></article><article><h3>Nutrition</h3><p>${esc(care.nutrition)}</p></article><article><h3>Common concerns to watch</h3><p>${esc(crop.risks)}.</p></article><article class="guide-action"><h3>First sensible steps</h3><p>${esc(crop.action)} ${esc(care.action)}</p></article></div><p class="guide-caution">This is a student reference, not a diagnosis or prescription. Do not apply pesticide or fertilizer doses from guesswork. Confirm crop stage, symptoms and local label guidance with your KVK/agriculture officer.</p>`;
  const backdrop = document.querySelector('#guide-backdrop'); backdrop.hidden = false;
  document.body.classList.add('dialog-open'); document.querySelector('#guide-close').focus();
}

grid.addEventListener('click', e => { const button = e.target.closest('.guide-open'); if (button) openGuide(button.dataset.crop); });
document.querySelector('#guide-close').addEventListener('click', closeGuide);
document.querySelector('#guide-backdrop').addEventListener('click', e => { if (e.target.id === 'guide-backdrop') closeGuide(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !document.querySelector('#guide-backdrop').hidden) closeGuide(); });
function closeGuide() { document.querySelector('#guide-backdrop').hidden = true; document.body.classList.remove('dialog-open'); }

queryInput.addEventListener('input', renderCrops);
document.querySelectorAll('.filter-tab').forEach(button => button.addEventListener('click', () => {
  document.querySelector('.filter-tab.selected')?.classList.remove('selected');
  button.classList.add('selected'); activeFilter = button.dataset.filter; renderCrops();
}));
const menuToggle = document.querySelector('#menu-toggle');
menuToggle.addEventListener('click', () => { const nav = document.querySelector('#main-nav'); const open = nav.classList.toggle('open'); menuToggle.setAttribute('aria-expanded', String(open)); menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); });
document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', () => { document.querySelector('#main-nav').classList.remove('open'); menuToggle.setAttribute('aria-expanded','false'); }));
document.querySelector('#language-button').addEventListener('click', () => alert('This student prototype is currently in English. More languages can be added in a future version.'));
renderCrops();
