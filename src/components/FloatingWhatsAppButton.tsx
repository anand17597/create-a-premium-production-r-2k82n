import React from 'react';
import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FloatingWhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const FloatingWhatsAppButton: React.FC<FloatingWhatsAppButtonProps> = ({
  phoneNumber,
  message = "Hello, I'd like to inquire about your restaurant services.",
}) => {
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank" // Open in new tab for external links
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-24 right-6 lg:bottom-6 lg:right-24 p-4 bg-green-500 text-white rounded-full shadow-lg transition-all duration-300",
        "hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900",
        "flex items-center justify-center space-x-2 text-sm font-semibold sm:text-base sm:px-6 sm:py-3 sm:w-auto"
      )}
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:block">WhatsApp Us</span>
    </a>
  );
};

export default FloatingWhatsAppButton;