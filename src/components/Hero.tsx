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
          "relative z-10 max-w-4xl px-4",
          isVisible ? "animate-fade-in is-visible" : "opacity-0 translate-y-5"
        )}
      >
        <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-playfair font-bold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Welcome to TasteTrek
        </h1>
        <p className="text-white text-lg sm:text-xl lg:text-2xl mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Experience the finest South Indian cuisine with a modern twist.
        </p>
        <button
          onClick={() => scrollToSection("menu")}
          className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg transform hover:-translate-y-1 animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          Explore Our Menu
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;