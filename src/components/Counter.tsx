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
  const numericValue = typeof value === 'number' ? value : parseInt(value.replace(/[^0-9]/g, ''), 10) || 0;
  const { ref } = useCountUp(numericValue, duration);

  return (
    <span className={`inline-flex items-center gap-1 font-serif font-extrabold ${className}`}>
      {prefix && <span>{prefix}</span>}
      <span ref={ref}>0</span>
      {suffix && <span>{suffix}</span>}
      {showVerified && (
        <span className="ml-1.5 inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-sans font-bold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
          ✓ Verified
        </span>
      )}
    </span>
  );
}
