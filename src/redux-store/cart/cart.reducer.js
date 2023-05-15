import { CART_ACTION_TYPES } from "./cart.types";

const INITIAL_STATE = {
  cartItems: [],
  totalPrice: 0,
  totalItemsCount: 0,
  iscartOpen: false,
};

export let cartReducer = (state = INITIAL_STATE, action) => {
 // console.log(state);
  let { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems:payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        iscartOpen: payload,
      };
    default:
      return state;
  }
};
