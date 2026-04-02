import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Sun, Moon, Utensils } from 'lucide-react';
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "py-4", // Base padding
        isScrolled
          ? "bg-white dark:bg-zinc-900 shadow-md"
          : "bg-white dark:bg-zinc-900 shadow-sm" // Opaque by default
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center">
          <Utensils className="h-8 w-8 text-primary-brand mr-2" />
          <span className="font-playfair-display text-2xl font-bold text-gray-900 dark:text-gray-50">Wfast</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavLinkClick(link.id)}
              className={cn(
                "text-base font-medium transition-colors duration-200",
                "text-gray-700 dark:text-gray-300 hover:text-primary-brand dark:hover:text-primary-brand",
                {
                  "text-primary-brand dark:text-primary-brand font-semibold": activeSection === link.id,
                }
              )}
            >
              {link.label}
            </button>
          ))}
          {/* Dark Mode Toggle for Desktop */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors duration-200"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu Button & Dark Mode Toggle for Mobile */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors duration-200 mr-2"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-brand"
            aria-label="Open menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={cn(
          "md:hidden absolute top-16 left-0 w-full bg-white dark:bg-zinc-900 shadow-lg transition-all duration-300 ease-in-out overflow-hidden",
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavLinkClick(link.id)}
              className={cn(
                "block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200",
                "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-800 hover:text-primary-brand dark:hover:text-primary-brand",
                {
                  "bg-gray-50 dark:bg-zinc-800 text-primary-brand dark:text-primary-brand font-semibold": activeSection === link.id,
                }
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