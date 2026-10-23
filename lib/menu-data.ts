export interface ProductOption {
  label: string; // e.g. "Mini", "Normal", "Mega" or "M", "L", "XL"
  price: number;
}

export interface Supplement {
  name: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  category: string; // Matches category id
  subcategory?: string; // e.g. "Standard drinks", "Jus naturels", "Mojito", "Crêpes", "Pancakes"
  description?: string;
  price?: number | null; // For single price items, null if unconfirmed
  currency: 'DA';
  image?: string | null;
  options?: ProductOption[]; // For multi-size items
  supplements?: Supplement[];
  breadOptions?: string[]; // e.g. ["Brioche", "Matlou3"]
  fillingChoices?: string[]; // e.g. ["Viande", "Poulet", "Poulet mariné", "Poulet fumé", "3 Fromage", "Thon"]
  spicy?: boolean;
  vegetarian?: boolean;
  popular?: boolean;
  needsReview?: boolean;
  reviewNote?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  tabLabel: string;
  description: string;
  iconName: string;
}

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'smash-burger',
    name: 'Smash Burger',
    tabLabel: 'BURGERS',
    description: 'Steaks pur bœuf écrasés à la plancha, croustillants et juteux, servis dans un pain brioché toasté.',
    iconName: 'Flame',
  },
  {
    id: 'pocket',
    name: 'Pocket',
    tabLabel: 'POCKET',
    description: 'Pockets généreux garnis de viandes savoureuses, frites ou riz, nappés de sauces onctueuses.',
    iconName: 'Layers',
  },
  {
    id: 'fries',
    name: 'Fries',
    tabLabel: 'FRIES',
    description: 'Frites croustillantes dorées à point, portions simples ou généreusement nappées de sauce gruyère.',
    iconName: 'Sparkles',
  },
  {
    id: 'drinks',
    name: 'Drinks / Boissons',
    tabLabel: 'DRINKS',
    description: 'Eaux minérales, sodas frais, cafés, thés, mojitos rafraîchissants et jus de fruits naturels pressés.',
    iconName: 'GlassWater',
  },
  {
    id: 'sweets',
    name: 'Sweets',
    tabLabel: 'SWEETS',
    description: 'Crêpes sucrées crousti-moelleuses, pancakes dorés et garnitures gourmandes chocolatées.',
    iconName: 'CakeSlice',
  },
  {
    id: 'pizza-sauce-rouge',
    name: 'Pizza Sauce Rouge',
    tabLabel: 'PIZZA ROUGE',
    description: 'Pizzas artisanales base sauce tomate mijotée et cheddar fondant, cuites au four. Disponibles en Mini, Normal et Mega.',
    iconName: 'Pizza',
  },
  {
    id: 'pizza-sauce-blanche',
    name: 'Pizza Sauce Blanche',
    tabLabel: 'PIZZA BLANCHE',
    description: 'Pizzas artisanales onctueuses base crème blanche et fromages raffinés. Disponibles en Mini, Normal et Mega.',
    iconName: 'Pizza',
  },
  {
    id: 'tacos',
    name: 'Tacos',
    tabLabel: 'TACOS',
    description: 'Tacos français garnis de viandes savoureuses, frites dorées, sauce fromagère onctueuse et cheddar fondu.',
    iconName: 'Utensils',
  },
  {
    id: 'sandwiches',
    name: 'Sandwiches',
    tabLabel: 'SANDWICHES',
    description: 'Sandwiches gourmands au pain brioché moelleux ou pain matlou3 traditionnel algérien.',
    iconName: 'Sandwich',
  },
  {
    id: 'tombik',
    name: 'Tombik',
    tabLabel: 'TOMBIK',
    description: 'Sandwiches turcs au pain pita rond et aéré, garnis de viandes dorées, frites croustillantes, œuf et gruyère.',
    iconName: 'Disc',
  },
  {
    id: 'calzon',
    name: 'Calzon',
    tabLabel: 'CALZON',
    description: 'Chaussons de pâte à pizza croustillants et dorés au four, cœur fondant sauce tomate, cheddar et garniture au choix.',
    iconName: 'ChefHat',
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // ==========================================
  // 1. SMASH BURGER (6 items)
  // ==========================================
  {
    id: 'classic-burger',
    name: 'Classic Burger',
    category: 'smash-burger',
    description: 'Smash beef + Salade + Tomate + Sauce Pannelo',
    price: 300,
    currency: 'DA',
    popular: true,
  },
  {
    id: 'stacker-burger',
    name: 'Stacker Burger',
    category: 'smash-burger',
    description: 'Smash beef + Salade + Tomate + Œuf + Sauce Pannelo',
    price: 350,
    currency: 'DA',
  },
  {
    id: 'chicken-crispy-burger',
    name: 'Chicken Crispy Burger',
    category: 'smash-burger',
    description: 'Poulet crispy + Salade + Tomate + Sauce Fromage',
    price: 350,
    currency: 'DA',
    popular: true,
  },
  {
    id: 'wham-burger',
    name: 'Wham Burger',
    category: 'smash-burger',
    description: 'Smash beef + Salade + Tomate + Camembert + Oignons caramélisés + Sauce Pannelo',
    price: 400,
    currency: 'DA',
  },
  {
    id: 'big-classic-burger',
    name: 'Big Classic Burger',
    category: 'smash-burger',
    description: 'Double smash beef + Salade + Tomate + Sauce Pannelo',
    price: 500,
    currency: 'DA',
    popular: true,
  },
  {
    id: 'pannelo-burger',
    name: 'Pannelo Burger',
    category: 'smash-burger',
    description: 'Double smash beef + Salade + Tomate + Gruyère + Mushroom + Sauce Fromage',
    price: 600,
    currency: 'DA',
    popular: true,
  },

  // ==========================================
  // 2. POCKET (3 items)
  // ==========================================
  {
    id: 'pocket-chicken',
    name: 'Pocket Chicken',
    category: 'pocket',
    description: 'Frites + Poulet à la crème + Sauce Gruyère + Cheddar gratiné',
    price: 500,
    currency: 'DA',
    popular: true,
  },
  {
    id: 'pocket-beef',
    name: 'Pocket Beef',
    category: 'pocket',
    description: 'Frites + Viande + Sauce Gruyère + Cheddar gratiné',
    price: 500,
    currency: 'DA',
  },
  {
    id: 'pocket-pannelo',
    name: 'Pocket Pannelo',
    category: 'pocket',
    description: 'Riz + Sauce gruyère + Poulet crispy + Cheddar gratiné + Sauce chili thai + Herbs',
    price: 600,
    currency: 'DA',
    popular: true,
  },

  // ==========================================
  // 3. FRIES (2 items)
  // ==========================================
  {
    id: 'classic-fries',
    name: 'Classic Fries',
    category: 'fries',
    description: 'Frite simple',
    price: 150,
    currency: 'DA',
  },
  {
    id: 'cheesy-fries',
    name: 'Cheesy Fries',
    category: 'fries',
    description: 'Frite + Sauce Gruyère',
    price: 250,
    currency: 'DA',
    popular: true,
  },

  // ==========================================
  // 4. DRINKS / BOISSONS (12 items in 3 subcategories)
  // ==========================================
  // Standard drinks (4)
  {
    id: 'drink-eau',
    name: 'Eau',
    category: 'drinks',
    subcategory: 'Standard drinks',
    description: 'Bouteille d’eau minérale fraîche',
    price: 30,
    currency: 'DA',
  },
  {
    id: 'drink-boissons',
    name: 'Boissons',
    category: 'drinks',
    subcategory: 'Standard drinks',
    description: 'Boissons gazeuses et sodas frais (canette / bouteille)',
    price: 100,
    currency: 'DA',
  },
  {
    id: 'drink-cafe-capsules',
    name: 'Café capsules',
    category: 'drinks',
    subcategory: 'Standard drinks',
    description: 'Café espresso chaud en capsule sélection premium',
    price: 100,
    currency: 'DA',
  },
  {
    id: 'drink-the',
    name: 'Thé',
    category: 'drinks',
    subcategory: 'Standard drinks',
    description: 'Thé chaud traditionnel infusé',
    price: 80,
    currency: 'DA',
  },

  // Jus naturels (5)
  {
    id: 'jus-orange',
    name: 'Jus d’orange',
    category: 'drinks',
    subcategory: 'Jus naturels',
    description: 'Jus d’orange naturel pressé frais',
    price: 250,
    currency: 'DA',
    popular: true,
  },
  {
    id: 'jus-ananas',
    name: 'Jus d’ananas',
    category: 'drinks',
    subcategory: 'Jus naturels',
    description: 'Jus d’ananas naturel frais et exotique',
    price: 300,
    currency: 'DA',
  },
  {
    id: 'jus-citron',
    name: 'Jus citron',
    category: 'drinks',
    subcategory: 'Jus naturels',
    description: 'Citronnade fraîche naturelle',
    price: 200,
    currency: 'DA',
  },
  {
    id: 'jus-banane',
    name: 'Jus banane',
    category: 'drinks',
    subcategory: 'Jus naturels',
    description: 'Smoothie onctueux de banane fraîche',
    price: 350,
    currency: 'DA',
  },
  {
    id: 'jus-fraise',
    name: 'Jus fraise',
    category: 'drinks',
    subcategory: 'Jus naturels',
    description: 'Jus de fraises fraîches parfumées',
    price: 300,
    currency: 'DA',
    popular: true,
  },

  // Mojito (3)
  {
    id: 'mojito-classique',
    name: 'Mojito Classique',
    category: 'drinks',
    subcategory: 'Mojito',
    description: 'Citron vert frais, menthe pilée, glace pilée et eau gazeuse rafraîchissante',
    price: 250,
    currency: 'DA',
    popular: true,
  },
  {
    id: 'mojito-fraise',
    name: 'Mojito fraise',
    category: 'drinks',
    subcategory: 'Mojito',
    description: 'Mojito rafraîchissant au coulis de fraises fraîches, menthe et citron vert',
    price: 350,
    currency: 'DA',
  },
  {
    id: 'mojito-kiwi',
    name: 'Mojito kiwi',
    category: 'drinks',
    subcategory: 'Mojito',
    description: 'Mojito acidulé au kiwi frais, menthe vivifiante et citron vert',
    price: 400,
    currency: 'DA',
  },

  // ==========================================
  // 5. SWEETS (18 items in 2 subcategories + supplement)
  // ==========================================
  // Crêpes (15)
  {
    id: 'crepe-chocolat',
    name: 'Crêpe chocolat',
    category: 'sweets',
    subcategory: 'Crêpes',
    description: 'Crêpe dorée garnie de chocolat gourmand',
    price: 300,
    currency: 'DA',
    supplements: [{ name: 'Supplément Nutella', price: 100 }],
  },
  {
    id: 'crepe-nutella',
    name: 'Crêpes nutella',
    category: 'sweets',
    subcategory: 'Crêpes',
    description: 'Crêpe chaude généreusement nappée de Nutella onctueux',
    price: 450,
    currency: 'DA',
    popular: true,
    supplements: [{ name: 'Supplément Nutella', price: 100 }],
  },
  {
    id: 'crepe-banane',
    name: 'Crêpes banane',
    category: 'sweets',
    subcategory: 'Crêpes',
    description: 'Crêpe dorée aux rondelles de banane fraîche et nappage chocolat',
    price: 500,
    currency: 'DA',
    supplements: [{ name: 'Supplément Nutella', price: 100 }],
  },
  {
    id: 'crepe-fraise',
    name: 'Crêpes Fraise',
    category: 'sweets',
    subcategory: 'Crêpes',
    description: 'Crêpe garnie de fraises fraîches et coulis sucré',
    price: 400,
    currency: 'DA',
    popular: true,
    supplements: [{ name: 'Supplément Nutella', price: 100 }],
  },
  {
    id: 'crepe-ananas',
    name: 'Crêpes ananas',
    category: 'sweets',
    subcategory: 'Crêpes',
    description: 'Crêpe aux morceaux d’ananas juteux et coulis doux',
    price: 450,
    currency: 'DA',
    supplements: [{ name: 'Supplément Nutella', price: 100 }],
  },
  {
    id: 'crepe-amande',
    name: 'Crêpes amande',
    category: 'sweets',
    subcategory: 'Crêpes',
    description: 'Crêpe aux amandes effilées croquantes et chocolat fondant',
    price: 400,
    currency: 'DA',
    supplements: [{ name: 'Supplément Nutella', price: 100 }],
  },
  {
    id: 'crepe-noisette',
    name: 'Crêpes noisette',
    category: 'sweets',
    subcategory: 'Crêpes',
    description: 'Crêpe aux éclats de noisettes torréfiées croquantes',
    price: 400,
    currency: 'DA',
    supplements: [{ name: 'Supplément Nutella', price: 100 }],
  },
  {
    id: 'crepe-nestle',
    name: 'Crêpes nestlé',
    category: 'sweets',
    subcategory: 'Crêpes',
    description: 'Crêpe nappée de crème au lait concentré sucré Nestlé',
    price: 400,
    currency: 'DA',
    supplements: [{ name: 'Supplément Nutella', price: 100 }],
  },
  {
    id: 'crepe-noix-de-coco',
    name: 'Crêpes noix de coco',
    category: 'sweets',
    subcategory: 'Crêpes',
    description: 'Crêpe parsemée de noix de coco râpée des îles et chocolat',
    price: 400,
    currency: 'DA',
    supplements: [{ name: 'Supplément Nutella', price: 100 }],
  },
  {
    id: 'crepe-snikers',
    name: 'Crêpes snikers',
    category: 'sweets',
    subcategory: 'Crêpes',
    description: 'Crêpe façon Snickers : cacahuètes grillées, caramel coulant et chocolat',
    price: 500,
    currency: 'DA',
    popular: true,
    supplements: [{ name: 'Supplément Nutella', price: 100 }],
  },
  {
    id: 'crepe-oreo',
    name: 'Crêpes oréo',
    category: 'sweets',
    subcategory: 'Crêpes',
    description: 'Crêpe garnie de biscuits Oréo concassés et crème fondante',
    price: 500,
    currency: 'DA',
    popular: true,
    supplements: [{ name: 'Supplément Nutella', price: 100 }],
  },
  {
    id: 'crepe-bueno',
    name: 'Crêpes bueno',
    category: 'sweets',
    subcategory: 'Crêpes',
    description: 'Crêpe gourmande aux morceaux de Kinder Bueno et crème noisette',
    price: 500,
    currency: 'DA',
    popular: true,
    supplements: [{ name: 'Supplément Nutella', price: 100 }],
  },
  {
    id: 'crepe-2-fruit',
    name: 'Crêpes 2 fruit',
    category: 'sweets',
    subcategory: 'Crêpes',
    description: 'Crêpe généreuse garnie de 2 fruits frais de saison au choix',
    price: 550,
    currency: 'DA',
    supplements: [{ name: 'Supplément Nutella', price: 100 }],
  },
  {
    id: 'crepe-3-fruit',
    name: 'Crêpes 3 fruit',
    category: 'sweets',
    subcategory: 'Crêpes',
    description: 'Crêpe tutti frutti avec 3 variétés de fruits frais et coulis',
    price: 600,
    currency: 'DA',
    supplements: [{ name: 'Supplément Nutella', price: 100 }],
  },
  {
    id: 'crepe-pannelo',
    name: 'Crêpes Pannelo',
    category: 'sweets',
    subcategory: 'Crêpes',
    description: 'La création signature Pannelo : assortiment complet de fruits frais, chocolat, éclats croquants et Nutella',
    price: 650,
    currency: 'DA',
    popular: true,
    supplements: [{ name: 'Supplément Nutella', price: 100 }],
  },

  // Pancakes (3)
  {
    id: 'pancake-chocolat',
    name: 'Pancake chocolat',
    category: 'sweets',
    subcategory: 'Pancakes',
    description: 'Pancake épais et moelleux doré à point, nappé de chocolat chaud fondant',
    price: 250,
    currency: 'DA',
    supplements: [{ name: 'Supplément Nutella', price: 100 }],
  },
  {
    id: 'pancake-fruites',
    name: 'Pancake fruites',
    category: 'sweets',
    subcategory: 'Pancakes',
    description: 'Pancakes moelleux garnis de fruits frais tranchés et sirop délicat',
    price: 350,
    currency: 'DA',
    popular: true,
    supplements: [{ name: 'Supplément Nutella', price: 100 }],
  },
  {
    id: 'pancake-special',
    name: 'Pancake special',
    category: 'sweets',
    subcategory: 'Pancakes',
    description: 'Pancake spécial Pannelo : double pile gourmande avec fruits frais, chocolat et éclats croustillants',
    price: 500,
    currency: 'DA',
    popular: true,
    supplements: [{ name: 'Supplément Nutella', price: 100 }],
  },

  // ==========================================
  // 6. PIZZA SAUCE ROUGE (9 items, 3 sizes: Mini / Normal / Mega)
  // ==========================================
  {
    id: 'pizza-margherita',
    name: 'Pizza Margherita',
    category: 'pizza-sauce-rouge',
    description: 'Sauce tomate – Cheddar – Basilic – Huile d’olive',
    currency: 'DA',
    options: [
      { label: 'Mini', price: 350 },
      { label: 'Normal', price: 500 },
      { label: 'Mega', price: 1800 },
    ],
    vegetarian: true,
  },
  {
    id: 'pizza-3-cheese',
    name: 'Pizza 3 Cheese',
    category: 'pizza-sauce-rouge',
    description: 'Sauce tomate – Cheddar – Camembert – Fromage chef',
    currency: 'DA',
    options: [
      { label: 'Mini', price: 450 },
      { label: 'Normal', price: 700 },
      { label: 'Mega', price: 2100 },
    ],
    vegetarian: true,
    popular: true,
  },
  {
    id: 'pizza-chicken',
    name: 'Pizza Chicken (poulet)',
    category: 'pizza-sauce-rouge',
    description: 'Sauce tomate – Cheddar – Poulet',
    currency: 'DA',
    options: [
      { label: 'Mini', price: 450 },
      { label: 'Normal', price: 650 },
      { label: 'Mega', price: 2100 },
    ],
    popular: true,
  },
  {
    id: 'pizza-beef',
    name: 'Pizza Beef (viande)',
    category: 'pizza-sauce-rouge',
    description: 'Sauce tomate – Cheddar – Viande hachée',
    currency: 'DA',
    options: [
      { label: 'Mini', price: 400 },
      { label: 'Normal', price: 700 },
      { label: 'Mega', price: 2000 },
    ],
  },
  {
    id: 'pizza-pepperoni',
    name: 'Pizza Pepperoni',
    category: 'pizza-sauce-rouge',
    description: 'Sauce tomate – Cheddar – Pepperoni',
    currency: 'DA',
    image: '/src/assets/images/regenerated_image_1792712376985.jpg',
    options: [
      { label: 'Mini', price: 400 },
      { label: 'Normal', price: 700 },
      { label: 'Mega', price: 2000 },
    ],
    popular: true,
  },
  {
    id: 'pizza-smoky-chicken',
    name: 'Pizza Smoky Chicken',
    category: 'pizza-sauce-rouge',
    description: 'Sauce tomate – Cheddar – Poulet fumé',
    currency: 'DA',
    options: [
      { label: 'Mini', price: 400 },
      { label: 'Normal', price: 700 },
      { label: 'Mega', price: 2000 },
    ],
  },
  {
    id: 'pizza-tuna-pop',
    name: 'Pizza Tuna Pop',
    category: 'pizza-sauce-rouge',
    description: 'Sauce tomate – Cheddar – Thon',
    currency: 'DA',
    options: [
      { label: 'Mini', price: 450 },
      { label: 'Normal', price: 650 },
      { label: 'Mega', price: 2100 },
    ],
  },
  {
    id: 'pizza-mexicana',
    name: 'Pizza Mexicana',
    category: 'pizza-sauce-rouge',
    description: 'Sauce tomate piquante – Cheddar – Olive noire – Poivre',
    currency: 'DA',
    options: [
      { label: 'Mini', price: 350 },
      { label: 'Normal', price: 550 },
      { label: 'Mega', price: 1800 },
    ],
    spicy: true,
  },
  {
    id: 'pizza-vegetarien',
    name: 'Pizza Végétarien',
    category: 'pizza-sauce-rouge',
    description: 'Sauce tomate – Cheddar – Maïs – Champignon – Oignon',
    currency: 'DA',
    options: [
      { label: 'Mini', price: 400 },
      { label: 'Normal', price: 600 },
      { label: 'Mega', price: 2000 },
    ],
    vegetarian: true,
  },

  // ==========================================
  // 7. PIZZA SAUCE BLANCHE (6 items, 3 sizes: Mini / Normal / Mega)
  // ==========================================
  {
    id: 'pizza-cheese-lover',
    name: 'Pizza Cheese Lover',
    category: 'pizza-sauce-blanche',
    description: 'Sauce blanche – Cheddar – Gruyère – Camembert – Fromage Chef',
    currency: 'DA',
    options: [
      { label: 'Mini', price: 550 },
      { label: 'Normal', price: 750 },
      { label: 'Mega', price: 2200 },
    ],
    vegetarian: true,
    popular: true,
  },
  {
    id: 'pizza-smoky-saumon',
    name: 'Pizza Smoky Saumon',
    category: 'pizza-sauce-blanche',
    description: 'Sauce blanche – Cheddar – Saumon fumé',
    currency: 'DA',
    options: [
      { label: 'Mini', price: 900 },
      { label: 'Normal', price: 1200 },
      { label: 'Mega', price: 4500 },
    ],
  },
  {
    id: 'pizza-shrimp',
    name: 'Pizza Shrimp (crevette)',
    category: 'pizza-sauce-blanche',
    description: 'Sauce blanche – Cheddar – Crevette',
    currency: 'DA',
    options: [
      { label: 'Mini', price: 700 },
      { label: 'Normal', price: 1100 },
      { label: 'Mega', price: 4000 },
    ],
  },
  {
    id: 'pizza-mushroom',
    name: 'Pizza Mushroom',
    category: 'pizza-sauce-blanche',
    description: 'Sauce blanche – Cheddar – Champignon',
    currency: 'DA',
    options: [
      { label: 'Mini', price: 400 },
      { label: 'Normal', price: 600 },
      { label: 'Mega', price: 2000 },
    ],
    vegetarian: true,
  },
  {
    id: 'pizza-pannelo-royal',
    name: 'Pizza Pannelo Royal',
    category: 'pizza-sauce-blanche',
    description: 'Sauce blanche – Cheddar – Gruyère – Viande hachée – Poulet',
    currency: 'DA',
    options: [
      { label: 'Mini', price: 600 },
      { label: 'Normal', price: 1100 },
      { label: 'Mega', price: 3500 },
    ],
    popular: true,
  },
  {
    id: 'pizza-pannelo-signature',
    name: 'Pizza Pannelo Signature',
    category: 'pizza-sauce-blanche',
    description: 'Sauce blanche ou tomate – Cheddar – Viande hachée – Champignons sautés – Gruyère',
    currency: 'DA',
    options: [
      { label: 'Mini', price: 900 },
      { label: 'Normal', price: 1600 },
      { label: 'Mega', price: 3500 },
    ],
    popular: true,
    needsReview: true,
    reviewNote: 'Recette signature : option de sauce blanche ou sauce tomate selon préférence.',
  },

  // ==========================================
  // 8. TACOS (5 items, 3 sizes: M / L / XL + supplements)
  // ==========================================
  {
    id: 'tacos-chicken',
    name: 'Tacos Chicken',
    category: 'tacos',
    description: 'Poulet – Frites – Sauce fromagère – Cheddar',
    currency: 'DA',
    image: '/assets/food_tacos.png',
    options: [
      { label: 'M', price: 500 },
      { label: 'L', price: 700 },
      { label: 'XL', price: 900 },
    ],
    supplements: [
      { name: 'Gruyère', price: 200 },
      { name: 'Camembert', price: 100 },
      { name: 'Oignon caramélisé', price: 50 },
    ],
    popular: true,
  },
  {
    id: 'tacos-beef',
    name: 'Tacos Beef',
    category: 'tacos',
    description: 'Viande – Frites – Sauce fromagère – Cheddar',
    currency: 'DA',
    options: [
      { label: 'M', price: 500 },
      { label: 'L', price: 700 },
      { label: 'XL', price: 900 },
    ],
    supplements: [
      { name: 'Gruyère', price: 200 },
      { name: 'Camembert', price: 100 },
      { name: 'Oignon caramélisé', price: 50 },
    ],
  },
  {
    id: 'tacos-crispy',
    name: 'Tacos Crispy',
    category: 'tacos',
    description: 'Poulet crispy – Frites – Sauce fromagère – Cheddar',
    currency: 'DA',
    options: [
      { label: 'M', price: 550 },
      { label: 'L', price: 750 },
      { label: 'XL', price: 950 },
    ],
    supplements: [
      { name: 'Gruyère', price: 200 },
      { name: 'Camembert', price: 100 },
      { name: 'Oignon caramélisé', price: 50 },
    ],
    popular: true,
  },
  {
    id: 'tacos-mix',
    name: 'Tacos Mix',
    category: 'tacos',
    description: 'Poulet – Viande – Frites – Cheddar – Sauce fromagère',
    currency: 'DA',
    options: [
      { label: 'M', price: 500 },
      { label: 'L', price: 700 },
      { label: 'XL', price: 900 },
    ],
    supplements: [
      { name: 'Gruyère', price: 200 },
      { name: 'Camembert', price: 100 },
      { name: 'Oignon caramélisé', price: 50 },
    ],
  },
  {
    id: 'tacos-gratine',
    name: 'Tacos Gratiné',
    category: 'tacos',
    description: 'Ingrédients non spécifiés dans l’image source. Tacos généreusement gratiné au four avec fromage fondant.',
    currency: 'DA',
    options: [
      { label: 'M', price: 650 },
      { label: 'L', price: 850 },
      { label: 'XL', price: 1050 },
    ],
    supplements: [
      { name: 'Gruyère', price: 200 },
      { name: 'Camembert', price: 100 },
      { name: 'Oignon caramélisé', price: 50 },
    ],
    needsReview: true,
    reviewNote: 'Ingrédients non spécifiés dans l’image source du menu papier. Les prix M (650), L (850) et XL (1050) sont confirmés.',
  },

  // ==========================================
  // 9. SANDWICHES (3 items + 4 supplements + 2 bread options)
  // ==========================================
  {
    id: 'sandwich-panny',
    name: 'Panny',
    category: 'sandwiches',
    description: 'Viande – Frites – Salade – Tomate – Fromage – Sauce Pannelo',
    price: 350,
    currency: 'DA',
    breadOptions: ['Brioche', 'Matlou3'],
    supplements: [
      { name: 'Gruyère', price: 150 },
      { name: 'Cheddar', price: 150 },
      { name: 'Camembert', price: 100 },
      { name: 'Œuf', price: 50 },
    ],
    popular: true,
  },
  {
    id: 'sandwich-chicky',
    name: 'Chicky',
    category: 'sandwiches',
    description: 'Poulet mariné – Frites – Salade – Tomate – Fromage – Sauce Pannelo',
    price: 350,
    currency: 'DA',
    breadOptions: ['Brioche', 'Matlou3'],
    supplements: [
      { name: 'Gruyère', price: 150 },
      { name: 'Cheddar', price: 150 },
      { name: 'Camembert', price: 100 },
      { name: 'Œuf', price: 50 },
    ],
    popular: true,
  },
  {
    id: 'sandwich-mixto',
    name: 'Mixto',
    category: 'sandwiches',
    description: 'Poulet – Viande – Sauce Fromage – Frites',
    price: 450,
    currency: 'DA',
    breadOptions: ['Brioche', 'Matlou3'],
    supplements: [
      { name: 'Gruyère', price: 150 },
      { name: 'Cheddar', price: 150 },
      { name: 'Camembert', price: 100 },
      { name: 'Œuf', price: 50 },
    ],
  },

  // ==========================================
  // 10. TOMBIK (3 items)
  // ==========================================
  {
    id: 'tombik-chicken',
    name: 'Tombik Chicken',
    category: 'tombik',
    description: 'Poulet – Frites – Œuf – Gruyère',
    price: 550,
    currency: 'DA',
    image: '/assets/food_tombik.png',
    popular: true,
  },
  {
    id: 'tombik-beef',
    name: 'Tombik Beef',
    category: 'tombik',
    description: 'Viande – Frites – Œuf – Gruyère – Sauce Fromage',
    price: 550,
    currency: 'DA',
  },
  {
    id: 'tombik-crispy',
    name: 'Tombik Crispy',
    category: 'tombik',
    description: 'Crispy – Frites – Sauce Fromage – Gruyère',
    price: 550,
    currency: 'DA',
    popular: true,
  },

  // ==========================================
  // 11. CALZON (1 item with 6 filling choices and unconfirmed price)
  // ==========================================
  {
    id: 'calzon-pannelo',
    name: 'Calzon Pannelo',
    category: 'calzon',
    description: 'Sauce tomate – Cheddar. Chausson de pâte à pizza croustillant et doré au four avec garniture savoureuse au choix.',
    price: null, // Price not clearly visible in source image; represented as null, not zero or free
    currency: 'DA',
    image: '/assets/food_calzon.png',
    fillingChoices: [
      'Viande',
      'Poulet',
      'Poulet mariné',
      'Poulet fumé',
      '3 Fromage',
      'Thon',
    ],
    popular: true,
    needsReview: true,
    reviewNote: 'Prix non clairement visible dans l’image source. Les 6 garnitures (Viande, Poulet, Poulet mariné, Poulet fumé, 3 Fromage, Thon) sont confirmées.',
  },
];
