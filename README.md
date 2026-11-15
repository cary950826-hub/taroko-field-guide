# 太魯閣探索計畫

「太魯閣探索計畫」是課堂作業用的靜態介紹網站。它以戶外紀實與探索為視覺方向，介紹太魯閣的峽谷地景、代表景點與行前安全觀念。

## 作業重點

- `AGENTS.md` 定義專案目標、視覺系統、內容格式、檔案規則與 AI 修改守則。
- 網站以純 HTML、CSS、JavaScript 製作，無需安裝套件。
- 動態性高的旅遊資訊不寫成固定結論，改連至太魯閣國家公園官方網站確認。

## 本機預覽

直接以瀏覽器開啟 `index.html` 即可；或在專案資料夾執行：

```powershell
python -m http.server 8000
```

接著開啟 `http://localhost:8000`。

## 部署到 GitHub Pages

1. 在 GitHub 建立一個公開 repository，例如 `taroko-field-guide`。
2. 將這個資料夾的全部檔案推送到 `main` 分支。
3. 到 repository 的 **Settings → Pages**，在 **Build and deployment** 選擇 **Deploy from a branch**。
4. 選擇 `main` 分支與 `/(root)`，然後按 **Save**。
5. GitHub 會提供網站網址，通常是 `https://你的帳號.github.io/taroko-field-guide/`。

## 參考資料

- [太魯閣國家公園｜立霧溪之美](https://www.taroko.gov.tw/ch/sglarticle/beauty-of-liwu-river)
- [太魯閣國家公園｜九曲洞步道](https://www.taroko.gov.tw/ch/trailsAttractions/trail-list/44)
- [太魯閣國家公園｜布洛灣吊橋](https://www.taroko.gov.tw/ch/trailsAttractions/attractions/23)

本網站為非官方教學作品；旅遊前請以太魯閣國家公園管理處的最新公告為準。
