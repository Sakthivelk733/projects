import React, { useEffect, useState } from "react";
import { API } from "../api";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(API + "/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h2>Products List</h2>
      <table border="1" width="80%">
        <thead>
          <tr>
            <th>Name</th>
            <th>SKU</th>
            <th>Stock</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.sku}</td>
              <td>{p.stock}</td>
              <td>{p.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;