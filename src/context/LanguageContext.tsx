import React, { useEffect, useState } from 'react';
import { ar } from '../i18n/ar';
import { en } from '../i18n/en';
import { LanguageContext, type Language } from './Contexts';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem('lang') as Language) || 'ar';
  });

  const t = language === 'ar' ? ar : en;
  const isRtl = language === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    localStorage.setItem('lang', language);
  }, [language, isRtl]);

  const toggleLanguage = () => setLanguage((prev) => (prev === 'ar' ? 'en' : 'ar'));

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
};
