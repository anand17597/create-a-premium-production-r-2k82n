import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 dark:text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Restaurant Info */}
        <div>
          <h3 className="text-2xl font-bold text-secondary mb-4">TasteTrek</h3>
          <p className="mb-2">Experience the authentic flavors of South India.</p>
          <p>Velachery, Chennai, India</p>
          <p>+91 7010190110</p>
          <p>support@workfast.ai</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white dark:text-gray-200 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><button onClick={() => handleScrollTo('hero')} className="hover:text-secondary transition-colors">Home</button></li>
            <li><button onClick={() => handleScrollTo('menu')} className="hover:text-secondary transition-colors">Menu</button></li>
            <li><button onClick={() => handleScrollTo('our-story')} className="hover:text-secondary transition-colors">About Us</button></li>
            <li><button onClick={() => handleScrollTo('contact')} className="hover:text-secondary transition-colors">Contact</button></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-white dark:text-gray-200 mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-gray-300 hover:text-secondary transition-colors" aria-label="Facebook">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-secondary transition-colors" aria-label="Instagram">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-secondary transition-colors" aria-label="Twitter">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
        &copy; {currentYear} TasteTrek. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;