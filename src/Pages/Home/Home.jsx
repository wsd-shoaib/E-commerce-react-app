import React from "react";
import Hero from "../../Component/Hero/Hero";
import Item from "../../Component/Items/Item";
import Offers from "../../Component/Offer/Offers";
import NewsLetter from "../../Component/NewsLetter/NewsLetter";

const Home = () => {
  return (
    <div>
      <Hero />
      <Item />
      <Offers />
      <NewsLetter />
    </div>
  );
};

export default Home;
