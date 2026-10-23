export type Language = 'fr' | 'en';

export interface CategoryTranslation {
  name: string;
  tabLabel: string;
  description: string;
}

export interface Translations {
  categories: Record<string, CategoryTranslation>;
  subcategories: Record<string, string>;
  ui: {
    searchPlaceholder: string;
    searchAriaLabel: string;
    clearSearch: string;
    recipesCount: string;
    foundDishesSingular: string;
    foundDishesPlural: string;
    searchResultsHeading: string;
    forQuery: string;
    resetSearch: string;
    noResultsTitle: string;
    noResultsDesc: string;
    viewAllMenu: string;
    backToTop: string;
    footerSlogan: string;
    footerDesc: string;
    viewAuditDoc: string;
    downloadZip: string;
    allRightsReserved: string;
    popularBadge: string;
    popularShort: string;
    vegeBadge: string;
    vegeShort: string;
    spicyBadge: string;
    needsReviewBadge: string;
    priceToConfirmBadge: string;
    formatSizeLabel: string;
    breadChoiceLabel: string;
    fillingChoiceLabel: string;
    availableSupplementsLabel: string;
    currency: string;
    drawerTitle: string;
    drawerMenuQr: string;
    allCategoriesHeader: string;
    appearanceSection: string;
    languageSection: string;
    darkModeActive: string;
    lightModeActive: string;
    clickToToggle: string;
    openStatus: string;
    scanQrFooter: string;
    closeMenu: string;
    openMenu: string;
    toggleThemeAria: string;
    toggleLangAria: string;
    optionsCount: string;
    optionsCountPlural: string;
    // Banners
    nutellaBannerTitle: string;
    nutellaBannerBadge: string;
    sandwichBreadBanner: string;
    sandwichSupplementsBanner: string;
    tacosSizesBanner: string;
    tacosSupplementsBanner: string;
    pizzaSizesBanner: string;
    calzonBannerFillings: string;
    calzonBannerNote: string;
    // Audit Modal
    auditModalTitle: string;
    closeModal: string;
    auditIntegratedHeading: string;
    auditFlaggedHeading: string;
    auditPhotosHeading: string;
    auditPhotosDesc: string;
    // Three-Dot Quick Links Menu
    quickLinksTitle: string;
    quickLinksSubtitle: string;
    quickLinksInstagram: string;
    quickLinksTiktok: string;
    quickLinksFacebook: string;
    quickLinksMaps: string;
    quickLinksMapsAddress: string;
    quickLinksGetDirections: string;
    quickLinksAria: string;
    quickLinksCloseAria: string;
    threeDotMenuAria: string;
    categoriesMenuTitle: string;
    socialMenuTitle: string;
    locationMenuTitle: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  fr: {
    categories: {
      'smash-burger': {
        name: 'Smash Burger',
        tabLabel: 'BURGERS',
        description: 'Steaks pur bœuf écrasés à la plancha, croustillants et juteux, servis dans un pain brioché toasté.',
      },
      pocket: {
        name: 'Pocket',
        tabLabel: 'POCKET',
        description: 'Pockets généreux garnis de viandes savoureuses, frites ou riz, nappés de sauces onctueuses.',
      },
      fries: {
        name: 'Fries',
        tabLabel: 'FRIES',
        description: 'Frites croustillantes dorées à point, portions simples ou généreusement nappées de sauce gruyère.',
      },
      drinks: {
        name: 'Drinks / Boissons',
        tabLabel: 'DRINKS',
        description: 'Eaux minérales, sodas frais, cafés, thés, mojitos rafraîchissants et jus de fruits naturels pressés.',
      },
      sweets: {
        name: 'Sweets',
        tabLabel: 'SWEETS',
        description: 'Crêpes sucrées crousti-moelleuses, pancakes dorés et garnitures gourmandes chocolatées.',
      },
      'pizza-sauce-rouge': {
        name: 'Pizza Sauce Rouge',
        tabLabel: 'PIZZA ROUGE',
        description: 'Pizzas artisanales base sauce tomate mijotée et cheddar fondant, cuites au four. Disponibles en Mini, Normal et Mega.',
      },
      'pizza-sauce-blanche': {
        name: 'Pizza Sauce Blanche',
        tabLabel: 'PIZZA BLANCHE',
        description: 'Pizzas artisanales onctueuses base crème blanche et fromages raffinés. Disponibles en Mini, Normal et Mega.',
      },
      tacos: {
        name: 'Tacos',
        tabLabel: 'TACOS',
        description: 'Tacos français garnis de viandes savoureuses, frites dorées, sauce fromagère onctueuse et cheddar fondu.',
      },
      sandwiches: {
        name: 'Sandwiches',
        tabLabel: 'SANDWICHES',
        description: 'Sandwiches gourmands au pain brioché moelleux ou pain matlou3 traditionnel algérien.',
      },
      tombik: {
        name: 'Tombik',
        tabLabel: 'TOMBIK',
        description: 'Sandwiches turcs au pain pita rond et aéré, garnis de viandes dorées, frites croustillantes, œuf et gruyère.',
      },
      calzon: {
        name: 'Calzon',
        tabLabel: 'CALZON',
        description: 'Chaussons de pâte à pizza croustillants et dorés au four, cœur fondant sauce tomate, cheddar et garniture au choix.',
      },
    },
    subcategories: {
      'Standard drinks': 'Boissons standard',
      'Jus naturels': 'Jus naturels pressés',
      Mojito: 'Mojitos rafraîchissants',
      Crêpes: 'Crêpes sucrées',
      Pancakes: 'Pancakes dorés',
    },
    ui: {
      searchPlaceholder: 'Rechercher une pizza, burger, tacos, sauce...',
      searchAriaLabel: 'Rechercher des produits sur la carte',
      clearSearch: 'Effacer la recherche',
      recipesCount: 'recettes',
      foundDishesSingular: 'plat trouvé',
      foundDishesPlural: 'plats trouvés',
      searchResultsHeading: 'Résultats de recherche',
      forQuery: 'Pour',
      resetSearch: 'Réinitialiser la carte',
      noResultsTitle: 'Aucun plat ne correspond à votre recherche',
      noResultsDesc: 'Vérifiez l’orthographe ou essayez un mot-clé plus général (ex. pizza, poulet, tacos, sauce).',
      viewAllMenu: 'Voir toute la carte',
      backToTop: 'Retourner en haut de la page',
      footerSlogan: 'PANNELLO — TASTE THE BEST',
      footerDesc: 'Menu numérique officiel disponible par scan de code QR en restaurant. Tous nos prix sont affichés en Dinars Algériens (DA).',
      viewAuditDoc: 'Consulter le document d’audit des données (MENU_DATA_REVIEW.md)',
      downloadZip: 'Télécharger l’archive ZIP du projet',
      allRightsReserved: 'Tous droits réservés.',
      popularBadge: 'Populaire',
      popularShort: 'Populaire',
      vegeBadge: 'Végétarien',
      vegeShort: 'Végé',
      spicyBadge: 'Piquant',
      needsReviewBadge: 'À vérifier',
      priceToConfirmBadge: 'Prix à confirmer',
      formatSizeLabel: 'Format / Taille :',
      breadChoiceLabel: 'Choix du Pain :',
      fillingChoiceLabel: 'Garniture au choix :',
      availableSupplementsLabel: 'Suppléments disponibles :',
      currency: 'DA',
      drawerTitle: 'TASTE THE BEST',
      drawerMenuQr: 'Menu Numérique QR',
      allCategoriesHeader: 'Toutes les catégories',
      appearanceSection: 'Préférence d’affichage',
      languageSection: 'Langue de l’interface',
      darkModeActive: 'Mode Sombre Actif',
      lightModeActive: 'Mode Clair Actif',
      clickToToggle: 'Cliquez pour basculer',
      openStatus: 'Ouvert',
      scanQrFooter: 'Scannez le code QR sur votre table pour consulter la carte instantanément.',
      closeMenu: 'Fermer le menu',
      openMenu: 'Ouvrir le menu de navigation et catégories',
      toggleThemeAria: 'Basculer le thème clair/sombre',
      toggleLangAria: 'Changer la langue (FR / EN)',
      optionsCount: 'option',
      optionsCountPlural: 'options',
      nutellaBannerTitle: 'Option gourmande : Supplément Nutella',
      nutellaBannerBadge: '+100 DA',
      sandwichBreadBanner: 'Choix de pain au comptoir : Brioche ou Matlou3 traditionnel',
      sandwichSupplementsBanner: 'Suppléments : Gruyère (+150 DA), Cheddar (+150 DA), Camembert (+100 DA), Œuf (+50 DA)',
      tacosSizesBanner: 'Formats au choix : M (Moyen), L (Large), XL (Extra Large)',
      tacosSupplementsBanner: 'Suppléments : Gruyère (+200 DA), Camembert (+100 DA), Oignon caramélisé (+50 DA)',
      pizzaSizesBanner: 'Formats au choix : Mini (individuelle), Normal (standard), Mega (géante à partager)',
      calzonBannerFillings: 'Garnitures au choix : Viande, Poulet, Poulet mariné, Poulet fumé, 3 Fromage, Thon',
      calzonBannerNote: 'Le prix exact du calzon n’est pas distinctement visible sur la maquette d’origine et reste à confirmer auprès du restaurateur.',
      auditModalTitle: 'Audit des Données du Menu (Source: MENU_DATA_REVIEW.md)',
      closeModal: 'Fermer',
      auditIntegratedHeading: '✓ 68 Produits & 11 Catégories Officiellement Intégrés :',
      auditFlaggedHeading: '⚠ Points Flagués pour Vérification Restaurateur :',
      auditPhotosHeading: 'Photographies Authentiques Découpées :',
      auditPhotosDesc: 'Les photos réelles des Tacos, de la Pizza Pepperoni, du Tombik et du Calzon ont été extraites avec précision depuis les supports visuels PANNELLO pour une fidélité graphique absolue.',
      // Three-Dot Quick Links Menu
      quickLinksTitle: 'PANNELLO — Accès Rapide',
      quickLinksSubtitle: 'Réseaux officiels & localisation',
      quickLinksInstagram: 'Instagram officiel',
      quickLinksTiktok: 'TikTok officiel',
      quickLinksFacebook: 'Page Facebook',
      quickLinksMaps: 'Nous Trouver sur Google Maps',
      quickLinksMapsAddress: 'Rue Belsaadi Abdelkader, Khemis Miliana',
      quickLinksGetDirections: 'Ouvrir dans Google Maps',
      quickLinksAria: 'Ouvrir les réseaux sociaux et la localisation',
      quickLinksCloseAria: 'Fermer le menu des réseaux',
      threeDotMenuAria: 'Ouvrir le menu principal (catégories, langue, réseaux, localisation)',
      categoriesMenuTitle: 'Catégories du Menu',
      socialMenuTitle: 'Réseaux Sociaux',
      locationMenuTitle: 'Notre Restaurant',
    },
  },
  en: {
    categories: {
      'smash-burger': {
        name: 'Smash Burger',
        tabLabel: 'BURGERS',
        description: 'Crispy and juicy 100% beef patties smashed on the griddle, served in a toasted brioche bun.',
      },
      pocket: {
        name: 'Pocket',
        tabLabel: 'POCKET',
        description: 'Generous pocket sandwiches filled with grilled meats, fries or rice, drizzled with savory sauces.',
      },
      fries: {
        name: 'Fries',
        tabLabel: 'FRIES',
        description: 'Golden crispy fries, served plain or loaded with rich Gruyère cheese sauce.',
      },
      drinks: {
        name: 'Drinks / Beverages',
        tabLabel: 'DRINKS',
        description: 'Mineral water, sodas, coffees, teas, refreshing mojitos, and freshly squeezed natural fruit juices.',
      },
      sweets: {
        name: 'Sweets & Desserts',
        tabLabel: 'SWEETS',
        description: 'Crispy-fluffy sweet crepes, golden pancakes, and decadent chocolate toppings.',
      },
      'pizza-sauce-rouge': {
        name: 'Red Sauce Pizza',
        tabLabel: 'RED PIZZA',
        description: 'Artisanal stone-baked pizzas with simmered tomato sauce and melted cheddar. Available in Mini, Normal, and Mega.',
      },
      'pizza-sauce-blanche': {
        name: 'White Sauce Pizza',
        tabLabel: 'WHITE PIZZA',
        description: 'Creamy artisanal stone-baked pizzas with white sauce and specialty cheeses. Available in Mini, Normal, and Mega.',
      },
      tacos: {
        name: 'French Tacos',
        tabLabel: 'TACOS',
        description: 'Authentic French tacos loaded with savory meats, golden fries, homemade cheese sauce, and cheddar.',
      },
      sandwiches: {
        name: 'Sandwiches',
        tabLabel: 'SANDWICHES',
        description: 'Savory sandwiches served in soft brioche bun or traditional artisanal Algerian matlou3 bread.',
      },
      tombik: {
        name: 'Tombik',
        tabLabel: 'TOMBIK',
        description: 'Turkish round pita bun sandwiches stuffed with golden meats, crispy fries, egg, and Gruyère.',
      },
      calzon: {
        name: 'Calzone',
        tabLabel: 'CALZONE',
        description: 'Oven-baked golden folded pizza turnovers with tomato sauce, cheddar, and your choice of filling.',
      },
    },
    subcategories: {
      'Standard drinks': 'Standard Drinks',
      'Jus naturels': 'Fresh Squeezed Juices',
      Mojito: 'Refreshing Mojitos',
      Crêpes: 'Sweet Crepes',
      Pancakes: 'Golden Pancakes',
    },
    ui: {
      searchPlaceholder: 'Search for pizza, burger, tacos, sauce...',
      searchAriaLabel: 'Search menu items',
      clearSearch: 'Clear search',
      recipesCount: 'items',
      foundDishesSingular: 'item found',
      foundDishesPlural: 'items found',
      searchResultsHeading: 'Search Results',
      forQuery: 'For',
      resetSearch: 'Reset search',
      noResultsTitle: 'No dishes match your search',
      noResultsDesc: 'Check your spelling or try a more general keyword (e.g. pizza, chicken, tacos, sauce).',
      viewAllMenu: 'View entire menu',
      backToTop: 'Back to top',
      footerSlogan: 'PANNELLO — TASTE THE BEST',
      footerDesc: 'Official digital restaurant menu accessible via QR code scan. All prices are in Algerian Dinars (DA).',
      viewAuditDoc: 'View data audit document (MENU_DATA_REVIEW.md)',
      downloadZip: 'Download project ZIP archive',
      allRightsReserved: 'All rights reserved.',
      popularBadge: 'Popular',
      popularShort: 'Popular',
      vegeBadge: 'Vegetarian',
      vegeShort: 'Veg',
      spicyBadge: 'Spicy',
      needsReviewBadge: 'To verify',
      priceToConfirmBadge: 'Price to be confirmed',
      formatSizeLabel: 'Format / Size:',
      breadChoiceLabel: 'Bread Choice:',
      fillingChoiceLabel: 'Choice of Filling:',
      availableSupplementsLabel: 'Available Extras:',
      currency: 'DA',
      drawerTitle: 'TASTE THE BEST',
      drawerMenuQr: 'Digital QR Menu',
      allCategoriesHeader: 'All Categories',
      appearanceSection: 'Display Preference',
      languageSection: 'Interface Language',
      darkModeActive: 'Dark Mode Active',
      lightModeActive: 'Light Mode Active',
      clickToToggle: 'Click to toggle',
      openStatus: 'Open',
      scanQrFooter: 'Scan the QR code at your table to explore the digital menu instantly.',
      closeMenu: 'Close menu',
      openMenu: 'Open category navigation drawer',
      toggleThemeAria: 'Toggle light/dark theme',
      toggleLangAria: 'Switch language (FR / EN)',
      optionsCount: 'option',
      optionsCountPlural: 'options',
      nutellaBannerTitle: 'Sweet treat: Nutella Supplement',
      nutellaBannerBadge: '+100 DA',
      sandwichBreadBanner: 'Bread choice at the counter: Brioche or traditional Matlou3',
      sandwichSupplementsBanner: 'Extras: Gruyère (+150 DA), Cheddar (+150 DA), Camembert (+100 DA), Egg (+50 DA)',
      tacosSizesBanner: 'Sizes available: M (Medium), L (Large), XL (Extra Large)',
      tacosSupplementsBanner: 'Extras: Gruyère (+200 DA), Camembert (+100 DA), Caramelized onions (+50 DA)',
      pizzaSizesBanner: 'Sizes available: Mini (single), Normal (standard), Mega (family sharing)',
      calzonBannerFillings: 'Fillings available: Beef, Chicken, Marinated chicken, Smoked chicken, 3 Cheeses, Tuna',
      calzonBannerNote: 'The exact calzone price is not clearly visible on the original menu sheet and is awaiting confirmation from the restaurant.',
      auditModalTitle: 'Menu Data Audit (Source: MENU_DATA_REVIEW.md)',
      closeModal: 'Close',
      auditIntegratedHeading: '✓ 68 Dishes & 11 Categories Officially Integrated:',
      auditFlaggedHeading: '⚠ Points Flagged for Restaurant Verification:',
      auditPhotosHeading: 'Authentic Extracted Photography:',
      auditPhotosDesc: 'Real food photography for Tacos, Pepperoni Pizza, Tombik, and Calzone were cleanly extracted from official PANNELLO graphic assets for maximum visual fidelity.',
      // Three-Dot Quick Links Menu
      quickLinksTitle: 'PANNELLO — Quick Links',
      quickLinksSubtitle: 'Official socials & location',
      quickLinksInstagram: 'Official Instagram',
      quickLinksTiktok: 'Official TikTok',
      quickLinksFacebook: 'Facebook Page',
      quickLinksMaps: 'Find Us on Google Maps',
      quickLinksMapsAddress: 'Rue Belsaadi Abdelkader, Khemis Miliana',
      quickLinksGetDirections: 'Open in Google Maps',
      quickLinksAria: 'Open social media and location menu',
      quickLinksCloseAria: 'Close social media menu',
      threeDotMenuAria: 'Open main navigation menu (categories, language, socials, location)',
      categoriesMenuTitle: 'Menu Categories',
      socialMenuTitle: 'Social Media',
      locationMenuTitle: 'Our Restaurant',
    },
  },
};
