import React, { useState } from "react";
import { API } from "../api";

export default function AddProduct() {
  const [form, setForm] = useState({
    name: "",
    sku: "",
    stock: "",
    price: ""
  });

  const handleSubmit = async () => {
    await fetch(API + "/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    alert("Product Added!");
  };

  return (
    <div>
      <h2>Add Product</h2>
      <input placeholder="Name" onChange={(e)=>setForm({...form, name:e.target.value})}/>
      <input placeholder="SKU" onChange={(e)=>setForm({...form, sku:e.target.value})}/>
      <input placeholder="Stock" onChange={(e)=>setForm({...form, stock:e.target.value})}/>
      <input placeholder="Price" onChange={(e)=>setForm({...form, price:e.target.value})}/>
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}