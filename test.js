const assert = require("assert"); global.window = {};
require("./data.js"); const { RARITIES, CARDS } = window; const g = require("./game.js");
const ids = new Set(CARDS.map(c => c.id)); assert.equal(ids.size, CARDS.length, "duplicate ids");
CARDS.forEach(c => assert(RARITIES.some(r => r.name === c.rarity), "bad rarity " + c.id));
const counts = {}; for (let i = 0; i < 100000; i++) { const c = g.openPack(RARITIES, CARDS); counts[c.rarity] = (counts[c.rarity]||0)+1; }
RARITIES.forEach(r => assert(Math.abs(counts[r.name]/1000 - r.weight) < 1.5, r.name + " rate off: " + counts[r.name]));
console.log("OK", counts);
