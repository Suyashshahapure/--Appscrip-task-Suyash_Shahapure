"use client";
import React, { useState, useEffect } from "react";

const ProductPage = () => {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [productData, setProductData] = useState([]);
  const handleFilterClick = () => {
    setFilterOpen((prev) => !prev);
  };

  return (
    <main>
      <hr />
      <div>
        <p>3425 ITEMS</p>
        <button onClick={handleFilterClick}>{`< HIDE FILTER`}</button>
        <select name="" id="">
          <option value="">RECOMMENDED</option>
          <option value="">NEWEST FIRST</option>
          <option value="">POPULAR</option>
          <option value="">PRICE : HIGH TO LOW</option>
          <option value="">PRICE : LOW TO HIGH</option>
        </select>
      </div>
      <div>
        <div>
          {isFilterOpen && (
            <div>
              {/* Your content here */}
              <p>Filter options go here</p>
              {/* Example content */}
            </div>
          )}
        </div>
        <div></div>
      </div>
    </main>
  );
};

export default ProductPage;
