
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import Features from '../components/Features';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Index = () => {
  const services = [
    {
      title: "התקנת מזגן עילי",
      description: "התקנה מקצועית של מזגן עילי חדש",
      price: "₪800",
      imageUrl: "/lovable-uploads/38af17fd-4bb4-416b-aed4-52ed56f79977.png", // Using your uploaded image
      features: [
        "כולל כל החומרים הנדרשים",
        "עבודה נקייה ומסודרת",
        "אחריות על ההתקנה",
        "זמין באזור המרכז והצפון"
      ]
    },
    {
      title: "תיקון מזגנים",
      description: "אבחון ותיקון כל סוגי המזגנים",
      price: "₪350",
      imageUrl: "https://images.unsplash.com/photo-1581275169331-c0b5ce5df8e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", // Better AC repair image
      features: [
        "אבחון מדויק של התקלה",
        "תיקון מהיר במקום",
        "החלפת חלקי חילוף מקוריים",
        "אחריות על התיקון"
      ]
    },
    {
      title: "ניקוי וחיטוי מזגנים",
      description: "ניקוי יסודי להארכת חיי המזגן",
      price: "₪300",
      imageUrl: "https://images.unsplash.com/photo-1615766553246-9147c9e9d6cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", // Better AC cleaning image
      features: [
        "ניקוי יסודי של כל חלקי המזגן",
        "שימוש בחומרי ניקוי מקצועיים",
        "סילוק עובש וחיידקים",
        "שיפור זרימת האוויר ויעילות המזגן"
      ]
    },
    {
      title: "שירות למערכות מיזוג",
      description: "טיפול במערכות מיזוג מרכזיות",
      price: "₪1,200",
      imageUrl: "https://images.unsplash.com/photo-1621395031646-8df952efb2c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", // Better HVAC system image
      features: [
        "טיפול במערכות מורכבות",
        "שירות לבתים ועסקים",
        "יועץ מקצועי",
        "שירות באזור המרכז והצפון"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-coolblue-50 text-gray-900">
      <Header />
      <Hero />
      
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-coolblue-900">השירותים שלי</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              אני מתמחה בהתקנה, תיקון וניקוי של כל סוגי המזגנים, עם דגש על שירות מקצועי ואמין
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
