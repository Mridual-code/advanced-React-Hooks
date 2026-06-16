import React, { useMemo } from 'react';

// Hardcoded items simulating a product catalog
const PRODUCTS = [
  { id: 1, name: 'Wireless Mechanical Keyboard', category: 'Electronics' },
  { id: 2, name: 'Ergonomic Office Chair', category: 'Furniture' },
  { id: 3, name: 'UltraWide Gaming Monitor', category: 'Electronics' },
  { id: 4, name: 'Noise-Canceling Headphones', category: 'Electronics' },
  { id: 5, name: 'Bamboo Standing Desk', category: 'Furniture' },
];

export const ProductList = React.memo(({ query }) => {
  console.log("%c 🧠 ProductList Child Component Rendered", "color: #9c27b0; font-weight: bold;");

  // useMemo caches the filtered results
  const filteredProducts = useMemo(() => {
    console.log("⚡ useMemo: Filtering product catalog list...");
    if (!query) return PRODUCTS;
    return PRODUCTS.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]); // Only recalculates if the search text query shifts

  return (
    <div style={{ marginTop: '15px' }}>
      {filteredProducts.length === 0 ? (
        <p style={{ color: '#888' }}>No matching products found.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {filteredProducts.map(product => (
            <li key={product.id} style={{ padding: '10px', borderBottom: '1px solid #444', display: 'flex', justifyContent: 'space-between' }}>
              <span>{product.name}</span>
              <span style={{ fontSize: '12px', background: '#333', padding: '2px 8px', borderRadius: '12px', color: '#aaa' }}>{product.category}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

ProductList.displayName = 'ProductList';
