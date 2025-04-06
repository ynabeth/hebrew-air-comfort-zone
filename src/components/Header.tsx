
import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-coolblue-700">ZakOr</div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6 space-x-reverse">
          <a href="#" className="text-foreground hover:text-coolblue-600 font-medium">בית</a>
          <a href="#services" className="text-foreground hover:text-coolblue-600 font-medium">שירותים</a>
          <a href="#features" className="text-foreground hover:text-coolblue-600 font-medium">יתרונות</a>
          <a href="#contact" className="text-foreground hover:text-coolblue-600 font-medium">צור קשר</a>
          <Button className="bg-coolblue-600 hover:bg-coolblue-700">
            <Phone className="ml-2" size={16} />
            058-444-8769
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#" 
              className="text-foreground hover:text-coolblue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              בית
            </a>
            <a 
              href="#services" 
              className="text-foreground hover:text-coolblue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              שירותים
            </a>
            <a 
              href="#features" 
              className="text-foreground hover:text-coolblue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              יתרונות
            </a>
            <a 
              href="#contact" 
              className="text-foreground hover:text-coolblue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              צור קשר
            </a>
            <Button className="bg-coolblue-600 hover:bg-coolblue-700 w-full">
              <Phone className="ml-2" size={16} />
              058-444-8769
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
