// ==========================================================================
// THE COV - BY BLU: FRONTEND SPA LOGIC & GAME ENGINE
// ==========================================================================

// Embedded wine dataset containing actual bottle image URLs
const wines = [
  {
    "id": "colliano-brut",
    "name": "Colliano Brut Ribolla Gialla",
    "category": "Sparkling",
    "country": "Slovenia",
    "region": "Goriška Brda",
    "soil": "Opoka (marl and sandstone) in the steep, terraced hills of Goriška Brda, Slovenia.",
    "soilImpact": "This unique mineral-rich soil provides high drainage, imparting vibrant minerality, elegant structure, and a crisp, clean acidity to the grapes.",
    "grapeVariety": "Ribolla Gialla (Rebula)",
    "nose": "Crisp green apple, white peach, acacia blossoms, lemon zest, and delicate hints of freshly baked brioche.",
    "palate": "Creamy and vibrant with a persistent, fine perlage. Refreshing flavors of citrus, pear, and stone fruits, leading to a beautifully structured, mineral-driven finish.",
    "producerStory": "Klet Brda: Slovenia's renowned cooperative winery, championing sustainable family grape growing.",
    "craftsmanship": "Methode Traditionnelle: Crafted using the traditional secondary fermentation in the bottle and aged on the lees. Hand-Harvested: Sourced entirely from steep, hand-cultivated terraces where mechanical harvesting is impossible.",
    "cheatSheet": "With its zesty acidity, and yeasty finish this Brut Ribolla is a perfect substitute for CHAMPAGNE, CAVA, or a yeasty alternative to a refreshing beer.",
    "pairingSuggestions": "Superb as an elegant aperitif, or paired with oysters, delicate seafood, sushi, and prosciutto.",
    "interestingFacts": "Ribolla Gialla (Rebula) is the historic signature grape of the Brda region, celebrated for its high natural acidity.",
    "image": "assets/images/colliano-brut.png"
  },
  {
    "id": "thierry-tissot",
    "name": "Thierry Tissot Bugey Rosé Extra Dry NV",
    "category": "Sparkling Rosé",
    "country": "France",
    "region": "Bugey (Mataret hill)",
    "soil": "Argilo-calcaire (clay-limestone) with glacial scree on the steep slopes of Mataret hill.",
    "soilImpact": "Brings exceptional mineral precision, crisp mountain freshness, and a structured, elegant backbone.",
    "grapeVariety": "An ancestral sparkling blend of Mondeuse and Gamay.",
    "nose": "Expressive and delicate, with aromas of fresh wild strawberry, raspberry, citrus peel, and soft alpine floral notes.",
    "palate": "Refined and vibrant with fine, creamy bubbles, showing a core of juicy red berries, balanced soft sweetness, and a crisp, mineral-driven finish.",
    "producerStory": "Thierry Tissot is an ancestral estate dedicated to cultivating complexity and mountain precision in the steep slopes of Bugey.",
    "craftsmanship": "Méthode Traditionnelle: Secondary fermentation in the bottle. 100% Hand-Harvested: Grapes sourced entirely from estate vineyards. Aged on Lees: Developed over time to cultivate complexity and a signature creamy texture.",
    "cheatSheet": "This sparkling rose is dry, and crisp, but has a very present ripe and jammy fruit quality that gives it the illusion of residual sugar. An alternative for: PROSECCO ROSE, or a sweeter style of CHAMPAGNE.",
    "image": "assets/images/thierry-tissot.png"
  },
  {
    "id": "pago-del-cielo",
    "name": "Pago del Cielo \"Celeste\" Verdejo",
    "category": "White Wine",
    "country": "Spain",
    "region": "Rueda plateau",
    "soil": "Gravelly and clay-limestone soils of the high-altitude Rueda plateau.",
    "soilImpact": "Stony, calcium-rich soils coupled with cool high-altitude nights preserve vibrant, racy acidity and intense varietal aromatics.",
    "grapeVariety": "Verdejo",
    "nose": "Citrus & Stone fruits: Highly aromatic and fresh, showing notes of green apple, peach, fennel, and aniseed.",
    "palate": "Crisp, zesty, and persistent. Showcases citrus fruit flavors, balanced by a smooth, velvety texture from sur lies aging.",
    "producerStory": "Pago del Cielo is a Torres family estate in Rueda known for intense, elegant, high-altitude white wines under sustainable viticulture and night harvesting.",
    "cheatSheet": "Because it bridges the gap between lighter, zesty wines and fuller bodied fruit-forward wines, Verdelho is a perfect substitute for SAUVIGNON BLANC, PINOT GRIGIO, or a lighter CHARDONNAY.",
    "image": "assets/images/pago-del-cielo.png"
  },
  {
    "id": "allimant-laugner",
    "name": "Allimant Laugner \"Vin d'Alsace Gentil\"",
    "category": "White Wine",
    "country": "France",
    "region": "Alsace (Orschwiller)",
    "soil": "Granitic sand, clay, and limestone soils from the historic, high-elevation slopes of Orschwiller.",
    "soilImpact": "The granite-rich soil preserves a brilliant mineral acidity and crispness, while the clay elements provide a subtle, elegant roundness and depth.",
    "grapeVariety": "Riesling, Pinot Gris, Muscat",
    "nose": "Highly aromatic with expressive notes of white peach, citrus blossom, apricot, and a signature floral touch typical of noble Alsace varieties.",
    "palate": "Fresh and vibrant. A harmonious blend showcasing green apple, pear, and ripe citrus fruits with an elegant, lingering mineral finish.",
    "producerStory": "Allimant Laugner is a historic estate producing pure, expressive Alsatian wines driven by family heritage and traditional practices.",
    "cheatSheet": "With complex floral aromatics, slight sweetness and full mouthfeel use for: RIESLING (sweet or dry), VIOGNIER, or even MOSCATO (remind guest the wine is still, no bubbles).",
    "interestingFacts": "What’s the Difference From a single-varietal Riesling?: This wine is more aromatic and rounder due to the blend of Pinot Gris and Muscat, while retaining Riesling’s signature crisp, refreshing acidity and clean finish.",
    "image": "assets/images/allimant-laugner.png"
  },
  {
    "id": "royal-tokaji",
    "name": "Royal Tokaji Dry Furmint",
    "category": "White Wine",
    "country": "Hungary",
    "region": "Tokaj",
    "soil": "Volcanic tuff with layers of loess and clay. This ancient terroir provides a structured foundation.",
    "soilImpact": "The volcanic soils contribute a powerful, distinct mineral drive, while the clay layers ensure beautiful fruit concentration and structural complexity.",
    "grapeVariety": "Furmint",
    "nose": "Highly aromatic and fresh, revealing expressive layers of quince, white peach, honeysuckle, and wet stone.",
    "palate": "Crisp and vibrant. Medium-bodied with zesty, laser-focused acidity supporting flavors of green apple, lemon peel, and a persistent, salty mineral finish.",
    "producerStory": "Royal Tokaji (est. 1990) is globally renowned for revitalizing the legendary white wines of Hungary's historic Tokaj region, merging history with modern classic winemaking.",
    "cheatSheet": "Because it balances electric acidity, deep stone fruit, and complex volcanic minerality, Dry Furmint is an exceptional alternative for: NEW ZEALAND STYLE SAUVIGNON BLANC, CHABLIS (Unoaked Chardonnay), DRY RIESLING.",
    "image": "assets/images/royal-tokaji.png"
  },
  {
    "id": "provins-l-alpage",
    "name": "Provins L'Alpage Chasselas",
    "category": "White Wine",
    "country": "Switzerland",
    "region": "Valais",
    "soil": "Limestone, gravel, and shale on steep alpine terraces of the Valais. This terroir imparts a crisp minerality and mountain freshness.",
    "soilImpact": "High-altitude limestone-rich soils provide intense freshness and a vibrant mineral backbone, while shale soils bring elegant complexity.",
    "grapeVariety": "Chasselas (locally called Fendant)",
    "nose": "Vibrant lime, green pear, delicate linden blossoms, white peach, and a touch of wet stone or flint.",
    "palate": "Dry, crisp, and lively. Very refreshing with a delicate, natural spritz, featuring flavors of fresh orchard fruits, lemon zest, and a clean finish.",
    "producerStory": "Provins is Switzerland's largest and one of its most prestigious cooperatives, founded in 1930 in the heart of the Valais alpine region. L'Alpage is a classic expression of Chasselas celebrating pure, high-altitude alpine character.",
    "cheatSheet": "Because it is elegant and mineral driven, Chasselas is an exceptional alternative for: SANCERRE (SAUVIGNON BLANC), CHABLIS (Unoaked Chardonnay) or ALBARINO.",
    "image": "assets/images/provins-l-alpage.png"
  },
  {
    "id": "villa-della-torre",
    "name": "Villa Della Torre \"Selva Del Vescovo\" Lugana",
    "category": "White Wine",
    "country": "Italy",
    "region": "Veneto / Lake Garda",
    "soil": "Glacial clay and limestone soils on the southern banks of Lake Garda, rich in mineral salts.",
    "soilImpact": "The heavy clay provides excellent structure, body, and longevity, while the limestone infuses a sharp, savory saline minerality.",
    "grapeVariety": "100% Turbiana",
    "nose": "Intense and elegant with notes of white flowers, jasmine, golden apple, citrus zest, and a delicate hint of almond.",
    "palate": "Dry, fresh, and savory with medium body. Highly balanced acidity supporting flavors of peach and green apple, with a lingering mineral finish.",
    "producerStory": "Villa Della Torre is an iconic Renaissance estate in Veneto, producing elegant wines with deep historical heritage. This is a sophisticated and highly versatile option offering vibrant minerality and remarkable aging potential.",
    "cheatSheet": "Because it is rich and full bodied with great fruit character, substitute for: OAKED CHARDONNAY (CALIFORNIA CHARD).",
    "image": "assets/images/villa-della-torre.png"
  },
  {
    "id": "weingut-edelweiss",
    "name": "Weingut Edelweiss \"Evangeline\" Zweigelt Rosé",
    "category": "Rosé Wine",
    "country": "Austria",
    "region": "Niederösterreich (Lower Austria)",
    "soil": "Deep loess and gravelly clay terraces typical of Niederösterreich.",
    "soilImpact": "Loess provides rich, juicy fruit expression and roundness, while gravel ensures excellent drainage, enhancing crisp mineral tension.",
    "grapeVariety": "100% Zweigelt",
    "nose": "Bright red berries, wild strawberry, red cherry, & watermelon with a hint of white pepper and fresh garden herbs.",
    "palate": "Crisp, dry, and wonderfully refreshing. Vibrant acidity frames juicy cranberry and raspberry and watermelon flavors, leading to a clean, savory finish.",
    "producerStory": "Weingut Edelweiss is renowned for its cool-climate elegance and crisp drinkability, showcasing the brilliant versatility of Austrian estate grapes.",
    "cheatSheet": "Because it is refreshing and juicy, a wonderful new grape to introduce to drinkers of: PROVENCE STYLE ROSE, ITALIAN ROSE, DOMESTIC ROSE.",
    "image": "assets/images/weingut-edelweiss.png"
  },
  {
    "id": "ameztoi-rubentis",
    "name": "Ameztoi Rubentis Txakolina Rosé",
    "category": "Rosé Wine",
    "country": "Spain",
    "region": "Basque Country (Getaria)",
    "soil": "Sandstone and clay on steep coastal hillsides overlooking the Bay of Biscay.",
    "soilImpact": "The ocean proximity and clay soils impart a distinct saline minerality, vibrant freshness, and a signature crisp acidity.",
    "grapeVariety": "Hondarrabi Zuri & Hondarrabi Beltza",
    "nose": "Bright wild strawberry, raspberry, lime zest, and subtle sea spray.",
    "palate": "Effervescent, bone-dry, and incredibly refreshing. Light spritz bursting with tart red fruits, citrus, and a clean, salty finish.",
    "producerStory": "Produced by the Ameztoi family in Getaria, Basque Country, one of the premier and most historic estates in Getariako Txakolina, retaining a natural residual carbon dioxide.",
    "cheatSheet": "No real cheats here… This is a wonderfully different, refreshing, bone dry sparkling rose. Perfect glass for a hot summer day on the Pier!",
    "image": "assets/images/ameztoi-rubentis.png"
  },
  {
    "id": "elena-walch",
    "name": "Elena Walch Selezione Alto Adige Schiava",
    "category": "Red Wine",
    "country": "Italy",
    "region": "Alto Adige",
    "soil": "Morainic soils with clay, gravel, and sandy loam on steep, sunny alpine slopes.",
    "soilImpact": "These well-drained soils impart a vibrant freshness, delicate mineral structure, and elegant fruit characteristics.",
    "grapeVariety": "100% Schiava (Vernatsch)",
    "nose": "Bright red cherries, fresh raspberries, and wild strawberries, with a hint of bitter almond and subtle violet notes.",
    "palate": "Light-bodied, dry, and refreshing. Vibrant red fruit flavors are balanced by soft tannins, lively acidity, and a clean finish.",
    "producerStory": "Elena Walch is a pioneering family-run estate at the forefront of quality in Northern Italy, celebrated for producing elegant, terroir-driven, and highly sustainable wines.",
    "cheatSheet": "Because it is light bodied, fruit-driven with low tannins substitute for: PINOT NOIR or GAMAY.",
    "image": "assets/images/elena-walch.png"
  },
  {
    "id": "su-entu-su-anima",
    "name": "Su'entu \"Su'Anima\" Cannonau di Sardegna",
    "category": "Red Wine",
    "country": "Italy",
    "region": "Sardinia (Marmilla)",
    "soil": "Calcareous-clayey soils with limestone on the breezy, rolling hills of Marmilla.",
    "soilImpact": "These rich clay and limestone soils, coupled with persistent sea winds, keep the grapes healthy, concentrate flavors, and impart a distinct mineral depth.",
    "grapeVariety": "100% Cannonau",
    "nose": "Intense wild berries, ripe raspberries, and dark cherries layered with black pepper, Mediterranean maquis, and subtle baking spices.",
    "palate": "Warm, smooth, and full-bodied. Offers rich red fruit flavors, velvety tannins, balanced acidity, and a long, savory, spicy finish.",
    "producerStory": "Su'entu is a pioneering family winery in the Marmilla region of Sardinia, named after the wind (\"su 'entu\") that sweeps through their hillsides, ensuring pristine fruit quality.",
    "cheatSheet": "This versatile and complex red will please drinkers of: RED BURGUNDY, RIOJA (TEMPRANILLO), COTES DU RHONE, BARBERA and most other ITALIAN REDS.",
    "image": "assets/images/su-entu-su-anima.png"
  },
  {
    "id": "le-fief-noir",
    "name": "Le Fief Noir \"Somnambule\" Anjou",
    "category": "Red Wine",
    "country": "France",
    "region": "Loire Valley (Anjou)",
    "soil": "Schist / Slate soils typical of the dark Anjou terroirs in the Loire Valley.",
    "soilImpact": "Schist retains heat and drains well, imparting a distinct mineral tension, lively acidity, and pure, concentrated fruit expression.",
    "grapeVariety": "Grolleau (~60%) and Cabernet Franc (~40%)",
    "nose": "Bright red fruits like wild raspberries and strawberries, accented by subtle white pepper and soft floral violet notes.",
    "palate": "Light to medium-bodied, extremely fresh and juicy. Driven by crisp acidity, soft tannins, and a clean, refreshing mineral finish.",
    "producerStory": "Le Fief Noir is an artisanal domain focused on organic viticulture and producing pure, terroir-driven Loire wines, celebrating the underappreciated Grolleau grape.",
    "cheatSheet": "With Grolleau lending ripe fruit and a touch of funk, and Cab Franc lending structure, this is the perfect version of a “summer” CABERNET SAUVIGNON. Can also satisfy guests looking for MERLOT, BORDEAUX BLENDS, or MALBEC.",
    "image": "assets/images/le-fief-noir.png"
  },
  {
    "id": "easton-wines",
    "name": "Easton Wines \"The Mountaineer\" Barbera/Zinfandel Blend",
    "category": "Red Wine",
    "country": "USA",
    "region": "Sierra Foothills (Shenandoah Valley)",
    "soil": "Granite-laden soils on steep mountain slopes in the Sierra Foothills.",
    "soilImpact": "These stony soils impart an amazing mineral sense, yielding low crops of highly concentrated and complex grapes.",
    "grapeVariety": "50% Zinfandel 50% Barbera",
    "nose": "Juicy brambly blackberry fruit, big cedar. Zin's muscle and riper fruit combines perfectly with the lifted red fruits and approachability of Barbera.",
    "palate": "The Mountaineer is a delicious, robust red, made from grapes grown in our granitic soils of the Sierra Nevada foothills. Reminiscent of many Old World blends.",
    "producerStory": "Easton is a pioneering Amador County label, founded in the late 80s by Bill Easton, crafting balanced and elegant wines with complexity from outstanding head-trained, unirrigated old vines.",
    "cheatSheet": "This is juicy, complex and balanced. A bit of comfort for guests overwhelmed by obscure grapes. CABERNET drinkers will appreciate it. So will guests who prefer SYRAH/SHIRAZ, or just prefer CALIFORNIA WINE (from one of the best winemakers).",
    "image": "assets/images/easton-wines.png"
  }
];

