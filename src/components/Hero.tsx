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
          "relative z-10 max-w-4xl px-4 transition-all duration-800 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 font-playfair drop-shadow-lg">
          Savor the Authentic Flavors of India
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Experience a culinary journey at TasteTrek, where tradition meets modern elegance in every dish.
        </p>
        <button
          className="bg-primary-brand text-white text-lg font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-primary-dark transition duration-300 flex items-center justify-center mx-auto"
          onClick={() => scrollToSection('menu')}
        >
          Explore Our Menu
          <ArrowRight className="ml-2" size={20} />
        </button>
      </div>
    </section>
  );
});

export default Hero;