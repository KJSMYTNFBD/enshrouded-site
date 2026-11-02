# NOTES

- Repo：https://github.com/KJSMYTNFBD/enshrouded-site（public，2026-11-02 由 private 改為 public；不開 Pages）
- 用 commit 取代資料夾快照；每個修改開分支（`fix/…`、`feat/…`），完成後 merge 回 main 並打 tag。
- 本機開發資料夾：`C:\Users\hyz92\projects\enshrouded-site`。`ref/`（下載原檔，約 280 MB）、`gen/`（AI 原圖）、`shots/` 不進版控。

## 建置與驗證

```bash
python build.py                                   # src + data -> site/main.js
node tools/shoot.mjs file:///<abs>/site/index.html shots/d 1440 900
node tools/shoot.mjs file:///<abs>/site/index.html shots/m 390 844
python tools/sheets.py shots/d                    # 4 張一組的總覽圖
```

- Node 需 22 以上；這台機器 PATH 上的 node 是 v22（nvm4w），也可用 Hermes 的 node 26。
- `tools/shoot.mjs` 借用 design-taste-frontend skill 的 `lib/cdp.mjs`（絕對路徑），需要已安裝的 Chrome／Edge。
- 版面檢查：`node <design-taste-frontend>/scripts/inspect.mjs site/index.html`。它只往下捲 11 個畫面，長頁面後段的淡入沒觸發時會誤報 blank-gap。

## 決策
- 頁面內容以遊戲檔案資料為準（enshrouded.tools），不採用推測或玩家梗。
- BOSS 名稱用英文原名。
- AI 圖只用在封面與寶箱場景，其餘用官方素材。
