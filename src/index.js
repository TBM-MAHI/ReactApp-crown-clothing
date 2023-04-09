import "./index.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import UserProvider from "./context/user.context";
import ProductsCatagoriesProvider from "./context/productCatagories.context";
import CartProvider from "./context/cart.context";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsCatagoriesProvider>
          <CartProvider>
          <App />
         </CartProvider>
        </ProductsCatagoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
