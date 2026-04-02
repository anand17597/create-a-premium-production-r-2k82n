import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useDarkMode } from '@/hooks/use-dark-mode';

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

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleNavLinkClick = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false); // Close mobile menu on link click
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
      isScrolled ? "shadow-lg bg-white/80 backdrop-blur-md dark:bg-gray-900/80" : "bg-transparent dark:bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavLinkClick('hero'); }}
            className="flex-shrink-0 text-2xl font-bold text-primary-brand font-playfair"
          >
            TasteTrek
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => { e.preventDefault(); handleNavLinkClick(link.id); }}
              className={cn(
                "text-gray-700 dark:text-gray-200 hover:text-primary-brand dark:hover:text-primary-brand transition-colors text-sm font-medium",
                activeSection === link.id && "text-primary-brand dark:text-primary-brand font-semibold"
              )}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 dark:text-gray-200 hover:text-primary-brand dark:hover:text-primary-brand focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={cn(
          "md:hidden absolute w-full left-0 py-4 shadow-lg transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-screen opacity-100 bg-white dark:bg-gray-900" : "max-h-0 opacity-0 overflow-hidden"
        )}
      >
        <div className="px-4 pt-2 pb-3 space-y-3 sm:px-3 flex flex-col items-center">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => { e.preventDefault(); handleNavLinkClick(link.id); }}
              className={cn(
                "block text-gray-800 dark:text-gray-100 hover:bg-primary-brand hover:text-white px-3 py-2 rounded-md text-base font-medium w-full text-center",
                activeSection === link.id && "bg-primary-brand text-white"
              )}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;