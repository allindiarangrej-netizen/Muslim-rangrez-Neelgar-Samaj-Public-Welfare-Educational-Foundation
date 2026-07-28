import { useEffect, useRef, useState } from 'react';
import 'intersection-observer';

/**
 * Custom hook using IntersectionObserver and requestAnimationFrame to count up to a target number
 * using easeOutExpo timing when the element scrolls into view.
 * 
 * @param target The target number to count up to.
 * @param duration Duration of the animation in seconds.
 * @returns An object containing a ref to be attached to the target element.
 */
export function useCountUp(target: number, duration: number = 2.5) {
  const countUpRef = useRef<HTMLSpanElement | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    const currentElement = countUpRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    const element = countUpRef.current;
    if (!element) return;

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      // easeOutExpo easing function
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentValue = Math.floor(easeProgress * target);
      
      if (element) {
        element.textContent = currentValue.toLocaleString('en-IN');
      }
      
      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        if (element) {
          element.textContent = target.toLocaleString('en-IN');
        }
      }
    };

    animationFrameId = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [hasStarted, target, duration]);

  return { ref: countUpRef };
}
