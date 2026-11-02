import { Browser, sleep } from 'file:///C:/Users/hyz92/AppData/Local/hermes/skills/creative/design-taste-frontend/scripts/lib/cdp.mjs';
const b = await Browser.launch({ width: 1440, height: 900 });
const p = await b.newPage({ width: 1440, height: 900 });
await p.goto('file:///C:/Users/hyz92/projects/enshrouded-site/site/index.html', { settleMs: 1500 });
await p.eval('scrollTo(0, 31000)'); await sleep(1500);
console.log(await p.eval(`JSON.stringify([...document.querySelectorAll('.backdrop img')].map(i => [i.dataset.bg, i.className, getComputedStyle(i).opacity, i.naturalWidth]).concat([[getComputedStyle(document.querySelector('.backdrop')).zIndex, getComputedStyle(document.querySelector('#gear'),'::before').backgroundColor, document.elementFromPoint(700,450).className]]))`));
await b.close(); process.exit(0);
