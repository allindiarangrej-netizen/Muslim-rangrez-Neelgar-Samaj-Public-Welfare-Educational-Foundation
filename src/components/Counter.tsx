import React from 'react';
import { useCountUp } from '../hooks/useCountUp';

interface CounterProps {
  value: string | number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  showVerified?: boolean;
}

export default function Counter({ 
  value, 
  duration = 1.8, 
  prefix = '', 
  suffix = '', 
  className = '',
  showVerified = false
}: CounterProps) {
  let numericValue = 0;
  let parsedPrefix = prefix;
  let parsedSuffix = suffix;

  if (typeof value === 'number') {
    numericValue = value;
  } else if (typeof value === 'string') {
    const cleaned = value.trim();
    if (cleaned.startsWith('₹') && !parsedPrefix) parsedPrefix = '₹';
    if (cleaned.endsWith('+') && !parsedSuffix) parsedSuffix = '+';
    if (cleaned.endsWith('%') && !parsedSuffix) parsedSuffix = '%';

    const rawNum = cleaned.replace(/[^0-9.]/g, '');
    numericValue = parseFloat(rawNum) || 0;
  }

  const { ref } = useCountUp(numericValue, duration);

  return (
    <span className={`inline-flex items-center gap-1 font-serif font-extrabold ${className}`}>
      {parsedPrefix && <span>{parsedPrefix}</span>}
      <span ref={ref}>0</span>
      {parsedSuffix && <span>{parsedSuffix}</span>}
      {showVerified && (
        <span className="ml-1.5 inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-sans font-bold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
          ✓ Verified
        </span>
      )}
    </span>
  );
}

