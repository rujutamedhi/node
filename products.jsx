import React, { useState, useEffect } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from the backend
    fetch('/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      {products.length > 0 ? (
        products.map((product) => (
          <div
            key={product.id}
            style={{
              border: '1px solid #ccc',
              padding: '10px',
              marginBottom: '20px',
              textAlign: 'center',
            }}
          >
            <h2>{product.name}</h2>
            <img
              src={product.image}
              alt={product.name}
              style={{ maxWidth: '300px' }}
            />
          </div>
        ))
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
};

export default Products;
