
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MessageCircle, Mail, Snowflake, ThermometerSnowflake } from 'lucide-react';
import { toast } from 'sonner';
import { useLanguage } from '../contexts/LanguageContext';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  features: string[];
}

const ServiceCard = ({ title, description, price, imageUrl, features }: ServiceCardProps) => {
  const { language, t } = useLanguage();
  const isRTL = language === 'he';
  
  const openWhatsApp = () => {
    const messageText = language === 'he' 
      ? `אני מעוניין בשירות ${title}`
      : `Je suis intéressé par le service ${title}`;
    
    window.open(`https://wa.me/972584448769?text=${encodeURIComponent(messageText)}`, '_blank');
    toast.success(language === 'he' ? 'פותח WhatsApp' : 'Ouverture de WhatsApp');
  };
  
  const callPhone = () => {
    window.open('tel:0584448769', '_blank');
    toast.success(language === 'he' ? 'מחייג עכשיו' : 'Appel en cours');
  };

  const sendEmail = () => {
    const subject = language === 'he' 
      ? `פנייה בנושא ${title}`
      : `Demande concernant ${title}`;
      
    window.open(`mailto:zakarie688@gmail.com?subject=${encodeURIComponent(subject)}`, '_blank');
    toast.success(language === 'he' ? 'פותח את תוכנת המייל' : "Ouverture de l'application de messagerie");
  };
  
  return (
    <Card className="overflow-hidden transition-all hover:shadow-xl border-coolblue-100 h-full flex flex-col relative group hover:translate-y-[-5px] duration-300">
      <div className="absolute top-0 inset-x-0 h-3 bg-gradient-to-r from-coolblue-400 to-coolblue-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      
      {/* Decorative cooling icon */}
      <div className="absolute top-4 right-4 z-10">
        <div className="bg-white/80 backdrop-blur-sm p-1.5 rounded-full shadow-lg">
          <Snowflake size={20} className="text-coolblue-600" />
        </div>
      </div>
      
      {/* Image section with overlay */}
      <div className="aspect-video overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 flex items-end">
          <div className={`p-4 w-full ${isRTL ? 'text-right' : 'text-left'}`}>
            <div className="flex items-center justify-between">
              <div className="bg-coolblue-600/90 backdrop-blur-sm px-3 py-1 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <ThermometerSnowflake size={16} className={`text-white ${isRTL ? 'ml-1' : 'mr-1'}`} />
                  <span className="text-sm font-semibold text-white">Pro AC</span>
                </div>
              </div>
              <div className={`${isRTL ? 'text-left' : 'text-right'}`}>
                <span className="text-2xl font-bold text-white group-hover:text-coolblue-200 transition-colors">{price}</span>
                <span className="text-white text-sm mx-1">{isRTL ? 'החל מ-' : 'À partir de'}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Image with overlay pattern */}
        <div className="absolute inset-0 bg-coolblue-900/5 bg-opacity-10 z-0 
                      bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0.5px,_transparent_1px)] 
                      bg-[length:12px_12px]"></div>
        
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700"
        />
      </div>
      
      {/* Card content */}
      <CardHeader className="pb-2">
        <CardTitle className="text-coolblue-800 flex items-center">
          <span>{title}</span>
        </CardTitle>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow pt-0">
        <ul className={`space-y-2 ${isRTL ? 'rtl' : 'ltr'}`}>
          {features.map((feature, index) => (
            <li key={index} className={`flex items-center text-sm text-gray-700 group-hover:text-gray-900 transition-colors`}>
              <span className={`text-coolblue-600 ${isRTL ? 'ml-2' : 'mr-2'} flex-shrink-0`}>✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      {/* Card actions */}
      <CardFooter className="flex flex-col gap-2 bg-gradient-to-b from-coolblue-50 to-gray-50 p-4 border-t border-coolblue-100/50">
        <Button className="w-full bg-coolblue-600 hover:bg-coolblue-700 shadow-md hover:shadow-lg transition-all" onClick={openWhatsApp}>
          <MessageCircle className={isRTL ? "ml-2" : "mr-2"} size={16} />
          <span>{t('sendWhatsapp')}</span>
        </Button>
        
        <div className="flex gap-2 w-full">
          <Button variant="outline" 
            className="flex-1 border-coolblue-200 hover:border-coolblue-400 hover:bg-coolblue-50 transition-colors" 
            onClick={callPhone}>
            <Phone className={isRTL ? "ml-2" : "mr-2"} size={16} />
            <span>{t('phoneNumber')}</span>
          </Button>
          
          <Button variant="ghost" 
            className="flex-1 text-coolblue-700 hover:bg-coolblue-50 transition-colors" 
            onClick={sendEmail}>
            <Mail className={isRTL ? "ml-2" : "mr-2"} size={16} />
            <span>{t('email')}</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
