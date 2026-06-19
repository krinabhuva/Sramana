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

const translations = {
  gu: {
    brandName: "શ્રમણ",
    footerBrandName: "શ્રમણ",
    welcomeText: "તમારા શાંતિના સ્થાનમાં સ્વાગત છે",
    heroTitle: "તમે <em>શાંતિ</em> ના હકદાર છો",
    heroSub: "લોગિન નહીં. તણાવ નહીં. ફક્ત શ્વાસ લો.",
    journeyBtn: "તમારી યાત્રા શરૂ કરો",

    navBreathe: "શ્વાસ",
    navYoga: "યોગ",
    navMusic: "સંગીત",

    affirmLabel: "✦ આજનું દ્રઢ વચન",
    affirmNext: "આગળનું દ્રઢ વચન →",
    affirmHint: "નવું દ્રઢ વચન રોજ તમારી રાહ જુએ છે 🌱",

    breathTag: "માર્ગદર્શિત શ્વાસ",
    breathTitle: "તમારા શ્વાસ શોધો",
    breathDesc: "પેટર્ન પસંદ કરો અને દરેક શ્વાસ તમને પુનર્જીવિત કરવા દો.",
    modeLabelCalm: "શાંત",
    modeLabelEnergize: "ઊર્જાવાન",
    modeLabelSleep: "ઊંઘ",
    cycleLabel: "ચક્ર પૂર્ણ થયા:",
    tip1: "ઊંડી શાંતિ માટે નાક વાટે શ્વાસ લો",
    tip2: "તમારી કરોડરજ્જુ સીધી રાખીને બેસો",
    tip3: "તમારી આંખો બંધ કરો અને મુક્ત થાઓ",

    yogaTag: "યોગ પુસ્તકાલય",
    yogaTitle: "હેતુપૂર્વક આગળ વધો",
    yogaDesc: "એવા આસનો જે તમારા શરીરને પોષણ આપે અને મનને શાંત કરે.",
    filterAll: "બધા આસન",
    filterStress: "તણાવ મુક્તિ",
    filterFlexibility: "લવચીકતા",
    filterStrength: "મજબૂતી",
    filterSleep: "ઊંઘ",

    musicTag: "હીલિંગ સંગીત",
    musicTitle: "તમારા મનને આરામ આપો",
    musicDesc: "તમને શાંતિ તરફ દોરી જવા માટે વિશેષ પ્લેલિસ્ટ્સ.",
    tab0: "🌿 કુદરત",
    tab1: "🧘 ધ્યાન",
    tab2: "🌙 ઊંઘ",
    tab3: "🎶 એમ્બિયન્ટ",
    nowPlayingLabel: "હાલમાં વાગી રહ્યું છે",
    playerNote: "શરૂ કરવા માટે પ્લેયરમાં ▶ દબાવો. દરેક પ્લેલિસ્ટ તમારી શાંતિ માટે વિશેષ રૂપે ક્યુરેટ કરવામાં આવી છે.",

    mood0Title: "સમુદ્રના મોજા",
    mood0Desc: "ભરતીને તમારી ચિંતાઓ દૂર લઈ જવા દો",
    mood1Title: "પર્વતની શાંતિ",
    mood1Desc: "દૈનિક જીવનના ઘોંઘાટથી ઉપર ઉઠો",
    mood2Title: "સ્વપ્ન બગીચો",
    mood2Desc: "શાંતિપૂર્ણ ઊંઘમાં હળવાશથી સરી જાઓ",
    mood3Title: "કોસ્મિક પ્રવાહ",
    mood3Desc: "સોફ્ટ એમ્બિયન્ટ ફ્રીક્વન્સીઝમાં ફ્લોટ કરો",

    footerMsg: "શાંતિની શોધમાં રહેલા દરેક થાકેલા આત્મા માટે પ્રેમપૂર્વક બનાવેલ.",
    footerNote: "મફત · ખુલ્લું · કોઈ લોગિન નહીં · તમારા માટે હંમેશા અહીં 🌿",

    breath: {
      inhale: "ધીમે ધીમે નાક દ્વારા શ્વાસ લો…",
      hold: "શ્વાસને હળવાશથી અંદર રાખો…",
      exhale: "ધીમે ધીમે મોઢાથી છોડો…"
    },
    breathUI: {
      start: "શરૂ કરો",
      stop: "બંધ કરો",
      ready: "તૈયાર",
      instruction: "Start દબાવીને breathing session શરૂ કરો"
    }
  },

  en: {
    brandName: "Sramana",
    footerBrandName: "Sramana",
    welcomeText: "Welcome to your sanctuary",
    heroTitle: "You deserve <em>peace.</em>",
    heroSub: "No login. No stress. Just breathe.",
    journeyBtn: "Begin Your Journey",

    navBreathe: "Breathe",
    navYoga: "Yoga",
    navMusic: "Music",

    affirmLabel: "✦ Today's Affirmation",
    affirmNext: "Next affirmation →",
    affirmHint: "A new affirmation greets you every day 🌱",

    breathTag: "Guided Breathing",
    breathTitle: "Find Your Breath",
    breathDesc: "Choose a pattern and let each inhale and exhale restore you.",
    modeLabelCalm: "Calm",
    modeLabelEnergize: "Energize",
    modeLabelSleep: "Sleep",
    cycleLabel: "Cycles completed:",
    tip1: "Breathe through your nose for deeper calm",
    tip2: "Sit with your spine gently upright",
    tip3: "Close your eyes and let go",

    yogaTag: "Yoga Library",
    yogaTitle: "Move With Intention",
    yogaDesc: "Poses that nurture your body and calm your mind.",
    filterAll: "All Poses",
    filterStress: "Stress Relief",
    filterFlexibility: "Flexibility",
    filterStrength: "Strength",
    filterSleep: "Sleep",

    musicTag: "Healing Sounds",
    musicTitle: "Rest Your Mind",
    musicDesc: "Curated playlists to carry you into stillness.",
    tab0: "🌿 Nature",
    tab1: "🧘 Meditation",
    tab2: "🌙 Sleep",
    tab3: "🎶 Ambient",
    nowPlayingLabel: "Now Playing",
    playerNote: "Press ▶ in the player to begin. Each playlist is hand-curated for your peace.",

    mood0Title: "Ocean Waves",
    mood0Desc: "Let the tide carry your worries away",
    mood1Title: "Mountain Stillness",
    mood1Desc: "Rise above the noise of daily life",
    mood2Title: "Dream Garden",
    mood2Desc: "Drift gently into peaceful sleep",
    mood3Title: "Cosmic Flow",
    mood3Desc: "Float through soft ambient frequencies",

    footerMsg: "Made with love for every tired soul seeking peace.",
    footerNote: "Free · Open · No login · Always here for you 🌿",

    breath: {
      inhale: "Breathe in slowly through your nose…",
      hold: "Hold gently at the top of your breath…",
      exhale: "Release slowly through your mouth…",
    },
    breathUI: {
      start: "Start",
      stop: "Stop",
      ready: "Ready",
      instruction: "Press Start to begin your breathing session"
    }
  }
};

