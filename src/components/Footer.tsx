
import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { language, t } = useLanguage();
  const isRTL = language === 'he';
  
  const openWhatsApp = () => {
    window.open('https://wa.me/972584448769', '_blank');
  };

  return (
    <footer className="bg-coolblue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className={isRTL ? 'rtl' : 'ltr'}>
            <h3 className="text-xl font-bold mb-4">
              {language === 'he' ? "ZakOr - זכרי אלי ברדה" : "ZakOr - Zakri Eli Barda"}
            </h3>
            <p className="text-coolblue-100 mb-4">
              {language === 'he' 
                ? "שירותי התקנה, תיקון וניקוי מזגנים מקצועיים באזור המרכז והצפון." 
                : "Services professionnels d'installation, de réparation et de nettoyage de climatiseurs dans les régions du centre et du nord."}
            </p>
          </div>
          
          <div className={isRTL ? 'rtl' : 'ltr'}>
            <h3 className="text-lg font-medium mb-4">{language === 'he' ? "ניווט מהיר" : "Navigation rapide"}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-coolblue-200 hover:text-white transition-colors">{t('home')}</a></li>
              <li><a href="#services" className="text-coolblue-200 hover:text-white transition-colors">{t('services')}</a></li>
              <li><a href="#features" className="text-coolblue-200 hover:text-white transition-colors">{t('advantages')}</a></li>
              <li><a href="#contact" className="text-coolblue-200 hover:text-white transition-colors">{t('contact')}</a></li>
            </ul>
          </div>

          <div className={isRTL ? 'rtl' : 'ltr'}>
            <h3 className="text-lg font-medium mb-4">{language === 'he' ? "פרטי התקשרות" : "Coordonnées"}</h3>
            <ul className="space-y-3">
              <li className="flex items-center cursor-pointer hover:text-coolblue-300" onClick={openWhatsApp}>
                <Phone size={18} className={isRTL ? "ml-2" : "mr-2"} />
                <span>058-444-8769</span>
              </li>
              <li className="flex items-center cursor-pointer hover:text-coolblue-300" onClick={openWhatsApp}>
                <MessageCircle size={18} className={isRTL ? "ml-2" : "mr-2"} />
                <span>WhatsApp</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className={isRTL ? "ml-2" : "mr-2"} />
                <a href="mailto:zakarie688@gmail.com" className="hover:text-coolblue-300">zakarie688@gmail.com</a>
              </li>
              <li className="flex items-center">
                <MapPin size={18} className={isRTL ? "ml-2" : "mr-2"} />
                <span>{t('serviceArea')}</span>
              </li>
              <li className="pt-2 text-white font-medium">{t('availability')}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-coolblue-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-coolblue-200 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} {language === 'he' ? "ZakOr - זכרי אלי ברדה. כל הזכויות שמורות." : "ZakOr - Zakri Eli Barda. Tous droits réservés."}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
