// --- SLIDE 2 SEQUENTIAL REVEAL ENGINE ---
let slide2Step = 0;
function handleSlide2Click() {
  if (slide2Step < 4) {
    const poster = document.getElementById(`poster-${slide2Step}`);
    if (poster) poster.classList.add('revealed');
    slide2Step++;
  } else if (slide2Step === 4) {
    const tagline = document.getElementById('slide2-tagline');
    if (tagline) tagline.classList.add('revealed');
    slide2Step++;
  } else {
    nextSlide();
  }
}
function resetSlide2() {
  slide2Step = 0;
  for (let i = 0; i < 4; i++) {
    const poster = document.getElementById(`poster-${i}`);
    if (poster) poster.classList.remove('revealed');
  }
  const tagline = document.getElementById('slide2-tagline');
  if (tagline) tagline.classList.remove('revealed');
}

// --- SLIDE 3 SEQUENTIAL REVEAL ENGINE ---
let slide3Step = 0;
function handleSlide3Click() {
  if (slide3Step < 3) {
    const metric = document.getElementById(`metric-${slide3Step}`);
    if (metric) metric.classList.add('revealed');
    slide3Step++;
  } else if (slide3Step === 3) {
    const quote = document.getElementById('slide3-quote');
    if (quote) quote.classList.add('revealed');
    slide3Step++;
  } else {
    nextSlide();
  }
}
function resetSlide3() {
  slide3Step = 0;
  for (let i = 0; i < 3; i++) {
    const metric = document.getElementById(`metric-${i}`);
    if (metric) metric.classList.remove('revealed');
  }
  const quote = document.getElementById('slide3-quote');
  if (quote) quote.classList.remove('revealed');
}

// --- SLIDE 4 SEQUENTIAL REVEAL (DOC FEST) ---
let docStep = 0;
function handleDocSlideClick() {
  if (docStep === 0) {
    const tagline = document.getElementById('doc-tagline');
    if (tagline) tagline.classList.add('revealed');
    docStep++;
  } else if (docStep === 1) {
    const p0 = document.getElementById('doc-pillar-0');
    if (p0) p0.classList.add('revealed');
    docStep++;
  } else if (docStep === 2) {
    const p1 = document.getElementById('doc-pillar-1');
    if (p1) p1.classList.add('revealed');
    docStep++;
  } else if (docStep === 3) {
    const p2 = document.getElementById('doc-pillar-2');
    if (p2) p2.classList.add('revealed');
    docStep++;
  } else {
    nextSlide();
  }
}
function resetDocSlide() {
  docStep = 0;
  const tagline = document.getElementById('doc-tagline');
  if (tagline) tagline.classList.remove('revealed');
  for (let i = 0; i < 3; i++) {
    const p = document.getElementById(`doc-pillar-${i}`);
    if (p) p.classList.remove('revealed');
  }
}

// --- SLIDE 5 SEQUENTIAL REVEAL (HORRORTHON MAIN) ---
let horrorMainStep = 0;
function handleHorrorMainClick() {
  if (horrorMainStep === 0) {
    const sub = document.getElementById('horror-sub');
    if (sub) sub.classList.add('revealed');
    horrorMainStep++;
  } else if (horrorMainStep === 1) {
    const item0 = document.getElementById('horror-item-0');
    if (item0) item0.classList.add('revealed');
    horrorMainStep++;
  } else if (horrorMainStep === 2) {
    const item1 = document.getElementById('horror-item-1');
    if (item1) item1.classList.add('revealed');
    horrorMainStep++;
  } else {
    nextSlide();
  }
}
function resetHorrorMainSlide() {
  horrorMainStep = 0;
  const sub = document.getElementById('horror-sub');
  if (sub) sub.classList.remove('revealed');
  const item0 = document.getElementById('horror-item-0');
  if (item0) item0.classList.remove('revealed');
  const item1 = document.getElementById('horror-item-1');
  if (item1) item1.classList.remove('revealed');
}

// --- SLIDE 6 SEQUENTIAL REVEAL (HORRORTHON GALLERY) ---
let horrorGalleryStep = 0;
function handleHorrorGalleryClick() {
  if (horrorGalleryStep < 2) {
    const card = document.getElementById(`horror-card-${horrorGalleryStep}`);
    if (card) card.classList.add('revealed');
    horrorGalleryStep++;
  } else {
    nextSlide();
  }
}
function resetHorrorGallerySlide() {
  horrorGalleryStep = 0;
  for (let i = 0; i < 2; i++) {
    const card = document.getElementById(`horror-card-${i}`);
    if (card) card.classList.remove('revealed');
  }
}

