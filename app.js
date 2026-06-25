// ==========================================================================
// THE COV - BY BLU: FRONTEND SPA LOGIC & GAME ENGINE
// ==========================================================================

let wines = [];
let flashcardsList = [];
let currentFlashcardIndex = 0;
let currentView = 'landing';
let navigationHistory = ['landing'];

// Game State
let gameConfig = {
  currentMode: 1,
  currentQuestionIndex: 0,
  totalQuestions: 5,
  score: 0,
  questions: [],
  currentCorrectAnswer: null
};

// DOM Elements
const views = {
  landing: document.getElementById('view-landing'),
  wineCenter: document.getElementById('view-wine-center'),
  flashcards: document.getElementById('view-flashcards'),
  game: document.getElementById('view-game'),
  gameSelection: document.getElementById('game-selection'),
  gamePlay: document.getElementById('game-active-play'),
  gameOver: document.getElementById('game-over-screen')
};

const backBtn = document.getElementById('back-btn');
const wineSearch = document.getElementById('wine-search');
const searchSuggestions = document.getElementById('search-suggestions');
const searchClearBtn = document.getElementById('search-clear-btn');

// Initialize App
document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch('wines.json');
    wines = await response.json();
    flashcardsList = [...wines];
    
    setupEventListeners();
    initSearch();
  } catch (error) {
    console.error('Failed to load wine training database:', error);
  }
});

// View Navigation Router
function navigateTo(viewId) {
  // Hide all views
  Object.values(views).forEach(view => {
    view.classList.remove('active');
  });

  // Show target view
  if (viewId === 'game') {
    views.game.classList.add('active');
    views.gameSelection.classList.remove('hidden');
    views.gamePlay.classList.add('hidden');
    views.gameOver.classList.add('hidden');
  } else {
    views[viewId].classList.add('active');
  }

  currentView = viewId;
  
  // Manage Header Back Button
  if (viewId === 'landing') {
    navigationHistory = ['landing'];
    backBtn.classList.add('hidden');
  } else {
    if (navigationHistory[navigationHistory.length - 1] !== viewId) {
      navigationHistory.push(viewId);
    }
    backBtn.classList.remove('hidden');
  }
}

// Back Action handler
function navigateBack() {
  if (navigationHistory.length > 1) {
    navigationHistory.pop(); // Remove current view
    const prevView = navigationHistory[navigationHistory.length - 1];
    navigateTo(prevView);
  }
}

// Event Listeners Configuration
function setupEventListeners() {
  backBtn.addEventListener('click', navigateBack);

  // Landing Options
  document.getElementById('card-wines').addEventListener('click', () => {
    navigateTo('wineCenter');
  });

  // Wine Center Options
  document.getElementById('btn-flashcards').addEventListener('click', () => {
    currentFlashcardIndex = 0;
    flashcardsList = [...wines];
    renderFlashcard();
    navigateTo('flashcards');
  });

  document.getElementById('btn-tasting-game').addEventListener('click', () => {
    navigateTo('game');
  });

  // Small logo acts as home button
  document.getElementById('nav-logo').addEventListener('click', () => {
    navigateTo('landing');
  });

  // Flashcards Flipping & Controls
  const mainCard = document.getElementById('main-flashcard');
  mainCard.addEventListener('click', (e) => {
    // Prevent flip if clicking back scroll container or controls
    if (!e.target.closest('.back-scroll-container') && !e.target.closest('.fc-instruction-back')) {
      mainCard.classList.toggle('flipped');
    }
  });

  // Intercept scroll container clicks so they don't cause flip
  document.getElementById('fc-back-content').addEventListener('click', (e) => {
    e.stopPropagation();
  });

  document.getElementById('fc-prev').addEventListener('click', (e) => {
    e.stopPropagation();
    changeFlashcard(-1);
  });

  document.getElementById('fc-next').addEventListener('click', (e) => {
    e.stopPropagation();
    changeFlashcard(1);
  });

  document.getElementById('fc-shuffle').addEventListener('click', () => {
    shuffleArray(flashcardsList);
    currentFlashcardIndex = 0;
    renderFlashcard();
  });

  // Game selection clicks
  document.querySelectorAll('.game-mode-card').forEach(card => {
    card.addEventListener('click', () => {
      const mode = parseInt(card.getAttribute('data-mode'));
      startGame(mode);
    });
  });

  // Game Over actions
  document.getElementById('game-play-again-btn').addEventListener('click', () => {
    startGame(gameConfig.currentMode);
  });

  document.getElementById('game-return-center-btn').addEventListener('click', () => {
    navigateTo('wineCenter');
  });

  // Feedback Modal action
  document.getElementById('feedback-next-btn').addEventListener('click', () => {
    document.getElementById('feedback-overlay').classList.add('hidden');
    nextQuestion();
  });
}

