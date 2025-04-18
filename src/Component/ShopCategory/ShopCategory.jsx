import React from "react";
import "./ShopCategory.css";
import { Link } from "react-router-dom";

const ShopCategory = () => {
  return (
    <div className="ShopCategory ">
      <div>
        <div className="category-title">
          <h1>Products Category</h1>
          <div className="hr"></div>
          <span className="text-dark">Click on Card</span>
        </div>
        <div className="card-area">
          <Link to={"/products/man"} className="card1">
            <div>
              <h2>Man's</h2>
            </div>
          </Link>
          <Link to={"/products/woman"} className="card2">
            <div>
              <h2>Woman</h2>
            </div>
          </Link>
          <Link to={"/products/electronics"} className="card3">
            <div>
              <h2>Electronics</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
