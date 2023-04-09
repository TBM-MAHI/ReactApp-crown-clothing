import { createContext, useEffect, useState } from "react";

let reduceItems = (cartItems, productToDecrease) => {
  if (productToDecrease.quantity === 1)
    return removeItems(cartItems, productToDecrease);
  //if item is greater than 1 then return a new array modifying the items objects quantity prop
  return cartItems.map((item) =>
    item.id === productToDecrease.id
      ? {...productToDecrease,
          quantity: productToDecrease["quantity"] - 1,
        }
      : item
  );
};


let removeItems = (cartItems, productToRemove) => {
  return cartItems.filter(items => items.id !== productToRemove.id);
};

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

let countItems = (cartItems) => cartItems.reduce((sum, item) => sum + item.quantity, 0);

let calculateTotal = (cartItems) => cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

export const CartContext = createContext({
  iscartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemsToCart: () => null,
  totalItemsCount:0,
  reduceCartItemQuantity: () => {},
  removeItemFromCart: () => { },
  totalPrice:0
});

let CartProvider = ({ children }) => {
  console.log('render Cartprovider Context');
  let [iscartOpen, setIsCartOpen] = useState(false);
  let [ cartItems, setcartItems ] = useState([]);
  let [ totalItemsCount, setTotalItemsCount ] = useState(0);
  let [ totalPrice, setTotalprice ] = useState(0);
  console.log(`total price  ${totalPrice}`);

  useEffect(() => {
    //console.log('fire effect');
    setTotalItemsCount(countItems(cartItems));
    setTotalprice(calculateTotal(cartItems));
  },[cartItems])
  
  const addItemsToCart = (productToAdd) => {
    setcartItems(addItem(cartItems, productToAdd));
  };

  const reduceCartItemQuantity = (productToDecrease) => {
    setcartItems(reduceItems( cartItems,productToDecrease));
  }

  const removeItemFromCart = (productToRemove) => {
    setcartItems(removeItems(cartItems, productToRemove));
  }
  
  const value = {
    iscartOpen,
    setIsCartOpen,
    cartItems,
    addItemsToCart,
    totalItemsCount,
    reduceCartItemQuantity,
    removeItemFromCart,
    totalPrice
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
