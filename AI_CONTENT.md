# AI 生成內容清單

使用模型：claude-opus-5-5（Anthropic），透過 Hermes Agent

| 路徑 | 類型 | 說明 |
|---|---|---|
| site/index.html | AI 生成 | 頁面結構與全部文案 |
| site/style.css | AI 生成 | 版面、配色、動態 |
| site/main.js | AI 生成 | 由 build.py 產生，內含 data/ 的資料 |
| src/main.src.js | AI 生成 | 滾動場景、技能樹、寶箱動畫、護甲清單等互動 |
| build.py | AI 生成 | 把 data/ 塞進 main.js |
| data/tree-data.json | AI 整理 | 技能樹節點與連線，從 enshrouded.tools 的遊戲資料轉換；名稱與敘述是遊戲原文 |
| data/sets-data.json | AI 整理 | 67 套護甲，從 enshrouded.tools 整理 |
| tools/shoot.mjs、tools/sheets.py | AI 生成 | 截圖驗證工具 |
| site/media/hero.jpg | AI 生成 | 封面主視覺；GPT Image 2（Higgsfield），參考 Steam 截圖與遊戲模型生成 |
| site/media/chest-closed.jpg、chest-open.jpg | AI 生成 | 寶箱場景；GPT Image 2，參考遊戲內金寶箱圖示生成 |
| site/media/bg/*.jpg、world-loop.* | AI 處理 | 從官方預告片擷取的畫面與片段，AI 只做裁切與壓縮 |
| README.md、AI_CONTENT.md、NOTES.md | AI 輔助 | 使用者提供需求與規範，AI 撰寫 |

其餘 `site/media/` 檔案是第三方原始素材（見 README 的「來源與參考」），只做格式轉換與裁邊。
