
import React from 'react';
import { ThermometerSnowflake, ThermometerSun, AirVent, Shield } from 'lucide-react';

const Features = () => {
  const featuresList = [
    {
      icon: <ThermometerSnowflake className="h-10 w-10 text-coolblue-600" />,
      title: 'קירור מהיר ויעיל',
      description: 'טכנולוגיה מתקדמת לקירור מהיר של החלל בזמן קצר וחיסכון באנרגיה'
    },
    {
      icon: <ThermometerSun className="h-10 w-10 text-coolblue-600" />,
      title: 'חימום אפקטיבי',
      description: 'פיזור חום אחיד בכל החדר לתחושת נוחות מקסימלית בימי החורף'
    },
    {
      icon: <AirVent className="h-10 w-10 text-coolblue-600" />,
      title: 'סינון אוויר מתקדם',
      description: 'מסנני אוויר איכותיים ללכידת אבק, אלרגנים וחיידקים לאוויר נקי ובריא'
    },
    {
      icon: <Shield className="h-10 w-10 text-coolblue-600" />,
      title: 'אחריות ושירות',
      description: '5 שנות אחריות ושירות תיקונים מהיר עם טכנאים מוסמכים'
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-coolblue-900">למה לבחור במזגני אייר-קומפורט?</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            אנחנו מציעים את הטכנולוגיה המתקדמת ביותר בתחום מיזוג האוויר, עם דגש על איכות, חיסכון באנרגיה ושירות מצוין
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
          <h3 className="text-2xl font-bold mb-4">צריכים עזרה בבחירת המזגן המתאים?</h3>
          <p className="text-lg mb-6">הצוות המקצועי שלנו ישמח להמליץ על המזגן המתאים לחלל שלכם</p>
          <button className="bg-white text-coolblue-600 hover:bg-gray-100 font-medium py-2 px-6 rounded-full">
            לתיאום פגישת ייעוץ
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
