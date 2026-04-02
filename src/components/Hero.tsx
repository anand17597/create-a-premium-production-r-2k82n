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
          "relative z-10 p-4 max-w-4xl mx-auto transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold font-playfair-display mb-4 leading-tight">
          Experience Authentic <br className="hidden sm:inline" /> Indian Flavors
        </h1>
        <p className="text-gray-200 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
          Savor traditional recipes crafted with fresh, local ingredients in a warm and inviting ambiance.
        </p>
        <button
          onClick={() => scrollToSection("menu")}
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary-brand text-white rounded-full text-lg font-semibold hover:opacity-90 transition-opacity transform hover:scale-105"
        >
          Explore Our Menu <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
});

export default Hero;