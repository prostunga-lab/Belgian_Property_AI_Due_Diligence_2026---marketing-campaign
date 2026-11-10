const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const out = process.argv[2]; const items = require(process.argv[3]);
  const browser = await chromium.launch();
  for (const [name, { w, h, html }] of Object.entries(items)) {
    const p = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
    await p.setContent(html);
    const over = await p.evaluate(() => (()=>{const f=document.querySelector('.foot').getBoundingClientRect(),m=document.querySelector('.main');return f.bottom>innerHeight-60||m.scrollHeight>m.clientHeight+1||[...document.querySelectorAll('.main *')].some(e=>e.getBoundingClientRect().right>innerWidth-60)})());
    if (over) console.log('OVERFLOW', name);
    await p.screenshot({ path: path.join(out, name + '.jpg'), type: 'jpeg', quality: 92 });
    await p.close();
  }
  await browser.close();
})();