let currentLang = "gu";
let activePoseIndex = null; // To track open pose modal

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

function applyLanguage() {
  const t = translations[currentLang];
  
  // Nav
  document.getElementById("navBreathe").textContent = t.navBreathe;
  document.getElementById("navYoga").textContent = t.navYoga;
  document.getElementById("navMusic").textContent = t.navMusic;
  document.getElementById("brandName").textContent = t.brandName;

  // Hero
  document.getElementById("welcomeText").textContent = t.welcomeText;
  document.getElementById("heroTitle").innerHTML = t.heroTitle;
  document.getElementById("heroSub").textContent = t.heroSub;
  document.getElementById("journeyBtn").textContent = t.journeyBtn;

  // Affirmations Labels
  document.getElementById("affirmLabel").textContent = t.affirmLabel;
  document.getElementById("affirmNext").textContent = t.affirmNext;
  document.getElementById("affirmHint").textContent = t.affirmHint;

  // Breathing labels
  document.getElementById("breathTag").textContent = t.breathTag;
  document.getElementById("breathTitle").textContent = t.breathTitle;
  document.getElementById("breathDesc").textContent = t.breathDesc;
  document.getElementById("modeLabelCalm").textContent = t.modeLabelCalm;
  document.getElementById("modeLabelEnergize").textContent = t.modeLabelEnergize;
  document.getElementById("modeLabelSleep").textContent = t.modeLabelSleep;
  document.getElementById("cycleLabel").textContent = t.cycleLabel;
  document.getElementById("tip1").textContent = t.tip1;
  document.getElementById("tip2").textContent = t.tip2;
  document.getElementById("tip3").textContent = t.tip3;

  // Yoga labels
  document.getElementById("yogaTag").textContent = t.yogaTag;
  document.getElementById("yogaTitle").textContent = t.yogaTitle;
  document.getElementById("yogaDesc").textContent = t.yogaDesc;
  document.getElementById("filterAll").textContent = t.filterAll;
  document.getElementById("filterStress").textContent = t.filterStress;
  document.getElementById("filterFlexibility").textContent = t.filterFlexibility;
  document.getElementById("filterStrength").textContent = t.filterStrength;
  document.getElementById("filterSleep").textContent = t.filterSleep;

  // Music labels
  document.getElementById("musicTag").textContent = t.musicTag;
  document.getElementById("musicTitle").textContent = t.musicTitle;
  document.getElementById("musicDesc").textContent = t.musicDesc;
  document.getElementById("tab0").textContent = t.tab0;
  document.getElementById("tab1").textContent = t.tab1;
  document.getElementById("tab2").textContent = t.tab2;
  document.getElementById("tab3").textContent = t.tab3;
  document.getElementById("nowPlayingLabel").textContent = t.nowPlayingLabel;
  document.getElementById("playerNote").textContent = t.playerNote;

  // Mood cards content
  document.getElementById("mood0Title").textContent = t.mood0Title;
  document.getElementById("mood0Desc").textContent = t.mood0Desc;
  document.getElementById("mood1Title").textContent = t.mood1Title;
  document.getElementById("mood1Desc").textContent = t.mood1Desc;
  document.getElementById("mood2Title").textContent = t.mood2Title;
  document.getElementById("mood2Desc").textContent = t.mood2Desc;
  document.getElementById("mood3Title").textContent = t.mood3Title;
  document.getElementById("mood3Desc").textContent = t.mood3Desc;

  // Footer
  document.getElementById("footerMsg").textContent = t.footerMsg;
  document.getElementById("footerNote").textContent = t.footerNote;
  document.getElementById("footerBrandName").textContent = t.footerBrandName;

  // Update ongoing instruction if breathing is stopped
  if (!isBreathing) {
    breathPhaseEl.textContent = t.breathUI.ready;
    breathInstr.textContent = t.breathUI.instruction;
    breathStart.textContent = t.breathUI.start;
  } else {
    breathStart.textContent = t.breathUI.stop;
  }

  // If breathing is running, update the current instruction/phase in real-time
  if (isBreathing && currentPhase) {
    let displayPhase = currentPhase;
    if (currentLang === "gu") {
      if (currentPhase === 'Inhale') displayPhase = 'શ્વાસ અંદર લો';
      else if (currentPhase === 'Hold') displayPhase = 'શ્વાસ રોકો';
      else if (currentPhase === 'Exhale') displayPhase = 'શ્વાસ બહાર કાઢો';
    }
    breathPhaseEl.textContent = displayPhase;
    
    // Get the current instruction translation
    const bt = translations[currentLang].breath;
    if (currentPhase === 'Inhale') breathInstr.textContent = bt.inhale;
    else if (currentPhase === 'Hold') breathInstr.textContent = bt.hold;
    else if (currentPhase === 'Exhale') breathInstr.textContent = bt.exhale;
  }
}

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

  // Translate phase header in breath circle
  let displayPhase = phase;
  if (currentLang === "gu") {
    if (phase === 'Inhale') displayPhase = 'શ્વાસ અંદર લો';
    else if (phase === 'Hold') displayPhase = 'શ્વાસ રોકો';
    else if (phase === 'Exhale') displayPhase = 'શ્વાસ બહાર કાઢો';
  }

  breathPhaseEl.textContent = displayPhase;
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
  const t = translations[currentLang].breath;

  countdown(m.inhale, 'Inhale', t.inhale, () => {
    if (m.hold > 0) {
      countdown(m.hold, 'Hold', t.hold, () => {
        countdown(m.exhale, 'Exhale', t.exhale, () => {
          cycleCount++;
          cycleCountEl.textContent = cycleCount;
          if (isBreathing) runCycle();
        });
      });
    } else {
      countdown(m.exhale, 'Exhale', t.exhale, () => {
        cycleCount++;
        cycleCountEl.textContent = cycleCount;
        if (isBreathing) runCycle();
      });
    }
  });
}

function startBreathing() {
  const t = translations[currentLang].breathUI;

  isBreathing = true;
  cycleCount  = 0;
  cycleCountEl.textContent = 0;

  breathStart.textContent  = t.stop;
  breathStart.style.background = '#c97b7b';

  runCycle();
}