// --- SLIDE 7 SEQUENTIAL REVEAL (FRENCH FILM FESTIVAL) ---
let frenchStep = 0;
function handleFrenchSlideClick() {
  if (frenchStep === 0) {
    const tagline = document.getElementById('french-tagline');
    if (tagline) tagline.classList.add('revealed');
    frenchStep++;
  } else if (frenchStep < 5) {
    const p = document.getElementById(`french-p-${frenchStep - 1}`);
    if (p) p.classList.add('revealed');
    frenchStep++;
  } else {
    nextSlide();
  }
}
function resetFrenchSlide() {
  frenchStep = 0;
  const tagline = document.getElementById('french-tagline');
  if (tagline) tagline.classList.remove('revealed');
  for (let i = 0; i < 4; i++) {
    const p = document.getElementById(`french-p-${i}`);
    if (p) p.classList.remove('revealed');
  }
}

// --- SLIDE 8 SEQUENTIAL REVEAL (KINOPOLIS) ---
let kinoStep = 0;
function handleKinoSlideClick() {
  if (kinoStep === 0) {
    const sub = document.getElementById('kino-sub');
    if (sub) sub.classList.add('revealed');
    kinoStep++;
  } else if (kinoStep === 1) {
    const item0 = document.getElementById('kino-item-0');
    if (item0) item0.classList.add('revealed');
    kinoStep++;
  } else if (kinoStep === 2) {
    const item1 = document.getElementById('kino-item-1');
    if (item1) item1.classList.add('revealed');
    kinoStep++;
  } else {
    nextSlide();
  }
}
function resetKinoSlide() {
  kinoStep = 0;
  const sub = document.getElementById('kino-sub');
  if (sub) sub.classList.remove('revealed');
  const item0 = document.getElementById('kino-item-0');
  if (item0) item0.classList.remove('revealed');
  const item1 = document.getElementById('kino-item-1');
  if (item1) item1.classList.remove('revealed');
}

// --- SLIDE 9 SEQUENTIAL REVEAL (THE AUDIENCE SEES) ---
let audienceStep = 0;
function handleAudienceSlideClick() {
  if (audienceStep < 4) {
    const card = document.getElementById(`audience-${audienceStep}`);
    if (card) card.classList.add('revealed');
    audienceStep++;
  } else {
    nextSlide();
  }
}
function resetAudienceSlide() {
  audienceStep = 0;
  for (let i = 0; i < 4; i++) {
    const card = document.getElementById(`audience-${i}`);
    if (card) card.classList.remove('revealed');
  }
}

// --- SLIDE 11 SEQUENTIAL REVEAL (WHAT SUCCESS LOOKS LIKE) ---
let successStep = 0;
function handleSuccessSlideClick() {
  if (successStep < 5) {
    const card = document.getElementById(`success-card-${successStep}`);
    if (card) card.classList.add('revealed');
    successStep++;
  } else if (successStep === 5) {
    const master = document.getElementById('success-master');
    if (master) master.classList.add('revealed');
    successStep++;
  } else {
    nextSlide();
  }
}
function resetSuccessSlide() {
  successStep = 0;
  for (let i = 0; i < 5; i++) {
    const card = document.getElementById(`success-card-${i}`);
    if (card) card.classList.remove('revealed');
  }
  const master = document.getElementById('success-master');
  if (master) master.classList.remove('revealed');
}

// --- SLIDE 12 SEQUENTIAL REVEAL (FINAL TIMELINE) ---
let finalStep = 0;
function handleFinalSlideClick() {
  if (finalStep < 4) {
    const card = document.getElementById(`final-card-${finalStep}`);
    if (card) card.classList.add('revealed');
    finalStep++;
  } else if (finalStep === 4) {
    const summary = document.getElementById('final-summary');
    if (summary) summary.classList.add('revealed');
    finalStep++;
  } else if (finalStep === 5) {
    const thankyou = document.getElementById('final-thankyou');
    if (thankyou) thankyou.classList.add('revealed');
    finalStep++;
  } else {
    nextSlide();
  }
}
function resetFinalSlide() {
  finalStep = 0;
  for (let i = 0; i < 4; i++) {
    const card = document.getElementById(`final-card-${i}`);
    if (card) card.classList.remove('revealed');
  }
  const summary = document.getElementById('final-summary');
  if (summary) summary.classList.remove('revealed');
  const thankyou = document.getElementById('final-thankyou');
  if (thankyou) thankyou.classList.remove('revealed');
}

