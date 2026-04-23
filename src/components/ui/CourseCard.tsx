import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context';
import { type Course, categories } from '../../data/mockData';
import { Star, Users, Clock, PlayCircle } from 'lucide-react';
import Badge from './Badge';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const { language, t } = useLanguage();
  const category = categories.find(c => c.id === course.category_id);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="card-premium group"
    >
      <Link to={`/courses/${course.id}`}>
        <div className="relative aspect-video overflow-hidden rounded-2xl mb-4">
          <img 
            src={course.thumbnail} 
            alt={course.title_ar} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
             <PlayCircle className="w-12 h-12 text-white" />
          </div>
          <div className="absolute top-3 right-3 rtl:right-auto rtl:left-3">
             <Badge variant="gold">
                {language === 'ar' ? course.level_ar : course.level_en}
             </Badge>
          </div>
        </div>

        <div className="px-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-bold text-gold uppercase tracking-tighter">
              {language === 'ar' ? category?.name_ar : category?.name_en}
            </span>
          </div>
          
          <h3 className="text-lg font-black text-[var(--text-primary)] mb-2 line-clamp-1 group-hover:text-gold transition-colors">
            {language === 'ar' ? course.title_ar : course.title_en}
          </h3>

          <div className="flex items-center gap-4 text-[var(--text-muted)] text-xs mb-4">
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-gold text-gold" />
              <span className="font-bold text-[var(--text-primary)]">{course.rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-3 h-3" />
              <span>{course.students_count.toLocaleString()} {t.course.students}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{course.duration_hours}h</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
             <div className="text-xl font-black text-gold">
                {course.price === 0 ? t.course.free : `$${course.price}`}
             </div>
             <div className="text-[10px] font-bold text-[var(--text-muted)] uppercase italic">
                {language === 'ar' ? 'عرض خاص' : 'Best Seller'}
             </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CourseCard;
