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
| `/quiz/` | 自我落髮檢測（10 題分流問卷） |
| `/coming-soon/telogen/`、`/coming-soon/areata/` | 建置中頁面（`noindex`，不列入 sitemap） |

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
  lib/quiz-view.js           # 問卷畫面（build 與瀏覽器共用同一份）
  components/                # Header、Footer、ImageSlot、治療比較、Lightbox…
  scripts/                   # 前端互動（手風琴、象限圖、Lightbox、問卷）
  pages/                     # 路由
tools/import-design-export.py  # 從 Claude Design 匯出檔重新匯入內容
```

網站沒有前端框架，互動全部是原生 JS，整站 JS 約 10 KB。所有內容都在 HTML 裡預先產生，關掉 JavaScript 仍可完整閱讀（自我檢測除外）。

## 更新內容

### 修改文案或治療資料

直接改 `src/data/TreatmentData.js`，或在 Claude Design 改完後重新匯出，再跑：

```bash
python3 tools/import-design-export.py ~/Downloads/皮膚科落髮衛教網站.zip
```

這支腳本會更新 `TreatmentData.js`、`src/assets/` 的圖片，以及 `slot-manifest.json`；Design 編輯器的執行期檔案（`support.js`、`image-slot.js`）不會被帶進來。

### 補上缺圖

目前有 7 個圖片欄位在 Design 裡還是空的，網站上顯示為灰色虛線佔位框：

`ludwig-overview`、`ludwig-stage-I`、`ludwig-stage-II`、`ludwig-stage-III`、`female-derm-1`、`female-derm-2`、`female-derm-3`

補圖有兩種做法：

1. 在 Claude Design 裡把圖拖進對應欄位，重新匯出後跑上面的匯入腳本；或
2. 把圖片放進 `src/assets/slots/`，再到 `src/data/slot-manifest.json` 加一筆，例如：

```json
"ludwig-overview": { "file": "slots/ludwig-overview.webp", "width": 1200, "height": 900 }
```

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

3. 建好之後，到 **Settings → Environment variables** 加上正式網址（讓 canonical 連結與 sitemap 指向正確網域）：

   ```
   SITE_URL = https://你的網域
   ```

   沒設定時會退回 Cloudflare 自動給的 `CF_PAGES_URL`，預覽部署因此也會有正確的 canonical。

4. 要用自訂網域的話：**Custom domains → Set up a domain**，然後把 `SITE_URL` 改成該網域。

Node 版本由 `.node-version` 指定（22）。`public/_headers` 設定了快取與基本安全標頭，Cloudflare Pages 會自動套用。

## 醫療免責

網站內容僅供一般衛教參考，非個人化醫療建議，無法取代醫師之當面診斷與處方。
