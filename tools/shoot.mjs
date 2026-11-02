
import { Browser, sleep } from 'file:///C:/Users/hyz92/AppData/Local/hermes/skills/creative/design-taste-frontend/scripts/lib/cdp.mjs';
import { mkdirSync } from 'node:fs';
const [,, url, out, W='1440', H='900', rm=''] = process.argv;
mkdirSync(out, { recursive: true });
const b = await Browser.launch({ width:+W, height:+H });
const p = await b.newPage({ width:+W, height:+H, mobile:+W<800, dsf:1, reducedMotion: rm==='rm' });
await p.goto(url, { settleMs: 2500 });
const geo = await p.eval(() => {
  const o = {}; for (const id of ['battle','skills','loot','gear','world','biomes','story']) { const e=document.getElementById(id); o[id]=[e.offsetTop, e.offsetHeight]; }
  o.doc = document.documentElement.scrollHeight; o.vh = innerHeight; return o; });
console.log(JSON.stringify(geo));
const vh = geo.vh;
const pin = (id, f) => geo[id][0] + f * (geo[id][1] - vh);
const N=7, TAIL=0.45;
const shots = [];
if (rm !== 'rm') {
for (let k=0;k<N;k++) shots.push(["cover",0]);
shots.push(['skills', geo.skills[0] + 120]);
shots.push(['skills2', geo.skills[0] + 900]);
for (const f of [0.1,0.4,0.5,0.62,0.85]) shots.push(['loot'+f, pin('loot', f)]);
shots.push(['gear', geo.gear[0]+80], ['gear2', geo.gear[0]+800], ['gear3', geo.gear[0]+1700]);
shots.push(['world', geo.world[0]]);
for (const f of [0.1,0.5,0.95]) shots.push(['biome'+f, pin('biomes', f)]);
shots.push(['verbs', geo.biomes[0]+geo.biomes[1]+60]);
shots.push(['story', geo.story[0]+60], ['story2', geo.story[0]+1200], ['story3', geo.story[0]+2400]);
}
for (let y = 0; y < geo.doc; y += vh) shots.push([rm==='rm'?'rm':'', y]);
let i=0;
for (const [name, y] of shots) {
  if (!name && rm!=='rm') continue;
  await p.eval(`window.scrollTo(0, ${Math.round(y)})`);
  await sleep(name.startsWith('loot')||name.startsWith('hero') ? 900 : 1100);
  if (name==='gear2') { await p.eval(`document.querySelectorAll('#gearTabs button')[2].click()`); await sleep(1100); }
  if (name==='skills2') { await p.eval(`document.querySelectorAll('.tree .node')[5].dispatchEvent(new MouseEvent('click',{bubbles:true}));document.querySelectorAll('.tree .node')[9].dispatchEvent(new MouseEvent('click',{bubbles:true}))`); await sleep(900); }
  if (name==='story3') { await p.eval(`document.querySelector('.egg').click()`); await sleep(900); }
  await p.screenshot({ path: `${out}/${String(i++).padStart(2,'0')}-${name}.jpg`, quality: 70 });
}
console.log('errors', JSON.stringify(p.consoleErrors));
await b.close(); process.exit(0);
