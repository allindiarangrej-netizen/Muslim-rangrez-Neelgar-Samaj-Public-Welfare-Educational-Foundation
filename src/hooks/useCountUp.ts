import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook using IntersectionObserver and requestAnimationFrame to count up to a target number
 * using easeOutCubic timing when the element scrolls into view.
 * 
 * @param target The target number to count up to.
 * @param duration Duration of the animation in seconds.
 * @returns An object containing a ref to be attached to the target element and current count value.
 */
export function useCountUp(target: number, duration: number = 1.8) {
  const countUpRef = useRef<HTMLSpanElement | null>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [displayValue, setDisplayValue] = useState(0);

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
        threshold: 0.15,
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

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      // Smooth easeOutCubic curve (0 -> 5 -> 12 -> 28 -> 45 -> 67 -> 82 -> 95 -> 100)
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(easeProgress * target);
      
      setDisplayValue(currentValue);

      if (countUpRef.current) {
        countUpRef.current.textContent = currentValue.toLocaleString('en-IN');
      }

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        if (countUpRef.current) {
          countUpRef.current.textContent = target.toLocaleString('en-IN');
        }
        setDisplayValue(target);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [hasStarted, target, duration]);

  return { ref: countUpRef, count: displayValue };
}
