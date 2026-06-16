import { useState, useMemo } from 'react';

export default function App() {
  const [number, setNumber] = useState(5);
  const [themeToggle, setThemeToggle] = useState(false);

  // 1. Heavy computation function
  const calculateFactorial = (n) => {
    if (n < 0) return 0;
    if (n === 0 || n === 1) return 1;
    
    console.log(`%c 🏃‍♂️ Calculating factorial for: ${n}...`, 'color: #ff9900; font-weight: bold;');
    
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  };

  // 2. Optimization using useMemo
  const factorialResult = useMemo(() => {
    return calculateFactorial(number);
  }, [number]);

  return (
    <div style={{ 
      padding: '40px', 
      fontFamily: 'sans-serif', 
      maxWidth: '450px', 
      margin: '20px auto',
      borderRadius: '8px',
      border: '1px solid #ccc',
      backgroundColor: themeToggle ? '#222' : '#fff',
      color: themeToggle ? '#fff' : '#000',
      transition: 'background-color 0.3s, color 0.3s'
    }}>
      <h1>Task 3: Factorial Calculator</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
          Enter a Number:
        </label>
        <input 
          type="number" 
          value={number} 
          min="0"
          max="20"
          onChange={(e) => setNumber(Number(e.target.value))} 
          style={{ padding: '8px', fontSize: '16px', width: '100%', boxSizing: 'border-box' }}
        />
      </div>

      <div style={{ background: themeToggle ? '#333' : '#f4f4f4', padding: '15px', borderRadius: '6px', margin: '20px 0' }}>
        <h3>Result:</h3>
        <p style={{ fontSize: '20px', margin: 0, wordBreak: 'break-all' }}>
          Factorial of <strong>{number}</strong> is: <span style={{ color: '#0070f3', fontWeight: 'bold' }}>{factorialResult}</span>
        </p>
      </div>

      <hr />

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <button 
          onClick={() => setThemeToggle(!themeToggle)}
          style={{ padding: '10px 16px', cursor: 'pointer', background: '#333', color: '#fff', border: 'none', borderRadius: '4px' }}
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
}
