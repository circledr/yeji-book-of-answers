// ─── 常量 ───────────────────────────────────────────────────
const TOTAL_BUBBLES = 88;

// ─── DOM 引用 ────────────────────────────────────────────────
const topNav        = document.getElementById('top-nav');
const landingContent= document.getElementById('landing-content');
const openBtn       = document.getElementById('open-btn');
const questionInput = document.getElementById('question-input');

const resultView    = document.getElementById('result-view');
const closeBtn      = document.getElementById('close-btn');
const userQuestion  = document.getElementById('user-question');
const questionText  = document.getElementById('question-text');
const bubbleNumber  = document.getElementById('bubble-number');
const bubbleImg     = document.getElementById('bubble-img');
const againBtn      = document.getElementById('again-btn');
const okBtn         = document.getElementById('ok-btn');

const aboutView     = document.getElementById('about-view');
const aboutBtn      = document.getElementById('about-btn');
const aboutCloseBtn = document.getElementById('about-close-btn');

// ─── 视图状态 ─────────────────────────────────────────────────

let currentView = 'landing';  // 'landing' | 'result' | 'about'

// 每个视图的配置：对应 DOM 元素、是否显示顶部导航
const VIEW_CONFIG = {
  landing: { el: landingContent, showNav: true  },
  result:  { el: resultView,     showNav: false },
  about:   { el: aboutView,      showNav: false },
};

// 统一切换函数：隐藏所有视图 → 显示目标视图 → 更新 nav 状态
function showView(viewName) {
  Object.values(VIEW_CONFIG).forEach(({ el }) => el.classList.add('hidden'));

  const config = VIEW_CONFIG[viewName];
  config.el.classList.remove('hidden');
  topNav.classList.toggle('hidden', !config.showNav);
  window.scrollTo(0, 0);

  currentView = viewName;
}

// ─── 核心逻辑 ─────────────────────────────────────────────────

function getRandomBubble() {
  const num = Math.floor(Math.random() * TOTAL_BUBBLES) + 1;
  const filename = String(num).padStart(5, '0') + '.png';
  return { num, src: `images/bubblesCN/${filename}` };
}

function drawBubble() {
  const { num, src } = getRandomBubble();
  bubbleImg.src = src;
  bubbleNumber.textContent = `No.${String(num).padStart(2, '0')}`;
}

function showResult() {
  const question = questionInput.value.trim();
  if (question) {
    questionText.textContent = `\u201C${question}\u201D`;
    userQuestion.classList.remove('hidden');
  } else {
    userQuestion.classList.add('hidden');
  }
  drawBubble();
  showView('result');
}

function goBack() {
  questionInput.value = '';
  showView('landing');
}

function showAbout() {
  showView('about');
}

function closeAbout() {
  questionInput.value = '';
  showView('landing');
}

// ─── 事件绑定 ─────────────────────────────────────────────────
openBtn.addEventListener('click', showResult);
againBtn.addEventListener('click', drawBubble);
closeBtn.addEventListener('click', goBack);
okBtn.addEventListener('click', goBack);
aboutBtn.addEventListener('click', showAbout);
aboutCloseBtn.addEventListener('click', closeAbout);
