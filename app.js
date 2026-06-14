/* ============================================================
   SRAMANA — app.js
   Pure Vanilla JS — no dependencies
   ============================================================ */

/* ──────────────────────────────────────────────────────────
   NAV
────────────────────────────────────────────────────────── */
const navbar     = document.getElementById('navbar');
const hamburger  = document.getElementById('hamburger');
const navLinks   = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ──────────────────────────────────────────────────────────
   SCROLL REVEAL
────────────────────────────────────────────────────────── */
function initReveal() {
  const els = document.querySelectorAll(
    '.section-header, .mode-btn, .tip-card, .yoga-card, .mood-card, .music-player-card'
  );
  els.forEach(el => el.classList.add('reveal'));

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 60);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(el => io.observe(el));
}

/* ──────────────────────────────────────────────────────────
   BREATHING EXERCISE
────────────────────────────────────────────────────────── */
const MODES = {
  calm:     { label: 'Calm (4-7-8)',     inhale: 4, hold: 7,  exhale: 8  },
  energize: { label: 'Energize (Box)',   inhale: 4, hold: 4,  exhale: 4  },
  sleep:    { label: 'Sleep (2-4-6)',    inhale: 2, hold: 4,  exhale: 6  },
};

let currentMode   = 'calm';
let isBreathing   = false;
let breathTimer   = null;
let cycleCount    = 0;
let currentPhase  = null;

const breathCircle   = document.getElementById('breathCircle');
const breathPhaseEl  = document.getElementById('breathPhase');
const breathCountEl  = document.getElementById('breathCount');
const breathInstr    = document.getElementById('breathInstruction');
const breathStart    = document.getElementById('breathStart');
const cycleCountEl   = document.getElementById('cycleCount');

function setBreathMode(mode) {
  currentMode = mode;
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === mode);
  });
  if (isBreathing) stopBreathing();
}

document.querySelectorAll('.mode-btn').forEach(btn => {
  btn.addEventListener('click', () => setBreathMode(btn.dataset.mode));
});

function countdown(seconds, phase, instruction, nextFn) {
  currentPhase = phase;
  let remaining = seconds;

  breathPhaseEl.textContent = phase;
  breathCountEl.textContent = remaining;
  breathInstr.textContent   = instruction;

  breathCircle.className = 'breath-circle';
  void breathCircle.offsetWidth; // reflow to restart animation

  if (phase === 'Inhale') {
    breathCircle.style.setProperty('--breath-dur', seconds + 's');
    breathCircle.classList.add('inhale');
  } else if (phase === 'Hold') {
    breathCircle.classList.add('hold');
  } else if (phase === 'Exhale') {
    breathCircle.style.setProperty('--breath-dur', seconds + 's');
    breathCircle.classList.add('exhale');
  }

  breathTimer = setInterval(() => {
    remaining--;
    breathCountEl.textContent = remaining > 0 ? remaining : '';
    if (remaining <= 0) {
      clearInterval(breathTimer);
      if (isBreathing) nextFn();
    }
  }, 1000);
}

function runCycle() {
  const m = MODES[currentMode];

  countdown(m.inhale, 'Inhale', 'Breathe in slowly through your nose…', () => {
    if (m.hold > 0) {
      countdown(m.hold, 'Hold', 'Hold gently at the top of your breath…', () => {
        countdown(m.exhale, 'Exhale', 'Release slowly through your mouth…', () => {
          cycleCount++;
          cycleCountEl.textContent = cycleCount;
          if (isBreathing) runCycle();
        });
      });
    } else {
      countdown(m.exhale, 'Exhale', 'Release slowly through your mouth…', () => {
        cycleCount++;
        cycleCountEl.textContent = cycleCount;
        if (isBreathing) runCycle();
      });
    }
  });
}

function startBreathing() {
  isBreathing = true;
  cycleCount  = 0;
  cycleCountEl.textContent = 0;
  breathStart.textContent  = 'Stop';
  breathStart.style.background = '#c97b7b';
  runCycle();
}

function stopBreathing() {
  isBreathing = false;
  clearInterval(breathTimer);
  breathStart.textContent     = 'Start';
  breathStart.style.background = '';
  breathCircle.className       = 'breath-circle';
  breathPhaseEl.textContent    = 'Ready';
  breathCountEl.textContent    = '—';
  breathInstr.textContent      = 'Press Start to begin your breathing session';
}

