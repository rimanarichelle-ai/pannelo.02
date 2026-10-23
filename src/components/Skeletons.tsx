import React from 'react';

/**
 * Shimmer-based Skeleton for PANNELLO Product Cards.
 * Preserves the exact geometry, aspect ratios, and padding to prevent Cumulative Layout Shift (CLS).
 */
export function ProductCardSkeleton() {
  return (
    <article
      className="relative flex flex-col bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl overflow-hidden shadow-xs select-none"
      aria-hidden="true"
    >
      {/* Food Image Placeholder with matching aspect ratio */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] shimmer-skeleton border-b border-[var(--border-color)]">
        {/* Badge Placeholder */}
        <div className="absolute top-2.5 left-2.5 flex gap-1.5 z-10">
          <div className="w-16 h-5 rounded-md shimmer-skeleton bg-black/20" />
        </div>
      </div>

      {/* Card Content Skeleton */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Title and Price Badge Row */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="space-y-1.5 flex-1">
              <div className="h-5 w-3/4 max-w-[200px] rounded-md shimmer-skeleton" />
              <div className="h-3 w-1/3 rounded shimmer-skeleton opacity-60" />
            </div>
            {/* Price Badge Placeholder */}
            <div className="h-8 w-20 rounded-lg shimmer-skeleton shrink-0" />
          </div>

          {/* Description Lines */}
          <div className="space-y-2 mb-4">
            <div className="h-3.5 w-full rounded shimmer-skeleton opacity-75" />
            <div className="h-3.5 w-4/5 rounded shimmer-skeleton opacity-75" />
          </div>

          {/* Options / Format Selector Placeholder (e.g. Mini / Normal / Mega) */}
          <div className="mt-3 p-1 rounded-lg border border-[var(--border-color)]/60 bg-[var(--bg-surface-elevated)] grid grid-cols-3 gap-1.5">
            <div className="h-10 rounded-md shimmer-skeleton" />
            <div className="h-10 rounded-md shimmer-skeleton" />
            <div className="h-10 rounded-md shimmer-skeleton" />
          </div>
        </div>

        {/* Bottom Metadata / Extras Placeholder */}
        <div className="pt-2.5 border-t border-[var(--border-color)]/50 flex gap-2">
          <div className="h-6 w-24 rounded-md shimmer-skeleton opacity-60" />
          <div className="h-6 w-20 rounded-md shimmer-skeleton opacity-60" />
        </div>
      </div>
    </article>
  );
}

/**
 * Shimmer-based Skeleton for PANNELLO Category Hero Cards.
 */
export function CategoryImageCardSkeleton() {
  return (
    <div
      className="relative w-full mb-6 rounded-2xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-md select-none"
      aria-hidden="true"
    >
      {/* Brand Accent Top Strip */}
      <div className="h-1 w-full bg-gradient-to-r from-[#C8102E] via-[#FBBF24] to-[#C8102E]" />

      {/* Hero Image Container with identical responsive aspect ratio */}
      <div className="relative w-full aspect-[16/8] sm:aspect-[21/8] max-h-[220px] sm:max-h-[260px] shimmer-skeleton bg-zinc-900">
        {/* Top Badges Overlay Placeholder */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
          <div className="h-7 w-28 rounded-lg shimmer-skeleton bg-black/40 border border-white/10" />
          <div className="h-7 w-20 rounded-lg shimmer-skeleton bg-black/40 border border-white/10" />
        </div>

        {/* Bottom Title & Description Overlay Placeholder */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10 space-y-2">
          <div className="h-7 w-48 rounded-md shimmer-skeleton bg-black/40" />
          <div className="h-4 w-72 max-w-full rounded shimmer-skeleton bg-black/30" />
        </div>
      </div>
    </div>
  );
}

/**
 * Shimmer-based Skeleton for an entire Menu Category Section (Hero Card + Product Cards Grid).
 */
export function MenuSectionSkeleton({ cardCount = 4 }: { cardCount?: number }) {
  return (
    <section className="pt-4 pb-10 border-b border-[var(--border-color)] select-none" aria-hidden="true">
      {/* 1. Category Hero Banner Skeleton */}
      <CategoryImageCardSkeleton />

      {/* 2. Banner Note Skeleton */}
      <div className="mb-6 h-12 w-full rounded-xl shimmer-skeleton border border-[var(--border-color)]/60" />

      {/* 3. Product Cards Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Array.from({ length: cardCount }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    </section>
  );
}
