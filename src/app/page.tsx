"use client";
import { useRef, useState } from "react";

// Optimized Fibonacci Function with Memoization
const calculateFibonacci = (num: number, memo: Record<number, number> = {}): number => {
  if (num <= 1) return num;
  if (num in memo) return memo[num];

  memo[num] = calculateFibonacci(num - 1, memo) + calculateFibonacci(num - 2, memo);
  return memo[num];
};

export default function Page() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fibValue, setFibValue] = useState<number | null>(null);

  const handleCalculate = () => {
    const num = inputRef.current ? parseInt(inputRef.current.value, 10) : 0;
    setFibValue(calculateFibonacci(num));
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold">Fibonacci Calculator</h1>
      <input ref={inputRef} type="number" className="border p-2" placeholder="Enter a number" />
      <button onClick={handleCalculate} className="px-4 py-2 bg-green-600 text-white rounded">
        Calculate
      </button>
      {fibValue !== null && <p>Fibonacci Result: {fibValue}</p>}
    </div>
  );
}
