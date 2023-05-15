import "./cart-dropdown.styles.scss";
import Button from "../Button/Button.comp";
import CartItem from "../cart-item/CartItem.component";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  select_isCartOpen,
  select_CartItems,
} from "../../redux-store/cart/cart.selector";

import { setIsCartOpen } from "../../redux-store/cart/cart.action";

const CartDropdown = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let cartItems = useSelector(select_CartItems);
  let iscartOpen = useSelector(select_isCartOpen);

  const toggleCart = () => dispatch(setIsCartOpen(!iscartOpen));

  let handleGoToCheckout = () => {
    toggleCart();
    navigate("/checkout");
  };

 
  //console.log(cartItems);
  return (
    <div className="cart-dropdown-container ">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem cartItem={item} key={item.id} />
        ))}
      </div>
      <Button onClick={handleGoToCheckout}>Go to Checkout</Button>
    </div>
  );
};

export default CartDropdown;
