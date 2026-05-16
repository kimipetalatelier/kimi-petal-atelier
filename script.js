// Product Data
const products = [
    {
        "id": "caf-au-lait",
        "name": "Café au Lait",
        "category": "Decorative",
        "color": "Blush/Cream",
        "bloomSize": "8-10\"",
        "plantHeight": "4 ft",
        "price": 10,
        "image": "images/cafe_au_lait.png"
    },
    {
        "id": "caf-au-lait-ros",
        "name": "Café au Lait Rosé",
        "category": "Decorative",
        "color": "Rose Pink",
        "bloomSize": "8-10\"",
        "plantHeight": "4 ft",
        "price": 10,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "caf-au-lait-royal",
        "name": "Café au Lait Royal",
        "category": "Decorative",
        "color": "Soft Pink/Lavender",
        "bloomSize": "8-10\"",
        "plantHeight": "4 ft",
        "price": 10,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "break-out",
        "name": "Break Out",
        "category": "Decorative",
        "color": "Soft Pink/Yellow",
        "bloomSize": "8-10\"",
        "plantHeight": "4 ft",
        "price": 10,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "fleurel",
        "name": "Fleurel",
        "category": "Decorative",
        "color": "White",
        "bloomSize": "8-10\"",
        "plantHeight": "4 ft",
        "price": 10,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "ka-cinder-rose",
        "name": "Ka Cinder Rose",
        "category": "Decorative",
        "color": "Dusty Rose",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 30,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "rm-baby-girl",
        "name": "RM Baby Girl",
        "category": "Ball",
        "color": "Pink",
        "bloomSize": "2-3\"",
        "plantHeight": "3 ft",
        "price": 15,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "sandia-bliss",
        "name": "Sandia Bliss",
        "category": "Waterlily",
        "color": "Pink/Yellow",
        "bloomSize": "3-4\"",
        "plantHeight": "4 ft",
        "price": 15,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "lee-zesty-peach",
        "name": "Lee Zesty Peach",
        "category": "Ball",
        "color": "Peach",
        "bloomSize": "3-4\"",
        "plantHeight": "4 ft",
        "price": 12,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "lee-dragon-fruit-frizz",
        "name": "Lee Dragon Fruit Frizz",
        "category": "Laciniated",
        "color": "Pink",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 12,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "hollyhill-daydream",
        "name": "Hollyhill Daydream",
        "category": "Waterlily",
        "color": "Pink/White",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 15,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "cornel-red",
        "name": "Cornel Red",
        "category": "Ball",
        "color": "Dark Red",
        "bloomSize": "3-4\"",
        "plantHeight": "4 ft",
        "price": 8,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "hollyhill-black-beauty",
        "name": "Hollyhill Black Beauty",
        "category": "Decorative",
        "color": "Dark Red",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 8,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "jesse-g",
        "name": "Jesse G",
        "category": "Ball",
        "color": "Burgundy",
        "bloomSize": "2-3\"",
        "plantHeight": "4 ft",
        "price": 8,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "kelsey-bev",
        "name": "Kelsey Bev",
        "category": "Collarette",
        "color": "Pink/White",
        "bloomSize": "2-4\"",
        "plantHeight": "4 ft",
        "price": 8,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "gabbie-s-wish",
        "name": "Gabbie’s Wish",
        "category": "Waterlily",
        "color": "Pink",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 8,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "enchantress",
        "name": "Enchantress",
        "category": "Decorative",
        "color": "Pink",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 8,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "chloe-janae",
        "name": "Chloe Janae",
        "category": "Decorative",
        "color": "Peach",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 8,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "coralie",
        "name": "Coralie",
        "category": "Waterlily",
        "color": "Pink",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 10,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "orange-globe",
        "name": "Orange Globe",
        "category": "Ball",
        "color": "Orange",
        "bloomSize": "3-4\"",
        "plantHeight": "4 ft",
        "price": 10,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "larks-ebb",
        "name": "Larks’ Ebb",
        "category": "Waterlily",
        "color": "Pink/Yellow",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 8,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "cornel-bronze",
        "name": "Cornel Bronze",
        "category": "Ball",
        "color": "Bronze",
        "bloomSize": "3-4\"",
        "plantHeight": "4 ft",
        "price": 8,
        "image": "images/cornell_bronze.png"
    },
    {
        "id": "manano-buz",
        "name": "Manano Buz",
        "category": "Cactus",
        "color": "Yellow",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 8,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "totally-tangerine",
        "name": "Totally Tangerine",
        "category": "Anemone",
        "color": "Orange/Pink",
        "bloomSize": "2-4\"",
        "plantHeight": "3 ft",
        "price": 8,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "citron-du-cap",
        "name": "Citron du Cap",
        "category": "Cactus",
        "color": "Yellow",
        "bloomSize": "6-8\"",
        "plantHeight": "4 ft",
        "price": 8,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "sun-kissed",
        "name": "Sun Kissed",
        "category": "Cactus",
        "color": "Yellow",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 8,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "ova-jo",
        "name": "Ova-Jo",
        "category": "Ball",
        "color": "Purple",
        "bloomSize": "3-4\"",
        "plantHeight": "4 ft",
        "price": 8,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "irish-delight",
        "name": "Irish Delight",
        "category": "Decorative",
        "color": "Green/White",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 8,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "diva",
        "name": "Diva",
        "category": "Decorative",
        "color": "Dark Purple",
        "bloomSize": "4-6\"",
        "plantHeight": "4.5 ft",
        "price": 8,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "isabel",
        "name": "Isabel",
        "category": "Pompon",
        "color": "Purple",
        "bloomSize": "up to 2\"",
        "plantHeight": "3 ft",
        "price": 8,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "hollyhill-miss-white",
        "name": "Hollyhill Miss White",
        "category": "Cactus",
        "color": "White",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 10,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "midnight-moon",
        "name": "Midnight Moon",
        "category": "Collarette",
        "color": "Dark Red/Yellow",
        "bloomSize": "2-4\"",
        "plantHeight": "3 ft",
        "price": 8,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "dorothy-r",
        "name": "Dorothy R",
        "category": "Decorative",
        "color": "Pink",
        "bloomSize": "6-8\"",
        "plantHeight": "4 ft",
        "price": 8,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "caitlin-s-joy",
        "name": "Caitlin’s Joy",
        "category": "Ball",
        "color": "Purple",
        "bloomSize": "3-4\"",
        "plantHeight": "4 ft",
        "price": 10,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "clearview-peachy",
        "name": "Clearview Peachy",
        "category": "Ball",
        "color": "Peach",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 10,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "20th-ave-softer-peach",
        "name": "20th Ave Softer Peach",
        "category": "Decorative",
        "color": "Peach",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 15,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "sandia-bertha",
        "name": "Sandia Bertha",
        "category": "Decorative",
        "color": "Purple",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 20,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "ka-keltie-rose",
        "name": "Ka Keltie Rose",
        "category": "Decorative",
        "color": "Pink",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 15,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "ka-rosie-jo",
        "name": "Ka Rosie Jo",
        "category": "Decorative",
        "color": "Pink",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 15,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "ka-guava",
        "name": "Ka Guava",
        "category": "Waterlily",
        "color": "Coral",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 15,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "ka-apricot-jam",
        "name": "Ka Apricot Jam",
        "category": "Decorative",
        "color": "Apricot",
        "bloomSize": "6-8\"",
        "plantHeight": "4 ft",
        "price": 15,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "ka-mocha-katie",
        "name": "Ka Mocha Katie",
        "category": "Decorative",
        "color": "Bronze/Red",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 15,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "ka-mocha-maya",
        "name": "Ka Mocha Maya",
        "category": "Decorative",
        "color": "Bronze/Red",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 15,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "lee-s-ellis",
        "name": "Lee’s Ellis",
        "category": "Decorative",
        "color": "Pink",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 15,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "lee-s-suntan",
        "name": "Lee’s suntan",
        "category": "Decorative",
        "color": "Bronze",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 15,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "lee-s-beech-glow",
        "name": "Lee’s Beech Glow",
        "category": "Decorative",
        "color": "Peach",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 15,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "lee-s-sugaree",
        "name": "Lee’s Sugaree",
        "category": "Decorative",
        "color": "Pink",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 15,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "hollyhill-pink-martini",
        "name": "Hollyhill Pink Martini",
        "category": "Decorative",
        "color": "Pink",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 15,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "hapet-old-charm",
        "name": "Hapet Old Charm",
        "category": "Decorative",
        "color": "Orange/Pink",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 25,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "levi-bluesmoke",
        "name": "Levi Bluesmoke",
        "category": "Ball",
        "color": "Purple",
        "bloomSize": "3-4\"",
        "plantHeight": "4 ft",
        "price": 15,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "rm-moonlight",
        "name": "RM Moonlight",
        "category": "Decorative",
        "color": "Yellow",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 15,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "hapet-salmon",
        "name": "Hapet salmon",
        "category": "Decorative",
        "color": "Salmon",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 15,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "hapet-coral-charm",
        "name": "Hapet coral charm",
        "category": "Decorative",
        "color": "Coral",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 30,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "hapet-daisy",
        "name": "Hapet Daisy",
        "category": "Decorative",
        "color": "Yellow",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 15,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "hapet-pastel",
        "name": "Hapet Pastel",
        "category": "Decorative",
        "color": "Pastel Pink",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 15,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "hapet-amber",
        "name": "Hapet Amber",
        "category": "Decorative",
        "color": "Amber",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 15,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "hapet-pearl",
        "name": "Hapet Pearl",
        "category": "Decorative",
        "color": "White",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 15,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "l-hazy",
        "name": "L Hazy",
        "category": "Decorative",
        "color": "Purple",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 25,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "rm-coral-treasure",
        "name": "Rm Coral Treasure",
        "category": "Decorative",
        "color": "Coral",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 10,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "hapet-cheddar",
        "name": "Hapet Cheddar",
        "category": "Decorative",
        "color": "Yellow",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 15,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "carolina-wageman",
        "name": "Carolina Wageman",
        "category": "Decorative",
        "color": "Orange",
        "bloomSize": "6-8\"",
        "plantHeight": "4 ft",
        "price": 35,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "hapet-vintage",
        "name": "Hapet Vintage",
        "category": "Decorative",
        "color": "Burgundy",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 15,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "coorabell-astrid",
        "name": "Coorabell Astrid",
        "category": "Decorative",
        "color": "Pink",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 25,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "hapet-champagne",
        "name": "Hapet Champagne",
        "category": "Decorative",
        "color": "Champagne",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 10,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "hapet-coppery",
        "name": "Hapet Coppery",
        "category": "Decorative",
        "color": "Copper",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 20,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "cdp-misty-dawn",
        "name": "CDP Misty Dawn",
        "category": "Decorative",
        "color": "Lavender",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 20,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "hh-serenity",
        "name": "HH serenity",
        "category": "Decorative",
        "color": "White",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 15,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "la-belle-epogue",
        "name": "La Belle Epogue",
        "category": "Decorative",
        "color": "Pink",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 18,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "venus",
        "name": "Venus",
        "category": "Collarette",
        "color": "Pink",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 20,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "orange-hype",
        "name": "Orange Hype",
        "category": "Collarette",
        "color": "Orange",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 25,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "rhubarb-and-custard",
        "name": "Rhubarb and Custard",
        "category": "Collarette",
        "color": "Red/Yellow",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 25,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "ka-rose-quartz",
        "name": "Ka Rose Quartz",
        "category": "Decorative",
        "color": "Pink",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 25,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "ka-boho-rose",
        "name": "Ka Boho Rose",
        "category": "Decorative",
        "color": "Rose",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 25,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "west-coast",
        "name": "West Coast",
        "category": "Decorative",
        "color": "Orange",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 30,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "formby-monarch",
        "name": "Formby Monarch",
        "category": "Decorative",
        "color": "Purple",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 30,
        "image": "images/missed_picture_day.png"
    },
    {
        "id": "belred-desire",
        "name": "Belred Desire",
        "category": "Semi-Cactus",
        "color": "Lavender/Lilac",
        "bloomSize": "4-6\"",
        "plantHeight": "4 ft",
        "price": 10,
        "image": "images/missed_picture_day.png"
    }
];

