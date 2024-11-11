// src/components/Counter.jsx
import React, { useState } from 'react';

function Counter() {
  // Initialize the count state with useState
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => setCount(count + 1);

  // Function to decrement the count
  const decrement = () => setCount(count - 1);

  // Function to reset the count
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Simple Counter Application</h2>
      
      {/* Display the current count */}
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Count: {count}</p>
      
      {/* Increment button */}
      <button
        onClick={increment}
        style={{
          margin: '5px',
          padding: '10px 20px',
          backgroundColor: 'green',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Increment
      </button>
      
      {/* Decrement button */}
      <button
        onClick={decrement}
        style={{
          margin: '5px',
          padding: '10px 20px',
          backgroundColor: 'red',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Decrement
      </button>
      
      {/* Reset button */}
      <button
        onClick={reset}
        style={{
          margin: '5px',
          padding: '10px 20px',
          backgroundColor: 'blue',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
