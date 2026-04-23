import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context';
import { motion } from 'framer-motion';

const DarkModeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="p-2 rounded-full bg-[var(--bg-secondary)] border border-[var(--border)] text-gold transition-colors"
      aria-label="Toggle Dark Mode"
    >
      {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
    </motion.button>
  );
};

export default DarkModeToggle;
