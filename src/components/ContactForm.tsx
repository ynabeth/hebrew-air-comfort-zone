
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ContactForm = () => {
  const { language, t } = useLanguage();
  const isRTL = language === 'he';
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: 'installation',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // In a real implementation, you would use a backend service to send emails
      // For now, we'll simulate a successful email sending
      
      // Wait for 1 second to simulate server processing
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      toast.success(t('formSuccess'), {
        description: t('formSuccessDesc'),
      });
      
      // Clear form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: 'installation',
        message: ''
      });
      
      console.log("Email would be sent to: zakarie688@gmail.com");
      console.log("Form data:", formData);
      
    } catch (error) {
      toast.error(t('formError'), {
        description: t('formErrorDesc'),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/972584448769', '_blank');
  };

  // Helper function to get nested translations
  const getServiceOption = (option: string): string => {
    const serviceOptions = translations[language].serviceOptions;
    if (typeof serviceOptions === 'object' && serviceOptions !== null) {
      return (serviceOptions as Record<string, string>)[option] || option;
    }
    return option;
  };

  // Import translations directly to access nested objects
  const { translations } = useLanguage();

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-white to-coolblue-50">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-10 ${isRTL ? 'rtl' : 'ltr'}`}>
          <div className="inline-block bg-coolblue-600/10 px-4 py-1 rounded-full mb-4">
            <h2 className="text-coolblue-800 font-medium">{t('contact')}</h2>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-coolblue-900">{t('contactTitle')}</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t('contactDesc')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={`${isRTL ? 'rtl' : 'ltr'}`}>
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-20 h-20 text-coolblue-200 -z-10">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 5V2M15 5V8M15 5H10.5M3 8V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V8M3 8H21M9 3H19C20.1046 3 21 3.89543 21 5V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M9 13H7M17 13H11M9 17H7M17 17H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="bg-white rounded-lg shadow-xl p-8 border border-coolblue-100">
                <h3 className="text-xl font-semibold text-coolblue-800 mb-6">{t('contactUs')}</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-center cursor-pointer hover:text-coolblue-600 group" onClick={() => { window.location.href = 'tel:+972584448769'; }}>
                    <div className="bg-coolblue-100 rounded-full p-3 mr-4 group-hover:bg-coolblue-200 transition-colors">
                      <Phone className="h-5 w-5 text-coolblue-600" />
                    </div>
                    <span>058-444-8769</span>
                  </div>
                  <div className="flex items-center cursor-pointer hover:text-coolblue-600 group" onClick={openWhatsApp}>
                    <div className="bg-coolblue-100 rounded-full p-3 mr-4 group-hover:bg-coolblue-200 transition-colors">
                      <MessageCircle className="h-5 w-5 text-coolblue-600" />
                    </div>
                    <span>WhatsApp</span>
                  </div>
                  <div className="flex items-center cursor-pointer hover:text-coolblue-600 group" onClick={() => { window.location.href = 'mailto:zakarie688@gmail.com'; }}>
                    <div className="bg-coolblue-100 rounded-full p-3 mr-4 group-hover:bg-coolblue-200 transition-colors">
                      <Mail className="h-5 w-5 text-coolblue-600" />
                    </div>
                    <span>zakarie688@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-coolblue-100 rounded-full p-3 mr-4">
                      <MapPin className="h-5 w-5 text-coolblue-600" />
                    </div>
                    <span>{t('serviceArea')}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-coolblue-100 rounded-full p-3 mr-4">
                      <Clock className="h-5 w-5 text-coolblue-600" />
                    </div>
                    <span>{t('availability')}</span>
                  </div>
                </div>
                
                <div className="relative mt-10 pt-10">
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-coolblue-200 to-transparent"></div>
                  <div className="flex items-center justify-center animate-pulse-slow">
                    <div className="h-16 w-16 rounded-full bg-coolblue-500/10 flex items-center justify-center">
                      <div className="h-12 w-12 rounded-full bg-coolblue-500/20 flex items-center justify-center">
                        <div className="h-8 w-8 rounded-full bg-coolblue-500/30 flex items-center justify-center">
                          <div className="text-coolblue-600">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 16V8M12 20H18.4C19.8359 20 20.5544 20 21.0777 19.7094C21.5387 19.4559 21.9074 19.0552 22.1158 18.5654C22.35 18.0064 22.2677 17.2799 22.103 15.8269L21.3868 9.71511C21.2659 8.73341 21.2054 8.24255 21.0633 7.84906C20.6289 6.56818 19.5302 5.60777 18.1928 5.35892C17.7797 5.28554 17.2871 5.31031 16.302 5.35985L7.69961 5.5C6.71436 5.54953 6.22173 5.5743 5.80853 5.53847C4.47023 5.37949 3.36845 4.41908 2.93259 3.13615C2.78963 2.74201 2.7292 2.25115 2.60835 1.26944" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                              <path d="M15 20V19C15 17.5858 15 16.8787 14.5607 16.4393C14.1213 16 13.4142 16 12 16C10.5858 16 9.87868 16 9.43934 16.4393C9 16.8787 9 17.5858 9 19V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 border border-coolblue-100">
            <form onSubmit={handleSubmit} className={`${isRTL ? 'rtl' : 'ltr'}`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="firstName">
                    {t('firstName')}
                  </label>
                  <Input 
                    id="firstName" 
                    placeholder={t('firstName')} 
                    value={formData.firstName} 
                    onChange={handleChange} 
                    required 
                    className="border-coolblue-200 focus:border-coolblue-500 focus:ring-coolblue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="lastName">
                    {t('lastName')}
                  </label>
                  <Input 
                    id="lastName" 
                    placeholder={t('lastName')} 
                    value={formData.lastName} 
                    onChange={handleChange} 
                    required
                    className="border-coolblue-200 focus:border-coolblue-500 focus:ring-coolblue-500"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="email">
                  {t('emailField')}
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your@email.com" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  className="border-coolblue-200 focus:border-coolblue-500 focus:ring-coolblue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="phone">
                  {t('phone')}
                </label>
                <Input 
                  id="phone" 
                  placeholder="050-1234567" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  required 
                  className="border-coolblue-200 focus:border-coolblue-500 focus:ring-coolblue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="service">
                  {t('serviceType')}
                </label>
                <select 
                  id="service" 
                  className="w-full rounded-md border border-coolblue-200 bg-background px-3 py-2 focus:border-coolblue-500 focus:ring-coolblue-500"
                  value={formData.service}
                  onChange={handleChange}
                >
                  {/* Get translated options from the nested translations */}
                  <option value="installation">{getServiceOption('installation')}</option>
                  <option value="repair">{getServiceOption('repair')}</option>
                  <option value="cleaning">{getServiceOption('cleaning')}</option>
                  <option value="consulting">{getServiceOption('consulting')}</option>
                  <option value="other">{getServiceOption('other')}</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="message">
                  {t('message')}
                </label>
                <Textarea 
                  id="message" 
                  placeholder={t('details')} 
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="border-coolblue-200 focus:border-coolblue-500 focus:ring-coolblue-500"
                />
              </div>
              <div className="flex gap-4">
                <Button 
                  type="submit" 
                  className="flex-1 bg-coolblue-600 hover:bg-coolblue-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t('sending') : t('send')}
                </Button>
                <Button 
                  type="button" 
                  className="flex-1 bg-green-600 hover:bg-green-700"
                  onClick={openWhatsApp}>
                  <MessageCircle className={isRTL ? "ml-2" : "mr-2"} size={16} />
                  WhatsApp
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
