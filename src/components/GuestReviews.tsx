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
  comment: string;
  avatar: string;
}

const reviews: Review[] = [
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
    comment: "The ambiance is fantastic, and the service is impeccable. Every dish we tried was fresh and bursting with authentic Indian flavors.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Suresh Rao",
    rating: 4,
    comment: "Great experience! The idlis were soft and fluffy, and the filter coffee was just perfect. Will definitely come back for more.",
    avatar: "https://randomuser.me/api/portraits/men/70.jpg",
  },
  {
    name: "Meena Gupta",
    rating: 5,
    comment: "TasteTrek is a gem! Their Paneer Butter Masala is heavenly, and the staff are incredibly friendly and attentive. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    name: "Arjun Singh",
    rating: 4.5,
    comment: "Fantastic food and a wonderful atmosphere. The Chettinad Fish Curry was a standout, perfectly spiced and cooked to perfection.",
    avatar: "https://randomuser.me/api/portraits/men/55.jpg",
  },
];

const GuestReviews = forwardRef<HTMLElement, GuestReviewsProps>(({ id }, ref: Ref<HTMLElement>) => {
  const { ref: animationRef, isVisible } = useScrollAnimation<HTMLDivElement>();

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} size={20} fill="currentColor" className="text-secondary-brand" />);
    }
    if (hasHalfStar) {
      stars.push(<Star key="half" size={20} fill="currentColor" className="text-secondary-brand half-star-icon" />);
    }
    while (stars.length < 5) {
      stars.push(<Star key={`empty-${stars.length}`} size={20} className="text-gray-300 dark:text-gray-600" />);
    }
    return stars;
  };

  return (
    <section
      id={id}
      ref={ref}
      className="section-padding bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto text-center">
        <div
          ref={animationRef}
          className={cn(
            "transition-all duration-800 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-gray-800 dark:text-gray-100 mb-4">What Our Guests Say</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Hear from our happy customers about their delightful experiences at TasteTrek.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className={cn(
                "bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl shadow-xl flex flex-col items-center text-center animated-card transition-all duration-800 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img src={review.avatar} alt={review.name} className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-primary-brand" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-2">{review.name}</h3>
              <div className="flex mb-4">
                {renderStars(review.rating)}
              </div>
              <p className="text-gray-700 dark:text-gray-200 italic">"{review.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default GuestReviews;