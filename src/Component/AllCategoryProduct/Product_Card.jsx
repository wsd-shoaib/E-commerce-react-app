import React from "react";
import { Link } from "react-router-dom";

const Product_Card = ({ Item }) => {
  const { image, title, price } = Item;
  return (
    <div className="Product_Card">
      <Link
        onClick={window.scrollTo(0, 0)}
        to={`/products/${Item.id}`}
        className="text-decoration-none text-dark"
      >
        <img src={image} alt="" />
        <div className="p-3">
          <div className="line-height">
            <p>{title}</p>
            <p>Price: ${price}</p>
          </div>
          <button className="card-btn">Add to Cart</button>
        </div>
      </Link>
    </div>
  );
};

export default Product_Card;
