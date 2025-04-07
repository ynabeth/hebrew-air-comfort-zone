
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'he' | 'fr';

type TranslationsType = {
  [key in Language]: {
    [key: string]: string;
  }
};

export const translations: TranslationsType = {
  he: {
    // Header
    home: "בית",
    services: "שירותים",
    advantages: "יתרונות",
    contact: "צור קשר",
    // Hero
    heroTitle: "שירותי מיזוג אוויר מקצועיים",
    heroSubtitle: "התקנה, תיקון וניקוי מזגנים באזור המרכז והצפון על ידי זכרי אלי ברדה",
    whatsapp: "WhatsApp",
    ourServices: "לשירותים שלנו",
    sendEmail: "שלח מייל",
    // Services section
    servicesTitle: "השירותים שלנו",
    servicesSubtitle: "השירותים המקצועיים שאנו מציעים",
    servicesDescription: "אנחנו מתמחים בהתקנה, תיקון וניקוי של כל סוגי המזגנים, עם דגש על שירות מקצועי, אמין ומהיר",
    // Service cards
    installation: "התקנת מזגן עילי",
    installationDesc: "התקנה מקצועית של מזגן עילי חדש כולל אחריות",
    repair: "תיקון מזגנים",
    repairDesc: "אבחון ותיקון כל סוגי המזגנים במהירות ובמקצועיות",
    cleaning: "ניקוי וחיטוי מזגנים",
    cleaningDesc: "ניקוי יסודי להארכת חיי המזגן ושיפור איכות האוויר",
    systems: "שירות למערכות מיזוג",
    systemsDesc: "טיפול במערכות מיזוג מרכזיות לבתים ועסקים",
    sendWhatsapp: "שלח הודעת WhatsApp",
    phoneNumber: "058-444-8769",
    email: "מייל",
    // Features
    whyChoose: "למה לבחור ב-ZakOr?",
    whyDesc: "אני, זכרי אלי ברדה, מתמחה בהתקנת מזגנים, תיקון ושטיפת מזגנים, עם דגש על שירות מקצועי ואמין",
    featureProInstall: "התקנת מזגנים מקצועית",
    featureProInstallDesc: "התקנה מקצועית לכל סוגי המזגנים, עם דגש על עבודה נקייה ומסודרת",
    featureRepair: "תיקון והחלפת חלקים",
    featureRepairDesc: "אבחון מדויק של תקלות ותיקון מהיר ומקצועי במקום",
    featureCleaning: "שטיפה וניקוי מזגנים",
    featureCleaningDesc: "ניקוי יסודי של המזגן לשיפור היעילות והארכת חיי המוצר",
    featureWarranty: "אחריות ושירות",
    featureWarrantyDesc: "אחריות על כל עבודה ושירות מהיר בכל אזור המרכז והצפון",
    needHelp: "צריכים עזרה עם המזגן שלכם?",
    hereToHelp: "אני כאן כדי לעזור בכל שירותי המיזוג שאתם צריכים",
    contactUs: "צרו קשר:",
    // Contact form
    firstName: "שם פרטי",
    lastName: "שם משפחה",
    emailField: "דוא״ל",
    phone: "טלפון",
    serviceType: "סוג שירות",
    message: "הודעה",
    send: "שליחה",
    sending: "שולח...",
    contactTitle: "צור קשר",
    contactDesc: "זקוקים להתקנה, תיקון או ניקוי מזגן? השאירו פרטים ואחזור אליכם בהקדם",
    formSuccess: "הטופס נשלח בהצלחה",
    formSuccessDesc: "אחזור אליך בהקדם האפשרי",
    formError: "שגיאה בשליחת הטופס",
    formErrorDesc: "אנא נסה שוב מאוחר יותר או צור קשר בטלפון",
    serviceOptions: {
      installation: "התקנת מזגן",
      repair: "תיקון מזגן",
      cleaning: "ניקוי וחיטוי מזגן",
      consulting: "ייעוץ",
      other: "אחר"
    },
    availability: "זמין בכל ימות השבוע",
    serviceArea: "שירות באזור המרכז והצפון",
    details: "פרטים נוספים על השירות המבוקש"
  },
  fr: {
    // Header
    home: "Accueil",
    services: "Services",
    advantages: "Avantages",
    contact: "Contact",
    // Hero
    heroTitle: "Services de Climatisation Professionnels",
    heroSubtitle: "Installation, réparation et nettoyage de climatiseurs dans les régions du centre et du nord par Zakri Eli Barda",
    whatsapp: "WhatsApp",
    ourServices: "Nos Services",
    sendEmail: "Envoyer un Email",
    // Services section
    servicesTitle: "Nos Services",
    servicesSubtitle: "Les Services Professionnels que Nous Proposons",
    servicesDescription: "Nous nous spécialisons dans l'installation, la réparation et le nettoyage de tous types de climatiseurs, avec un accent sur un service professionnel, fiable et rapide",
    // Service cards
    installation: "Installation de Climatiseur Mural",
    installationDesc: "Installation professionnelle de nouveaux climatiseurs muraux avec garantie",
    repair: "Réparation de Climatiseurs",
    repairDesc: "Diagnostic et réparation rapides et professionnels de tous types de climatiseurs",
    cleaning: "Nettoyage et Désinfection",
    cleaningDesc: "Nettoyage en profondeur pour prolonger la durée de vie du climatiseur et améliorer la qualité de l'air",
    systems: "Service pour Systèmes de Climatisation",
    systemsDesc: "Entretien des systèmes de climatisation centraux pour maisons et entreprises",
    sendWhatsapp: "Envoyer un Message WhatsApp",
    phoneNumber: "058-444-8769",
    email: "Email",
    // Features
    whyChoose: "Pourquoi Choisir ZakOr?",
    whyDesc: "Moi, Zakri Eli Barda, je me spécialise dans l'installation, la réparation et le nettoyage des climatiseurs, avec un accent sur un service professionnel et fiable",
    featureProInstall: "Installation Professionnelle",
    featureProInstallDesc: "Installation professionnelle pour tous types de climatiseurs, avec un accent sur un travail propre et ordonné",
    featureRepair: "Réparation et Remplacement",
    featureRepairDesc: "Diagnostic précis des problèmes et réparation rapide et professionnelle sur place",
    featureCleaning: "Nettoyage de Climatiseurs",
    featureCleaningDesc: "Nettoyage en profondeur du climatiseur pour améliorer l'efficacité et prolonger la durée de vie",
    featureWarranty: "Garantie et Service",
    featureWarrantyDesc: "Garantie sur tous les travaux et service rapide dans toute la région du centre et du nord",
    needHelp: "Besoin d'aide avec votre climatiseur?",
    hereToHelp: "Je suis là pour vous aider avec tous les services de climatisation dont vous avez besoin",
    contactUs: "Contactez-nous:",
    // Contact form
    firstName: "Prénom",
    lastName: "Nom",
    emailField: "Email",
    phone: "Téléphone",
    serviceType: "Type de service",
    message: "Message",
    send: "Envoyer",
    sending: "Envoi en cours...",
    contactTitle: "Contactez-nous",
    contactDesc: "Besoin d'installation, de réparation ou de nettoyage de climatiseur? Laissez vos coordonnées et je vous recontacterai rapidement",
    formSuccess: "Formulaire envoyé avec succès",
    formSuccessDesc: "Je vous recontacterai dès que possible",
    formError: "Erreur lors de l'envoi du formulaire",
    formErrorDesc: "Veuillez réessayer plus tard ou contactez-nous par téléphone",
    serviceOptions: {
      installation: "Installation de climatiseur",
      repair: "Réparation de climatiseur",
      cleaning: "Nettoyage et désinfection",
      consulting: "Consultation",
      other: "Autre"
    },
    availability: "Disponible tous les jours de la semaine",
    serviceArea: "Service dans les régions du centre et du nord",
    details: "Détails supplémentaires sur le service demandé"
  }
};

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('he');
  
  useEffect(() => {
    // Set the document direction based on language
    document.documentElement.dir = language === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