let flashcardsList = [];
let currentFlashcardIndex = 0;
let currentView = 'landing';
let navigationHistory = ['landing'];

// Game State
let gameConfig = {
  currentMode: 1,
  currentQuestionIndex: 0,
  totalQuestions: 13,
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
document.addEventListener('DOMContentLoaded', () => {
  flashcardsList = [...wines];
  setupEventListeners();
  initSearch();
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
    // If they click on previous/next buttons or control panel wrapper, do not trigger flip
    if (e.target.closest('.flashcard-controls') || e.target.closest('.extra-controls')) {
      return;
    }
    mainCard.classList.toggle('flipped');
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
  
  const bottleImg = document.getElementById('fc-front-bottle-img');
  bottleImg.src = wine.image || 'https://images.vivino.com/thumbs/0150d180n3w3h_pb_x960.png';
  bottleImg.alt = wine.name;

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
  { prefer: "Cabernet Sauvignon", recommend: "Easton Wines \"The Mountaineer\" Barbera/Zinfandel Blend", reason: "is juicy, robust, and structured, providing great comfort." },
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
    6: "Profile Match"
  };
  document.getElementById('game-active-mode-title').textContent = modeTitles[mode];

  if (mode === 6) {
    gameConfig.totalQuestions = 26;
    // Generate 26 questions: 1 nose card and 1 palate card for each of the 13 wines
    wines.forEach(wine => {
      gameConfig.questions.push(generateQuestionForMode(mode, wine, 'nose'));
      gameConfig.questions.push(generateQuestionForMode(mode, wine, 'palate'));
    });
    // Shuffle the 26 cards so they show up in no particular order
    shuffleArray(gameConfig.questions);
  } else {
    gameConfig.totalQuestions = 13;
    // Generate 13 questions using distinct wines
    const shuffledWines = [...wines];
    shuffleArray(shuffledWines);
    
    for (let i = 0; i < gameConfig.totalQuestions; i++) {
      const wine = shuffledWines[i];
      gameConfig.questions.push(generateQuestionForMode(mode, wine));
    }
  }

  // Switch Screen to Play Mode
  views.gameSelection.classList.add('hidden');
  views.gamePlay.classList.remove('hidden');
  views.gameOver.classList.add('hidden');

  renderQuestion();
}

function maskWineNameInStory(story, wineName) {
  let masked = story;
  // Common noise words to ignore when masking
  const noiseWords = new Set(["de", "del", "du", "le", "la", "di", "and", "the", "nv", "dry", "brut", "extra", "rose", "rosé", "blanc", "rouge", "vigne", "vignes", "estate", "wines", "wine", "cellars", "cellar", "vineyards", "vineyard", "selection", "selezione", "gentil"]);
  
  // Extract individual words of length > 2
  const words = wineName.split(/[\s"']+/).map(w => w.replace(/[.,()]/g, "")).filter(w => {
    const lower = w.toLowerCase();
    return w.length > 2 && !noiseWords.has(lower);
  });

  // Sort by length descending to replace longer words first
  words.sort((a, b) => b.length - a.length);

  words.forEach(word => {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    masked = masked.replace(regex, "__________________");
  });

  // Collapse consecutive placeholders separated by spaces into a single clean placeholder
  masked = masked.replace(/(__________________\s*)+/g, "__________________ ");
  return masked.trim();
}

function generateQuestionForMode(mode, correctWine, subType) {
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
      const maskedStory = maskWineNameInStory(correctWine.producerStory, correctWine.name);
      contextList = [ maskedStory ];
      answerOptions = [correctWine.name, ...getIncorrectWines(correctWine.id).map(w => w.name)];
      correctAnswerText = correctWine.name;
      explanation = `This story belongs to <strong>${correctWine.name}</strong>. ${correctWine.producerStory}`;
      break;

    case 6: // Profile Match (Nose or Palate)
      if (subType === 'nose') {
        promptText = "Which wine has these Nose notes?";
        contextList = [ correctWine.nose ];
        explanation = `<strong>${correctWine.name}</strong> Nose notes:<br><em>${correctWine.nose}</em>`;
      } else {
        promptText = "Which wine has these Palate notes?";
        contextList = [ correctWine.palate ];
        explanation = `<strong>${correctWine.name}</strong> Palate notes:<br><em>${correctWine.palate}</em>`;
      }
      answerOptions = [correctWine.name, ...getIncorrectWines(correctWine.id).map(w => w.name)];
      correctAnswerText = correctWine.name;
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

// Handler when an answer option is clicked
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
