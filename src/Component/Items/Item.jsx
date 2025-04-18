import React, { useEffect, useState } from "react";
import TopItem from "../TopItem/TopItem";
import "./Item.css";

const Item = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("/Item.json")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);
  return (
    <div className="Item-area">
      <div className="mb-5">
        <h1>Best selling products</h1>
        <div className="hr"></div>
      </div>
      <div className="items">
        {item.map((item) => (
          <TopItem BestItem={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Item;
