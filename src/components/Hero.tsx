
import React from 'react';
import { Button } from '@/components/ui/button';
import { AirVent, Thermometer, Phone, MessageCircle, Mail, Snowflake, Wind } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { language, t } = useLanguage();
  const isRTL = language === 'he';
  
  const openWhatsApp = () => {
    window.open('https://wa.me/972584448769', '_blank');
  };

  const sendEmail = () => {
    window.open('mailto:zakarie688@gmail.com', '_blank');
  };

  return (
    <div className="relative bg-gradient-to-b from-coolblue-100 to-white py-16 md:py-24 overflow-hidden ac-background">
      {/* Animated AC Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Cold air waves */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
          <div className="h-80 w-80 rounded-full bg-gradient-to-tr from-coolblue-100/40 to-coolblue-300/20 blur-xl animate-pulse-slow"></div>
        </div>
        
        <div className="absolute top-20 left-10 animate-float opacity-10">
          <AirVent size={120} />
        </div>
        <div className="absolute top-40 right-20 animate-pulse opacity-10">
          <Thermometer size={80} />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float opacity-10">
          <Snowflake size={100} />
        </div>
        <div className="absolute bottom-40 right-1/3 animate-pulse opacity-10">
          <Wind size={70} />
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className={`md:w-1/2 mb-10 md:mb-0 text-center ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
            <div className="inline-block bg-coolblue-600/10 px-4 py-1 rounded-full mb-4">
              <h2 className="text-coolblue-800 font-medium text-sm md:text-base">ZakOr - {t('servicesTitle')}</h2>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-coolblue-900 relative">
              {t('heroTitle')}
              <span className="absolute top-0 -right-4 text-coolblue-400">
                <Snowflake size={24} className="rotate-12" />
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              {t('heroSubtitle')}
            </p>
            <div className={`flex flex-col sm:flex-row justify-center ${isRTL ? 'md:justify-end' : 'md:justify-start'} gap-4`}>
              <Button className="bg-coolblue-600 hover:bg-coolblue-700 text-white px-6 py-5 text-lg shadow-lg transition-all hover:translate-y-[-2px]" 
                onClick={openWhatsApp}>
                <MessageCircle className={isRTL ? "ml-2" : "mr-2"} />
                {t('whatsapp')}
              </Button>
              <Button variant="outline" 
                className="border-coolblue-600 text-coolblue-600 hover:bg-coolblue-50 px-6 py-5 text-lg shadow transition-all hover:translate-y-[-2px]"
                onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})}>
                {t('ourServices')}
              </Button>
              <Button variant="ghost" 
                className="text-coolblue-700 hover:bg-coolblue-50 px-6 py-5 text-lg transition-all hover:translate-y-[-2px]"
                onClick={sendEmail}>
                <Mail className={isRTL ? "ml-2" : "mr-2"} />
                {t('sendEmail')}
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative group">
              {/* Decorative elements */}
              <div className="absolute -inset-4 -z-10">
                <div className="h-full w-full bg-gradient-to-r from-coolblue-200/20 via-coolblue-300/20 to-coolblue-400/20 rounded-xl blur-xl"></div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-coolblue-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="bg-white rounded-2xl p-1 shadow-2xl border-4 border-white overflow-hidden">
                  <img 
                    src="/lovable-uploads/f198de5a-2ce6-4a7a-bc24-5ea9a43ac3fe.png"
                    alt="זכרי אלי ברדה מתקין מזגן" 
                    className="w-full object-cover rounded-xl"
                  />
                  
                  {/* Overlaid AC Unit Design Elements */}
                  <div className="absolute top-2 right-2 bg-coolblue-500/80 backdrop-blur-sm text-white p-1 rounded-lg shadow-lg flex items-center">
                    <Snowflake size={16} className="mr-1" />
                    <span className="text-sm font-bold">15°C</span>
                  </div>
                  
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm py-2 px-4 rounded-full shadow-lg">
                    <div className="flex items-center gap-4">
                      {/* Cooling mode */}
                      <div className="flex flex-col items-center">
                        <Snowflake size={18} className="text-coolblue-600" />
                        <span className="text-xs font-medium text-coolblue-800">COOL</span>
                      </div>
                      
                      {/* Divider */}
                      <div className="h-8 w-px bg-coolblue-200"></div>
                      
                      {/* Fan speed */}
                      <div className="flex flex-col items-center">
                        <Wind size={18} className="text-coolblue-600" />
                        <span className="text-xs font-medium text-coolblue-800">TURBO</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Pulsing air effect */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <div className="w-16 h-16 rounded-full border-2 border-coolblue-300/30 animate-pulse opacity-0"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-12 w-full text-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V69.81C50.57,94.08,100.92,90.39,140.35,78.88Z" fill="currentColor" fillOpacity="1"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
