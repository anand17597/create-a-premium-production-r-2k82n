import React from 'react';
import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FloatingWhatsAppButtonProps {
  phoneNumber: string;
}

const FloatingWhatsAppButton: React.FC<FloatingWhatsAppButtonProps> = ({ phoneNumber }) => {
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\D/g, '')}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 left-6 p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-40"
      )}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
};

export default FloatingWhatsAppButton;