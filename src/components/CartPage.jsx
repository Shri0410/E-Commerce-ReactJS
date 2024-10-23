import React from "react";
import { useNavigate } from "react-router-dom";

function CartPage({ cart, setCart }) {
  const navigate = useNavigate(); // Hook to navigate between pages

  // Function to remove an item from the cart
  const removeItem = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart); // Update the cart state by removing the item
  };

  // Function to navigate to the ProductList page (means home page of the site)
  const goToHome = () => {
    navigate("/"); // Navigates to the home page ("/" path)
  };

  // Calculate the total price of all items in the cart
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center">
        <h3>
          <i className="fas fa-shopping-cart"></i> Your Cart
        </h3>
        {/* Home Button */}
        <button className="btn btn-outline-primary" onClick={goToHome}>
          Home
        </button>
      </div>
      <div className="row mt-3">
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">
              <div className="card h-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">
                    <strong>Category:</strong> {item.category}
                  </p>
                  <p className="card-text">
                    <strong>Price:</strong> ${item.price}
                  </p>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Display total price only if there are items in the cart */}
      {cart.length > 0 && (
        <div className="sticky-total">
          <h4>Total: ${totalPrice.toFixed(2)}</h4>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      )}
    </div>
  );
}

export default CartPage;
