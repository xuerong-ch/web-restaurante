const fs = require('fs');

// 1. Fix menu_5.json category
const menu5Path = 'resources/menu_5.json';
const menu5 = JSON.parse(fs.readFileSync(menu5Path, 'utf8'));
menu5.items.forEach(item => {
  item.category = 'menus';
});
fs.writeFileSync(menu5Path, JSON.stringify(menu5, null, 2) + '\n');

// 2. Add 'menus' to categories.json
const catPath = 'src/data/categories.json';
const cat = JSON.parse(fs.readFileSync(catPath, 'utf8'));
cat.menus = {
  "es": "Menús Especiales",
  "en": "Set Menus",
  "de": "Spezial Menüs"
};
fs.writeFileSync(catPath, JSON.stringify(cat, null, 2) + '\n');

console.log('Done');