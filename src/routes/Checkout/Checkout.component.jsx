import './checkout.styles.scss'
import CheckoutIems from '../../components/Checkout-items/CheckoutIems.component';

import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const Checkout = () => {
  let { cartItems,totalPrice } = useContext(CartContext)
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map(item => <CheckoutIems CartItem={item} key={item.id} />)
      }
      <span className="total">Total :{totalPrice}$ </span>
    </div>
  );
}

export default Checkout;