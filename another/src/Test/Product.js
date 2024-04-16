import React, { useState, useEffect } from "react";
import productsData from "../Test/ProductAPI.json"; // Importing the JSON file
import axios from "axios";
import '../Test/Product.css';

function Product() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setProducts(productsData.products);
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div>
    <h1>Product List</h1>
    <input
      type="text"
      placeholder="Search by product name"
      value={searchTerm}
      onChange={handleSearchChange}
    />
    <div className="card-container">
      {filteredProducts.map((product) => (
        <div key={product.id} className="card">
          <h2>{product.name}</h2>
          <img src={product.imageUrl} alt={product.name} />
          <p>{product.description}</p>
          <p>Price: Rs.{product.price}</p>
        </div>
      ))}
    </div>
  </div>
  );
}
export default Product;
