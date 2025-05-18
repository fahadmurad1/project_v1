// File: src/components/Products.jsx
import React, { useEffect, useState } from 'react';
import "../styles/CSS/products.css";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("API error:", err));
  }, []);

  const renderProductCard = (product) => (
    <div className="product-card" key={product.id}>
      <Link to={`/product/${product.id}`}>
        <img src={product.preview} alt={product.name} className="product-image" />
        <div className="product-info">
          <h3>{product.name}</h3>
          <p>{product.brand}</p>
          <h4>Rs {product.price}</h4>
        </div>
      </Link>
    </div>
  );

  return (
    <div className="products-page">
      <h2>Clothing for Men and Women</h2>
      <div className="product-section">
        {products.filter((p) => !p.isAccessory).map(renderProductCard)}
      </div>

      <h2>Accessories for Men and Women</h2>
      <div className="product-section">
        {products.filter((p) => p.isAccessory).map(renderProductCard)}
      </div>
    </div>
  );
};

export default Products;
