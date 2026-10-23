'use client';

import { useSyncExternalStore, useCallback, useEffect } from 'react';
import { TRANSLATIONS, type Language, type Translations } from '@/lib/translations';

function applyLanguageToDocument(lang: Language) {
  if (typeof document === 'undefined') return;
  document.documentElement.lang = lang;
}

function subscribe(callback: () => void) {
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener('storage', callback);
  };
}

function getSnapshot(): Language {
  if (typeof window === 'undefined') return 'fr';
  const stored = localStorage.getItem('pannello_lang') as Language | null;
  if (stored === 'fr' || stored === 'en') return stored;
  return 'fr';
}

function getServerSnapshot(): Language {
  return 'fr';
}

export function useLanguage() {
  const language = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    applyLanguageToDocument(language);
  }, [language]);

  const setLanguage = useCallback((newLang: Language) => {
    localStorage.setItem('pannello_lang', newLang);
    applyLanguageToDocument(newLang);
    window.dispatchEvent(new Event('storage'));
  }, []);

  const toggleLanguage = useCallback(() => {
    const nextLang: Language = language === 'fr' ? 'en' : 'fr';
    setLanguage(nextLang);
  }, [language, setLanguage]);

  const t: Translations = TRANSLATIONS[language] || TRANSLATIONS.fr;

  return {
    language,
    setLanguage,
    toggleLanguage,
    t,
  };
}
