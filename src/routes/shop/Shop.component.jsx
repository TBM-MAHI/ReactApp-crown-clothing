import "./shop.style.scss";
import { useEffect } from "react"; 
import { useDispatch } from "react-redux"; 
import { Routes, Route } from "react-router-dom";

import CategoryPreview from "../categories-preview/CategoryPreview.component";
import IndividualCategory from "../IndividualCategory/IndividualCategory.component";

import { fetch_Categories_AsyncThunk } from "../../redux-store/categories/categories.action";
const Shop = () => {
  let dispatch = useDispatch();
  //console.log(apparelsItems);
   useEffect(() => {
     console.log("fire useEffect from Shop Component");
     //creating the database collection one time only
     /*  return async function createCollection() {
        await create_CollectionAndDocuments("apparels",SHOP_DATA)
      } */
     dispatch(fetch_Categories_AsyncThunk());
   }, []);
  
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
