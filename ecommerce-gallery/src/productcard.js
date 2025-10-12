import React from "react";

const ProductCard = ({ name, price, image }) => {
  return (
    <div className="card product-card shadow-sm">
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body text-center">
        <h5 className="card-title">{name}</h5>
        <p className="card-text text-success fw-bold">{price}</p>
        <button className="btn btn-primary btn-sm">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
