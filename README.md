# 毛囊研究所 Follicle School

皮膚科落髮衛教網站。以 [Astro](https://astro.build) 建置的純靜態網站，內容在 build 時就產生好 HTML，部署於 Cloudflare Pages。

原始設計來自 Claude Design 專案 `落髮衛教網站.dc.html`；本專案是它的正式站實作（多頁路由 + SEO + 圖片最佳化），設計語彙、文案與資料完整沿用。

## 頁面

| 路徑 | 內容 |
| --- | --- |
| `/` | 首頁，四張落髮型態卡片 |
| `/aga/` | 雄性禿總覽 |
| `/aga/male/` | 男性版：致病機轉、Hamilton–Norwood 分期、皮膚鏡、治療比較、FAQ |
| `/aga/female/` | 女性版：致病機轉、Ludwig 分期、皮膚鏡、治療比較、FAQ |
| `/telogen/` | 休止期落髮：致病機轉、急性／慢性分型、皮膚鏡、治療比較、FAQ |
| `/areata/` | 圓禿：自體免疫機轉、五種臨床型態、皮膚鏡、治療比較、FAQ |
| `/quiz/` | 自我落髮檢測（計分式問卷，判定六種落髮分類並建議進一步檢查） |

## 開發

```bash
npm install
npm run dev
```

| 指令 | 作用 |
| --- | --- |
| `npm run dev` | 本機開發伺服器（http://localhost:4321） |
| `npm run build` | 產生靜態檔到 `dist/` |
| `npm run preview` | 預覽 `dist/` 的實際輸出 |

## 專案結構

```
src/
  data/TreatmentData.js      # 治療資料、分期、FAQ、問卷（直接沿用 Design 匯出，勿手改）
  data/slot-manifest.json    # 圖片欄位 id → 檔案／pan-zoom 對照表（由匯入腳本產生）
  assets/                    # 原始圖片；build 時由 Astro 壓縮並轉 webp
  lib/slots.js               # 依 id 取出圖片，還原 Design 的裁切與縮放
  lib/treatments.js          # 建立治療分類、費用×效果象限圖座標
  lib/quiz.js                # 問卷計分、條件顯示題目、選項畫面（build 與瀏覽器共用）
  components/                # Header、Footer、ImageSlot、治療比較、Lightbox…
  scripts/                   # 前端互動（手風琴、象限圖、Lightbox、問卷）
  pages/                     # 路由
tools/import-design-export.py  # 從 Claude Design 匯出檔重新匯入內容
```

網站沒有前端框架，互動全部是原生 JS，整站 JS 約 10 KB。所有內容都在 HTML 裡預先產生，關掉 JavaScript 仍可完整閱讀（自我檢測除外）。

## 更新內容

內容分成兩類，改的地方不一樣：

| 要改什麼 | 改哪裡 | 會不會從 Design 同步 |
| --- | --- | --- |
| 治療項目、證據等級、副作用、注意事項、藥品廠牌 | Claude Design 或 `src/data/TreatmentData.js` | ✅ 會 |
| Norwood／Ludwig 各分期說明文字 | 同上 | ✅ 會 |
| FAQ 問答 | 同上 | ✅ 會 |
| 自我檢測的題目、選項、計分權重、結果說明 | 同上 | ✅ 會 |
| 圖片（含分期圖、皮膚鏡、藥品外觀） | Claude Design 拖曳，或直接放進 `src/assets/` | ✅ 會 |
| 頁面標題、致病機轉段落、皮膚鏡條列 | `src/pages/` 底下對應的 `.astro` | ❌ 不會 |
| 首頁標語與四張卡片說明 | `src/pages/index.astro` | ❌ 不會 |
| 網站名稱、免責聲明、SEO 描述 | `src/consts.js`、各頁 `description` | ❌ 不會 |
| 版面、配色、新頁面 | `src/styles/global.css`、`src/components/`、`src/pages/` | ❌ 不會 |

**會同步的部分**：在 Claude Design 改完後重新匯出 zip，然後跑

```bash
python3 tools/import-design-export.py ~/Downloads/皮膚科落髮衛教網站.zip
```

腳本只會覆寫 `TreatmentData.js`、`src/assets/` 的圖片與 `slot-manifest.json`，不會動到 `src/pages/` 的版面與文案。Design 編輯器的執行期檔案（`support.js`、`image-slot.js`）也不會被帶進來。

**不會同步的部分**：這些文案在移植時寫進了 `.astro` 頁面檔，所以在 Design 裡改不會傳過來，要直接編輯對應檔案。

### 改完之後上線

```bash
npm run dev                          # 本機預覽（可選），開 http://localhost:4321
git add -A
git commit -m "更新雄性禿治療資料"    # 訊息寫改了什麼
git push
```

push 完 Cloudflare 會自動重新 build，約 2–3 分鐘後線上就更新了。

### 補上缺圖

以下圖片欄位在 Design 裡還是空的，網站上顯示為灰色虛線佔位框：

- 雄性禿女性版（7 個）：`ludwig-overview`、`ludwig-stage-I/II/III`、`female-derm-1/2/3`
- 休止期落髮（10 個）：`telogen-mechanism`、`telogen-type-acute/chronic`、`telogen-derm-1/2/3`，以及 4 張商品照
- 圓禿（12 個）：`areata-mechanism`、`areata-pattern-*`（5 種型態）、`areata-derm-1/2/3`，以及 3 張商品照

補圖有兩種做法：

1. 在 Claude Design 裡把圖拖進對應欄位，重新匯出後跑上面的匯入腳本；或
2. 把圖片放進 `src/assets/local/`，再到 `src/data/slot-overrides.json` 加一筆，例如：

```json
"ludwig-overview": { "file": "local/ludwig-overview.webp", "optimize": true }
```

### 自備圖片 vs Design 圖片

圖片來源有兩個，各自有專屬檔案：

| | 來源 | 對照表 | 圖片位置 |
| --- | --- | --- | --- |
| Design 匯出 | Claude Design 拖曳的圖 | `slot-manifest.json`（匯入腳本產生，**會被覆寫**） | `src/assets/slots/` |
| 自己提供 | 直接給的檔案 | `slot-overrides.json`（手動維護，**不會被動到**） | `src/assets/local/` |

**overrides 優先**。所以要覆蓋 Design 的某張圖（例如換一張更好的機轉圖），就在 overrides 加一筆；哪天 Design 那邊的圖才是你要的，把該筆刪掉即可。

`optimize: true` 表示交給 Astro 依螢幕產生多種尺寸——原始檔請放夠大（顯示寬度的 2 倍以上）。

## 部署到 Cloudflare Pages

Cloudflare Pages 直接連 GitHub repo，push 到 `main` 就會自動 build 並上線。

1. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. 選擇這個 repo，設定：

   | 欄位 | 值 |
   | --- | --- |
   | Framework preset | Astro |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Production branch | `main` |

3. 掛上自訂網域後（**Custom domains → Set up a domain**），到 **Settings → Environment variables** 加上：

   ```
   SITE_URL = https://你的網域
   ```

   讓 canonical 連結與 sitemap 指向正確網域。

### 網址是怎麼決定的

`astro.config.mjs` 依序取：`SITE_URL` → 預覽分支用 `CF_PAGES_URL` → 否則固定用 `https://follicle-school.pages.dev`。

注意 Cloudflare 的 `CF_PAGES_URL` 連 production build 也是給單次部署網址（`https://<commit-hash>.follicle-school.pages.dev`），所以它只能用在預覽分支——正式站若用它，canonical 每次部署都會換一個網址。

Node 版本由 `.node-version` 指定（22）。`public/_headers` 設定了快取與基本安全標頭，Cloudflare Pages 會自動套用。

## 醫療免責

網站內容僅供一般衛教參考，非個人化醫療建議，無法取代醫師之當面診斷與處方。
