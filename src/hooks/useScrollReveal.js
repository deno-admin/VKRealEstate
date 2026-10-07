import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook to automatically observe and animate elements when they enter the viewport.
 * Elements with class 'reveal-on-scroll', 'reveal-up', 'reveal-fade', 'reveal-scale'
 * will receive the 'is-visible' class.
 */
export function useScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    // Short delay to let DOM finish rendering after route transitions
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll(
        '.reveal-on-scroll, .reveal-up, .reveal-fade, .reveal-scale, .reveal-stagger'
      );

      if (!elements.length) return;

      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              // Unobserve once revealed for smooth one-time entrance
              obs.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.12,
          rootMargin: '0px 0px -40px 0px'
        }
      );

      elements.forEach((el) => {
        // If already in viewport on load, reveal immediately
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 40) {
          el.classList.add('is-visible');
        } else {
          observer.observe(el);
        }
      });

      return () => {
        observer.disconnect();
      };
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);
}
