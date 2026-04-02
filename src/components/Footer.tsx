import React from 'react';
import { cn } from '@/lib/utils';
import { Utensils, Facebook, Instagram, Twitter } from 'lucide-react';

interface FooterProps {
  scrollToSection: (id: string) => void;
}

const navLinks = [
  { label: "Home", id: "hero" },
  { label: "Specialties", id: "specialties" },
  { label: "Our Story", id: "our-story" },
  { label: "Menu", id: "menu" },
  { label: "Reviews", id: "reviews" },
  { label: "Contact", id: "contact" },
];

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 dark:text-gray-400 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 md:mb-12">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <Utensils className="h-8 w-8 text-primary-brand mr-2" />
              <span className="font-playfair-display text-3xl font-bold text-white">Wfast</span>
            </div>
            <p className="text-sm">
              Experience the authentic taste of India with a modern twist. We are committed to culinary excellence and unforgettable dining.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="col-span-1 text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm hover:text-primary-brand transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: info@wfastrestaurant.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Culinary St, Flavor Town, FL</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-span-1 text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-primary-brand transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-primary-brand transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-primary-brand transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 dark:border-zinc-700 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Wfast Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;