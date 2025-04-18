import { FaArrowRightLong } from "react-icons/fa6";

import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="Hero">
      <section className="hero-section px-3">
        <div>
          <h1>Welcome to Shaifan Shop</h1>
          <p>Quality Products for Your Lifestyle</p>
          <div>
            <button className="hero-btn">
              <div>Latest Collection</div>
              <span>
                <FaArrowRightLong />
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
