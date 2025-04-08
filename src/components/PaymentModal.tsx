
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLanguage } from '../contexts/LanguageContext';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, CreditCard, Paypal } from 'lucide-react';
import { toast } from 'sonner';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  price: string;
  onPaymentSuccess: () => void;
}

const PaymentModal = ({ isOpen, onClose, title, price, onPaymentSuccess }: PaymentModalProps) => {
  const { t, language } = useLanguage();
  const isRTL = language === 'he';
  const [paymentMethod, setPaymentMethod] = useState<'credit' | 'paypal' | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const isFormValid = () => {
    return formData.name && formData.email && formData.phone && paymentMethod;
  };

  const handlePaymentMethodSelect = (method: 'credit' | 'paypal') => {
    setPaymentMethod(method);
  };

  const processPayment = async () => {
    if (!isFormValid()) {
      toast.error(language === 'he' ? 'נא למלא את כל השדות' : 'Veuillez remplir tous les champs');
      return;
    }

    setIsProcessing(true);

    try {
      // Here we would normally integrate with a payment processor like Stripe
      // For now, we'll simulate a successful payment after a delay
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate sending emails
      console.log('Sending receipt to customer:', formData.email);
      console.log('Sending order notification to owner');
      
      toast.success(language === 'he' 
        ? 'התשלום בוצע בהצלחה! נשלח אישור למייל שלך' 
        : 'Paiement réussi ! Une confirmation a été envoyée à votre e-mail');
      
      onPaymentSuccess();
      onClose();
    } catch (error) {
      console.error('Payment error:', error);
      toast.error(language === 'he' 
        ? 'אירעה שגיאה בעיבוד התשלום. אנא נסה שוב' 
        : 'Une erreur est survenue lors du traitement du paiement. Veuillez réessayer');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={`sm:max-w-md ${isRTL ? 'rtl' : 'ltr'}`}>
        <DialogHeader>
          <DialogTitle>
            {language === 'he' ? 'תשלום עבור' : 'Paiement pour'} {title}
          </DialogTitle>
          <DialogDescription>
            {language === 'he' ? 'סכום לתשלום:' : 'Montant à payer:'} {price}
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-1 gap-2">
            <Label htmlFor="name">{language === 'he' ? 'שם מלא' : 'Nom complet'}</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder={language === 'he' ? 'הכנס את שמך המלא' : 'Entrez votre nom complet'}
            />
          </div>
          
          <div className="grid grid-cols-1 gap-2">
            <Label htmlFor="email">{language === 'he' ? 'דוא"ל' : 'Email'}</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder={language === 'he' ? 'הכנס את כתובת הדוא"ל שלך' : 'Entrez votre adresse e-mail'}
            />
          </div>
          
          <div className="grid grid-cols-1 gap-2">
            <Label htmlFor="phone">{language === 'he' ? 'מספר טלפון' : 'Numéro de téléphone'}</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder={language === 'he' ? 'הכנס את מספר הטלפון שלך' : 'Entrez votre numéro de téléphone'}
            />
          </div>
          
          <div className="mt-4">
            <Label>{language === 'he' ? 'בחר שיטת תשלום' : 'Choisissez une méthode de paiement'}</Label>
            <div className="flex gap-4 mt-2">
              <Button
                type="button"
                variant={paymentMethod === 'credit' ? 'default' : 'outline'}
                className={`flex-1 ${paymentMethod === 'credit' ? 'bg-coolblue-600' : ''}`}
                onClick={() => handlePaymentMethodSelect('credit')}
              >
                <CreditCard className={`${isRTL ? 'ml-2' : 'mr-2'}`} size={18} />
                {language === 'he' ? 'כרטיס אשראי' : 'Carte de crédit'}
              </Button>
              <Button
                type="button"
                variant={paymentMethod === 'paypal' ? 'default' : 'outline'}
                className={`flex-1 ${paymentMethod === 'paypal' ? 'bg-blue-600' : ''}`}
                onClick={() => handlePaymentMethodSelect('paypal')}
              >
                <Paypal className={`${isRTL ? 'ml-2' : 'mr-2'}`} size={18} />
                PayPal
              </Button>
            </div>
          </div>
        </div>
        
        <DialogFooter className={`${isRTL ? 'flex-row-reverse' : ''}`}>
          <Button 
            type="button" 
            variant="outline" 
            onClick={onClose}
            disabled={isProcessing}
          >
            {language === 'he' ? 'ביטול' : 'Annuler'}
          </Button>
          <Button 
            type="button" 
            onClick={processPayment} 
            disabled={!isFormValid() || isProcessing}
            className="bg-green-600 hover:bg-green-500"
          >
            {isProcessing ? (
              <>
                <Loader2 className={`animate-spin ${isRTL ? 'ml-2' : 'mr-2'}`} size={18} />
                {language === 'he' ? 'מעבד...' : 'Traitement en cours...'}
              </>
            ) : (
              <>
                {language === 'he' ? 'השלם תשלום' : 'Finaliser le paiement'}
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
