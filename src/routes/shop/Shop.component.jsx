import "./shop.style.scss";
import { useEffect } from "react"; 
import { useDispatch } from "react-redux"; 
import {
  create_CollectionAndDocuments,
  getApparels_CollectionAndDocuments,
} from "../../utility/firebase/firebase.utility";
import { Routes, Route } from "react-router-dom";
import CategoryPreview from "../categories-preview/CategoryPreview.component";
import IndividualCategory from "../IndividualCategory/IndividualCategory.component";
import { setCategoriesArray } from "../../redux-store/categories/categories.action";

const Shop = () => {
  let dispatch = useDispatch();
  //console.log(apparelsItems);
   useEffect(() => {
     console.log("fire useEffect from Shop Component");
     //creating the database collection one time only
     /*  return async function createCollection() {
        await create_CollectionAndDocuments("apparels",SHOP_DATA)
      } */
     //fetch collection
     async function fetchDocs() {
       //  console.log(`fetcing apparels collection...`);
       let apparelsCollectionArray =
         await getApparels_CollectionAndDocuments();
       dispatch (setCategoriesArray(apparelsCollectionArray));
     }
     fetchDocs();
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
