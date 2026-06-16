import { useEffect, useRef } from 'react';

export default function App() {
  /* 
    1. HOW useRef WORKS:
    - useRef(initialValue) returns a mutable object with a single '.current' property.
    - Unlike useState, changing a ref's value DOES NOT trigger a component re-render.
    - When you pass a ref object to a React element as an attribute (e.g., ref={inputRef}), 
      React sets the '.current' property directly to that actual DOM node once it mounts.
  */
  const inputRef = useRef(null);

  useEffect(() => {
    /*
      2. WHY USE useEffect HERE:
      - The useEffect hook runs AFTER the component has successfully rendered to the DOM.
      - At this stage, inputRef.current points directly to the real HTML <input> element.
      - We call the native browser .focus() method on it to instantly pull focus when the page loads.
    */
    inputRef.current.focus();
    
    // Logging to see the actual HTML node being held by the ref object
    console.log("Direct DOM Node Reference:", inputRef.current);
  }, []); // Empty dependency array ensures this effect runs exactly ONCE on initial mount

  const handleSubmit = (e) => {
    e.preventDefault();
    // Accessing the element value directly from the DOM node without tracking state
    alert(`Submitted Text: ${inputRef.current.value}`);
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Task 2: Auto Focus Input</h1>
      <p style={{ color: '#666', fontSize: '14px' }}>
        The input field below automatically gains focus as soon as the component loads.
      </p>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {/* 
          3. ATTACHING THE REF:
          - By setting ref={inputRef}, we tell React to hook this specific DOM element 
            directly up to our inputRef object declared above.
        */}
        <input 
          ref={inputRef} 
          type="text" 
          placeholder="Type something here..." 
          style={{ padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: '10px', cursor: 'pointer', background: '#0070f3', color: '#fff', border: 'none', borderRadius: '4px' }}>
          Submit Form
        </button>
      </form>
    </div>
  );
}
