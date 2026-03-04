# 樂玩德州撲克手冊 — 開發進度

## 專案概覽

| 項目 | 內容 |
|------|------|
| **專案名稱** | 樂玩德州撲克內部手冊 |
| **GitHub Repo** | https://github.com/Leon-cypher/poker-manual |
| **正式網址** | https://poker-manual.pages.dev |
| **Admin 編輯介面** | https://poker-manual.pages.dev/admin |
| **TinaCloud 專案** | `90c014e0-1b7a-426f-a5a4-122106c653b8` |

## 技術架構

```
VitePress (靜態網站)  +  TinaCMS (可視化編輯器)  +  Cloudflare Pages (部署)
        ↕                        ↕
   docs/*.md              tina/config.ts
   (文件內容)            (Schema 定義)
        ↕                        ↕
  docs/.vitepress/dist/   docs/public/admin/
  (Build 輸出)            (Admin UI)
```

## 完成項目 ✅

### Phase 1 — 基礎建設
- [x] VitePress 網站建立，含完整 sidebar 導航
- [x] 德州撲克培訓手冊內容（荷官手冊、TDA 規則、培訓課表等）
- [x] Cloudflare Pages 部署，`npm run docs:build` 為 build 指令，輸出目錄 `docs/.vitepress/dist`
- [x] TinaCMS `tina/config.ts` Schema 定義（collection: manual）

### Phase 2 — TinaCloud 連線除錯（2026-03-04）
- [x] 建立 TinaCloud 新專案（舊專案索引失敗無法修復）
  - Client ID: `90c014e0-1b7a-426f-a5a4-122106c653b8`
  - Token: Read Only（用於 build 驗證）
- [x] 生成並提交 `tina/tina-lock.json`（使用 `tinacms dev` 本地生成）
- [x] 解決 TinaCloud branch unindexed 問題（push tina-lock.json 觸發索引）
- [x] 修復 build script：`tinacms build --skip-cloud-checks && vitepress build docs`
  - 原因：`tinacms build` 分支驗證在 CI 環境不穩定，改用 `--skip-cloud-checks`
- [x] 修復 admin 404：刪除 TinaCMS 自動生成的 `docs/public/admin/.gitignore`（該檔案會把 admin assets 排除在 git 外）
- [x] 設定 TinaCloud Site URL：`https://poker-manual.pages.dev`
- [x] TinaCloud Project Setup Checklist 全部完成（4/4）✅

## 目前狀態

| 功能 | 狀態 |
|------|------|
| VitePress 網站 | ✅ 正常 |
| Cloudflare Pages 自動部署 | ✅ 正常 |
| TinaCMS Admin 介面 `/admin` | ✅ 正常 |
| TinaCloud 登入 | ✅ 正常 |
| 透過 Admin 編輯並 commit | ✅ 正常 |

## 重要檔案說明

| 檔案 | 說明 |
|------|------|
| `tina/config.ts` | TinaCMS Schema 設定，含 clientId 與 token |
| `tina/tina-lock.json` | Schema 鎖定檔，TinaCloud 索引時必須存在 |
| `tina/__generated__/` | 自動生成的 GraphQL client，需提交至 git |
| `docs/public/admin/` | TinaCMS Admin UI 靜態檔案，需提交至 git |
| `package.json` | Build script: `tinacms build --skip-cloud-checks && vitepress build docs` |

## 已知限制

- `tina/config.ts` 的 `branch` 設定目前固定為 `"main"`，編輯器只能操作 main 分支
- TinaCMS Schema 目前只有單一 collection（`manual`），涵蓋所有 docs 文件

## 待辦 / 可改進項目

- [ ] 將 TinaCMS Schema 依分類拆成多個 collection（核心手冊、培訓課表、TDA 規則等），方便在 Admin 介面篩選
- [ ] 在 TinaCloud 設定授權使用者（限制誰可以登入 Admin 編輯）
- [ ] 評估是否啟用 TinaCMS Search Token 加入搜尋功能