// --- MAGNETIC KINETIC TYPOGRAPHY SETUP ---
const magTitle = document.getElementById('magnetic-title');
if (magTitle) {
  const processNode = (node) => {
    if (node.nodeType === 3) { 
      const text = node.textContent;
      const spanContainer = document.createElement('span');
      spanContainer.innerHTML = text.split('').map(char => {
        if (char === ' ') return ' ';
        return `<span class="magnetic-char">${char}</span>`;
      }).join('');
      node.parentNode.replaceChild(spanContainer, node);
    } else if (node.nodeType === 1) { 
      Array.from(node.childNodes).forEach(processNode);
    }
  };
  Array.from(magTitle.childNodes).forEach(processNode);
}

// Interactive Light Beam Sweep on Hover / Touch
const stage = document.getElementById('building-stage');
const beam = document.getElementById('light-beam');
if (stage && beam) {
  const updateBeam = (clientX, clientY) => {
    const rect = stage.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    beam.style.left = `${x}px`;
    beam.style.top = `${y}px`;
  };

  stage.addEventListener('mousemove', (e) => updateBeam(e.clientX, e.clientY));
  stage.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
      updateBeam(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });
}

// --- SYNTHESIZED CINEMATIC HEARTBEAT AUDIO ENGINE ---
let audioCtx = null;
let heartbeatInterval = null;

function playHeartbeatSound() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  function pulse(freq, duration, delay) {
    setTimeout(() => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(10, audioCtx.currentTime + duration);

      gain.gain.setValueAtTime(0.7, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    }, delay);
  }

  pulse(65, 0.18, 0);
  pulse(50, 0.22, 220);
}

function startHeartbeatLoop() {
  if (heartbeatInterval) return;
  
  const title = document.getElementById('hero-title');
  if (title) title.classList.add('pulse-beat');

  playHeartbeatSound();
  heartbeatInterval = setInterval(playHeartbeatSound, 1200);
}

function stopHeartbeatLoop() {
  if (heartbeatInterval) {
    clearInterval(heartbeatInterval);
    heartbeatInterval = null;

    const title = document.getElementById('hero-title');
    if (title) title.classList.remove('pulse-beat');
  }
}

// Master Click / Tap Controller
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn')) return;

  if (currentSlide === 0) {
    startHeartbeatLoop();
    nextSlide();
  } else if (currentSlide === 1) {
    handleSlide2Click();
  } else if (currentSlide === 2) {
    handleSlide3Click();
  } else if (currentSlide === 3) {
    handleDocSlideClick();
  } else if (currentSlide === 4) {
    handleHorrorMainClick();
  } else if (currentSlide === 5) {
    handleHorrorGalleryClick();
  } else if (currentSlide === 6) {
    handleFrenchSlideClick();
  } else if (currentSlide === 7) {
    handleKinoSlideClick();
  } else if (currentSlide === 8) {
    handleAudienceSlideClick();
  } else if (currentSlide === 10) {
    handleSuccessSlideClick();
  } else if (currentSlide === 11) {
    handleFinalSlideClick();
  } else {
    nextSlide();
  }
});

// --- THREE.JS RESPONSIVE BACKGROUND ENGINE ---
const container = document.getElementById('canvas-container');
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x000000, 0.12);

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
container.appendChild(renderer.domElement);

const count = 2500;
const geometry = new THREE.BufferGeometry();
const positions = new Float32Array(count * 3);
const colors = new Float32Array(count * 3);

for (let i = 0; i < count * 3; i += 3) {
  positions[i] = (Math.random() - 0.5) * 20;
  positions[i+1] = (Math.random() - 0.5) * 20;
  positions[i+2] = (Math.random() - 0.5) * 30;

  colors[i] = 0.6; colors[i+1] = 0.6; colors[i+2] = 0.7;
}

geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

const isHighRes = window.innerWidth > 1920;
const particleSize = isHighRes ? 0.05 : 0.04;

const material = new THREE.PointsMaterial({ size: particleSize, vertexColors: true, transparent: true, opacity: 0.85 });
const particles = new THREE.Points(geometry, material);
scene.add(particles);

const light = new THREE.PointLight(0xffffff, 2, 50);
light.position.set(0, 0, 5);
scene.add(light);
camera.position.z = 6;

