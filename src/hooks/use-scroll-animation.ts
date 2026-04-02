import { useState, useEffect, useRef } from 'react';

const useScrollAnimation = <T extends HTMLElement = HTMLDivElement>(options?: IntersectionObserverInit) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Optionally, unobserve after it becomes visible if animation should only play once
        // observer.unobserve(entry.target);
      } else {
        // Optionally, reset visibility if animation should replay on scroll out/in
        setIsVisible(false);
      }
    }, {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.1, // Trigger when 10% of the element is visible
      ...options,
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return { ref, isVisible };
};

export default useScrollAnimation;