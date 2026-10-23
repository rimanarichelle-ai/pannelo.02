'use client';

import React, { useState } from 'react';
import type { MenuCategory } from '@/lib/menu-data';
import type { Language, Translations } from '@/lib/translations';
import { CATEGORY_IMAGES } from '@/lib/category-images';
import {
  Flame,
  Layers,
  Sparkles,
  GlassWater,
  CakeSlice,
  Pizza,
  Sandwich,
  Utensils,
  Disc,
  ChefHat,
} from 'lucide-react';

interface CategoryImageCardProps {
  category: MenuCategory;
  t: Translations;
  language: Language;
  itemsCount: number;
}

export function CategoryImageCard({
  category,
  t,
  language,
  itemsCount,
}: CategoryImageCardProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageConfig = CATEGORY_IMAGES[category.id];

  const categoryName = t.categories[category.id]?.name || category.name;
  const categoryTabLabel = t.categories[category.id]?.tabLabel || category.tabLabel;
  const categoryDesc = t.categories[category.id]?.description || category.description;
  const altText = language === 'en'
    ? (imageConfig?.altEn || categoryName)
    : (imageConfig?.alt || categoryName);

  // Map category icon
  const getIcon = () => {
    switch (category.iconName) {
      case 'Flame':
        return <Flame className="w-4 h-4 text-white" />;
      case 'Layers':
        return <Layers className="w-4 h-4 text-[#FBBF24]" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4 text-[#F59E0B]" />;
      case 'GlassWater':
        return <GlassWater className="w-4 h-4 text-sky-400" />;
      case 'CakeSlice':
        return <CakeSlice className="w-4 h-4 text-pink-300" />;
      case 'Pizza':
        return <Pizza className="w-4 h-4 text-[#FBBF24]" />;
      case 'Sandwich':
        return <Sandwich className="w-4 h-4 text-[#FBBF24]" />;
      case 'Utensils':
        return <Utensils className="w-4 h-4 text-white" />;
      case 'Disc':
        return <Disc className="w-4 h-4 text-[#F59E0B]" />;
      case 'ChefHat':
        return <ChefHat className="w-4 h-4 text-[#FBBF24]" />;
      default:
        return <Utensils className="w-4 h-4 text-white" />;
    }
  };

  return (
    <div className="relative w-full mb-6 rounded-2xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-md group transition-all duration-300 hover:shadow-xl hover:border-[#C8102E]/60 select-none">
      {/* Brand Red Accent Top Strip */}
      <div className="h-1 w-full bg-gradient-to-r from-[#C8102E] via-[#FBBF24] to-[#C8102E]" />

      {/* Hero Image Container with optimized responsive height & Shimmer Skeleton */}
      <div className="relative w-full aspect-[16/8] sm:aspect-[21/8] max-h-[220px] sm:max-h-[260px] overflow-hidden bg-zinc-900">
        {!imageLoaded && !imageError && (
          <div className="shimmer-skeleton absolute inset-0 z-0 bg-zinc-800" aria-hidden="true" />
        )}

        {!imageError && imageConfig?.src ? (
          <img
            src={imageConfig.src}
            alt={altText}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            style={{ objectPosition: imageConfig.focalPosition || 'center center' }}
            className={`w-full h-full object-cover object-center transition-all duration-500 ease-out group-hover:scale-[1.03] ${
              imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.02]'
            }`}
          />
        ) : (
          /* Graceful Fallback Container if image fails or is missing */
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-zinc-900 via-neutral-900 to-zinc-950 text-white p-6">
            <div className="w-14 h-14 rounded-full bg-[#C8102E]/20 border border-[#C8102E]/40 flex items-center justify-center mb-2">
              {getIcon()}
            </div>
            <span className="font-heading font-black text-lg text-white">{categoryName}</span>
          </div>
        )}

        {/* Multi-layer Gradient Vignette to guarantee high-contrast legibility in both Light & Dark modes */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/20 pointer-events-none" />

        {/* Ambient Subtle Red Accent Glow inside the image card */}
        <div className="absolute bottom-0 left-0 w-48 h-24 bg-[#C8102E]/25 blur-2xl pointer-events-none" />

        {/* Top Badges Overlay (Category Tab Pill & Items Counter) */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-black uppercase tracking-wider font-heading shadow-xs">
            {getIcon()}
            <span>{categoryTabLabel}</span>
          </span>

          <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-[#FBBF24] text-[11px] font-bold font-mono shadow-xs">
            {itemsCount} {itemsCount > 1 ? t.ui.optionsCountPlural : t.ui.optionsCount}
          </span>
        </div>

        {/* Bottom Title & Description Overlay directly on photograph */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10 text-white">
          <div className="flex items-end justify-between gap-4">
            <div className="max-w-2xl">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight font-heading text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] flex items-center gap-2">
                <span>{categoryName}</span>
              </h2>
              <p className="text-xs sm:text-sm text-zinc-200 line-clamp-2 mt-1 leading-snug drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] opacity-95">
                {categoryDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
