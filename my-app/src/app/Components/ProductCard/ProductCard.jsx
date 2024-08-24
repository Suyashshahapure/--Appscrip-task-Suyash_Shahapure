import React from "react";
import "./ProductCard.css";

const ProductCard = ({ image, name, description, onLike, isLiked }) => {
  const truncateDescription = (desc) => {
    return (
      desc.split(" ").slice(0, 10).join(" ") +
      (desc.split(" ").length > 10 ? "..." : "")
    );
  };

  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-content">
        <h2 className="card-name">{name}</h2>
        <p className="card-description">{truncateDescription(description)}</p>
        <button onClick={onLike} className="card-like-button">
          <i
            className="fa fa-heart"
            style={{ color: isLiked ? "red" : "black" }}
          ></i>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
