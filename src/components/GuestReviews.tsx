import React, { forwardRef, Ref } from 'react';
import { cn } from '@/lib/utils';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import { Star } from 'lucide-react';

interface GuestReviewsProps {
  id: string;
}

interface Review {
  name: string;
  rating: number;
  reviewText: string;
  avatar: string;
}

const reviews: Review[] = [
  {
    name: "Aisha Sharma",
    rating: 5,
    reviewText: "Absolutely divine! The Masala Dosa was perfectly crispy, and the sambar had just the right amount of spice. A true taste of India!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80",
  },
  {
    name: "David Lee",
    rating: 4,
    reviewText: "Great ambiance and friendly staff. The Biryani was flavorful, though I prefer a bit more spice. Will definitely be back to try other dishes.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80",
  },
  {
    name: "Priya Singh",
    rating: 5,
    reviewText: "Workfast is my go-to for authentic South Indian food. The Idli is so soft, and their chutneys are incredibly fresh. Highly recommend!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80",
  },
  {
    name: "Mark Johnson",
    rating: 5,
    reviewText: "Fantastic experience! The service was impeccable, and every dish we tried was a burst of flavor. Don't miss the Paneer Tikka!",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80",
  },
];

const GuestReviews = forwardRef<HTMLElement, GuestReviewsProps>(({ id }, ref: Ref<HTMLElement>) => {
  const { ref: animationRef, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id={id} ref={ref} className="py-16 md:py-24 bg-gray-50 dark:bg-dark-bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold font-playfair-display text-gray-900 dark:text-white mb-4">
            What Our Guests Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hear from our happy customers about their dining experiences with us.
          </p>
        </div>

        <div
          ref={animationRef}
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={review.avatar}
                alt={review.name}
                className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-primary-brand"
                loading="lazy"
                onError={(e) => { (e.target as HTMLImageElement).onerror = null; (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80'; }}
              />
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    fill={i < review.rating ? "currentColor" : "none"}
                    className={i < review.rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}
                    strokeWidth={0}
                  />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                "{review.reviewText}"
              </p>
              <h3 className="text-xl font-semibold font-playfair-display text-gray-900 dark:text-white">
                {review.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default GuestReviews;