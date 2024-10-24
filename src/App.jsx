// src/App.jsx

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Cart from "./components/Cart";
import FilterButtons from "./components/FilterButtons";
import ProductList from "./components/ProductList";
import CartPage from "./components/CartPage"; // Import CartPage component

function App() {
  const [state, setState] = useState([]);
  const [filtered, setFiltered] = useState("all");
  const [cart, setCart] = useState([]); // State to store cart items

  const filt =
    filtered === "all"
      ? state
      : state.filter((item) => item.category === filtered);

  useEffect(() => {
    async function getData() {
      const res = await axios.get("https://fakestoreapi.com/products");
      setState(res.data);
    }

    getData();
  }, []);

  // Toggle button logic for filtering categories
  const handleFilterToggle = (category) => {
    setFiltered((prevFilter) => (prevFilter === category ? "all" : category));
  };

  // Add item to cart
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]); // Add selected item to cart
  };

  return (
    <Router>
      <div className="container my-4">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FilterButtons
                  filtered={filtered}
                  handleFilterToggle={handleFilterToggle}
                />
                <ProductList filt={filt} addToCart={addToCart} />
              </>
            }
          />
          <Route
            path="/cart"
            element={<CartPage cart={cart} setCart={setCart} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
