import React from 'react';
import { MessageCircle } from 'lucide-react';

interface FloatingWhatsAppButtonProps {}

const FloatingWhatsAppButton: React.FC<FloatingWhatsAppButtonProps> = () => {
  return (
    <a
      href="https://wa.me/15551234567" // Replace with actual WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-40"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
};

export default FloatingWhatsAppButton;