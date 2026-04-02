import React from 'react';
import { cn } from '@/lib/utils';
import { MessageCircle } from 'lucide-react'; // Using MessageCircle as WhatsApp icon

interface FloatingWhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const FloatingWhatsAppButton: React.FC<FloatingWhatsAppButtonProps> = ({
  phoneNumber,
  message = "Hello, I'd like to make a reservation.",
}) => {
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 left-6 z-40 p-3 bg-green-500 text-white rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110",
        "flex items-center justify-center" // Ensure icon is centered
      )}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default FloatingWhatsAppButton;