breathStart.addEventListener('click', () => {
  isBreathing ? stopBreathing() : startBreathing();
});

/* ──────────────────────────────────────────────────────────
   YOGA POSES DATA
────────────────────────────────────────────────────────── */
const POSES = [
  {
    name: 'Mountain Pose',
    sanskrit: 'Tadasana',
    emoji: '🧘',
    category: 'stress',
    difficulty: 'beginner',
    benefit: 'Grounds your energy and brings awareness into the present moment.',
    steps: [
      'Stand with feet together, arms at your sides.',
      'Press all four corners of your feet into the earth.',
      'Engage your thigh muscles and lengthen your spine upward.',
      'Roll shoulders back and down, open your chest.',
      'Breathe deeply and hold for 5–10 breaths, feeling rooted.'
    ],
    tip: '💡 Imagine a thread gently pulling the crown of your head toward the sky.'
  },
  {
    name: "Child's Pose",
    sanskrit: 'Balasana',
    emoji: '🌿',
    category: 'stress',
    difficulty: 'beginner',
    benefit: 'Deeply calms the nervous system and releases tension in the back, neck, and hips.',
    steps: [
      'Kneel on your mat with big toes touching, knees wide apart.',
      'Exhale and fold forward, lowering your torso between your thighs.',
      'Extend your arms forward, palms down, forehead resting on the mat.',
      'Breathe slowly into your lower back, feeling it rise and fall.',
      'Stay for 1–3 minutes, melting deeper with each breath.'
    ],
    tip: '💡 Place a folded blanket under your forehead or knees for extra comfort.'
  },
  {
    name: 'Downward Dog',
    sanskrit: 'Adho Mukha Svanasana',
    emoji: '🐕',
    category: 'flexibility',
    difficulty: 'beginner',
    benefit: 'Stretches the entire back body while energising the mind with fresh circulation.',
    steps: [
      'Begin on hands and knees, wrists under shoulders, knees under hips.',
      'Tuck your toes under and press your hips up and back.',
      'Straighten your arms, spread fingers wide, and press palms firmly.',
      'Keep your head between your arms, ears aligned with upper arms.',
      'Pedal your heels gently to deepen the stretch. Hold 5–8 breaths.'
    ],
    tip: '💡 Bend your knees slightly if your hamstrings are tight — the key is a long spine.'
  },
  {
    name: 'Warrior I',
    sanskrit: 'Virabhadrasana I',
    emoji: '⚔️',
    category: 'strength',
    difficulty: 'intermediate',
    benefit: 'Builds strength and confidence while opening the chest and hips.',
    steps: [
      'From standing, step your left foot back 3–4 feet and turn it 45°.',
      'Bend your right knee directly over your right ankle.',
      'Square your hips toward the front of your mat.',
      'Raise your arms overhead, palms facing each other.',
      'Gaze upward or forward. Hold 5–7 breaths, then switch sides.'
    ],
    tip: '💡 Press your back heel firmly into the mat to activate the whole leg.'
  },
  {
    name: 'Warrior II',
    sanskrit: 'Virabhadrasana II',
    emoji: '🛡️',
    category: 'strength',
    difficulty: 'intermediate',
    benefit: 'Strengthens legs, opens hips and chest, cultivates inner power.',
    steps: [
      'Stand with feet wide (about 4 feet apart).',
      'Turn your right foot out 90° and left foot in slightly.',
      'Bend your right knee over your right ankle.',
      'Extend arms parallel to the floor, palms down.',
      'Gaze over your right fingertips. Hold 5–7 breaths each side.'
    ],
    tip: '💡 Keep your front knee tracking over the second toe — avoid it collapsing inward.'
  },
  {
    name: 'Tree Pose',
    sanskrit: 'Vrksasana',
    emoji: '🌳',
    category: 'stress',
    difficulty: 'intermediate',
    benefit: 'Improves balance and focus, quieting a busy mind with mindful concentration.',
    steps: [
      'Stand in Mountain Pose. Shift your weight to your left foot.',
      'Place your right foot on your inner calf or inner thigh (avoid the knee).',
      'Bring hands to heart center or raise them overhead like branches.',
      'Fix your gaze on a still point to help maintain balance.',
      'Hold 5–8 breaths, then switch sides.'
    ],
    tip: '💡 If you wobble, touch a wall lightly — balance is a practice, not a performance.'
  },
  {
    name: 'Cat-Cow',
    sanskrit: 'Marjaryasana-Bitilasana',
    emoji: '🐱',
    category: 'flexibility',
    difficulty: 'beginner',
    benefit: 'Gently massages the spine and belly, relieving back tension and improving mood.',
    steps: [
      'Start on hands and knees, wrists under shoulders, knees under hips.',
      'Inhale: drop your belly, lift your head and tailbone (Cow).',
      'Exhale: round your spine toward the ceiling, tuck chin and tailbone (Cat).',
      'Flow slowly between the two shapes, one breath per movement.',
      'Continue for 8–12 rounds, letting the breath lead.'
    ],
    tip: '💡 Close your eyes and focus on how each vertebra moves — it becomes a moving meditation.'
  },
  {
    name: 'Legs Up The Wall',
    sanskrit: 'Viparita Karani',
    emoji: '🦵',
    category: 'sleep',
    difficulty: 'beginner',
    benefit: 'Reverses leg fatigue, calms the nervous system, and prepares the body for sleep.',
    steps: [
      'Sit close to a wall with your side touching it.',
      'Swing your legs up the wall as you lower your back to the floor.',
      'Let your arms rest at your sides, palms up.',
      'Close your eyes and breathe naturally.',
      'Stay 5–15 minutes, letting gravity do the work.'
    ],
    tip: '💡 Place a folded blanket under your lower back for a gentle restorative arch.'
  },
  {
    name: 'Corpse Pose',
    sanskrit: 'Savasana',
    emoji: '☁️',
    category: 'sleep',
    difficulty: 'beginner',
    benefit: 'The most important pose — allows your body and mind to fully integrate and rest.',
    steps: [
      'Lie flat on your back, arms slightly away from your body, palms up.',
      'Let your feet fall naturally outward.',
      'Close your eyes and release all effort from every muscle.',
      'Breathe naturally and let your body feel heavy and supported.',
      'Rest for 5–20 minutes, allowing complete stillness.'
    ],
    tip: '💡 Use an eye pillow to block light and deepen relaxation.'
  },
  {
    name: 'Seated Forward Bend',
    sanskrit: 'Paschimottanasana',
    emoji: '🧎',
    category: 'flexibility',
    difficulty: 'intermediate',
    benefit: 'Deeply stretches the spine and hamstrings, calming anxiety and quieting the mind.',
    steps: [
      'Sit on your mat with legs extended straight in front of you.',
      'Inhale, lengthen your spine and reach arms up.',
      'Exhale, hinge from your hips (not your waist) and fold forward.',
      'Hold your shins, ankles, or feet — wherever you can reach comfortably.',
      'With each exhale, allow a little more release. Stay 5–10 breaths.'
    ],
    tip: '💡 Sit on a folded blanket if your lower back rounds excessively.'
  },
  {
    name: 'Bridge Pose',
    sanskrit: 'Setu Bandha Sarvangasana',
    emoji: '🌉',
    category: 'strength',
    difficulty: 'intermediate',
    benefit: 'Strengthens the back body, opens the chest and heart, and gently energises.',
    steps: [
      'Lie on your back with knees bent, feet flat on the floor, hip-width apart.',
      'Press your feet and arms into the floor.',
      'Exhale and lift your hips toward the ceiling.',
      'Clasp your hands under your back and press your arms down.',
      'Hold 5–8 breaths, then release slowly, one vertebra at a time.'
    ],
    tip: '💡 Keep your thighs parallel — resist the urge to let your knees splay outward.'
  },
  {
    name: 'Happy Baby',
    sanskrit: 'Ananda Balasana',
    emoji: '👶',
    category: 'stress',
    difficulty: 'beginner',
    benefit: 'Opens the hips and inner groins while releasing tension from the spine and mind.',
    steps: [
      'Lie on your back. Exhale and draw your knees toward your chest.',
      'Inhale and grip the outer edges of your feet with your hands.',
      'Open your knees wider than your torso, bringing them toward the armpits.',
      'Stack each ankle directly above the knee, feet flexed.',
      'Rock gently side to side like a happy baby. Stay 1–2 minutes.'
    ],
    tip: '💡 If you cannot reach your feet, hold your calves or use a strap.'
  },
  {
    name: 'Pigeon Pose',
    sanskrit: 'Eka Pada Rajakapotasana',
    emoji: '🕊️',
    category: 'flexibility',
    difficulty: 'intermediate',
    benefit: 'One of the most effective hip openers — releases deep emotional tension stored in the hips.',
    steps: [
      'From Downward Dog, bring your right knee forward toward your right wrist.',
      'Lower your right shin to the mat at an angle comfortable for you.',
      'Extend your left leg straight back, knee and top of foot on the mat.',
      'Inhale to lengthen, then exhale and fold forward over your right shin.',
      'Rest your forehead on your hands. Hold 1–3 minutes, then switch sides.'
    ],
    tip: '💡 Place a folded blanket under your right hip if it does not reach the floor.'
  },
  {
    name: 'Standing Forward Fold',
    sanskrit: 'Uttanasana',
    emoji: '🔽',
    category: 'stress',
    difficulty: 'beginner',
    benefit: 'Releases tension in the spine and nervous system; calms anxiety quickly.',
    steps: [
      'Stand with feet hip-width apart, hands on your hips.',
      'Inhale and lengthen your spine.',
      'Exhale and hinge at the hips, folding completely forward.',
      'Let your head hang heavy. Grab your elbows and sway gently.',
      'Breathe deeply for 8–10 breaths, letting gravity do the work.'
    ],
    tip: '💡 Bend your knees generously — the goal is a long spine, not straight legs.'
  }
];

