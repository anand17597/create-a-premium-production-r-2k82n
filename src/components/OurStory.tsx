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
        <div ref={animationRef} className={cn("lg:order-2", isVisible ? "animate-slide-in-right is-visible" : "opacity-0 translate-x-10")}>
          <img src="https://images.unsplash.com/photo-1543353071-872f7173b7b2?auto=format&fit=crop&w=800&q=80" alt="Restaurant Interior" className="rounded-3xl shadow-xl w-full h-96 object-cover" />
        </div>
        <div className={cn("lg:order-1 text-center lg:text-left", isVisible ? "animate-slide-in-left is-visible" : "opacity-0 -translate-x-10")}>
          <h2 className="text-4xl font-playfair font-bold text-primary dark:text-secondary mb-6">Our Story</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            TasteTrek began with a simple vision: to bring the authentic, vibrant flavors of South India to Chennai, infused with a touch of modern culinary artistry. Founded by a team passionate about food and hospitality, our journey started in the bustling streets of Velachery.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            We pride ourselves on using locally sourced, fresh ingredients, traditional recipes passed down through generations, and innovative techniques to create dishes that are both comforting and exciting. Every meal at TasteTrek is a celebration of heritage and a step into the future of South Indian dining.
          </p>
        </div>
      </div>
    </section>
  );
});

OurStory.displayName = 'OurStory';

export default OurStory;