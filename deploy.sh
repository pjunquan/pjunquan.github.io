#!/bin/bash

# ==============================
# GitHub Pages 一键部署脚本
# 用法: ./deploy.sh "提交说明"
# ==============================

# 本地源文件目录（更新文件位置）
SRC="/Users/philippan/AI coding projects/docs/"

# 仓库目录（当前目录）
DEST="$(pwd)"

# 1) 拉取远程最新
git pull origin main

# 2) 同步文件 (删除旧文件, 保持一致)
rsync -av --delete --exclude ".git" "$SRC" "$DEST"

# 3) 添加修改
git add .

# 4) 提交，提交说明如果没写就用默认
if [ -z "$1" ]; then
  COMMIT_MSG="deploy: update $(date '+%Y-%m-%d %H:%M')"
else
  COMMIT_MSG="$1"
fi

git commit -m "$COMMIT_MSG"

# 5) 推送
git push origin main

# 6) 提示
echo "🚀 部署完成！稍等1–2分钟，然后刷新 👉 https://pjunquan.github.io/"

