# Junquan Pan Personal Website

这是当前启用的个人网站精简版仓库，仅保留线上展示所需文件。

## Online
- https://pjunquan.github.io/

## Repo
- https://github.com/pjunquan/pjunquan.github.io

## Current Structure

```text
pjunquan.github.io/
├── index.html
├── images/
│   └── frontpage/
│       └── avatar-cutout.png
├── README.md
└── .gitignore
```

## Features in Current Version
- 单页展示（`index.html`）
- 中 / 繁 / EN 三语切换
- Light / Dark 主题切换（太阳/月亮图标）
- Skills 展示区（invoice_skill / payment_screenshots_skill）
- 右侧透明底形象照展示

## Local Preview
```bash
cd /Users/philippan/Desktop/pjunquan.github.io
python3 -m http.server 8000 --bind 127.0.0.1
open http://127.0.0.1:8000/index.html
```

## Deploy
```bash
git add .
git commit -m "chore: clean repo to current single-page site"
git push
```
