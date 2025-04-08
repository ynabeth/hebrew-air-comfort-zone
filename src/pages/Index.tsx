
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
      imageUrl: "/lovable-uploads/4585d3ee-2d54-4855-a08e-89d05ca85650.png",
      features: [
        language === 'he' ? "כולל כל החומרים הנדרשים" : "Inclut tous les matériaux nécessaires",
        language === 'he' ? "עבודה נקייה ומסודרת" : "Travail propre et soigné",
        language === 'he' ? "אחריות על ההתקנה" : "Garantie sur l'installation",
        language === 'he' ? "זמין באזור המרכז והצפון" : "Disponible dans les régions du centre et du nord"
      ]
    },
    {
      title: t('repair'),
      description: t('repairDesc'),
      price: "₪350",
      imageUrl: "/lovable-uploads/ef08a598-5893-46ee-88c8-3d38b499338e.png",
      features: [
        language === 'he' ? "אבחון מדויק של התקלה" : "Diagnostic précis du problème",
        language === 'he' ? "תיקון מהיר במקום" : "Réparation rapide sur place",
        language === 'he' ? "החלפת חלקי חילוף מקוריים" : "Remplacement de pièces d'origine",
        language === 'he' ? "אחריות על התיקון" : "Garantie sur la réparation"
      ]
    },
    {
      title: t('cleaning'),
      description: t('cleaningDesc'),
      price: "₪300",
      imageUrl: "/lovable-uploads/987136ea-8c00-49d5-9f24-3f9d851b8ee6.png",
      features: [
        language === 'he' ? "ניקוי יסודי של כל חלקי המזגן" : "Nettoyage en profondeur de toutes les parties du climatiseur", 
        language === 'he' ? "שימוש בחומרי ניקוי מקצועיים" : "Utilisation de produits de nettoyage professionnels",
        language === 'he' ? "סילוק עובש וחיידקים" : "Élimination des moisissures et des bactéries",
        language === 'he' ? "שיפור זרימת האוויר ויעילות המזגן" : "Amélioration du flux d'air et de l'efficacité"
      ]
    },
    {
      title: t('systems'),
      description: t('systemsDesc'),
      price: "₪1,200",
      imageUrl: "/lovable-uploads/4037e3a3-f76d-4d6c-a77f-5046f91c408a.png",
      features: [
        language === 'he' ? "טיפול במערכות מורכבות" : "Traitement de systèmes complexes",
        language === 'he' ? "שירות לבתים ועסקים" : "Service pour maisons et entreprises",
        language === 'he' ? "יועץ מקצועי" : "Conseiller professionnel",
        language === 'he' ? "שירות באזור המרכז והצפון" : "Service dans les régions du centre et du nord"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-coolblue-50 text-gray-900 relative">
      {/* Animated Air Conditioning Design Elements */}
      <div className="fixed inset-0 -z-50 opacity-5 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/3">
          <AirVent size={300} className="text-coolblue-900 rotate-12" />
        </div>
        <div className="absolute bottom-1/3 right-1/4">
          <Snowflake size={240} className="text-coolblue-300" />
        </div>
        
        {/* Animated cold waves */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-40 w-40 border-4 border-coolblue-200/30 rounded-full animate-cold-wave"></div>
          <div className="absolute top-0 left-0 h-40 w-40 border-4 border-coolblue-200/20 rounded-full animate-cold-wave animation-delay-1000"></div>
          <div className="absolute top-0 left-0 h-40 w-40 border-4 border-coolblue-200/10 rounded-full animate-cold-wave animation-delay-2000"></div>
        </div>
        
        {/* Additional air flow lines */}
        <div className="absolute bottom-0 left-0 w-full h-64">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,50 Q25,30 50,50 T100,50" stroke="rgba(144, 202, 249, 0.2)" strokeWidth="0.5" fill="none" />
            <path d="M0,60 Q25,40 50,60 T100,60" stroke="rgba(144, 202, 249, 0.15)" strokeWidth="0.5" fill="none" />
            <path d="M0,70 Q25,50 50,70 T100,70" stroke="rgba(144, 202, 249, 0.1)" strokeWidth="0.5" fill="none" />
          </svg>
        </div>
      </div>
      
      <Toaster position="top-center" />
      <Header />
      <Hero />
      
      <section id="services" className="py-20 relative">
        {/* Cold Air Pattern */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-coolblue-50 to-transparent"></div>
        <div className="absolute left-0 top-40 -z-10">
          <Wind size={120} className="text-coolblue-100 opacity-30" />
        </div>
        <div className="absolute right-0 top-96 -z-10">
          <Thermometer size={140} className="text-coolblue-100 opacity-30" />
        </div>
        
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
          
          {/* Service cards with improved styling */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          
          {/* Air flow decorative element */}
          <div className="mt-20 relative">
            <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-coolblue-300/30 to-transparent"></div>
            <div className="absolute left-1/2 -translate-x-1/2 -top-5 bg-white rounded-full p-2 border border-coolblue-100 shadow-lg">
              <Snowflake size={24} className="text-coolblue-500" />
            </div>
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
