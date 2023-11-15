import React from 'react';


function NumberInput({ label, value, onChange, min, max }) {
  // Ensure that the value is always within the provided range
  const boundedValue = Math.max(Math.min(value, max), min);

  return (
    <div>
      {/* Use the label prop as a unique identifier for htmlFor and id */}
      <label htmlFor={`input-${label}`}>{label}: </label>
      <button 
        type="button" 
        aria-label={`Decrease ${label}`} 
        onClick={() => onChange(Math.max(boundedValue - 1, min))}
      >
        -
      </button>
      <input
        id={`input-${label}`}
        type="number"
        value={boundedValue}
        onChange={(e) => onChange(Number(e.target.value))}
        min={min}
        max={max}
      />
      <button 
        type="button" 
        aria-label={`Increase ${label}`} 
        onClick={() => onChange(Math.min(boundedValue + 1, max))}
      >
        +
      </button>
    </div>
  );
}

export default NumberInput;


