<!doctype html>
<html lang="zh-Hant">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="以地質、溪流與文化認識花蓮太魯閣國家公園。">
  <title>太魯閣探索計畫｜Taroko Field Guide</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700;900&family=Oswald:wght@500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
  <link rel="stylesheet" href="interactions.css">
</head>
<body>
  <a class="skip-link" href="#main">跳至主要內容</a>
  <header class="site-header">
    <a class="brand" href="#top"><span aria-hidden="true"></span>太魯閣探索計畫</a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav">選單</button>
    <nav id="site-nav" aria-label="主要導覽">
      <a href="#geology">地質時間</a>
      <a href="#places">峽谷現場</a>
      <a href="#field-notes">探索圖鑑</a>
      <a href="#prepare">行前準備</a>
      <a class="nav-cta" href="https://www.taroko.gov.tw/" target="_blank" rel="noreferrer">官方最新公告 ↗</a>
    </nav>
  </header>

  <main id="main">
    <section id="top" class="hero" aria-labelledby="hero-title">
      <div class="hero-image" role="img" aria-label="雲霧環繞的峽谷山景"></div>
      <div class="hero-content wrap">
        <p class="eyebrow">HUALIEN · TAIWAN · FIELD GUIDE</p>
        <h1 id="hero-title">探索大自然與<br>時間的雕刻：<em>太魯閣峽谷</em></h1>
        <p class="hero-copy">從大理石斷崖到立霧溪，沿著山河留下的軌跡，走進一段仍在發生的地質故事。</p>
        <a class="button" href="#geology">開始探索 <span aria-hidden="true">↓</span></a>
      </div>
      <div class="hero-note"><span></span>SCROLL TO EXPLORE</div>
    </section>

    <section id="geology" class="section geology wrap" aria-labelledby="geology-title">
      <aside class="timeline" aria-label="太魯閣地景形成脈絡">
        <p>GEOLOGICAL<br>TIME</p><i></i><b>過去</b><i></i><b>現在</b>
      </aside>
      <div class="section-intro">
        <p class="eyebrow yellow">GEOLOGY / 01</p>
        <h2 id="geology-title">一條河，如何刻出一座峽谷？</h2>
        <p>太魯閣峽谷不是靜止的風景。地殼持續隆起，立霧溪則不斷向下切割大理岩層；漫長的風化與侵蝕，共同塑造出今天險峻而狹長的峽谷。</p>
      </div>
      <div class="fact-grid">
        <article><strong>58.4 <small>KM</small></strong><p>立霧溪曲折東流，最終注入太平洋。</p></article>
        <article><strong>大理岩</strong><p>峽谷周邊可見臺灣地質史上古老的大理岩層。</p></article>
        <article><strong>侵蝕 × 隆起</strong><p>河水與地殼運動交織，讓地景持續改變。</p></article>
      </div>
      <div class="geo-explorer" aria-labelledby="explorer-title">
        <div class="explorer-heading"><p class="eyebrow yellow">INTERACTIVE FIELD NOTE</p><h3 id="explorer-title">推進時間，看見峽谷如何成形。</h3></div>
        <div class="geo-steps" role="tablist" aria-label="峽谷形成階段">
          <button class="geo-step active" role="tab" aria-selected="true" aria-controls="geo-detail" data-title="海底沉積" data-copy="很久以前，沉積物在海底堆積，經過變質作用，逐漸形成日後可見的大理岩層。" data-number="01">01 <span>沉積</span></button>
          <button class="geo-step" role="tab" aria-selected="false" aria-controls="geo-detail" data-title="板塊推擠與隆起" data-copy="菲律賓海板塊與歐亞板塊的碰撞，推擠出持續抬升的山脈，也讓岩層離開海面。" data-number="02">02 <span>隆起</span></button>
          <button class="geo-step" role="tab" aria-selected="false" aria-controls="geo-detail" data-title="溪水持續下切" data-copy="立霧溪帶著能量穿越山谷；河流的侵蝕、風化與崩塌，逐步刻出深窄的峽谷輪廓。" data-number="03">03 <span>侵蝕</span></button>
          <button class="geo-step" role="tab" aria-selected="false" aria-controls="geo-detail" data-title="仍在變化的地景" data-copy="太魯閣不是已完成的作品。地殼運動與水流仍持續作用，因此觀賞峽谷也必須隨時留意自然風險。" data-number="04">04 <span>現在</span></button>
        </div>
        <article id="geo-detail" class="geo-detail" aria-live="polite"><span>01</span><div><h4>海底沉積</h4><p>很久以前，沉積物在海底堆積，經過變質作用，逐漸形成日後可見的大理岩層。</p></div></article>
      </div>
    </section>

    <section id="places" class="section places" aria-labelledby="places-title">
      <div class="wrap"><p class="eyebrow yellow">ON THE TRAIL / 02</p><h2 id="places-title">峽谷現場：看見地景的細節</h2></div>
      <div class="place-grid wrap">
        <article class="place-card card-one"><div><p>01 / RIVER & ROCK</p><h3>九曲洞</h3><span>科蘭溪切過大理石壁，呈現一座小型峽谷的形成過程。</span><button class="spot-button" type="button" data-spot="九曲洞" data-detail="觀察點：溪水沖蝕大理石壁，呈現彎曲、狹窄的峽谷地形。">展開田野筆記 +</button></div></article>
        <article class="place-card card-two"><div><p>02 / CLIFF</p><h3>燕子口</h3><span>峽谷、壺穴與湧泉，展現立霧溪強大的侵蝕力量。</span><button class="spot-button" type="button" data-spot="燕子口" data-detail="觀察點：在峽谷與河道之間，尋找壺穴、湧泉與陡峭的大理岩壁。">展開田野筆記 +</button></div></article>
        <article class="place-card card-three"><div><p>03 / TERRACE</p><h3>布洛灣</h3><span>從河階臺地邊緣俯瞰溪谷，觀察峽谷與地形變遷。</span><button class="spot-button" type="button" data-spot="布洛灣" data-detail="觀察點：河流下切後留下較平坦的河階臺地，能對照峽谷兩側的高低與形狀。">展開田野筆記 +</button></div></article>
      </div>
      <p class="caption wrap">景點與步道開放狀態可能因天候、工程或落石風險調整；出發前請查閱官方公告。</p>
    </section>

    <section id="field-notes" class="section field-notes" aria-labelledby="field-title">
      <div class="wrap field-layout"><div><p class="eyebrow yellow">FIELD ATLAS / 03</p><h2 id="field-title">帶著任務，閱讀山與河。</h2><p class="field-copy">選擇一張探索卡，讓下一次看見峽谷時，多一個值得停下來觀察的線索。</p></div><div class="mission-grid"><button class="mission-card is-selected" type="button" aria-pressed="true" data-mission="尋找岩石的紋理" data-answer="大理岩在光線與水氣下會呈現不同的灰白層次；從安全處遠觀，感受岩壁的尺度與紋理。"><span>01</span><b>岩石紋理</b><i>→</i></button><button class="mission-card" type="button" aria-pressed="false" data-mission="聆聽水流的方向" data-answer="留意河道轉彎、匯流處與岩壁間的水聲。水流的速度與方向，正透露侵蝕的力量。"><span>02</span><b>溪流線索</b><i>→</i></button><button class="mission-card" type="button" aria-pressed="false" data-mission="辨認山壁上的生命" data-answer="即使岩壁陡峭，仍有適應環境的岩生植物。觀察即可，不採摘、不攀折。"><span>03</span><b>岩壁生命</b><i>→</i></button><button class="mission-card" type="button" aria-pressed="false" data-mission="理解人與山的距離" data-answer="道路、步道與聚落都在地景之中。尊重管制與部落文化，才是安全的探索方式。"><span>04</span><b>人與地景</b><i>→</i></button></div><article class="mission-result" aria-live="polite"><p>目前任務</p><h3>尋找岩石的紋理</h3><span>大理岩在光線與水氣下會呈現不同的灰白層次；從安全處遠觀，感受岩壁的尺度與紋理。</span></article></div>
    </section>

    <section id="prepare" class="section prepare wrap" aria-labelledby="prepare-title">
      <div class="prepare-title"><p class="eyebrow yellow">BEFORE YOU GO / 03</p><h2 id="prepare-title">把敬畏，放進行囊。</h2></div>
      <div class="checklist">
        <article><span>01</span><h3>確認開放資訊</h3><p>步道、道路與景點可能臨時管制。出發當天再次查看太魯閣國家公園管理處資訊。</p></article>
        <article><span>02</span><h3>留意落石與天候</h3><p>山區環境變化快速，依現場警示與管制指示行動，不進入封閉區域。</p></article>
        <article><span>03</span><h3>帶走回憶，不留痕跡</h3><p>不採集、不餵食、不遺留垃圾，讓峽谷的自然與文化被好好看見。</p></article>
      </div>
      <div class="packing" aria-labelledby="packing-title"><div><p class="eyebrow yellow">PACKING CHECK</p><h3 id="packing-title">我的探索裝備 <span id="packing-count">0 / 4</span></h3></div><div class="packing-options"><label><input type="checkbox"> 飲用水</label><label><input type="checkbox"> 雨具／保暖層</label><label><input type="checkbox"> 防滑好走的鞋</label><label><input type="checkbox"> 官方公告截圖</label></div></div>
      <a class="official-link" href="https://www.taroko.gov.tw/" target="_blank" rel="noreferrer">前往太魯閣國家公園官方網站確認最新狀態 ↗</a>
    </section>
  </main>

  <footer class="site-footer wrap">
    <div><a class="brand" href="#top"><span aria-hidden="true"></span>太魯閣探索計畫</a><p>為課堂作業製作的非官方介紹網站。</p></div>
    <div class="sources"><b>資料來源</b><a href="https://www.taroko.gov.tw/ch/sglarticle/beauty-of-liwu-river" target="_blank" rel="noreferrer">太魯閣國家公園｜立霧溪之美 ↗</a><a href="https://www.taroko.gov.tw/ch/trailsAttractions/trail-list/44" target="_blank" rel="noreferrer">太魯閣國家公園｜九曲洞步道 ↗</a><a href="https://www.taroko.gov.tw/ch/trailsAttractions/attractions/23" target="_blank" rel="noreferrer">太魯閣國家公園｜布洛灣吊橋 ↗</a></div>
  </footer>
  <script src="script.js"></script>
</body>
</html>
