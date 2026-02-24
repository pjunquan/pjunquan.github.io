# RELEASE_CHECKLIST.md

个人网站发布检查清单（`pjunquan.github.io`）

> 目标：确保每次发布都符合**最新版本**，避免 README 与实际页面不一致。

---

## A. 改动前（定义范围）

- [ ] 明确本次改动范围（文案 / 图片 / 链接 / 项目卡片 / 结构）
- [ ] 确认是否涉及新增或下线功能
- [ ] 若涉及素材，文件命名已规范（英文、小写、连字符）

---

## B. 页面改动核验（基于真实代码）

- [ ] `index.html` 已完成本次所需修改
- [ ] 三语内容一致（简中 / 繁中 / EN）
- [ ] 联系方式与外链可访问
- [ ] Skills 区项目名称、描述、链接正确
- [ ] 图片路径有效（无 404，无失效引用）
- [ ] 页面无明显排版错位（桌面端至少检查一次）

---

## C. 本地预览（发布前必做）

```bash
cd ~/Desktop/pjunquan.github.io
python3 -m http.server 8000 --bind 127.0.0.1
open http://127.0.0.1:8000/index.html
```

- [ ] 首页可正常打开
- [ ] 关键区域检查通过（首屏 / 介绍 / Skills / 联系方式）
- [ ] 多语言切换可用

---

## D. README 同步规则（必须）

- [ ] README 仅描述“当前可验证功能”
- [ ] 已删除下线功能描述
- [ ] 已补充新上线功能描述
- [ ] 目录结构与仓库当前结构一致

---

## E. Git 提交与发布

```bash
git add .
git commit -m "update site: <summary>"
git push origin main
```

- [ ] commit 信息准确描述改动
- [ ] push 到 `main` 成功
- [ ] GitHub Pages 更新后在线复查一次

---

## F. 发布后回归（线上）

- [ ] 打开 <https://pjunquan.github.io/> 确认已生效
- [ ] 强刷后仍正常（避免缓存误判）
- [ ] README 与线上页面描述一致

---

## 一句话原则

**先改真实页面，再写 README；只写已上线、可验证、与当前代码一致的内容。**
