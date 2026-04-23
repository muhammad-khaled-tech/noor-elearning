import React from 'react';
import { useLanguage } from '../../context';
import { motion } from 'framer-motion';

const LangToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="px-3 py-1.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)] text-gold text-sm font-bold transition-colors"
    >
      {language === 'ar' ? 'English' : 'العربية'}
    </motion.button>
  );
};

export default LangToggle;
