import React from 'react';
import { cn } from '@/lib/utils';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

interface FooterProps {
  scrollToSection: (id: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Home", id: "hero" },
    { label: "Specialties", id: "specialties" },
    { label: "Our Story", id: "our-story" },
    { label: "Menu", id: "menu" },
    { label: "Reviews", id: "reviews" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 lg:gap-12">
          {/* About */}
          <div className="col-span-1">
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection("hero"); }} className="flex items-center space-x-2 mb-4">
              <img src="https://i.ibb.co/3zd560B/Workfast-Restaurant-Logo.png" alt="Workfast Restaurant Logo" className="h-8" />
              <span className="text-2xl font-bold font-playfair-display text-primary-brand dark:text-primary-brand">Workfast</span>
            </a>
            <p className="text-gray-400 text-sm mb-4">
              Savor the authentic taste of India. A culinary journey crafted with passion and tradition.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-primary-brand transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-primary-brand transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-primary-brand transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold font-playfair-display text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                    className="text-gray-400 hover:text-primary-brand transition-colors text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold font-playfair-display text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary-brand flex-shrink-0 mt-1" />
                <p className="text-gray-400 text-base">123 Spice Route, Flavor Town, FL 12345</p>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-primary-brand flex-shrink-0" />
                <p className="text-gray-400 text-base">+1 (555) 123-4567</p>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary-brand flex-shrink-0" />
                <p className="text-gray-400 text-base">info@workfastrestaurant.com</p>
              </li>
            </ul>
          </div>

          {/* Newsletter (simple placeholder) */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold font-playfair-display text-white mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Stay updated with our latest offers and events.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-4 py-2 rounded-l-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-1 focus:ring-primary-brand"
              />
              <button
                type="submit"
                className="bg-primary-brand text-white px-4 py-2 rounded-r-md hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-8 text-center text-gray-500 text-sm">
          &copy; {currentYear} Workfast Restaurant. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;