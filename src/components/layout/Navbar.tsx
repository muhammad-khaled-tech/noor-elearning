import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context';
import { Menu, X, Search } from 'lucide-react';
import DarkModeToggle from '../ui/DarkModeToggle';
import LangToggle from '../ui/LangToggle';

const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.courses, path: '/courses' },
    { name: t.nav.instructors, path: '/instructors' },
    { name: t.nav.dashboard, path: '/dashboard' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[var(--bg-card)]/80 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
          <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gold rounded-xl flex items-center justify-center transform rotate-12 shadow-gold/20 shadow-lg">
            <span className="text-white text-xl lg:text-2xl font-black">ن</span>
          </div>
          <span className="text-xl lg:text-2xl font-black tracking-tighter text-[var(--text-primary)]">نـور</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`text-sm font-bold transition-all hover:text-gold ${
                  location.pathname === link.path ? 'text-gold' : 'text-[var(--text-secondary)]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="h-6 w-px bg-[var(--border)]" />

          <div className="flex items-center gap-4">
             <button className="p-2 text-[var(--text-secondary)] hover:text-gold transition-colors">
                <Search className="w-5 h-5" />
             </button>
             <DarkModeToggle />
             <LangToggle />
             <Link to="/login" className="bg-gold text-white font-black py-2.5 px-6 rounded-xl hover:bg-gold-dark transition-all shadow-md shadow-gold/10">
                {t.nav.login}
             </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-4 text-[var(--text-primary)]">
          <DarkModeToggle />
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[var(--bg-card)] border-t border-[var(--border)] overflow-hidden"
          >
            <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  onClick={closeMenu}
                  className="text-lg font-black text-[var(--text-primary)] border-b border-[var(--border)] pb-4 last:border-0"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-4 mt-4">
                 <div className="flex items-center justify-between p-4 bg-[var(--bg-secondary)] rounded-2xl">
                    <span className="font-bold text-[var(--text-secondary)]">اللغة / Language</span>
                    <LangToggle />
                 </div>
                 <Link to="/login" onClick={closeMenu} className="bg-gold text-white text-center font-black py-4 rounded-2xl">
                    {t.nav.login}
                 </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
