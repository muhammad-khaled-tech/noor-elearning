import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { useLanguage } from '../../context';
import { PlayCircle, ArrowLeft, ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const { t, isRtl } = useLanguage();

  const containerVariants: Variants = {
    animate: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 } 
    },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 lg:pb-0 bg-[var(--bg-primary)] overflow-x-hidden">
      {/* Background Animated Patterns */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M0 50 Q 25 30 50 50 T 100 50"
            stroke="var(--gold)"
            strokeWidth="0.1"
            fill="none"
            animate={{ d: ["M0 50 Q 25 30 50 50 T 100 50", "M0 50 Q 25 70 50 50 T 100 50"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="initial"
            animate="animate"
            className="text-center lg:text-start"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold text-xs font-bold mb-6 border border-gold/20">
               <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
               </span>
               {t.hero.trust} 98%
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-5xl lg:text-7xl font-black text-[var(--text-primary)] mb-6 leading-tight"
            >
              {t.hero.headline.split(' ').map((word, i) => (
                <span key={i} className={word === 'المعرفة' || word === 'Knowledge' ? 'text-gold' : ''}>{word} </span>
              ))}
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg lg:text-xl text-[var(--text-secondary)] mb-10 max-w-xl leading-relaxed"
            >
              {t.hero.subheadline}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button className="bg-gold hover:bg-gold-dark text-white font-black py-4 px-8 rounded-2xl shadow-xl shadow-gold/20 transition-all flex items-center gap-3 group">
                {t.hero.cta_primary}
                {isRtl ? <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> : <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              </button>
              <button className="bg-[var(--bg-secondary)] text-[var(--text-primary)] font-black py-4 px-8 rounded-2xl border border-[var(--border)] hover:bg-[var(--bg-card)] transition-all">
                {t.hero.cta_secondary}
              </button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative hidden lg:block p-10"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-gold/20">
               <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800" 
                alt="Students" 
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            
            {/* Floating UI Elements */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 bg-[var(--bg-card)] p-5 rounded-3xl shadow-2xl border border-[var(--border)] flex items-center gap-4 z-20"
            >
               <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center text-white">
                  <PlayCircle className="w-6 h-6" />
               </div>
               <div>
                  <div className="text-sm font-black text-[var(--text-primary)]">{t.hero.badge_live}</div>
                  <div className="text-[10px] text-[var(--text-muted)]">{t.hero.badge_live_subtitle}</div>
               </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-0 left-0 bg-[var(--bg-card)] p-5 rounded-3xl shadow-2xl border border-[var(--border)] flex items-center gap-4 z-20"
            >
               <div className="w-12 h-12 bg-gold rounded-2xl flex items-center justify-center text-white">
                  <PlayCircle className="w-6 h-6" />
               </div>
               <div>
                  <div className="text-sm font-black text-[var(--text-primary)]">{t.hero.badge_courses}</div>
                  <div className="text-[10px] text-[var(--text-muted)]">{t.hero.badge_courses_subtitle}</div>
               </div>
            </motion.div>

            {/* Geometric Glow */}
            <div className="absolute inset-0 bg-gold/20 blur-[100px] -z-10 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