// Array Shuffle Utility
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// ==========================================================================
// SEARCH BAR & AUTOCOMPLETE COMPONENT
// ==========================================================================
function initSearch() {
  wineSearch.addEventListener('input', () => {
    const query = wineSearch.value.trim().toLowerCase();
    
    if (query === '') {
      searchSuggestions.classList.add('hidden');
      searchClearBtn.classList.add('hidden');
      return;
    }

    searchClearBtn.classList.remove('hidden');

    const matches = wines.filter(wine => 
      wine.name.toLowerCase().includes(query) ||
      wine.grapeVariety.toLowerCase().includes(query) ||
      wine.category.toLowerCase().includes(query)
    );

    renderSuggestions(matches);
  });

  searchClearBtn.addEventListener('click', () => {
    wineSearch.value = '';
    searchSuggestions.classList.add('hidden');
    searchClearBtn.classList.add('hidden');
    wineSearch.focus();
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
      searchSuggestions.classList.add('hidden');
    }
  });
}

function renderSuggestions(matches) {
  if (matches.length === 0) {
    searchSuggestions.innerHTML = '<div class="suggestion-item"><span class="suggestion-name">No matching wines found</span></div>';
    searchSuggestions.classList.remove('hidden');
    return;
  }

  searchSuggestions.innerHTML = matches.map(wine => `
    <div class="suggestion-item" data-id="${wine.id}">
      <span class="suggestion-name font-serif">${wine.name}</span>
      <span class="suggestion-meta">${wine.category}</span>
    </div>
  `).join('');

  searchSuggestions.classList.remove('hidden');

  // Suggestion click listener
  document.querySelectorAll('.suggestion-item').forEach(item => {
    item.addEventListener('click', () => {
      const wineId = item.getAttribute('data-id');
      if (wineId) {
        openFlashcardForWine(wineId);
      }
      searchSuggestions.classList.add('hidden');
      wineSearch.value = '';
      searchClearBtn.classList.add('hidden');
    });
  });
}

function openFlashcardForWine(wineId) {
  // Find index of targeted wine in core database
  const index = wines.findIndex(w => w.id === wineId);
  if (index !== -1) {
    flashcardsList = [...wines]; // Reset to standard order
    currentFlashcardIndex = index;
    renderFlashcard();
    navigateTo('flashcards');
  }
}

