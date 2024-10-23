import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Cart({ cart }) {
  // Calculate the total number of items in the cart
  const totalItems = cart.length;

  // Get the navigate function
  const navigate = useNavigate();

  return (
    <div className="cart-section mt-5 d-flex justify-content-end">
      <h3 onClick={() => navigate("/cart")} style={{ cursor: "pointer" }}>
        <i className="fas fa-shopping-cart"></i> ({totalItems})
      </h3>
    </div>
  );
}

export default Cart;