// --- RESPONSIVE DEPARTMENT TAGS ENGINE (SLIDE 10) ---
const depts = [
  "Programming", "Marketing", "Box Office", "Projection",
  "Front of House", "Development", "Membership", "Café Bar",
  "Film Shop", "Finance", "Operations", "Education", "Digital", "Archive", "…and many more"
];

const neonColors = [
  "#38bdf8", "#ff2a55", "#facc15", "#4ade80",
  "#c084fc", "#fb923c", "#f43f5e", "#22d3ee",
  "#a78bfa", "#f472b6", "#34d399", "#fbbf24",
  "#e879f9", "#60a5fa", "#ffffff"
];

function getResponsivePositions() {
  const w = window.innerWidth;

  if (w <= 600) {
    // Mobile layout: Clear header top area
    return [
      { top: "28%", left: "4%" },  { top: "28%", left: "50%" },
      { top: "37%", left: "4%" },  { top: "37%", left: "50%" },
      { top: "46%", left: "4%" },  { top: "46%", left: "50%" },
      { top: "55%", left: "4%" },  { top: "55%", left: "50%" },
      { top: "64%", left: "4%" },  { top: "64%", left: "50%" },
      { top: "73%", left: "4%" },  { top: "73%", left: "50%" },
      { top: "82%", left: "4%" },  { top: "82%", left: "50%" },
      { top: "90%", left: "20%" }
    ];
  } else if (w <= 1024) {
    // iPad / Tablet layout: Clear top header area
    return [
      { top: "22%", left: "6%" },  { top: "22%", left: "56%" },
      { top: "33%", left: "6%" },  { top: "33%", left: "56%" },
      { top: "44%", left: "6%" },  { top: "44%", left: "56%" },
      { top: "55%", left: "6%" },  { top: "55%", left: "56%" },
      { top: "66%", left: "6%" },  { top: "66%", left: "56%" },
      { top: "77%", left: "6%" },  { top: "77%", left: "56%" },
      { top: "87%", left: "10%" }, { top: "87%", left: "52%" },
      { top: "50%", left: "28%" }
    ];
  }

  // Desktop & 4K Cinema Projection layout
  return [
    { top: "24%", left: "8%" },  { top: "24%", left: "68%" },
    { top: "36%", left: "10%" }, { top: "36%", left: "70%" },
    { top: "48%", left: "14%" }, { top: "48%", left: "65%" },
    { top: "60%", left: "10%" }, { top: "60%", left: "70%" },
    { top: "72%", left: "16%" }, { top: "72%", left: "62%" },
    { top: "84%", left: "8%" },  { top: "84%", left: "72%" },
    { top: "90%", left: "22%" }, { top: "90%", left: "58%" },
    { top: "54%", left: "37%" }
  ];
}

function burstAllSpinningDepts() {
  const wall = document.getElementById('bts-wall');
  wall.innerHTML = ''; 

  const positions2D = getResponsivePositions();

  depts.forEach((deptName, i) => {
    const tag = document.createElement('div');
    tag.className = 'dept-tag';
    tag.innerText = deptName;

    const pos = positions2D[i];
    const color = neonColors[i];

    tag.style.top = pos.top;
    tag.style.left = pos.left;
    tag.style.color = color;
    tag.style.borderColor = color;
    tag.style.boxShadow = `0 15px 40px rgba(0,0,0,0.85), 0 0 20px ${color}44`;

    if (deptName === "…and many more") {
      tag.style.fontSize = "clamp(1.1rem, 1.8vw, 1.8rem)";
      tag.style.padding = "0.9rem 2.2rem";
      tag.style.background = "rgba(20, 25, 35, 0.95)";
    }

    wall.appendChild(tag);

    setTimeout(() => {
      tag.classList.add('landed');
    }, i * 65);
  });
}