// ==========================================================================
// FLASHCARDS COMPONENT
// ==========================================================================
function renderFlashcard() {
  const cardElement = document.getElementById('main-flashcard');
  cardElement.classList.remove('flipped'); // Always start unflipped

  const wine = flashcardsList[currentFlashcardIndex];
  
  // Front UI updates
  document.getElementById('fc-front-name').textContent = wine.name;
  document.getElementById('fc-front-category').textContent = wine.category;
  
  const bottleRender = document.getElementById('fc-front-bottle');
  bottleRender.style.background = wine.bottleColor || 'linear-gradient(135deg, #d4af37, #b8860b)';
  
  // Label inside bottle mock
  const labelBrand = document.getElementById('fc-label-brand');
  labelBrand.textContent = wine.name.split(' ').slice(0, 2).join(' ');

  // Back Details Construction (Only display sections that exist within each wine's training data)
  const backContainer = document.getElementById('fc-back-content');
  backContainer.innerHTML = '';

  // Header Title on back
  const backHeader = document.createElement('div');
  backHeader.className = 'fc-back-header';
  backHeader.innerHTML = `
    <h4 class="fc-wine-name-back font-serif">${wine.name}</h4>
    <span class="fc-category-back">${wine.category} &bull; ${wine.country}</span>
  `;
  backContainer.appendChild(backHeader);

  // Detailed fields mapping
  const sections = [
    { label: 'Producer & Region', value: `${wine.producerStory ? wine.producerStory + ' ' : ''}${wine.region ? 'Region: ' + wine.region : ''}`.trim() },
    { label: 'Grape Variety', value: wine.grapeVariety },
    { label: 'Soil Profile', value: wine.soil },
    { label: 'Soil Impact', value: wine.soilImpact },
    { label: 'Nose (Aromatic Notes)', value: wine.nose },
    { label: 'Palate (Taste & Texture)', value: wine.palate },
    { label: 'Vinification & Craftsmanship', value: wine.craftsmanship },
    { label: 'Pairing Suggestions', value: wine.pairingSuggestions },
    { label: 'Interesting Facts', value: wine.interestingFacts }
  ];

  sections.forEach(sec => {
    if (sec.value && sec.value.trim() !== '') {
      const secDiv = document.createElement('div');
      secDiv.className = 'fc-detail-section';
      secDiv.innerHTML = `
        <h5 class="fc-detail-label">${sec.label}</h5>
        <p class="fc-detail-value">${sec.value}</p>
      `;
      backContainer.appendChild(secDiv);
    }
  });

  // Branded Cheat Sheet highlight box
  if (wine.cheatSheet && wine.cheatSheet.trim() !== '') {
    const cheatDiv = document.createElement('div');
    cheatDiv.className = 'fc-cheat-sheet-box';
    cheatDiv.innerHTML = `
      <h5 class="fc-detail-label">Cheat Sheet (Substitutions)</h5>
      <p class="fc-detail-value"><strong>${wine.cheatSheet}</strong></p>
    `;
    backContainer.appendChild(cheatDiv);
  }

  // Update Counters
  document.getElementById('fc-counter-current').textContent = currentFlashcardIndex + 1;
  document.getElementById('fc-counter-total').textContent = flashcardsList.length;
}

function changeFlashcard(direction) {
  currentFlashcardIndex += direction;
  if (currentFlashcardIndex < 0) {
    currentFlashcardIndex = flashcardsList.length - 1;
  } else if (currentFlashcardIndex >= flashcardsList.length) {
    currentFlashcardIndex = 0;
  }
  renderFlashcard();
}

// ==========================================================================
// ADAM'S WINE TASTING: GAME CONFIGURATION & ENGINE
// ==========================================================================

