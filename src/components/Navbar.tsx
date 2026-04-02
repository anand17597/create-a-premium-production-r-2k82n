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
    setIsMenuOpen(false); // Close mobile menu on click
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 dark:bg-dark-bg/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => handleNavLinkClick('hero')} className="flex items-center space-x-2 text-2xl font-bold text-primary dark:text-secondary cursor-pointer">
          <span className="text-primary dark:text-secondary">TasteTrek</span>
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavLinkClick(link.id)}
              className={cn(
                "relative text-lg font-medium transition-colors hover:text-primary dark:hover:text-secondary",
                activeSection === link.id
                  ? "text-primary dark:text-secondary"
                  : "text-gray-700 dark:text-gray-300"
              )}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary dark:bg-secondary rounded-full animate-fade-in"></span>
              )}
            </button>
          ))}
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors mr-2"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-16 left-0 w-full bg-white dark:bg-dark-bg shadow-lg transition-all duration-300 overflow-hidden",
          isMenuOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col items-center space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavLinkClick(link.id)}
              className={cn(
                "w-full text-center py-2 text-lg font-medium transition-colors hover:text-primary dark:hover:text-secondary",
                activeSection === link.id
                  ? "text-primary dark:text-secondary"
                  : "text-gray-700 dark:text-gray-300"
              )}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;