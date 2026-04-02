import React from 'react';
import { MapPin, Mail, Phone, Facebook, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-800 dark:bg-black text-gray-300 dark:text-gray-400 py-12 section-padding">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center md:text-left">
        <div className="col-span-full lg:col-span-1 mb-6 md:mb-0">
          <h3 className="text-3xl font-bold text-primary-brand font-playfair mb-4">Workfast Restaurant</h3>
          <p className="text-sm leading-relaxed">Experience a culinary journey where tradition meets innovation. We are committed to serving you the finest dishes with unparalleled hospitality.</p>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-white dark:text-text-dark mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><button onClick={() => scrollTo('hero')} className="hover:text-primary-brand transition-colors">Home</button></li>
            <li><button onClick={() => scrollTo('specialties')} className="hover:text-primary-brand transition-colors">Specialties</button></li>
            <li><button onClick={() => scrollTo('menu')} className="hover:text-primary-brand transition-colors">Menu</button></li>
            <li><button onClick={() => scrollTo('our-story')} className="hover:text-primary-brand transition-colors">Our Story</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-white dark:text-text-dark mb-4">Contact Info</h4>
          <ul className="space-y-2">
            <li className="flex items-center justify-center md:justify-start">
              <MapPin className="mr-2 text-primary-brand h-6 w-6" />
              123 Culinary St, Foodville
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <Mail className="mr-2 text-primary-brand h-6 w-6" />
              info@workfast.com
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <Phone className="mr-2 text-primary-brand h-6 w-6" />
              +1 (555) 123-4567
            </li>
          </ul>
        </div>

        <div className="lg:col-span-1">
          <h4 className="text-xl font-semibold text-white dark:text-text-dark mb-4">Follow Us</h4>
          <div className="flex space-x-4 justify-center md:justify-start">
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-primary-brand transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-primary-brand transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-primary-brand transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-12 border-t border-gray-700 dark:border-gray-600 pt-8">
        <p>&copy; 2023 Workfast Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;