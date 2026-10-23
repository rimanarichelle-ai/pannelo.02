'use client';

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import type { Theme } from '@/hooks/use-theme';
import type { Language, Translations } from '@/lib/translations';
import type { MenuCategory } from '@/lib/menu-data';
import Image from '@/components/Image';
import { ThreeDotMenu } from '@/components/ThreeDotMenu';

interface HeaderProps {
  theme: Theme;
  toggleTheme: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  mounted: boolean;
  categories: MenuCategory[];
  activeCategoryId: string;
  onSelectCategory: (id: string) => void;
  onMenuOpenChange?: (open: boolean) => void;
}

export function Header({
  theme,
  toggleTheme,
  language,
  setLanguage,
  t,
  mounted,
  categories,
  activeCategoryId,
  onSelectCategory,
  onMenuOpenChange,
}: HeaderProps) {
  return (
    <header className="w-full bg-[var(--header-bg)] backdrop-blur-md border-b border-[var(--border-color)] transition-colors duration-200 safe-top">
      {/* 
        Symmetrical 3-Column Grid:
        - Left: 44px/48px/56px container holding ONLY the Three-Dot Menu Button (⋮)
        - Center: 1fr container holding the mathematically centered prominent PANNELLO Logo
        - Right: 44px/48px/56px container holding ONLY the Dark/Light Theme Toggle
      */}
      <div className="max-w-6xl mx-auto px-2 xs:px-3 sm:px-6 h-16 sm:h-20 grid grid-cols-[44px_1fr_44px] xs:grid-cols-[48px_1fr_48px] sm:grid-cols-[56px_1fr_56px] items-center">
        {/* 1. TOP-LEFT: Consolidated Three-Dot Menu Button (⋮) */}
        <div className="flex items-center justify-start">
          <ThreeDotMenu
            categories={categories}
            activeCategoryId={activeCategoryId}
            onSelectCategory={onSelectCategory}
            language={language}
            setLanguage={setLanguage}
            t={t}
            onOpenChange={onMenuOpenChange}
          />
        </div>

        {/* 2. CENTER: Prominent PANNELLO Logo (Mathematically Centered, clamp(160px, 46vw, 240px) on mobile) */}
        <div className="flex items-center justify-center text-center px-1">
          <a
            href="#"
            className="group relative flex flex-col items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-yellow)] rounded-lg px-1 py-0.5 animate-logo-entrance"
            aria-label="PANNELLO - Taste The Best"
          >
            {/* Ambient Red Glow Layer directly behind the centerpiece logo */}
            <div
              className="absolute inset-0 -inset-x-4 bg-[radial-gradient(ellipse_at_center,rgba(200,16,46,0.35)_0%,rgba(200,16,46,0.12)_55%,transparent_75%)] blur-lg -z-10 opacity-80 group-hover:opacity-100 transition-opacity animate-glow-pulse pointer-events-none"
              aria-hidden="true"
            />

            {/* High-Resolution Cropped Logo (Retina-optimized, zero empty margins, scaled safely for 320px–1440px) */}
            <div className="relative w-[clamp(160px,46vw,240px)] sm:w-[250px] md:w-[270px] aspect-[290/74] flex items-center justify-center">
              <Image
                src="/assets/pannello_logo_hero.png"
                alt="PANNELLO - TASTE THE BEST"
                fill
                priority
                sizes="(max-width: 640px) 240px, (max-width: 1024px) 250px, 270px"
                className={`object-contain transition-transform duration-200 group-hover:scale-[1.02] ${
                  theme === 'light'
                    ? 'drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]'
                    : 'drop-shadow-[0_2px_10px_rgba(200,16,46,0.45)]'
                }`}
              />
            </div>
          </a>
        </div>

        {/* 3. TOP-RIGHT: Dark/Light Theme Toggle (iOS 44x44px minimum touch target) */}
        <div className="flex items-center justify-end">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={t.ui.toggleThemeAria}
            className="flex items-center justify-center w-11 h-11 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] active:scale-95 transition-all cursor-pointer shadow-xs shrink-0"
          >
            {mounted ? (
              theme === 'dark' ? (
                <Sun className="w-5 h-5 text-[#FBBF24] transition-transform hover:rotate-45" strokeWidth={2.2} />
              ) : (
                <Moon className="w-5 h-5 text-[#C8102E] transition-transform hover:-rotate-12" strokeWidth={2.2} />
              )
            ) : (
              <div className="w-5 h-5 rounded-full bg-zinc-700/30 animate-pulse" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
