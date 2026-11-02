/* 霧鎖王國 介紹頁：滾動場景與互動（main.js 由 build.py 從本檔產生） */
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
  const fmt = n => n.toLocaleString('en-US');
  function progressOf(el) {
    const r = el.getBoundingClientRect();
    const total = r.height - innerHeight;
    return total <= 0 ? 0 : clamp(-r.top / total, 0, 1);
  }
  const vis = el => { const r = el.getBoundingClientRect(); return r.bottom > 0 && r.top < innerHeight; };

  /* ---------- reveal ---------- */
  const groups = new Map();
  $$('[data-rv]').forEach(el => {
    const p = el.parentElement; const i = groups.get(p) || 0; groups.set(p, i + 1);
    el.style.setProperty('--d', Math.min(i, 4) * 70 + 'ms');
  });
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
  const REG = {
    'springlands': ['長春平原', 'Springlands'], 'revelwood': ['喧囂森林', 'Revelwood'], 'nomad-highlands': ['遊牧高地', 'Nomad Highlands'],
    'kindlewastes': ['星火荒原', 'Kindlewastes'], 'albaneve-summits': ['阿爾班伊維高峰', 'Albaneve Summits'], 'veilwater-basin': ['面紗水盆地', 'Veilwater Basin'],
    'cinders-cradle': ['餘燼搖籃', "Cinder's Cradle"], 'hollow-halls': ['Hollow Halls', '霧幕下的空洞地城'],
  };
  const parade = $('#bosses');
  const bosses = $$('#bossList .boss');
  const bgs = $$('.pv-bg');
  const intro = $('#pvIntro'), regionEl = $('#pvRegion'), pvBar = $('#pvBar');
  const INTRO = 1.4, STEP = 0.66;
  const NB = bosses.length;
  function sizeParade() { if (!RM) parade.style.height = `calc(100svh * ${(INTRO + NB * STEP + 1.3).toFixed(2)})`; }
  const fog = makeFx($('#fogFx'));
  const blobs = Array.from({ length: 14 }, () => ({ x: Math.random(), y: Math.random(), r: 0.25 + Math.random() * 0.35, vx: (Math.random() - 0.5) * 0.0006, vy: -0.0002 - Math.random() * 0.0005, a: 0.25 + Math.random() * 0.35 }));
  let curBoss = -2, curReg = '';
  function setRegion(reg) {
    if (reg === curReg) return;
    curReg = reg;
    bgs.forEach(b => b.classList.toggle('on', b.dataset.reg === reg));
    if (REG[reg]) { regionEl.querySelector('b').textContent = REG[reg][0]; regionEl.querySelector('span').textContent = REG[reg][1]; regionEl.classList.add('on'); }
    else regionEl.classList.remove('on');
  }
  function renderParade() {
    const total = parade.offsetHeight - innerHeight;
    const y = clamp(-parade.getBoundingClientRect().top, 0, total);
    const u = y / innerHeight; // screens scrolled inside parade
    // intro
    const ia = u < INTRO ? (u < 0.15 ? 1 : 1 - smooth(clamp((u - 0.75) / (INTRO - 0.75), 0, 1))) : 0;
    intro.style.opacity = ia.toFixed(3);
    intro.style.transform = `translateY(${(1 - ia) * -30}px) scale(${1 + (1 - ia) * 0.04})`;
    const bu = (u - INTRO) / STEP; // boss units
    const idx = bu < 0 ? -1 : Math.min(NB - 1, Math.floor(bu));
    setRegion(idx < 0 ? 'shroud' : bosses[idx].dataset.reg);
    bosses.forEach((b, i) => {
      const t = bu - i; // 0..1 while active
      if (t < -0.05 || t > 1.05) { if (b.classList.contains('on')) { b.classList.remove('on'); b.style.opacity = 0; } return; }
      b.classList.add('on');
      const last = i === NB - 1;
      const enter = smooth(clamp(t / 0.28, 0, 1));
      const leave = last ? 0 : smooth(clamp((t - 0.78) / 0.22, 0, 1));
      const dir = b.classList.contains('b-l') ? -1 : 1;
      const img = b.firstElementChild, txt = b.lastElementChild;
      const mob = isMobile();
      img.style.transform = `translate3d(${(1 - enter) * dir * (mob ? 60 : 160) + leave * dir * -60}px,${(1 - enter) * 30}px,0) scale(${0.92 + 0.08 * enter})`;
      txt.style.transform = `translate3d(${(1 - enter) * -dir * (mob ? 40 : 90) + leave * -dir * 40}px,0,0)`;
      b.style.opacity = (enter * (1 - leave)).toFixed(3);
    });
    curBoss = idx;
    pvBar.style.width = (clamp(bu / NB, 0, 1) * 100) + '%';
    // background drift
    const on = bgs.find(b => b.classList.contains('on'));
    if (on && !RM) on.style.transform = `scale(${1.02 + 0.03 * Math.sin(u * 0.6)}) translateX(${Math.sin(u * 0.9) * 1.2}%)`;
    // fog
    const { ctx, st } = fog;
    ctx.clearRect(0, 0, st.w, st.h);
    if (RM) return;
    const strength = idx < 0 ? 1 : 0.35;
    ctx.globalCompositeOperation = 'lighter';
    blobs.forEach(o => {
      o.x += o.vx; o.y += o.vy; if (o.y < -0.4) { o.y = 1.3; o.x = Math.random(); }
      const R = o.r * Math.max(st.w, st.h);
      ctx.fillStyle = `rgba(150,22,40,${o.a * 0.22 * strength})`;
      ctx.beginPath(); ctx.arc(o.x * st.w, o.y * st.h, R, 0, 6.283); ctx.fill();
    });
    ctx.globalCompositeOperation = 'source-over';
  }
  // starting background for the transition
  (() => {
    const img = document.createElement('img');
    img.className = 'pv-bg'; img.dataset.reg = 'shroud'; img.src = 'media/bg/shroud.jpg'; img.alt = ''; img.setAttribute('aria-hidden', 'true');
    $('.pv-bgs').prepend(img); bgs.unshift(img);
  })();
  $('#fogFx').style.filter = 'blur(40px)';

  /* ---------- SKILL TREE (1.0 game data) ---------- */
  const ARCH = [
    ['生存者', 'Survivor', 'R', 225], ['馴獸師', 'Beastmaster', 'R', 255], ['遊俠', 'Ranger', 'R', 285], ['刺客', 'Assassin', 'R', 315],
    ['詭術師', 'Trickster', 'M', 345], ['巫師', 'Wizard', 'M', 15], ['治療者', 'Healer', 'M', 45], ['戰鬥法師', 'Battlemage', 'M', 75],
    ['守護者', 'Guardian', 'W', 105], ['戰士', 'Warrior', 'W', 135], ['野蠻人', 'Barbarian', 'W', 165], ['運動員', 'Athlete', 'W', 195],
  ];
  const CLS = ['N', 'W', 'M', 'R'];
  const COL = { N: '#ffb100', W: '#d4473f', M: '#4f95e0', R: '#74c23a' };
  const TYPE = ['起點火花', '屬性節點', '被動技能', '主動技能'];
  const MAXPTS = 212;
  const nodes = TREE.n.map(([x, y, c, t, name, cost, lv, arch, icon, desc], i) => ({ i, x, y, c: CLS[c], t, name, cost, lv, arch, icon, desc, level: 0, adj: [] }));
  TREE.l.forEach(([a, b]) => { nodes[a].adj.push(b); nodes[b].adj.push(a); });
  const svg = $('#tree');
  const NS = 'http://www.w3.org/2000/svg';
  const mk = (tag, attrs, parent) => { const n = document.createElementNS(NS, tag); for (const k in attrs) n.setAttribute(k, attrs[k]); parent && parent.appendChild(n); return n; };
  const gL = mk('g', {}, svg), gN = mk('g', {}, svg), gA = mk('g', {}, svg);
  const linkEls = TREE.l.map(([a, b]) => {
    const A = nodes[a], B = nodes[b];
    const c = A.c !== 'N' ? A.c : B.c;
    const l = mk('line', { x1: A.x, y1: A.y, x2: B.x, y2: B.y, class: 'lk' }, gL);
    l.style.setProperty('--c', COL[c]); return { l, a, b };
  });
  const R = [70, 40, 58, 92];
  nodes.forEach(n => {
    const g = mk('g', { class: 'nd', tabindex: '0', role: 'button', 'aria-label': `${n.name}，${TYPE[n.t]}` }, gN);
    g.style.setProperty('--c', COL[n.c]);
    mk('circle', { cx: n.x, cy: n.y, r: R[n.t], class: 'b' }, g);
    if (n.icon) mk('image', { href: 'media/' + n.icon, x: n.x - 70, y: n.y - 70, width: 140, height: 140 }, g);
    n.el = g;
    g.addEventListener('click', () => clickNode(n));
    g.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); clickNode(n); } });
    g.addEventListener('mouseenter', () => showNode(n));
    g.addEventListener('focus', () => showNode(n));
  });
  const archBtns = $('#archBtns');
  ARCH.forEach(([zh, en, c, ang], k) => {
    const a = ang * Math.PI / 180, r = 2650;
    const t = mk('text', { x: Math.cos(a) * r, y: Math.sin(a) * r + 50, 'text-anchor': 'middle', class: 'al' }, gA);
    t.style.setProperty('--c', COL[c]); t.textContent = zh;
    t.addEventListener('click', () => focusArch(k));
    const b = document.createElement('button');
    b.type = 'button'; b.textContent = zh; b.title = en; b.style.setProperty('--c', COL[c]); b.setAttribute('aria-pressed', 'false');
    b.addEventListener('click', () => focusArch(b.getAttribute('aria-pressed') === 'true' ? -1 : k));
    archBtns.appendChild(b);
  });
  let vb = [-2900, -2900, 5800, 5800], vbAnim = null;
  function animateVB(to) {
    if (RM) { vb = to; svg.setAttribute('viewBox', to.join(' ')); return; }
    const from = vb.slice(), t0 = performance.now();
    cancelAnimationFrame(vbAnim);
    const step = now => {
      const t = easeOut(clamp((now - t0) / 650, 0, 1));
      vb = from.map((v, i) => lerp(v, to[i], t));
      svg.setAttribute('viewBox', vb.map(v => v.toFixed(1)).join(' '));
      if (t < 1) vbAnim = requestAnimationFrame(step);
    };
    vbAnim = requestAnimationFrame(step);
  }
  function focusArch(k) {
    [...archBtns.children].forEach((b, j) => b.setAttribute('aria-pressed', j === k));
    nodes.forEach(n => n.el.classList.toggle('dim', k >= 0 && n.arch !== k && n.t !== 0));
    if (k < 0) { animateVB([-2900, -2900, 5800, 5800]); return; }
    const a = ARCH[k][3] * Math.PI / 180, cx = Math.cos(a) * 1650, cy = Math.sin(a) * 1650, s = 2900;
    animateVB([cx - s / 2, cy - s / 2, s, s]);
    const sig = nodes.filter(n => n.arch === k && n.t === 3).sort((p, q) => Math.hypot(q.x, q.y) - Math.hypot(p.x, p.y))[0];
    if (sig) showNode(sig, true);
  }
  $('#treeAll').addEventListener('click', () => focusArch(-1));
  const learned = () => nodes.filter(n => n.level > 0);
  const points = () => nodes.reduce((s, n) => s + n.level * n.cost, 0);
  const available = n => n.t === 0 || n.adj.some(j => nodes[j].level > 0);
  function prune() {
    // drop learned nodes that are no longer connected to a learned start spark
    const seen = new Set(); const q = nodes.filter(n => n.t === 0 && n.level > 0).map(n => n.i);
    q.forEach(i => seen.add(i));
    while (q.length) { const i = q.shift(); nodes[i].adj.forEach(j => { if (nodes[j].level > 0 && !seen.has(j)) { seen.add(j); q.push(j); } }); }
    nodes.forEach(n => { if (n.level > 0 && !seen.has(n.i)) n.level = 0; });
  }
  let selNode = null;
  function clickNode(n) {
    showNode(n, true);
    if (!available(n) && n.level === 0) { n.el.animate && !RM && n.el.animate([{ opacity: 1 }, { opacity: 0.3 }, { opacity: 1 }], { duration: 300 }); flashMsg('要先點亮相鄰的節點'); return; }
    if (n.level < n.lv) {
      if (points() + n.cost > MAXPTS) { flashMsg('已經用滿 212 點'); return; }
      n.level++;
    } else { n.level = 0; prune(); }
    syncTree(); showNode(n, true);
  }
  let msgT = 0;
  function flashMsg(m) { const c = $('#ncCost'); c.textContent = m; c.style.color = 'var(--flame-hi)'; clearTimeout(msgT); msgT = setTimeout(() => { c.style.color = ''; showNode(selNode, true); }, 1400); }
  function syncTree() {
    nodes.forEach(n => {
      n.el.classList.toggle('on', n.level > 0);
      n.el.classList.toggle('av', n.level === 0 && available(n));
      n.el.setAttribute('aria-pressed', n.level > 0);
      let t = n.el.querySelector('.lvl');
      if (n.lv > 1 && n.level > 0) {
        if (!t) { t = mk('text', { x: n.x + R[n.t] * 0.8, y: n.y - R[n.t] * 0.8, class: 'lvl' }, n.el); }
        t.textContent = n.level;
      } else if (t) t.remove();
    });
    linkEls.forEach(({ l, a, b }) => l.classList.toggle('on', nodes[a].level > 0 && nodes[b].level > 0));
    const by = { W: 0, M: 0, R: 0 }, per = {};
    nodes.forEach(n => { if (n.level > 0) { if (by[n.c] !== undefined) by[n.c] += n.level * n.cost; if (n.arch >= 0) per[n.arch] = (per[n.arch] || 0) + n.level * n.cost; } });
    const P = points();
    $('#buildPts').textContent = `${P} / ${MAXPTS} 點`;
    ['W', 'M', 'R'].forEach(c => { $('#m' + c).style.width = Math.min(100, by[c] / 80 * 100) + '%'; });
    const top = Object.entries(per).sort((a, b) => b[1] - a[1]).map(([k]) => ARCH[k][0]);
    $('#buildName').textContent = !top.length ? '從中央的火花開始點。' : top.length === 1 ? `你的流派：純${top[0]}` : `你的流派：${top[0]} × ${top[1]}${top.length > 2 ? `，再帶點${top[2]}` : ''}`;
  }
  function showNode(n, sel) {
    if (!n) return;
    if (sel) { if (selNode) selNode.el.classList.remove('sel'); selNode = n; n.el.classList.add('sel'); }
    const arch = n.arch >= 0 ? `・${ARCH[n.arch][0]} ${ARCH[n.arch][1]}` : (n.c === 'N' ? '・中央' : '');
    $('#ncType').textContent = TYPE[n.t] + arch;
    $('#ncName').textContent = n.name;
    $('#ncDesc').innerHTML = n.desc.map(d => `<p>${d}</p>`).join('');
    $('#ncCost').textContent = `每級 ${n.cost} 點${n.lv > 1 ? `，最多 ${n.lv} 級` : ''}${n.level ? `・目前 ${n.level} 級` : ''}`;
  }
  $('#buildReset').addEventListener('click', () => { nodes.forEach(n => n.level = 0); syncTree(); });
  syncTree();
  showNode(nodes.find(n => n.name === 'Airborne Architect') || nodes[0], true);

  /* ---------- LOOT ---------- */
  const loot = $('#loot'), frame = $('#chestFrame'), openImg = $('#chestOpen');
  const keyGlow = $('#keyGlow'), seam = $('#seam'), flash = $('#flash');
  const lootA = $('#lootA'), lootB = $('#lootB'), lootNote = $('#lootNote');
  const cards = $$('#lootCards .lc');
  const lootFx = makeFx($('#lootFx'));
  const sparks = [];
  function chestGeom() {
    const W = innerWidth, H = innerHeight, mob = isMobile();
    const fw = mob ? W * 2.3 : Math.max(W, H * 1.7872), fh = fw / 1.7872;
    const top = mob ? H * 0.46 : H / 2;
    return { W, H, fw, fh, cx: (W - fw) / 2 + fw * 0.486, cy: top - fh / 2 + fh * 0.6 };
  }
  function renderLoot() {
    const p = progressOf(loot), g = chestGeom();
    const push = p < 0.49 ? 1 + 0.14 * smooth(clamp(p / 0.46, 0, 1)) : 1.14 - 0.1 * smooth(clamp((p - 0.49) / 0.2, 0, 1));
    let sx = 0, sy = 0;
    if (p > 0.3 && p < 0.49) { const amp = 6 * smooth((p - 0.3) / 0.19); const tt = performance.now() / 38; sx = Math.sin(tt * 1.7) * amp; sy = Math.cos(tt * 2.3) * amp * 0.6; }
    frame.style.transform = `translate(calc(-50% + ${sx}px), calc(-50% + ${sy}px)) scale(${push})`;
    keyGlow.style.setProperty('--k', p < 0.49 ? (0.3 + 1.4 * smooth(clamp(p / 0.45, 0, 1))).toFixed(3) : '0');
    seam.style.setProperty('--s', p < 0.49 ? smooth(clamp((p - 0.3) / 0.17, 0, 1)).toFixed(3) : '0');
    flash.style.opacity = clamp(1 - Math.abs(p - 0.49) / 0.035, 0, 1).toFixed(3);
    openImg.style.opacity = p >= 0.49 ? 1 : 0;
    lootA.style.opacity = (1 - smooth(clamp((p - 0.22) / 0.1, 0, 1))).toFixed(3);
    const bIn = smooth(clamp((p - 0.6) / 0.1, 0, 1));
    lootB.style.opacity = bIn.toFixed(3); lootB.style.transform = `translateY(${(1 - bIn) * 20}px)`;
    lootNote.style.opacity = p > 0.72 ? 1 : 0;
    const mob = isMobile();
    const cw = mob ? 108 : 200, gap = mob ? 10 : 28;
    const rowW = cards.length * cw + (cards.length - 1) * gap;
    cards.forEach((c, i) => {
      const q = clamp((p - 0.52 - i * 0.03) / 0.12, 0, 1);
      const tx = g.W / 2 - rowW / 2 + i * (cw + gap);
      const ty = g.H - (mob ? 250 : 330);
      const x = lerp(g.cx - cw / 2, tx, easeOut(q));
      const y = lerp(g.cy - 90, ty, easeBack(q)) - Math.sin(Math.PI * q) * (mob ? 120 : 200);
      c.style.opacity = q > 0 ? Math.min(1, q * 3) : 0;
      c.style.transform = `translate3d(${x}px,${y}px,0) rotate(${(1 - q) * (i % 2 ? 22 : -22)}deg) scale(${0.4 + 0.6 * easeOut(q)})`;
      const n = c.querySelector('.lc-n'); const v = Math.round(+n.dataset.n * easeOut(clamp((q - 0.4) / 0.6, 0, 1)));
      n.textContent = fmt(v);
    });
    return { p, g };
  }
  function drawLootFx(state, visible) {
    const { ctx, st } = lootFx; ctx.clearRect(0, 0, st.w, st.h);
    if (!visible || RM) return;
    const { p, g } = state; const open = p >= 0.49;
    const rate = open ? (p < 0.7 ? 6 : 2) : (p > 0.3 ? 1 : 0.3);
    for (let r = 0; r < rate; r++) if (Math.random() < Math.min(1, rate)) sparks.push({ x: g.cx + (Math.random() - 0.5) * g.fw * (open ? 0.12 : 0.2), y: g.cy - (open ? g.fh * 0.06 : -g.fh * 0.02), vx: (Math.random() - 0.5) * (open ? 2.2 : 0.4), vy: -(open ? 1.5 + Math.random() * 4 : 0.2 + Math.random() * 0.5), life: 0, max: 60 + Math.random() * 90, r: 0.8 + Math.random() * 2.2, gold: open });
    ctx.globalCompositeOperation = 'lighter';
    for (let i = sparks.length - 1; i >= 0; i--) {
      const s = sparks[i]; s.life++; s.x += s.vx; s.y += s.vy; s.vy *= 0.992; s.vx *= 0.99;
      if (s.life > s.max) { sparks.splice(i, 1); continue; }
      const a = 1 - s.life / s.max;
      ctx.fillStyle = s.gold ? `rgba(255,${190 + Math.random() * 50 | 0},110,${a})` : `rgba(255,200,140,${a * 0.45})`;
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 6.283); ctx.fill();
    }
    ctx.globalCompositeOperation = 'source-over';
    if (sparks.length > 600) sparks.splice(0, sparks.length - 600);
  }
  if (RM) cards.forEach(c => { const n = c.querySelector('.lc-n'); n.textContent = fmt(+n.dataset.n); });

  /* ---------- GEAR ladder (real armor sets) ---------- */
  const HOW = [
    [/Crafted at the Blacksmith/, '鐵匠製作'], [/Crafted at the Hunter/, '獵人製作'], [/Crafted at the Alchemist/, '煉金術士製作'],
    [/Crafted at the Ancient Researcher/, '遠古研究員製作'], [/Crafted by hand/, '徒手製作'], [/Drops from chests and bosses/, '寶箱與 BOSS 掉落'],
    [/Drops in the Hollow Halls/, 'Hollow Halls 掉落'], [/Found near The Pike/, 'The Pike 附近取得'],
  ];
  const howZh = s => s.split(';').map(x => { x = x.trim(); const m = HOW.find(([re]) => re.test(x)); return m ? m[1] : x; }).join('、');
  const NOTE = { Warrior: '主屬性力量與體質，物理護甲最高。', Ranger: '主屬性敏捷，物理與魔法護甲平均。弓手、遊俠、刺客都走這條。', Mage: '主屬性智力，魔法護甲最高。', Other: '不分職業或多職業通用的套裝，包含 Hollow Halls 掉落與 Vorgoth 的套裝。' };
  const ladder = $('#ladder'), gearNote = $('#gearNote');
  function setGear(cls, focusBtn) {
    $$('#gearTabs button').forEach(b => { const on = b.dataset.cls === cls; b.setAttribute('aria-selected', on); b.tabIndex = on ? 0 : -1; if (on && focusBtn) b.focus(); });
    const list = SETS.filter(s => cls === 'Other' ? (s[2] === 'Any' || s[2] === 'Multi-class') : s[2] === cls);
    gearNote.textContent = `${list.length} 套・${NOTE[cls]}`;
    const groups = []; list.forEach(s => { let g = groups.find(x => x.lv === s[0]); if (!g) groups.push(g = { lv: s[0], items: [] }); g.items.push(s); });
    let d = 0;
    ladder.innerHTML = groups.map(g => `<li class="lv"><p class="lv-h">Lv ${g.lv}<small>${g.items.length} 套</small></p>${g.items.map(s => `<div class="set" style="--d:${(d++) * 35}ms">${s[6] ? `<img src="${s[6]}" alt="" loading="lazy" width="96" height="96">` : ''}<b>${s[1]}</b><span>物理 ${s[4]}／魔法 ${s[5]}</span><span>${howZh(s[3])}</span></div>`).join('')}</li>`).join('');
    ladder.parentElement.scrollLeft = 0;
  }
  const tabs = $$('#gearTabs button');
  tabs.forEach((b, i) => {
    b.addEventListener('click', () => setGear(b.dataset.cls));
    b.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') setGear(tabs[(i + 1) % tabs.length].dataset.cls, true);
      if (e.key === 'ArrowLeft') setGear(tabs[(i + tabs.length - 1) % tabs.length].dataset.cls, true);
    });
  });
  setGear('Warrior');

  /* ---------- WORLD (region data from the game files) ---------- */
  const REGIONS = [
    ['springlands', '長春平原', 'Springlands・含 Low Meadows', '林地與草原。Fell 佔據霧幕低地，Scavenger 盤踞 Rookmore、Westcott 等廢棄城鎮；鐵匠、煉金術士、木匠、農夫與獵人都從這裡的 Ancient Vault 救出。', '烈焰 2', '3–9', '8.4 km²', '567–1,402 m'],
    ['revelwood', '喧囂森林', 'Revelwood・含黑沼澤 Blackmire', '茂密森林，餘火之谷的古都 Pikemead\'s Reach 就在裡面。子區域黑沼澤是一片沼地，喧囂森林的 Vukah 只住在那裡。', '烈焰 3', '11–15', '7.7 km²', '518–1,435 m'],
    ['nomad-highlands', '遊牧高地', 'Nomad Highlands', '霧幕之上的石灰岩斷崖，位在地圖正中央、與其他所有區域相鄰。Pillars of Creation 是兩座與遠古族有關的巨大火山。', '烈焰 4', '16–20', '5 km²', '556–1,165 m'],
    ['kindlewastes', '星火荒原', 'Kindlewastes', '曬透的砂岩方山、仙人掌與沙丘，峽谷底下滿是霧幕與 Fell。這裡從來不下雨。', '烈焰 5', '21–27', '9 km²', '528–1,288 m'],
    ['albaneve-summits', '阿爾班伊維高峰', 'Albaneve Summits', '冰封山脈，Howling Peak 高 1,999 m。海拔 1,328 m 以上會受凍，是唯一需要保暖衣物的區域。', '烈焰 6–7', '28–35', '9.6 km²', '552–1,999 m'],
    ['veilwater-basin', '面紗水盆地', 'Veilwater Basin', '熱帶湖泊、沙灘與叢林，石灰岩天然拱門下藏著遺跡。湖水是全圖最大片沒被霧幕污染的水域，Drak 族只住在這裡。', '烈焰 8–9', '37–45', '8 km²', '520–1,285 m'],
    ['cinders-cradle', '餘燼搖籃', "Cinder's Cradle・1.0 新區域", '地圖最北端。地面是熔岩與遺跡，天上是遠古族的浮空群島；Ancient Constructs 是這裡專屬的勢力。最終 BOSS 所在的 Mother Flame\'s Domicile 高 2,529 m，是全圖最高點。', '烈焰 10–11', '46–48', '7.5 km²', '565–2,529 m'],
  ];
  const track = $('#biomeTrack');
  track.innerHTML = REGIONS.map(r => `<article class="biome${r[0] === 'cinders-cradle' ? ' biome-new' : ''}"><img src="media/bg/${r[0]}.jpg" alt="${r[1]}的遊戲畫面" loading="lazy"><div class="biome-copy"><h3>${r[1]}</h3><p class="b-en">${r[2]}</p><p>${r[3]}</p><dl class="facts"><div><dt>開啟</dt><dd>${r[4]}</dd></div><div><dt>敵人等級</dt><dd>${r[5]}</dd></div><div><dt>面積</dt><dd>${r[6]}</dd></div><div><dt>海拔</dt><dd>${r[7]}</dd></div></dl></div></article>`).join('');
  const worldIntro = $('.world-intro'), video = $('.world-video'), biomes = $('#biomes'), bar = $('#biomeBar');
  const trackMax = () => { const last = track.lastElementChild; return Math.max(0, last.offsetLeft + last.offsetWidth + parseFloat(getComputedStyle(track).paddingLeft) - innerWidth); };
  function sizeBiomes() { biomes.style.height = isMobile() ? '' : (trackMax() + innerHeight * 1.25) + 'px'; }
  function renderWorld() {
    const r = worldIntro.getBoundingClientRect();
    const t = clamp(1 - r.bottom / (innerHeight + r.height), 0, 1);
    video.style.setProperty('--vz', (1.14 - 0.12 * t).toFixed(4));
    if (isMobile()) return;
    const e = clamp((progressOf(biomes) - 0.08) / 0.84, 0, 1);
    track.style.transform = `translate3d(${-e * trackMax()}px,0,0)`;
    bar.style.width = (e * 100) + '%';
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

  /* ---------- NAV / FINALE ---------- */
  const finale = $('.finale'), finBg = $('.finale-bg'), nav = $('#nav');
  const navLinks = $$('.nav-links a');
  const sections = navLinks.map(a => $(a.getAttribute('href')));
  function renderNav() {
    nav.classList.toggle('solid', scrollY > innerHeight * 0.6);
    let cur = -1;
    sections.forEach((s, i) => { if (s.getBoundingClientRect().top < innerHeight * 0.4) cur = i; });
    navLinks.forEach((a, i) => a.classList.toggle('on', i === cur));
    const fr = finale.getBoundingClientRect();
    finBg.style.setProperty('--fz', (1.16 - 0.14 * clamp(1 - fr.bottom / (innerHeight + fr.height), 0, 1)).toFixed(4));
  }

  /* ---------- loop ---------- */
  function frameLoop() {
    if (vis(cover)) renderCover();
    if (!RM && vis(parade)) renderParade();
    if (!RM && vis(loot)) drawLootFx(renderLoot(), true); else drawLootFx(null, false);
    renderWorld(); renderStory(); renderNav(); sweepReveals();
    requestAnimationFrame(frameLoop);
  }
  function onResize() { coverFx.resize(); fog.resize(); lootFx.resize(); sizeBiomes(); sizeParade(); }
  addEventListener('resize', onResize);
  addEventListener('load', sizeBiomes);
  onResize();
  requestAnimationFrame(frameLoop);
})();
