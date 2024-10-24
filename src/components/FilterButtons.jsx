import React from "react";
import Cart from "./Cart"; // Import Cart component

function FilterButtons({ filtered, handleFilterToggle, cart }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Logo or Brand Name */}
        <a className="navbar-brand" href="/">
          ShopEasy
        </a>

        {/* Toggler/collapsible Button for Mobile View */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links and Filter Buttons */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button
                className={`btn btn-outline-dark mx-2 ${
                  filtered === "all" ? "active" : ""
                }`}
                onClick={() => handleFilterToggle("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`btn btn-outline-dark mx-2 ${
                  filtered === "men's clothing" ? "active" : ""
                }`}
                onClick={() => handleFilterToggle("men's clothing")}
              >
                Mens
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`btn btn-outline-dark mx-2 ${
                  filtered === "women's clothing" ? "active" : ""
                }`}
                onClick={() => handleFilterToggle("women's clothing")}
              >
                Womens
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`btn btn-outline-dark mx-2 ${
                  filtered === "electronics" ? "active" : ""
                }`}
                onClick={() => handleFilterToggle("electronics")}
              >
                Electronics
              </button>
            </li>
          </ul>
          {/* Cart Component on the right side */}
          <Cart cart={Cart} /> {/* Pass the actual cart array */}
        </div>
      </div>
    </nav>
  );
}

export default FilterButtons;