/* ──────────────────────────────────────────────────────────
   YOGA CARD RENDERER
────────────────────────────────────────────────────────── */
const yogaGrid = document.getElementById('yogaGrid');

function renderCards() {
  yogaGrid.innerHTML = '';
  POSES.forEach((pose, index) => {
    const card = document.createElement('div');
    card.className = 'yoga-card';
    card.dataset.category = pose.category;
    card.style.animationDelay = `${index * 50}ms`;
    card.innerHTML = `
      <div class="pose-art ${pose.category}">${pose.emoji}</div>
      <div class="card-body">
        <div class="card-name">${pose.name}</div>
        <div class="card-sanskrit">${pose.sanskrit}</div>
        <div class="card-tags">
          <span class="tag tag-${pose.category}">${categoryLabel(pose.category)}</span>
          <span class="tag tag-${pose.difficulty}">${capitalize(pose.difficulty)}</span>
        </div>
        <div class="card-cta">View steps <span class="card-cta-arrow">→</span></div>
      </div>
    `;
    card.addEventListener('click', () => openModal(index));
    yogaGrid.appendChild(card);
  });
}

function categoryLabel(cat) {
  const labels = { stress: 'Stress Relief', flexibility: 'Flexibility', strength: 'Strength', sleep: 'Sleep' };
  return labels[cat] || cat;
}
function capitalize(str) { return str.charAt(0).toUpperCase() + str.slice(1); }

