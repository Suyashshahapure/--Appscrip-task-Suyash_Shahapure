"use client";
import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard.jsx";
import { data } from "../../Assets/data/data.js";
import { API_data } from "@/app/Assets/data/Api.js";
import "./ProductPage.css";

const ProductPage = () => {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [likedProducts, setLikedProducts] = useState({});

  // Set productsData directly from API_data
  const productsData = API_data.slice(0, 10);

  console.log(productsData);

  const handleFilterClick = () => {
    setFilterOpen((prev) => !prev);
  };

  const handleDropdownClick = (id) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleLikeClick = (id) => {
    setLikedProducts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <main className="product-page">
      <div className="filter-sort-bar">
        <div className="items-filter-container">
          <p className="items-count">10 ITEMS</p> {/* Updated count to 10 */}
          <button
            onClick={handleFilterClick}
            aria-expanded={isFilterOpen}
            aria-controls="filter-options"
            className="filter-button"
          >
            {isFilterOpen ? "< HIDE FILTER" : "> SHOW FILTER"}
          </button>
        </div>
        <select name="sort-options" id="sort-options" className="sort-select">
          <option value="">RECOMMENDED</option>
          <option value="">NEWEST FIRST</option>
          <option value="">POPULAR</option>
          <option value="">PRICE: HIGH TO LOW</option>
          <option value="">PRICE: LOW TO HIGH</option>
        </select>
      </div>
      <hr className="single-hr" />
      <div
        className={`filter-product-section ${
          isFilterOpen ? "filter-open" : ""
        }`}
      >
        <div
          id="filter-options"
          className={`filter-options ${isFilterOpen ? "visible" : ""}`}
        >
          <label htmlFor="">
            <input type="checkbox" name="" id="" />
            CUSTOMIZABLE
          </label>
          {data.map((item) => (
            <div key={item.id} className="filter-option">
              <hr />
              <div>
                <button
                  onClick={() => handleDropdownClick(item.id)}
                  className="dropdown-button"
                >
                  <div className="Item-btn">
                    {item.Btn}{" "}
                    <span
                      className={`dropdown-arrow ${
                        openDropdowns[item.id] ? "open" : ""
                      }`}
                    >
                      v
                    </span>
                  </div>

                  <div>
                    <span className="all-span">All</span>
                  </div>
                </button>
                {openDropdowns[item.id] && (
                  <div className="dropdown-content">
                    <button className="btn-2">{item.btn2}</button>
                    <br />
                    {item.category.map((categoryItem, index) => (
                      <label key={index} className="category-label">
                        <input
                          type="checkbox"
                          name={`checkbox-${item.id}-${index}`}
                          value={categoryItem.toLowerCase().replace(/ /g, "-")}
                        />{" "}
                        {categoryItem.toUpperCase()}
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="product-grid">
          {productsData.map((item) => (
            <ProductCard
              key={item.id}
              image={item.images[1] || item.images[0]} // Assuming you want to use the first image from the array
              name={item.title}
              description={
                item.description.length > 10
                  ? `${item.description.slice(0, 10)}...`
                  : item.description
              }
              onLike={() => handleLikeClick(item.id)}
              isLiked={likedProducts[item.id]}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
