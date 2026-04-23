import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context';
import { courses, categories } from '../data/mockData';
import CourseCard from '../components/ui/CourseCard';
import { Search, Filter, ChevronDown, Grid, List as ListIcon } from 'lucide-react';

const CoursesPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const title = language === 'ar' ? course.title_ar : course.title_en;
      const matchesSearch = title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory ? course.category_id === selectedCategory : true;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, language]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="py-12 bg-[var(--bg-primary)] min-h-screen"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-black text-[var(--text-primary)] mb-4">{t.nav.courses}</h1>
          <p className="text-[var(--text-secondary)]">اكتشف مئات الدورات الاحترافية المقدمة من أفضل الخبراء.</p>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col lg:flex-row gap-6 mb-10 items-center justify-between">
          <div className="relative w-full lg:max-w-md">
            <input 
              type="text" 
              placeholder={t.common.search}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[var(--bg-card)] border border-[var(--border)] rounded-xl py-3 px-12 focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all shadow-sm"
            />
            <Search className="absolute left-4 rtl:left-auto rtl:right-4 top-1/2 -translate-y-1/2 text-gold w-5 h-5" />
          </div>

          <div className="flex items-center gap-4 w-full lg:w-auto">
            <div className="flex bg-[var(--bg-card)] p-1 rounded-xl border border-[var(--border)]">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-gold text-white shadow-md' : 'text-[var(--text-muted)] hover:text-gold'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-gold text-white shadow-md' : 'text-[var(--text-muted)] hover:text-gold'}`}
              >
                <ListIcon className="w-5 h-5" />
              </button>
            </div>
            
            <button className="flex-1 lg:flex-none flex items-center justify-between gap-3 bg-[var(--bg-card)] border border-[var(--border)] px-4 py-2.5 rounded-xl text-sm font-bold text-[var(--text-secondary)] hover:border-gold transition-all">
              <Filter className="w-4 h-4 text-gold" />
              <span>{t.common.filter}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-10">
          {/* Sidebar Filters */}
          <aside className="hidden lg:block space-y-8">
            <div>
              <h3 className="font-black text-lg mb-4 underline decoration-gold decoration-4 underline-offset-4">{t.common.categories}</h3>
              <div className="space-y-2">
                <button 
                  onClick={() => setSelectedCategory(null)}
                  className={`w-full text-right rtl:text-right ltr:text-left py-2 px-4 rounded-lg transition-all ${!selectedCategory ? 'bg-gold/10 text-gold font-bold' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)]'}`}
                >
                  {t.common.all}
                </button>
                {categories.map(cat => (
                  <button 
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full flex items-center justify-between py-2 px-4 rounded-lg transition-all ${selectedCategory === cat.id ? 'bg-gold/10 text-gold font-bold' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)]'}`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{cat.icon}</span>
                      <span>{language === 'ar' ? cat.name_ar : cat.name_en}</span>
                    </span>
                    <span className="text-xs opacity-50">({cat.count})</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
               <h3 className="font-black text-lg mb-4 underline decoration-gold decoration-4 underline-offset-4">{t.common.levels}</h3>
               <div className="space-y-2">
                  {['مبتدئ', 'متوسط', 'متقدم'].map(level => (
                    <label key={level} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-5 h-5 rounded border-[var(--border)] text-gold focus:ring-gold" />
                      <span className="text-[var(--text-secondary)] group-hover:text-gold transition-colors">{level}</span>
                    </label>
                  ))}
               </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className={viewMode === 'grid' ? "grid md:grid-cols-2 gap-8" : "space-y-6"}>
              <AnimatePresence>
                {filteredCourses.map((course) => (
                  <motion.div
                    key={course.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CourseCard course={course} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            
            {filteredCourses.length === 0 && (
              <div className="text-center py-20 bg-[var(--bg-card)] rounded-3xl border border-dashed border-[var(--border)]">
                <Search className="w-16 h-16 text-gold/20 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[var(--text-primary)]">لم يتم العثور على نتائج</h3>
                <p className="text-[var(--text-muted)]">جرب استخدام كلمات بحث مختلفة</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CoursesPage;
