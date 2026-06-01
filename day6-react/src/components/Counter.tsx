// ============================================
// Day 6 — Counter.tsx
// Demonstrates: useState
// ============================================

import { useState } from "react";

function Counter() {
  // useState — stores a value, triggers re-render on change
  const [count, setCount] = useState<number>(0);
  const [step, setStep] = useState<number>(1);

  const increment = () => setCount((prev) => prev + step);
  const decrement = () => setCount((prev) => prev - step);
  const reset = () => setCount(0);

  return (
    <div className="card">
      <h2>Counter — useState</h2>
      <p className="description">
        Every time you click, React re-renders the component with the new value.
      </p>

      <div className="counter-display">{count}</div>

      <div className="counter-controls">
        <button onClick={decrement} className="btn btn-red">
          − {step}
        </button>
        <button onClick={reset} className="btn btn-grey">
          Reset
        </button>
        <button onClick={increment} className="btn btn-green">
          + {step}
        </button>
      </div>

      <div className="step-control">
        <label>Step size: {step}</label>
        <input
          type="range"
          min={1}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
      </div>
    </div>
  );
}

export default Counter;
