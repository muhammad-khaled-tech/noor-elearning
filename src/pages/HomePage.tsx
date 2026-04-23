import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context';
import HeroSection from '../components/sections/HeroSection';
import FeaturedCourses from '../components/sections/FeaturedCourses';
import StatsSection from '../components/sections/StatsSection';
import InstructorsSection from '../components/sections/InstructorsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';

const HomePage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <StatsSection />
      <FeaturedCourses />
      
      <section className="py-24 bg-gold relative overflow-hidden">
         <div className="absolute inset-0 bg-islamic opacity-10" />
         <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-black text-white mb-6">{t.cta_section.title}</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">{t.cta_section.subtitle}</p>
            <button className="bg-white text-gold font-black py-4 px-10 rounded-xl hover:bg-gold-light transition-all text-xl shadow-2xl">
              {t.cta_section.button}
            </button>
         </div>
      </section>

      <InstructorsSection />
      <TestimonialsSection />
    </motion.div>
  );
};

export default HomePage;
