# Fantasy Collectible Game

A fantasy-world collectible game with characters and items.

Design doc: `docs/design-doc.docx`

## How to play (v1)

Open `index.html` in any browser — no install, build step, or server needed.

- Click **Open today's free pack** once per day to get one random card.
- Drop rates by rarity are shown on the page (Common 60%, Rare 27%, Epic 10%, Legendary 3%).
- Your collection shows every card; ones you don't own yet are greyed-out `???` silhouettes.
- Progress is saved in your browser (localStorage). **Dev tools** at the bottom can reset the daily pack or the whole collection.

## Adding cards

Edit `data.js` and add an entry to `CARDS`:

```js
{ id: "unique-id", name: "Card Name", type: "Character", cls: "Mage", element: "Fire", rarity: "Rare", emoji: "🔥", image: "images/unique-id.webp" }
```

`image` is optional (path to a picture; the emoji shows if it fails to load). `rarity` must match a name in `RARITIES`; change `weight` values there to tune drop rates. Cards marked `placeholder: true` are invented stand-ins, not from the design doc.

Run `node test.js` for a quick logic check.
