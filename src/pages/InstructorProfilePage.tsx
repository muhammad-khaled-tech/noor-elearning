import React from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '../context';
import { instructors, courses } from '../data/mockData';
import CourseCard from '../components/ui/CourseCard';
import { GraduationCap, Mail, Phone, Globe } from 'lucide-react';

const InstructorProfilePage: React.FC = () => {
  const { id } = useParams();
  const { language, t } = useLanguage();
  
  const instructor = instructors.find(i => i.id === Number(id));
  const instructorCourses = courses.filter(c => c.instructor_id === Number(id));

  if (!instructor) return <div>Instructor not found</div>;

  return (
    <div className="bg-[var(--bg-primary)] min-h-screen">
      {/* Profile Header */}
      <div className="relative h-64 lg:h-96 w-full">
         <img src="https://images.unsplash.com/photo-1557683316-973673baf926?w=1600" className="w-full h-full object-cover" alt="banner" />
         <div className="absolute inset-0 bg-gold/20 mix-blend-multiply" />
         <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] to-transparent" />
      </div>

      <div className="container mx-auto px-4 -mt-24 lg:-mt-32 relative z-10 pb-20">
         <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Sidebar Info */}
            <aside className="w-full lg:w-80">
               <div className="bg-[var(--bg-card)] p-8 rounded-[2.5rem] border border-[var(--border)] shadow-xl text-center">
                  <img 
                    src={instructor.avatar} 
                    className="w-40 h-40 rounded-[2rem] mx-auto border-8 border-gold/10 -mt-20 mb-6 shadow-2xl object-cover" 
                    alt={instructor.name_ar} 
                  />
                  <h1 className="text-2xl font-black text-[var(--text-primary)] mb-1">
                    {language === 'ar' ? instructor.name_ar : instructor.name_en}
                  </h1>
                  <p className="text-gold font-bold text-sm mb-6">
                    {language === 'ar' ? instructor.specialty_ar : instructor.specialty_en}
                  </p>

                  <div className="flex justify-center gap-4 mb-8">
                     <button className="p-2 rounded-full bg-[var(--bg-secondary)] text-[var(--text-muted)] hover:text-gold transition-colors">
                        <Mail className="w-5 h-5" />
                     </button>
                     <button className="p-2 rounded-full bg-[var(--bg-secondary)] text-[var(--text-muted)] hover:text-gold transition-colors">
                        <Phone className="w-5 h-5" />
                     </button>
                     <button className="p-2 rounded-full bg-[var(--bg-secondary)] text-[var(--text-muted)] hover:text-gold transition-colors">
                        <Globe className="w-5 h-5" />
                     </button>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                     <div className="bg-[var(--bg-secondary)] p-4 rounded-2xl">
                        <div className="text-lg font-black text-[var(--text-primary)]">{instructor.students.toLocaleString()}</div>
                        <div className="text-[10px] text-[var(--text-muted)] font-bold uppercase">{t.course.students}</div>
                     </div>
                     <div className="bg-[var(--bg-secondary)] p-4 rounded-2xl">
                        <div className="text-lg font-black text-[var(--text-primary)]">{instructor.courses}</div>
                        <div className="text-[10px] text-[var(--text-muted)] font-bold uppercase">{t.nav.courses}</div>
                     </div>
                  </div>
               </div>

               <div className="mt-8 bg-gold/5 p-8 rounded-3xl border border-gold/10">
                  <h3 className="font-black text-[var(--text-primary)] mb-4 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-gold" />
                    المؤهلات
                  </h3>
                  <ul className="text-sm text-[var(--text-secondary)] space-y-3">
                     <li>• دكتوراه في علوم الحاسوب</li>
                     <li>• 15 عاماً من الخبرة التقنية</li>
                     <li>• مؤسس لعدة شركات ناشئة</li>
                  </ul>
               </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
               <div className="mb-12">
                  <h2 className="text-3xl font-black text-[var(--text-primary)] mb-6">عن المدرب</h2>
                  <div className="prose dark:prose-invert max-w-none text-lg leading-relaxed text-[var(--text-secondary)]">
                     {instructor.bio_ar}
                     <p className="mt-4">يسعى دائماً لنشر المعرفة التقنية في الوطن العربي بطريقة مبسطة وعملية تركز على احتياجات الطلاب الحقيقية في سوق العمل.</p>
                  </div>
               </div>

               <h2 className="text-3xl font-black text-[var(--text-primary)] mb-8">الدورات المقدمة ({instructorCourses.length})</h2>
               <div className="grid md:grid-cols-2 gap-8">
                  {instructorCourses.map(course => (
                    <CourseCard key={course.id} course={course} />
                  ))}
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default InstructorProfilePage;
