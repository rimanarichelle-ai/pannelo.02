'use client';

import React, { useState } from 'react';
import type { MenuItem } from '@/lib/menu-data';
import type { Translations } from '@/lib/translations';
import { Flame, AlertCircle } from 'lucide-react';
import Image from '@/components/Image';

interface ProductCardProps {
  item: MenuItem;
  t: Translations;
}

export function ProductCard({ item, t }: ProductCardProps) {
  // If product has multiple sizes/options (e.g. Mini | Normal | Mega or M | L | XL)
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number>(() => {
    // Default to the middle option (e.g. Normal or L) if available
    if (item.options && item.options.length > 1) {
      return 1;
    }
    return 0;
  });

  // For sandwiches: bread choice
  const [selectedBread, setSelectedBread] = useState<string | null>(
    item.breadOptions && item.breadOptions.length > 0 ? item.breadOptions[0] : null
  );

  // For calzon: filling choice
  const [selectedFilling, setSelectedFilling] = useState<string | null>(
    item.fillingChoices && item.fillingChoices.length > 0 ? item.fillingChoices[0] : null
  );

  // Calculate current price
  const currentPrice = item.options && item.options.length > 0
    ? item.options[selectedOptionIndex].price
    : item.price;

  const translatedSubcategory = item.subcategory
    ? (t.subcategories[item.subcategory] || item.subcategory)
    : undefined;

  return (
    <article
      className="group relative flex flex-col bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[#C8102E]/50 rounded-xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.012] active:scale-[0.985] active:translate-y-0 active:border-[#C8102E] select-none cursor-pointer touch-manipulation"
      id={`item-${item.id}`}
    >
      {/* Top Banner / Image Area */}
      {item.image ? (
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-zinc-950 overflow-hidden flex items-center justify-center border-b border-[var(--border-color)]">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
            className="object-cover group-hover:scale-105 group-active:scale-[1.02] transition-transform duration-300"
            loading="lazy"
          />
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

          {/* Badges on image */}
          <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1.5 z-10">
            {item.popular && (
              <span className="inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#C8102E] text-white shadow-md">
                <Flame className="w-3 h-3 fill-current" />
                {t.ui.popularShort}
              </span>
            )}
            {item.vegetarian && (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-md bg-emerald-600 text-white shadow">
                {t.ui.vegeShort}
              </span>
            )}
            {item.spicy && (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-md bg-amber-600 text-white shadow">
                {t.ui.spicyBadge}
              </span>
            )}
          </div>
        </div>
      ) : (
        /* Card Header without image: Clean typography banner with category accent */
        <div className="px-4 pt-3.5 pb-0 flex items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5">
            {item.popular && (
              <span className="inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#C8102E] text-white">
                <Flame className="w-3 h-3 fill-current" />
                {t.ui.popularBadge}
              </span>
            )}
            {translatedSubcategory && (
              <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] border border-[var(--border-color)]">
                {translatedSubcategory}
              </span>
            )}
            {item.vegetarian && (
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                {t.ui.vegeBadge}
              </span>
            )}
            {item.spicy && (
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                {t.ui.spicyBadge}
              </span>
            )}
          </div>

          {item.needsReview && (
            <span
              title="Donnée extraite en attente de validation du restaurant"
              className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30"
            >
              <AlertCircle className="w-3 h-3" />
              {t.ui.needsReviewBadge}
            </span>
          )}
        </div>
      )}

      {/* Card Content */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Product Name & Current Price */}
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="text-base sm:text-lg font-black tracking-tight text-[var(--text-main)] group-hover:text-[#C8102E] dark:group-hover:text-[#ff4460] font-heading leading-tight transition-colors duration-150">
              {item.name}
            </h3>

            {/* Tactile Price Badge in Algerian Dinars (DA) with active highlight micro-interaction */}
            <div className="flex-shrink-0 text-right">
              {currentPrice !== null && currentPrice !== undefined ? (
                <div className="product-card-price-container inline-flex items-baseline gap-1 px-3 py-1 rounded-lg bg-[#C8102E]/10 dark:bg-[#C8102E]/20 border border-[#C8102E]/30 text-[#C8102E] dark:text-[#ff3b5c] font-black text-base sm:text-lg font-heading shadow-2xs group-hover:bg-[#C8102E] group-hover:text-white group-hover:border-[#FBBF24] group-active:bg-[#C8102E] group-active:text-white group-active:border-[#FBBF24]">
                  <span className="tracking-tight">{currentPrice}</span>
                  <span className="text-xs font-bold text-[var(--text-secondary)] group-hover:text-[#FBBF24] group-active:text-[#FBBF24] uppercase transition-colors duration-150">
                    {t.ui.currency}
                  </span>
                </div>
              ) : (
                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-600 dark:text-amber-400 font-bold text-xs font-heading">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{t.ui.priceToConfirmBadge}</span>
                </div>
              )}
            </div>
          </div>

          {/* Description / Ingredients (Preserving authentic French descriptions) */}
          {item.description && (
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
              {item.description}
            </p>
          )}

          {/* Multi-Size Options Selector (Pizzas: Mini / Normal / Mega; Tacos: M / L / XL) */}
          {item.options && item.options.length > 0 && (
            <div className="mt-2.5 mb-3">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[var(--text-muted)] mb-1.5">
                {t.ui.formatSizeLabel}
              </label>
              <div className="grid grid-cols-3 gap-1.5 p-1 bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] rounded-lg">
                {item.options.map((opt, idx) => {
                  const isSelected = selectedOptionIndex === idx;
                  return (
                    <button
                      key={opt.label}
                      type="button"
                      onClick={() => setSelectedOptionIndex(idx)}
                      className={`min-h-[42px] flex flex-col items-center justify-center py-1.5 px-1 rounded-md text-center transition-all cursor-pointer active:scale-[0.96] ${
                        isSelected
                          ? 'bg-[#C8102E] text-white font-bold shadow-xs'
                          : 'text-[var(--text-secondary)] hover:text-[var(--text-main)] hover:bg-[var(--bg-surface)] active:bg-[var(--bg-surface)]'
                      }`}
                    >
                      <span className="text-xs font-extrabold uppercase">{opt.label}</span>
                      <span className={`text-[11px] ${isSelected ? 'text-[#FBBF24]' : 'text-[var(--text-muted)]'}`}>
                        {opt.price} {t.ui.currency}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Bread Choice Selector (Sandwiches: Brioche / Matlou3) */}
          {item.breadOptions && item.breadOptions.length > 0 && (
            <div className="mt-2 mb-3">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[var(--text-muted)] mb-1.5">
                {t.ui.breadChoiceLabel}
              </label>
              <div className="flex gap-2">
                {item.breadOptions.map((bread) => {
                  const isSelected = selectedBread === bread;
                  return (
                    <button
                      key={bread}
                      type="button"
                      onClick={() => setSelectedBread(bread)}
                      className={`flex-1 min-h-[40px] py-1.5 px-2.5 rounded-lg text-xs font-semibold transition-all border cursor-pointer active:scale-[0.97] ${
                        isSelected
                          ? 'bg-[var(--bg-surface-elevated)] border-[var(--brand-yellow)] text-[var(--brand-yellow-bright)] font-bold shadow-2xs'
                          : 'bg-[var(--bg-surface)] border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-main)]'
                      }`}
                    >
                      {bread}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Filling Choices (Calzon: Viande, Poulet, Poulet mariné, etc.) */}
          {item.fillingChoices && item.fillingChoices.length > 0 && (
            <div className="mt-2 mb-3">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[var(--text-muted)] mb-1.5">
                {t.ui.fillingChoiceLabel}
              </label>
              <div className="flex flex-wrap gap-1.5">
                {item.fillingChoices.map((filling) => {
                  const isSelected = selectedFilling === filling;
                  return (
                    <button
                      key={filling}
                      type="button"
                      onClick={() => setSelectedFilling(filling)}
                      className={`min-h-[36px] py-1 px-3 rounded-md text-[11px] font-medium transition-all border cursor-pointer active:scale-[0.96] ${
                        isSelected
                          ? 'bg-[var(--bg-surface-elevated)] border-[#C8102E] text-[#C8102E] dark:text-[#ff4460] font-bold shadow-2xs'
                          : 'bg-[var(--bg-surface)] border-[var(--border-color)] text-[var(--text-secondary)]'
                      }`}
                    >
                      {filling}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Optional Supplements / Extras (Gruyère, Camembert, Œuf, Oignons caramélisés, Nutella) */}
          {item.supplements && item.supplements.length > 0 && (
            <div className="mt-2.5 pt-2.5 border-t border-[var(--border-color)]">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-[var(--text-muted)] mb-1.5">
                {t.ui.availableSupplementsLabel}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {item.supplements.map((sup) => (
                  <span
                    key={sup.name}
                    className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-md bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] border border-[var(--border-color)]"
                  >
                    <span>{sup.name}</span>
                    <span className="font-bold text-[#C8102E] dark:text-[#FBBF24]">+{sup.price} {t.ui.currency}</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Review note if flagged for verification */}
          {item.reviewNote && (
            <div className="mt-2 text-[11px] leading-tight text-amber-600/90 dark:text-amber-400/90 bg-amber-500/10 border border-amber-500/20 rounded-md p-2 flex items-start gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-amber-500" />
              <span>{item.reviewNote}</span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
