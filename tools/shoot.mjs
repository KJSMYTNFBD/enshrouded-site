// 逐段截圖驗證：node tools/shoot.mjs <url> <outDir> [width] [height] [rm]
import { Browser, sleep } from 'file:///C:/Users/hyz92/AppData/Local/hermes/skills/creative/design-taste-frontend/scripts/lib/cdp.mjs';
import { mkdirSync } from 'node:fs';
const [, , url, out, W = '1440', H = '900', rm = ''] = process.argv;
mkdirSync(out, { recursive: true });
const b = await Browser.launch({ width: +W, height: +H });
const p = await b.newPage({ width: +W, height: +H, mobile: +W < 800, dsf: 1, reducedMotion: rm === 'rm' });
await p.goto(url, { settleMs: 2500 });
const ids = ['bosses', 'skills', 'loot', 'gear', 'world', 'biomes', 'story'];
const geo = await p.eval(`(() => { const o = {}; for (const id of ${JSON.stringify(ids)}) { const e = document.getElementById(id); if (e) o[id] = [e.offsetTop, e.offsetHeight]; } o.doc = document.documentElement.scrollHeight; o.vh = innerHeight; return o; })()`);
console.log(JSON.stringify(geo));
const vh = geo.vh;
const pin = (id, f) => geo[id][0] + f * (geo[id][1] - vh);
const shots = [];
if (rm !== 'rm') {
  shots.push(['cover', 0]);
  for (const f of [0.02, 0.07, 0.12, 0.2, 0.35, 0.55, 0.75, 0.97]) shots.push(['boss' + f, pin('bosses', f)]);
  shots.push(['skills', geo.skills[0] + 120], ['skills-click', geo.skills[0] + 700]);
  for (const f of [0.1, 0.4, 0.5, 0.62, 0.85]) shots.push(['loot' + f, pin('loot', f)]);
  shots.push(['gear', geo.gear[0] + 80], ['gear2', geo.gear[0] + 700], ['gear3', geo.gear[0] + 1500]);
  shots.push(['world', geo.world[0]]);
  if (geo.biomes) for (const f of [0.1, 0.5, 0.95]) shots.push(['biome' + f, pin('biomes', f)]);
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
  if (name === 'skills-click') { await p.eval(`(() => { const n = [...document.querySelectorAll('.tree .nd')]; n[0].dispatchEvent(new MouseEvent('click', { bubbles: true })); document.querySelectorAll('#archBtns button')[3]?.click(); })()`); await sleep(1100); }
  if (name === 'gear2') { await p.eval(`document.querySelectorAll('#gearTabs button')[2]?.click()`); await sleep(1000); }
  if (name === 'eggs') { await p.eval(`document.querySelector('.egg')?.click()`); await sleep(900); }
  await p.screenshot({ path: `${out}/${String(i++).padStart(2, '0')}-${name}.jpg`, quality: 70 });
}
console.log('errors', JSON.stringify(p.consoleErrors));
await b.close(); process.exit(0);
