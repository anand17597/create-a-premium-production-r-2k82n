import React from 'react';
import { Whatsapp } from 'lucide-react';

const FloatingWhatsAppButton: React.FC = () => {
  const phoneNumber = "+917010190110";
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center space-x-2 z-40"
      aria-label="Order now via WhatsApp"
    >
      <Whatsapp size={24} />
      <span className="font-semibold hidden sm:inline">Order Now</span>
    </a>
  );
};

export default FloatingWhatsAppButton;