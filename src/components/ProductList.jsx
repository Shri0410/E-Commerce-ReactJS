import React, { useState } from "react";

function ProductList({ filt, addToCart }) {
  const [searchTerm, setSearchTerm] = useState(""); // State to store search term

  // Filter the products based on the search term
  const filteredProducts = filt.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        {/* Search input */}
        <input
          type="text"
          placeholder="Search product..."
          className="form-control"
          style={{ maxWidth: "300px" }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Product Grid */}
      <div className="row">
        {filteredProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          filteredProducts.map((item) => (
            <div className="col-md-4 mb-4" key={item.id}>
              <div className="card h-100">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.title}
                  style={{ height: "500px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.category}</p>
                  <p className="card-text">${item.price}</p>
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => addToCart(item)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ProductList;
