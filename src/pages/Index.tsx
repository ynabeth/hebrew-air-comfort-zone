
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import Features from '../components/Features';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import { Toaster } from '@/components/ui/sonner';

const Index = () => {
  const services = [
    {
      title: "התקנת מזגן עילי",
      description: "התקנה מקצועית של מזגן עילי חדש כולל אחריות",
      price: "₪800",
      imageUrl: "https://images.unsplash.com/photo-1621395031646-8df952efb2c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      features: [
        "כולל כל החומרים הנדרשים",
        "עבודה נקייה ומסודרת",
        "אחריות על ההתקנה",
        "זמין באזור המרכז והצפון"
      ]
    },
    {
      title: "תיקון מזגנים",
      description: "אבחון ותיקון כל סוגי המזגנים במהירות ובמקצועיות",
      price: "₪350",
      imageUrl: "https://images.unsplash.com/photo-1581275170331-c0b5ce5df8e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      features: [
        "אבחון מדויק של התקלה",
        "תיקון מהיר במקום",
        "החלפת חלקי חילוף מקוריים",
        "אחריות על התיקון"
      ]
    },
    {
      title: "ניקוי וחיטוי מזגנים",
      description: "ניקוי יסודי להארכת חיי המזגן ושיפור איכות האוויר",
      price: "₪300",
      imageUrl: "https://images.unsplash.com/photo-1615766553246-9147c9e9d6cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      features: [
        "ניקוי יסודי של כל חלקי המזגן",
        "שימוש בחומרי ניקוי מקצועיים",
        "סילוק עובש וחיידקים",
        "שיפור זרימת האוויר ויעילות המזגן"
      ]
    },
    {
      title: "שירות למערכות מיזוג",
      description: "טיפול במערכות מיזוג מרכזיות לבתים ועסקים",
      price: "₪1,200",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      features: [
        "טיפול במערכות מורכבות",
        "שירות לבתים ועסקים",
        "יועץ מקצועי",
        "שירות באזור המרכז והצפון"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-coolblue-50 text-gray-900">
      <Toaster position="top-center" />
      <Header />
      <Hero />
      
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-coolblue-600/10 px-4 py-1 rounded-full mb-4">
              <h2 className="text-coolblue-800 font-medium">השירותים שלנו</h2>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-coolblue-900">השירותים המקצועיים שאנו מציעים</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              אנחנו מתמחים בהתקנה, תיקון וניקוי של כל סוגי המזגנים, עם דגש על שירות מקצועי, אמין ומהיר
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
      
      <Features />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
