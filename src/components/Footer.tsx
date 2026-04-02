import React, { forwardRef, Ref } from 'react';
import { cn } from '@/lib/utils';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

interface FooterProps {
  scrollToSection: (id: string) => void;
}

const Footer = forwardRef<HTMLElement, FooterProps>(({ scrollToSection }, ref: Ref<HTMLElement>) => {
  const { ref: animationRef, isVisible } = useScrollAnimation<HTMLDivElement>();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      ref={ref}
      className="bg-gray-800 dark:bg-black text-gray-200 dark:text-gray-400 py-12 section-padding"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          className={cn(
            "transition-all duration-800 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
          style={{ transitionDelay: "0ms" }}
        >
          <h3 className="text-2xl font-bold font-playfair text-primary-brand mb-4">TasteTrek</h3>
          <p className="text-sm">Experience the authentic flavors of India, crafted with passion and tradition.</p>
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-gray-300 hover:text-primary-brand transition-colors" aria-label="Facebook">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-primary-brand transition-colors" aria-label="Instagram">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-primary-brand transition-colors" aria-label="Twitter">
              <Twitter size={24} />
            </a>
          </div>
        </div>

        <div
          className={cn(
            "transition-all duration-800 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
          style={{ transitionDelay: "100ms" }}
        >
          <h4 className="text-xl font-semibold text-white dark:text-gray-100 mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} className="text-sm hover:text-primary-brand transition-colors">Home</a></li>
            <li><a href="#menu" onClick={(e) => { e.preventDefault(); scrollToSection('menu'); }} className="text-sm hover:text-primary-brand transition-colors">Menu</a></li>
            <li><a href="#our-story" onClick={(e) => { e.preventDefault(); scrollToSection('our-story'); }} className="text-sm hover:text-primary-brand transition-colors">About Us</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="text-sm hover:text-primary-brand transition-colors">Contact</a></li>
            <li><a href="#" className="text-sm hover:text-primary-brand transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        <div
          className={cn(
            "transition-all duration-800 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
          style={{ transitionDelay: "200ms" }}
        >
          <h4 className="text-xl font-semibold text-white dark:text-gray-100 mb-4">Contact Info</h4>
          <p className="text-sm mb-2 flex items-center">
            <MapPin className="mr-2 text-primary-brand" size={16} />
            Velachery, Chennai, India
          </p>
          <p className="text-sm mb-2 flex items-center">
            <Phone className="mr-2 text-primary-brand" size={16} />
            +91 7010190110
          </p>
          <p className="text-sm flex items-center">
            <Mail className="mr-2 text-primary-brand" size={16} />
            support@workfast.ai
          </p>
        </div>

        <div
          className={cn(
            "transition-all duration-800 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
          style={{ transitionDelay: "300ms" }}
        >
          <h4 className="text-xl font-semibold text-white dark:text-gray-100 mb-4">Newsletter</h4>
          <p className="text-sm mb-4">Stay updated with our latest offers and events.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-grow px-4 py-2 rounded-lg bg-gray-700 dark:bg-gray-700 border-none focus:ring-primary-brand focus:border-primary-brand text-white text-sm"
              aria-label="Email for newsletter"
            />
            <button
              type="submit"
              className="bg-primary-brand text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-700 dark:border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
        &copy; {currentYear} TasteTrek. All rights reserved.
      </div>
    </footer>
  );
});

export default Footer;