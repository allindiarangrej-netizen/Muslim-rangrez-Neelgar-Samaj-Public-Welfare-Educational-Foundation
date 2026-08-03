import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  value: number | string;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  decimals?: number;
  once?: boolean;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 1600,
  prefix = '',
  suffix = '',
  className = '',
  decimals = 0,
  once = true
}) => {
  const [displayValue, setDisplayValue] = useState<number>(0);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const ref = useRef<HTMLSpanElement>(null);

  // Parse input numeric value and suffix if passed inside string
  let numericTarget = 0;
  let parsedSuffix = suffix;
  let parsedPrefix = prefix;

  if (typeof value === 'number') {
    numericTarget = value;
  } else if (typeof value === 'string') {
    // Check if string contains + or % or K or M or ₹
    const cleaned = value.trim();
    if (cleaned.startsWith('₹') && !parsedPrefix) parsedPrefix = '₹';
    if (cleaned.endsWith('+') && !parsedSuffix) parsedSuffix = '+';
    if (cleaned.endsWith('%') && !parsedSuffix) parsedSuffix = '%';

    // Remove non-numeric characters except decimal
    const rawNumber = cleaned.replace(/[^0-9.]/g, '');
    numericTarget = parseFloat(rawNumber) || 0;
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (once && hasAnimated) return;

          setHasAnimated(true);
          let startTime: number | null = null;
          const startVal = 0;

          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out cubic function for smooth natural deceleration
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            const current = startVal + (numericTarget - startVal) * easeOutCubic;

            setDisplayValue(current);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(numericTarget);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [numericTarget, duration, once, hasAnimated]);

  // Format value with commas
  const formattedNumber = decimals > 0
    ? displayValue.toFixed(decimals)
    : Math.floor(displayValue).toLocaleString();

  return (
    <span ref={ref} className={`inline-block font-mono tracking-tight ${className}`}>
      {parsedPrefix}
      {formattedNumber}
      {parsedSuffix}
    </span>
  );
};

export default AnimatedCounter;
