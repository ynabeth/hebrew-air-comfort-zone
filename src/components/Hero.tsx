
import React from 'react';
import { Button } from '@/components/ui/button';
import { AirVent, Thermometer, Phone, MessageCircle, Mail } from 'lucide-react';

const Hero = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/972584448769', '_blank');
  };

  const sendEmail = () => {
    window.open('mailto:zakarie688@gmail.com', '_blank');
  };

  return (
    <div className="relative bg-gradient-to-b from-coolblue-100 to-white py-16 md:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
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
            <div className="inline-block bg-coolblue-600/10 px-4 py-1 rounded-full mb-4">
              <h2 className="text-coolblue-800 font-medium text-sm md:text-base">ZakOr - שירותי מיזוג אוויר</h2>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-coolblue-900">
              שירותי מיזוג אוויר מקצועיים
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              התקנה, תיקון וניקוי מזגנים באזור המרכז והצפון על ידי זכרי אלי ברדה
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-end gap-4">
              <Button className="bg-coolblue-600 hover:bg-coolblue-700 text-white px-6 py-5 text-lg" 
                onClick={openWhatsApp}>
                <MessageCircle className="ml-2" />
                WhatsApp
              </Button>
              <Button variant="outline" 
                className="border-coolblue-600 text-coolblue-600 hover:bg-coolblue-50 px-6 py-5 text-lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})}>
                לשירותים שלנו
              </Button>
              <Button variant="ghost" 
                className="text-coolblue-700 hover:bg-coolblue-50 px-6 py-5 text-lg"
                onClick={sendEmail}>
                <Mail className="ml-2" />
                שלח מייל
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 md:pr-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-coolblue-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="flex rounded-2xl overflow-hidden shadow-2xl border-4 border-white relative z-10">
                <img 
                  src="/lovable-uploads/f198de5a-2ce6-4a7a-bc24-5ea9a43ac3fe.png"
                  alt="זכרי אלי ברדה מתקין מזגן" 
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
