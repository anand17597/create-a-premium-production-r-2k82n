import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowUp } from 'lucide-react';

interface BackToTopButtonProps {
  show: boolean;
}

const BackToTopButton: React.FC<BackToTopButtonProps> = ({ show }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 right-6 z-40 p-3 bg-primary-brand text-white rounded-full shadow-lg transition-all duration-300",
        show ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"
      )}
      aria-label="Back to top"
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default BackToTopButton;