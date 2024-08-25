import React from "react";
import "./ProductCard.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

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
        <div className="card-text">
          <h3 className="card-title">{name}</h3>
          <p className="card-description">{truncateDescription(description)}</p>
        </div>
        <button onClick={onLike} className="card-like-button">
          <i className={`fa fa-heart ${isLiked ? 'liked' : ''}`}></i>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
