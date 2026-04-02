import React, { forwardRef, Ref } from 'react';
import { cn } from '@/lib/utils';
import useScrollAnimation from '@/hooks/use-scroll-animation';

interface OurStoryProps {
  id: string;
}

const OurStory = forwardRef<HTMLElement, OurStoryProps>(({ id }, ref: Ref<HTMLElement>) => {
  const { ref: animationRef, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id={id} ref={ref} className="py-16 md:py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            ref={animationRef}
            className={cn(
              "transition-all duration-1000 ease-out",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            )}
          >
            <h2 className="text-4xl sm:text-5xl font-bold font-playfair-display text-gray-900 dark:text-white mb-6">
              Our Culinary Journey
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Founded with a passion for authentic Indian cuisine, Workfast Restaurant brings generations of culinary heritage to your table. Our journey began with a simple dream: to share the rich tapestry of Indian flavors, from the bustling streets of Mumbai to the serene backwaters of Kerala, all under one roof.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Every dish is a celebration of traditional techniques and fresh, locally sourced ingredients. Our chefs, with years of experience, meticulously craft each recipe, ensuring a memorable dining experience that transports you to the heart of India.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              We believe in creating not just meals, but cherished memories, fostering a community around the love of good food. Join us and become a part of our story.
            </p>
          </div>
          <div
            className={cn(
              "relative rounded-xl overflow-hidden shadow-xl transition-all duration-1000 delay-200 ease-out",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
          >
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7ed7b6bb00?auto=format&fit=crop&w=800&q=80"
              alt="Restaurant interior with chefs"
              className="w-full h-full object-cover max-h-[500px]"
              loading="lazy"
              onError={(e) => { (e.target as HTMLImageElement).onerror = null; (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80'; }}
            />
          </div>
        </div>
      </div>
    </section>
  );
});

export default OurStory;