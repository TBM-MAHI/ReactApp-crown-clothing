import { createSelector } from "reselect";


const select_fromCartReducer = (state) => {
// console.log("Initial selector fired from cartSelector ");
  return state.cart
};



export const select_CartItems = createSelector(
  [select_fromCartReducer],
  (cart) => cart.cartItems
);
export const select_isCartOpen = createSelector(
  [select_fromCartReducer],
  (cart) => {
    // console.log('selector 2 fired from cartSelector ')
    return cart.iscartOpen;
  }
);
export const select_CartItemsCount = createSelector(
  [select_CartItems],
  (cartItems) => cartItems.reduce((sum, item) => sum + item.quantity, 0)
);

export let select_calculateTotalPrice = createSelector(
  [select_CartItems],
  (cartItems) =>
    cartItems.reduce((total, item) => total + item.quantity * item.price, 0)
);
