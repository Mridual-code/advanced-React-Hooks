import { useState, useRef, useEffect, useCallback, useContext } from 'react';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import { ProductList } from './ProductList';

function Dashboard() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [todos, setTodos] = useState(['Review React Hook Docs', 'Record UI optimization video']);
  const [todoInput, setTodoInput] = useState('');

  // 1. useRef setup to auto-focus search field on page mount
  const searchInputRef = useRef(null);

  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  // 2. useCallback to anchor event pointers, protecting structural render cascades
  const handleAddTodo = useCallback((e) => {
    e.preventDefault();
    if (!todoInput.trim()) return;
    setTodos((prev) => [...prev, todoInput.trim()]);
    setTodoInput('');
  }, [todoInput]);

  const handleRemoveTodo = useCallback((indexToRemove) => {
    setTodos((prev) => prev.filter((_, index) => index !== indexToRemove));
  }, []); // Empty dependencies because state updates via functional callback format

  // Theme-driven UI styles object configuration
  const themeStyles = {
    backgroundColor: darkMode ? '#121212' : '#f8f9fa',
    color: darkMode ? '#ffffff' : '#212529',
    minHeight: '100vh',
    padding: '30px 20px',
    fontFamily: 'system-ui, sans-serif',
    transition: 'all 0.25s ease'
  };

  const blockCardStyle = {
    background: darkMode ? '#1e1e1e' : '#ffffff',
    border: `1px solid ${darkMode ? '#333' : '#dee2e6'}`,
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
  };

  const inputStyle = {
    width: '100%',
    padding: '10px 14px',
    borderRadius: '6px',
    border: `1px solid ${darkMode ? '#444' : '#ccc'}`,
    backgroundColor: darkMode ? '#2d2d2d' : '#fff',
    color: darkMode ? '#fff' : '#000',
    boxSizing: 'border-box',
    outline: 'none',
    fontSize: '14px'
  };

  return (
    <div style={themeStyles}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        
        {/* Header Module */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <h1 style={{ margin: 0, fontSize: '26px' }}>React Hooks Dashboard</h1>
          <button 
            onClick={toggleTheme} 
            style={{ padding: '8px 16px', background: '#0070f3', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </header>

        {/* Module 1: User Profile Section (Reading from context layout state properties) */}
        <section style={blockCardStyle}>
          <h2 style={{ marginTop: 0, fontSize: '18px', color: '#0070f3' }}>User Profile</h2>
          <p style={{ margin: '4px 0' }}><strong>Operator:</strong> Admin Engineer</p>
          <p style={{ margin: '4px 0', fontSize: '14px', color: '#888' }}>Environment Config: {darkMode ? 'Dark-Spectrum UI' : 'Light-Spectrum UI'}</p>
        </section>

        {/* Module 2: Search Optimization List (useRef + useMemo) */}
        <section style={blockCardStyle}>
          <h2 style={{ marginTop: 0, fontSize: '18px', color: '#9c27b0' }}>Searchable Catalog</h2>
          <input 
            ref={searchInputRef} // Attach direct DOM focal point
            type="text" 
            placeholder="Search items (Auto-focuses on load)..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={inputStyle}
          />
          <ProductList query={searchQuery} />
        </section>

        {/* Module 3: Todo Task Management (useCallback optimizations) */}
        <section style={blockCardStyle}>
          <h2 style={{ marginTop: 0, fontSize: '18px', color: '#ff5722' }}>Todo Operations</h2>
          <form onSubmit={handleAddTodo} style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
            <input 
              type="text" 
              placeholder="Add new automation task..." 
              value={todoInput}
              onChange={(e) => setTodoInput(e.target.value)}
              style={inputStyle}
            />
            <button type="submit" style={{ padding: '10px 20px', background: '#ff5722', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
              Add
            </button>
          </form>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {todos.map((todo, idx) => (
              <li key={idx} style={{ padding: '10px 0', borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '15px' }}>{todo}</span>
                <button 
                  onClick={() => handleRemoveTodo(idx)} 
                  style={{ background: 'transparent', color: '#ff4d4d', border: 'none', cursor: 'pointer', fontSize: '13px' }}
                >
                  ✕ Remove
                </button>
              </li>
            ))}
          </ul>
        </section>

      </div>
    </div>
  );
}

// 4. Wrap everything inside our Custom Provider to build our application execution environment
export default function App() {
  return (
    <ThemeProvider>
      <Dashboard />
    </ThemeProvider>
  );
}
