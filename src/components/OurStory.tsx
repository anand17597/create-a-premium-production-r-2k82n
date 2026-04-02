import React, { forwardRef, Ref } from 'react';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer'; // For counters

interface CounterProps {
  endValue: number;
  label: string;
  delay?: number;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ endValue, label, delay = 0, suffix = '' }) => {
  const [count, setCount] = React.useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  React.useEffect(() => {
    if (inView) {
      const duration = 2000; // 2 seconds
      let startTimestamp: number | null = null;

      const animateCount = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = timestamp - startTimestamp;
        const currentCount = Math.min(endValue, (progress / duration) * endValue);
        setCount(Math.floor(currentCount));

        if (progress < duration) {
          requestAnimationFrame(animateCount);
        }
      };

      const timeoutId = setTimeout(() => {
        requestAnimationFrame(animateCount);
      }, delay);

      return () => clearTimeout(timeoutId);
    } else {
      setCount(0); // Reset count if not in view and not triggered once
    }
  }, [inView, endValue, delay]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-5xl font-bold text-gold-600 dark:text-gold-500 mb-2">{count}{suffix}</p>
      <p className="text-lg text-gray-700 dark:text-gray-300">{label}</p>
    </div>
  );
};

interface OurStoryProps {
  id: string;
}

const OurStory = forwardRef<HTMLElement, OurStoryProps>(({ id }, ref: Ref<HTMLElement>) => {
  const { ref: animationRef, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id={id} ref={ref} className="section-padding bg-white dark:bg-gray-900">
      <div
        ref={animationRef}
        className={cn(
          "max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <div className="lg:order-2">
          <img
            src="https://images.unsplash.com/photo-1550966871-3ed3cdb04c8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
            alt="Chef preparing food"
            className="rounded-2xl shadow-xl w-full h-auto object-cover max-h-[500px]"
          />
        </div>
        <div className="lg:order-1 text-center lg:text-left">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Culinary Journey
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg">
            At The Crimson Spoon, our story began with a simple passion: to bring the authentic, vibrant flavors of Indian cuisine to Chennai, reimagined with a modern twist. Founded by Chef Arjun Rao, a culinary artist with decades of experience, our restaurant is a testament to tradition meeting innovation.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 text-lg">
            Every dish tells a tale, from the meticulously sourced spices to the artful presentation. We believe in creating an unforgettable dining experience that delights all senses, celebrating India's rich culinary heritage.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-10">
            <Counter endValue={15} label="Years of Experience" suffix="+" />
            <Counter endValue={250} label="Dishes Mastered" suffix="+" delay={200} />
            <Counter endValue={5000} label="Happy Customers" suffix="+" delay={400} />
            <Counter endValue={5} label="Awards Won" delay={600} />
          </div>
        </div>
      </div>
    </section>
  );
});

OurStory.displayName = 'OurStory';
export default OurStory;