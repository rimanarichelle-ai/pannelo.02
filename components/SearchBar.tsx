'use client';

import React from 'react';
import { Search, X } from 'lucide-react';
import type { Translations } from '@/lib/translations';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  resultCount?: number;
  totalCount?: number;
  t: Translations;
}

export function SearchBar({
  searchQuery,
  onSearchChange,
  resultCount,
  totalCount,
  t,
}: SearchBarProps) {
  return (
    <div className="w-full max-w-2xl mx-auto px-3 sm:px-4 py-2.5">
      <div className="relative flex items-center">
        {/* Search Icon */}
        <div className="absolute left-3.5 flex items-center pointer-events-none text-[var(--text-muted)]">
          <Search className="w-4 h-4" />
        </div>

        {/* Input: text-base (16px) on mobile prevents iOS Safari auto-zoom on focus */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={t.ui.searchPlaceholder}
          aria-label={t.ui.searchAriaLabel}
          className="w-full pl-10 pr-24 py-2.5 text-base sm:text-sm bg-[var(--bg-surface)] text-[var(--text-main)] placeholder:text-[var(--text-muted)] border border-[var(--border-color)] rounded-xl shadow-xs focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/20 transition-all outline-none"
        />

        {/* Right side controls with iOS-friendly touch target */}
        {searchQuery ? (
          <div className="absolute right-1.5 flex items-center gap-1">
            {resultCount !== undefined && (
              <span className="text-[11px] px-2 py-0.5 rounded-md bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] font-bold">
                {resultCount} {resultCount > 1 ? t.ui.foundDishesPlural : t.ui.foundDishesSingular}
              </span>
            )}
            <button
              type="button"
              onClick={() => onSearchChange('')}
              aria-label={t.ui.clearSearch}
              className="flex items-center justify-center w-10 h-10 text-[var(--text-muted)] hover:text-[var(--text-main)] active:scale-90 transition-transform cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          totalCount !== undefined && (
            <div className="absolute right-3.5 hidden sm:flex items-center pointer-events-none">
              <span className="text-xs text-[var(--text-muted)] font-medium">
                {totalCount} {t.ui.recipesCount}
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
}
