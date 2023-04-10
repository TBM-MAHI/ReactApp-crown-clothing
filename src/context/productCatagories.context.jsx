import { useState, createContext, useEffect } from "react";
import {
  create_CollectionAndDocuments,
  getApparels_CollectionAndDocuments,
} from "../utility/firebase/firebase.utility.js";
import SHOP_DATA from "../shop-data.js";

export let ApparelsContext = createContext({
  apparelsMapping: {},
});

let ProductsCatagoriesProvider = ({ children }) => {
  let [apparelsMapping, setApparelsMapping] = useState({});
 // console.log(apparelsMapping);
  useEffect(() => {
    console.log("fire effect from ProductCategories context");
    //creating the database collection one time only
    /*  return async function createCollection() {
        await create_CollectionAndDocuments("apparels",SHOP_DATA)
      } */
    //fetch collection
    return async function fetchDocs() {
      setApparelsMapping(await getApparels_CollectionAndDocuments());
    };
  }, []);

  let value = {
    apparelsMapping,
  };
  // console.log(value);
  return (
    <ApparelsContext.Provider value={value}>
      {children}
    </ApparelsContext.Provider>
  );
};

export default ProductsCatagoriesProvider;
