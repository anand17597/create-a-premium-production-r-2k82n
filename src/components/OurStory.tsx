import React, { forwardRef, Ref } from 'react';
import { cn } from '@/lib/utils';
import useScrollAnimation from '@/hooks/use-scroll-animation';

interface OurStoryProps {
  id: string;
}

const OurStory = forwardRef<HTMLElement, OurStoryProps>(({ id }, ref: Ref<HTMLElement>) => {
  const { ref: animationRef, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section
      id={id}
      ref={ref}
      className="section-padding bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div ref={animationRef} className={cn("lg:order-2 transition-all duration-800 ease-out", isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10")}>
          <img src="https://images.unsplash.com/photo-1543353071-872f7173b7b2?auto=format&fit=crop&w=800&q=80" alt="Restaurant Interior" className="rounded-3xl shadow-xl w-full h-96 object-cover" />
        </div>
        <div className={cn("lg:order-1 text-center lg:text-left transition-all duration-800 ease-out", isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10")}>
          <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-gray-800 dark:text-gray-100 mb-6">Our Culinary Journey</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            TasteTrek began with a simple dream: to bring the authentic, diverse, and vibrant flavors of Indian cuisine to Chennai. Founded by a team of passionate food enthusiasts and seasoned chefs, our restaurant is a homage to the rich culinary heritage of India.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            From the bustling streets of South India to the royal kitchens of the North, our menu is a curated journey through taste, aroma, and tradition. Every dish tells a story, every ingredient is carefully selected, and every meal is prepared with love and precision. We invite you to be a part of our story and embark on your own TasteTrek.
          </p>
        </div>
      </div>
    </section>
  );
});

export default OurStory;