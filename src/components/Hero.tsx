
import React from 'react';
import { Button } from '@/components/ui/button';
import { AirVent, Thermometer, Phone, MessageCircle } from 'lucide-react';

const Hero = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/972584448769', '_blank');
  };

  return (
    <div className="relative bg-gradient-to-b from-coolblue-50 to-white py-16 md:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-20 left-10">
          <AirVent size={120} />
        </div>
        <div className="absolute top-40 right-20">
          <Thermometer size={80} />
        </div>
        <div className="absolute bottom-20 left-1/4">
          <AirVent size={100} />
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-coolblue-900">
              שירותי מיזוג אוויר מקצועיים
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              התקנה, תיקון וניקוי מזגנים באזור המרכז והצפון על ידי זכרי אלי ברדה
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse">
              <Button className="bg-coolblue-600 hover:bg-coolblue-700 text-white px-8 py-6 text-lg" onClick={openWhatsApp}>
                <Phone className="ml-2" />
                058-444-8769
              </Button>
              <Button variant="outline" 
                className="bg-white border-coolblue-600 text-coolblue-600 hover:bg-coolblue-50 px-8 py-6 text-lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})}>
                לשירותים שלנו
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-coolblue-600 rounded-full blur-3xl opacity-20 transform -translate-y-1/4 scale-75"></div>
              <img 
                src="/lovable-uploads/38af17fd-4bb4-416b-aed4-52ed56f79977.png"
                alt="זכרי אלי ברדה מתקין מזגן" 
                className="relative z-10 rounded-xl shadow-2xl w-full object-cover aspect-[3/4] sm:aspect-video"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