// Preconfigured substitution mappings based strictly on the training PDF Cheat Sheets.
const guestPreferencesMap = [
  { prefer: "Sauvignon Blanc", recommend: "Pago del Cielo \"Celeste\" Verdejo", reason: "bridges the gap between lighter, zesty wines and fuller bodied fruit-forward wines." },
  { prefer: "Sauvignon Blanc (New Zealand Style)", recommend: "Royal Tokaji Dry Furmint", reason: "balances electric acidity, deep stone fruit, and complex volcanic minerality." },
  { prefer: "Sancerre (Sauvignon Blanc)", recommend: "Provins L'Alpage Chasselas", reason: "is elegant, mineral driven, and has a clean finish." },
  { prefer: "Pinot Grigio", recommend: "Pago del Cielo \"Celeste\" Verdejo", reason: "has intense varietal aromatics and elegant texture from sur lies aging." },
  { prefer: "Chardonnay (Unoaked / Chablis)", recommend: "Provins L'Alpage Chasselas", reason: "is a wonderful alpine mineral-driven substitute." },
  { prefer: "Chardonnay (Oaked / California)", recommend: "Villa Della Torre \"Selva Del Vescovo\" Lugana", reason: "is rich and full bodied with great fruit character." },
  { prefer: "Riesling", recommend: "Allimant Laugner \"Vin d'Alsace Gentil\"", reason: "offers slight sweetness, complex floral aromatics, and a full mouthfeel." },
  { prefer: "Viognier", recommend: "Allimant Laugner \"Vin d'Alsace Gentil\"", reason: "mimics full mouthfeel and complex floral aromatics beautifully." },
  { prefer: "Provence Style Rosé", recommend: "Weingut Edelweiss \"Evangeline\" Zweigelt Rosé", reason: "is dry, refreshing, juicy, and extremely clean." },
  { prefer: "Pinot Noir", recommend: "Elena Walch Selezione Alto Adige Schiava", reason: "is light bodied, fruit-driven, and has low tannins." },
  { prefer: "Red Burgundy", recommend: "Su'entu \"Su'Anima\" Cannonau di Sardegna", reason: "is versatile, complex, and captures natural structure." },
  { prefer: "Cabnernet Sauvignon", recommend: "Easton Wines \"The Mountaineer\" Barbera/Zinfandel Blend", reason: "is juicy, robust, and structured, providing great comfort." },
  { prefer: "Merlot", recommend: "Le Fief Noir \"Somnambule\" Anjou", reason: "has Grolleau lending ripe fruit and Cabernet Franc lending structure." },
  { prefer: "Syrah / Shiraz", recommend: "Easton Wines \"The Mountaineer\" Barbera/Zinfandel Blend", reason: "provides bold blackberry fruit, big cedar structure, and granitic soil complexity." },
  { prefer: "Champagne / Cava", recommend: "Colliano Brut Ribolla Gialla", reason: "is crafted in Methode Traditionnelle with zesty acidity and a yeasty finish." },
  { prefer: "Prosecco Rosé", recommend: "Thierry Tissot Bugey Rosé Extra Dry NV", reason: "sparkling rosé offers ripe, jammy fruit quality with dry mountain precision." }
];

function startGame(mode) {
  gameConfig.currentMode = mode;
  gameConfig.currentQuestionIndex = 0;
  gameConfig.score = 0;
  gameConfig.questions = [];
  
  // Set Mode Title in HUD
  const modeTitles = {
    1: "Guess the Wine",
    2: "Guess the Country",
    3: "Guess the Grape",
    4: "Guest Recommendation",
    5: "Match the Producer",
    6: "Taste Profile Match"
  };
  document.getElementById('game-active-mode-title').textContent = modeTitles[mode];

  // Generate 5 questions using distinct wines
  const shuffledWines = [...wines];
  shuffleArray(shuffledWines);
  
  for (let i = 0; i < gameConfig.totalQuestions; i++) {
    const wine = shuffledWines[i % shuffledWines.length];
    gameConfig.questions.push(generateQuestionForMode(mode, wine));
  }

  // Switch Screen to Play Mode
  views.gameSelection.classList.add('hidden');
  views.gamePlay.classList.remove('hidden');
  views.gameOver.classList.add('hidden');

  renderQuestion();
}