/* Filter */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.yoga-card').forEach(card => {
      card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter);
    });
  });
});

/* ──────────────────────────────────────────────────────────
   POSE MODAL
────────────────────────────────────────────────────────── */
const modalOverlay = document.getElementById('modalOverlay');
const modalClose   = document.getElementById('modalClose');

function openModal(index) {
  const pose = POSES[index];
  document.getElementById('modalArt').textContent  = pose.emoji;
  document.getElementById('modalTitle').textContent = pose.name;
  document.getElementById('modalBenefit').textContent = pose.benefit;

  const tagsEl = document.getElementById('modalTags');
  tagsEl.innerHTML = `
    <span class="tag tag-${pose.category}">${categoryLabel(pose.category)}</span>
    <span class="tag tag-${pose.difficulty}">${capitalize(pose.difficulty)}</span>
  `;

  const stepsEl = document.getElementById('modalSteps');
  stepsEl.innerHTML = pose.steps.map(s => `<li>${s}</li>`).join('');

  document.getElementById('modalTip').textContent = pose.tip;

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

/* ──────────────────────────────────────────────────────────
   MUSIC / YOUTUBE PLAYER
────────────────────────────────────────────────────────── */
const PLAYLISTS = [
  {
    id: 'PLQ6LEcMYMVOME5GvFZXGhBSL5kxBX9DGk',
    title: 'Nature Sounds Collection',
    sub: 'Peaceful sounds from nature\'s heart',
    fallback: 'https://www.youtube.com/embed/videoseries?list=PLQ6LEcMYMVOME5GvFZXGhBSL5kxBX9DGk'
  },
  {
    id: 'PLWDTpMu8d5K0tFW2YeYb4v5nHF3kTNyOC',
    title: 'Guided Meditation Sessions',
    sub: 'Mindful breathing & inner peace',
    fallback: 'https://www.youtube.com/embed/videoseries?list=PLWDTpMu8d5K0tFW2YeYb4v5nHF3kTNyOC'
  },
  {
    id: 'PLO5LE8-b5O8UzHfFsJXLnoKVRroV9EIMB',
    title: 'Sleep Music & Calm',
    sub: 'Drift into peaceful, deep sleep',
    fallback: 'https://www.youtube.com/embed/videoseries?list=PLO5LE8-b5O8UzHfFsJXLnoKVRroV9EIMB'
  },
  {
    id: 'PLqSXkFg7bFSmT_h4VPf0QRg2Y0b1nAIy_',
    title: 'Ambient Healing Music',
    sub: 'Soft frequencies for deep relaxation',
    fallback: 'https://www.youtube.com/embed/videoseries?list=PLqSXkFg7bFSmT_h4VPf0QRg2Y0b1nAIy_'
  }
];

// More reliable individual video embeds as fallback
const FALLBACK_VIDEOS = [
  'https://www.youtube.com/embed/1ZYbU82GVz4?rel=0&modestbranding=1', // Nature sounds
  'https://www.youtube.com/embed/inpok4MKVLM?rel=0&modestbranding=1', // 5 min meditation
  'https://www.youtube.com/embed/lE6RYpe9IT0?rel=0&modestbranding=1', // Sleep music
  'https://www.youtube.com/embed/77ZozI0rw7w?rel=0&modestbranding=1', // Ambient music
];

const TRACK_INFO = [
  { title: 'Nature Sounds Collection',  sub: 'Birds · Rain · Streams · Wind' },
  { title: 'Guided Meditation',         sub: 'Breathe · Centre · Let go' },
  { title: 'Sleep Music',               sub: 'Delta waves · Deep rest · Dreams' },
  { title: 'Ambient Healing Music',     sub: 'Soft frequencies · Calm · Flow' },
];

let currentPlaylist = 0;
const ytFrame   = document.getElementById('ytFrame');
const vinyl     = document.getElementById('vinyl');
const trackTitle = document.getElementById('trackTitle');
const trackSub  = document.getElementById('trackSub');

function switchPlaylist(index) {
  currentPlaylist = index;

  // Update iframe src
  ytFrame.src = FALLBACK_VIDEOS[index];

  // Update track info
  trackTitle.textContent = TRACK_INFO[index].title;
  trackSub.textContent   = TRACK_INFO[index].sub;

  // Tabs
  document.querySelectorAll('.playlist-tab').forEach((tab, i) => {
    tab.classList.toggle('active', i === index);
  });

  // Mood cards
  document.querySelectorAll('.mood-card').forEach((card, i) => {
    card.classList.toggle('active', i === index);
  });

  // Vinyl animation
  vinyl.classList.add('spinning');
}

document.querySelectorAll('.playlist-tab').forEach((tab, i) => {
  tab.addEventListener('click', () => switchPlaylist(i));
});

document.querySelectorAll('.mood-card').forEach((card, i) => {
  card.addEventListener('click', () => {
    switchPlaylist(i);
    document.getElementById('music').scrollIntoView({ behavior: 'smooth' });
  });
});

/* ──────────────────────────────────────────────────────────
   DAILY AFFIRMATIONS
────────────────────────────────────────────────────────── */
const AFFIRMATIONS = [
  { text: "You are allowed to be both a masterpiece and a work in progress simultaneously.", author: "— Sophia Bush" },
  { text: "Within you, there is a stillness and a sanctuary to which you can retreat at any time and be yourself.", author: "— Hermann Hesse" },
  { text: "Breathe. Let go. And remind yourself that this very moment is the only one you know you have for sure.", author: "— Oprah Winfrey" },
  { text: "You don't have to be positive all the time. It's perfectly okay to feel sad, angry, or annoyed. Having feelings doesn't make you a negative person.", author: "— Lori Deschene" },
  { text: "Rest and self-care are so important. When you take time to replenish your spirit, it allows you to serve others from the overflow.", author: "— Eleanor Brownn" },
  { text: "Wherever you are, be all there. The present moment is the only place life truly exists.", author: "— Jim Elliot" },
  { text: "Your calm mind is the ultimate weapon against your challenges. So relax.", author: "— Bryant McGill" },
  { text: "Almost everything will work again if you unplug it for a few minutes — including you.", author: "— Anne Lamott" },
  { text: "Peace is the result of retraining your mind to process life as it is, rather than as you think it should be.", author: "— Wayne Dyer" },
  { text: "You are enough just as you are. Each emotion you feel, everything in your life, everything you do — it all belongs.", author: "— Anne Lamott" },
  { text: "Tension is who you think you should be. Relaxation is who you are.", author: "— Chinese Proverb" },
  { text: "The present moment always will have been. Nothing can take away what you are experiencing right now.", author: "— Eckhart Tolle" },
  { text: "Be gentle with yourself. You are a child of the universe, no less than the trees and the stars.", author: "— Max Ehrmann" },
  { text: "Your mind will answer most questions if you learn to relax and wait for the answer.", author: "— William S. Burroughs" },
  { text: "Slow down and everything you are chasing will come around and catch you.", author: "— John De Paola" },
  { text: "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.", author: "— Mandy Hale" },
  { text: "Healing doesn't mean the damage never existed. It means the damage no longer controls your life.", author: "— Akshay Dubey" },
  { text: "The quieter you become, the more you are able to hear.", author: "— Rumi" },
  { text: "One day at a time. One breath at a time. You've got this.", author: "— Sramana" },
  { text: "Your feelings are valid. Your needs matter. You deserve the same care you give to others.", author: "— Sramana" },
  { text: "Sometimes the most productive thing you can do is rest.", author: "— Mark Black" },
];

let affirmIndex = 0;
let affirmTimer = null;

function getDailyStartIndex() {
  const today = new Date();
  const seed  = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  return seed % AFFIRMATIONS.length;
}

function buildDots() {
  const dotsEl = document.getElementById('affirmDots');
  dotsEl.innerHTML = '';
  AFFIRMATIONS.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'affirm-dot' + (i === affirmIndex ? ' active' : '');
    dot.setAttribute('aria-label', `Affirmation ${i + 1}`);
    dot.addEventListener('click', () => showAffirmation(i));
    dotsEl.appendChild(dot);
  });
}

