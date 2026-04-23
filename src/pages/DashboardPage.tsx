import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context';
import { dashboardData, courses } from '../data/mockData';
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { 
  Home, Book, TrendingUp, Award, Bell, Settings, 
  PlayCircle, Clock, Calendar
} from 'lucide-react';
import ProgressBar from '../components/ui/ProgressBar';
import Badge from '../components/ui/Badge';

const DashboardPage: React.FC = () => {
  const { t, language, isRtl } = useLanguage();

  const sidebarItems = [
    { name: t.nav.home, icon: Home },
    { name: t.dashboard.my_courses, icon: Book, active: true },
    { name: t.dashboard.progress, icon: TrendingUp },
    { name: t.dashboard.certificates, icon: Award },
    { name: t.dashboard.notifications, icon: Bell },
    { name: t.dashboard.settings, icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-secondary)]/30 flex flex-col lg:flex-row">
      {/* Dashboard Sidebar */}
      <aside className="w-full lg:w-72 bg-[var(--bg-card)] border-b lg:border-b-0 lg:border-l rtl:lg:border-l-0 rtl:lg:border-r border-[var(--border)] p-6 shrink-0">
        <div className="flex items-center gap-4 mb-10 pb-6 border-b border-[var(--border)]">
           <img src="https://i.pravatar.cc/150?img=3" className="w-12 h-12 rounded-full border-2 border-gold" alt="user" />
           <div>
              <div className="font-bold text-[var(--text-primary)]">عبدالله العتيبي</div>
              <div className="text-xs text-[var(--text-muted)]">طالب فضي</div>
           </div>
        </div>
        
        <nav className="space-y-2">
           {sidebarItems.map((item, idx) => (
             <button 
               key={idx}
               className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                 item.active ? 'bg-gold text-white shadow-lg shadow-gold/20' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] hover:text-gold'
               }`}
             >
               <item.icon className={`w-5 h-5 ${item.active ? 'text-white' : 'text-gold'}`} />
               <span>{item.name}</span>
             </button>
           ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-10">
        <header className="flex justify-between items-center mb-10">
           <h1 className="text-3xl font-black text-[var(--text-primary)]">{t.dashboard.my_courses}</h1>
           <div className="flex items-center gap-4">
              <div className="text-sm font-bold text-[var(--text-secondary)]">سجل الدخول: <span className="text-gold">أمس، 05:30 م</span></div>
           </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
           {[
             { name: t.dashboard.stats.certificates, value: dashboardData.certificates_earned, icon: Award, color: 'bg-gold' },
             { name: t.dashboard.stats.hours, value: dashboardData.total_hours, icon: Clock, color: 'bg-blue-500' },
             { name: t.dashboard.stats.streak, value: dashboardData.streak_days, icon: Calendar, color: 'bg-orange-500' },
           ].map((stat, idx) => (
             <motion.div 
               key={idx}
               whileHover={{ y: -5 }}
               className="bg-[var(--bg-card)] p-6 rounded-3xl border border-[var(--border)] shadow-sm flex items-center gap-5"
             >
                <div className={`w-14 h-14 ${stat.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                   <stat.icon className="w-8 h-8" />
                </div>
                <div>
                   <div className="text-2xl font-black text-[var(--text-primary)]">{stat.value}</div>
                   <div className="text-xs text-[var(--text-muted)] font-bold">{stat.name}</div>
                </div>
             </motion.div>
           ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
           {/* Enrolled Courses */}
           <div className="lg:col-span-2 space-y-6">
              <h2 className="text-xl font-black text-[var(--text-primary)] mb-6">{t.dashboard.continue_learning}</h2>
              {dashboardData.enrolled_courses.map((enrollment) => {
                const course = courses.find(c => c.id === enrollment.course_id);
                return (
                  <motion.div 
                    key={enrollment.course_id}
                    className="card-premium p-4 md:p-6 flex flex-col md:flex-row gap-6 items-center"
                  >
                     <img src={course?.thumbnail} className="w-full md:w-40 aspect-video rounded-xl object-cover" alt="course" />
                     <div className="flex-1 w-full">
                        <div className="flex justify-between items-start mb-2">
                           <h3 className="font-bold text-[var(--text-primary)]">{language === 'ar' ? course?.title_ar : course?.title_en}</h3>
                           <Badge variant="outline">{enrollment.progress}%</Badge>
                        </div>
                        <div className="text-xs text-[var(--text-muted)] mb-4">
                           {t.dashboard.last_lesson}: {language === 'ar' ? enrollment.last_lesson_ar : enrollment.last_lesson_en}
                        </div>
                        <ProgressBar progress={enrollment.progress} className="mb-4" />
                        <div className="flex justify-between items-center">
                           <div className="text-xs text-[var(--text-muted)] group flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" />
                              {language === 'ar' ? enrollment.last_accessed_ar : enrollment.last_accessed_en}
                           </div>
                           <button className="text-sm font-bold text-gold hover:underline flex items-center gap-1 group">
                              <PlayCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                              {t.dashboard.continue_learning}
                           </button>
                        </div>
                     </div>
                  </motion.div>
                );
              })}
           </div>

           {/* Progress Charts & Activity */}
           <div className="space-y-10">
              <div className="bg-[var(--bg-card)] p-6 rounded-3xl border border-[var(--border)] shadow-sm">
                 <h2 className="text-lg font-black text-[var(--text-primary)] mb-6">{t.dashboard.weekly_progress}</h2>
                 <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                       <BarChart data={dashboardData.weekly_hours}>
                          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} vertical={false} />
                          <XAxis 
                            dataKey={isRtl ? 'day_ar' : 'day_en'} 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fontSize: 10, fill: 'var(--text-muted)' }} 
                          />
                          <Tooltip 
                            contentStyle={{ borderRadius: '15px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                            cursor={{ fill: 'rgba(212, 168, 71, 0.05)' }}
                          />
                          <Bar dataKey="hours" fill="#D4A847" radius={[4, 4, 0, 0]} />
                       </BarChart>
                    </ResponsiveContainer>
                 </div>
              </div>

              <div className="bg-[var(--bg-card)] p-6 rounded-3xl border border-[var(--border)] shadow-sm">
                 <h2 className="text-lg font-black text-[var(--text-primary)] mb-6">الشهادات المكتملة</h2>
                 <div className="space-y-4">
                    {[1, 2].map(i => (
                      <div key={i} className="flex items-center gap-4 p-3 bg-gold/5 rounded-2xl">
                         <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                            <Award className="w-6 h-6 text-gold" />
                         </div>
                         <div className="flex-1">
                            <div className="text-xs font-bold text-[var(--text-primary)]">مطور ويب محترف</div>
                            <div className="text-[10px] text-[var(--text-muted)]">تم الحصول عليها في 12 يونيو 2025</div>
                         </div>
                         <button className="text-gold"><Clock className="w-4 h-4" /></button>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
