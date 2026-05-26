// ─── 常量 ───────────────────────────────────────────────────
const TOTAL_BUBBLES_CN = 88;
const TOTAL_BUBBLES_EN = 88;  // bubblesEN/ 实际数量，待确认后更新

// ─── 语言数据 ─────────────────────────────────────────────────
let currentLang = 'CN';

const TRANSLATIONS = {
  CN: {
    'subtitle':        '此时此刻，你的困惑是什么呢？<br>或许礼志的答案之书提前准备了回答',
    'input-placeholder': '/ 写下你的问题，或深呼吸，在心中默念',
    'open-btn':        '打开',
    'quote-cn':        '（剩下的一天也要美好地度过🍀）',
    'again-btn':       '再翻一次',
    'ok-btn':          '好~',
    'about-s1-title':  '🖤 关于YEJI\'s Book of Answers',
    'about-s1-p1':     '从21年订阅礼志泡泡开始，我就有把这些瞬间收集起来的习惯。就像往截图相册里撒下一把花种子，慢慢地这些温暖的句子生长出来，点缀在其他图片之间，心情很低落的时候一口气读下来会有神奇的效用。',
    'about-s1-p2':     '有天整理的时候我突然觉得这像是一本礼志写的答案之书，你可以随时翻开某一页，然后获得力量，就像她说的，"有我呢，加油的话语、安慰的话语，几百遍几千遍都可以说"。所以我想试着用有趣的方式分享这个治愈心情的偏方。',
    'about-s1-p3':     '我想这本答案之书不仅仅是给读者安慰或指引的答案，也是关于她的答案。关于她是什么样的人、在她心中你的意义的答案。',
    'about-s2-title':  '😆 关于答案',
    'about-s2-p1':     '每个答案右下角标注了该条泡泡的日期，但因为工程量的原因问题并未一一核对，日期或存在误差。',
    'about-s2-p2':     '同样出自工程量考量，因为每条答案都是依照泡泡原文人工重做的，所以目前优先了需要配合翻译的中英版本。韩语版本沿用了英文版的图片，还望包涵理解，非常感谢。',
    'about-s2-p3':     '',
    'about-s3-title':  '🌼 声明',
    'about-s3-p1':     'YEJI\'s Book of Answers为饭制。泡泡内容版权为bubble for JYPnation和YEJI所有。',
    'about-s4-title':  '🍀 开发者notes',
    'about-s4-p1':     '如有任何反馈、建议或是想分享使用体验，欢迎通过社媒联系我，或邮件 <a href="mailto:readings.0526@gmail.com" class="about-link">readings.0526@gmail.com</a>',
    'about-s4-p2':     '祝使用愉快。',
    'about-s5-title':  '😎 版本',
    'about-s5-p1':     '最后更新 2026.05.25',
  },
  EN: {
    'subtitle':        'What is weighing on your mind right now?<br>Maybe YEJI\'s Book of Answers has the reply ready for you',
    'input-placeholder': '/ Write it down, or whisper in your heart',
    'open-btn':        'Open',
    'quote-cn':        '（Let\'s make the rest of the day a lovely one🍀）',
    'again-btn':       'One more',
    'ok-btn':          'Okay~',
    'about-s1-title':  '🖤 About YEJI\'s Book of Answers',
    'about-s1-p1':     'Ever since I subscribed to YEJI\'s Bubble in 2021, I\'ve had this habit of collecting these little moments. It felt like scattering a handful of flower seeds into my screenshot album. Over time, these warm words have grown and blossomed, tucked between other photos. Whenever I\'m feeling really down, reading through them works like magic for me.',
    'about-s1-p2':     'One day while organizing them, it suddenly hit me: this is like a Book of Answers written by YEJI herself. You can flip to any page anytime, and feel the love and strength. Just like she said, \'I\'m here for you. Words of encouragement, words of comfort, I can say them to you hundreds, thousands of times.\' So I wanted to try sharing this little remedy for the heart in a fun way.',
    'about-s1-p3':     'I think this Book of Answers isn\'t just offer comfort or guidance to the reader. It also holds an answer about her. About who she is, and what you truly mean to her.',
    'about-s2-title':  '😆 About the Answers',
    'about-s2-p1':     'The date of each bubble message is marked in the bottom-right corner of every answer. However, due to the workload, I wasn\'t able to verify each one individually, so some dates may not be accurate.',
    'about-s2-p2':     'Also due to the workload, since each answer pic was manually recreated based on the original bubble, the Chinese and English versions, which both needed translation, were prioritized. The Korean ver uses the English ver images. Thank you so much for your understanding.',
    'about-s2-p3':     '',
    'about-s3-title':  '🌼 Notice',
    'about-s3-p1':     'YEJI\'s Book of Answers is a fan-made project. All bubble content is copyrighted by bubble for JYPnation and YEJI.',
    'about-s4-title':  '🍀 Developer Notes',
    'about-s4-p1':     'If you have any feedback, suggestions, or just want to share your experience, feel free to reach out through social media, or by email at <a href="mailto:readings.0526@gmail.com" class="about-link">readings.0526@gmail.com</a>',
    'about-s4-p2':     'Enjoy~',
    'about-s5-title':  '😎 Version',
    'about-s5-p1':     'Last updated 2026.05.25',
  },
  KR: {
    'subtitle':        '지금 어떤 질문이 마음속에 있나요?<br>어쩌면 예지의 해답이 이미 준비해 뒀을지도 몰라요',
    'input-placeholder': '/ 질문을 적거나, 마음속으로 떠올려보세요',
    'open-btn':        '열기',
    'quote-cn':        '\u00a0',   // non-breaking space: 保留排版空位
    'again-btn':       '다시 뽑기',
    'ok-btn':          '좋아~',
    'about-s1-title':  '🖤 YEJI\'s Book of Answers 소개',
    'about-s1-p1':     '2021년에 버블을 구독하기 시작한 이후로, 저는 이런 순간들을 모아두는 습관이 생겼어요. 마치 일기장에 꽃씨를 한 줌 뿌리는 것처럼, 따뜻한 말들이 다른 사진들 사이에서 천천히 자라났죠. 마음이 많이 가라앉은 날, 한 번에 쭉 읽어보면 신기하게도 마음이 편안해져요.',
    'about-s1-p2':     '어느 날 정리하다가 문득 이런 생각이 들었어요 — 이건 마치 예지가 쓴 답서 같다고. 언제든 한 페이지를 펼칠 수 있고, 예지가 말한 것처럼 "힘내라는 말도 위로의 말도 몇백 번 몇천 번 해 줄 수 있다구", 그렇게 힘을 얻을 수 있다고요. 그래서 이 마음을 치유하는 작은 처방을 재미있는 방식으로 나눠보고 싶었어요.',
    'about-s1-p3':     '이 답서는 단순히 독자에게 위로나 길잡이가 되어주는 답이 아니라, 예지에 관한 답이기도 하다고 생각해요. 그녀가 어떤 사람인지, 그리고 그녀의 마음속에서 당신이 어떤 의미인지에 대한 답이요.',
    'about-s2-title':  '😆 답에 관하여',
    'about-s2-p1':     '각 답의 오른쪽 아래에는 해당 버블의 날짜가 적혀 있어요. 다만 작업량 때문에 하나하나 확인하지는 못해서, 날짜에 약간의 오차가 있을 수 있어요.',
    'about-s2-p2':     '마찬가지로 작업량을 고려해, 모든 답을 버블 원문을 바탕으로 직접 만들다 보니 번역이 필요한 중국어와 영어 버전을 우선했어요. 한국어 버전은 영어 버전 이미지를 그대로 사용하고 있어요. 너그러이 이해해주시면 감사하겠습니다.',
    'about-s2-p3':     '',
    'about-s3-title':  '🌼 안내',
    'about-s3-p1':     'YEJI\'s Book of Answers는 팬메이드 프로젝트입니다. 모든 버블 콘텐츠의 저작권은 bubble for JYPnation과 YEJI에게 있습니다.',
    'about-s4-title':  '🍀 개발자 노트',
    'about-s4-p1':     '피드백이나 제안, 또는 사용 경험을 나누고 싶으시다면, SNS나 이메일 <a href="mailto:readings.0526@gmail.com" class="about-link">readings.0526@gmail.com</a> 로 편하게 연락 주세요. 즐거운 시간 보내세요~',
    'about-s4-p2':     '',         // KR 合并进了 p1，此处留空由 CSS :empty 隐藏
    'about-s5-title':  '😎 버전',
    'about-s5-p1':     '최종 업데이트 2026.05.25',
  },
};

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
  const useEN   = currentLang !== 'CN';
  const folder  = useEN ? 'bubblesEN' : 'bubblesCN';
  const total   = useEN ? TOTAL_BUBBLES_EN : TOTAL_BUBBLES_CN;
  const num     = Math.floor(Math.random() * total) + 1;
  const filename = String(num).padStart(5, '0') + '.webp';
  return { num, src: `images/${folder}/${filename}` };
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
  saveHint.textContent = '';
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

