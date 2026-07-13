import { useEffect, useRef, useState } from 'react';
import { useCountUp as useReactCountUp } from 'react-countup';
import 'intersection-observer';

/**
 * Custom hook leveraging react-countup and intersection-observer to count up to a target number
 * using easeOutExpo timing when the element scrolls into view.
 * 
 * @param target The target number to count up to.
 * @param duration Duration of the animation in seconds.
 * @returns An object containing a ref to be attached to the target element.
 */
export function useCountUp(target: number, duration: number = 2.5) {
  const countUpRef = useRef<HTMLSpanElement | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  // easeOutExpo easing function for react-countup:
  // t: current time, b: beginning value, c: change in value, d: duration
  const easeOutExpo = (t: number, b: number, c: number, d: number): number => {
    return t === d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
  };

  const { start } = useReactCountUp({
    ref: countUpRef,
    start: 0,
    end: target,
    duration: duration,
    useEasing: true,
    easingFn: easeOutExpo,
    startOnMount: false, // Ensures counting only starts when we trigger it in viewport
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          start();
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
  }, [start, hasStarted]);

  return { ref: countUpRef };
}
