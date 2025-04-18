import { useContext } from "react";
import "./AllCategoryProduct.css";
import { ShopContext } from "../../Context/ShopContextProvider/ShopContextProvider";
import Product_Card from "./Product_Card";
import { RiArrowDropDownLine } from "react-icons/ri";

const AllCategoryProduct = (props) => {
  const { category, banner } = props;

  const bannerStyle = {
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
  };

  const { allproduct } = useContext(ShopContext);

  return (
    <>
      <div style={bannerStyle}>
        <div className="AllProducts">
          <h1>Shop For {category}</h1>
        </div>
      </div>
      <div className="sort-by mt-5">
        <div>
          <p>
            <span className="showing">Showing 1-12</span> Out of 20 Products
          </p>
        </div>
        <div className="sort-by-point">
          Sort by
          <span>
            <RiArrowDropDownLine className="drop-icon" />
          </span>
        </div>
      </div>
      <div className="allItems mb-3">
        {allproduct.map((allItem) => {
          if (props.category === allItem.category) {
            return <Product_Card key={allItem.id} Item={allItem} />;
          } else {
            return null;
          }
        })}
      </div>
      <div className="explore-more">
        <p>Explore More</p>
      </div>
    </>
  );
};

export default AllCategoryProduct;
