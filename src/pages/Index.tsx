
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import Features from '../components/Features';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import { Toaster } from '@/components/ui/sonner';
import { useLanguage } from '../contexts/LanguageContext';
import { AirVent, Thermometer, Snowflake, Wind } from 'lucide-react';

const Index = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'he';

  const services = [
    {
      title: t('installation'),
      description: t('installationDesc'),
      price: "₪800",
      imageUrl: "/lovable-uploads/f198de5a-2ce6-4a7a-bc24-5ea9a43ac3fe.png",
      features: [
        "כולל כל החומרים הנדרשים",
        "עבודה נקייה ומסודרת",
        "אחריות על ההתקנה",
        "זמין באזור המרכז והצפון"
      ]
    },
    {
      title: t('repair'),
      description: t('repairDesc'),
      price: "₪350",
      imageUrl: "https://images.unsplash.com/photo-1621395235622-e3cac874f2d7?q=80&w=1000",
      features: [
        "אבחון מדויק של התקלה",
        "תיקון מהיר במקום",
        "החלפת חלקי חילוף מקוריים",
        "אחריות על התיקון"
      ]
    },
    {
      title: t('cleaning'),
      description: t('cleaningDesc'),
      price: "₪300",
      imageUrl: "https://images.unsplash.com/photo-1586455122341-ba6bb0970677?q=80&w=1000",
      features: [
        "ניקוי יסודי של כל חלקי המזגן",
        "שימוש בחומרי ניקוי מקצועיים",
        "סילוק עובש וחיידקים",
        "שיפור זרימת האוויר ויעילות המזגן"
      ]
    },
    {
      title: t('systems'),
      description: t('systemsDesc'),
      price: "₪1,200",
      imageUrl: "https://images.unsplash.com/photo-1651145178248-1e7209528131?q=80&w=1000",
      features: [
        "טיפול במערכות מורכבות",
        "שירות לבתים ועסקים",
        "יועץ מקצועי",
        "שירות באזור המרכז והצפון"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-coolblue-50 text-gray-900 relative">
      {/* AC Design Pattern Elements */}
      <div className="fixed inset-0 -z-50 opacity-5 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/3">
          <AirVent size={300} className="text-coolblue-900 rotate-12" />
        </div>
        <div className="absolute bottom-1/3 right-1/4">
          <Snowflake size={240} className="text-coolblue-300" />
        </div>
      </div>
      
      <Toaster position="top-center" />
      <Header />
      <Hero />
      
      <section id="services" className="py-20 relative">
        {/* Cold Air Pattern */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-coolblue-50 to-transparent"></div>
        
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 ${isRTL ? 'rtl' : 'ltr'}`}>
            <div className="inline-block bg-coolblue-600/10 px-4 py-1 rounded-full mb-4">
              <h2 className="text-coolblue-800 font-medium">{t('servicesTitle')}</h2>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-coolblue-900 flex items-center justify-center">
              {isRTL ? (
                <>
                  {t('servicesSubtitle')}
                  <Snowflake size={28} className="ml-2 text-coolblue-500" />
                </>
              ) : (
                <>
                  <Snowflake size={28} className="mr-2 text-coolblue-500" />
                  {t('servicesSubtitle')}
                </>
              )}
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {t('servicesDescription')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
      
      <Features />
      <ContactForm />
      <Footer />

      {/* Animated air conditioning effect */}
      <div className="fixed bottom-0 left-0 w-full h-10 bg-gradient-to-t from-coolblue-100/30 to-transparent pointer-events-none z-10"></div>
    </div>
  );
};

export default Index;
