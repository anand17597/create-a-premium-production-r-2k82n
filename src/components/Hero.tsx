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
          "relative z-10 max-w-4xl px-4 text-white transition-all duration-1000 ease-out",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        )}
      >
        <h1 className="font-playfair-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up">
          Savor the Authentic Flavors of India
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in-up delay-200">
          Experience a culinary journey with our exquisite dishes, crafted with passion and tradition.
        </p>
        <button
          onClick={() => scrollToSection("menu")}
          className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-primary-brand hover:bg-red-800 dark:bg-primary-brand dark:hover:bg-red-800 transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-400"
        >
          View Our Menu
          <ArrowRight className="ml-3 h-5 w-5" />
        </button>
      </div>
    </section>
  );
});

export default Hero;