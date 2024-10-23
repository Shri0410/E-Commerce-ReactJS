import React from "react";

function FilterButtons({ filtered, handleFilterToggle }) {
  return (
    <div
      className="d-flex justify-content-center mb-5 "
      style={{ boxShadow: "0px 0px 10px -4px" }}
    >
      <div className="btn-group my-4" role="group" aria-label="Basic example">
        <button
          className={`btn btn-outline-dark rounded mx-2 ${
            filtered === "all" ? "active" : ""
          }`}
          onClick={() => handleFilterToggle("all")}
        >
          All
        </button>
        <button
          className={`btn btn-outline-dark rounded mx-2 ${
            filtered === "men's clothing" ? "active" : ""
          }`}
          onClick={() => handleFilterToggle("men's clothing")}
        >
          Mens
        </button>
        <button
          className={`btn btn-outline-dark rounded mx-2 ${
            filtered === "women's clothing" ? "active" : ""
          }`}
          onClick={() => handleFilterToggle("women's clothing")}
        >
          Womens
        </button>
        <button
          className={`btn btn-outline-dark rounded mx-2 ${
            filtered === "electronics" ? "active" : ""
          }`}
          onClick={() => handleFilterToggle("electronics")}
        >
          Electronics
        </button>
      </div>
    </div>
  );
}

export default FilterButtons;
