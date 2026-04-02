import React, { useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { ArrowUp } from 'lucide-react';

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = useCallback(() => {
    if (window.scrollY > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, [toggleVisibility]);

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 right-6 bg-primary-brand text-white p-3 rounded-full shadow-lg hover:bg-primary-dark transition-all duration-300 z-40",
        isVisible ? "opacity-100 visible" : "opacity-0 invisible"
      )}
      aria-label="Back to top"
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default BackToTopButton;