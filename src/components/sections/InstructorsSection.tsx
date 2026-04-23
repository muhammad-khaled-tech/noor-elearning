import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context';
import { instructors } from '../../data/mockData';
import { Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const InstructorsSection: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-24 bg-[var(--bg-primary)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-[var(--text-primary)] mb-4">{t.instructor_section.title}</h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">{t.instructor_section.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor) => (
            <motion.div
              key={instructor.id}
              whileHover={{ y: -10 }}
              className="bg-[var(--bg-card)] p-8 rounded-[2.5rem] border border-[var(--border)] shadow-xl text-center group transition-all hover:border-gold"
            >
              <Link to={`/instructor/${instructor.id}`}>
                <div className="relative mb-6">
                   <img 
                    src={instructor.avatar} 
                    className="w-32 h-32 rounded-full mx-auto border-4 border-gold/10 group-hover:border-gold transition-all shadow-lg grayscale group-hover:grayscale-0" 
                    alt={instructor.name_ar} 
                  />
                   <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gold text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">
                      {t.instructor_section.badge}
                   </div>
                </div>
                <h3 className="text-xl font-black text-[var(--text-primary)] mb-1 group-hover:text-gold transition-colors">
                  {language === 'ar' ? instructor.name_ar : instructor.name_en}
                </h3>
                <p className="text-[var(--text-muted)] text-sm mb-6 h-10 overflow-hidden line-clamp-2">
                  {language === 'ar' ? instructor.specialty_ar : instructor.specialty_en}
                </p>

                <div className="flex items-center justify-center gap-4 py-4 border-t border-[var(--border)]">
                   <div className="flex items-center gap-1 text-sm font-bold text-[var(--text-primary)]">
                      <Star className="w-4 h-4 fill-gold text-gold" />
                      {instructor.rating}
                   </div>
                   <div className="w-px h-4 bg-[var(--border)]" />
                   <div className="flex items-center gap-1 text-sm font-bold text-[var(--text-primary)]">
                      <Users className="w-4 h-4 text-gold" />
                      {instructor.students.toLocaleString()}
                   </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;
