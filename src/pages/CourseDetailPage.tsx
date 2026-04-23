import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import * as O from 'fp-ts/Option';
import { pipe } from 'fp-ts/function';
import { useLanguage } from '../context';
import { courses, instructors, categories, type Course } from '../data/mockData';
import Badge from '../components/ui/Badge';
import StarRating from '../components/ui/StarRating';
import { 
  Users, Clock, BookOpen, Calendar, 
  Play, Award, ShieldCheck 
} from 'lucide-react';

type TabType = 'syllabus' | 'instructor' | 'reviews';

const CourseDetailPage: React.FC = () => {
  const { id } = useParams();
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabType>('syllabus');

  // Using Option to handle potentially missing data
  const courseOpt = pipe(
    courses.find(c => c.id === Number(id)),
    O.fromNullable
  );

  return pipe(
    courseOpt,
    O.match(
      () => (
        <div className="p-20 text-center bg-[var(--bg-primary)] min-h-screen">
          <h2 className="text-2xl font-black text-[var(--text-primary)] mb-4">{t.course?.not_found || 'Course not found'}</h2>
          <Link to="/courses" className="text-gold underline font-bold">{t.nav.courses}</Link>
        </div>
      ),
      (course: Course) => {
        const instructor = instructors.find(i => i.id === course.instructor_id);
        const category = categories.find(c => c.id === course.category_id);

        return (
          <div className="bg-[var(--bg-primary)] min-h-screen pb-20">
            {/* Course Hero Header */}
            <div className="bg-[var(--dark-bg-primary)] text-white pt-32 pb-20 lg:pb-32 relative overflow-hidden">
               <div className="absolute inset-0 bg-islamic opacity-5" />
               <div className="container mx-auto px-4 relative z-10">
                  <div className="max-w-3xl">
                     <div className="flex flex-wrap gap-3 mb-6">
                        <Badge variant="gold">{language === 'ar' ? category?.name_ar : category?.name_en}</Badge>
                        <Badge variant="outline" className="border-white/20 text-white">
                          {language === 'ar' ? course.level_ar : course.level_en}
                        </Badge>
                     </div>
                     <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
                        {language === 'ar' ? course.title_ar : course.title_en}
                     </h1>
                     <div className="flex flex-wrap items-center gap-6 text-sm lg:text-base text-gray-300 mb-8">
                        <div className="flex items-center gap-2">
                           <StarRating rating={course.rating} />
                           <span className="font-bold text-gold">({course.rating})</span>
                           <span className="text-gray-500">{course.reviews_count} {language === 'ar' ? 'تقييم' : 'reviews'}</span>
                        </div>
                        <div className="flex items-center gap-2">
                           <Users className="w-5 h-5 text-gold" />
                           <span>{course.students_count.toLocaleString()} {t.course.students}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gold font-bold">
                           {language === 'ar' ? 'بواسطة' : 'by'} {language === 'ar' ? instructor?.name_ar : instructor?.name_en}
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="container mx-auto px-4 -mt-20 relative z-20">
               <div className="grid lg:grid-cols-3 gap-12">
                  {/* Main Content */}
                  <div className="lg:col-span-2">
                     {/* Video/Image Preview Container */}
                     <div className="bg-black rounded-[2.5rem] overflow-hidden shadow-2xl mb-12 aspect-video group relative">
                        <img src={course.thumbnail} className="w-full h-full object-cover opacity-60" alt="Preview" />
                        <div className="absolute inset-0 flex items-center justify-center">
                           <motion.button 
                             whileHover={{ scale: 1.1 }}
                             whileTap={{ scale: 0.9 }}
                             className="w-24 h-24 bg-gold rounded-full flex items-center justify-center shadow-2xl shadow-gold/40"
                           >
                              <Play className="w-10 h-10 text-white fill-white ml-1 rtl:mr-1 rtl:ml-0" />
                           </motion.button>
                        </div>
                     </div>

                     {/* Tabs */}
                     <div className="flex border-b border-[var(--border)] mb-10 gap-4 lg:gap-10 overflow-x-auto whitespace-nowrap scrollbar-hide">
                        {[
                          { id: 'syllabus' as const, label: t.course.curriculum },
                          { id: 'instructor' as const, label: t.course.instructor },
                          { id: 'reviews' as const, label: t.course.reviews }
                        ].map(tab => (
                          <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`pb-4 text-sm lg:text-lg font-black transition-all relative ${
                              activeTab === tab.id ? 'text-gold' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                            }`}
                          >
                            {tab.label}
                            {activeTab === tab.id && (
                              <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-1 bg-gold rounded-full" />
                            )}
                          </button>
                        ))}
                     </div>

                     {/* Tab Content */}
                     <div className="min-h-[400px]">
                        <AnimatePresence mode="wait">
                           {activeTab === 'syllabus' && (
                             <motion.div
                               key="syllabus"
                               initial={{ opacity: 0, x: 20 }}
                               animate={{ opacity: 1, x: 0 }}
                               exit={{ opacity: 0, x: -20 }}
                               className="space-y-4"
                             >
                                {course.curriculum.map((section, idx) => (
                                  <div key={idx} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl overflow-hidden group">
                                     <div className="p-6 flex items-center justify-between cursor-pointer hover:bg-[var(--bg-secondary)]/50 transition-colors">
                                        <div className="flex items-center gap-4">
                                           <div className="w-10 h-10 bg-[var(--bg-secondary)] rounded-xl flex items-center justify-center font-black text-gold">
                                              {idx + 1}
                                           </div>
                                           <h4 className="font-bold text-[var(--text-primary)]">{section.section_ar}</h4>
                                        </div>
                                        <div className="text-xs text-[var(--text-muted)] font-bold">{section.lessons} {t.course.lessons}</div>
                                     </div>
                                     <div className="bg-[var(--bg-secondary)]/20 px-6 py-4">
                                        <div className="flex items-center justify-between text-sm text-[var(--text-secondary)]">
                                           <div className="flex items-center gap-2">
                                              <Play className="w-4 h-4 text-gold" />
                                              <span>مشاهدة الدروس</span>
                                           </div>
                                           <span>{section.duration}</span>
                                        </div>
                                     </div>
                                  </div>
                                ))}
                             </motion.div>
                           )}

                           {activeTab === 'instructor' && (
                             <motion.div key="instructor" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-[var(--bg-card)] p-10 rounded-[2.5rem] border border-[var(--border)]">
                                <div className="flex flex-col md:flex-row gap-10 items-center text-center md:text-start">
                                   <img src={instructor?.avatar} className="w-40 h-40 rounded-[2rem] object-cover ring-8 ring-gold/10 shadow-2xl" alt={instructor?.name_ar} />
                                   <div>
                                      <h3 className="text-3xl font-black text-[var(--text-primary)] mb-2">{language === 'ar' ? instructor?.name_ar : instructor?.name_en}</h3>
                                      <p className="text-gold font-bold mb-4">{language === 'ar' ? instructor?.specialty_ar : instructor?.specialty_en}</p>
                                      <p className="text-[var(--text-secondary)] leading-relaxed mb-6">{instructor?.bio_ar}</p>
                                      <Link to={`/instructor/${instructor?.id}`} className="text-gold font-black underline hover:text-gold-dark transition-colors">
                                         {language === 'ar' ? 'عرض الملف الشخصي الكامل' : 'View Full Profile'}
                                      </Link>
                                   </div>
                                </div>
                             </motion.div>
                           )}
                        </AnimatePresence>
                     </div>
                  </div>

                  {/* Sticky Sidebar */}
                  <aside className="lg:relative lg:top-0">
                     <div className="sticky top-28 space-y-6">
                        <div className="bg-[var(--bg-card)] p-8 rounded-[2.5rem] border border-[var(--border)] shadow-2xl overflow-hidden relative group">
                           <div className="absolute top-0 left-0 w-full h-1 bg-gold" />
                           
                           <div className="flex items-center justify-between mb-8">
                              <div className="text-4xl font-black text-[var(--text-primary)]">
                                 {course.price === 0 ? t.course.free : `$${course.price}`}
                              </div>
                              {course.price > 0 && (
                                <div className="text-lg text-[var(--text-muted)] line-through opacity-50">${course.original_price}</div>
                              )}
                           </div>

                           <div className="space-y-4 mb-8">
                              <button className="w-full bg-gold hover:bg-gold-dark text-white font-black py-5 rounded-2xl shadow-xl shadow-gold/20 transition-all flex items-center justify-center gap-3">
                                 {t.course.enroll_now}
                              </button>
                              <button className="w-full bg-[var(--bg-secondary)] text-[var(--text-primary)] font-black py-5 rounded-2xl border border-[var(--border)] transition-all">
                                 {t.course.curriculum}
                              </button>
                           </div>

                           <div className="space-y-5">
                              <div className="flex items-center gap-3 text-sm font-bold text-[var(--text-secondary)]">
                                 <Clock className="w-5 h-5 text-gold" />
                                 {course.duration_hours} {language === 'ar' ? 'ساعة فيديو' : 'hours video'}
                              </div>
                              <div className="flex items-center gap-3 text-sm font-bold text-[var(--text-secondary)]">
                                 <BookOpen className="w-5 h-5 text-gold" />
                                 {course.lessons_count} {t.course.lessons}
                              </div>
                              <div className="flex items-center gap-3 text-sm font-bold text-[var(--text-secondary)]">
                                 <Calendar className="w-5 h-5 text-gold" />
                                 {language === 'ar' ? 'وصول مفتوح مدى الحياة' : 'Full lifetime access'}
                              </div>
                              <div className="flex items-center gap-3 text-sm font-bold text-[var(--text-secondary)]">
                                 <ShieldCheck className="w-5 h-5 text-gold" />
                                 {t.course.guarantee}
                              </div>
                              <div className="flex items-center gap-3 text-sm font-bold text-[var(--text-secondary)]">
                                 <Award className="w-5 h-5 text-gold" />
                                 {language === 'ar' ? 'شهادة إتمام معتمدة' : 'Certificate of completion'}
                              </div>
                           </div>
                        </div>
                     </div>
                  </aside>
               </div>
            </div>
          </div>
        );
      }
    )
  );
};

export default CourseDetailPage;
