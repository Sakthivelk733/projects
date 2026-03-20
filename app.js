import React from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import Orders from "./components/Orders";

function App() {
  return (
    <>
      <Navbar />
      <ProductList />
      <AddProduct />
      <Orders />
    </>
  );
}

export default App;