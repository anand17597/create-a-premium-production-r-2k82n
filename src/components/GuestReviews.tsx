import React, { forwardRef, Ref } from 'react';
import { cn } from '@/lib/utils';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import { Star } from 'lucide-react';

interface GuestReviewsProps {
  id: string;
}

const reviews = [
  {
    name: "Priya Sharma",
    rating: 4.5,
    comment: "Absolutely delightful! The Masala Dosa was perfectly crispy, and the Sambar had an authentic flavor. A must-visit in Chennai!",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Rajesh Kumar",
    rating: 5,
    comment: "The Chicken Biryani was a culinary masterpiece! Rich flavors and tender chicken. This restaurant truly stands out.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Anjali Devi",
    rating: 4.5,
    comment: "The ambiance is fantastic, and the staff are incredibly friendly. Every dish feels like a homemade delight. Highly recommended for families!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Vikram Singh",
    rating: 4,
    comment: "Great experience overall. The filter coffee is a must-try! Portions are generous and prices are reasonable.",
    avatar: "https://randomuser.me/api/portraits/men/70.jpg",
  },
];

const GuestReviews = forwardRef<HTMLElement, GuestReviewsProps>(({ id }, ref: Ref<HTMLElement>) => {
  const { ref: animationRef, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section
      id={id}
      ref={ref}
      className="section-padding bg-white dark:bg-gray-900"
    >
      <div ref={animationRef} className={cn("max-w-7xl mx-auto text-center", isVisible ? "animate-fade-in is-visible" : "opacity-0 translate-y-5")}>
        <h2 className="text-4xl font-playfair font-bold text-primary dark:text-secondary mb-12">What Our Guests Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className={cn(
                "bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700",
                isVisible ? "animate-slide-in-bottom" : "opacity-0 translate-y-10"
              )}
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <img src={review.avatar} alt={review.name} className="w-16 h-16 rounded-full mx-auto mb-4 object-cover" />
              <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">"{review.comment}"</p>
              <div className="flex justify-center text-yellow-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    fill={i < Math.floor(review.rating) ? "currentColor" : "none"}
                    strokeWidth={1.5}
                    className={cn(i < review.rating ? "text-yellow-500" : "text-gray-300 dark:text-gray-600")}
                  />
                ))}
              </div>
              <p className="font-semibold text-gray-800 dark:text-gray-100">- {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

GuestReviews.displayName = 'GuestReviews';

export default GuestReviews;