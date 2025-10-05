# 俊权的个人网站 | Philip (Junquan) Pan

欢迎来到我的个人网站（GitHub Pages）！该站点展示了我的背景、作品与 AI + 教育实验室，并提供中/繁/英三语切换与丰富的交互体验。

**在线访问**：
https://pjunquan.github.io/

**代码仓库**：
https://github.com/pjunquan/pjunquan.github.io

**主要页面**：
- 主页：`index.html`
- AI + 教育实验室：`ai-education.html`

## 🌟 主要特性

- 多语言切换：简体中文、繁体中文、English（导航栏右侧地球按钮）
- 响应式设计：移动端与桌面端均良好显示
- 视觉动效：
  - 粒子背景（tsParticles）
  - 鼠标尾迹（`js/mouse-trail.js`）
  - 元素滚动淡入动画
  - 头像点击高光特效
- 英雄区社交图标（LinkedIn/GitHub/Email），位于头像下方
- 「关于我」与「核心技能」展示
- CTA 引导到「AI + 教育实验室」页面（`ai-education.html`）
- AI + 教育实验室页面：
  - d.school 风格项目卡片（Stories/Projects/Tools）
  - 内置 Quill 富文本编辑器用于编辑 Story 内容
  - 支持将数据保存到浏览器 localStorage（便于快速演示与本地持久化）

## 🧰 技术栈

- HTML5 / CSS3 / JavaScript（原生）
- Bootstrap 5.3（布局与组件）
- jQuery 3.6.3（基础 DOM 辅助）
- tsParticles 2.12（粒子背景，CDN 引用）
- Font Awesome 6.x（AI 实验室页面图标，CDN 引用）
- Quill 富文本编辑器（AI 实验室页面，CDN 引用）
- Simple Icons（社交图标，通过 jsDelivr CDN 引用）

## 📁 项目结构

```
pjunquan.github.io/
├── index.html                 # 主页（多语言、粒子背景、社交图标、关于我等）
├── ai-education.html          # AI + 教育实验室页（项目卡片 + 编辑器）
├── style.css                  # 自定义样式（含社交图标样式等）
├── js/
│   ├── jquery-3.6.3.min.js
│   └── mouse-trail.js         # 鼠标尾迹效果
├── images/
│   ├── frontpage/             # 首页头像等图片（如 1.jpg）
│   ├── personal/              # 个人照片
│   └── portfolio/             # 作品集图片
├── deploy.sh                  # 部署脚本（可选）
└── README.md
```

## 🧭 使用说明（本地预览）

- 直接双击 `index.html` 在浏览器打开，或使用本地服务器：
  - Python：`python3 -m http.server 8000`，然后访问 `http://localhost:8000/`
- 由于外部依赖通过 CDN 加载，请确保联网以显示粒子背景、图标等资源。

## 🚀 部署到 GitHub Pages

1. 确保仓库设置（Settings -> Pages）：
   - Source 选择 `Deploy from a branch`
   - Branch 选择 `main`，目录 `/ (root)`
2. 提交并推送代码到 `main`：
   - `git add . && git commit -m "update site" && git push`
3. 稍等 1–2 分钟，访问：https://pjunquan.github.io/
4. 若未更新：在 Actions 查看 “Pages build and deployment” 任务是否成功。

## ✏️ 内容修改指南

- 首页文案（中/繁/英）：
  - 在 `index.html` 中，包含 `data-en` / `data-zh` / `data-zh-tw` 的元素会随语言切换更新。
  - 修改对应属性值即可同步三语内容。
- 头像与社交：
  - 头像：`images/frontpage/1.jpg`
  - 社交图标与链接：`index.html` 中 `.hero-avatar` 下的 `.social-icons` 区块
- 样式调整：
  - 在 `style.css` 中维护 `.social-icons` / `.social-icon` 等样式
- AI + 教育实验室：
  - `ai-education.html` 页面包含 Stories/Projects/Tools 卡片展示与富文本编辑器（Quill）
  - 支持将编辑后的内容保存到浏览器 localStorage；如需长期保存，可在页面中点击导出数据并纳入版本管理。

## 📬 联系方式

- GitHub：https://github.com/pjunquan
- Email：junquanpan2016@gmail.com
- 主页：https://pjunquan.github.io/

## 📄 许可证

此项目仅供个人展示使用。

—— 感谢访问我的个人网站！
