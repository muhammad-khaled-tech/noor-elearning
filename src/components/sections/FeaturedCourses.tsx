import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context';
import { courses } from '../../data/mockData';
import CourseCard from '../ui/CourseCard';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const FeaturedCourses: React.FC = () => {
  const { t, isRtl } = useLanguage();

  return (
    <section className="py-24 bg-[var(--bg-secondary)]/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-black text-[var(--text-primary)] mb-4 leading-tight">
               {t.course.featured_title.split(' ').map((word, i) => (
                  <span key={i} className={i === 1 ? 'text-gold' : ''}>{word} </span>
               ))}
            </h2>
            <p className="text-[var(--text-secondary)]">
              {t.course.featured_subtitle}
            </p>
          </div>
          <Link to="/courses">
            <motion.button 
              whileHover={{ x: isRtl ? -5 : 5 }}
              className="flex items-center gap-2 text-gold font-bold hover:underline"
            >
              {t.hero.cta_secondary}
              {isRtl ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
            </motion.button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.slice(0, 3).map((course) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
