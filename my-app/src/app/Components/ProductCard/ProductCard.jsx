import React from 'react';
import './ProductCard.css';

const ProductCard = ({ image, name, description, onLike }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-content">
        <h2 className="card-name">{name}</h2>
        <p className="card-description">{description}</p>
        <button onClick={onLike} className="card-like-button">Like</button>
      </div>
    </div>
  );
};

export default ProductCard;
