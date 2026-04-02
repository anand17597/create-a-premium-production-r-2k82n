import React, { forwardRef, Ref } from 'react';
import { cn } from '@/lib/utils';
import useScrollAnimation from '@/hooks/use-scroll-animation';

interface OurStoryProps {
  id: string;
}

const OurStory = forwardRef<HTMLElement, OurStoryProps>(({ id }, ref: Ref<HTMLElement>) => {
  const { ref: animationRef, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id={id} ref={ref} className="py-16 md:py-24 bg-white dark:bg-zinc-900">
      <div
        ref={animationRef}
        className={cn(
          "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ease-out",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        )}
      >
        <div className="lg:order-2">
          <img
            src="https://images.unsplash.com/photo-1579751626657-72ae03e06184?auto=format&fit=crop&w=1000&q=80"
            alt="Our Story - Chef preparing food"
            className="rounded-xl shadow-lg w-full h-auto object-cover max-h-[500px]"
            loading="lazy"
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = 'https://images.unsplash.com/photo-1555939594-58d7cfb593ed?auto=format&fit=crop&w=1000&q=80'; // Fallback
            }}
          />
        </div>
        <div className="lg:order-1 text-center lg:text-left">
          <h2 className="font-playfair-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-50 mb-6">
            Our Story: A Passion for Authentic Flavors
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Wfast was founded with a simple yet profound vision: to bring the rich, diverse, and authentic tastes of India to your table. Our journey began many years ago, rooted in family traditions and passed-down recipes from generations of culinary masters.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Every dish at Wfast tells a story – a story of fresh ingredients, meticulous preparation, and a commitment to culinary excellence. We believe that food is not just sustenance; it's an experience, a memory, and a celebration of culture. Come, be a part of our story.
          </p>
        </div>
      </div>
    </section>
  );
});

export default OurStory;