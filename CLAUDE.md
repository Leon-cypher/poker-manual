# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 專案概覽

樂玩德州撲克內部培訓手冊。靜態網站 + 視覺化 CMS，讓非技術員工可以直接編輯內容。

- **正式網址**: https://poker-manual.pages.dev
- **Admin 編輯介面**: https://poker-manual.pages.dev/admin
- **GitHub Repo**: Leon-cypher/poker-manual

## 技術架構

```
VitePress (靜態網站生成)
  └── docs/*.md              ← 所有內容頁面
  └── docs/.vitepress/       ← VitePress 設定
  └── docs/public/           ← 靜態資源（圖片、PDF、admin UI）
      └── admin/
          ├── index.html     ← Sveltia CMS 入口
          └── config.yml     ← CMS collection 設定

Sveltia CMS (協作編輯器)
  └── GitHub backend，透過 GitHub OAuth 登入

Cloudflare Pages (部署)
  └── functions/
      ├── auth.js            ← GitHub OAuth 入口（/auth）
      └── callback.js        ← GitHub OAuth 回調（/callback）
```

## 常用指令

```bash
npm run docs:dev      # 本地開發
npm run docs:build    # 建置（輸出至 docs/.vitepress/dist）
npm run docs:preview  # 預覽 build 結果
```

## Cloudflare Pages 部署設定

- **Build command**: `npm run docs:build`
- **Build output**: `docs/.vitepress/dist`
- **Root directory**: （空，使用 repo 根目錄）

必要的 Environment Variables（在 Cloudflare Pages Settings 設定）：
- `GITHUB_CLIENT_ID` — GitHub OAuth App Client ID
- `GITHUB_CLIENT_SECRET` — GitHub OAuth App Client Secret

## CMS 協作登入機制

使用 Sveltia CMS + GitHub OAuth，流程：
1. 使用者進 `/admin` → 點 Login with GitHub
2. popup 開啟 `/auth`（Pages Function）→ 導向 GitHub 授權
3. GitHub 回調 `/callback`（Pages Function）→ 交換 token → postMessage 回主頁面
4. Sveltia CMS 存入 token，進入編輯介面

**邀請協作者**：GitHub repo → Settings → Collaborators → 加入對方帳號，對方即可登入 `/admin`。

## 重要架構決策

**為何換掉 TinaCMS？**
TinaCMS 多人協作需付費（免費方案僅 1 人）。改用 Sveltia CMS（完全免費、MIT 授權）。

**為何需要 Cloudflare Pages Functions？**
Sveltia CMS 使用 GitHub backend，OAuth 的 code → token 交換必須在伺服器端進行（避免暴露 client secret）。Pages Functions 充當 OAuth proxy。

**為何 Sveltia CMS 而不是 Decap CMS？**
Decap CMS 的 GitHub OAuth popup 流程會被 GitHub 的 `Cross-Origin-Opener-Policy` 標頭破壞（popup 引用被切斷，message listener 被移除，token 無法傳回主頁面）。Sveltia CMS 處理了此問題。

**tina/ 資料夾**
TinaCMS 的殘留設定，目前已不使用但保留在 repo 中。`tina/config.ts` 不影響現有功能。

## CMS config.yml 注意事項

`docs/public/admin/config.yml` 中的 collection 若同一個檔案出現在多個 collection（例如 `folder: docs` 的通用 collection + 指定 `file:` 的 collection），儲存時會觸發 GitHub GraphQL API 錯誤（duplicate path in commit）。每個檔案只能屬於一個 collection。

## 內容結構

所有內容在 `docs/*.md`，中文檔名的頁面（如 `荷官手冊.md`）在 VitePress 路徑中直接使用中文（如 `/荷官手冊`）。Sidebar 設定在 `docs/.vitepress/config.*`。
