# pjunquan.github.io

Junquan Pan 的个人网站仓库（GitHub Pages）。

- 在线地址：<https://pjunquan.github.io/>
- 仓库地址：<https://github.com/pjunquan/pjunquan.github.io>

---

## 当前版本特点（2026）

这是一个轻量、可直接部署的单页个人站，重点放在「信息清晰 + 维护简单 + 可快速迭代」。

- **单页静态站**（`index.html`）
- **三语切换**：简体中文 / 繁體中文 / English
- **主题切换**：Light / Dark
- **个人介绍 + 联系方式** 一屏可达
- **项目展示区**（当前包含）：
  - `invoice_skill`
  - `payment_screenshots_skill`
- **形象照素材管理**：统一放在 `images/`（新增 `images/profile-photo.png`）

---

## 仓库结构

```text
pjunquan.github.io/
├── index.html
├── images/
│   ├── frontpage/
│   │   └── avatar-cutout.png
│   └── profile-photo.png
├── README.md
└── .gitignore
```

---

## 本地预览

```bash
cd ~/Desktop/pjunquan.github.io
python3 -m http.server 8000 --bind 127.0.0.1
open http://127.0.0.1:8000/index.html
```

---

## 发布流程（GitHub Pages）

本仓库使用 `main` 分支直接发布到 GitHub Pages。

```bash
git add .
git commit -m "update site"
git push origin main
```

推送后通常几分钟内生效。

---

## 内容更新建议

- 头像/视觉素材：放在 `images/`，文件名保持稳定（如 `profile-photo.png`）
- 文案更新：直接修改 `index.html` 中对应多语言 `data-*` 字段
- 新项目展示：在 Skills 区新增卡片，并附上 GitHub 链接

---

## License

个人网站内容默认保留所有权利（All rights reserved）。如需复用，请先联系作者。
