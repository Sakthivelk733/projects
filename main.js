import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/inventory")
      .then(res => res.json())
      .then(data => setItems(data));

    fetch("http://localhost:8080/orders")
      .then(res => res.json())
      .then(data => setOrders(data));
  }, []);

  return (
    <div className="container">
      <h1>Smart Inventory & Order Management System</h1>

      <h2>📦 Inventory</h2>
      {items.map(i => (
        <div className="card">
          <p><b>Name:</b> {i.name}</p>
          <p><b>Stock:</b> {i.stock}</p>
        </div>
      ))}

      <h2>🧾 Orders</h2>
      {orders.map(o => (
        <div className="card">
          <p><b>Order ID:</b> {o.id}</p>
          <p><b>Item:</b> {o.item}</p>
          <p><b>Qty:</b> {o.qty}</p>
        </div>
      ))}
    </div>
  );
}

export default App;