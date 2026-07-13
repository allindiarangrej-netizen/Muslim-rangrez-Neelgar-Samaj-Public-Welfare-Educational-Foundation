import React from 'react';
import { useCountUp } from '../hooks/useCountUp';

interface CounterProps {
  value: string;
}

export default function Counter({ value }: CounterProps) {
  const numericValue = parseInt(value, 10) || 0;
  const { ref } = useCountUp(numericValue, 2.5);

  return <span ref={ref}>0</span>;
}

