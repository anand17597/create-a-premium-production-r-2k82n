import React, { forwardRef, Ref } from 'react';
import { cn } from '@/lib/utils';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import { Star } from 'lucide-react';

interface GuestReviewsProps {
  id: string;
}

interface Review {
  id: number;
  name: string;
  rating: number;
  review: string;
  image: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Priya Sharma",
    rating: 5,
    review: "Absolutely delightful! The biryani was fragrant and perfectly spiced. A true taste of home.",
    image: "https://images.unsplash.com/photo-1507003211169-e69fe254fe58?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 2,
    name: "Amit Patel",
    rating: 5,
    review: "The dosas are incredibly crispy and authentic. Best South Indian food I've had outside of India!",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 3,
    name: "Sarah Johnson",
    rating: 4,
    review: "Great ambiance and friendly staff. The paneer butter masala was rich and flavorful. Highly recommend!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 4,
    name: "Rajesh Kumar",
    rating: 5,
    review: "Every dish felt like a homemade meal. The authentic flavors and warm service make Wfast a must-visit.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
];

const GuestReviews = forwardRef<HTMLElement, GuestReviewsProps>(({ id }, ref: Ref<HTMLElement>) => {
  const { ref: animationRef, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id={id} ref={ref} className="py-16 md:py-24 bg-gray-50 dark:bg-zinc-950">
      <div
        ref={animationRef}
        className={cn(
          "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ease-out",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        )}
      >
        <h2 className="font-playfair-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-50 mb-4">
          What Our Guests Say
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Hear from our happy customers about their delightful dining experiences at Wfast.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={cn(
                "bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-6 flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105 hover:shadow-xl",
                isVisible ? `opacity-100 translate-y-0 delay-${index * 150}` : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={review.image}
                alt={review.name}
                className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-primary-brand"
                loading="lazy"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1535713875002-d1d0cfdce567?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'; // Fallback
                }}
              />
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn("h-5 w-5", i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300 dark:text-gray-600")}
                  />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 italic mb-4 text-sm">"{review.review}"</p>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">- {review.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default GuestReviews;