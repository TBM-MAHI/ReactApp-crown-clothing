import "./shop.style.scss";
import { Routes, Route } from "react-router-dom";
import CategoryPreview from "../categories-preview/CategoryPreview.component";
import IndividualCategory from "../IndividualCategory/IndividualCategory.component";

const Shop = () => {
  //console.log(apparelsItems);
  return (
    <div className="shop-container">
      <Routes>
        <Route path="/" element=<CategoryPreview /> />
        <Route path=":catagory" element = <IndividualCategory/> />
      </Routes>
    </div>
  );
};

export default Shop;
