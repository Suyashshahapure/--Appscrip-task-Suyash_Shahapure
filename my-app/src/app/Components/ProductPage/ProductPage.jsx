"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard.jsx";
import { data } from "../../Assets/data/data.js";
import "./ProductPage.css";

const ProductPage = () => {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [productsData, setProductsData] = useState([]);
  const [likedProducts, setLikedProducts] = useState({});

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProductsData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

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
      [id]: !prev[id], // Toggle the like state for the product
    }));
  };

  return (
    <main className="product-page">
      <hr />
      <div className="filter-sort-bar">
        <p>3425 ITEMS</p>
        <button
          onClick={handleFilterClick}
          aria-expanded={isFilterOpen}
          aria-controls="filter-options"
          className="filter-button"
        >
          {isFilterOpen ? "HIDE FILTER" : "SHOW FILTER"}
        </button>
        <select name="sort-options" id="sort-options" className="sort-select">
          <option value="">RECOMMENDED</option>
          <option value="">NEWEST FIRST</option>
          <option value="">POPULAR</option>
          <option value="">PRICE: HIGH TO LOW</option>
          <option value="">PRICE: LOW TO HIGH</option>
        </select>
      </div>
      <div className="filter-product-section">
        <div id="filter-options" className="filter-options">
          {isFilterOpen && (
            <div className="filter-content">
              <div className="filter-option">
                <input type="checkbox" id="customizable" />
                <label htmlFor="customizable">CUSTOMIZABLE</label>
              </div>
              {data.map((item) => (
                <div key={item.id} className="filter-option">
                  <hr />
                  <div>
                    <button
                      onClick={() => handleDropdownClick(item.id)}
                      className="dropdown-button"
                    >
                      {item.Btn}
                    </button>
                    {openDropdowns[item.id] && (
                      <div className="dropdown-content">
                        <p>{item.p}</p>
                        <button>{item.btn2}</button>
                        <br />
                        {item.category.map((categoryItem, index) => (
                          <label key={index} className="category-label">
                            <input
                              type="checkbox"
                              name={`checkbox-${item.id}-${index}`}
                              value={categoryItem
                                .toLowerCase()
                                .replace(/ /g, "-")}
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
          )}
        </div>
        <div className="product-grid">
          {productsData.map((item) => (
            <ProductCard
              key={item.id}
              image={item.image}
              name={item.title}
              description={item.description}
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
