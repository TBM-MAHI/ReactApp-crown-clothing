import { useState, createContext } from "react";
import PRODUCTS from "../shop-data.json";

export let ProductsContext = createContext({
  products: [],
});

let ProductsProvider = ({ children }) => {
  let [products, setProducts] = useState(PRODUCTS);
  let value = {
    products,
  };
  // console.log(value);
  return (
    <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
  );
};

export default ProductsProvider;
