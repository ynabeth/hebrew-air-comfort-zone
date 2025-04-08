
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MessageCircle, Mail, Snowflake } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  features: string[];
}

const ProductCard = ({ title, description, price, imageUrl, features }: ProductCardProps) => {
  const { language } = useLanguage();
  const isRTL = language === 'he';
  
  const openWhatsApp = () => {
    const messageText = language === 'he' 
      ? `אני מעוניין במוצר ${title}`
      : `Je suis intéressé par le produit ${title}`;
    
    window.open(`https://wa.me/972584448769?text=${encodeURIComponent(messageText)}`, '_blank');
  };
  
  return (
    <Card className="overflow-hidden transition-all hover:shadow-xl border-coolblue-100">
      <div className="aspect-video overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 flex items-end">
          <div className="p-4 w-full">
            <div className="flex items-center justify-between">
              <div className="bg-coolblue-600/90 backdrop-blur-sm px-3 py-1 rounded-lg shadow-lg">
                <span className="text-sm font-semibold text-white">Premium</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-white">{price}</span>
              </div>
            </div>
          </div>
        </div>
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null; 
            target.src = 'https://images.unsplash.com/photo-1635048666670-4ce5151a5d3c?q=80&w=2070&auto=format&fit=crop';
          }}
        />
      </div>
      
      <CardHeader>
        <CardTitle className="flex items-center">
          <Snowflake className={`text-coolblue-500 ${isRTL ? 'ml-2' : 'mr-2'}`} size={18} />
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <ul className={`space-y-2 ${isRTL ? 'rtl' : 'ltr'}`}>
          {features.map((feature, index) => (
            <li key={index} className={`flex items-center text-sm text-gray-700`}>
              <span className={`text-coolblue-600 ${isRTL ? 'ml-2' : 'mr-2'}`}>✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter className="flex flex-col gap-2">
        <Button className="w-full bg-coolblue-600 hover:bg-coolblue-700" onClick={openWhatsApp}>
          <MessageCircle className={isRTL ? "ml-2" : "mr-2"} size={16} />
          <span>{isRTL ? 'פרטים נוספים' : 'Plus de détails'}</span>
        </Button>
        
        <div className="flex gap-2 w-full">
          <Button variant="outline" className="flex-1">
            <Phone className={isRTL ? "ml-2" : "mr-2"} size={16} />
            <span>{isRTL ? 'התקשר' : 'Appeler'}</span>
          </Button>
          
          <Button variant="ghost" className="flex-1">
            <Mail className={isRTL ? "ml-2" : "mr-2"} size={16} />
            <span>{isRTL ? 'שלח מייל' : 'Envoyer un email'}</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
