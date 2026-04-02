import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Sun, Moon, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import useDarkMode from '@/hooks/use-dark-mode';

interface NavbarProps {
  scrollToSection: (id: string) => void;
  activeSection: string;
}

const navLinks = [
  { label: "Home", id: "hero" },
  { label: "Specialties", id: "specialties" },
  { label: "Our Story", id: "our-story" },
  { label: "Menu", id: "menu" },
  { label: "Reviews", id: "reviews" },
  { label: "Contact", id: "contact" },
];

const Navbar: React.FC<NavbarProps> = ({ scrollToSection, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const handleNavLinkClick = useCallback((id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false); // Close mobile menu after clicking a link
  }, [scrollToSection]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 dark:bg-black/80 backdrop-blur-sm shadow-lg py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#hero" onClick={(e) => { e.preventDefault(); handleNavLinkClick("hero"); }} className="flex items-center space-x-2">
          <img src="https://i.ibb.co/3zd560B/Workfast-Restaurant-Logo.png" alt="Workfast Restaurant Logo" className="h-8 md:h-10" />
          <span className="text-2xl font-bold font-playfair-display text-primary-brand dark:text-primary-brand">Workfast</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => { e.preventDefault(); handleNavLinkClick(link.id); }}
              className={cn(
                "text-lg font-medium transition-colors hover:text-primary-brand",
                activeSection === link.id
                  ? "text-primary-brand dark:text-primary-brand border-b-2 border-primary-brand pb-1"
                  : "text-gray-700 dark:text-gray-300"
              )}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary-brand text-white rounded-full text-lg font-medium hover:opacity-90 transition-opacity">
            Book a Table <ArrowRight size={18} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors mr-2"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={toggleMenu}
            className="text-gray-700 dark:text-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary-brand rounded-md"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-x-0 top-16 bg-white dark:bg-black shadow-lg transition-all duration-300 ease-in-out overflow-hidden",
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col items-center py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => { e.preventDefault(); handleNavLinkClick(link.id); }}
              className={cn(
                "text-xl font-medium text-gray-800 dark:text-gray-200 hover:text-primary-brand dark:hover:text-primary-brand transition-colors py-2 w-full text-center",
                activeSection === link.id && "text-primary-brand dark:text-primary-brand font-semibold"
              )}
            >
              {link.label}
            </a>
          ))}
          <button className="flex items-center gap-2 px-6 py-3 bg-primary-brand text-white rounded-full text-lg font-medium hover:opacity-90 transition-opacity mt-4">
            Book a Table <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;