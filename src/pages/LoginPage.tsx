import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context';
import { Mail, Lock, ArrowRight, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const { t, isRtl } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)] py-20 px-4 relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-islamic/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md"
      >
        <div className="bg-[var(--bg-card)] p-10 rounded-[2.5rem] border border-[var(--border)] shadow-2xl relative z-10">
          <div className="text-center mb-10">
            <Link to="/" className="inline-flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gold rounded-xl flex items-center justify-center transform rotate-12">
                <span className="text-white text-2xl font-black">ن</span>
              </div>
              <span className="text-2xl font-black tracking-tighter text-[var(--text-primary)]">نـور</span>
            </Link>
            <h1 className="text-3xl font-black text-[var(--text-primary)] mb-2">{t.nav.login}</h1>
            <p className="text-[var(--text-secondary)]">أهلاً بك مجدداً في رحلتك التعليمية</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-sm font-bold text-[var(--text-secondary)] px-2">البريد الإلكتروني</label>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="name@example.com"
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border)] rounded-xl py-4 px-12 focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all"
                />
                <Mail className="absolute left-4 rtl:left-auto rtl:right-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] w-5 h-5" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-2">
                <label className="text-sm font-bold text-[var(--text-secondary)]">كلمة المرور</label>
                <button className="text-xs text-gold font-bold hover:underline">نسيت كلمة المرور؟</button>
              </div>
              <div className="relative">
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border)] rounded-xl py-4 px-12 focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all"
                />
                <Lock className="absolute left-4 rtl:left-auto rtl:right-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] w-5 h-5" />
              </div>
            </div>

            <button className="w-full bg-gold text-white font-black py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gold-light transition-all shadow-lg shadow-gold/20 group">
              {t.nav.login}
              <motion.span animate={{ x: isRtl ? -5 : 5 }} transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}>
                <ArrowRight className={`w-5 h-5 ${isRtl ? 'rotate-180' : ''}`} />
              </motion.span>
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-[var(--border)] text-center">
            <p className="text-[var(--text-secondary)] text-sm mb-4">أو سجل دخولك عبر</p>
            <div className="grid grid-cols-2 gap-4">
               <button className="flex items-center justify-center gap-2 bg-[var(--bg-primary)] border border-[var(--border)] py-3 rounded-xl hover:border-gold transition-all">
                  <span className="w-5 h-5 bg-blue-600 rounded-sm text-[10px] text-white flex items-center justify-center font-bold">G</span>
                  <span className="text-xs font-bold">Google</span>
               </button>
               <button className="flex items-center justify-center gap-2 bg-[var(--bg-primary)] border border-[var(--border)] py-3 rounded-xl hover:border-gold transition-all">
                  <span className="w-5 h-5 bg-black rounded-sm text-[10px] text-white flex items-center justify-center font-bold"></span>
                  <span className="text-xs font-bold">Apple</span>
               </button>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-[var(--text-muted)] text-sm">
              ليس لديك حساب؟{' '}
              <Link to="/signup" className="text-gold font-bold hover:underline flex items-center justify-center gap-1 mt-2">
                <UserPlus className="w-4 h-4" />
                {t.nav.signup} مجاناً
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
