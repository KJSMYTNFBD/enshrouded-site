// 逐段截圖驗證：node tools/shoot.mjs <url> <outDir> [width] [height] [rm]
import { Browser, sleep } from 'file:///C:/Users/hyz92/AppData/Local/hermes/skills/creative/design-taste-frontend/scripts/lib/cdp.mjs';
import { mkdirSync } from 'node:fs';
const [, , url, out, W = '1440', H = '900', rm = ''] = process.argv;
mkdirSync(out, { recursive: true });
const b = await Browser.launch({ width: +W, height: +H });
const p = await b.newPage({ width: +W, height: +H, mobile: +W < 800, dsf: 1, reducedMotion: rm === 'rm' });
await p.goto(url, { settleMs: 2500 });
const ids = ['bosses', 'skills', 'loot', 'gearPin', 'gear', 'world', 'story'];
const geo = await p.eval(`(() => { const o = {}; for (const id of ${JSON.stringify(ids)}) { const e = document.getElementById(id); if (e) o[id] = [Math.round(e.getBoundingClientRect().top + scrollY), e.offsetHeight]; } o.doc = document.documentElement.scrollHeight; o.vh = innerHeight; return o; })()`);
console.log(JSON.stringify(geo));
const vh = geo.vh;
const pin = (id, f) => geo[id][0] + f * (geo[id][1] - vh);
const shots = [];
if (rm !== 'rm') {
  shots.push(['cover', 0]);
  for (const f of [0.02, 0.07, 0.12, 0.2, 0.35, 0.55, 0.75, 0.97]) shots.push(['boss' + f, pin('bosses', f)]);
  for (const f of [0.02, 0.12, 0.3, 0.55, 0.8, 0.99]) shots.push(['skills' + f, pin('skills', f)]);
  shots.push(['skills-click', pin('skills', 0.99)]);
  for (const f of [0.1, 0.4, 0.5, 0.62, 0.85]) shots.push(['loot' + f, pin('loot', f)]);
  for (const f of [0.05, 0.4, 0.95]) shots.push(['gear' + f, pin('gearPin', f)]);
  shots.push(['gear-more', geo.gearPin[0] + geo.gearPin[1] + 40]);
  shots.push(['world', geo.world[0]]);
  for (const f of [0.15, 0.4, 0.7]) shots.push(['regions' + f, geo.world[0] + geo.world[1] * f]);
  shots.push(['verbs', geo.world[0] + geo.world[1] - vh * 1.3]);
  shots.push(['story', geo.story[0] + 60], ['story2', geo.story[0] + 1200], ['eggs', geo.story[0] + geo.story[1] - vh * 1.1]);
  shots.push(['finale', geo.doc - vh * 1.6]);
} else {
  for (let y = 0; y < geo.doc; y += vh) shots.push(['rm', y]);
}
let i = 0;
for (const [name, y] of shots) {
  await p.eval(`window.scrollTo(0, ${Math.round(y)})`);
  await sleep(name.startsWith('loot') || name.startsWith('boss') ? 1000 : 1100);
  if (name === 'skills-click') { await p.eval(`(() => { const n = [...document.querySelectorAll('.tree .nd')]; n.find(x => x.querySelector('circle.b').getAttribute('r') === '70').dispatchEvent(new MouseEvent('click', { bubbles: true })); })()`); await sleep(1100); }
  if (name === 'eggs') { await p.eval(`document.querySelector('.egg')?.click()`); await sleep(900); }
  await p.screenshot({ path: `${out}/${String(i++).padStart(2, '0')}-${name}.jpg`, quality: 70 });
}
console.log('errors', JSON.stringify(p.consoleErrors));
await b.close(); process.exit(0);
