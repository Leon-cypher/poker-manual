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
- [x] 修復 admin 404：刪除 TinaCMS 自動生成的 `docs/public/admin/.gitignore`
- [x] 設定 TinaCloud Site URL：`https://poker-manual.pages.dev`
- [x] TinaCloud Project Setup Checklist 全部完成（4/4）✅

### Phase 3 — 內容整理與連結修復（2026-03-04）
- [x] 將 17 個獨立規則卡合併為單一頁面 `規則快速參考.md`，依類別分組
- [x] 更新 sidebar：⚖️ 判決與規則 改為單一入口
- [x] 刪除 3 個空白 TDA stub 檔案（tda-about、tda-about-long、tda-procedures）
- [x] 移除 5 個培訓課表中超寬的 PDF 原始總覽表（15 欄 Notion 匯出格式）
- [x] 荷官手冊排版修復：
  - 前言段落合併（原 Notion AI 每句各一行格式）
  - 移除編輯備注（手冊結構說明）
  - 修復目錄連結（Notion URL 編碼 → VitePress 路徑）
  - 修正重複的「第九章」標題（改為第十章）
  - 修正第一段：櫃檯斷裂標題格式
  - 移除 Notion 自動生成的頁面底部導覽區塊
- [x] 批量修復所有 URL 編碼連結（共 20+ 個，跨 17 個檔案）
  - Notion URL 編碼路徑（`DAY5%EF%BD%9C...`）→ 正確 VitePress 路徑
  - Notion 外部連結（`notion.so/...`）→ 網站內部頁面
  - MP4 連結（5 個課表/教材頁）→ 「📹 待上傳」提示文字
  - CSV 死連結（tda-rules-2024）→ 移除
- [x] 新增「如何成為一個好的裁判」頁面（`floor-judge-guide.md`）
  - 內容：快速到場、釐清現況、做出判決、監視器使用規範
  - 加入 sidebar 與 day4-floor.md 連結

### Phase 4 — 媒體與 RWD（2026-03-04）
- [x] 排除 MP4 影片檔案（最大 29MB，超過 Cloudflare 25MB 限制）
  - 加入 `.gitignore`：`*.mp4`、`*.mov`
  - 手冊中影片連結改為「待上傳」佔位文字
- [x] 培訓課表以圖片方式展示（完整 RWD）
  - 用 PyMuPDF 將 PDF 轉換為 PNG（149KB，2x 解析度）
  - 5 天課表頁均顯示圖片預覽，點擊可下載原始 PDF
  - 取代原本的 `<object>` PDF 嵌入（手機不支援）

## 目前狀態

| 功能 | 狀態 |
|------|------|
| VitePress 網站 | ✅ 正常 |
| Cloudflare Pages 自動部署 | ✅ 正常 |
| TinaCMS Admin 介面 `/admin` | ✅ 正常 |
| TinaCloud 登入 | ✅ 正常 |
| 透過 Admin 編輯並 commit | ✅ 正常 |
| 內部連結 | ✅ 全部正確，無斷連 |
| RWD 手機適配 | ✅ VitePress 內建 + 圖片自動縮放 |

## 頁面清單

| 分類 | 頁面 | 路徑 |
|------|------|------|
| 核心手冊 | 荷官手冊 | `/荷官手冊` |
| 核心手冊 | 服務 (智) | `/服務_ 智` |
| 核心手冊 | 外場工作 (亮) | `/外場工作_ 亮` |
| 核心手冊 | 櫃檯場控 (佑恩) | `/櫃檯場控／佑恩` |
| 培訓課表 | DAY 1–5 課表 | `/day1-schedule` ~ `/day5-schedule` |
| 專業教材 | 洗牌、射牌、規則、點碼、下注 | `/day1-shuffling` 等 |
| 專業教材 | 比賽類型、主邊池、犯規、錯誤發牌 | `/day3-tournaments` 等 |
| 判決與規則 | 規則快速參考 | `/規則快速參考` |
| 判決與規則 | 如何成為一個好的裁判 | `/floor-judge-guide` |

## 重要檔案說明

| 檔案 | 說明 |
|------|------|
| `tina/config.ts` | TinaCMS Schema 設定，含 clientId 與 token |
| `tina/tina-lock.json` | Schema 鎖定檔，TinaCloud 索引時必須存在 |
| `docs/public/admin/` | TinaCMS Admin UI 靜態檔案，需提交至 git |
| `docs/public/training-schedule.pdf` | 原始培訓課程表 PDF |
| `docs/public/schedule-page-1.png` | 課程表圖片（由 PDF 轉換，各課表頁顯示用） |
| `package.json` | Build script: `tinacms build --skip-cloud-checks && vitepress build docs` |

## 已知限制

- MP4 影片尚未上傳（超過 Cloudflare 25MB 限制），手冊中顯示「待上傳」佔位文字
  - **建議方案**：上傳至 YouTube（不公開），再用 iframe 嵌入
- `tina/config.ts` 的 `branch` 固定為 `"main"`，編輯器只能操作 main 分支
- Admin 編輯器權限透過 GitHub Collaborators 控制（寫入權限 = 可存檔）

## 待辦 / 可改進項目

- [ ] 上傳教學影片至 YouTube，嵌入至荷官手冊與對應教材頁（洗牌、射牌、點碼）
- [ ] 在 GitHub repo 設定 Collaborators，讓員工可透過 Admin 編輯內容
- [ ] 將 TinaCMS Schema 依分類拆成多個 collection（核心手冊、培訓課表、TDA 規則等）
- [ ] 評估是否啟用 TinaCMS Search Token 加入全站搜尋功能


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