// State
let cart = [];
let wishlist = new Set();
let currentFilter = 'All';
let currentSort = 'default';
let currentSearch = '';
let productsToShow = 9; // Initial number of products to display

// Inventory System
function initializeInventory() {
    const storedStock = localStorage.getItem('kimi_atelier_inventory');
    if (storedStock) {
        const stockMap = JSON.parse(storedStock);
        products.forEach(p => {
            // Force reset to 1 as requested
            p.stock = 1;
        });
        saveInventory(); // Save the reset state
    } else {
        // First time setup - start at 1
        products.forEach(p => {
            p.stock = 1;
        });
        saveInventory();
    }
}

function saveInventory() {
    const stockMap = {};
    products.forEach(p => {
        stockMap[p.id] = p.stock;
    });
    localStorage.setItem('kimi_atelier_inventory', JSON.stringify(stockMap));
}

// DOM Elements
const productGrid = document.getElementById('product-grid');
const cartToggle = document.querySelector('.cart-toggle');
const closeCartBtn = document.querySelector('.close-cart');
const cartModal = document.getElementById('cart-modal');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalEl = document.getElementById('cart-total-price');
const cartCountEl = document.querySelector('.cart-count');
const wishlistCountEl = document.querySelector('.wishlist-count');
const toastEl = document.getElementById('toast');
const checkoutBtn = document.getElementById('checkout-btn');
const checkoutFormContainer = document.getElementById('checkout-form-container');
const checkoutForm = document.getElementById('checkout-form');
const backToCartBtn = document.getElementById('back-to-cart-btn');
const cartFooter = document.getElementById('cart-footer');
const navbar = document.querySelector('.navbar');
const wishlistToggle = document.querySelector('.wishlist-toggle');

