
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import Features from '../components/Features';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Index = () => {
  const products = [
    {
      title: "אלקטרה קלאסיק 12",
      description: "מזגן עילי חסכוני לחדר שינה או סלון קטן",
      price: "₪2,990",
      imageUrl: "https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      features: [
        "BTU 12,000",
        "דירוג אנרגטי A",
        "פעולה שקטה במיוחד",
        "כולל התקנה סטנדרטית"
      ]
    },
    {
      title: "תדיראן אלפא פלוס",
      description: "מזגן פרימיום לחללים בינוניים עד גדולים",
      price: "₪3,890",
      imageUrl: "https://images.unsplash.com/photo-1628519592419-bf228f58ae77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      features: [
        "BTU 18,000",
        "דירוג אנרגטי A++",
        "סינון אוויר מתקדם",
        "שליטה מהנייד"
      ]
    },
    {
      title: "טורנדו מיני מרכזי",
      description: "מיזוג מרכזי לדירה או משרד",
      price: "₪9,990",
      imageUrl: "https://images.unsplash.com/photo-1643818657367-491080baeece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      features: [
        "BTU 36,000",
        "מערכת מיזוג מושלמת",
        "חסכוני בחשמל",
        "התקנה מקצועית"
      ]
    },
    {
      title: "מיצובישי וי-אר-אף",
      description: "פתרון מיזוג מתקדם לבנייני מגורים ומשרדים",
      price: "₪18,990",
      imageUrl: "https://images.unsplash.com/photo-1611022062486-a3a5be5eae30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      features: [
        "מערכת VRF מתקדמת",
        "שליטה על מספר אזורים",
        "חיסכון מקסימלי באנרגיה",
        "מתאים למבנים גדולים"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-coolblue-50 text-gray-900">
      <Header />
      <Hero />
      
      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-coolblue-900">המוצרים המובילים שלנו</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              אנו מציעים מגוון רחב של פתרונות מיזוג אוויר איכותיים מהמותגים המובילים בשוק
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <button className="inline-flex items-center text-coolblue-600 font-bold hover:text-coolblue-700">
              לכל המוצרים
              <svg className="w-5 h-5 mr-2 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
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
