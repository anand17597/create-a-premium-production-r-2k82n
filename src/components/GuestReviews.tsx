import React from 'react';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import { forwardRef, Ref } from 'react';
import { cn } from '@/lib/utils';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  image: string;
  name: string;
  title: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, image, name, title }) => (
  <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl card-hover transition-all duration-300 text-left">
    <Quote className="w-8 h-8 text-gold-500 mb-4" />
    <p className="text-gray-700 dark:text-gray-300 italic mb-6">
      "{quote}"
    </p>
    <div className="flex items-center">
      <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4 object-cover" />
      <div>
        <p className="font-semibold text-gray-900 dark:text-white">{name}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
      </div>
    </div>
  </div>
);

interface GuestReviewsProps {
  id: string;
}

const testimonials: TestimonialCardProps[] = [
  {
    quote: "The Crimson Spoon offers an unparalleled dining experience. Every dish is a masterpiece, a true celebration of Indian flavors. The ambiance is perfect for any occasion!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    name: "Priya Sharma",
    title: "Food Critic",
  },
  {
    quote: "Absolutely blown away by the innovative menu! The fusion of traditional and modern is simply brilliant. A must-visit for anyone looking for fine Indian dining.",
    image: "https://images.unsplash.com/photo-1507003211169-e695c6edf893?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    name: "Rahul Singh",
    title: "Local Foodie",
  },
  {
    quote: "From the warm welcome to the last bite of dessert, everything was exceptional. The service was impeccable, and the recommendations were spot on. Highly recommend!",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    name: "Anjali Mehta",
    title: "Regular Guest",
  },
  {
    quote: "A culinary gem in Chennai! The Crimson Spoon consistently delivers on taste, quality, and presentation. It's my go-to place for special occasions.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    name: "Vivek Kumar",
    title: "Connoisseur",
  },
];

const GuestReviews = forwardRef<HTMLElement, GuestReviewsProps>(({ id }, ref: Ref<HTMLElement>) => {
  const { ref: animationRef, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id={id} ref={ref} className="section-padding bg-gray-50 dark:bg-gray-950">
      <div
        ref={animationRef}
        className={cn(
          "max-w-7xl mx-auto transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 dark:text-white mb-6">
          What Our Guests Say
        </h2>
        <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
          Hear from our valued customers about their unforgettable dining experiences at The Crimson Spoon.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
});

GuestReviews.displayName = 'GuestReviews';
export default GuestReviews;