import React, { useState, useCallback } from 'react';

// 1. Child component optimized with React.memo
const IncrementButton = React.memo(({ handleClick, label }) => {
  console.log(`%c 👶 Child rendered: [${label}] Button`, 'color: #00bcd4; font-weight: bold;');
  
  return (
    <button 
      onClick={handleClick} 
      style={{ padding: '10px 16px', margin: '5px', cursor: 'pointer', borderRadius: '4px', border: '1px solid #ccc', background: '#f0f0f0' }}
    >
      Increment {label}
    </button>
  );
});

IncrementButton.displayName = 'IncrementButton';

// 2. Parent Component
export default function App() {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  // 3. Callback functions cached with useCallback
  const incrementA = useCallback(() => {
    setCountA((prev) => prev + 1);
  }, [countA]);

  const incrementB = useCallback(() => {
    setCountB((prev) => prev + 1);
  }, [countB]);

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', maxWidth: '450px', margin: '20px auto', borderRadius: '8px', border: '1px solid #ccc', textAlign: 'center' }}>
      <h1>Task 4: Optimized Counter</h1>

      <div style={{ display: 'flex', justifyContent: 'space-around', margin: '30px 0' }}>
        <div>
          <h3>Counter A: <span style={{ color: '#0070f3' }}>{countA}</span></h3>
          <IncrementButton handleClick={incrementA} label="A" />
        </div>

        <div>
          <h3>Counter B: <span style={{ color: '#ff007f' }}>{countB}</span></h3>
          <IncrementButton handleClick={incrementB} label="B" />
        </div>
      </div>
    </div>
  );
}
