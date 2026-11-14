(() => {
  'use strict';
  const root = document.documentElement;
  const themeButton = document.getElementById('theme-toggle');
  const languageButton = document.getElementById('language-toggle');
  const systemTheme = matchMedia('(prefers-color-scheme: dark)');
  const copy = {
    zh: {
      about: '关于', work: '作品', learnings: '学习', navigation: '主导航',
      backLearnings: '← 全部学习', backCourse: '← 课程笔记', courseNotes: '课程笔记',
      courseIntro: '按课次整理的学习笔记，包含课件、英文讲解与视频时间链接。',
      lessonMeta: '67 张幻灯片 · 英文讲解 · 视频时间链接',
      courseWebsite: '课程官网 ↗', contents: '本课目录', top: '回到目录 ↑',
      footer: '保持好奇，慢慢积累。', skip: '跳至正文',
      day: '切换至日间模式', night: '切换至夜间模式'
    },
    en: {
      about: 'About', work: 'Work', learnings: 'Learnings', navigation: 'Main navigation',
      backLearnings: '← All learnings', backCourse: '← Course notes', courseNotes: 'Course notes',
      courseIntro: 'Notes organized by lecture, with slides, edited English lecture text, and video timestamps.',
      lessonMeta: '67 slides · English lecture text · Video timestamps',
      courseWebsite: 'Course website ↗', contents: 'In this lecture', top: 'Contents ↑',
      footer: 'Stay curious. Keep collecting.', skip: 'Skip to content',
      day: 'Switch to light mode', night: 'Switch to dark mode'
    }
  };
  function read(key) { try { return localStorage.getItem('junquan-demo-' + key); } catch (_) { return null; } }
  function save(key, value) { try { localStorage.setItem('junquan-demo-' + key, value); } catch (_) {} }
  let language = read('language') === 'en' ? 'en' : 'zh';
  let manualTheme = read('theme');
  function updateTheme(theme) {
    root.dataset.theme = theme === 'dark' ? 'dark' : 'light';
    const label = copy[language][root.dataset.theme === 'dark' ? 'day' : 'night'];
    themeButton.setAttribute('aria-label', label);
    themeButton.title = label;
  }
  function updateLanguage() {
    root.lang = language === 'zh' ? 'zh-Hans' : 'en';
    document.querySelectorAll('[data-note-copy]').forEach(element => { element.textContent = copy[language][element.dataset.noteCopy]; element.lang = root.lang; });
    document.getElementById('navigation').setAttribute('aria-label', copy[language].navigation);
    document.getElementById('zh-label').classList.toggle('selected-language', language === 'zh');
    document.getElementById('en-label').classList.toggle('selected-language', language === 'en');
    languageButton.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换至中文');
    languageButton.title = languageButton.getAttribute('aria-label');
    updateTheme(root.dataset.theme);
  }
  themeButton.addEventListener('click', () => {
    manualTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    save('theme', manualTheme);
    updateTheme(manualTheme);
  });
  languageButton.addEventListener('click', () => { language = language === 'zh' ? 'en' : 'zh'; save('language', language); updateLanguage(); });
  systemTheme.addEventListener('change', event => { if (!manualTheme) updateTheme(event.matches ? 'dark' : 'light'); });
  updateTheme(manualTheme || (systemTheme.matches ? 'dark' : 'light'));
  updateLanguage();
})();
