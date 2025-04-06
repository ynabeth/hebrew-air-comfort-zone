
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-coolblue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">אייר-קומפורט</h3>
            <p className="text-coolblue-100 mb-4">
              פתרונות מיזוג אוויר מתקדמים לבית ולעסק, עם דגש על איכות, יעילות אנרגטית ושירות מצוין.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">ניווט מהיר</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-coolblue-200 hover:text-white transition-colors">בית</a></li>
              <li><a href="#products" className="text-coolblue-200 hover:text-white transition-colors">מוצרים</a></li>
              <li><a href="#features" className="text-coolblue-200 hover:text-white transition-colors">יתרונות</a></li>
              <li><a href="#contact" className="text-coolblue-200 hover:text-white transition-colors">צור קשר</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">מוצרים</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-coolblue-200 hover:text-white transition-colors">מזגן עילי</a></li>
              <li><a href="#" className="text-coolblue-200 hover:text-white transition-colors">מיני מרכזי</a></li>
              <li><a href="#" className="text-coolblue-200 hover:text-white transition-colors">מולטי</a></li>
              <li><a href="#" className="text-coolblue-200 hover:text-white transition-colors">VRF</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">שעות פעילות</h3>
            <ul className="space-y-2 text-coolblue-100">
              <li>ימים א׳-ה׳: 9:00 - 19:00</li>
              <li>יום ו׳: 9:00 - 14:00</li>
              <li>שבת: סגור</li>
              <li className="pt-2 text-white font-medium">שירות חירום 24/7</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-coolblue-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-coolblue-200 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} אייר-קומפורט. כל הזכויות שמורות.
          </p>
          <div className="flex space-x-4 space-x-reverse">
            <a href="#" className="text-coolblue-200 hover:text-white transition-colors">תנאי שימוש</a>
            <a href="#" className="text-coolblue-200 hover:text-white transition-colors">מדיניות פרטיות</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
