# pjunquan.github.io

俊权 / Junquan Pan 的个人网站，使用纯 HTML、CSS 和 JavaScript，通过 GitHub Pages 发布，无需安装依赖或构建。

- 网站：https://pjunquan.github.io/
- 仓库：https://github.com/pjunquan/pjunquan.github.io
- 发布来源：`main` 分支的仓库根目录；`.nojekyll` 让 Pages 直接发布静态文件。

## 当前内容

- **About / 关于**：中英文自我介绍、缓慢打字与持续闪烁的光标、GitHub / Email / LinkedIn。
- **Work / 作品**：九个主题的中英文算法动画、待补充的 K12 课程内容、实际工作中用过的 AI Skills。
- **Learnings / 学习**：学习资源与个人笔记两列；Stanford CS329Z 的笔记进入站内课程目录，每课独立成页。第一课已完整收录 71 张幻灯片、86 段英文讲解与 67 个视频时间链接。
- 中英文切换、日间 / 夜间模式、手机布局；语言与主题偏好保存在浏览器本地。减少动态效果模式下直接显示全文，光标静止。

## 内容修改位置

| 要修改的内容 | 文件与位置 |
| --- | --- |
| 自我介绍、About 和学习页的中英文文案 | `app.js` 中的 `copy.zh` / `copy.en`；介绍使用 `greeting`、`lead`、`bio` |
| 中文静态回退内容、联系方式、学习资源及笔记链接 | `index.html`；修改文案时同步对应的 `data-copy` 内容 |
| 新增学习资源 | 在 `index.html` 的 `.learnings-table` 中增加一行；资源名称链接到原材料，右列放笔记链接；需要双语说明时在 `app.js` 的两种语言中增加对应键 |
| CS329Z 课程笔记目录 | `notes/cs329z/index.html`；每课在 `.course-list` 中添加一项，链接到该课的独立目录 |
| CS329Z 第一课正文与图片 | `notes/cs329z/lecture-1/index.html` 与该目录的 `slides/`；正文按主题和原始幻灯片顺序排列 |
| 笔记页面的样式与界面语言 | `notes/notes.css` / `notes/notes.js`；复用全站配色及语言、明暗偏好 |
| Work 的中英文标题、描述、动画主题 | `work.js` 中的 `text.zh` / `text.en` 与 `topics` |
| Work 项目结构、Skills 链接 | `index.html` 中的 `#work` |
| 通用排版与打字光标样式 | `styles.css` |
| 作品列表与详情排版 | `work.css` |
| 视频、海报及作品预览 | `assets/`；视频为 `<主题>-zh.mp4` / `<主题>-en.mp4`，海报为 `<主题>-poster-zh.png` / `<主题>-poster-en.png` |

`images/` 保留旧版网站素材，目前新版页面未引用。`.qa/` 用于本地检查截图和导入核对，不提交到仓库。算法动画相关素材约 99 MiB，第一课的 71 张 JPG 约 6.24 MB。

后续更新以本仓库为正式来源。Sites Demo 是设计预览副本，不会自动与本仓库同步；更新内容时直接修改本仓库，避免从旧 Demo 整包覆盖。

## 本地预览

在仓库目录运行：

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

打开 http://127.0.0.1:8000/，检查 About、Work、Learnings；详情页采用 `#work/algorithms` 等 hash 路由，无需服务器路由配置。

笔记使用独立静态页面：`/notes/cs329z/` 是课程目录，`/notes/cs329z/lecture-1/` 是第一课。正文直接包含在 HTML 中，关闭 JavaScript 仍可阅读；界面可中英切换，英文笔记正文保持原文。图片随网站存储，不依赖飞书登录；点击幻灯片可打开原尺寸图片。视频仍链接到 YouTube 对应时间。原文的近似时间说明和 4 处缺失讲解标注均保留。

## 继续添加课程笔记

1. 在课程下新建课次目录（如 `notes/cs329z/lecture-2/`），写入该课 `index.html`，图片放在自己的 `slides/`。沿用现有笔记页的页头、主题结构及共享样式，不复制第一课内容作为占位。
2. 在 `notes/cs329z/index.html` 的 `.course-list` 中追加真实课次、标题、链接及对应中英文说明；双语界面文案在 `notes/notes.js` 添加对应键。
3. 保留课程来源、图片顺序、视频时间与不确定性说明，按来源核对全文及图片数量；检查目录和返回链接、手机阅读、明暗模式及中英文界面。
4. 按下方流程提交发布。当前更新方式是修改仓库内容后发布，未提供网页在线编辑后台，也不自动同步飞书；未来的笔记可直接整理到网站。

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
