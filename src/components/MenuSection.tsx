'use client';

import React, { useRef, useState, useEffect } from 'react';
import type { MenuCategory, MenuItem } from '@/lib/menu-data';
import type { Language, Translations } from '@/lib/translations';
import { ProductCard } from '@/components/ProductCard';
import { CategoryImageCard } from '@/components/CategoryImageCard';
import { Sparkles, AlertCircle } from 'lucide-react';

interface MenuSectionProps {
  category: MenuCategory;
  items: MenuItem[];
  t: Translations;
  language: Language;
}

export function MenuSection({ category, items, t, language }: MenuSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  // Viewport entrance detection via IntersectionObserver
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  if (items.length === 0) return null;

  // Check if items have subcategories (e.g. Standard drinks vs Jus naturels vs Mojito, or Crêpes vs Pancakes)
  const subcategories = Array.from(
    new Set(items.map((i) => i.subcategory).filter(Boolean))
  ) as string[];

  return (
    <section
      ref={sectionRef}
      id={`section-${category.id}`}
      className="scroll-mt-36 pt-4 pb-10 border-b border-[var(--border-color)] last:border-b-0"
      aria-labelledby={`heading-${category.id}`}
    >
      {/* 1. Dedicated Category Image Card with Smooth Entrance Animation */}
      <div
        className={`transition-all duration-700 ease-out will-change-transform motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 ${
          isInView
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-5 scale-[0.98]'
        }`}
      >
        <CategoryImageCard
          category={category}
          t={t}
          language={language}
          itemsCount={items.length}
        />
      </div>

      {/* 2. Category Context Badges / Informational Banners with Staggered Entrance */}
      <div
        className={`transition-all duration-700 delay-100 ease-out motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 ${
          isInView
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4'
        }`}
      >
        {category.id === 'sweets' && (
          <div className="mb-6 p-3 sm:p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#FBBF24] flex-shrink-0" />
              <span className="text-xs sm:text-sm font-bold text-[var(--text-main)]">
                {t.ui.nutellaBannerTitle}
              </span>
            </div>
            <span className="text-xs font-black px-2.5 py-1 rounded-md bg-[#C8102E] text-white shadow-xs">
              {t.ui.nutellaBannerBadge}
            </span>
          </div>
        )}

        {category.id === 'sandwiches' && (
          <div className="mb-6 p-3 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] flex flex-wrap items-center justify-between gap-2 text-xs text-[var(--text-secondary)]">
            <span>{t.ui.sandwichBreadBanner}</span>
            <span className="text-[11px] text-[var(--text-muted)]">{t.ui.sandwichSupplementsBanner}</span>
          </div>
        )}

        {category.id === 'tacos' && (
          <div className="mb-6 p-3 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] flex flex-wrap items-center justify-between gap-2 text-xs text-[var(--text-secondary)]">
            <span>{t.ui.tacosSizesBanner}</span>
            <span className="text-[11px] text-[var(--text-muted)]">{t.ui.tacosSupplementsBanner}</span>
          </div>
        )}

        {(category.id === 'pizza-sauce-rouge' || category.id === 'pizza-sauce-blanche') && (
          <div className="mb-6 p-3 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] flex items-center justify-between gap-2 text-xs text-[var(--text-secondary)]">
            <span>{t.ui.pizzaSizesBanner}</span>
          </div>
        )}

        {category.id === 'calzon' && (
          <div className="mb-6 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-2.5 text-xs text-[var(--text-secondary)]">
            <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-[var(--text-main)]">{t.ui.calzonBannerFillings}</p>
              <p className="text-[11px] text-[var(--text-muted)] mt-0.5">{t.ui.calzonBannerNote}</p>
            </div>
          </div>
        )}
      </div>

      {/* 3. Products List with Staggered Entrance Animation */}
      <div
        className={`transition-all duration-700 delay-200 ease-out will-change-transform motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 ${
          isInView
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-6 scale-[0.99]'
        }`}
      >
        {subcategories.length > 0 ? (
          <div className="space-y-8">
            {subcategories.map((subcat) => {
              const subcatItems = items.filter((i) => i.subcategory === subcat);
              const translatedSubcatTitle = t.subcategories[subcat] || subcat;

              return (
                <div key={subcat} className="space-y-4">
                  <div className="flex items-center gap-2 pb-1.5 border-b border-[var(--border-color)]">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#C8102E]" />
                    <h3 className="text-base sm:text-lg font-black uppercase tracking-wider text-[var(--text-main)] font-heading">
                      {translatedSubcatTitle}
                    </h3>
                    <span className="text-xs text-[var(--text-muted)] font-medium ml-auto">
                      {subcatItems.length} {subcatItems.length > 1 ? t.ui.optionsCountPlural : t.ui.optionsCount}
                    </span>
                  </div>

                  {/* 2-column responsive layout */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {subcatItems.map((item) => (
                      <ProductCard key={item.id} item={item} t={t} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Regular single category grid (2 columns matching sketch) */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map((item) => (
              <ProductCard key={item.id} item={item} t={t} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
