/**
 * Centralized Category Image Configuration for PANNELLO Digital Menu
 * 
 * Developers can easily swap or update category photographs here without modifying
 * product data or section layout components.
 */

export interface CategoryImageData {
  src: string;
  alt: string;
  altEn: string;
  focalPosition?: string; // CSS object-position (e.g. 'center 40%')
}

export const CATEGORY_IMAGES: Record<string, CategoryImageData> = {
  'smash-burger': {
    src: '/images/categories/smash-burger.jpg',
    alt: 'Smash Burger PANNELLO — Steaks pur bœuf croustillants, cheddar fondu et pain brioché toasté',
    altEn: 'PANNELLO Smash Burger — Crispy smashed beef patties, melted cheddar, and toasted brioche bun',
    focalPosition: 'center 45%',
  },
  pocket: {
    src: '/images/categories/pocket.jpg',
    alt: 'Pocket PANNELLO — Pain pita garni de poulet à la crème, frites et cheddar gratiné',
    altEn: 'PANNELLO Pocket — Pita pocket stuffed with creamy chicken, fries, and melted cheddar',
    focalPosition: 'center 50%',
  },
  fries: {
    src: '/images/categories/fries.jpg',
    alt: 'Fries PANNELLO — Frites croustillantes dorées avec sauce gruyère fondante',
    altEn: 'PANNELLO Fries — Golden crispy fries topped with creamy melted Gruyère cheese sauce',
    focalPosition: 'center 40%',
  },
  drinks: {
    src: '/images/categories/drinks.jpg',
    alt: 'Drinks / Boissons PANNELLO — Jus de fruits naturels pressés, sodas et mojitos glacés',
    altEn: 'PANNELLO Drinks & Beverages — Fresh squeezed juices, sodas, and chilled refreshing mojitos',
    focalPosition: 'center 40%',
  },
  sweets: {
    src: '/images/categories/sweets.jpg',
    alt: 'Sweets PANNELLO — Crêpes sucrées au Nutella, fruits frais et pancakes dorés',
    altEn: 'PANNELLO Sweets & Desserts — Sweet Nutella crepes, fresh strawberries, and fluffy pancakes',
    focalPosition: 'center 45%',
  },
  'pizza-sauce-rouge': {
    src: '/images/categories/pizza-rouge.jpg',
    alt: 'Pizza Sauce Rouge PANNELLO — Pizza artisanale cuite au four, sauce tomate et cheddar',
    altEn: 'PANNELLO Red Sauce Pizza — Stone-baked artisanal pizza with rich tomato sauce and cheddar',
    focalPosition: 'center 50%',
  },
  'pizza-sauce-blanche': {
    src: '/images/categories/pizza-blanche.jpg',
    alt: 'Pizza Sauce Blanche PANNELLO — Pizza blanche gourmande au saumon fumé et fromages fins',
    altEn: 'PANNELLO White Sauce Pizza — Gourmet creamy white pizza with smoked salmon and fine cheeses',
    focalPosition: 'center 50%',
  },
  tacos: {
    src: '/images/categories/tacos.jpg',
    alt: 'Tacos Français PANNELLO — Tacos toasté généreusement garni de viandes, frites et sauce fromagère',
    altEn: 'PANNELLO French Tacos — Toasted pressed tacos packed with savory meats, fries, and cheese sauce',
    focalPosition: 'center 50%',
  },
  sandwiches: {
    src: '/images/categories/sandwiches.jpg',
    alt: 'Sandwiches PANNELLO — Sandwich généreux au pain artisanal, viandes marinées et légumes frais',
    altEn: 'PANNELLO Sandwiches — Hearty sandwich on artisanal bread with marinated meats and fresh vegetables',
    focalPosition: 'center 45%',
  },
  tombik: {
    src: '/images/categories/tombik.jpg',
    alt: 'Tombik PANNELLO — Sandwich turc au pain pita doré, viandes grillées, frites, œuf et gruyère',
    altEn: 'PANNELLO Tombik — Turkish round pita sandwich with grilled meats, fries, egg, and Gruyère',
    focalPosition: 'center 50%',
  },
  calzon: {
    src: '/images/categories/calzon.jpg',
    alt: 'Calzon PANNELLO — Chausson de pizza doré au four avec garniture savoureuse et cœur fondant',
    altEn: 'PANNELLO Calzone — Golden oven-baked pizza turnover with savory filling and melted cheese',
    focalPosition: 'center 50%',
  },
};
