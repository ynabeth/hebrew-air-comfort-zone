
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MessageCircle, Mail, Snowflake, CalendarCheck, Clock, BadgeCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { toast } from 'sonner';

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  features: string[];
  isSubscription?: boolean;
}

const ProductCard = ({ title, description, price, imageUrl, features, isSubscription = false }: ProductCardProps) => {
  const { language } = useLanguage();
  const isRTL = language === 'he';
  
  const openWhatsApp = () => {
    const messageText = language === 'he' 
      ? `אני מעוניין במוצר ${title}`
      : `Je suis intéressé par le produit ${title}`;
    
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
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-coolblue-400 via-coolblue-600 to-coolblue-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      
      {/* Subscription badge */}
      {isSubscription && (
        <div className="absolute top-4 right-4 z-20">
          <div className="bg-amber-500/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
            <div className="flex items-center">
              <CalendarCheck size={16} className={`text-white ${isRTL ? 'ml-1' : 'mr-1'}`} />
              <span className="text-sm font-semibold text-white">{language === 'he' ? 'מנוי שנתי' : 'Abonnement Annuel'}</span>
            </div>
          </div>
        </div>
      )}
      
      {/* Decorative cooling icon with glowing effect */}
      <div className="absolute top-4 left-4 z-10">
        <div className="bg-white/80 backdrop-blur-sm p-1.5 rounded-full shadow-lg group-hover:shadow-coolblue-300/50">
          <Snowflake size={20} className="text-coolblue-600 group-hover:text-coolblue-500 transition-colors" />
        </div>
      </div>
      
      {/* Image section with enhanced overlay */}
      <div className="aspect-video overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10 flex items-end">
          <div className={`p-4 w-full ${isRTL ? 'text-right' : 'text-left'}`}>
            <div className="flex items-center justify-between">
              <div className={`${isSubscription ? 'bg-amber-600/90' : 'bg-coolblue-600/90'} backdrop-blur-sm px-3 py-1 rounded-lg shadow-lg group-hover:${isSubscription ? 'bg-amber-500/90' : 'bg-coolblue-500/90'} transition-colors`}>
                <div className="flex items-center">
                  {isSubscription ? (
                    <Clock size={16} className={`text-white ${isRTL ? 'ml-1' : 'mr-1'}`} />
                  ) : (
                    <BadgeCheck size={16} className={`text-white ${isRTL ? 'ml-1' : 'mr-1'}`} />
                  )}
                  <span className="text-sm font-semibold text-white">{isSubscription ? (language === 'he' ? 'תחזוקה שנתית' : 'Entretien annuel') : 'Premium'}</span>
                </div>
              </div>
              <div className={`${isRTL ? 'text-left' : 'text-right'}`}>
                <span className="text-2xl font-bold text-white group-hover:text-coolblue-200 transition-colors">{price}</span>
                {isSubscription && (
                  <span className="text-white text-sm mx-1">{isRTL ? 'לשנה' : 'par an'}</span>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Improved overlay pattern */}
        <div className="absolute inset-0 bg-coolblue-900/5 bg-opacity-10 z-0 
                      bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0.5px,_transparent_1px)] 
                      bg-[length:12px_12px] group-hover:bg-[length:14px_14px] transition-all duration-500"></div>
        
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null; 
            target.src = 'https://images.unsplash.com/photo-1635048666670-4ce5151a5d3c?q=80&w=2070&auto=format&fit=crop';
          }}
        />
      </div>
      
      {/* Card content with improved styling */}
      <CardHeader className="pb-2">
        <CardTitle className="text-coolblue-800 flex items-center">
          <span className="relative group-hover:text-coolblue-600 transition-colors">
            {title}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coolblue-500 group-hover:w-full transition-all duration-300"></span>
          </span>
        </CardTitle>
        <CardDescription className="text-gray-600 group-hover:text-gray-800 transition-colors">{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow pt-0">
        <ul className={`space-y-2 ${isRTL ? 'rtl' : 'ltr'}`}>
          {features.map((feature, index) => (
            <li key={index} className={`flex items-center text-sm text-gray-700 group-hover:text-gray-900 transition-colors`}>
              <span className={`${isSubscription ? 'text-amber-500' : 'text-coolblue-600'} group-hover:${isSubscription ? 'text-amber-400' : 'text-coolblue-500'} transition-colors ${isRTL ? 'ml-2' : 'mr-2'} flex-shrink-0`}>✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      {/* Card actions with improved visual effects */}
      <CardFooter className="flex flex-col gap-2 bg-gradient-to-b from-coolblue-50/50 to-white p-4 border-t border-coolblue-100/30">
        <Button 
          className={`w-full ${isSubscription ? 'bg-amber-500 hover:bg-amber-400' : 'bg-coolblue-600 hover:bg-coolblue-500'} shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2`}
          onClick={openWhatsApp}
        >
          <MessageCircle className={isRTL ? "ml-1 animate-pulse" : "mr-1 animate-pulse"} size={16} />
          <span>{language === 'he' ? 'שלח הודעת WhatsApp' : 'Envoyer un Message WhatsApp'}</span>
        </Button>
        
        <div className="flex gap-2 w-full">
          <Button variant="outline" 
            className={`flex-1 border-coolblue-200 hover:border-coolblue-400 hover:bg-coolblue-50 transition-colors flex items-center justify-center gap-1`}
            onClick={callPhone}>
            <Phone className={isRTL ? "ml-1" : "mr-1"} size={16} />
            <span>{language === 'he' ? '058-444-8769' : '058-444-8769'}</span>
          </Button>
          
          <Button variant="ghost" 
            className="flex-1 text-coolblue-700 hover:bg-coolblue-50 transition-colors flex items-center justify-center gap-1" 
            onClick={sendEmail}>
            <Mail className={isRTL ? "ml-1" : "mr-1"} size={16} />
            <span>{language === 'he' ? 'מייל' : 'Email'}</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
