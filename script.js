// ─── 常量 ───────────────────────────────────────────────────
const TOTAL_BUBBLES = 88;   // 修改这里就能支持更多截图

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

// ─── 核心逻辑 ─────────────────────────────────────────────────

// 生成一个随机编号（1 ~ TOTAL_BUBBLES），返回编号和图片路径
function getRandomBubble() {
  const num = Math.floor(Math.random() * TOTAL_BUBBLES) + 1;
  const filename = String(num).padStart(5, '0') + '.png';
  return { num, src: `images/bubblesCN/${filename}` };
}

// 更新卡片里的 bubble 图片和编号
function drawBubble() {
  const { num, src } = getRandomBubble();
  bubbleImg.src = src;
  bubbleNumber.textContent = `No.${String(num).padStart(2, '0')}`;
}

// 切换到结果视图
function showResult() {
  const question = questionInput.value.trim();

  // 如果用户写了问题，显示引用框；否则隐藏
  if (question) {
    questionText.textContent = `\u201C${question}\u201D`;  // "问题"
    userQuestion.classList.remove('hidden');
  } else {
    userQuestion.classList.add('hidden');
  }

  drawBubble();

  // 隐藏 landing，显示结果；锁定页面高度防止图片尺寸引起跳动
  topNav.classList.add('hidden');
  landingContent.classList.add('hidden');
  resultView.classList.remove('hidden');
  document.querySelector('.page').classList.add('result-active');
}

// 返回初始状态
function goBack() {
  resultView.classList.add('hidden');
  topNav.classList.remove('hidden');
  landingContent.classList.remove('hidden');
  document.querySelector('.page').classList.remove('result-active');
  questionInput.value = '';  // 清空输入框
}

// ─── 事件绑定 ─────────────────────────────────────────────────
openBtn.addEventListener('click', showResult);
againBtn.addEventListener('click', drawBubble);
closeBtn.addEventListener('click', goBack);
okBtn.addEventListener('click', goBack);
