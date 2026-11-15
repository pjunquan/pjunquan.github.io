(() => {
  'use strict';
  const copy = {
    zh: {
      nav: ['关于', '作品', '学习'], navigation: '主导航', greeting: '你好，我是俊权。',
      lead: '我的工作主要围绕学习设计、内容开发、数据分析和 AI 展开。我喜欢把复杂的事情理清楚，也喜欢琢磨更高效的工作方式。',
      bio: '此前，我曾在 VIPKid、字节跳动和 LeetCode 设计学习体验、开发学习内容。最近，我花了很多时间在工作和个人项目上探索 AI 智能体的工作流设计与开发。',
      workHeading: '做过的一些东西。', workDescription: '从实际问题出发，把想法变成可以使用的工具。',
      invoiceTitle: '发票整理工作流', invoiceDescription: '把零散的发票图片，批量整理为标准报销 PPT / PDF，支持数量核对与项目化输入目录。',
      paymentTitle: '支付截图整理工作流', paymentDescription: '将支付截图按规则拼接到目标文档，用可重复的流程处理材料，并保留可追溯的校验。',
      workEnd: '一些小工具，也是一点点改进工作方式的尝试。',
      learningsHeading: '学习', resourcesHeading: '学习资源', notesHeading: '我的笔记',
      cs329zDescription: '斯坦福的 AI 智能体工程课程，介绍如何构建、评估和优化智能体系统，涵盖 RAG、工具调用与工作流设计。',
      cs193tDescription: '斯坦福的 AI 实践课程，涵盖提示词设计、智能体工作流、模型评估，以及 AI 使用中的批判性思考。',
      cs193tPlan: '计划在学完 Engineering AI Agents 后学习。',
      courseNotesLink: '笔记', courseNotesDescription: '课程内容的文字整理',
      footer: '保持好奇，慢慢积累。', day: '切换至日间模式', night: '切换至夜间模式', contact: '联系我'
    },
    en: {
      nav: ['About', 'Work', 'Learnings'], navigation: 'Main navigation', greeting: "Hi, I'm J.",
      lead: 'I work at the intersection of learning design, content development, data analytics, and AI. I like making complex things clearer and finding more efficient ways to work.',
      bio: 'Previously, I designed learning experiences and developed learning content at VIPKid, ByteDance, and LeetCode. These days, I’m spending much of my time exploring how to design and build agentic workflows in my work and side projects.',
      workHeading: 'A few things I’ve made.', workDescription: 'Small, useful tools that started with real problems.',
      invoiceTitle: 'An invoice-to-report workflow', invoiceDescription: 'Turn batches of invoice images into reimbursement-ready PPT and PDF files, with count checks and project-based input folders.',
      paymentTitle: 'A payment screenshot workflow', paymentDescription: 'Arrange payment screenshots into documents with a repeatable process and traceable checks.',
      workEnd: 'Small tools. A few steps toward better ways of working.',
      learningsHeading: 'Learnings', resourcesHeading: 'Learning resources', notesHeading: 'My notes',
      cs329zDescription: 'A Stanford course on building, evaluating, and optimizing AI agent systems, covering RAG, tool use, and agent workflows.',
      cs193tDescription: 'A hands-on Stanford course on prompting, agentic workflows, model evaluation, and critical thinking about AI use.',
      cs193tPlan: 'I plan to take this after finishing Engineering AI Agents.',
      courseNotesLink: 'Notes', courseNotesDescription: 'Course content organized into written notes',
      footer: 'Stay curious. Keep collecting.', day: 'Switch to light mode', night: 'Switch to dark mode', contact: 'Get in touch'
    }
  };

  const root = document.documentElement;
  const navLinks = [...document.querySelectorAll('[data-page]')];
  const pages = [...document.querySelectorAll('.page')];
  const themeButton = document.getElementById('theme-toggle');
  const languageButton = document.getElementById('language-toggle');
  const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
  const systemTheme = matchMedia('(prefers-color-scheme: dark)');
  const playedLanguages = new Set();
  let timer = null;
  let activePage = 'about';
  let language = readPreference('language') === 'en' ? 'en' : 'zh';
  let manualTheme = readPreference('theme');

  function readPreference(key) {
    try { return localStorage.getItem('junquan-demo-' + key); } catch (_) { return null; }
  }
  function savePreference(key, value) {
    try { localStorage.setItem('junquan-demo-' + key, value); } catch (_) {}
  }
  function updateTheme(theme) {
    root.dataset.theme = theme === 'dark' ? 'dark' : 'light';
    const label = copy[language][root.dataset.theme === 'dark' ? 'day' : 'night'];
    themeButton.setAttribute('aria-label', label);
    themeButton.title = label;
  }
  function stopTyping() {
    clearTimeout(timer);
    timer = null;
    document.querySelectorAll('.cursor').forEach(cursor => cursor.remove());
  }
  function fillIntro() {
    [['about-heading', 'greeting'], ['about-lead', 'lead']].forEach(([id, key]) => {
      document.getElementById(id).querySelectorAll('span').forEach(span => { span.textContent = copy[language][key]; });
    });
  }
  function showFullIntro() {
    stopTyping();
    fillIntro();
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    document.querySelector('#about-lead .type-content').appendChild(cursor);
  }
  function typeIntro() {
    stopTyping();
    fillIntro();
    if (playedLanguages.has(language) || motionPreference.matches) {
      showFullIntro();
      return;
    }
    playedLanguages.add(language);
    const heading = document.querySelector('#about-heading .type-content');
    const lead = document.querySelector('#about-lead .type-content');
    const lines = [[heading, [...copy[language].greeting]], [lead, [...copy[language].lead]]];
    heading.textContent = '';
    lead.textContent = '';
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    let lineIndex = 0;
    let characterIndex = 0;
    const count = lines.reduce((sum, line) => sum + line[1].length, 0);
    const delay = Math.max(48, Math.min(170, 11000 / count));
    function tick() {
      const [element, letters] = lines[lineIndex];
      characterIndex += 1;
      element.textContent = letters.slice(0, characterIndex).join('');
      element.appendChild(cursor);
      if (characterIndex < letters.length) {
        const punctuation = /[，。,.!?？]/.test(letters[characterIndex - 1]);
        timer = setTimeout(tick, delay + (punctuation ? 280 : 0));
      } else if (lineIndex + 1 < lines.length) {
        lineIndex += 1;
        characterIndex = 0;
        timer = setTimeout(tick, 600);
      } else {
        timer = null;
      }
    }
    heading.appendChild(cursor);
    timer = setTimeout(tick, 350);
  }
  function updateLanguage() {
    stopTyping();
    const content = copy[language];
    root.lang = language === 'zh' ? 'zh-Hans' : 'en';
    document.querySelectorAll('[data-copy]').forEach(element => { element.textContent = content[element.dataset.copy]; });
    navLinks.forEach((link, index) => { link.textContent = content.nav[index]; });
    document.getElementById('navigation').setAttribute('aria-label', content.navigation);
    document.querySelector('.social-links').setAttribute('aria-label', content.contact);
    document.getElementById('zh-label').classList.toggle('selected-language', language === 'zh');
    document.getElementById('en-label').classList.toggle('selected-language', language === 'en');
    languageButton.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换至中文');
    languageButton.title = language === 'zh' ? 'Switch to English' : '切换至中文';
    fillIntro();
    updateTheme(root.dataset.theme);
    if (activePage === 'about') typeIntro();
    updateTitle();
  }
  function updateTitle() {
    const pageIndex = ['about', 'work', 'learnings'].indexOf(activePage);
    document.title = copy[language].nav[pageIndex] + ' — Junquan Pan';
  }
  function route() {
    const requested = location.hash.slice(1).split('/')[0];
    activePage = ['about', 'work', 'learnings'].includes(requested) ? requested : 'about';
    showFullIntro();
    pages.forEach(page => { page.hidden = page.id !== activePage; });
    navLinks.forEach(link => {
      if (link.dataset.page === activePage) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    if (activePage === 'about') typeIntro();
    updateTitle();
  }

  themeButton.addEventListener('click', () => {
    manualTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    savePreference('theme', manualTheme);
    updateTheme(manualTheme);
  });
  languageButton.addEventListener('click', () => {
    language = language === 'zh' ? 'en' : 'zh';
    savePreference('language', language);
    updateLanguage();
  });
  systemTheme.addEventListener('change', event => { if (!manualTheme) updateTheme(event.matches ? 'dark' : 'light'); });
  motionPreference.addEventListener('change', event => { if (event.matches) showFullIntro(); });
  document.getElementById('intro').addEventListener('click', showFullIntro);
  document.addEventListener('keydown', event => { if (event.key === 'Escape') showFullIntro(); });
  window.addEventListener('hashchange', route);
  // Establish the route before the first animation, including direct links to Work/Learnings.
  activePage = ['about', 'work', 'learnings'].includes(location.hash.slice(1).split('/')[0]) ? location.hash.slice(1).split('/')[0] : 'about';
  pages.forEach(page => { page.hidden = page.id !== activePage; });
  navLinks.forEach(link => { if (link.dataset.page === activePage) link.setAttribute('aria-current', 'page'); else link.removeAttribute('aria-current'); });
  updateTheme(manualTheme || (systemTheme.matches ? 'dark' : 'light'));
  updateLanguage();
})();
