import { CART_ACTION_TYPES } from "./cart.types";
import createDispatchAction from "../../utility/reducer/utility";

export const setIsCartOpen = (bool) => createDispatchAction(
  CART_ACTION_TYPES.SET_IS_CART_OPEN,
  bool);


export const addItemsToCart = (cartItems, productToAdd) => {
  let newCartItems = addItem(cartItems, productToAdd);
  return createDispatchAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const reduceCartItemQuantity = (cartItems, productToDecrease) => {
  let newCartItems = reduceItems(cartItems, productToDecrease);
  return createDispatchAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, productToRemove) => {
  let newCartItems = removeItems(cartItems, productToRemove);
  return createDispatchAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

  // UTILITY FUNCTIONS FOR LOGIC
  let addItem = (cartItems, productToadd) => {
  
  /*
    find if cartItems already has productToadd
    if found increment quantity
  */
  let existingCartItem = cartItems.find(
    (items) => items.id === productToadd.id
  );
  // console.log(existingCartItem);
  if (existingCartItem) {
    let quanytityModifiedCartItems = cartItems.map((item) =>
      item.id === existingCartItem.id
        ? { ...item, quantity: item["quantity"] + 1 }
        : item
    );
    return quanytityModifiedCartItems;
  }
  //if not add a product with quamtity property and return New cart Item
  return [...cartItems, { ...productToadd, quantity: 1 }];
};


let reduceItems = (cartItems, productToDecrease) => {
  if (productToDecrease.quantity === 1)
    return cartItems;
  //if item is greater than 1 then return a new array modifying the items objects quantity prop
  return cartItems.map((item) =>
    item.id === productToDecrease.id
      ? { ...productToDecrease, quantity: productToDecrease["quantity"] - 1 }
      : item
  );
};


let removeItems = (cartItems, productToRemove) => {
  return cartItems.filter((items) => items.id !== productToRemove.id);
};
