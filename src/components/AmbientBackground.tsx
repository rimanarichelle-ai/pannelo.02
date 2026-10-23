'use client';

import React from 'react';

export function AmbientBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none select-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* 1. Header/Logo Ambient Warmth Glow */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[340px] sm:w-[500px] h-[220px] rounded-full bg-[radial-gradient(ellipse_at_center,var(--ambient-glow)_0%,transparent_70%)] blur-2xl animate-glow-pulse" />

      {/* 2. Primary Floating Translucent Red Bubble (Top Right) */}
      <div className="absolute top-[12%] -right-16 sm:right-[5%] w-52 sm:w-72 h-52 sm:h-72 rounded-full bg-[radial-gradient(circle_at_35%_35%,var(--bubble-red-primary)_0%,var(--bubble-red-secondary)_60%,transparent_85%)] blur-3xl animate-bubble-1 opacity-80" />

      {/* 3. Secondary Floating Translucent Red Bubble (Mid-Left Edge) */}
      <div className="absolute top-[42%] -left-20 sm:left-[2%] w-60 sm:w-80 h-60 sm:h-80 rounded-full bg-[radial-gradient(circle_at_65%_35%,var(--bubble-red-primary)_0%,transparent_75%)] blur-3xl animate-bubble-2 opacity-70" />

      {/* 4. Bottom-Right Ambient Warmth Spheres */}
      <div className="absolute bottom-[10%] -right-16 sm:right-[8%] w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-[radial-gradient(circle_at_center,var(--bubble-red-secondary)_0%,transparent_75%)] blur-3xl animate-bubble-3 opacity-60" />

      {/* 5. Delicate Artisanal Floating Bubbles with Soft Glassy Rims (Inspired by PANNELLO beverages & craft culinary atmosphere) */}
      <div
        className="absolute top-[28%] right-[14%] w-9 h-9 rounded-full border border-[var(--bubble-rim)] bg-gradient-to-br from-[var(--bubble-highlight)] to-transparent backdrop-blur-[1px] animate-bubble-crisp hidden sm:block"
        style={{ animationDuration: '14s', animationDelay: '0s' }}
      />
      <div
        className="absolute top-[65%] left-[8%] w-12 h-12 rounded-full border border-[var(--bubble-rim)] bg-gradient-to-tr from-[var(--bubble-red-primary)] to-transparent backdrop-blur-[1px] animate-bubble-crisp hidden sm:block"
        style={{ animationDuration: '19s', animationDelay: '2s' }}
      />
      <div
        className="absolute top-[82%] right-[18%] w-7 h-7 rounded-full border border-[var(--bubble-rim)] bg-gradient-to-b from-[var(--bubble-highlight)] to-transparent backdrop-blur-[1px] animate-bubble-crisp"
        style={{ animationDuration: '16s', animationDelay: '4s' }}
      />
    </div>
  );
}
