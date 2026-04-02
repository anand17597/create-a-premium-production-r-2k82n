import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Sun, Moon, MessageCircle } from 'lucide-react';
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
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const handleNavLinkClick = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false); // Close mobile menu after clicking a link
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'shadow-md backdrop-blur-sm bg-white/80 dark:bg-black/80'
          : 'bg-white dark:bg-black'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#hero" onClick={() => handleNavLinkClick('hero')} className="flex-shrink-0 text-2xl font-bold text-primary-brand font-playfair">
              Workfast Restaurant
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavLinkClick(link.id)}
                  className={cn(
                    'text-lg font-medium transition-colors',
                    activeSection === link.id
                      ? 'text-primary-brand dark:text-secondary-brand'
                      : 'text-gray-800 dark:text-text-dark hover:text-primary-brand'
                  )}
                >
                  {link.label}
                </button>
              ))}
            </div>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-brand text-gray-800 dark:text-text-dark"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
            </button>
          </div>
          <div className="md:hidden flex items-center space-x-4">
             <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-brand text-gray-800 dark:text-text-dark"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-800 dark:text-text-dark hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-brand"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden bg-white dark:bg-black shadow-lg py-4 transition-all duration-300 ease-in-out',
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavLinkClick(link.id)}
              className={cn(
                'block px-3 py-2 rounded-md text-base font-medium w-full text-center transition-colors',
                activeSection === link.id
                  ? 'bg-primary-brand/10 dark:bg-primary-brand/20 text-primary-brand dark:text-secondary-brand'
                  : 'text-gray-800 dark:text-text-dark hover:bg-gray-100 dark:hover:bg-gray-700'
              )}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;