function stopBreathing() {
  const t = translations[currentLang].breathUI;

  isBreathing = false;
  clearInterval(breathTimer);

  breathStart.textContent     = t.start;
  breathStart.style.background = '';

  breathCircle.className    = 'breath-circle';
  breathPhaseEl.textContent = t.ready;
  breathCountEl.textContent = '—';
  breathInstr.textContent   = t.instruction;
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
    name_gu: 'તાડાસન (પર્વત આસન)',
    sanskrit: 'Tadasana',
    emoji: '🧘',
    category: 'stress',
    difficulty: 'beginner',
    benefit: 'Grounds your energy and brings awareness into the present moment.',
    benefit_gu: 'તમારી ઉર્જાને પૃથ્વી સાથે જોડે છે અને વર્તમાન ક્ષણમાં જાગૃતિ લાવે છે.',
    steps: [
      'Stand with feet together, arms at your sides.',
      'Press all four corners of your feet into the earth.',
      'Engage your thigh muscles and lengthen your spine upward.',
      'Roll shoulders back and down, open your chest.',
      'Breathe deeply and hold for 5–10 breaths, feeling rooted.'
    ],
    steps_gu: [
      'પગ ભેગા રાખીને, હાથ તમારી બાજુ પર રાખીને ઊભા રહો.',
      'તમારા પગના ચારેય ખૂણાને પૃથ્વી પર મજબૂતીથી દબાવો.',
      'તમારી જાંઘના સ્નાયુઓને સક્રિય કરો અને તમારી કરોડરજ્જુને ઉપર તરફ લંબાવો.',
      'ખભા પાછળ અને નીચેની તરફ વાળો, છાતી ખુલ્લી રાખો.',
      'ઊંડો શ્વાસ લો અને ૫-૧૦ શ્વાસ સુધી રોકાઈ જાઓ, સ્થિરતા અનુભવો.'
    ],
    tip: '💡 Imagine a thread gently pulling the crown of your head toward the sky.',
    tip_gu: '💡 એવી કલ્પના કરો કે એક અદ્રશ્ય દોરો તમારા માથાને હળવાશથી આકાશ તરફ ખેંચી રહ્યો છે.'
  },
  {
    name: "Child's Pose",
    name_gu: 'બાલાસન (બાળ આસન)',
    sanskrit: 'Balasana',
    emoji: '🌿',
    category: 'stress',
    difficulty: 'beginner',
    benefit: 'Deeply calms the nervous system and releases tension in the back, neck, and hips.',
    benefit_gu: 'ચેતાતંત્રને ઊંડી શાંતિ આપે છે અને પીઠ, ગરદન અને નિતંબના તણાવને મુક્ત કરે છે.',
    steps: [
      'Kneel on your mat with big toes touching, knees wide apart.',
      'Exhale and fold forward, lowering your torso between your thighs.',
      'Extend your arms forward, palms down, forehead resting on the mat.',
      'Breathe slowly into your lower back, feeling it rise and fall.',
      'Stay for 1–3 minutes, melting deeper with each breath.'
    ],
    steps_gu: [
      'પગના અંગૂઠા જોડાયેલા અને ઘૂંટણ પહોળા રાખીને યોગ મેટ પર ઘૂંટણિયે બેસો.',
      'શ્વાસ છોડતી વખતે આગળ નમો, તમારી જાંઘો વચ્ચે ધડને નીચે લાવો.',
      'હાથ આગળ લંબાવો, હથેળીઓ નીચે તરફ અને કપાળને મેટ પર રાખો.',
      'તમારી પીઠના નીચલા ભાગમાં ધીમે ધીમે શ્વાસ લો, તેનો ઉતાર-ચઢાવ અનુભવો.',
      '૧-૩ મિનિટ માટે રોકાઈ જાઓ, દરેક શ્વાસ સાથે વધુ હળવા થાઓ.'
    ],
    tip: '💡 Place a folded blanket under your forehead or knees for extra comfort.',
    tip_gu: '💡 વધુ આરામ માટે તમારા કપાળ અથવા ઘૂંટણ નીચે વળેલો ધાબળો મૂકો.'
  },
  {
    name: 'Downward Dog',
    name_gu: 'અધો મુખ શ્વાનાસન',
    sanskrit: 'Adho Mukha Svanasana',
    emoji: '🐕',
    category: 'flexibility',
    difficulty: 'beginner',
    benefit: 'Stretches the entire back body while energising the mind with fresh circulation.',
    benefit_gu: 'આખા શરીરના પાછળના ભાગને ખેંચાણ આપે છે અને મગજમાં નવું રક્ત પરિભ્રમણ લાવી ઉર્જાવાન બનાવે છે.',
    steps: [
      'Begin on hands and knees, wrists under shoulders, knees under hips.',
      'Tuck your toes under and press your hips up and back.',
      'Straighten your arms, spread fingers wide, and press palms firmly.',
      'Keep your head between your arms, ears aligned with upper arms.',
      'Pedal your heels gently to deepen the stretch. Hold 5–8 breaths.'
    ],
    steps_gu: [
      'હાથ અને ઘૂંટણ પર શરૂઆત કરો, કાંડા ખભાની નીચે અને ઘૂંટણ નિતંબની નીચે હોવા જોઈએ.',
      'પગની આંગળીઓને અંદર વાળો અને તમારા નિતંબને ઉપર અને પાછળ ધકેલો.',
      'હાથ સીધા કરો, આંગળીઓ ફેલાવો અને હથેળીઓને મજબૂતીથી દબાવો.',
      'માથું હાથની વચ્ચે રાખો, કાન તમારા હાથની લાઈનમાં હોવા જોઈએ.',
      'ખેંચાણ વધારવા માટે તમારા પગને ધીમે-ધીમે વારાફરતી વાળો. ૫-૮ શ્વાસ માટે રહો.'
    ],
    tip: '💡 Bend your knees slightly if your hamstrings are tight — the key is a long spine.',
    tip_gu: '💡 જો તમારી હેમસ્ટ્રિંગ્સ ચુસ્ત હોય તો ઘૂંટણ સહેજ વાળો — મહત્વનું કરોડરજ્જુ લાંબી રાખવાનું છે.'
  },
  {
    name: 'Warrior I',
    name_gu: 'વીરભદ્રાસન ૧',
    sanskrit: 'Virabhadrasana I',
    emoji: '⚔️',
    category: 'strength',
    difficulty: 'intermediate',
    benefit: 'Builds strength and confidence while opening the chest and hips.',
    benefit_gu: 'છાતી અને નિતંબને ખોલવાની સાથે મજબૂતી અને આત્મવિશ્વાસ વધારે છે.',
    steps: [
      'From standing, step your left foot back 3–4 feet and turn it 45°.',
      'Bend your right knee directly over your right ankle.',
      'Square your hips toward the front of your mat.',
      'Raise your arms overhead, palms facing each other.',
      'Gaze upward or forward. Hold 5–7 breaths, then switch sides.'
    ],
    steps_gu: [
      'ઊભા રહીને, તમારા ડાબા પગને ૩-૪ ફૂટ પાછળ લઈ જાઓ અને તેને ૪૫ ડિગ્રી પર ફેરવો.',
      'તમારા જમણા ઘૂંટણને સીધા તમારા જમણા પગની ઘૂંટી ઉપર વાળો.',
      'તમારા નિતંબને તમારી મેટની સામેની તરફ સીધા રાખો.',
      'બંને હાથ માથા ઉપર ઉઠાવો, હથેળીઓ એકબીજાની સામે રાખો.',
      'ઉપર અથવા સામે જુઓ. ૫-૭ શ્વાસ સુધી રોકાઓ, પછી બીજી બાજુ કરો.'
    ],
    tip: '💡 Press your back heel firmly into the mat to activate the whole leg.',
    tip_gu: '💡 આખા પગને સક્રિય કરવા માટે તમારા પાછળના પગની એડીને મેટમાં મજબૂતીથી દબાવો.'
  },
  {
    name: 'Warrior II',
    name_gu: 'વીરભદ્રાસન ૨',
    sanskrit: 'Virabhadrasana II',
    emoji: '🛡️',
    category: 'strength',
    difficulty: 'intermediate',
    benefit: 'Strengthens legs, opens hips and chest, cultivates inner power.',
    benefit_gu: 'પગને મજબૂત બનાવે છે, નિતંબ અને છાતી ખોલે છે, આંતરિક શક્તિ વધારે છે.',
    steps: [
      'Stand with feet wide (about 4 feet apart).',
      'Turn your right foot out 90° and left foot in slightly.',
      'Bend your right knee over your right ankle.',
      'Extend arms parallel to the floor, palms down.',
      'Gaze over your right fingertips. Hold 5–7 breaths each side.'
    ],
    steps_gu: [
      'પગ પહોળા રાખીને ઊભા રહો (આશરે ૪ ફૂટ દૂર).',
      'તમારા જમણા પગને ૯૦ ડિગ્રી બહાર અને ડાબા પગને સહેજ અંદર ફેરવો.',
      'જમણો ઘૂંટણ જમણી ઘૂંટીની બરાબર ઉપર વાળો.',
      'બંને હાથ જમીનને સમાંતર ફેલાવો, હથેળીઓ નીચે તરફ રાખો.',
      'જમણા હાથની આંગળીઓ તરફ નજર રાખો. દરેક બાજુ ૫-૭ શ્વાસ સુધી રહો.'
    ],
    tip: '💡 Keep your front knee tracking over the second toe — avoid it collapsing inward.',
    tip_gu: '💡 તમારા આગળના ઘૂંટણને બીજી આંગળીની દિશામાં રાખો — તેને અંદર તરફ વળવા ન દો.'
  },
  {
    name: 'Tree Pose',
    name_gu: 'વૃક્ષાસન',
    sanskrit: 'Vrksasana',
    emoji: '🌳',
    category: 'stress',
    difficulty: 'intermediate',
    benefit: 'Improves balance and focus, quieting a busy mind with mindful concentration.',
    benefit_gu: 'સંતુલન અને એકાગ્રતામાં સુધારો કરે છે, વ્યસ્ત મનને શાંત કરે છે.',
    steps: [
      'Stand in Mountain Pose. Shift your weight to your left foot.',
      'Place your right foot on your inner calf or inner thigh (avoid the knee).',
      'Bring hands to heart center or raise them overhead like branches.',
      'Fix your gaze on a still point to help maintain balance.',
      'Hold 5–8 breaths, then switch sides.'
    ],
    steps_gu: [
      'તાડાસનમાં ઊભા રહો. તમારું વજન ડાબા પગ પર સ્થાનાંતરિત કરો.',
      'તમારા જમણા પગને ડાબી જાંઘની અંદરની બાજુએ અથવા પિંડલી પર મૂકો (ઘૂંટણ પર નહીં).',
      'હાથ નમસ્કારની મુદ્રામાં લાવો અથવા શાખાઓની જેમ માથા પર ઊંચા કરો.',
      'સંતુલન જાળવવામાં મદદ કરવા માટે સામે કોઈ એક સ્થિર બિંદુ પર નજર કેન્દ્રિત કરો.',
      '૫-૮ શ્વાસ સુધી રહો, પછી બીજી બાજુ કરો.'
    ],
    tip: '💡 If you wobble, touch a wall lightly — balance is a practice, not a performance.',
    tip_gu: '💡 જો તમે ડોલવા લાગો, તો દિવાલને હળવાશથી સ્પર્શ કરો — સંતુલન એ અભ્યાસ છે, પ્રદર્શન નથી.'
  },
  {
    name: 'Cat-Cow',
    name_gu: 'માર્જરીઆસન - બિતિલાસન (બિલાડી-ગાય આસન)',
    sanskrit: 'Marjaryasana-Bitilasana',
    emoji: '🐱',
    category: 'flexibility',
    difficulty: 'beginner',
    benefit: 'Gently massages the spine and belly, relieving back tension and improving mood.',
    benefit_gu: 'કરોડરજ્જુ અને પેટની નમ્ર માલિશ કરે છે, પીઠના તણાવથી રાહત આપે છે અને મૂડ સુધારે છે.',
    steps: [
      'Start on hands and knees, wrists under shoulders, knees under hips.',
      'Inhale: drop your belly, lift your head and tailbone (Cow).',
      'Exhale: round your spine toward the ceiling, tuck chin and tailbone (Cat).',
      'Flow slowly between the two shapes, one breath per movement.',
      'Continue for 8–12 rounds, letting the breath lead.'
    ],
    steps_gu: [
      'બંને હાથ અને ઘૂંટણ પર શરૂ કરો, કાંડા ખભાની નીચે અને ઘૂંટણ નિતંબની નીચે રાખો.',
      'શ્વાસ લો: પેટ નીચે કરો, માથું અને નિતંબ ઉપર ઉઠાવો (ગાયની સ્થિતિ).',
      'શ્વાસ છોડો: કરોડરજ્જુને છત તરફ ગોળાકાર કરો, રામરામ અને નિતંબને અંદર ખેંચો (બિલાડીની સ્થિતિ).',
      'એક શ્વાસ સાથે એક હિલચાલ કરીને, બંને સ્થિતિઓ વચ્ચે ધીમે ધીમે ફ્લો કરો.',
      '૮-૧૨ રાઉન્ડ સુધી ચાલુ રાખો, શ્વાસને હિલચાલ દોરવા દો.'
    ],
    tip: '💡 Close your eyes and focus on how each vertebra moves — it becomes a moving meditation.',
    tip_gu: '💡 તમારી આંખો બંધ કરો અને ધ્યાન કેન્દ્રિત કરો કે દરેક કરોડ કેવી રીતે ફરે છે — તે એક ચલિત ધ્યાન બની જાય છે.'
  },
  {
    name: 'Legs Up The Wall',
    name_gu: 'વિપરીત કરણી',
    sanskrit: 'Viparita Karani',
    emoji: '🦵',
    category: 'sleep',
    difficulty: 'beginner',
    benefit: 'Reverses leg fatigue, calms the nervous system, and prepares the body for sleep.',
    benefit_gu: 'પગના થાકને દૂર કરે છે, નર્વસ સિસ્ટમને શાંત કરે છે અને શરીરને ઊંઘ માટે તૈયાર કરે છે.',
    steps: [
      'Sit close to a wall with your side touching it.',
      'Swing your legs up the wall as you lower your back to the floor.',
      'Let your arms rest at your sides, palms up.',
      'Close your eyes and breathe naturally.',
      'Stay 5–15 minutes, letting gravity do the work.'
    ],
    steps_gu: [
      'દિવાલની નજીક એવી રીતે બેસો કે તમારી એક બાજુ દિવાલને અડે.',
      'તમારા પગ દિવાલ પર ઊંચા કરો અને તમારી પીઠને ફ્લોર પર નીચે કરો.',
      'હાથને તમારી બાજુઓ પર આરામથી રાખો, હથેળીઓ ઉપર તરફ.',
      'આંખો બંધ કરો અને કુદરતી રીતે શ્વાસ લો.',
      '૫-૧૫ મિનિટ સુધી રહો, ગુરુત્વાકર્ષણને તેનું કામ કરવા દો.'
    ],
    tip: '💡 Place a folded blanket under your lower back for a gentle restorative arch.',
    tip_gu: '💡 પીઠના નીચલા ભાગમાં નમ્ર ટેકા માટે તેની નીચે વળેલો ધાબળો મૂકો.'
  },
  {
    name: 'Corpse Pose',
    name_gu: 'શવાસન',
    sanskrit: 'Savasana',
    emoji: '☁️',
    category: 'sleep',
    difficulty: 'beginner',
    benefit: 'The most important pose — allows your body and mind to fully integrate and rest.',
    benefit_gu: 'સૌથી મહત્વપૂર્ણ આસન — તમારા શરીર અને મનને સંપૂર્ણ આરામ અને એકીકૃત થવા દે છે.',
    steps: [
      'Lie flat on your back, arms slightly away from your body, palms up.',
      'Let your feet fall naturally outward.',
      'Close your eyes and release all effort from every muscle.',
      'Breathe naturally and let your body feel heavy and supported.',
      'Rest for 5–20 minutes, allowing complete stillness.'
    ],
    steps_gu: [
      'પીઠ પર સીધા સૂઈ જાઓ, હાથ શરીરથી સહેજ દૂર, હથેળીઓ ઉપર તરફ રાખો.',
      'પગને કુદરતી રીતે બહારની તરફ ઢળવા દો.',
      'આંખો બંધ કરો અને દરેક સ્નાયુમાંથી બધો જ પ્રયાસ છોડી દો.',
      'કુદરતી રીતે શ્વાસ લો અને તમારા શરીરને હળવું અને જમીન પર ટેકવાયેલું અનુભવો.',
      'સંપૂર્ણ સ્થિરતા મેળવીને, ૫-૨૦ મિનિટ માટે આરામ કરો.'
    ],
    tip: '💡 Use an eye pillow to block light and deepen relaxation.',
    tip_gu: '💡 પ્રકાશને રોકવા અને આરામ વધારવા માટે આઈ પીલો (આંખના ઓશીકા) નો ઉપયોગ કરો.'
  },
  {
    name: 'Seated Forward Bend',
    name_gu: 'પશ્ચિમોત્તાનાસન',
    sanskrit: 'Paschimottanasana',
    emoji: '🧎',
    category: 'flexibility',
    difficulty: 'intermediate',
    benefit: 'Deeply stretches the spine and hamstrings, calming anxiety and quieting the mind.',
    benefit_gu: 'કરોડરજ્જુ અને હેમસ્ટ્રિંગ્સને ખેંચે છે, ચિંતા ઘટાડે છે અને મનને શાંત કરે છે.',
    steps: [
      'Sit on your mat with legs extended straight in front of you.',
      'Inhale, lengthen your spine and reach arms up.',
      'Exhale, hinge from your hips (not your waist) and fold forward.',
      'Hold your shins, ankles, or feet — wherever you can reach comfortably.',
      'With each exhale, allow a little more release. Stay 5–10 breaths.'
    ],
    steps_gu: [
      'પગ સીધા આગળ ફેલાવીને યોગ મેટ પર બેસો.',
      'શ્વાસ લો, તમારી કરોડરજ્જુને લાંબી કરો અને બંને હાથ ઉપર કરો.',
      'શ્વાસ છોડો, નિતંબથી (કમરથી નહીં) આગળની તરફ ઝૂકો અને નમો.',
      'તમારી પિંડલી, પગની ઘૂંટી અથવા પગ પકડો — જ્યાં સુધી તમે આરામથી પહોંચી શકો.',
      'દરેક શ્વાસ છોડવા સાથે, વધુ હળવા થાઓ. ૫-૧૦ શ્વાસ માટે રહો.'
    ],
    tip: '💡 Sit on a folded blanket if your lower back rounds excessively.',
    tip_gu: '💡 જો તમારી પીઠ વધુ ગોળાકાર થતી હોય તો વળેલા ધાબળા પર બેસો.'
  },
  {
    name: 'Bridge Pose',
    name_gu: 'સેતુબંધાસન',
    sanskrit: 'Setu Bandha Sarvangasana',
    emoji: '🌉',
    category: 'strength',
    difficulty: 'intermediate',
    benefit: 'Strengthens the back body, opens the chest and heart, and gently energises.',
    benefit_gu: 'પીઠના સ્નાયુઓને મજબૂત કરે છે, છાતી અને હૃદય ખોલે છે અને ઉર્જા પ્રદાન કરે છે.',
    steps: [
      'Lie on your back with knees bent, feet flat on the floor, hip-width apart.',
      'Press your feet and arms into the floor.',
      'Exhale and lift your hips toward the ceiling.',
      'Clasp your hands under your back and press your arms down.',
      'Hold 5–8 breaths, then release slowly, one vertebra at a time.'
    ],
    steps_gu: [
      'ઘૂંટણ વાળેલા રાખીને પીઠ પર સૂઈ જાઓ, પગ જમીન પર નિતંબ જેટલા પહોળા રાખો.',
      'તમારા પગ અને હાથને ફ્લોર પર મજબૂતીથી દબાવો.',
      'શ્વાસ છોડો અને તમારા નિતંબને છત તરફ ઉપર ઉઠાવો.',
      'હાથ પીઠની નીચે જોડો અને હાથને નીચેની તરફ દબાવો.',
      '૫-૮ શ્વાસ માટે રહો, પછી કરોડરજ્જુના એક-એક મણકાને નીચે લાવતા ધીમેથી મુક્ત કરો.'
    ],
    tip: '💡 Keep your thighs parallel — resist the urge to let your knees splay outward.',
    tip_gu: '💡 તમારી જાંઘોને સમાંતર રાખો — ઘૂંટણને બહારની તરફ ફેલાવા ન દો.'
  },
  {
    name: 'Happy Baby',
    name_gu: 'આનંદ બાલાસન',
    sanskrit: 'Ananda Balasana',
    emoji: '👶',
    category: 'stress',
    difficulty: 'beginner',
    benefit: 'Opens the hips and inner groins while releasing tension from the spine and mind.',
    benefit_gu: 'નિતંબ અને સાથળના સ્નાયુઓને ખોલે છે તેમજ કરોડરજ્જુ અને મનને શાંતિ આપે છે.',
    steps: [
      'Lie on your back. Exhale and draw your knees toward your chest.',
      'Inhale and grip the outer edges of your feet with your hands.',
      'Open your knees wider than your torso, bringing them toward the armpits.',
      'Stack each ankle directly above the knee, feet flexed.',
      'Rock gently side to side like a happy baby. Stay 1–2 minutes.'
    ],
    steps_gu: [
      'પીઠ પર સૂઈ જાઓ. શ્વાસ છોડો અને ઘૂંટણને છાતી તરફ ખેંચો.',
      'શ્વાસ લો અને તમારા હાથથી પગની બહારની કિનારીઓ પકડો.',
      'ઘૂંટણને તમારા ધડ કરતાં પહોળા કરો, તેમને બગલ તરફ લાવો.',
      'દરેક ઘૂંટીને સીધા ઘૂંટણની ઉપર રાખો, પગ વળેલા હોવા જોઈએ.',
      'આનંદી બાળકની જેમ ધીમેથી ડાબે-જમણે ઝૂલો. ૧-૨ મિનિટ સુધી રહો.'
    ],
    tip: '💡 If you cannot reach your feet, hold your calves or use a strap.',
    tip_gu: '💡 જો તમે પગ સુધી પહોંચી શકતા નથી, તો તમારી પિંડલીઓ પકડો અથવા યોગા સ્ટ્રેપનો ઉપયોગ કરો.'
  },
  {
    name: 'Pigeon Pose',
    name_gu: 'એક પાદ રાજકપોતાસન (કપોતાસન)',
    sanskrit: 'Eka Pada Rajakapotasana',
    emoji: '🕊️',
    category: 'flexibility',
    difficulty: 'intermediate',
    benefit: 'One of the most effective hip openers — releases deep emotional tension stored in the hips.',
    benefit_gu: 'સૌથી અસરકારક નિતંબ ખોલનાર આસન — નિતંબમાં સંગ્રહિત ઊંડા માનસિક તણાવને મુક્ત કરે છે.',
    steps: [
      'From Downward Dog, bring your right knee forward toward your right wrist.',
      'Lower your right shin to the mat at an angle comfortable for you.',
      'Extend your left leg straight back, knee and top of foot on the mat.',
      'Inhale to lengthen, then exhale and fold forward over your right shin.',
      'Rest your forehead on your hands. Hold 1–3 minutes, then switch sides.'
    ],
    steps_gu: [
      'અધો મુખ શ્વાનાસનમાંથી, તમારા જમણા ઘૂંટણને જમણા કાંડા તરફ આગળ લાવો.',
      'તમારા જમણા પગની નળીને તમારા માટે અનુકૂળ ખૂણા પર મેટ પર નીચે કરો.',
      'ડાબા પગને સીધો પાછળ લંબાવો, ઘૂંટણ અને પગનો ઉપરનો ભાગ મેટ પર રાખો.',
      'લંબાઈ વધારવા શ્વાસ લો, પછી શ્વાસ છોડો અને જમણા પગ તરફ આગળ નમો.',
      'તમારા હાથ પર કપાળ ટેકવો. ૧-૩ મિનિટ સુધી રહો, પછી બીજી બાજુ કરો.'
    ],
    tip: '💡 Place a folded blanket under your right hip if it does not reach the floor.',
    tip_gu: '💡 જો તમારું નિતંબ જમીન સુધી ન પહોંચે તો તેની નીચે વળેલો ધાબળો મૂકો.'
  },
  {
    name: 'Standing Forward Fold',
    name_gu: 'ઉત્તાનાસન',
    sanskrit: 'Uttanasana',
    emoji: '🔽',
    category: 'stress',
    difficulty: 'beginner',
    benefit: 'Releases tension in the spine and nervous system; calms anxiety quickly.',
    benefit_gu: 'કરોડરજ્જુ અને ચેતાતંત્રમાં તણાવ મુક્ત કરે છે; ચિંતા ઝડપથી શાંત કરે છે.',
    steps: [
      'Stand with feet hip-width apart, hands on your hips.',
      'Inhale and lengthen your spine.',
      'Exhale and hinge at the hips, folding completely forward.',
      'Let your head hang heavy. Grab your elbows and sway gently.',
      'Breathe deeply for 8–10 breaths, letting gravity do the work.'
    ],
    steps_gu: [
      'પગ નિતંબ જેટલા પહોળા રાખીને ઊભા રહો, હાથ નિતંબ પર રાખો.',
      'શ્વાસ લો અને તમારી કરોડરજ્જુને લાંબી કરો.',
      'શ્વાસ છોડો અને નિતંબથી આગળ નમીને સંપૂર્ણપણે નીચે વળો.',
      'માથું નીચે લટકવા દો. કોણીઓ પકડો અને હળવાશથી ઝૂલો.',
      'ગુરુત્વાકર્ષણને પોતાનું કામ કરવા દેતા, ૮-૧૦ ઊંડા શ્વાસ લો.'
    ],
    tip: '💡 Bend your knees generously — the goal is a long spine, not straight legs.',
    tip_gu: '💡 ઘૂંટણને સહેજ વાળો — ધ્યેય લાંબી કરોડરજ્જુ મેળવવાનું છે, સીધા પગ નહીં.'
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
    
    const name = currentLang === "gu" ? pose.name_gu : pose.name;
    const ctaText = currentLang === "gu" ? "પગલાં જુઓ" : "View steps";

    card.innerHTML = `
      <div class="pose-art ${pose.category}">${pose.emoji}</div>
      <div class="card-body">
        <div class="card-name">${name}</div>
        <div class="card-sanskrit">${pose.sanskrit}</div>
        <div class="card-tags">
          <span class="tag tag-${pose.category}">${categoryLabel(pose.category)}</span>
          <span class="tag tag-${pose.difficulty}">${difficultyLabel(pose.difficulty)}</span>
        </div>
        <div class="card-cta">${ctaText} <span class="card-cta-arrow">→</span></div>
      </div>
    `;
    card.addEventListener('click', () => openModal(index));
    yogaGrid.appendChild(card);
  });
}

