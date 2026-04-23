import { createContext, useContext } from 'react';
import { ar } from '../i18n/ar';

export type Language = 'ar' | 'en';
export type Translations = typeof ar;

export interface LanguageContextType {
  language: Language;
  t: Translations;
  toggleLanguage: () => void;
  isRtl: boolean;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
