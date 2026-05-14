const fs = require('fs');

const data = fs.readFileSync('script.js', 'utf8');

const regex = /const products = (\[[\s\S]*?\]);/;
const match = data.match(regex);

if (match) {
    let products = eval(match[1]);

    const adsCorrections = {
        "cafe-au-lait": { category: "Decorative", bloomSize: "8-10\"" },
        "cafe-au-lait-rose": { category: "Decorative", bloomSize: "8-10\"" },
        "cafe-au-lait-royal": { category: "Decorative", bloomSize: "8-10\"" },
        "break-out": { category: "Decorative", bloomSize: "8-10\"" },
        "fleurel": { category: "Decorative", bloomSize: "8-10\"" },
        "rm-baby-girl": { category: "Ball", bloomSize: "2-3\"" },
        "lee-zesty-peach": { category: "Ball", bloomSize: "3-4\"" },
        "lee-dragon-fruit-frizz": { category: "Laciniated", bloomSize: "4-6\"" },
        "hollyhill-daydream": { category: "Waterlily", bloomSize: "4-6\"" },
        "cornel-red": { category: "Ball", bloomSize: "3-4\"" },
        "hollyhill-black-beauty": { category: "Decorative", bloomSize: "4-6\"" },
        "jesse-g": { category: "Ball", bloomSize: "2-3\"" },
        "kelsey-bev": { category: "Collarette", bloomSize: "2-4\"" },
        "gabbies-wish": { category: "Decorative", bloomSize: "4-6\"" },
        "enchantress": { category: "Decorative", bloomSize: "4-6\"" },
        "chloe-janae": { category: "Decorative", bloomSize: "4-6\"" },
        "coralie": { category: "Waterlily", bloomSize: "4-6\"" },
        "orange-globe": { category: "Ball", bloomSize: "3-4\"" },
        "larks-ebb": { category: "Waterlily", bloomSize: "4-6\"" },
        "cornel-bronze": { category: "Ball", bloomSize: "3-4\"" },
        "totally-tangerine": { category: "Anemone", bloomSize: "2-4\"" },
        "citron-du-cap": { category: "Cactus", bloomSize: "6-8\"" },
        "sun-kissed": { category: "Cactus", bloomSize: "4-6\"" },
        "diva": { category: "Decorative", bloomSize: "4-6\"" },
        "isabel": { category: "Pompon", bloomSize: "up to 2\"" },
        "hollyhill-miss-white": { category: "Cactus", bloomSize: "4-6\"" },
        "midnight-moon": { category: "Collarette", bloomSize: "2-4\"" },
        "dorothy-r": { category: "Decorative", bloomSize: "6-8\"" },
        "caitlins-joy": { category: "Ball", bloomSize: "3-4\"" },
        "20th-ave-softer-peach": { category: "Decorative", bloomSize: "4-6\"" },
        "sandia-bertha": { category: "Decorative", bloomSize: "4-6\"" },
        "ka-keltie-rose": { category: "Decorative", bloomSize: "4-6\"" },
        "ka-rosie-jo": { category: "Decorative", bloomSize: "4-6\"" },
        "ka-guava": { category: "Waterlily", bloomSize: "4-6\"" },
        "ka-apricot-jam": { category: "Decorative", bloomSize: "6-8\"" },
        "ka-mocha-katie": { category: "Decorative", bloomSize: "4-6\"" },
        "ka-mocha-maya": { category: "Decorative", bloomSize: "4-6\"" },
        "lees-ellis": { category: "Laciniated", bloomSize: "2-4\"" },
        "lees-suntan": { category: "Semi-Double", bloomSize: "2-4\"" },
        "lees-beech-glow": { category: "Decorative", bloomSize: "2-4\"" },
        "lees-sugaree": { category: "Decorative", bloomSize: "4-6\"" },
        "hollyhill-pink-martini": { category: "Cactus", bloomSize: "4-6\"" },
        "hapet-old-charm": { category: "Decorative", bloomSize: "4-6\"" },
        "levi-bluesmoke": { category: "Ball", bloomSize: "3-4\"" }
    };

    products = products.map(product => {
        if (adsCorrections[product.id]) {
            return { ...product, ...adsCorrections[product.id] };
        }
        return product;
    });

    const newData = data.replace(regex, 'const products = ' + JSON.stringify(products, null, 4) + ';');
    fs.writeFileSync('script.js', newData);
    console.log("Updated script.js with official ADS data.");
} else {
    console.log("Could not find products array.");
}
