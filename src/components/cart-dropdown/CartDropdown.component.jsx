import Button from "../Button/Button.comp";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import CartItem from "../cart-item/CartItem.component";
import { CartContext } from "../../context/cart.context";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const toggleCart = () => setIsCartOpen(!iscartOpen);
  let navigate = useNavigate();
  let handleGoToCheckout = () => {
    toggleCart();
    navigate("/checkout")
  };

  let { cartItems,setIsCartOpen,iscartOpen } = useContext(CartContext);
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
