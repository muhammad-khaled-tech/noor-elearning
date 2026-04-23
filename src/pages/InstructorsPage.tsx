import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context';
import { instructors } from '../data/mockData';
import { Star, Users, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const InstructorsPage: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="py-12 bg-[var(--bg-primary)] min-h-screen"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-[var(--text-primary)] mb-6">{t.nav.instructors}</h1>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg leading-relaxed">
            {t.instructor_section.subtitle}
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16 relative">
          <input 
            type="text" 
            placeholder={t.common.search}
            className="w-full bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl py-4 px-14 focus:outline-none focus:ring-4 focus:ring-gold/20 shadow-xl transition-all"
          />
          <Search className="absolute left-5 rtl:left-auto rtl:right-5 top-1/2 -translate-y-1/2 text-gold w-6 h-6" />
        </div>

        {/* Instructors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {instructors.map((instructor) => (
            <motion.div
              key={instructor.id}
              whileHover={{ y: -10 }}
              className="bg-[var(--bg-card)] p-8 rounded-[3rem] border border-[var(--border)] shadow-2xl text-center group transition-all hover:border-gold relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gold/10 to-transparent group-hover:from-gold/20 transition-all" />
              
              <Link to={`/instructor/${instructor.id}`} className="relative z-10 block">
                <div className="relative mb-6">
                  <img 
                    src={instructor.avatar} 
                    className="w-32 h-32 rounded-full mx-auto border-4 border-gold/10 group-hover:border-gold transition-all shadow-xl grayscale-0" 
                    alt={instructor.name_ar} 
                  />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gold text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg whitespace-nowrap">
                    {t.instructor_section.badge}
                  </div>
                </div>
                
                <h3 className="text-2xl font-black text-[var(--text-primary)] mb-2 group-hover:text-gold transition-colors">
                  {language === 'ar' ? instructor.name_ar : instructor.name_en}
                </h3>
                <p className="text-gold text-sm font-bold mb-4">
                  {language === 'ar' ? instructor.specialty_ar : instructor.specialty_en}
                </p>
                <p className="text-[var(--text-secondary)] text-sm mb-6 line-clamp-3 h-15">
                  {language === 'ar' ? instructor.bio_ar : instructor.bio_en}
                </p>

                <div className="flex items-center justify-center gap-6 py-5 border-t border-[var(--border)]">
                  <div className="text-center">
                    <div className="flex items-center gap-1 font-black text-[var(--text-primary)] justify-center">
                      <Star className="w-4 h-4 fill-gold text-gold" />
                      {instructor.rating}
                    </div>
                    <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-widest">{t.course.reviews}</p>
                  </div>
                  <div className="w-px h-8 bg-[var(--border)]" />
                  <div className="text-center">
                    <div className="flex items-center gap-1 font-black text-[var(--text-primary)] justify-center">
                      <Users className="w-4 h-4 text-gold" />
                      {instructor.students.toLocaleString()}
                    </div>
                    <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-widest">{t.course.students}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <button className="w-full py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-primary)] font-bold group-hover:bg-gold group-hover:text-white transition-all">
                    عرض الملف الشخصي
                  </button>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default InstructorsPage;
