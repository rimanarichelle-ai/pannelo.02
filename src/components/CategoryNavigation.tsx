'use client';

import React, { useRef, useEffect } from 'react';
import type { MenuCategory } from '@/lib/menu-data';
import type { Translations } from '@/lib/translations';

interface CategoryNavigationProps {
  categories: MenuCategory[];
  activeCategoryId: string;
  onSelectCategory: (id: string) => void;
  t: Translations;
}

export function CategoryNavigation({
  categories,
  activeCategoryId,
  onSelectCategory,
  t,
}: CategoryNavigationProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);

  // Smoothly center the active tab into view when active category changes
  useEffect(() => {
    if (activeTabRef.current && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const tab = activeTabRef.current;
      const containerWidth = container.offsetWidth;
      const tabLeft = tab.offsetLeft;
      const tabWidth = tab.offsetWidth;

      const targetScroll = tabLeft - (containerWidth / 2) + (tabWidth / 2);
      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth',
      });
    }
  }, [activeCategoryId]);

  return (
    <nav
      className="w-full bg-[var(--nav-bg)] backdrop-blur-md border-b-2 border-[var(--brand-red)] shadow-xs transition-colors duration-200"
      aria-label={t.ui.allCategoriesHeader}
    >
      <div className="max-w-6xl mx-auto px-0 sm:px-4">
        {/* Horizontal Row of Adjacent Rectangular Tabs with native touch momentum */}
        <div
          ref={scrollContainerRef}
          className="flex flex-nowrap overflow-x-auto no-scrollbar border-x border-[var(--border-color)] divide-x divide-[var(--border-color)] select-none touch-pan-x overscroll-x-contain"
          role="tablist"
        >
          {categories.map((category, index) => {
            const isActive = activeCategoryId === category.id;
            const tabLabel = t.categories[category.id]?.tabLabel || category.tabLabel;

            return (
              <button
                key={category.id}
                ref={isActive ? activeTabRef : null}
                role="tab"
                aria-selected={isActive}
                aria-controls={`section-${category.id}`}
                id={`tab-${category.id}`}
                onClick={() => onSelectCategory(category.id)}
                style={{ animationDelay: `${index * 35}ms` }}
                className={`flex-shrink-0 flex items-center justify-center min-h-[44px] sm:min-h-[46px] px-3.5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-black tracking-wider uppercase transition-all duration-150 cursor-pointer rounded-none relative focus:outline-none active:scale-[0.98] whitespace-nowrap ${
                  isActive
                    ? 'bg-[#C8102E] text-white shadow-[inset_0_-2px_4px_rgba(0,0,0,0.2),0_4px_14px_rgba(200,16,46,0.25)]'
                    : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-main)] hover:bg-[var(--bg-surface-elevated)] active:bg-[var(--bg-surface-elevated)]'
                }`}
              >
                {/* Active indicator bar in PANNELLO yellow */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#FBBF24] shadow-xs" />
                )}
                <span className="relative z-10 flex items-center gap-1.5 font-heading">
                  {tabLabel}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
