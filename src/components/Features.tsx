
import React from 'react';
import { ThermometerSnowflake, ThermometerSun, AirVent, Shield, Droplets } from 'lucide-react';

const Features = () => {
  const featuresList = [
    {
      icon: <ThermometerSnowflake className="h-10 w-10 text-coolblue-600" />,
      title: 'התקנת מזגנים מקצועית',
      description: 'התקנה מקצועית לכל סוגי המזגנים, עם דגש על עבודה נקייה ומסודרת'
    },
    {
      icon: <ThermometerSun className="h-10 w-10 text-coolblue-600" />,
      title: 'תיקון והחלפת חלקים',
      description: 'אבחון מדויק של תקלות ותיקון מהיר ומקצועי במקום'
    },
    {
      icon: <Droplets className="h-10 w-10 text-coolblue-600" />,
      title: 'שטיפה וניקוי מזגנים',
      description: 'ניקוי יסודי של המזגן לשיפור היעילות והארכת חיי המוצר'
    },
    {
      icon: <Shield className="h-10 w-10 text-coolblue-600" />,
      title: 'אחריות ושירות',
      description: 'אחריות על כל עבודה ושירות מהיר בכל אזור המרכז והצפון'
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-coolblue-900">למה לבחור ב-ZakOr?</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            אני, זכרי אלי ברדה, מתמחה בהתקנת מזגנים, תיקון ושטיפת מזגנים, עם דגש על שירות מקצועי ואמין
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresList.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-coolblue-600 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">צריכים עזרה עם המזגן שלכם?</h3>
          <p className="text-lg mb-6">אני כאן כדי לעזור בכל שירותי המיזוג שאתם צריכים</p>
          <button className="bg-white text-coolblue-600 hover:bg-gray-100 font-medium py-2 px-6 rounded-full">
            צרו קשר: 058-444-8769
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
