
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const ContactForm = () => {
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
      // Create email content
      const subject = `פנייה חדשה: ${formData.service} - מ${formData.firstName} ${formData.lastName}`;
      const body = `
שם: ${formData.firstName} ${formData.lastName}
טלפון: ${formData.phone}
אימייל: ${formData.email}
סוג שירות: ${formData.service}
הודעה: ${formData.message}
      `;
      
      // Open default mail client with pre-filled information
      window.open(`mailto:zakarie688@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
      
      // Show success message
      toast.success("הטופס נשלח בהצלחה", {
        description: "אחזור אליך בהקדם האפשרי",
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
    } catch (error) {
      toast.error("שגיאה בשליחת הטופס", {
        description: "אנא נסה שוב מאוחר יותר או צור קשר בטלפון",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/972584448769', '_blank');
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-coolblue-900">צור קשר</h2>
            <p className="text-lg text-gray-700 mb-6">
              זקוקים להתקנה, תיקון או ניקוי מזגן? השאירו פרטים ואחזור אליכם בהקדם
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center cursor-pointer hover:text-coolblue-600" onClick={() => { window.location.href = 'tel:+972584448769'; }}>
                <div className="bg-coolblue-100 rounded-full p-2 ml-3">
                  <Phone className="h-5 w-5 text-coolblue-600" />
                </div>
                <span>058-444-8769</span>
              </div>
              <div className="flex items-center cursor-pointer hover:text-coolblue-600" onClick={openWhatsApp}>
                <div className="bg-coolblue-100 rounded-full p-2 ml-3">
                  <MessageCircle className="h-5 w-5 text-coolblue-600" />
                </div>
                <span>WhatsApp</span>
              </div>
              <div className="flex items-center cursor-pointer hover:text-coolblue-600" onClick={() => { window.location.href = 'mailto:zakarie688@gmail.com'; }}>
                <div className="bg-coolblue-100 rounded-full p-2 ml-3">
                  <Mail className="h-5 w-5 text-coolblue-600" />
                </div>
                <span>zakarie688@gmail.com</span>
              </div>
              <div className="flex items-center">
                <div className="bg-coolblue-100 rounded-full p-2 ml-3">
                  <MapPin className="h-5 w-5 text-coolblue-600" />
                </div>
                <span>שירות באזור המרכז והצפון</span>
              </div>
              <div className="flex items-center">
                <div className="bg-coolblue-100 rounded-full p-2 ml-3">
                  <Clock className="h-5 w-5 text-coolblue-600" />
                </div>
                <span>זמין בכל ימות השבוע</span>
              </div>
            </div>

          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="firstName">
                    שם פרטי
                  </label>
                  <Input 
                    id="firstName" 
                    placeholder="הכנס שם פרטי" 
                    value={formData.firstName} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="lastName">
                    שם משפחה
                  </label>
                  <Input 
                    id="lastName" 
                    placeholder="הכנס שם משפחה" 
                    value={formData.lastName} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="email">
                  דוא״ל
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your@email.com" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="phone">
                  טלפון
                </label>
                <Input 
                  id="phone" 
                  placeholder="050-1234567" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="service">
                  סוג שירות
                </label>
                <select 
                  id="service" 
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="installation">התקנת מזגן</option>
                  <option value="repair">תיקון מזגן</option>
                  <option value="cleaning">ניקוי וחיטוי מזגן</option>
                  <option value="consulting">ייעוץ</option>
                  <option value="other">אחר</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="message">
                  הודעה
                </label>
                <Textarea 
                  id="message" 
                  placeholder="פרטים נוספים על השירות המבוקש" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex gap-4">
                <Button 
                  type="submit" 
                  className="flex-1 bg-coolblue-600 hover:bg-coolblue-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'שולח...' : 'שליחה'}
                </Button>
                <Button 
                  type="button" 
                  className="flex-1 bg-green-600 hover:bg-green-700"
                  onClick={openWhatsApp}>
                  <MessageCircle className="ml-2" size={16} />
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
