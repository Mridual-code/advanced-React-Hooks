import { useEffect, useRef } from 'react';

export default function App() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    console.log("Direct DOM Node Reference:", inputRef.current);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted Text: ${inputRef.current.value}`);
  };

  return (
    <div style={{ 
      padding: '40px 20px', 
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif', 
      maxWidth: '450px', 
      margin: '60px auto 0 auto',
      textAlign: 'center',
      boxSizing: 'border-box'
    }}>
      {/* Added explicit line-height and margin to completely fix the overlap */}
      <h1 style={{ 
        fontSize: '2.5rem', 
        lineHeight: '1.2', 
        margin: '0 0 16px 0', 
        color: '#ffffff',
        fontWeight: 'bold'
      }}>
        Task 2: Auto Focus Input
      </h1>
      
      <p style={{ 
        color: '#aaa', 
        fontSize: '15px', 
        lineHeight: '1.5',
        margin: '0 0 32px 0' 
      }}>
        The input field below automatically gains focus as soon as the component loads.
      </p>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <input 
          ref={inputRef} 
          type="text" 
          placeholder="Type something here..." 
          style={{ 
            padding: '12px 16px', 
            fontSize: '16px', 
            borderRadius: '6px', 
            border: '1px solid #444', 
            backgroundColor: '#222',
            color: '#fff',
            outline: 'none',
            boxSizing: 'border-box'
          }}
        />
        <button 
          type="submit" 
          style={{ 
            padding: '12px', 
            cursor: 'pointer', 
            background: '#0070f3', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '6px',
            fontSize: '16px',
            fontWeight: '6px'
          }}
        >
          Submit Form
        </button>
      </form>
    </div>
  );
}
