import Button from "../Button/Button.comp";
import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import CartItem from "../cart-item/CartItem.component";
import { CartContext } from "../../context/cart.context";
import { CheckoutConext } from "../../context/checkout.context";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  let { cartItems } = useContext(CartContext);
  let { showCheckoutPage, setshowCheckoutPage } = useContext(CheckoutConext);
  let setCheckout = () => setshowCheckoutPage(!showCheckoutPage);
  console.log(cartItems);
  return (
    <div className="cart-dropdown-container ">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem cartItem={item} key={item.id} />
        ))}
      </div>
      <Link to ="/checkout">
        <Button>Go to Checkout</Button>
      </Link>
    </div>
  );
};

export default CartDropdown;
