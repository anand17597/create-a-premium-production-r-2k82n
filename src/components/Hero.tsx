import React, { forwardRef, Ref } from 'react';
import { cn } from '@/lib/utils';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  id: string;
  scrollToSection: (id: string) => void;
}

const Hero = forwardRef<HTMLElement, HeroProps>(({ id, scrollToSection }, ref: Ref<HTMLElement>) => {
  const { ref: animationRef, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section
      id={id}
      ref={ref}
      className="relative bg-cover bg-center h-screen flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')`,
      }}
    >
      <div className="absolute inset-0 bg-black/60 dark:bg-black/70"></div>
      <div
        ref={animationRef}
        className={cn(
          "relative z-10 text-white max-w-4xl mx-auto px-4 transition-all duration-800 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight font-playfair mb-6 drop-shadow-lg">
          Experience Culinary Excellence at <span className="text-secondary-brand">Workfast Restaurant</span>
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-8 leading-relaxed font-light drop-shadow-md">
          Where every dish tells a story of passion, tradition, and innovation.
        </p>
        <button
          onClick={() => scrollToSection('menu')}
          className="bg-primary-brand text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-dark transition-all duration-300 shadow-lg flex items-center justify-center mx-auto"
        >
          Explore Our Menu
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </section>
  );
});

export default Hero;