# PANNELLO — TASTE THE BEST | Digital Menu

A premium, modern, responsive digital restaurant menu for **PANNELLO**, designed mobile-first for quick dining access via QR code scanning. Built with Next.js, React, TypeScript, Tailwind CSS, and custom dark/light theme systems.

---

## 📋 Features

- **Exact Header Layout**: 
  - Left: Hamburger button with drawer navigation
  - Center: Mathematically centered official PANNELLO logo (`/assets/pannello_logo.png`)
  - Right: Theme switcher (Dark / Light mode) with persistent memory in `localStorage`
- **Horizontal Rectangular Category Navigation**:
  - Faithfully reproduces the hand-drawn sketch with adjacent rectangular tabs: `[ BURGERS ] [ POCKET ] [ FRIES ] [ DRINKS ] [ SWEETS ] [ PIZZA ] [ SANDWICHS ] [ TACOS ] [ TOMBIK ] [ CALZON ]`
  - Active category highlighted with PANNELLO Brand Red and Brand Yellow
  - Touch-friendly horizontal scrolling on mobile
  - Smooth section scrolling with automatic active tab tracking via `IntersectionObserver`
- **Authentic Restaurant Menu Data**:
  - 10 full categories
  - 100% verified pizza variants (Sauce Rouge & Sauce Blanche) with `Mini | Normal | Mega` pricing in Algerian Dinars (DA)
  - Tacos with `M | L | XL` size columns and optional supplements (Gruyère, Camembert, Oignon caramélisé)
  - Turkish Tombik bun sandwiches
  - Folded Calzon turnovers with multi-filling selector
  - Traditional sandwiches with bread selection (`Pain Brioché` vs `Pain Matlou3`)
  - Real extracted food photography for Tacos, Pizza, Tombik, and Calzon
- **Interactive Multi-Size Price Selector**:
  - Toggling between Mini/Normal/Mega or M/L/XL updates the price badge dynamically in real time
- **Instant Product Search**:
  - Real-time accent-insensitive search (e.g. "vegetarien" matches "Végétarien")
  - Matches dish names, ingredients, subcategories, and categories
  - Clear button and active search result counter
- **Geometric Grid Background**:
  - Adaptive repeating square grid faithfully recreating `image_69fcd23d.png`
  - In dark mode: near-black `#0a0a0d` with crisp white grid lines
  - In light mode: clean light `#f9fafb` with subtle dark grid lines
- **Mobile-First & QR Optimized**:
  - Instant loading, single-hand touch ergonomics, no horizontal viewport overflows
  - Fast slide-in hamburger drawer with category shortcuts

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (tested with Node 20 / Node 22)
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

### Production Build
```bash
npm run build
npm start
```

---

## 📂 Project Structure

```
├── app/
│   ├── globals.css         # Theme custom properties & square-grid pattern
│   ├── layout.tsx          # Root layout, viewport, SEO & Schema.org JSON-LD
│   └── page.tsx            # Main digital menu page assembly
├── components/
│   ├── CategoryNavigation.tsx # Row of adjacent rectangular category tabs
│   ├── Header.tsx             # Centered logo, hamburger trigger, theme toggle
│   ├── MenuSection.tsx        # Responsive 2-column dish grid per category
│   ├── ProductCard.tsx        # Multi-size price selector, bread & filling options
│   ├── SearchBar.tsx          # Accent-insensitive instant product search
│   └── SideDrawer.tsx         # Slide-in quick category & theme drawer
├── hooks/
│   └── use-theme.ts        # Dark/light theme persistence hook
├── lib/
│   └── menu-data.ts        # Structured database with all 10 categories & DA prices
├── public/
│   └── assets/             # Extracted logos and authentic food images
├── MENU_DATA_REVIEW.md     # Audit document of source data & review flags
└── README.md
```

---

## 📝 Menu Data Audit

See [MENU_DATA_REVIEW.md](./MENU_DATA_REVIEW.md) for full details on verified items vs items awaiting Page 2 confirmation from the restaurant.
