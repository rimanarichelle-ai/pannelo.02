import React, { useState, useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useTheme } from '@/hooks/use-theme';
import { useLanguage } from '@/hooks/use-language';
import { Header } from '@/components/Header';
import { CategoryNavigation } from '@/components/CategoryNavigation';
import { SearchBar } from '@/components/SearchBar';
import { MenuSection } from '@/components/MenuSection';
import { ProductCard } from '@/components/ProductCard';
import { AmbientBackground } from '@/components/AmbientBackground';
import { MENU_CATEGORIES, MENU_ITEMS } from '@/lib/menu-data';
import Image from '@/components/Image';
import { ArrowUp, Utensils, AlertCircle, FileText, Download } from 'lucide-react';
import { MenuSectionSkeleton } from '@/components/Skeletons';

export default function App() {
  const { theme, toggleTheme, mounted } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [activeCategoryId, setActiveCategoryId] = useState<string>('smash-burger');
  const [searchQuery, setSearchQuery] = useState('');
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isUserClickingRef = useRef(false);


  // Dynamic header height tracking for the fixed header spacer & scroll offset
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState<number>(112); // Fallback: mobile ~110px, desktop ~126px

  // Keep spacer height mathematically synchronized with fixed header
  useLayoutEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.getBoundingClientRect().height;
        if (height > 0) {
          setHeaderHeight(Math.round(height));
        }
      }
    };

    updateHeaderHeight();

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined' && headerRef.current) {
      resizeObserver = new ResizeObserver(() => {
        updateHeaderHeight();
      });
      resizeObserver.observe(headerRef.current);
    }

    window.addEventListener('resize', updateHeaderHeight);
    return () => {
      if (resizeObserver) resizeObserver.disconnect();
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, [mounted]);

  // Handle iOS scroll lock and Escape key for Review Audit Modal
  useEffect(() => {
    if (!showReviewModal) return;

    const scrollY = window.scrollY;
    const origPos = document.body.style.position;
    const origTop = document.body.style.top;
    const origLeft = document.body.style.left;
    const origRight = document.body.style.right;
    const origWidth = document.body.style.width;
    const origOverflow = document.body.style.overflow;

    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowReviewModal(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.position = origPos;
      document.body.style.top = origTop;
      document.body.style.left = origLeft;
      document.body.style.right = origRight;
      document.body.style.width = origWidth;
      document.body.style.overflow = origOverflow;
      window.scrollTo(0, scrollY);
    };
  }, [showReviewModal]);

  // Normalize search helper (removes accents and punctuation)
  const normalizeText = (text: string) => {
    return text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  };

  // Filter products based on search query (searches names, descriptions, and both FR/EN categories)
  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const query = normalizeText(searchQuery.trim());
    return MENU_ITEMS.filter((item) => {
      const matchName = normalizeText(item.name).includes(query);
      const matchDesc = item.description ? normalizeText(item.description).includes(query) : false;
      const matchSub = item.subcategory ? normalizeText(item.subcategory).includes(query) : false;
      const matchCat = normalizeText(item.category).includes(query);

      // Also match translated category & subcategory names in active language
      const translatedCat = t.categories[item.category]?.name;
      const matchTranslatedCat = translatedCat ? normalizeText(translatedCat).includes(query) : false;
      const translatedSub = item.subcategory ? t.subcategories[item.subcategory] : undefined;
      const matchTranslatedSub = translatedSub ? normalizeText(translatedSub).includes(query) : false;

      return matchName || matchDesc || matchSub || matchCat || matchTranslatedCat || matchTranslatedSub;
    });
  }, [searchQuery, t]);

  // IntersectionObserver to update active category tab as user scrolls
  useEffect(() => {
    if (searchQuery.trim()) return; // Don't track sections during active search

    const sectionElements = MENU_CATEGORIES.map((cat) =>
      document.getElementById(`section-${cat.id}`)
    ).filter(Boolean) as HTMLElement[];

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isUserClickingRef.current) return;
        // Find the topmost visible section relative to the fixed header bottom
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          visibleEntries.sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top - headerHeight) -
              Math.abs(b.boundingClientRect.top - headerHeight)
          );
          const activeSectionId = visibleEntries[0].target.id.replace('section-', '');
          setActiveCategoryId(activeSectionId);
        }
      },
      {
        rootMargin: `-${headerHeight}px 0px -40% 0px`,
        threshold: [0, 0.25, 0.5],
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      sectionElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [searchQuery, headerHeight]);

  // Handle category tab click with smooth scroll, accounting for permanently fixed header
  const handleSelectCategory = (categoryId: string) => {
    setActiveCategoryId(categoryId);
    setSearchQuery(''); // Clear search to show full section
    isUserClickingRef.current = true;

    const targetEl = document.getElementById(`section-${categoryId}`);
    if (targetEl) {
      // Calculate scroll position accounting for the exact height of the fixed header
      const y = targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight - 8;
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    }

    setTimeout(() => {
      isUserClickingRef.current = false;
    }, 600);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-[100dvh] flex flex-col pannello-grid-pattern selection:bg-[#C8102E] selection:text-white overflow-x-clip">

      {/* 1. Subtle Red Floating Bubbles & Ambient Glow Layer (Background behind content) */}
      <AmbientBackground />

      {/* 2. PERMANENTLY FIXED HEADER & CATEGORY NAVIGATION CONTAINER
          - Strict position: fixed across all devices (Desktop, Tablet, Mobile, iPhone)
          - z-index: 1000
          - Never moves, slides away, fades out, or collapses
          - Opaque background with backdrop blur so content scrolling behind never bleeds through
      */}
      <div
        ref={headerRef}
        id="pannello-fixed-header-container"
        className="fixed top-0 left-0 right-0 w-full z-[1000] bg-[var(--header-bg)] backdrop-blur-md shadow-xs"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          zIndex: 1000,
        }}
      >
        <Header
          theme={theme}
          toggleTheme={toggleTheme}
          language={language}
          setLanguage={setLanguage}
          t={t}
          mounted={mounted}
          categories={MENU_CATEGORIES}
          activeCategoryId={activeCategoryId}
          onSelectCategory={handleSelectCategory}
          onMenuOpenChange={setIsMenuOpen}
        />
        <CategoryNavigation
          categories={MENU_CATEGORIES}
          activeCategoryId={activeCategoryId}
          onSelectCategory={handleSelectCategory}
          t={t}
        />
      </div>

      {/* 3. Dedicated Layout Spacer:
          Because position: fixed removes the header from document flow, this spacer
          guarantees the search bar and first category content start immediately below the header
          with 0px covered and 0px unwanted blank space.
      */}
      <div
        id="pannello-header-spacer"
        style={{ height: `${headerHeight}px` }}
        className="w-full shrink-0"
        aria-hidden="true"
      />

      {/* 4. Main Page Content (Scrolls normally underneath the permanently fixed header) */}
      <div className="relative z-10 flex flex-col flex-1">
        {/* Search Bar */}
        <div className="w-full bg-[var(--bg-main)]/85 backdrop-blur-md border-b border-[var(--border-color)]">
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            resultCount={filteredItems ? filteredItems.length : undefined}
            totalCount={MENU_ITEMS.length}
            t={t}
          />
        </div>

        {/* Main Menu Body */}
        <main className="flex-1 max-w-6xl w-full mx-auto px-3 sm:px-6 py-4">
          {!mounted ? (
            /* Shimmer Skeleton Placeholder while initial theme and data hydrate */
            <div className="space-y-4">
              <MenuSectionSkeleton cardCount={4} />
              <MenuSectionSkeleton cardCount={2} />
            </div>
          ) : filteredItems !== null ? (
            /* Search Results View */
            <div className="py-6">
              <div className="flex items-center justify-between mb-6 pb-2 border-b border-[var(--border-color)]">
                <div>
                  <h1 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[var(--text-main)] font-heading">
                    {t.ui.searchResultsHeading}
                  </h1>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                    {t.ui.forQuery} « <span className="font-bold text-[var(--brand-yellow)]">{searchQuery}</span> » ({filteredItems.length} {filteredItems.length > 1 ? t.ui.foundDishesPlural : t.ui.foundDishesSingular})
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="text-xs font-bold px-3 py-1.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] active:scale-95 transition-all text-[var(--text-main)] cursor-pointer"
                >
                  {t.ui.resetSearch}
                </button>
              </div>

              {filteredItems.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredItems.map((item) => (
                    <ProductCard key={item.id} item={item} t={t} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 px-4 bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-xl my-6 shadow-xs">
                  <Utensils className="w-12 h-12 mx-auto text-[var(--text-muted)] mb-3 opacity-50" />
                  <h2 className="text-lg font-bold text-[var(--text-main)] mb-1">
                    {t.ui.noResultsTitle}
                  </h2>
                  <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto mb-6">
                    {t.ui.noResultsDesc}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="px-5 py-2.5 rounded-lg bg-[#C8102E] hover:bg-[#a50d25] text-white font-bold text-sm shadow transition-all cursor-pointer font-heading active:scale-95"
                  >
                    {t.ui.viewAllMenu}
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Normal Category Sections View */
            <div className="space-y-4">
              {MENU_CATEGORIES.map((category) => {
                const categoryItems = MENU_ITEMS.filter((item) => item.category === category.id);
                return (
                  <MenuSection
                    key={category.id}
                    category={category}
                    items={categoryItems}
                    t={t}
                    language={language}
                  />
                );
              })}
            </div>
          )}
        </main>

        {/* Mobile Quick Scroll To Top Floating Button (with iPhone Safe Area Insets) */}
        <button
          type="button"
          onClick={scrollToTop}
          aria-label={t.ui.backToTop}
          className="fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))] right-5 z-[500] flex items-center justify-center w-12 h-12 rounded-full bg-[#C8102E] text-white shadow-xl hover:bg-[#a50d25] active:scale-90 transition-all cursor-pointer focus:outline-none border border-white/20"
        >
          <ArrowUp className="w-5 h-5" />
        </button>

        {/* Footer with Brand Identity, Review Doc Access & iPhone Safe Area */}
        <footer className="mt-14 border-t-2 border-[var(--border-color)] bg-[var(--bg-surface)] py-10 px-4 text-center transition-colors safe-bottom">
          <div className="max-w-4xl mx-auto flex flex-col items-center justify-center space-y-4">
            <div className="relative w-40 h-11">
              <Image
                src="/assets/pannello_logo_hero.png"
                alt="PANNELLO"
                fill
                sizes="160px"
                className="object-contain drop-shadow-xs"
              />
            </div>

            <p className="text-xs font-black uppercase tracking-widest text-[var(--brand-yellow)] font-heading">
              {t.ui.footerSlogan}
            </p>

            <p className="text-xs text-[var(--text-secondary)] max-w-md leading-relaxed">
              {t.ui.footerDesc}
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setShowReviewModal(true)}
                className="inline-flex items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-[var(--text-main)] underline underline-offset-4 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                {t.ui.viewAuditDoc}
              </button>
              <a
                href="/pannello-digital-menu.zip"
                download="pannello-digital-menu.zip"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface-elevated)] hover:bg-[var(--brand-yellow)] hover:text-black transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                {t.ui.downloadZip}
              </a>
            </div>

            <div className="text-[11px] text-[var(--text-muted)] pt-4 border-t border-[var(--border-color)] w-full">
              © {new Date().getFullYear()} PANNELLO. {t.ui.allRightsReserved}
            </div>
          </div>
        </footer>

        {/* Data Audit & Review Modal (Portaled directly to document.body at z-[1300]) */}
        {showReviewModal && typeof document !== 'undefined' && createPortal(
          <div
            className="fixed inset-0 z-[1300] flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-xs safe-top safe-bottom"
            role="dialog"
            aria-modal="true"
            aria-label={t.ui.auditModalTitle}
            onClick={() => setShowReviewModal(false)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-2xl max-w-2xl w-full max-h-[min(88vh,calc(100dvh-2rem))] flex flex-col shadow-2xl shadow-black/80 overflow-hidden animate-in fade-in zoom-in-95 duration-150"
            >
              <div className="p-4 border-b border-[var(--border-color)] flex items-center justify-between bg-[var(--bg-surface-elevated)] shrink-0">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-[#C8102E]" />
                  <h3 className="font-heading font-black text-sm uppercase tracking-wider text-[var(--text-main)]">
                    {t.ui.auditModalTitle}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setShowReviewModal(false)}
                  aria-label={t.ui.closeModal}
                  className="w-9 h-9 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] text-[var(--text-main)] active:scale-95 flex items-center justify-center cursor-pointer transition-colors"
                >
                  <span className="text-sm font-bold">✕</span>
                </button>
              </div>

              <div className="p-5 overflow-y-auto overscroll-contain text-xs sm:text-sm text-[var(--text-secondary)] space-y-4 no-scrollbar touch-pan-y flex-1">
                <div className="p-3.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <span className="font-bold text-emerald-300">{t.ui.auditIntegratedHeading}</span>
                  <ul className="mt-1.5 text-xs space-y-1 list-disc list-inside">
                    <li><strong>1. Smash Burger (6)</strong> : Classic (300 DA), Stacker (350 DA), Chicken Crispy (350 DA), Wham (400 DA), Big Classic (500 DA), Pannelo (600 DA)</li>
                    <li><strong>2. Pocket (3)</strong> : Chicken (500 DA), Beef (500 DA), Pannelo (600 DA)</li>
                    <li><strong>3. Fries (2)</strong> : Classic (150 DA), Cheesy (250 DA)</li>
                    <li><strong>4. Drinks / Boissons (12)</strong> : Standard drinks (4), Jus naturels pressés (5), Mojitos (3)</li>
                    <li><strong>5. Sweets (18)</strong> : Crêpes sucrées (15), Pancakes (3) + Option Supplément Nutella (+100 DA)</li>
                    <li><strong>6. Pizza Sauce Rouge (9)</strong> : Margherita, 3 Cheese, Chicken, Beef, Pepperoni, Smoky Chicken, Tuna Pop, Mexicana, Végétarien (Mini / Normal / Mega)</li>
                    <li><strong>7. Pizza Sauce Blanche (6)</strong> : Cheese Lover, Smoky Saumon, Shrimp, Mushroom, Pannelo Royal, Pannelo Signature (Mini / Normal / Mega)</li>
                    <li><strong>8. Tacos (5)</strong> : Chicken, Beef, Crispy, Mix, Gratiné (M / L / XL) + 3 Suppléments</li>
                    <li><strong>9. Sandwiches (3)</strong> : Panny (350 DA), Chicky (350 DA), Mixto (450 DA) + 4 Suppléments + Pain Brioche / Matlou3</li>
                    <li><strong>10. Tombik (3)</strong> : Chicken (550 DA), Beef (550 DA), Crispy (550 DA)</li>
                    <li><strong>11. Calzon (1)</strong> : Base sauce tomate & cheddar avec 6 garnitures au choix</li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300">
                  <span className="font-bold text-amber-200">{t.ui.auditFlaggedHeading}</span>
                  <ul className="mt-1 text-xs space-y-1 list-disc list-inside">
                    <li><strong>Calzon</strong> : Le prix exact n&apos;est pas distinctement visible sur l&apos;image source du menu papier. Il est représenté comme null et affiché sous la mention « {t.ui.priceToConfirmBadge} » (jamais 0 DA ni gratuit). Les 6 garnitures sont confirmées.</li>
                    <li><strong>Tacos Gratiné</strong> : Ingrédients non détaillés sur la maquette d&apos;origine. Prix M (650), L (850) et XL (1050) confirmés.</li>
                    <li><strong>Pizza Pannelo Signature</strong> : Recette autorisant le choix de sauce blanche ou sauce tomate.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-[var(--text-main)] mb-1">{t.ui.auditPhotosHeading}</h4>
                  <p className="text-xs">
                    {t.ui.auditPhotosDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
      </div>
    </div>
  );
}