const searchInput = document.getElementById('search-input');
const sortSelect = document.getElementById('sort-select');
const filterBtns = document.querySelectorAll('.filter-btn');

// New DOM Elements
const cartBackdrop = document.getElementById('cart-backdrop');
const quickViewModal = document.getElementById('quick-view-modal');
const qvOverlay = document.querySelector('.qv-overlay');
const closeQvBtn = document.querySelector('.close-qv');
const qvImg = document.getElementById('qv-img');
const qvCategory = document.getElementById('qv-category');
const qvTitle = document.getElementById('qv-title');
const qvMeta = document.getElementById('qv-meta');
const qvDescription = document.getElementById('qv-description');
const qvPrice = document.getElementById('qv-price');
const qvAddBtn = document.getElementById('qv-add-btn');
const newsletterForm = document.getElementById('newsletter-form');
const showMoreContainer = document.getElementById('show-more-container');
const showMoreBtn = document.getElementById('show-more-btn');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeInventory();
    renderProducts();
    setupEventListeners();
});

// Render Products
function renderProducts() {
    let filteredProducts = products.filter(p => {
        const matchesFilter = currentFilter === 'All' ||
            (currentFilter === 'Favorites' && wishlist.has(p.id)) ||
            p.category === currentFilter;
        const matchesSearch = p.name.toLowerCase().includes(currentSearch.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    if (currentSort === 'price-asc') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-desc') {
        filteredProducts.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'name-asc') {
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (currentSort === 'name-desc') {
        filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
    }

    if (filteredProducts.length === 0) {
        productGrid.innerHTML = '<div class="no-results">No dahlias found matching your criteria.</div>';
        showMoreContainer.style.display = 'none';
        return;
    }

    // Handle "Show More" Visibility
    if (filteredProducts.length > productsToShow) {
        showMoreContainer.style.display = 'flex';
    } else {
        showMoreContainer.style.display = 'none';
    }

    productGrid.innerHTML = filteredProducts.slice(0, productsToShow).map(product => {
        const isHearted = wishlist.has(product.id);
        const isSoldOut = product.stock <= 0;
        const isLowStock = product.stock > 0 && product.stock <= 3;

        let badgeHtml = '';
        if (isSoldOut) {
            badgeHtml = '<div class="product-badge sold-out">Sold Out</div>';
        } else if (isLowStock) {
            badgeHtml = `<div class="product-badge low-stock">Only ${product.stock} left</div>`;
        } else if (product.bloomSize && (product.bloomSize.includes('8') || product.bloomSize.includes('10'))) {
            badgeHtml = '<div class="product-badge">Dinnerplate</div>';
        } else if (product.bloomSize && (product.bloomSize.includes('2') || product.bloomSize.includes('up to 2'))) {
            badgeHtml = '<div class="product-badge">Miniature</div>';
        }

        return `
        <div class="product-card fade-up ${isSoldOut ? 'oos' : ''}">
            ${badgeHtml}
            <button class="wishlist-btn ${isHearted ? 'active' : ''}" data-id="${product.id}" aria-label="Add to Wishlist">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="${isHearted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
            </button>
            <div class="product-image-container" onclick="${isSoldOut ? '' : `showQuickView('${product.id}')`}">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${isSoldOut ? '' : '<div class="quick-view-overlay">Quick View</div>'}
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-meta">
                    <span>📏 ${product.plantHeight}</span>
                    <span>🌸 ${product.bloomSize}</span>
                    <span>🎨 ${product.color}</span>
                </div>
                <span class="product-price">$${product.price.toFixed(2)}</span>
                <button class="add-to-cart-btn" data-id="${product.id}" ${isSoldOut ? 'disabled' : ''}>
                    ${isSoldOut ? 'Sold Out' : 'Add to Cart'}
                </button>
            </div>
        </div>
    `}).join('');

    // Re-attach event listeners
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            addToCart(e.target.getAttribute('data-id'));
        });
    });

    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const btnEl = e.target.closest('.wishlist-btn');
            toggleWishlist(btnEl.getAttribute('data-id'));
        });
    });

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(card => {
        observer.observe(card);
    });
}

