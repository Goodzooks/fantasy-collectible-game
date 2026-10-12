// Card data — edit this file to add or change cards.
// rarity must be one of: Common, Rare, Epic, Legendary
window.RARITIES = [
  { name: "Common",    weight: 60, color: "#9aa0a6" },
  { name: "Rare",      weight: 27, color: "#3b82f6" },
  { name: "Epic",      weight: 10, color: "#a855f7" },
  { name: "Legendary", weight: 3,  color: "#f59e0b" }
];

window.CARDS = [
  { id: "brannoc", name: "Brannoc the Ember Knight", type: "Character", cls: "Warrior", element: "Fire", rarity: "Epic", emoji: "🐉", image: "images/brannoc.webp" },
  { id: "lyra", name: "Lyra Tidecaller", type: "Character", cls: "Mage", element: "Water", rarity: "Legendary", emoji: "🦑", image: "images/lyra.webp" },
  { id: "pip", name: "Pip Mossfoot", type: "Character", cls: "Scout", element: "Nature", rarity: "Common", emoji: "🦌", image: "images/pip.webp" },
  { id: "emberbrand", name: "Emberbrand Sword", type: "Item", cls: "Weapon", element: "Fire", rarity: "Rare", emoji: "🦎", image: "images/emberbrand.webp" },
  { id: "moonwell", name: "Moonwell Amulet", type: "Item", cls: "Relic", element: "Light", rarity: "Epic", emoji: "🦉", image: "images/moonwell.webp" },
  { id: "draught", name: "Minor Healing Draught", type: "Item", cls: "Consumable", element: "Nature", rarity: "Common", emoji: "🐸", image: "images/draught.webp" },
  // Placeholders (not from the design doc) — rename/replace freely
  { id: "grub", name: "Grub the Tunnel Rat", type: "Character", cls: "Rogue", element: "Earth", rarity: "Common", emoji: "🐀", placeholder: true, image: "images/grub.webp" },
  { id: "sela", name: "Sela Windrider", type: "Character", cls: "Ranger", element: "Air", rarity: "Rare", emoji: "🦅", placeholder: true, image: "images/sela.webp" },
  { id: "oakshield", name: "Oakbark Shield", type: "Item", cls: "Armor", element: "Nature", rarity: "Common", emoji: "🐢", placeholder: true, image: "images/oakshield.webp" },
  { id: "crown", name: "Crown of the Ashen King", type: "Item", cls: "Relic", element: "Shadow", rarity: "Legendary", emoji: "🐺", placeholder: true, image: "images/crown.webp" }
];
