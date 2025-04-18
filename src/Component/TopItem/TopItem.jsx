import React, { useContext } from "react";
import "./TopItem.css";
import { Link } from "react-router-dom";

const TopItem = ({ BestItem }) => {
  const { image, title, price } = BestItem;

  return (
    <div className="best-item text-decoration-none text-dark">
      <Link to={"/products"} className="text-decoration-none text-dark">
        <img src={image} alt="" />
        <div className="p-3">
          <p>{title}</p>
          <p>Price: ${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default TopItem;