// Visual Slide Themes
const themes = [
  { color: 0xffffff, camZ: 4 },  // Slide 1 Title Heartbeat
  { color: 0xaa44aa, camZ: 7 },  // Slide 2 Overview 3D Poster Wall
  { color: 0x38bdf8, camZ: 7 },  // Slide 3 Dynamic Building Stage
  { color: 0xffaa00, camZ: 5 },  // Slide 4 Super 8 Doc Fest Stage
  { color: 0xff0033, camZ: 10 }, // Slide 5 Horrorthon Crimson Mist
  { color: 0xff2a55, camZ: 8 },  // Slide 6 Horrorthon Gallery
  { color: 0xfacc15, camZ: 6 },  // Slide 7 French Fest Warm Gold
  { color: 0x38bdf8, camZ: 7 },  // Slide 8 Kinopolis Electric Cyan
  { color: 0xffffff, camZ: 6 },  // Slide 9 Front of House Silver Screen
  { color: 0x38bdf8, camZ: 6 },  // Slide 10 BTS Glassmorphic Burst
  { color: 0x22c55e, camZ: 7 },  // Slide 11 Success Emerald Glow
  { color: 0xffffff, camZ: 5 }   // Slide 12 Final Wrap Up
];

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function updateTheme(index) {
  const t = themes[index];
  
  const aspect = window.innerWidth / window.innerHeight;
  const zoomFactor = aspect < 1.3 ? 1.2 : 1; 
  camera.position.z = t.camZ * zoomFactor;

  light.color.setHex(t.color);

  const cols = geometry.attributes.color.array;
  const c = new THREE.Color(t.color);
  for (let i = 0; i < count * 3; i += 3) {
    cols[i] = c.r; cols[i+1] = c.g; cols[i+2] = c.b;
  }
  geometry.attributes.color.needsUpdate = true;

  if (index === 0) startHeartbeatLoop(); else stopHeartbeatLoop();

  if (index === 1) resetSlide2();
  if (index === 2) resetSlide3();
  if (index === 3) resetDocSlide();
  if (index === 4) resetHorrorMainSlide();
  if (index === 5) resetHorrorGallerySlide();
  if (index === 6) resetFrenchSlide();
  if (index === 7) resetKinoSlide();
  if (index === 8) resetAudienceSlide();
  if (index === 10) resetSuccessSlide();
  if (index === 11) resetFinalSlide();

  if (index === 9) {
    burstAllSpinningDepts();
  } else {
    document.getElementById('bts-wall').innerHTML = '';
  }
}

function animate() {
  requestAnimationFrame(animate);
  particles.rotation.y += 0.0015;
  particles.rotation.x += 0.0008;
  renderer.render(scene, camera);
}
animate();

function showSlide(index) {
  slides.forEach((s, i) => {
    s.classList.remove('active');
    if (i === index) s.classList.add('active');
  });
  updateTheme(index);
}

function nextSlide() { currentSlide = (currentSlide + 1) % slides.length; showSlide(currentSlide); }
function prevSlide() { currentSlide = (currentSlide - 1 + slides.length) % slides.length; showSlide(currentSlide); }

// Keyboard Controls
window.addEventListener('keydown', (e) => {
  if (currentSlide === 0) startHeartbeatLoop();

  if (currentSlide === 1 && (e.key === ' ' || e.key === 'ArrowRight')) {
    if (slide2Step < 5) { handleSlide2Click(); return; }
  }
  if (currentSlide === 2 && (e.key === ' ' || e.key === 'ArrowRight')) {
    if (slide3Step < 4) { handleSlide3Click(); return; }
  }
  if (currentSlide === 3 && (e.key === ' ' || e.key === 'ArrowRight')) {
    if (docStep < 4) { handleDocSlideClick(); return; }
  }
  if (currentSlide === 4 && (e.key === ' ' || e.key === 'ArrowRight')) {
    if (horrorMainStep < 3) { handleHorrorMainClick(); return; }
  }
  if (currentSlide === 5 && (e.key === ' ' || e.key === 'ArrowRight')) {
    if (horrorGalleryStep < 2) { handleHorrorGalleryClick(); return; }
  }
  if (currentSlide === 6 && (e.key === ' ' || e.key === 'ArrowRight')) {
    if (frenchStep < 5) { handleFrenchSlideClick(); return; }
  }
  if (currentSlide === 7 && (e.key === ' ' || e.key === 'ArrowRight')) {
    if (kinoStep < 3) { handleKinoSlideClick(); return; }
  }
  if (currentSlide === 8 && (e.key === ' ' || e.key === 'ArrowRight')) {
    if (audienceStep < 4) { handleAudienceSlideClick(); return; }
  }
  if (currentSlide === 10 && (e.key === ' ' || e.key === 'ArrowRight')) {
    if (successStep < 6) { handleSuccessSlideClick(); return; }
  }
  if (currentSlide === 11 && (e.key === ' ' || e.key === 'ArrowRight')) {
    if (finalStep < 6) { handleFinalSlideClick(); return; }
  }

  if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
  if (e.key === 'ArrowLeft') prevSlide();
});

// Responsive Recalibration on Orientation or Resizing
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  updateTheme(currentSlide);
});

if (currentSlide === 0) {
  setTimeout(startHeartbeatLoop, 500);
}