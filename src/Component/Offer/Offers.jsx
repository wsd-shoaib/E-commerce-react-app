import React from "react";
import "./Offers.css";

const Offers = () => {
  return (
    <div className="Offers-area">
      <div className="Offers">
        <div className="offer-left ">
          <h1>Exclusive!</h1>
          <h1>Offers For You at 30% Off</h1>
          <p>ONLY ON BEST SELLERS PRODUCTS</p>
          <button className="btn">Check Now</button>
        </div>
        <div className="offer-right">
          <img src={"assets/exclusive.png"} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Offers;
