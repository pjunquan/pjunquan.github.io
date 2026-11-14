# pjunquan.github.io

俊权 / Junquan Pan 的个人网站，使用纯 HTML、CSS 和 JavaScript，通过 GitHub Pages 发布，无需安装依赖或构建。

- 网站：https://pjunquan.github.io/
- 仓库：https://github.com/pjunquan/pjunquan.github.io
- 发布来源：`main` 分支的仓库根目录；`.nojekyll` 让 Pages 直接发布静态文件。

## 当前内容

- **About / 关于**：中英文自我介绍、缓慢打字与持续闪烁的光标、GitHub / Email / LinkedIn。These Days 暂为 Coming Soon。
- **Work / 作品**：九个主题的中英文算法动画、待补充的 K12 课程内容、实际工作中用过的 AI Skills。
- **Learnings / 学习**：学习资源与个人笔记两列；当前包含 Stanford CS329Z 和对应飞书笔记。
- 中英文切换、日间 / 夜间模式、手机布局；语言与主题偏好保存在浏览器本地。减少动态效果模式下直接显示全文，光标静止。

## 内容修改位置

| 要修改的内容 | 文件与位置 |
| --- | --- |
| 自我介绍、About 和学习页的中英文文案 | `app.js` 中的 `copy.zh` / `copy.en`；介绍使用 `greeting`、`lead`、`bio` |
| 中文静态回退内容、联系方式、学习资源及笔记链接 | `index.html`；修改文案时同步对应的 `data-copy` 内容 |
| 新增学习资源 | 在 `index.html` 的 `.learnings-table` 中增加一行；资源名称链接到原材料，右列放笔记链接；需要双语说明时在 `app.js` 的两种语言中增加对应键 |
| Work 的中英文标题、描述、动画主题 | `work.js` 中的 `text.zh` / `text.en` 与 `topics` |
| Work 项目结构、Skills 链接 | `index.html` 中的 `#work` |
| 通用排版与打字光标样式 | `styles.css` |
| 作品列表与详情排版 | `work.css` |
| 视频、海报及作品预览 | `assets/`；视频为 `<主题>-zh.mp4` / `<主题>-en.mp4`，海报为 `<主题>-poster-zh.png` / `<主题>-poster-en.png` |

`images/` 保留旧版网站素材，目前新版页面未引用。`.qa/` 用于本地检查截图，不提交到仓库。当前静态文件约 99 MB，主要是算法动画视频。

后续更新以本仓库为正式来源。Sites Demo 是设计预览副本，不会自动与本仓库同步；更新内容时直接修改本仓库，避免从旧 Demo 整包覆盖。

## 本地预览

在仓库目录运行：

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

打开 http://127.0.0.1:8000/，检查 About、Work、Learnings；详情页采用 `#work/algorithms` 等 hash 路由，无需服务器路由配置。

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
