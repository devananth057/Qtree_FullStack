import React from "react";

const ProductCard = ({ product, cart, setCart }) => {
  return (
    <div className="card">
      <img
        src={product.image}
        className="card-img-top"
        alt={product.title}
      />

      <div className="card-body">
        <h5>{product.title}</h5>
        <p>{product.description}</p>
        <h6>₹{product.price}</h6>

        <button
          className="btn btn-primary"
          onClick={() => setCart([...cart, product])}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;