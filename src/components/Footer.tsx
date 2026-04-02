import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

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
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer className="bg-gray-950 dark:bg-black text-gray-300 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="mb-6 lg:mb-0">
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection("hero"); }} className="text-3xl font-bold text-gold-500 hover:text-gold-400 transition-colors block mb-4">
              The Crimson Spoon
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              Experience the rich traditions of Indian cuisine reimagined for the modern palate in an elegant setting.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-6 lg:mb-0">
            <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-gold-500 transition-colors text-base font-medium"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mb-6 lg:mb-0">
            <h4 className="text-xl font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 text-gold-500 mr-3 flex-shrink-0" />
                <span>Velachery, Chennai, India</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 text-gold-500 mr-3 flex-shrink-0" />
                <span>+91 7010190110</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 text-gold-500 mr-3 flex-shrink-0" />
                <span>support@workfast.ai</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-gold-500 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-gold-500 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-gold-500 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          &copy; {currentYear} The Crimson Spoon. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;