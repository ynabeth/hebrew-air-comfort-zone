
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MessageCircle } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  features: string[];
}

const ServiceCard = ({ title, description, price, imageUrl, features }: ServiceCardProps) => {
  const openWhatsApp = () => {
    window.open('https://wa.me/972584448769', '_blank');
  };
  
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-video overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <span className="text-2xl font-bold text-coolblue-700">{price}</span>
          <span className="text-gray-500 text-sm mr-1">החל מ-</span>
        </div>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-700">
              <span className="text-coolblue-600 ml-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button className="flex-1 bg-coolblue-600 hover:bg-coolblue-700" onClick={openWhatsApp}>
          <MessageCircle className="ml-2" size={16} />
          <span>WhatsApp</span>
        </Button>
        <Button className="flex-1" variant="outline">
          <Phone className="ml-2" size={16} />
          <span>058-444-8769</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
