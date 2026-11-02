# Enshrouded 霧鎖王國 介紹頁

> 這是測試 goal 功能的測試：整個專案由 Hermes Agent 的 goal（持續目標）功能，依使用者一句需求逐步規劃、製作、驗證與修改而成。

非官方的《霧鎖王國 Enshrouded》1.0 介紹網頁（英文版），單一靜態頁面，靠滾動切換內容，沒有導覽列：

1. 封面主視覺
2. 霧幕過渡與 22 張 BOSS 卡巡禮（23 位 BOSS，左右交替出現，背景換成各自的區域）
3. 1.0 遊戲原版技能樹：滾動時依序展示 12 個流派逐點升級的路線，看完後可自己點節點配點
4. 開寶箱滾動動畫：打開後飛出六把各職業武器（雙手劍、單手棍、弓、匕首、法杖、魔杖）
5. 戰士、遊俠、法師三欄護甲，隨滾動從 Lv 5 換到 Lv 45
6. 七大區域（直向排列）與玩法：滑翔、勾爪、建造、挖掘、霧幕
7. 故事時間軸與彩蛋

所有段落的背景都是遊戲畫面，不使用純色底。

## 怎麼看

不需要安裝任何東西，clone 下來直接用瀏覽器開 `site/index.html` 即可。

```bash
git clone https://github.com/KJSMYTNFBD/enshrouded-site.git
cd enshrouded-site
start site/index.html          # Windows；macOS 用 open，Linux 用 xdg-open
```

如果瀏覽器擋住本機影片自動播放，可以改用本機伺服器：

```bash
python -m http.server 8000 --directory site
# 開 http://localhost:8000
```

網頁字型從 Google Fonts 載入，離線時會退回系統字型。

## 目錄

| 路徑 | 內容 |
|---|---|
| `site/` | 成品網頁（`index.html`、`style.css`、`main.js`、`media/`），直接開就能看 |
| `src/main.src.js` | `main.js` 的原始碼，資料以 `__TREE__`／`__SETS__` 佔位 |
| `data/` | 技能樹與護甲資料（JSON），`build.py` 會把它們塞進 `main.js` |
| `build.py` | `python build.py` 重新產生 `site/main.js` |
| `tools/` | 驗證用工具：`shoot.mjs` 用無頭 Chrome 逐段截圖，`sheets.py` 拼成總覽圖 |

修改流程：改 `src/main.src.js` 或 `data/*.json` → `python build.py` → 開 `site/index.html` 檢查。`style.css` 與 `index.html` 直接改。

## AI 使用聲明

本專案使用 AI 協助製作。

- 使用模型：claude-opus-5-5（Anthropic），透過 Hermes Agent
- AI 生成比例：約 95%。程式碼與文案約 100% 由 AI 撰寫；需求、方向與驗收由使用者決定。媒體檔中封面主視覺與寶箱場景為 AI 生成，其餘圖片與影片來自遊戲官方素材與第三方網站（見下方來源）。
- 詳細的 AI 生成內容清單：見 [AI_CONTENT.md](AI_CONTENT.md)

## 來源與參考

這是非官方粉絲作品。《Enshrouded 霧鎖王國》及其截圖、預告片、角色模型、圖示的權利皆屬 Keen Games GmbH。本 repo 為公開的非商業粉絲作品，引用的遊戲素材僅供介紹用途；如權利人要求移除，會立即下架相關檔案。

### 初始參考
- 使用者的需求描述（封面配置、六大區塊）。沒有參考或複製其他網站的程式碼。
- 版面與動態設計依 Hermes 的 `claude-design`、`design-taste-frontend` 兩個設計 skill 的原則製作，只取概念，沒有複製程式碼。

### 第三方程式碼
無第三方程式碼。網頁是純 HTML／CSS／JavaScript，沒有使用任何函式庫。

### 第三方素材

| 素材 | 來源 | 位置 |
|---|---|---|
| 遊戲截圖、Logo | Steam 商店頁 app 1203620（Keen Games） | `site/media/ss*.jpg`、`site/media/logo.png` |
| 區域背景、世界影片 | Steam 商店頁的 1.0 上市預告片、Wake of the Water 預告片畫面與截圖（Keen Games） | `site/media/bg/`、`site/media/world-loop.*` |
| BOSS 模型圖 | [enshrouded.tools](https://www.enshrouded.tools)、[flameborn.wiki](https://flameborn.wiki) 的遊戲模型渲染 | `site/media/boss/`、`site/media/render-*.webp` |
| 技能圖示、護甲圖示 | [enshrouded.tools](https://www.enshrouded.tools)（取自遊戲檔案） | `site/media/skills/`、`site/media/armor/` |
| 武器圖示 | [enshrouded.tools](https://www.enshrouded.tools/weapons)（取自遊戲檔案） | `site/media/weapons/` |
| 金寶箱外觀參考 | [wiki.eso-ui.com](https://wiki.eso-ui.com/index.php/Enshrouded:Cinder%27s_Cradle) 的 Gold Chest 圖示（只作為 AI 生成寶箱場景的參考，不在 repo 內） | — |
| 字型 | Google Fonts：Spectral、Source Sans 3（SIL Open Font License） | 執行時載入 |

### 遊戲資料
- BOSS 清單、技能樹節點與連線、寶箱數、武器、護甲套裝、區域數據：[enshrouded.tools](https://www.enshrouded.tools)（由遊戲檔案整理，build 25988036）
- 1.0 更新內容：Keen Games 1.0 changelog、Shockbyte、TheClick 整理文章
- 故事與彩蛋：遊戲內筆記（經 flameborn.wiki、enshrouded.wiki.gg 整理）

### 外部服務 / 執行時依賴
- Google Fonts（字型）
- AI 生成圖片：Higgsfield 的 GPT Image 2（僅製作期間使用，網頁執行時不會呼叫）