// Wishlist Logic
function toggleWishlist(productId) {
    if (wishlist.has(productId)) {
        wishlist.delete(productId);
        showToast('Removed from Wishlist');
    } else {
        wishlist.add(productId);
        showToast('Added to Wishlist!');
    }
    wishlistCountEl.textContent = wishlist.size;

    // If we are currently viewing the Favorites filter, we need to re-render to remove the item
    if (currentFilter === 'Favorites') {
        renderProducts();
    } else {
        // Otherwise just toggle the class locally for performance
        const btn = document.querySelector(`.wishlist-btn[data-id="${productId}"]`);
        if (btn) {
            btn.classList.toggle('active');
            const svg = btn.querySelector('svg');
            if (wishlist.has(productId)) {
                svg.setAttribute('fill', 'currentColor');
            } else {
                svg.setAttribute('fill', 'none');
            }
        }
    }
}

// Cart Logic
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    const currentQty = existingItem ? existingItem.quantity : 0;

    if (currentQty + 1 > product.stock) {
        showToast(`Sorry, only ${product.stock} available in stock. 🌸`);
        return;
    }

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
    showToast(`Added ${product.name} to cart!`);

    // Cart Bounce Animation
    cartToggle.classList.add('cart-bounce');
    setTimeout(() => cartToggle.classList.remove('cart-bounce'), 400);
}

function showQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    qvImg.src = product.image;
    qvImg.alt = product.name;
    qvCategory.textContent = product.category;
    qvTitle.textContent = product.name;
    qvPrice.textContent = `$${product.price.toFixed(2)}`;
    qvDescription.textContent = `A stunning ${product.category} variety featuring ${product.color} blooms. Perfect for cutting and garden display, reaching heights of ${product.plantHeight}.`;

    const stockStatus = product.stock <= 0 ? 'Sold Out' : (product.stock <= 3 ? `Low Stock: Only ${product.stock} remaining` : `In Stock: ${product.stock} available`);
    const stockClass = product.stock <= 0 ? 'stock-out' : (product.stock <= 3 ? 'stock-low' : 'stock-in');

    qvMeta.innerHTML = `
        <span>📏 ${product.plantHeight}</span>
        <span>🌸 ${product.bloomSize}</span>
        <span>🎨 ${product.color}</span>
        <span class="stock-info ${stockClass}">📦 ${stockStatus}</span>
    `;

    qvAddBtn.disabled = product.stock <= 0;
    qvAddBtn.textContent = product.stock <= 0 ? 'Sold Out' : 'Add to Cart';

    qvAddBtn.onclick = () => {
        addToCart(product.id);
        toggleQuickView();
    };

    toggleQuickView();
}

function toggleQuickView() {
    quickViewModal.classList.toggle('active');
    document.body.style.overflow = quickViewModal.classList.contains('active') ? 'hidden' : '';
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function updateQuantity(productId, delta) {
    const item = cart.find(item => item.id === productId);
    const product = products.find(p => p.id === productId);

    if (item) {
        if (delta > 0 && item.quantity + delta > product.stock) {
            showToast(`Only ${product.stock} available in stock. 🌸`);
            return;
        }

        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartUI();
        }
    }
}

