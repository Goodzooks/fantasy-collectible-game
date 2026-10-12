(function (root) {
  const KEY = "fcg-save-v1";
  function today(d) { d = d || new Date(); return d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate(); }
  function pickRarity(rarities, cards, rnd) {
    const avail = rarities.filter(r => cards.some(c => c.rarity === r.name));
    const total = avail.reduce((s, r) => s + r.weight, 0);
    let x = rnd() * total;
    for (const r of avail) { if ((x -= r.weight) < 0) return r.name; }
    return avail[avail.length - 1].name;
  }
  function openPack(rarities, cards, rnd) {
    rnd = rnd || Math.random;
    const rar = pickRarity(rarities, cards, rnd);
    const pool = cards.filter(c => c.rarity === rar);
    return pool[Math.floor(rnd() * pool.length)];
  }
  const logic = { today, pickRarity, openPack };
  if (typeof module !== "undefined") { module.exports = logic; return; }

  const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || { owned: {}, lastPack: null }; } catch { return { owned: {}, lastPack: null }; } };
  const save = s => localStorage.setItem(KEY, JSON.stringify(s));
  let state = load();
  const $ = id => document.getElementById(id);
  const color = r => RARITIES.find(x => x.name === r).color;

  function cardHTML(c, n) {
    if (!n) return `<div class="card locked"><div class="art">❔</div><div class="name">???</div><div class="meta">${c.rarity}</div></div>`;
    return `<div class="card" style="border-color:${color(c.rarity)}"><div class="art">${c.image ? `<img src="${c.image}" alt="${c.name}" onerror="this.replaceWith('${c.emoji}')">` : c.emoji}</div>
      <div class="name">${c.name}</div><div class="meta">${c.type} · ${c.cls} · ${c.element}</div>
      <div class="rarity" style="color:${color(c.rarity)}">${c.rarity}</div><div class="count">×${n}</div></div>`;
  }
  function render() {
    const total = RARITIES.reduce((s, r) => s + r.weight, 0);
    $("rates").innerHTML = RARITIES.map(r => `<li><span style="color:${r.color}">${r.name}</span>: ${(r.weight/total*100).toFixed(0)}%</li>`).join("");
    const owned = CARDS.filter(c => state.owned[c.id]).length;
    $("progress").textContent = `Collected ${owned} / ${CARDS.length}`;
    $("grid").innerHTML = RARITIES.slice().reverse().map(r => {
      const tier = CARDS.filter(c => c.rarity === r.name);
      if (!tier.length) return "";
      const got = tier.filter(c => state.owned[c.id]).length;
      return `<h3 class="tier" style="color:${r.color}">${r.name} <span>${got} / ${tier.length}</span></h3>
        <div class="tier-grid">${tier.map(c => cardHTML(c, state.owned[c.id])).join("")}</div>`;
    }).join("");
    const used = state.lastPack === today();
    $("open").disabled = used;
    $("open").textContent = used ? "Come back tomorrow for another pack" : "Open today's free pack";
  }
  $("open").onclick = () => {
    if (state.lastPack === today()) return;
    const c = openPack(RARITIES, CARDS);
    state.owned[c.id] = (state.owned[c.id] || 0) + 1;
    state.lastPack = today(); save(state);
    $("reveal").innerHTML = `<p>You got:</p>` + cardHTML(c, state.owned[c.id]);
    render();
  };
  $("reset-day").onclick = () => { state.lastPack = null; save(state); render(); };
  $("reset-all").onclick = () => { if (confirm("Erase collection?")) { state = { owned: {}, lastPack: null }; save(state); $("reveal").innerHTML = ""; render(); } };
  render();
})(this);
