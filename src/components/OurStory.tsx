import React, { forwardRef, Ref } from 'react';
import { cn } from '@/lib/utils';
import useScrollAnimation from '@/hooks/use-scroll-animation';

interface OurStoryProps {
  id: string;
}

const OurStory = forwardRef<HTMLElement, OurStoryProps>(({ id }, ref: Ref<HTMLElement>) => {
  const { ref: sectionRef, isVisible: sectionIsVisible } = useScrollAnimation<HTMLElement>();
  const { ref: imageRef, isVisible: imageIsVisible } = useScrollAnimation<HTMLImageElement>(0.2);
  const { ref: textRef, isVisible: textIsVisible } = useScrollAnimation<HTMLDivElement>(0.2);

  return (
    <section id={id} ref={sectionRef} className="section-padding bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-text-dark">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div
          ref={imageRef}
          className={cn(
            "lg:order-2 transition-all duration-800 ease-out",
            imageIsVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          )}
        >
          <img
            src="https://images.unsplash.com/photo-1577979607147-380d1955d947?auto=format&fit=crop&w=1600&q=80"
            alt="Workfast Restaurant Interior"
            className="rounded-xl shadow-2xl w-full h-auto object-cover max-h-[500px]"
          />
        </div>
        <div
          ref={textRef}
          className={cn(
            "lg:order-1 text-center lg:text-left transition-all duration-800 ease-out delay-100",
            textIsVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}
        >
          <p className="text-primary-brand text-lg font-semibold mb-2">Our Journey</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-playfair mb-6">
            The Story of <span className="text-secondary-brand">Workfast Restaurant</span>
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
            Founded in 2023 with a vision to bring authentic, high-quality Indian cuisine to the modern diner, Workfast Restaurant began as a dream born from a love for vibrant flavors and warm hospitality. Our founders, a team of passionate chefs and culinary enthusiasts, embarked on a journey to create a dining experience that blends traditional recipes with contemporary presentation.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Every dish at Workfast Restaurant is a testament to our commitment to excellence, using only the freshest ingredients and time-honored cooking techniques. We believe food is an art form, and our kitchen is our canvas. Join us to savor a culinary adventure that celebrates rich heritage and innovative spirit.
          </p>
        </div>
      </div>
    </section>
  );
});

export default OurStory;