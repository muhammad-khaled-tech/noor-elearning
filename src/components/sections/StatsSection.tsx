import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context';
import { Users, GraduationCap, Award, Globe } from 'lucide-react';

const StatsSection: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { label: t.hero.students, value: '50,000+', icon: Users },
    { label: t.hero.courses, value: '200+', icon: GraduationCap },
    { label: t.hero.trust, value: '98%', icon: Award },
    { label: t.hero.trainers, value: '50+', icon: Globe },
  ];

  return (
    <section className="py-16 bg-[#0D0B08] text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-islamic opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-gold/30">
                 <stat.icon className="w-8 h-8 text-gold" />
              </div>
              <div className="text-3xl font-black mb-1">{stat.value}</div>
              <div className="text-xs text-gold font-bold uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
