/* Enshrouded 1.0 intro page — scroll scenes and interactions.
   tools/build.py inlines data/tree-data.json and data/sets-data.json into site/main.js. */
(() => {
  'use strict';
  const TREE = __TREE__;
  const SETS = __SETS__;
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const smooth = t => t * t * (3 - 2 * t);
  const easeOut = t => 1 - Math.pow(1 - t, 3);
  const easeBack = t => { const c = 1.4; return 1 + (c + 1) * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2); };
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const isMobile = () => innerWidth <= 760;
  const vh = () => innerHeight;
  const vis = el => { const r = el.getBoundingClientRect(); return r.bottom > 0 && r.top < innerHeight; };
  // screens scrolled inside a pinned section, and the total it can scroll
  function pinState(el) {
    const r = el.getBoundingClientRect();
    const total = Math.max(1, r.height - innerHeight);
    const y = clamp(-r.top, 0, total);
    return { u: y / innerHeight, p: y / total };
  }
  const stripTags = s => s.replace(/<[^>]+>/g, '');

  /* ---------- reveal ---------- */
  const groups = new Map();
  $$('[data-rv]').forEach(el => { const p = el.parentElement; const i = groups.get(p) || 0; groups.set(p, i + 1); el.style.setProperty('--d', Math.min(i, 4) * 70 + 'ms'); });
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  $$('[data-rv]').forEach(el => io.observe(el));
  let pendingRv = $$('[data-rv]');
  function sweepReveals() {
    if (!pendingRv.length) return;
    const lim = innerHeight * 0.94;
    pendingRv = pendingRv.filter(el => {
      if (el.classList.contains('in')) return false;
      if (el.getBoundingClientRect().top < lim) { el.classList.add('in'); io.unobserve(el); return false; }
      return true;
    });
  }

  /* ---------- backdrop: in-game pictures behind every section ---------- */
  const backImgs = $$('.backdrop img');
  const bgSecs = $$('[data-bg]').filter(el => !el.classList.contains('backdrop'));
  let curBack = '';
  function renderBackdrop() {
    const mid = innerHeight / 2;
    let key = '';
    for (const s of bgSecs) { const r = s.getBoundingClientRect(); if (r.top <= mid && r.bottom >= mid) key = s.dataset.bg; }
    if (!key) { for (const s of bgSecs) { const r = s.getBoundingClientRect(); if (r.top < innerHeight && r.bottom > 0) { key = s.dataset.bg; break; } } }
    if (key && key !== curBack) { curBack = key; backImgs.forEach(i => i.classList.toggle('on', i.dataset.bg === key)); }
  }

  /* ---------- canvases ---------- */
  function makeFx(canvas) {
    const ctx = canvas.getContext('2d'); const st = { w: 0, h: 0 };
    const resize = () => { const d = Math.min(devicePixelRatio || 1, 1.5); st.w = canvas.clientWidth; st.h = canvas.clientHeight; canvas.width = st.w * d; canvas.height = st.h * d; ctx.setTransform(d, 0, 0, d, 0, 0); };
    resize(); return { ctx, st, resize };
  }

  /* ---------- COVER ---------- */
  const cover = $('.cover'), coverArt = $('#coverArt');
  const coverFx = makeFx($('#coverFx'));
  const embers = [];
  function spawnEmber(fill) {
    const { w, h } = coverFx.st;
    embers.push({ x: Math.random() * w, y: fill ? Math.random() * h : h + 10, vx: (Math.random() - 0.3) * 0.35, vy: -(0.25 + Math.random() * 0.9), r: 0.6 + Math.random() * 2.1, life: 0, max: 380 + Math.random() * 420, hue: 18 + Math.random() * 26, ph: Math.random() * 6.28 });
  }
  for (let i = 0; i < 60; i++) spawnEmber(true);
  function renderCover() {
    const r = cover.getBoundingClientRect();
    const t = clamp(-r.top / r.height, 0, 1);
    if (!RM) coverArt.style.transform = `translate3d(0,${t * 18}%,0) scale(${1 + t * 0.08})`;
    const { ctx, st } = coverFx;
    ctx.clearRect(0, 0, st.w, st.h);
    if (RM) return;
    if (embers.length < (isMobile() ? 40 : 80)) spawnEmber(false);
    ctx.globalCompositeOperation = 'lighter';
    for (let i = embers.length - 1; i >= 0; i--) {
      const e = embers[i]; e.life++; e.ph += 0.05; e.x += e.vx + Math.sin(e.ph) * 0.25; e.y += e.vy;
      const a = Math.sin(Math.PI * clamp(e.life / e.max, 0, 1)) * (0.55 + 0.45 * Math.sin(e.ph * 3));
      if (e.life > e.max || e.y < -20) { embers.splice(i, 1); continue; }
      ctx.fillStyle = `hsla(${e.hue},100%,62%,${a * 0.85})`; ctx.beginPath(); ctx.arc(e.x, e.y, e.r, 0, 6.283); ctx.fill();
      ctx.fillStyle = `hsla(${e.hue},100%,55%,${a * 0.12})`; ctx.beginPath(); ctx.arc(e.x, e.y, e.r * 4, 0, 6.283); ctx.fill();
    }
    ctx.globalCompositeOperation = 'source-over';
  }

  /* ---------- BOSS PARADE ---------- */
  const REG = { 'springlands': 'Springlands', 'revelwood': 'Revelwood', 'nomad-highlands': 'Nomad Highlands', 'kindlewastes': 'Kindlewastes', 'albaneve-summits': 'Albaneve Summits', 'veilwater-basin': 'Veilwater Basin', 'cinders-cradle': "Cinder's Cradle", 'hollow-halls': 'Hollow Halls' };
  const parade = $('#bosses');
  const bosses = $$('#bossList .boss');
  const pbgs = $$('.pv-bg');
  const intro = $('#pvIntro'), regionEl = $('#pvRegion'), pvBar = $('#pvBar');
  const INTRO = 1.4, STEP = 0.66, NB = bosses.length;
  const fog = makeFx($('#fogFx'));
  $('#fogFx').style.filter = 'blur(40px)';
  const blobs = Array.from({ length: 14 }, () => ({ x: Math.random(), y: Math.random(), r: 0.25 + Math.random() * 0.35, vx: (Math.random() - 0.5) * 0.0006, vy: -0.0002 - Math.random() * 0.0005, a: 0.25 + Math.random() * 0.35 }));
  let curReg = '';
  function setRegion(reg) {
    if (reg === curReg) return;
    curReg = reg;
    pbgs.forEach(b => b.classList.toggle('on', b.dataset.reg === reg));
    if (REG[reg]) { regionEl.textContent = REG[reg]; regionEl.classList.add('on'); } else regionEl.classList.remove('on');
  }
  function renderParade() {
    const { u } = pinState(parade);
    const ia = u < INTRO ? (u < 0.15 ? 1 : 1 - smooth(clamp((u - 0.75) / (INTRO - 0.75), 0, 1))) : 0;
    intro.style.opacity = ia.toFixed(3);
    intro.style.transform = `translateY(${(1 - ia) * -30}px) scale(${1 + (1 - ia) * 0.04})`;
    const bu = (u - INTRO) / STEP;
    const idx = bu < 0 ? -1 : Math.min(NB - 1, Math.floor(bu));
    setRegion(idx < 0 ? 'shroud' : bosses[idx].dataset.reg);
    const mob = isMobile();
    bosses.forEach((b, i) => {
      const t = bu - i;
      if (t < -0.05 || t > 1.05) { if (b.classList.contains('on')) { b.classList.remove('on'); b.style.opacity = 0; } return; }
      b.classList.add('on');
      const enter = smooth(clamp(t / 0.28, 0, 1));
      const leave = i === NB - 1 ? 0 : smooth(clamp((t - 0.78) / 0.22, 0, 1));
      const dir = b.classList.contains('b-l') ? -1 : 1;
      b.firstElementChild.style.transform = `translate3d(${(1 - enter) * dir * (mob ? 60 : 160) + leave * dir * -60}px,${(1 - enter) * 30}px,0) scale(${0.92 + 0.08 * enter})`;
      b.lastElementChild.style.transform = `translate3d(${(1 - enter) * -dir * (mob ? 40 : 90) + leave * -dir * 40}px,0,0)`;
      b.style.opacity = (enter * (1 - leave)).toFixed(3);
    });
    pvBar.style.width = (clamp(bu / NB, 0, 1) * 100) + '%';
    const on = pbgs.find(b => b.classList.contains('on'));
    if (on && !RM) on.style.transform = `scale(${1.02 + 0.03 * Math.sin(u * 0.6)}) translateX(${Math.sin(u * 0.9) * 1.2}%)`;
    const { ctx, st } = fog;
    ctx.clearRect(0, 0, st.w, st.h);
    if (RM) return;
    const strength = idx < 0 ? 1 : 0.35;
    ctx.globalCompositeOperation = 'lighter';
    blobs.forEach(o => {
      o.x += o.vx; o.y += o.vy; if (o.y < -0.4) { o.y = 1.3; o.x = Math.random(); }
      ctx.fillStyle = `rgba(150,22,40,${o.a * 0.22 * strength})`;
      ctx.beginPath(); ctx.arc(o.x * st.w, o.y * st.h, o.r * Math.max(st.w, st.h), 0, 6.283); ctx.fill();
    });
    ctx.globalCompositeOperation = 'source-over';
  }

  /* ---------- SKILL TREE: scroll tour through the twelve archetypes, then free play ---------- */
  const ARCH = [
    ['Survivor', 'R', 225], ['Beastmaster', 'R', 255], ['Ranger', 'R', 285], ['Assassin', 'R', 315],
    ['Trickster', 'M', 345], ['Wizard', 'M', 15], ['Healer', 'M', 45], ['Battlemage', 'M', 75],
    ['Guardian', 'W', 105], ['Warrior', 'W', 135], ['Barbarian', 'W', 165], ['Athlete', 'W', 195],
  ];
  const ATTR = { R: 'Dexterity', M: 'Intelligence', W: 'Strength' };
  const CLS = ['N', 'W', 'M', 'R'];
  const COL = { N: '#ffb100', W: '#e0524a', M: '#5aa2ee', R: '#7fcc44' };
  const TYPE = ['Starting spark', 'Attribute', 'Passive skill', 'Active skill'];
  const MAXPTS = 212;
  const nodes = TREE.n.map(([x, y, c, t, name, cost, lv, arch, icon, desc], i) => ({ i, x, y, c: CLS[c], t, name, cost, lv, arch, icon, desc, level: 0, adj: [] }));
  TREE.l.forEach(([a, b]) => { nodes[a].adj.push(b); nodes[b].adj.push(a); });
  const svg = $('#tree');
  const NS = 'http://www.w3.org/2000/svg';
  const mk = (tag, attrs, parent) => { const n = document.createElementNS(NS, tag); for (const k in attrs) n.setAttribute(k, attrs[k]); parent && parent.appendChild(n); return n; };
  const gL = mk('g', {}, svg), gN = mk('g', {}, svg), gA = mk('g', {}, svg);
  const linkEls = TREE.l.map(([a, b]) => {
    const A = nodes[a], B = nodes[b];
    const l = mk('line', { x1: A.x, y1: A.y, x2: B.x, y2: B.y, class: 'lk' }, gL);
    l.style.setProperty('--c', COL[A.c !== 'N' ? A.c : B.c]); return { l, a, b };
  });
  const R = [70, 40, 58, 92];
  nodes.forEach(n => {
    const g = mk('g', { class: 'nd', tabindex: '0', role: 'button', 'aria-label': `${n.name}, ${TYPE[n.t]}` }, gN);
    g.style.setProperty('--c', COL[n.c]);
    mk('circle', { cx: n.x, cy: n.y, r: R[n.t], class: 'ring' }, g);
    mk('circle', { cx: n.x, cy: n.y, r: R[n.t], class: 'b' }, g);
    if (n.icon) mk('image', { href: 'media/' + n.icon, x: n.x - 70, y: n.y - 70, width: 140, height: 140 }, g);
    n.el = g;
    g.addEventListener('click', () => clickNode(n));
    g.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); clickNode(n); } });
    g.addEventListener('mouseenter', () => { if (manual) showNode(n); });
  });
  ARCH.forEach(([name, c, ang]) => {
    const a = ang * Math.PI / 180;
    const t = mk('text', { x: Math.cos(a) * 2650, y: Math.sin(a) * 2650 + 50, 'text-anchor': 'middle', class: 'al' }, gA);
    t.style.setProperty('--c', COL[c]); t.textContent = name;
  });
  // the tour path for each archetype: shortest route from any starting spark to its outermost active skill
  const sparks = nodes.filter(n => n.t === 0).map(n => n.i);
  function pathTo(target) {
    const prev = new Map(sparks.map(s => [s, -1])); const q = [...sparks];
    while (q.length) { const i = q.shift(); if (i === target) break; for (const j of nodes[i].adj) if (!prev.has(j)) { prev.set(j, i); q.push(j); } }
    const path = []; for (let i = target; i !== -1 && i !== undefined; i = prev.get(i)) path.unshift(i);
    return path;
  }
  const TOUR = ARCH.map((A, k) => {
    const pool = nodes.filter(n => n.arch === k);
    const dist = n => Math.hypot(n.x, n.y);
    const target = (pool.filter(n => n.t === 3).sort((a, b) => dist(b) - dist(a))[0]) || pool.sort((a, b) => dist(b) - dist(a))[0];
    const path = pathTo(target.i);
    const steps = [];
    path.forEach(i => { const n = nodes[i]; const top = (n.t === 3 || i === target.i) ? n.lv : 1; for (let l = 1; l <= top; l++) steps.push([i, l]); });
    return { k, target: target.i, steps };
  });
  let vb = [-2900, -2900, 5800, 5800], vbTo = vb.slice();
  function setVB(to) { vbTo = to; }
  function stepVB() {
    if (RM) vb = vbTo.slice(); else vb = vb.map((v, i) => lerp(v, vbTo[i], 0.12));
    svg.setAttribute('viewBox', vb.map(v => v.toFixed(1)).join(' '));
  }
  const skCard = $('#skCard'), skSteps = $('#skSteps'), skHint = $('#skHint');
  let manual = false, tourArch = -2, tourStep = -1, selNode = null;
  function points() { return nodes.reduce((s, n) => s + n.level * n.cost, 0); }
  const available = n => n.t === 0 || n.adj.some(j => nodes[j].level > 0);
  function prune() {
    const seen = new Set(); const q = nodes.filter(n => n.t === 0 && n.level > 0).map(n => n.i);
    q.forEach(i => seen.add(i));
    while (q.length) { const i = q.shift(); nodes[i].adj.forEach(j => { if (nodes[j].level > 0 && !seen.has(j)) { seen.add(j); q.push(j); } }); }
    nodes.forEach(n => { if (n.level > 0 && !seen.has(n.i)) n.level = 0; });
  }
  function syncTree() {
    nodes.forEach(n => {
      n.el.classList.toggle('on', n.level > 0);
      n.el.classList.toggle('av', n.level === 0 && available(n));
      n.el.setAttribute('aria-pressed', n.level > 0);
      let t = n.el.querySelector('.lvl');
      if (n.lv > 1 && n.level > 0) { if (!t) t = mk('text', { x: n.x + R[n.t] * 0.8, y: n.y - R[n.t] * 0.8, class: 'lvl' }, n.el); t.textContent = n.level; }
      else if (t) t.remove();
    });
    linkEls.forEach(({ l, a, b }) => l.classList.toggle('on', nodes[a].level > 0 && nodes[b].level > 0));
    const by = { W: 0, M: 0, R: 0 };
    nodes.forEach(n => { if (n.level > 0 && by[n.c] !== undefined) by[n.c] += n.level * n.cost; });
    $('#buildPts').textContent = points();
    ['W', 'M', 'R'].forEach(c => { $('#m' + c).style.width = Math.min(100, by[c] / 60 * 100) + '%'; });
  }
  function showNode(n, opts = {}) {
    if (!n) return;
    if (selNode) selNode.el.classList.remove('sel');
    selNode = n; n.el.classList.add('sel');
    const arch = n.arch >= 0 ? ARCH[n.arch] : null;
    skCard.style.setProperty('--c', COL[n.c]);
    $('#skArch').textContent = (opts.tour !== undefined ? `${ARCH[opts.tour][0]} · ${ATTR[ARCH[opts.tour][1]]}` : (arch ? `${arch[0]} · ${TYPE[n.t]}` : `Centre · ${TYPE[n.t]}`));
    $('#skName').textContent = n.name;
    $('#skDesc').innerHTML = n.desc.map(d => `<p>${d}</p>`).join('');
    $('#skMeta').textContent = `${TYPE[n.t]} · ${n.cost} point${n.cost > 1 ? 's' : ''} per level${n.lv > 1 ? ` · level ${Math.max(n.level, 1)} of ${n.lv}` : ''}`;
    if (opts.bump && !RM) { skCard.classList.remove('bump'); void skCard.offsetWidth; skCard.classList.add('bump'); }
  }
  function pop(n) { if (RM) return; n.el.classList.remove('pop'); void n.el.getBBox(); n.el.classList.add('pop'); }
  const archLabels = [...gA.children];
  function dimTo(k) {
    nodes.forEach(n => n.el.classList.toggle('dim', k >= 0 && n.arch !== k && n.t !== 0 && n.arch !== -1));
    archLabels.forEach((l, i) => l.classList.toggle('hide', k >= 0 && i !== k));
  }
  function zoomArch(k) {
    if (k < 0) { setVB([-2900, -2900, 5800, 5800]); return; }
    const a = ARCH[k][2] * Math.PI / 180, s = 3000;
    const cx = Math.cos(a) * 1500, cy = Math.sin(a) * 1500;
    setVB([cx - s / 2, cy - s / 2, s, s]);
  }
  function renderStepDots(T, done) {
    if (skSteps.childElementCount !== T.steps.length || skSteps.dataset.k != T.k) {
      skSteps.dataset.k = T.k;
      skSteps.innerHTML = T.steps.map(() => '<span></span>').join('');
    }
    skSteps.style.setProperty('--c', COL[ARCH[T.k][1]]);
    [...skSteps.children].forEach((s, i) => { s.classList.toggle('done', i <= done); s.classList.toggle('cur', i === done); });
  }
  const skills = $('#skills');
  const TOUR_IN = 0.5, TOUR_STEP = 0.8;
  function sizeSkills() { skills.style.height = RM ? '' : `calc(100svh * ${(1 + TOUR_IN + ARCH.length * TOUR_STEP + 0.6).toFixed(2)})`; }
  function renderSkillsTour() {
    if (manual) return;
    const { u } = pinState(skills);
    const tu = (u - TOUR_IN) / TOUR_STEP;
    const k = tu < 0 ? -1 : tu >= ARCH.length ? -2 : Math.floor(tu);
    if (k !== tourArch) {
      tourArch = k; tourStep = -1;
      nodes.forEach(n => n.level = 0);
      dimTo(k >= 0 ? k : -1); zoomArch(k);
      if (k < 0) {
        skSteps.innerHTML = '';
        syncTree();
        showNode(nodes.find(n => n.name === 'Airborne Architect') || nodes[0]);
        $('#skArch').textContent = k === -1 ? 'New in 1.0 · centre of the tree' : 'Your turn';
        skHint.textContent = k === -1 ? 'Keep scrolling to watch each archetype level up.' : 'Click any glowing node next to a lit one and build your own.';
        if (k === -2) { manual = true; skHint.textContent = 'Your turn: click a starting spark (the gold ring) and build your own.'; }
      }
    }
    if (k < 0) return;
    const T = TOUR[k];
    const f = clamp((tu - k) / 0.85, 0, 1);
    const s = Math.min(T.steps.length - 1, Math.floor(f * T.steps.length));
    if (s !== tourStep) {
      nodes.forEach(n => n.level = 0);
      for (let i = 0; i <= s; i++) { const [ni, l] = T.steps[i]; nodes[ni].level = Math.max(nodes[ni].level, l); }
      syncTree();
      const [ni] = T.steps[s];
      if (s > tourStep) pop(nodes[ni]);
      tourStep = s;
      showNode(nodes[ni], { tour: k, bump: true });
      renderStepDots(T, s);
      skHint.textContent = `${ARCH[k][0]}: ${s + 1} of ${T.steps.length} upgrades on the way to ${nodes[T.target].name}.`;
    }
  }
  function clickNode(n) {
    if (!manual) { manual = true; nodes.forEach(m => m.level = 0); dimTo(-1); skSteps.innerHTML = ''; syncTree(); skHint.textContent = 'You took over. Start from a gold spark; click a node again at its top level to remove it.'; }
    if (!available(n) && n.level === 0) { showNode(n); $('#skMeta').textContent = 'Learn a neighbouring node first.'; return; }
    if (n.level < n.lv) { if (points() + n.cost > MAXPTS) { $('#skMeta').textContent = 'All 212 points are spent.'; return; } n.level++; pop(n); }
    else { n.level = 0; prune(); }
    syncTree(); showNode(n, { bump: true });
  }
  $('#buildReset').addEventListener('click', () => { manual = false; tourArch = -3; nodes.forEach(n => n.level = 0); syncTree(); });
  syncTree();
  showNode(nodes.find(n => n.name === 'Airborne Architect') || nodes[0]);
  if (RM) { manual = true; skHint.textContent = 'Click a starting spark (the gold ring) and build your own.'; }

  /* ---------- LOOT ---------- */
  const loot = $('#loot'), frame = $('#chestFrame'), openImg = $('#chestOpen');
  const keyGlow = $('#keyGlow'), seam = $('#seam'), flash = $('#flash');
  const lootA = $('#lootA'), lootB = $('#lootB');
  const cards = $$('#lootCards .lc');
  const lootFx = makeFx($('#lootFx'));
  const sparksFx = [];
  function chestGeom() {
    const W = innerWidth, H = innerHeight, mob = isMobile();
    const fw = Math.max(mob ? W * 2.3 : W, H * 1.7872), fh = fw / 1.7872;
    const top = H / 2;
    return { W, H, fw, fh, cx: (W - fw) / 2 + fw * 0.486, cy: top - fh / 2 + fh * 0.6 };
  }
  function renderLoot() {
    const { p } = pinState(loot), g = chestGeom();
    const push = p < 0.49 ? 1 + 0.14 * smooth(clamp(p / 0.46, 0, 1)) : 1.14 - 0.1 * smooth(clamp((p - 0.49) / 0.2, 0, 1));
    let sx = 0, sy = 0;
    if (p > 0.3 && p < 0.49) { const amp = 6 * smooth((p - 0.3) / 0.19); const tt = performance.now() / 38; sx = Math.sin(tt * 1.7) * amp; sy = Math.cos(tt * 2.3) * amp * 0.6; }
    frame.style.transform = `translate(calc(-50% + ${sx}px), calc(-50% + ${sy}px)) scale(${push})`;
    keyGlow.style.setProperty('--k', p < 0.49 ? (0.3 + 1.4 * smooth(clamp(p / 0.45, 0, 1))).toFixed(3) : '0');
    seam.style.setProperty('--s', p < 0.49 ? smooth(clamp((p - 0.3) / 0.17, 0, 1)).toFixed(3) : '0');
    flash.style.opacity = clamp(1 - Math.abs(p - 0.49) / 0.035, 0, 1).toFixed(3);
    openImg.style.opacity = p >= 0.49 ? 1 : 0;
    frame.style.filter = isMobile() && p > 0.5 ? `brightness(${(1 - 0.5 * smooth(clamp((p - 0.52) / 0.12, 0, 1))).toFixed(3)})` : '';
    lootA.style.opacity = (1 - smooth(clamp((p - 0.22) / 0.1, 0, 1))).toFixed(3);
    const bIn = smooth(clamp((p - 0.6) / 0.1, 0, 1));
    lootB.style.opacity = bIn.toFixed(3); lootB.style.transform = `translateY(${(1 - bIn) * 20}px)`;
    const mob = isMobile();
    const perRow = mob ? 3 : cards.length;
    const gap = mob ? 8 : 18;
    const cw = mob ? 104 : Math.min(180, (g.W - 96 - (perRow - 1) * gap) / perRow);
    cards.forEach(c => { c.style.width = cw + 'px'; });
    const rowW = perRow * cw + (perRow - 1) * gap;
    cards.forEach((c, i) => {
      const q = clamp((p - 0.52 - i * 0.025) / 0.12, 0, 1);
      const row = Math.floor(i / perRow), col = i % perRow;
      const tx = g.W / 2 - rowW / 2 + col * (cw + gap);
      const ty = g.H - (mob ? 360 : 300) + row * (mob ? 170 : 0);
      const x = lerp(g.cx - cw / 2, tx, easeOut(q));
      const y = lerp(g.cy - 90, ty, easeBack(q)) - Math.sin(Math.PI * q) * (mob ? 120 : 220);
      c.style.opacity = q > 0 ? Math.min(1, q * 3) : 0;
      c.style.transform = `translate3d(${x}px,${y}px,0) rotate(${(1 - q) * (i % 2 ? 24 : -24)}deg) scale(${0.4 + 0.6 * easeOut(q)})`;
    });
    return { p, g };
  }
  function drawLootFx(state, visible) {
    const { ctx, st } = lootFx; ctx.clearRect(0, 0, st.w, st.h);
    if (!visible || RM) return;
    const { p, g } = state; const open = p >= 0.49;
    const rate = open ? (p < 0.7 ? 6 : 2) : (p > 0.3 ? 1 : 0.3);
    for (let r = 0; r < rate; r++) if (Math.random() < Math.min(1, rate)) sparksFx.push({ x: g.cx + (Math.random() - 0.5) * g.fw * (open ? 0.12 : 0.2), y: g.cy - (open ? g.fh * 0.06 : -g.fh * 0.02), vx: (Math.random() - 0.5) * (open ? 2.2 : 0.4), vy: -(open ? 1.5 + Math.random() * 4 : 0.2 + Math.random() * 0.5), life: 0, max: 60 + Math.random() * 90, r: 0.8 + Math.random() * 2.2, gold: open });
    ctx.globalCompositeOperation = 'lighter';
    for (let i = sparksFx.length - 1; i >= 0; i--) {
      const s = sparksFx[i]; s.life++; s.x += s.vx; s.y += s.vy; s.vy *= 0.992; s.vx *= 0.99;
      if (s.life > s.max) { sparksFx.splice(i, 1); continue; }
      const a = 1 - s.life / s.max;
      ctx.fillStyle = s.gold ? `rgba(255,${190 + Math.random() * 50 | 0},110,${a})` : `rgba(255,200,140,${a * 0.45})`;
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 6.283); ctx.fill();
    }
    ctx.globalCompositeOperation = 'source-over';
    if (sparksFx.length > 600) sparksFx.splice(0, sparksFx.length - 600);
  }

  /* ---------- GEAR: three class columns that change with item level ---------- */
  const HOW = [[/Blacksmith/, 'Crafted at the Blacksmith'], [/Hunter/, 'Crafted at the Hunter'], [/Alchemist/, 'Crafted at the Alchemist']];
  const STOPS = ['5', '10', '15', '20', '30', '40', '45'];
  const gear = $('#gear'), gearLv = $('#gearLv'), gearSteps = $('#gearSteps');
  gearSteps.innerHTML = STOPS.map(s => `<span>Lv ${s}</span>`).join('');
  const cols = $$('.gcol');
  const pick = (cls, lv) => {
    const list = SETS.filter(s => s[2] === cls && s[0] === lv);
    const crafted = list.filter(s => /Crafted/.test(s[3]));
    return { main: crafted[0] || list[0], also: list.filter(s => s !== (crafted[0] || list[0])) };
  };
  let curStop = -1;
  function setStop(i) {
    if (i === curStop) return; curStop = i;
    const lv = STOPS[i];
    gearLv.textContent = lv;
    [...gearSteps.children].forEach((s, j) => s.classList.toggle('on', j === i));
    cols.forEach(col => {
      const { main, also } = pick(col.dataset.cls, lv);
      const body = col.querySelector('.gc-body');
      if (!main) { body.innerHTML = ''; return; }
      const how = (HOW.find(([re]) => re.test(main[3])) || [, main[3].split(';')[0]])[1];
      body.innerHTML = `${main[6] ? `<img src="${main[6]}" alt="" width="128" height="128">` : ''}<p class="gc-name">${main[1]}</p><div class="gc-stats"><span><b>${main[4]}</b>physical</span><span><b>${main[5]}</b>magical</span></div><p class="gc-how">${how}</p>${also.length ? `<p class="gc-also">Also at this level: ${also.map(s => s[1].replace(/ Set$/, '')).join(', ')}</p>` : ''}`;
      if (!RM) { body.classList.remove('swap'); void body.offsetWidth; body.classList.add('swap'); }
    });
  }
  const GEAR_IN = 0.3, GEAR_STEP = 0.7;
  const gearPin = $('#gearPin');
  function sizeGear() { gearPin.style.height = RM ? '' : `calc(100svh * ${(1 + GEAR_IN + STOPS.length * GEAR_STEP + 0.3).toFixed(2)})`; }
  function renderGear() {
    const { u } = pinState(gearPin);
    setStop(clamp(Math.floor((u - GEAR_IN) / GEAR_STEP), 0, STOPS.length - 1));
  }
  setStop(0);

  /* ---------- WORLD ---------- */
  const worldIntro = $('.world-intro'), video = $('.world-video');
  function renderWorld() {
    const r = worldIntro.getBoundingClientRect();
    const t = clamp(1 - r.bottom / (innerHeight + r.height), 0, 1);
    video.style.setProperty('--vz', (1.14 - 0.12 * t).toFixed(4));
  }
  new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting && !RM) video.play().catch(() => {}); else video.pause(); })).observe(worldIntro);
  if (RM) { video.removeAttribute('autoplay'); video.pause(); }

  /* ---------- STORY ---------- */
  const tl = $('#timeline'), tlFill = $('#tlFill'), tlYear = $('#tlYear');
  const tlItems = $$('.tl-list li');
  let lastYear = '';
  function renderStory() {
    const r = tl.getBoundingClientRect();
    tlFill.style.height = (clamp((innerHeight * 0.5 - r.top) / r.height, 0, 1) * 100) + '%';
    let cur = tlItems[0];
    tlItems.forEach(li => { if (li.getBoundingClientRect().top < innerHeight * 0.55) cur = li; });
    const y = cur.dataset.year;
    if (y !== lastYear) {
      lastYear = y; tlYear.textContent = y;
      tlYear.parentElement.querySelector('small').style.visibility = /^\d+$/.test(y) ? 'visible' : 'hidden';
      if (!RM) tlYear.animate([{ opacity: 0, transform: 'translateY(16px)' }, { opacity: 1, transform: 'none' }], { duration: 450, easing: 'cubic-bezier(.2,.7,.2,1)' });
    }
  }
  $$('.egg').forEach(b => b.addEventListener('click', () => b.setAttribute('aria-pressed', b.getAttribute('aria-pressed') !== 'true')));

  /* ---------- loop ---------- */
  function frameLoop() {
    if (vis(cover)) renderCover();
    if (!RM && vis(parade)) renderParade();
    if (vis(skills)) { if (!RM) renderSkillsTour(); stepVB(); }
    if (!RM && vis(loot)) drawLootFx(renderLoot(), true); else drawLootFx(null, false);
    if (!RM && vis(gearPin)) renderGear();
    renderWorld(); renderStory(); renderBackdrop(); sweepReveals();
    requestAnimationFrame(frameLoop);
  }
  function sizeParade() { if (!RM) parade.style.height = `calc(100svh * ${(INTRO + NB * STEP + 1.3).toFixed(2)})`; }
  function onResize() { coverFx.resize(); fog.resize(); lootFx.resize(); sizeParade(); sizeSkills(); sizeGear(); }
  addEventListener('resize', onResize);
  addEventListener('load', sizeGear);
  onResize();
  requestAnimationFrame(frameLoop);
})();