function categoryLabel(cat) {
  const labelsEn = { stress: 'Stress Relief', flexibility: 'Flexibility', strength: 'Strength', sleep: 'Sleep' };
  const labelsGu = { stress: 'તણાવ મુક્તિ', flexibility: 'લવચીકતા', strength: 'મજબૂતી', sleep: 'ઊંઘ' };
  const labels = currentLang === "gu" ? labelsGu : labelsEn;
  return labels[cat] || cat;
}

function difficultyLabel(diff) {
  const diffEn = { beginner: 'Beginner', intermediate: 'Intermediate', advanced: 'Advanced' };
  const diffGu = { beginner: 'પ્રારંભિક', intermediate: 'મધ્યમ', advanced: 'ઉન્નત' };
  return currentLang === "gu" ? diffGu[diff] : diffEn[diff];
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
  activePoseIndex = index;
  const pose = POSES[index];
  
  const name = currentLang === "gu" ? pose.name_gu : pose.name;
  const benefit = currentLang === "gu" ? pose.benefit_gu : pose.benefit;
  const steps = currentLang === "gu" ? pose.steps_gu : pose.steps;
  const tip = currentLang === "gu" ? pose.tip_gu : pose.tip;

  document.getElementById('modalArt').textContent  = pose.emoji;
  document.getElementById('modalTitle').textContent = name;
  document.getElementById('modalBenefit').textContent = benefit;

  const tagsEl = document.getElementById('modalTags');
  tagsEl.innerHTML = `
    <span class="tag tag-${pose.category}">${categoryLabel(pose.category)}</span>
    <span class="tag tag-${pose.difficulty}">${difficultyLabel(pose.difficulty)}</span>
  `;

  const stepsEl = document.getElementById('modalSteps');
  stepsEl.innerHTML = steps.map(s => `<li>${s}</li>`).join('');

  document.getElementById('modalTip').textContent = tip;
  document.querySelector('.modal-steps-label').textContent = currentLang === "gu" ? "પગલું દ્વારા પગલું" : "Step by step";

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function updateModalLanguage() {
  if (activePoseIndex !== null && modalOverlay.classList.contains('open')) {
    openModal(activePoseIndex);
  }
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
  activePoseIndex = null;
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

const FALLBACK_VIDEOS = [
  'https://www.youtube.com/embed/1ZYbU82GVz4?rel=0&modestbranding=1', // Nature sounds
  'https://www.youtube.com/embed/inpok4MKVLM?rel=0&modestbranding=1', // 5 min meditation
  'https://www.youtube.com/embed/lE6RYpe9IT0?rel=0&modestbranding=1', // Sleep music
  'https://www.youtube.com/embed/77ZozI0rw7w?rel=0&modestbranding=1', // Ambient music
];

const TRACK_INFO = [
  {
    title: 'Nature Sounds Collection',
    title_gu: 'કુદરતી અવાજોનો સંગ્રહ',
    sub: 'Birds · Rain · Streams · Wind',
    sub_gu: 'પક્ષીઓ · વરસાદ · ઝરણાં · પવન'
  },
  {
    title: 'Guided Meditation',
    title_gu: 'માર્ગદર્શિત ધ્યાન',
    sub: 'Breathe · Centre · Let go',
    sub_gu: 'શ્વાસ · કેન્દ્રિતતા · મુક્તિ'
  },
  {
    title: 'Sleep Music',
    title_gu: 'ઊંઘ માટે સંગીત',
    sub: 'Delta waves · Deep rest · Dreams',
    sub_gu: 'ડેલ્ટા તરંગો · ઊંડો આરામ · સપના'
  },
  {
    title: 'Ambient Healing Music',
    title_gu: 'એમ્બિયન્ટ હીલિંગ સંગીત',
    sub: 'Soft frequencies · Calm · Flow',
    sub_gu: 'નરમ ફ્રીક્વન્સીઝ · શાંતિ · પ્રવાહ'
  },
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

  updatePlayerLanguage();

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

function updatePlayerLanguage() {
  const track = TRACK_INFO[currentPlaylist];
  trackTitle.textContent = currentLang === "gu" ? track.title_gu : track.title;
  trackSub.textContent   = currentLang === "gu" ? track.sub_gu : track.sub;
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
  {
    text: "You are allowed to be both a masterpiece and a work in progress simultaneously.",
    text_gu: "તમને એક જ સમયે એક શ્રેષ્ઠ કૃતિ અને પ્રગતિ પર કામ બંને બનવાની પરવાનગી છે.",
    author: "— Sophia Bush",
    author_gu: "— સોફિયા બુશ"
  },
  {
    text: "Within you, there is a stillness and a sanctuary to which you can retreat at any time and be yourself.",
    text_gu: "તમારી અંદર એક શાંતિ અને આશ્રયસ્થાન છે જ્યાં તમે કોઈપણ સમયે જઈ શકો છો અને તમારી જાત સાથે રહી શકો છો.",
    author: "— Hermann Hesse",
    author_gu: "— હર્મન હેસે"
  },
  {
    text: "Breathe. Let go. And remind yourself that this very moment is the only one you know you have for sure.",
    text_gu: "શ્વાસ લો. મુક્ત થાઓ. અને તમારી જાતને યાદ કરાવો કે આ જ ક્ષણ એકમાત્ર ક્ષણ છે જે તમારી પાસે ચોક્કસ છે.",
    author: "— Oprah Winfrey",
    author_gu: "— ઓપ્રાહ વિનફ્રી"
  },
  {
    text: "You don't have to be positive all the time. It's perfectly okay to feel sad, angry, or annoyed. Having feelings doesn't make you a negative person.",
    text_gu: "તમારે હંમેશા સકારાત્મક રહેવાની જરૂર નથી. ઉદાસ, ગુસ્સે કે નારાજ થવું તદ્દન સામાન્ય છે. લાગણીઓ અનુભવવાથી તમે નકારાત્મક વ્યક્તિ નથી બનતા.",
    author: "— Lori Deschene",
    author_gu: "— લોરી ડેશેન"
  },
  {
    text: "Rest and self-care are so important. When you take time to replenish your spirit, it allows you to serve others from the overflow.",
    text_gu: "આરામ અને સ્વ-સંભાળ ખૂબ જ મહત્વપૂર્ણ છે. જ્યારે તમે તમારા આત્માને પુનર્જીવિત કરવા માટે સમય લો છો, ત્યારે તે તમને અન્યોની વધુ સારી સેવા કરવામાં મદદ કરે છે.",
    author: "— Eleanor Brownn",
    author_gu: "— એલેનોર બ્રાઉન"
  },
  {
    text: "Wherever you are, be all there. The present moment is the only place life truly exists.",
    text_gu: "તમે જ્યાં પણ હોવ, ત્યાં પૂરા મનથી રહો. વર્તમાન ક્ષણ એ એકમાત્ર જગ્યા છે જ્યાં જીવન ખરેખર અસ્તિત્વ ધરાવે છે.",
    author: "— Jim Elliot",
    author_gu: "— જીમ ઇલિયટ"
  },
  {
    text: "Your calm mind is the ultimate weapon against your challenges. So relax.",
    text_gu: "તમારું શાંત મન એ તમારા પડકારો સામેનું સર્વોચ્ચ હથિયાર છે. તેથી હળવાશ અનુભવો.",
    author: "— Bryant McGill",
    author_gu: "— બ્રાયન્ટ મેકગિલ"
  },
  {
    text: "Almost everything will work again if you unplug it for a few minutes — including you.",
    text_gu: "લગભગ બધું જ ફરીથી કામ કરવાનું શરૂ કરી દેશે જો તમે તેને થોડી મિનિટો માટે બંધ કરી દો — તમારા સહિત.",
    author: "— Anne Lamott",
    author_gu: "— એન લેમોટ"
  },
  {
    text: "Peace is the result of retraining your mind to process life as it is, rather than as you think it should be.",
    text_gu: "તમે જે વિચારો છો કે જીવન કેવું હોવું જોઈએ તેના બદલે જીવન જેવું છે તેવું સ્વીકારવા માટે તમારા મનને તાલીમ આપવાનું પરિણામ શાંતિ છે.",
    author: "— Wayne Dyer",
    author_gu: "— વેઇન ડાયર"
  },
  {
    text: "You are enough just as you are. Each emotion you feel, everything in your life, everything you do — it all belongs.",
    text_gu: "તમે જેવા છો તેવા જ પર્યાપ્ત છો. તમારી દરેક લાગણી, તમારા જીવનની દરેક વસ્તુ, તમે જે કંઈ કરો છો — તે બધું જ તમારો હિસ્સો છે.",
    author: "— Anne Lamott",
    author_gu: "— એન લેમોટ"
  },
  {
    text: "Tension is who you think you should be. Relaxation is who you are.",
    text_gu: "તણાવ એ છે કે જે તમે વિચારો છો કે તમારે બનવું જોઈએ. આરામ એ છે કે જે તમે ખરેખર છો.",
    author: "— Chinese Proverb",
    author_gu: "— ચીની કહેવત"
  },
  {
    text: "The present moment always will have been. Nothing can take away what you are experiencing right now.",
    text_gu: "વર્તમાન ક્ષણ હંમેશા રહેશે. તમે અત્યારે જે અનુભવી રહ્યા છો તે કોઈ તમારી પાસેથી છીનવી શકશે નહીં.",
    author: "— Eckhart Tolle",
    author_gu: "— એકહાર્ટ ટોલે"
  },
  {
    text: "Be gentle with yourself. You are a child of the universe, no less than the trees and the stars.",
    text_gu: "તમારી જાત સાથે નમ્ર રહો. તમે બ્રહ્માંડના સંતાન છો, જે વૃક્ષો અને તારાઓ કરતાં સહેજ પણ ઓછા નથી.",
    author: "— Max Ehrmann",
    author_gu: "— મેક્સ એહરમેન"
  },
  {
    text: "Your mind will answer most questions if you learn to relax and wait for the answer.",
    text_gu: "જો તમે હળવા રહેવાનું અને જવાબની રાહ જોવાનું શીખી લો, તો તમારું મન મોટાભાગના પ્રશ્નોના જવાબો આપશે.",
    author: "— William S. Burroughs",
    author_gu: "— વિલિયમ એસ. બરોઝ"
  },
  {
    text: "Slow down and everything you are chasing will come around and catch you.",
    text_gu: "ધીમા પડો અને તમે જેની પાછળ દોડી રહ્યા છો તે બધું જ તમારી પાસે આવીને તમને મળી જશે.",
    author: "— John De Paola",
    author_gu: "— જ્હોન ડી પાઓલા"
  },
  {
    text: "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
    text_gu: "તમારે હંમેશા આયોજનની જરૂર હોતી નથી. કેટલીકવાર તમારે ફક્ત શ્વાસ લેવા, વિશ્વાસ રાખવા, બધું છોડી દેવા અને શું થાય છે તે જોવાની જરૂર હોય છે.",
    author: "— Mandy Hale",
    author_gu: "— મેન્ડી હેલ"
  },
  {
    text: "Healing doesn't mean the damage never existed. It means the damage no longer controls your life.",
    text_gu: "સાજા થવાનો અર્થ એ નથી કે નુકસાન ક્યારેય અસ્તિત્વમાં નહોતું. એનો અર્થ એ છે કે તે નુકસાન હવે તમારા જીવનને નિયંત્રિત કરતું નથી.",
    author: "— Akshay Dubey",
    author_gu: "— અક્ષય દુબે"
  },
  {
    text: "The quieter you become, the more you are able to hear.",
    text_gu: "તમે જેટલા વધુ શાંત થશો, તેટલું જ વધુ તમે સાંભળી શકશો.",
    author: "— Rumi",
    author_gu: "— રૂમી"
  },
  {
    text: "One day at a time. One breath at a time. You've got this.",
    text_gu: "એક સમયે એક જ દિવસ. એક સમયે એક જ શ્વાસ. તમે આ કરી શકો છો.",
    author: "— Sramana",
    author_gu: "— શ્રમણ"
  },
  {
    text: "Your feelings are valid. Your needs matter. You deserve the same care you give to others.",
    text_gu: "તમારી લાગણીઓ માન્ય છે. તમારી જરૂરિયાતો મહત્વની છે. તમે પણ એ જ કાળજીના હકદાર છો જે તમે અન્યોને આપો છો.",
    author: "— Sramana",
    author_gu: "— શ્રમણ"
  },
  {
    text: "Sometimes the most productive thing you can do is rest.",
    text_gu: "કેટલીકવાર આરામ કરવો એ સૌથી વધુ ઉત્પાદક કામ હોઈ શકે છે.",
    author: "— Mark Black",
    author_gu: "— માર્ક બ્લેક"
  }
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

  const item = AFFIRMATIONS[affirmIndex];
  const text = currentLang === "gu" ? item.text_gu : item.text;
  const author = currentLang === "gu" ? item.author_gu : item.author;

  if (animate) {
    card.classList.add('fade-out');
    setTimeout(() => {
      textEl.textContent = text;
      authEl.textContent = author;
      card.classList.remove('fade-out');
      card.classList.add('fade-in');
      updateDots();
      setTimeout(() => card.classList.remove('fade-in'), 500);
    }, 450);
  } else {
    textEl.textContent = text;
    authEl.textContent = author;
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
  applyLanguage();
  renderCards();
  initReveal();
  initAffirmations();

  vinyl.classList.add('spinning');
  document.querySelectorAll('.mood-card')[0]?.classList.add('active');

  // Trigger switchPlaylist on load so track title/sub are set properly in default lang
  switchPlaylist(0);

  updateLangButton();
});

const langBtn = document.getElementById("langBtn");

function updateLangButton() {
  if (langBtn) {
    langBtn.textContent = currentLang === "gu" ? "English" : "ગુજરાતી";
  }
}

if (langBtn) {
  langBtn.addEventListener("click", () => {
    currentLang = currentLang === "gu" ? "en" : "gu";
    applyLanguage();
    renderCards();
    updateLangButton();
    showAffirmation(affirmIndex, false); // Update current affirmation language instantly
    updatePlayerLanguage(); // Update player track texts language instantly without reloading iframe
    updateModalLanguage(); // Update modal language if it is currently open
  });
}