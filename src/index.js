import "./index.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import  UserProvider  from "./context/user.context";
import ProductProvider  from "./context/products.context";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductProvider>
        <App />
         </ProductProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
