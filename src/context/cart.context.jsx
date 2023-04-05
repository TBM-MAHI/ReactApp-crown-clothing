import { createContext, useState } from "react";

export const CartContext = createContext({
  iscartOpen: false,
  setIsCartOpen: () => null,
});

let CartProvider = ({ children }) => {
  let [iscartOpen, setIsCartOpen] = useState(false);
  const value = {
    iscartOpen,
    setIsCartOpen,
  }
  return (<CartContext.Provider value={value}>{children}</CartContext.Provider>);
}

export default CartProvider;