function generateQuestionForMode(mode, correctWine) {
  let promptText = "";
  let contextList = [];
  let answerOptions = [];
  let correctAnswerText = "";
  let explanation = "";

  // Helper to grab 3 random incorrect choices
  const getIncorrectChoices = (correctVal, fieldName) => {
    const pool = [...new Set(wines.map(w => w[fieldName]).filter(v => v !== correctVal))];
    shuffleArray(pool);
    return pool.slice(0, 3);
  };

  const getIncorrectWines = (correctId) => {
    const pool = wines.filter(w => w.id !== correctId);
    shuffleArray(pool);
    return pool.slice(0, 3);
  };

  switch (mode) {
    case 1: // Guess the Wine (Origin, Grape, 3 Tasting Notes)
      promptText = "Which wine matches this profile?";
      contextList = [
        `Country of Origin: ${correctWine.country}`,
        `Grape Variety: ${correctWine.grapeVariety}`,
        `Tasting Note: ${correctWine.nose.split(',').slice(0, 2).join(',').replace(/\.$/, '')} & ${correctWine.palate.split(',').slice(0, 1).join(' ')}`
      ];
      answerOptions = [correctWine.name, ...getIncorrectWines(correctWine.id).map(w => w.name)];
      correctAnswerText = correctWine.name;
      explanation = `<strong>${correctWine.name}</strong> from ${correctWine.country} is made of ${correctWine.grapeVariety}. ${correctWine.soilImpact || ""}`;
      break;

    case 2: // Guess the Country
      promptText = `Which country does this wine originate from?`;
      contextList = [ `${correctWine.name}` ];
      answerOptions = [correctWine.country, ...getIncorrectChoices(correctWine.country, 'country')];
      correctAnswerText = correctWine.country;
      explanation = `<strong>${correctWine.name}</strong> originates from the region of <strong>${correctWine.region || ""} in ${correctWine.country}</strong>.`;
      break;

    case 3: // Guess the Grape
      promptText = `What is the primary grape variety or blend composition for this wine?`;
      contextList = [ `${correctWine.name}` ];
      answerOptions = [correctWine.grapeVariety, ...getIncorrectChoices(correctWine.grapeVariety, 'grapeVariety')];
      correctAnswerText = correctWine.grapeVariety;
      explanation = `<strong>${correctWine.name}</strong> is crafted from <strong>${correctWine.grapeVariety}</strong>.`;
      break;

    case 4: // Guest Recommendation
      // Select a guest scenario matching this correctWine's cheat sheet
      // Filter list of pre-configured options matching our correct wine name
      const scenario = guestPreferencesMap.find(pref => pref.recommend.includes(correctWine.name.split(' ')[0])) || {
        prefer: "something clean and unique",
        recommend: correctWine.name,
        reason: correctWine.cheatSheet || ""
      };
      
      promptText = `A guest sits down at the bar and says:`;
      contextList = [
        `"I normally drink ${scenario.prefer}. Do you have something similar by the glass?"`
      ];
      answerOptions = [correctWine.name, ...getIncorrectWines(correctWine.id).map(w => w.name)];
      correctAnswerText = correctWine.name;
      explanation = `Excellent choice! The Cheat Sheet states: for guests who prefer <strong>${scenario.prefer}</strong>, recommend <strong>${correctWine.name}</strong> because it ${scenario.reason || correctWine.cheatSheet}`;
      break;

    case 5: // Match the Producer Story
      promptText = `Which wine fits this producer story and history?`;
      contextList = [ correctWine.producerStory ];
      answerOptions = [correctWine.name, ...getIncorrectWines(correctWine.id).map(w => w.name)];
      correctAnswerText = correctWine.name;
      explanation = `This story belongs to <strong>${correctWine.name}</strong>. ${correctWine.producerStory}`;
      break;

    case 6: // Taste Profile Match
      promptText = `Which wine has these distinct descriptors?`;
      // Extract 3 prominent descriptors from Nose or Palate text
      const allWords = `${correctWine.nose}, ${correctWine.palate}`.split(/[\s,]+/);
      const cleanWords = [...new Set(allWords.map(w => w.replace(/[.,()"]/g, '').toLowerCase()).filter(w => w.length > 4))];
      shuffleArray(cleanWords);
      const descriptors = cleanWords.slice(0, 3).map(w => w.charAt(0).toUpperCase() + w.slice(1));
      
      contextList = descriptors.length >= 3 ? descriptors : ["Citrus", "Minerality", "Stone fruits"];
      answerOptions = [correctWine.name, ...getIncorrectWines(correctWine.id).map(w => w.name)];
      correctAnswerText = correctWine.name;
      explanation = `<strong>${correctWine.name}</strong> has a tasting profile featuring aromas like: <em>${correctWine.nose}</em> and palate cues like <em>${correctWine.palate}</em>.`;
      break;
  }

  // Shuffle options so correct answer isn't always first
  shuffleArray(answerOptions);

  return {
    promptText,
    contextList,
    options: answerOptions,
    correctAnswer: correctAnswerText,
    explanation
  };
}

function renderQuestion() {
  const currentQ = gameConfig.questions[gameConfig.currentQuestionIndex];
  gameConfig.currentCorrectAnswer = currentQ.correctAnswer;

  // Update HUD
  document.getElementById('game-question-counter').textContent = `${gameConfig.currentQuestionIndex + 1} / ${gameConfig.totalQuestions}`;
  document.getElementById('game-score-display').textContent = gameConfig.score;

  // Set prompt & context
  document.getElementById('game-question-text').textContent = currentQ.promptText;

  const contextBox = document.getElementById('game-question-context');
  contextBox.innerHTML = '';
  
  if (currentQ.contextList && currentQ.contextList.length > 0) {
    contextBox.classList.remove('hidden');
    const ul = document.createElement('ul');
    ul.className = 'context-list';
    currentQ.contextList.forEach(item => {
      const li = document.createElement('li');
      li.className = 'context-item';
      li.innerHTML = item;
      ul.appendChild(li);
    });
    contextBox.appendChild(ul);
  } else {
    contextBox.classList.add('hidden');
  }

  // Render options buttons
  const optionsList = document.getElementById('game-options-list');
  optionsList.innerHTML = '';
  
  currentQ.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn font-serif';
    btn.textContent = opt;
    btn.addEventListener('click', () => handleAnswerSelect(opt));
    optionsList.appendChild(btn);
  });
}

function handleAnswerSelect(selectedAnswer) {
  const currentQ = gameConfig.questions[gameConfig.currentQuestionIndex];
  const isCorrect = (selectedAnswer === gameConfig.currentCorrectAnswer);

  const emoji = document.getElementById('feedback-emoji');
  const title = document.getElementById('feedback-status-text');
  const explanationText = document.getElementById('feedback-explanation');

  if (isCorrect) {
    gameConfig.score++;
    emoji.textContent = "🍷";
    title.textContent = "Spot On!";
    title.style.color = "var(--color-peach-accent)";
  } else {
    emoji.textContent = "💡";
    title.textContent = "Not Quite";
    title.style.color = "var(--color-blue-dark)";
  }

  explanationText.innerHTML = `
    <p class="mb-2">Your guess: <strong>${selectedAnswer}</strong></p>
    <p class="mb-4">Correct: <strong>${gameConfig.currentCorrectAnswer}</strong></p>
    <div class="mt-4 pt-3 border-t">${currentQ.explanation}</div>
  `;

  // Display feedback modal
  document.getElementById('feedback-overlay').classList.remove('hidden');
}

function nextQuestion() {
  gameConfig.currentQuestionIndex++;
  if (gameConfig.currentQuestionIndex < gameConfig.totalQuestions) {
    renderQuestion();
  } else {
    endGame();
  }
}

function endGame() {
  views.gamePlay.classList.add('hidden');
  views.gameOver.classList.remove('hidden');

  // Set final score display
  document.getElementById('final-score-value').textContent = `${gameConfig.score} / ${gameConfig.totalQuestions}`;

  // Evaluate result
  const evaluationText = document.getElementById('final-score-evaluation');
  const pct = (gameConfig.score / gameConfig.totalQuestions) * 100;
  
  if (pct === 100) {
    evaluationText.textContent = "Master Sommelier Level! Perfect service ready.";
  } else if (pct >= 80) {
    evaluationText.textContent = "Outstanding service readiness! Keep matching.";
  } else if (pct >= 60) {
    evaluationText.textContent = "Solid performance. Review cheat sheets to perfect it.";
  } else {
    evaluationText.textContent = "Practice makes perfect. Open the library and try again!";
  }
}
