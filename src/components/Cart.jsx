import React from "react";
import { useNavigate } from "react-router-dom";

function Cart({ cart = [] }) {
  // Calculate the total number of items in the cart (with default value as empty array)
  const totalItems = cart.length;

  // Get the navigate function
  const navigate = useNavigate();

  return (
    <div className="ms-auto d-flex align-items-center">
      <h3 onClick={() => navigate("/cart")} style={{ cursor: "pointer" }}>
        <i className="fas fa-shopping-cart"></i> ({totalItems})
      </h3>
    </div>
  );
}

export default Cart;
