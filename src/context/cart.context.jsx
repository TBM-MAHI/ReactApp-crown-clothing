import { createContext, useEffect, useState } from "react";

let addItem = (cartItems, productToadd) => {
 /*
  find if cartItems already has productToadd
   if found increamet quantity
  */
  let existingCartItem = cartItems.find(
    (items) => items.id === productToadd.id
  );
 // console.log(existingCartItem);
  if (existingCartItem) {
    let quanytityModifiedCartItems = cartItems.map(item =>
      item.id === existingCartItem.id
        ? { ...item, quantity: item["quantity"] + 1 }
        : item
    );
    return quanytityModifiedCartItems;
  }
  //if not add a product with quamtity property and return New cart Item
  return [...cartItems, { ...productToadd, quantity: 1 }];
};


  let countItems = (cartItems)=> cartItems.reduce((sum, item) => sum + item.quantity, 0);


export const CartContext = createContext({
  iscartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemsToCart: () => null,
  count:()=>{}
});

let CartProvider = ({ children }) => {
  console.log('render Cartprovider Context');
  let [iscartOpen, setIsCartOpen] = useState(false);
  let [ cartItems, setcartItems ] = useState([]);
  let [ totalItemsCount, setTotalItemsCount ] = useState(0);
  
  useEffect(() => {
    console.log('fire effect');
    setTotalItemsCount(countItems(cartItems));
  },[cartItems])
  const addItemsToCart = (productToAdd) => {
    setcartItems(addItem(cartItems, productToAdd));
  };
  
  // 
  
  
  const value = {
    iscartOpen,
    setIsCartOpen,
    cartItems,
    addItemsToCart,
    totalItemsCount,
  
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
