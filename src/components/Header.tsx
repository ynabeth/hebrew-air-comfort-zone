
import React, { useState } from 'react';
import { Menu, X, Phone, MessageCircle, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const openWhatsApp = () => {
    window.open('https://wa.me/972584448769', '_blank');
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-coolblue-700 flex items-center">
          <span className="mr-2">ZakOr</span>
          <AirConditionerIcon />
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6 space-x-reverse">
          <a href="#" className="text-foreground hover:text-coolblue-600 font-medium">{t('home')}</a>
          <a href="#services" className="text-foreground hover:text-coolblue-600 font-medium">{t('services')}</a>
          <a href="#features" className="text-foreground hover:text-coolblue-600 font-medium">{t('advantages')}</a>
          <a href="#contact" className="text-foreground hover:text-coolblue-600 font-medium">{t('contact')}</a>
          <LanguageToggle />
          <Button className="bg-coolblue-600 hover:bg-coolblue-700" onClick={openWhatsApp}>
            <MessageCircle className={language === 'he' ? "ml-2" : "mr-2"} size={16} />
            WhatsApp
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <LanguageToggle />
          <button 
            className="text-foreground ml-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
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
              {t('home')}
            </a>
            <a 
              href="#services" 
              className="text-foreground hover:text-coolblue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('services')}
            </a>
            <a 
              href="#features" 
              className="text-foreground hover:text-coolblue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('advantages')}
            </a>
            <a 
              href="#contact" 
              className="text-foreground hover:text-coolblue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('contact')}
            </a>
            <Button className="bg-coolblue-600 hover:bg-coolblue-700 w-full" onClick={openWhatsApp}>
              <MessageCircle className={language === 'he' ? "ml-2" : "mr-2"} size={16} />
              WhatsApp
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Languages size={20} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={language === 'he' ? 'end' : 'start'}>
        <DropdownMenuItem onClick={() => setLanguage('he')}>
          <span className={language === 'he' ? 'font-bold' : ''}>עברית</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage('fr')}>
          <span className={language === 'fr' ? 'font-bold' : ''}>Français</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const AirConditionerIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="4" width="20" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M6 8h12M6 12v5m4-5v3m4-3v5m4-5v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 19a2 2 0 104 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
};

export default Header;
