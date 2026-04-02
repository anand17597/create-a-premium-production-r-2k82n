import React, { useCallback } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BackToTopButtonProps {
  scrollToSection: (id: string) => void;
}

const BackToTopButton: React.FC<BackToTopButtonProps> = ({ scrollToSection }) => {
  const handleBackToTop = useCallback(() => {
    scrollToSection("hero");
  }, [scrollToSection]);

  return (
    <button
      onClick={handleBackToTop}
      className={cn(
        "fixed bottom-4 right-4 z-50 p-3 rounded-full bg-primary-brand text-white shadow-lg",
        "hover:bg-red-800 transition-all duration-300 transform hover:scale-110",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-brand"
      )}
      aria-label="Back to top"
    >
      <ArrowUp className="h-6 w-6" />
    </button>
  );
};

export default BackToTopButton;