function setQuantity(productId, value) {
    const item = cart.find(item => item.id === productId);
    const product = products.find(p => p.id === productId);

    if (item) {
        let newQty = parseInt(value);
        if (isNaN(newQty) || newQty < 1) {
            newQty = 1;
        }

        if (newQty > product.stock) {
            showToast(`Only ${product.stock} available in stock. 🌸`);
            newQty = product.stock;
        }

        item.quantity = newQty;
        updateCartUI();
    }
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountEl.textContent = totalItems;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="empty-cart-msg">Your cart is empty.</div>';
    } else {
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                    <div class="cart-item-controls">
                        <button class="qty-btn minus" data-id="${item.id}">-</button>
                        <input type="number" class="qty-input" value="${item.quantity}" min="1" max="${item.stock}" data-id="${item.id}">
                        <button class="qty-btn plus" data-id="${item.id}">+</button>
                        <button class="remove-item" data-id="${item.id}">Remove</button>
                    </div>
                </div>
            </div>
        `).join('');

        cartItemsContainer.querySelectorAll('.qty-btn.minus').forEach(btn => {
            btn.addEventListener('click', (e) => updateQuantity(e.target.dataset.id, -1));
        });
        cartItemsContainer.querySelectorAll('.qty-btn.plus').forEach(btn => {
            btn.addEventListener('click', (e) => updateQuantity(e.target.dataset.id, 1));
        });
        cartItemsContainer.querySelectorAll('.qty-input').forEach(input => {
            input.addEventListener('change', (e) => setQuantity(e.target.dataset.id, e.target.value));
            input.addEventListener('blur', (e) => {
                if (e.target.value === '' || e.target.value < 1) {
                    setQuantity(e.target.dataset.id, 1);
                }
            });
        });
        cartItemsContainer.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', (e) => removeFromCart(e.target.dataset.id));
        });
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotalEl.textContent = `$${total.toFixed(2)}`;
}

// UI Interactions
function toggleCart() {
    cartBackdrop.classList.toggle('active');
    cartModal.classList.toggle('active');
    document.body.style.overflow = cartModal.classList.contains('active') ? 'hidden' : '';
}

function showToast(message) {
    toastEl.textContent = message;
    toastEl.classList.add('show');
    setTimeout(() => {
        toastEl.classList.remove('show');
    }, 3000);
}

// Initialize Stripe
const stripe = Stripe('pk_live_51TWtip0IefA5nqWsTuWwyDtEQ27i2SQHJ85hjhoWZC9PM46D9sW4qV2HGtMlrIqJZKbJMPtuPKg21wPMQC5kxpLl00GcHwBLYQ');
let checkout;

async function initializeCheckout() {
    try {
        const response = await fetch('/create-checkout-session', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ cart }),
        });

        const { clientSecret } = await response.json();

        // Initialize Checkout
        checkout = await stripe.initEmbeddedCheckout({ clientSecret });

        // Mount Checkout
        checkout.mount('#checkout');
    } catch (err) {
        console.error('Checkout Error:', err);
        showToast('Unable to initialize checkout. Please try again.');
    }
}

function setupEventListeners() {
    cartToggle.addEventListener('click', toggleCart);
    closeCartBtn.addEventListener('click', toggleCart);
    cartBackdrop.addEventListener('click', toggleCart);

    if (wishlistToggle) {
        wishlistToggle.addEventListener('click', () => {
            currentFilter = 'Favorites';

            // Update UI buttons
            filterBtns.forEach(btn => {
                btn.classList.remove('active');
                if (btn.getAttribute('data-filter') === 'Favorites') {
                    btn.classList.add('active');
                }
            });

            renderProducts();

            // Scroll to shop
            const shopSection = document.getElementById('shop');
            if (shopSection) {
                shopSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Show More Listener
    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', () => {
            productsToShow += 12; // Load 12 more
            renderProducts();
        });
    }

    // Quick View Listeners
    closeQvBtn.addEventListener('click', toggleQuickView);
    qvOverlay.addEventListener('click', toggleQuickView);

    // Newsletter Listener
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = e.target.querySelector('input').value;
            showToast(`Welcome to the Atelier, ${email.split('@')[0]}! 🌸`);
            e.target.reset();
        });
    }

    checkoutBtn.addEventListener('click', () => {
        if (cart.length > 0) {
            cartItemsContainer.classList.add('hidden');
            cartFooter.classList.add('hidden');
            checkoutFormContainer.classList.remove('hidden');
            initializeCheckout();
        } else {
            showToast('Your cart is empty.');
        }
    });

    backToCartBtn.addEventListener('click', () => {
        cartItemsContainer.classList.remove('hidden');
        cartFooter.classList.remove('hidden');
        checkoutFormContainer.classList.add('hidden');
        if (checkout) {
            checkout.unmount();
            checkout.destroy();
        }
    });

    // Shop Controls
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value;
            renderProducts();
        });
    }

    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            renderProducts();
        });
    }

    if (filterBtns) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                filterBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                currentFilter = e.target.getAttribute('data-filter');
                renderProducts();
            });
        });
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}