function updateDots() {
  document.querySelectorAll('.affirm-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === affirmIndex);
  });
}

function showAffirmation(index, animate = true) {
  const card   = document.getElementById('affirmCard');
  const textEl = document.getElementById('affirmText');
  const authEl = document.getElementById('affirmAuthor');
  affirmIndex  = (index + AFFIRMATIONS.length) % AFFIRMATIONS.length;

  if (animate) {
    card.classList.add('fade-out');
    setTimeout(() => {
      textEl.textContent = AFFIRMATIONS[affirmIndex].text;
      authEl.textContent = AFFIRMATIONS[affirmIndex].author;
      card.classList.remove('fade-out');
      card.classList.add('fade-in');
      updateDots();
      setTimeout(() => card.classList.remove('fade-in'), 500);
    }, 450);
  } else {
    textEl.textContent = AFFIRMATIONS[affirmIndex].text;
    authEl.textContent = AFFIRMATIONS[affirmIndex].author;
    updateDots();
  }

  // Reset auto-rotate timer
  clearInterval(affirmTimer);
  affirmTimer = setInterval(() => showAffirmation(affirmIndex + 1), 10000);
}

function initAffirmations() {
  affirmIndex = getDailyStartIndex();
  showAffirmation(affirmIndex, false);
  buildDots();
  affirmTimer = setInterval(() => showAffirmation(affirmIndex + 1), 10000);
  document.getElementById('affirmNext').addEventListener('click', () => showAffirmation(affirmIndex + 1));
}

/* ──────────────────────────────────────────────────────────
   INIT
────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderCards();
  initReveal();
  initAffirmations();

  // Set initial vinyl state
  vinyl.classList.add('spinning');

  // Mood cards initial active
  document.querySelectorAll('.mood-card')[0]?.classList.add('active');
});
