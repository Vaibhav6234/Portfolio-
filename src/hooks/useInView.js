import { useEffect, useRef, useState } from 'react';

/**
 * A simple Intersection Observer hook that triggers once when element enters viewport.
 * @param {number} threshold - Visibility fraction (0–1) to trigger inView
 */
export const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // Only trigger once
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
};
