import dispatchHandler from "../utility/reducer/utility";
import { createContext, useReducer } from "react";

let reduceItems = (cartItems, productToDecrease) => {
  if (productToDecrease.quantity === 1)
    return removeItems(cartItems, productToDecrease);
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

let countItems = (cartItems) =>
  cartItems.reduce((sum, item) => sum + item.quantity, 0);

let calculateTotal = (cartItems) =>
  cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

export const CartContext = createContext({
  iscartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemsToCart: () => null,
  totalItemsCount: 0,
  reduceCartItemQuantity: () => {},
  removeItemFromCart: () => {},
  totalPrice: 0,
});
//useReducers
let CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};

let cartReducer = (state, action) => {
  console.log(`diapatched ${action.type}`);
  console.log(state);
  let { type, payload } = action;
  switch (type) {
    case "SET_CART_ITEMS":
      return {
        ...state,
        ...payload,
      };
    case "SET_IS_CART_OPEN":
      return {
        ...state,
        iscartOpen: payload,
      };
    default:
      throw new Error(`Unhandeled rejection type ${type} in cartRedcuer`);
  }
};
const INITIAL_STATE = {
  cartItems: [],
  totalPrice: 0,
  totalItemsCount: 0,
  iscartOpen: false,
};

let CartProvider = ({ children }) => {
  let [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  let { cartItems, totalPrice, totalItemsCount, iscartOpen } = state;
  console.log(cartItems);

  let updatecartItemsReducers = (newcartItems) => {
    let newCartCountItems = countItems(newcartItems);
    let newCartTotalPrice = calculateTotal(newcartItems);

    //dispatch new action with payload={}
    dispatch(
      dispatchHandler(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newcartItems,
        totalPrice: newCartTotalPrice,
        totalItemsCount: newCartCountItems,
      })
    );
  };

  const addItemsToCart = (productToAdd) => {
    let newCartItems = addItem(cartItems, productToAdd);
    updatecartItemsReducers(newCartItems);
  };

  const reduceCartItemQuantity = (productToDecrease) => {
    let newCartItems = reduceItems(cartItems, productToDecrease);
    updatecartItemsReducers(newCartItems);
  };

  const removeItemFromCart = (productToRemove) => {
    let newCartItems = removeItems(cartItems, productToRemove);
    updatecartItemsReducers(newCartItems);
  };
  const setIsCartOpen = (bool) => {
    dispatch(dispatchHandler(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
  };

  const value = {
    iscartOpen,
    setIsCartOpen,
    cartItems,
    addItemsToCart,
    totalItemsCount,
    reduceCartItemQuantity,
    removeItemFromCart,
    totalPrice,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
