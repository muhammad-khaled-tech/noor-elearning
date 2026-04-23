import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context';
import { Mail, Phone, MapPin, Globe, Share2 } from 'lucide-react';
import { categories } from '../../data/mockData';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  const sections = [
    {
      title: t.nav.home,
      links: [
        { name: t.nav.courses, path: '/courses' },
        { name: t.nav.instructors, path: '/instructors' },
        { name: t.footer.faq, path: '/faq' },
        { name: t.footer.about, path: '/about' },
      ]
    },
    {
      title: t.footer.learning_areas,
      links: categories.slice(0, 4).map(cat => ({
         name: language === 'ar' ? cat.name_ar : cat.name_en,
         path: `/courses?cat=${cat.id}`
      }))
    }
  ];

  return (
    <footer className="bg-[var(--bg-card)] border-t border-[var(--border)] pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center transform rotate-12">
                <span className="text-white text-xl font-black">ن</span>
              </div>
              <span className="text-xl font-black tracking-tighter text-[var(--text-primary)]">نـور</span>
            </Link>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">
              {t.footer.about_text}
            </p>
            <div className="flex gap-4">
              {[Globe, Mail, Share2, Phone].map((Icon, i) => (
                <button key={i} className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--text-muted)] hover:bg-gold hover:text-white transition-all shadow-sm">
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          {/* Nav Sections */}
          {sections.map((section, idx) => (
            <div key={idx}>
              <h4 className="font-black text-[var(--text-primary)] mb-6">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link to={link.path} className="text-sm text-[var(--text-secondary)] hover:text-gold transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="font-black text-[var(--text-primary)] mb-6">{t.footer.contact_us}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <span>support@noor-edu.sa</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <span dir="ltr">+966 50 123 4567</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                <MapPin className="w-5 h-5 text-gold shrink-0" />
                <span>{t.footer.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-6 text-[var(--text-muted)] text-xs">
           <p>{t.footer.rights}</p>
           <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-gold transition-colors">{t.footer.privacy}</Link>
              <Link to="/terms" className="hover:text-gold transition-colors">{t.footer.terms}</Link>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
