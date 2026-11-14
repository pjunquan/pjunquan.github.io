(() => {
  'use strict';
  const text = {
    zh: {
      heading: '精选作品。', description: '关于学习、表达，以及把事情做得更简单。',
      algorithmsCategory: '01 / 可视化与学习设计', algorithmsTitle: '算法与数据结构可视化',
      algorithmsDescription: '用故事与动态画面，解释抽象的计算过程。为初学者制作的九个中英文短片。', viewSeries: '观看系列',
      k12Category: '02 / 课程与内容设计', k12Title: 'K12 课程内容',
      k12Description: '过往课程与教学材料，正在整理中。这里预留给具体的课程项目与内容样例。', preparing: '内容准备中', placeholderCover: '示意封面',
      workflowsCategory: '03 / 工具与工作流', workflowsTitle: '用 AI，把工作做得更好',
      workflowsDescription: '整理和分享我在实际工作中用过的 AI Skills，以及它们的使用场景和方法。', viewProject: '查看项目',
      input: '输入', organize: '整理', output: '输出', back: '← 全部作品',
      seriesIntro: '从具体的故事出发，看清操作、关系和变化。九个主题，每个都有中文与英文版本。',
      designIdea: '设计思路', designBody: '先呈现一个具体问题，再让操作和变化发生在眼前，最后引入术语。用颜色、位置和停顿帮助初学者跟上过程。',
      designLimit: '这是持续探索的可视化作品系列，学习效果尚未经过观众测试。',
      k12Pending: '正在整理过往的课程内容。具体项目、课程结构和代表性材料会陆续放在这里。',
      comingSoon: 'Coming Soon', k12DemoNote: '当前为作品集位置预览，尚未加入真实课程材料。',
      previewAlt: '二分查找动画预览', playerLabel: '算法动画播放器', topicsLabel: '选择动画主题', languageLabel: '中文'
    },
    en: {
      heading: 'Selected work.', description: 'Learning, making things clear, and finding simpler ways to work.',
      algorithmsCategory: '01 / VISUAL LEARNING', algorithmsTitle: 'Algorithms, made visible',
      algorithmsDescription: 'Stories and motion that make abstract ideas tangible. Nine short films for beginners, in Chinese and English.', viewSeries: 'Explore the series',
      k12Category: '02 / CURRICULUM & CONTENT', k12Title: 'K12 learning experiences',
      k12Description: 'Past courses and teaching materials, currently being collected. A space for individual projects and samples.', preparing: 'Coming Soon', placeholderCover: 'Placeholder artwork',
      workflowsCategory: '03 / TOOLS & WORKFLOWS', workflowsTitle: 'Working better with AI',
      workflowsDescription: 'A collection of AI Skills I’ve used in my day-to-day work, with notes on when and how I use them.', viewProject: 'View project',
      input: 'Input', organize: 'Organize', output: 'Output', back: '← All work',
      seriesIntro: 'Start with a concrete story. See the steps, relationships, and changes. Nine topics, each in Chinese and English.',
      designIdea: 'The design idea', designBody: 'Introduce a concrete problem, make the actions and changes visible, then introduce the terminology. Color, position, and pauses help beginners follow the process.',
      designLimit: 'An ongoing exploration in visual explanation. Learning outcomes have not yet been tested with viewers.',
      k12Pending: 'I’m gathering material from past courses. Individual projects, course structures, and selected samples will live here.',
      comingSoon: 'Coming Soon', k12DemoNote: 'This is a portfolio layout placeholder. Actual course materials have not been added yet.',
      previewAlt: 'A frame from the binary search animation', playerLabel: 'Algorithm animation player', topicsLabel: 'Choose an animation', languageLabel: 'English'
    }
  };
  const topics = [
    {id:'binary-search', zh:'二分查找', en:'Binary search', seconds:78, zhDescription:'比较中间的值，说明为什么可以排除一半候选，再继续缩小范围。', enDescription:'Compare the middle value, see why half the candidates can be ruled out, and narrow the search.'},
    {id:'recursion', zh:'递归与调用栈', en:'Recursion', seconds:86, zhDescription:'用套盒数糖的故事，看清等待、停止和逐层带回答案的过程。', enDescription:'Count sweets in nested boxes to follow waiting, stopping, and bringing an answer back.'},
    {id:'insertion-sort', zh:'插入排序', en:'Insertion sort', seconds:42, zhDescription:'逐次比较、右移元素，再把手中的数放入合适的空位。', enDescription:'Compare, shift elements to the right, and place the current value in the open slot.'},
    {id:'bubble-sort', zh:'冒泡排序', en:'Bubble sort', seconds:38, zhDescription:'先比较，再交换，一轮一轮确定右侧的位置。', enDescription:'Compare and swap neighbors, settling the rightmost position one pass at a time.'},
    {id:'shell-sort', zh:'希尔排序', en:'Shell sort', seconds:61, zhDescription:'看清间隔分组，以及每一组内部的比较与移动。', enDescription:'Follow the gap-based groups, then the comparisons and moves inside each group.'},
    {id:'array', zh:'数组', en:'Arrays', seconds:60, zhDescription:'区分固定的索引位置与其中可以替换的值。', enDescription:'Separate fixed index positions from the values that can be replaced.'},
    {id:'linked-list', zh:'链表', en:'Linked lists', seconds:60, zhDescription:'区分当前节点与 next 指向的目标，跟随连接向前走。', enDescription:'Distinguish the current node from its next target, then follow the links.'},
    {id:'stack', zh:'栈', en:'Stacks', seconds:60, zhDescription:'持续关注栈顶，辨别查看顶部和取出元素的区别。', enDescription:'Keep track of the top, and distinguish looking at an item from removing it.'},
    {id:'queue', zh:'队列', en:'Queues', seconds:70, zhDescription:'从队尾加入，从队首取出，让先进先出的过程可见。', enDescription:'Join at the back and leave from the front: make first-in, first-out visible.'}
  ];
  const player = document.getElementById('algorithm-player');
  const topicList = document.getElementById('topic-list');
  let selectedTopic = 'binary-search';
  let previousView = '';
  let currentLanguage = '';
  function language() { return document.documentElement.lang === 'en' ? 'en' : 'zh'; }
  function updateVideo() {
    const lang = language();
    const topic = topics.find(item => item.id === selectedTopic);
    document.getElementById('video-title').textContent = topic[lang];
    document.getElementById('video-description').textContent = topic[lang + 'Description'];
    document.getElementById('video-duration').textContent = Math.floor(topic.seconds / 60) + ':' + String(topic.seconds % 60).padStart(2, '0') + ' · ' + text[lang].languageLabel;
    topicList.querySelectorAll('button').forEach(button => { button.setAttribute('aria-pressed', String(button.dataset.topic === selectedTopic)); });
    const path = 'assets/' + topic.id + '-' + lang + '.mp4';
    if (player.getAttribute('src') !== path) {
      player.pause();
      player.poster = 'assets/' + topic.id + '-poster-' + lang + '.png';
      player.src = path;
      player.load();
    }
  }
  function render() {
    const lang = language();
    const copy = text[lang];
    const route = location.hash.slice(1).split('/');
    const view = route[0] === 'work' && ['algorithms','k12','workflows'].includes(route[1]) ? route[1] : 'index';
    if (currentLanguage !== lang) {
      document.querySelectorAll('[data-workcopy]').forEach(element => { element.textContent = copy[element.dataset.workcopy]; });
      document.querySelectorAll('[data-worklabel]').forEach(element => { element.setAttribute('aria-label', copy[element.dataset.worklabel]); });
      const thumbnail = document.getElementById('algorithm-thumbnail');
      thumbnail.src = 'assets/algorithm-preview-' + lang + '.png';
      thumbnail.alt = copy.previewAlt;
      player.setAttribute('aria-label', copy.playerLabel);
      topicList.setAttribute('aria-label', copy.topicsLabel);
      topicList.replaceChildren(...topics.map(topic => {
        const button = document.createElement('button');
        button.type = 'button'; button.className = 'topic-button'; button.dataset.topic = topic.id;
        button.textContent = topic[lang]; button.setAttribute('aria-pressed', String(topic.id === selectedTopic));
        button.addEventListener('click', () => { selectedTopic = topic.id; updateVideo(); });
        return button;
      }));
      currentLanguage = lang;
    }
    document.querySelectorAll('[data-work-view]').forEach(element => { element.hidden = element.dataset.workView !== view; });
    if (route[0] === 'work' && view === 'algorithms') updateVideo();
    else player.pause();
    if (route[0] === 'work' && previousView !== view) window.scrollTo(0, 0);
    previousView = view;
  }
  window.addEventListener('hashchange', render);
  new MutationObserver(render).observe(document.documentElement, {attributes:true, attributeFilter:['lang']});
  render();
})();
