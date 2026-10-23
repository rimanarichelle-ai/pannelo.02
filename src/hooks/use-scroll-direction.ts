'use client';

import { useState, useEffect, useRef } from 'react';

interface UseScrollDirectionOptions {
  thresholdDown?: number; // Minimum downward delta in px from pivot to trigger hide (default: 14)
  thresholdUp?: number;   // Minimum upward delta in px from pivot to trigger show (default: 7)
  topThreshold?: number;  // Distance from top where nav is always visible (default: 30)
  disabled?: boolean;     // Pause direction hiding during programmatic scroll or modal/drawer open
}

/**
 * Intelligent Direction-Aware Scroll Hook
 * 
 * - Scrolling DOWN: smoothly hides the synchronized Header + Category Navigation to maximize food browsing space
 * - Scrolling UP: promptly reveals the Header + Category Navigation with a small, responsive threshold (7px)
 * - Top of page: always visible
 * - Reversal detection: tracks direction changes with pivot coordinates to prevent lag or jitter
 * - iOS Safari safe: filters rubber-band overscroll at the top (< 0) and bounce at the bottom
 */
export function useScrollDirection(options: UseScrollDirectionOptions = {}) {
  const {
    thresholdDown = 14,
    thresholdUp = 7,
    topThreshold = 30,
    disabled = false,
  } = options;

  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const pivotY = useRef(0);
  const lastDirection = useRef<'up' | 'down' | null>(null);
  const ticking = useRef(false);
  const disabledRef = useRef(disabled);

  useEffect(() => {
    disabledRef.current = disabled;
    if (disabled) {
      setIsVisible(true);
    }
  }, [disabled]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const initialY = window.pageYOffset || document.documentElement.scrollTop || 0;
    lastScrollY.current = initialY;
    pivotY.current = initialY;

    const updateScrollDirection = () => {
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop || 0;

      // When disabled (programmatic scroll, modal, or drawer open), always keep nav visible
      if (disabledRef.current) {
        lastScrollY.current = currentScrollY;
        pivotY.current = currentScrollY;
        setIsVisible(true);
        ticking.current = false;
        return;
      }

      // 1. Unconditionally visible at or near the top of the page
      if (currentScrollY <= topThreshold) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        pivotY.current = currentScrollY;
        lastDirection.current = 'up';
        ticking.current = false;
        return;
      }

      // 2. Ignore iOS Safari rubber-band overscroll at the top of the viewport
      if (currentScrollY < 0) {
        ticking.current = false;
        return;
      }

      // 3. Ignore iOS Safari rubber-band bounce at the bottom of the page
      const maxScrollY = document.documentElement.scrollHeight - window.innerHeight;
      if (currentScrollY >= maxScrollY - 20) {
        ticking.current = false;
        return;
      }

      const diffFromLast = currentScrollY - lastScrollY.current;

      // Filter sub-pixel jitter (< 1.5px)
      if (Math.abs(diffFromLast) >= 1.5) {
        const currentDirection = diffFromLast > 0 ? 'down' : 'up';

        // When scroll direction reverses, reset pivot measurement point
        if (currentDirection !== lastDirection.current) {
          pivotY.current = lastScrollY.current;
          lastDirection.current = currentDirection;
        }

        // Distance traveled since direction reversal
        const deltaSincePivot = currentScrollY - pivotY.current;

        // SCROLLING DOWN: user moved down past downward threshold -> hide
        if (currentDirection === 'down' && deltaSincePivot >= thresholdDown) {
          setIsVisible(false);
        }
        // SCROLLING UP: user moved up past upward threshold -> promptly reveal
        else if (currentDirection === 'up' && deltaSincePivot <= -thresholdUp) {
          setIsVisible(true);
        }
      }

      lastScrollY.current = currentScrollY;
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [thresholdDown, thresholdUp, topThreshold]);

  return { isVisible: disabled ? true : isVisible, setIsVisible };
}
