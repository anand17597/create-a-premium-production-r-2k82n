import { useEffect, useRef, useState } from 'react';

const useScrollAnimation = <T extends HTMLElement = HTMLDivElement>(options?: IntersectionObserverInit) => {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2, // Trigger when 20% of the element is visible
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Optionally unobserve after first intersection
        // observer.unobserve(entry.target);
      } else {
        // Optionally reset visibility when element scrolls out of view
        // setIsVisible(false);
      }
    }, { ...defaultOptions, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return { ref, isVisible };
};

export default useScrollAnimation;