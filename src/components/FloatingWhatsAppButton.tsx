import React from 'react';
import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const FloatingWhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/15551234567" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-4 left-4 z-50 p-3 rounded-full bg-green-500 text-white shadow-lg",
        "hover:bg-green-600 transition-all duration-300 transform hover:scale-110",
        "flex items-center justify-center",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      )}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};

export default FloatingWhatsAppButton;