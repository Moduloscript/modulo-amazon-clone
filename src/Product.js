import React from "react";
import "./Product.css";

function Product({ title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p classname="product__price">
          <small>$</small>
          <strong>{price}</strong>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
        </p>
      </div>

      <img
        src={image}
        alt="Amazon amp img"
      />
      <button>Add to basket</button>
    </div>
  );
}

export default Product;
