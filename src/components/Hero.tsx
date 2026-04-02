import React from 'react';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import { forwardRef, Ref } from 'react';
import { cn } from '@/lib/utils';

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
          "relative z-10 max-w-4xl mx-auto px-4 transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-4 leading-tight">
          Experience Culinary Excellence
        </h1>
        <p className="text-gray-200 text-lg sm:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto">
          Savor the rich traditions of Indian cuisine reimagined for the modern palate in an elegant setting.
        </p>
        <button
          onClick={() => scrollToSection("menu")}
          className="bg-gold-500 text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gold-600 transition-all duration-300 shadow-lg transform hover:-translate-y-1"
        >
          Explore Our Menu
        </button>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero'; // Add display name for forwardRef
export default Hero;