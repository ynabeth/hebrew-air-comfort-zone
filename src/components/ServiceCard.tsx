
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MessageCircle, Mail } from 'lucide-react';
import { toast } from 'sonner';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  features: string[];
}

const ServiceCard = ({ title, description, price, imageUrl, features }: ServiceCardProps) => {
  const openWhatsApp = () => {
    window.open('https://wa.me/972584448769?text=אני מעוניין בשירות ' + title, '_blank');
    toast.success('פותח WhatsApp');
  };
  
  const callPhone = () => {
    window.open('tel:0584448769', '_blank');
    toast.success('מחייג עכשיו');
  };

  const sendEmail = () => {
    window.open('mailto:zakarie688@gmail.com?subject=פנייה בנושא ' + title, '_blank');
    toast.success('פותח את תוכנת המייל');
  };
  
  return (
    <Card className="overflow-hidden transition-all hover:shadow-xl border-coolblue-100 h-full flex flex-col">
      <div className="aspect-video overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
        <div className="absolute bottom-0 right-0 p-4 z-20">
          <span className="text-3xl font-bold text-white">{price}</span>
          <span className="text-white text-sm mr-1">החל מ-</span>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-coolblue-800">{title}</CardTitle>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-700">
              <span className="text-coolblue-600 ml-2 flex-shrink-0">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 bg-gray-50 p-4">
        <Button className="w-full bg-coolblue-600 hover:bg-coolblue-700" onClick={openWhatsApp}>
          <MessageCircle className="ml-2" size={16} />
          <span>שלח הודעת WhatsApp</span>
        </Button>
        <div className="flex gap-2 w-full">
          <Button variant="outline" className="flex-1" onClick={callPhone}>
            <Phone className="ml-2" size={16} />
            <span>058-444-8769</span>
          </Button>
          <Button variant="ghost" className="flex-1 text-coolblue-700" onClick={sendEmail}>
            <Mail className="ml-2" size={16} />
            <span>מייל</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
