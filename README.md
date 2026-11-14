# pjunquan.github.io

俊权 / Junquan Pan 的个人网站，使用纯 HTML、CSS 和 JavaScript，通过 GitHub Pages 发布，无需安装依赖或构建。

- 网站：https://pjunquan.github.io/
- 仓库：https://github.com/pjunquan/pjunquan.github.io
- 发布来源：`main` 分支的仓库根目录；`.nojekyll` 让 Pages 直接发布静态文件。

## 当前内容

- **About / 关于**：中英文自我介绍、缓慢打字与持续闪烁的光标、GitHub / Email / LinkedIn。
- **Work / 作品**：九个主题的中英文算法动画、待补充的 K12 课程内容、实际工作中用过的 AI Skills。
- **Learnings / 学习**：学习资源与个人笔记两列；Stanford CS329Z 的笔记进入站内课程目录，每课独立成页。第一课有 67 张幻灯片、82 段英文讲解；第二课 LLMs for Builders 有 170 张幻灯片、193 段英文讲解。每页配视频时间链接，保留原始页码。
- 中英文切换、日间 / 夜间模式、手机布局；语言与主题偏好保存在浏览器本地。减少动态效果模式下直接显示全文，光标静止。

## 内容修改位置

| 要修改的内容 | 文件与位置 |
| --- | --- |
| 自我介绍、About 和学习页的中英文文案 | `app.js` 中的 `copy.zh` / `copy.en`；介绍使用 `greeting`、`lead`、`bio` |
| 中文静态回退内容、联系方式、学习资源及笔记链接 | `index.html`；修改文案时同步对应的 `data-copy` 内容 |
| 新增学习资源 | 在 `index.html` 的 `.learnings-table` 中增加一行；资源名称链接到原材料，右列放笔记链接；需要双语说明时在 `app.js` 的两种语言中增加对应键 |
| CS329Z 课程笔记目录 | `notes/cs329z/index.html`；每课在 `.course-list` 中添加一项，链接到该课的独立目录 |
| CS329Z 每课正文与图片 | `notes/cs329z/lecture-<n>/index.html` 与该目录的 `slides/`；当前包含 `lecture-1/` 和 `lecture-2/`，正文按主题和原始幻灯片顺序排列 |
| 笔记页面的样式与界面语言 | `notes/notes.css` / `notes/notes.js`；复用全站配色及语言、明暗偏好 |
| Work 的中英文标题、描述、动画主题 | `work.js` 中的 `text.zh` / `text.en` 与 `topics` |
| Work 项目结构、Skills 链接 | `index.html` 中的 `#work` |
| 通用排版与打字光标样式 | `styles.css` |
| 浏览器标签页头像图标 | 根目录 `favicon.ico`（16/32/48/64px）与 `favicon.png`（64px）；替换后同步所有 HTML 的图标链接版本（对应文件 SHA-256 前 12 位），新页面沿用根路径引用 |
| 作品列表与详情排版 | `work.css` |
| 视频、海报及作品预览 | `assets/`；视频为 `<主题>-zh.mp4` / `<主题>-en.mp4`，海报为 `<主题>-poster-zh.png` / `<主题>-poster-en.png` |

`images/` 保留旧版网站素材，目前新版页面未引用。`.qa/` 用于本地检查截图和来源核对，不提交到仓库。算法动画相关素材约 99 MiB，第一课的 67 张 JPG 约 5.97 MB，第二课的 170 张 JPG 约 16.79 MB。

后续更新以本仓库为正式来源。Sites Demo 是设计预览副本，不会自动与本仓库同步；更新内容时直接修改本仓库，避免从旧 Demo 整包覆盖。

笔记页面通过 `?v=<文件 SHA-256 前 12 位>` 引用共享 `notes.css` / `notes.js`。修改这些文件后，同步更新全部笔记 HTML 中对应的版本值，避免新页面沿用浏览器缓存中的旧样式或文案。

## 本地预览

在仓库目录运行：

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

打开 http://127.0.0.1:8000/，检查 About、Work、Learnings；详情页采用 `#work/algorithms` 等 hash 路由，无需服务器路由配置。

笔记使用独立静态页面：`/notes/cs329z/` 是课程目录，`/notes/cs329z/lecture-1/` 和 `/notes/cs329z/lecture-2/` 分别是第一、二课。正文直接包含在 HTML 中，关闭 JavaScript 仍可阅读；界面可中英切换，英文笔记正文不变。图片随网站存储，不依赖飞书登录；点击幻灯片可打开原尺寸图片。视频链接到 YouTube 对应时间，保留近似时间说明。第一课移除无对应讲解的原第 8、9、10、13 页；第二课省略课堂问答、未讲页及没有独立讲解的过渡页，保留其余原编号。第二课的动画步骤可能共享或重叠近似时间段。桌面端左侧标题、PPT、视频时间组成完整块，与右侧正文块在同一行内上下居中，并各自在列内水平居中；正文段落保持左对齐。标题位于左侧块内部，随课件一起居中，不使用独立跨列标题行；长正文或长标题自然撑高整行。手机端按居中标题、图片、居中视频时间、左对齐讲解顺序排列，组内无分隔线。

## 继续添加课程笔记

按 [课程笔记整理与发布规则](COURSE_NOTES_GUIDE.md) 操作。其中集中记录内容取舍、标题居中与图文对齐、课次目录、图片、缓存版本及发布检查。新会话先读上一级 `HANDOFF.md`，再读该规则和本 README，并核对实际仓库状态。

## 更新与发布

1. 开始前拉取远端最新内容：`git pull --ff-only`。
2. 修改实际页面及相关素材，同时更新中英文；只在功能或维护方式改变时更新本 README。
3. 按 [发布检查清单](RELEASE_CHECKLIST.md) 做与本次改动有关的检查，再通过 `git diff` 确认提交范围。
4. 提交并推送至 `main`，GitHub Pages 会自动发布。

```bash
git add index.html app.js
git commit -m "Update About introduction"
git push origin main
```

上例只适用于介绍修改；按实际改动选择文件，新增视频时也要提交对应素材。提交后检查仓库 Actions 中的 `pages-build-deployment` 状态，并打开正式网站复查。源码提交成功不等于部署已完成。

Git 历史保留此前版本。需要回退时，对相关提交使用 `git revert <commit>` 并正常推送，避免强制覆盖历史。

## License

个人网站内容默认保留所有权利（All rights reserved）。如需复用，请先联系作者。
