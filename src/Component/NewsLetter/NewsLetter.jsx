import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="Newsletter-area ">
      <div>
        <div>
          <h1>Get Exclusive Offers On Your Email</h1>
          <p>Subscribe to Our Newsletter on your stay Updated</p>
        </div>
        <div className="subscribe my-4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email id"
          />
          <button className="sub-btn">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