// ─── 语言切换 ─────────────────────────────────────────────────

function setLanguage(lang) {
  currentLang = lang;
  document.body.setAttribute('data-lang', lang);

  const t = TRANSLATIONS[lang];

  // 更新所有 data-i18n 元素（innerHTML 支持 <br>、<a> 等）
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // 更新 placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // 同步两个导航栏的语言标签和选中状态
  document.querySelectorAll('.lang-label').forEach(el => el.textContent = lang);
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.langOpt === lang);
  });

  // 如果结果页正在显示，刷新图片（中/英图片库不同）
  if (currentView === 'result') drawBubble();
}

// 初始化两个下拉菜单
(function initLangDropdowns() {
  const drops = [
    document.getElementById('lang-drop-top'),
    document.getElementById('lang-drop-about'),
  ];

  // 点击外部关闭所有下拉
  document.addEventListener('click', () => {
    drops.forEach(d => d.classList.remove('open'));
  });

  drops.forEach(drop => {
    // 切换开关
    drop.querySelector('.lang-btn').addEventListener('click', e => {
      e.stopPropagation();
      const isOpen = drop.classList.contains('open');
      drops.forEach(d => d.classList.remove('open'));
      if (!isOpen) drop.classList.add('open');
    });

    // 选择语言
    drop.querySelectorAll('.lang-option').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        setLanguage(btn.dataset.langOpt);
        drop.classList.remove('open');
      });
    });
  });
})();

// ─── 事件绑定 ─────────────────────────────────────────────────
openBtn.addEventListener('click', openEnvelope);
envSeal.addEventListener('click', openEnvelope);
againBtn.addEventListener('click', drawBubble);
closeBtn.addEventListener('click', goBack);
okBtn.addEventListener('click', goBack);
aboutBtn.addEventListener('click', showAbout);
aboutCloseBtn.addEventListener('click', closeAbout);
