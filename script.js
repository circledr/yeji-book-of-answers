// ─── 常量 ───────────────────────────────────────────────────
const TOTAL_BUBBLES = 88;

// ─── 工具函数 ─────────────────────────────────────────────────
function getFormattedDate() {
  const d = new Date();
  return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
}

// ─── DOM 引用 ────────────────────────────────────────────────
const topNav        = document.getElementById('top-nav');
const landingContent= document.getElementById('landing-content');
const openBtn       = document.getElementById('open-btn');
const questionInput = document.getElementById('question-input');
const envelope      = document.getElementById('envelope');
const envSeal       = document.getElementById('env-seal');

const resultView    = document.getElementById('result-view');
const closeBtn      = document.getElementById('close-btn');
const userQuestion  = document.getElementById('user-question');
const questionText  = document.getElementById('question-text');
const bubbleNumber  = document.getElementById('bubble-number');
const bubbleImg     = document.getElementById('bubble-img');
const saveHint      = document.getElementById('save-hint');
const againBtn      = document.getElementById('again-btn');
const okBtn         = document.getElementById('ok-btn');

const aboutView     = document.getElementById('about-view');
const aboutBtn      = document.getElementById('about-btn');
const aboutCloseBtn = document.getElementById('about-close-btn');

// ─── 动画状态 ─────────────────────────────────────────────────
let isAnimating = false;

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
  saveHint.textContent = `[${getFormattedDate()}]`;
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

// ─── 信封打开动画 + 渐变过渡到结果页 ─────────────────────────
// 时序：翻盖旋转(450ms) → 信纸滑出(delay 450ms + 400ms)
//       → 淡出 landing(920ms 后) → 淡入 result
function openEnvelope() {
  if (isAnimating) return;
  isAnimating = true;

  envelope.classList.add('open');

  setTimeout(() => {
    landingContent.style.transition = 'opacity 0.3s ease';
    landingContent.style.opacity    = '0';
    topNav.style.transition         = 'opacity 0.3s ease';
    topNav.style.opacity            = '0';

    setTimeout(() => {
      envelope.classList.remove('open');
      landingContent.style.transition = '';
      landingContent.style.opacity    = '';
      topNav.style.transition         = '';
      topNav.style.opacity            = '';
      isAnimating = false;

      showResult();
      resultView.style.opacity = '0';
      requestAnimationFrame(() => requestAnimationFrame(() => {
        resultView.style.transition = 'opacity 0.4s ease';
        resultView.style.opacity    = '1';
        setTimeout(() => {
          resultView.style.transition = '';
          resultView.style.opacity    = '';
        }, 420);
      }));
    }, 300);
  }, 920);
}

// ─── 事件绑定 ─────────────────────────────────────────────────
openBtn.addEventListener('click', openEnvelope);
envSeal.addEventListener('click', openEnvelope);
againBtn.addEventListener('click', drawBubble);
closeBtn.addEventListener('click', goBack);
okBtn.addEventListener('click', goBack);
aboutBtn.addEventListener('click', showAbout);
aboutCloseBtn.addEventListener('click', closeAbout);
