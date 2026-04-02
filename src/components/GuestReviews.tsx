import React, { forwardRef, Ref } from 'react';
import { cn } from '@/lib/utils';
import useScrollAnimation from '@/hooks/use-scroll-animation';

interface GuestReviewsProps {
  id: string;
}

interface Review {
  quote: string;
  author: string;
  title: string;
  avatar: string;
}

const reviews: Review[] = [
  {
    quote: "Workfast Restaurant offers an unparalleled dining experience. The Chicken Biryani was absolutely divine, perfectly spiced and incredibly tender. The service was impeccable!",
    author: "Sarah L.",
    title: "Food Critic",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote: "A hidden gem! The Masala Dosa was crispy and flavorful, just like I remember from my travels. The ambiance is cozy, and the staff are incredibly friendly. Highly recommend!",
    author: "Mark T.",
    title: "Local Foodie",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote: "From the moment we walked in, we felt welcomed. The Paneer Tikka Masala was a revelation, and the Garlic Naan was perfect. Workfast Restaurant is now our go-to spot!",
    author: "Emily R.",
    title: "Regular Customer",
    avatar: "https://randomuser.me/api/portraits/women/67.jpg",
  },
  {
    quote: "The flavors are simply exquisite! Every dish we tried was a masterpiece. It's clear that a lot of passion goes into their cooking. A must-visit for Indian cuisine lovers.",
    author: "David S.",
    title: "Gourmand",
    avatar: "https://randomuser.me/api/portraits/men/88.jpg",
  },
  {
    quote: "Absolutely fantastic! The ambiance is lovely, and the food is out of this world. The lamb vindaloo had just the right amount of spice. Can't wait to come back.",
    author: "Jessica P.",
    title: "Happy Diner",
    avatar: "https://randomuser.me/api/portraits/women/23.jpg",
  },
  {
    quote: "Workfast Restaurant exceeded all my expectations. The staff were attentive, and the recommendations were spot on. A truly memorable meal from start to finish.",
    author: "Michael B.",
    title: "Satisfied Guest",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
  },
];

const GuestReviews = forwardRef<HTMLElement, GuestReviewsProps>(({ id }, ref: Ref<HTMLElement>) => {
  const { ref: sectionRef, isVisible: sectionIsVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id={id} ref={sectionRef} className="section-padding bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-text-dark">
      <div className="max-w-7xl mx-auto text-center">
        <p
          className={cn(
            "text-primary-brand text-lg font-semibold mb-2 transition-all duration-800 ease-out",
            sectionIsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          )}
        >
          What Our Guests Say
        </p>
        <h2
          className={cn(
            "text-3xl sm:text-4xl lg:text-5xl font-bold font-playfair mb-12 transition-all duration-800 ease-out delay-100",
            sectionIsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          )}
        >
          Heartfelt <span className="text-secondary-brand">Testimonials</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
});

interface ReviewCardProps {
  review: Review;
  delay: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review, delay }) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.1);

  return (
    <div
      ref={ref}
      className={cn(
        "bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transform hover:translate-y-[-5px] transition-all duration-500 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${delay}s` }}
    >
      <p className="text-gray-700 dark:text-gray-300 italic mb-6">"{review.quote}"</p>
      <div className="flex items-center justify-center">
        <img src={review.avatar} alt={review.author} className="w-12 h-12 rounded-full object-cover mr-4" />
        <div>
          <p className="font-semibold text-lg">{review.author}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{review.title}</p>
        </div>
      </div>
    </div>
  );
};

export default GuestReviews;