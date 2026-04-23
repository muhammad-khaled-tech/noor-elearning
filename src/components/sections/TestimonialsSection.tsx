import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context';
import { testimonials } from '../../data/mockData';
import { Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-24 bg-[var(--bg-secondary)]/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-[var(--text-primary)] mb-4">{t.testimonials.title}</h2>
          <p className="text-[var(--text-secondary)]">{t.testimonials.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testi) => (
            <motion.div
              key={testi.id}
              whileHover={{ scale: 1.02 }}
              className="bg-[var(--bg-card)] p-8 rounded-[2rem] border border-[var(--border)] shadow-sm relative overflow-hidden group"
            >
              <Quote className="absolute -top-4 ltr:-right-4 rtl:-left-4 w-24 h-24 text-gold/5 group-hover:text-gold/10 transition-colors" />
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                 <img src={testi.avatar} className="w-14 h-14 rounded-full border-2 border-gold" alt={language === 'ar' ? testi.student_name_ar : testi.student_name_en} />
                 <div>
                    <div className="font-bold text-[var(--text-primary)]">{language === 'ar' ? testi.student_name_ar : testi.student_name_en}</div>
                    <div className="text-xs text-gold font-bold">{language === 'ar' ? testi.course_ar : testi.course_en}</div>
                 </div>
              </div>

              <p className="text-[var(--text-secondary)] italic leading-relaxed relative z-10 text-start" dir="auto">
                "{language === 'ar' ? testi.text_ar : testi.text_en}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
