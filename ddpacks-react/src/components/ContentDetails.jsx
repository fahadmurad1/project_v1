import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";
import "../Styles/CSS/contentDetails.css";

const ContentDetails = () => {
  const { sku } = useParams(); // Get sku_code from URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    api.get(`/api/skus/${sku}/`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error("Failed to fetch product:", err));
  }, [sku]);

  if (!product) return <p>Loading...</p>;

  return (
    <div id="containerProduct">
      <img src={`/images/${product.main_image}`} alt={product.name} />
      <div className="details">
        <h1>{product.name}</h1>
        <p><strong>Description:</strong> {product.description}</p>
        <p><strong>Capacity:</strong> {product.capacity}</p>
        <p><strong>Price:</strong> ₹{product.price}</p>
        <p><strong>Case Config:</strong> {product.case_config}</p>
        <p><strong>Units/Packet:</strong> {product.units_per_packet}</p>
        <p><strong>Unit of Measurement:</strong> {product.unit_of_measurement}</p>
      </div>
    </div>
  );
};

export default ContentDetails;
