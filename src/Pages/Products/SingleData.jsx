import React, { useState, useEffect } from "react";
import "./SingleData.css";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContextProvider/ShopContextProvider";
import { useLoaderData } from "react-router-dom";
import { IoIosStarOutline } from "react-icons/io";
import { FaStar } from "react-icons/fa";

const SingleData = () => {
  const Item = useLoaderData();
  const { image, description, title, oldPrice, price, brand, id } = Item;

  const { addToCart } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState(null);

  // ✅ একবার স্ক্রল-টু-টপ করার জন্য useEffect
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart(id, selectedSize);
    } else {
      alert("Please select a size before adding to cart.");
    }
  };

  return (
    <div className="single-data">
      <div>
        <div className="Products-Items">
          <div>
            <div className="img-area">
              <img src={image} alt="" />
            </div>
            <div className="price">
              <p>Old Price: ${oldPrice}</p>
              <p>Price: ${price}</p>
            </div>
            <div className="size-area my-3">
              <p>Select Size:</p>
              <span className="size">
                {["S", "M", "XL", "XXL"].map((size) => (
                  <button
                    key={size}
                    className={selectedSize === size ? "active-size" : ""}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </span>
            </div>
            <div className="add-card">
              <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
          </div>
          <div className="title-des">
            <div>
              <p className="title">{title}</p>
              <p className="star-icon">
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <IoIosStarOutline />
                </span>
                <span>(52)</span>
              </p>
              <p>Brand: {brand}</p>
            </div>
            <div>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleData;
