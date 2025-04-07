
import React from 'react';
import { ThermometerSnowflake, ThermometerSun, AirVent, Shield, Droplets, Snowflake, Wind } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Features = () => {
  const { language, t } = useLanguage();
  const isRTL = language === 'he';

  const featuresList = [
    {
      icon: <ThermometerSnowflake className="h-10 w-10 text-coolblue-600" />,
      title: t('featureProInstall'),
      description: t('featureProInstallDesc')
    },
    {
      icon: <ThermometerSun className="h-10 w-10 text-coolblue-600" />,
      title: t('featureRepair'),
      description: t('featureRepairDesc')
    },
    {
      icon: <Droplets className="h-10 w-10 text-coolblue-600" />,
      title: t('featureCleaning'),
      description: t('featureCleaningDesc')
    },
    {
      icon: <Shield className="h-10 w-10 text-coolblue-600" />,
      title: t('featureWarranty'),
      description: t('featureWarrantyDesc')
    }
  ];

  return (
    <section id="features" className="py-16 relative">
      {/* Cold/Hot pattern background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-coolblue-50/50 to-white z-0"></div>
        <div className="absolute top-10 right-10 opacity-10">
          <Snowflake size={80} className="text-coolblue-600" />
        </div>
        <div className="absolute bottom-10 left-10 opacity-10">
          <Wind size={60} className="text-coolblue-600" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-12 ${isRTL ? 'rtl' : 'ltr'}`}>
          <div className="inline-block relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-coolblue-900">{t('whyChoose')}</h2>
            <span className="absolute -top-3 -right-6 text-coolblue-400">
              <AirVent size={24} />
            </span>
          </div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t('whyDesc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresList.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-coolblue-500">
              <div className="flex justify-center mb-4 relative">
                {feature.icon}
                {/* Cold air waves animation */}
                <div className="absolute -z-10 opacity-20">
                  <div className="w-20 h-20 rounded-full bg-coolblue-100 animate-pulse"></div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">{feature.title}</h3>
              <p className={`text-gray-600 text-center ${isRTL ? 'rtl' : 'ltr'}`}>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 relative overflow-hidden bg-gradient-to-r from-coolblue-600 to-coolblue-700 rounded-lg p-8 text-white text-center">
          {/* AC vents decoration */}
          <div className="absolute top-0 left-0 w-full h-4 bg-coolblue-800/20 flex">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="h-full w-2 mx-1 bg-coolblue-500/30"></div>
            ))}
          </div>
          
          <h3 className="text-2xl font-bold mb-4">{t('needHelp')}</h3>
          <p className="text-lg mb-6">{t('hereToHelp')}</p>
          <button className="bg-white text-coolblue-600 hover:bg-gray-100 font-medium py-2 px-6 rounded-full">
            {t('contactUs')} 058-444-8769
          </button>
          
          {/* Bottom AC vents */}
          <div className="absolute bottom-0 left-0 w-full h-4 bg-coolblue-800/20 flex">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="h-full w-2 mx-1 bg-coolblue-500/30"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
