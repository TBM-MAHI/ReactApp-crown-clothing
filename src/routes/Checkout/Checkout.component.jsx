import './checkout.styles.scss'
import CheckoutItems from '../../components/Checkout-items/Checkout_Items.component';
import { useSelector} from "react-redux";

import {
  select_calculateTotalPrice,
  select_CartItems,
} from "../../redux-store/cart/cart.selector";

const Checkout = () => {
  let  cartItems = useSelector(select_CartItems);
  let totalPrice = useSelector(select_calculateTotalPrice);
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
        cartItems.map(item => <CheckoutItems Item={item} key={item.id} />)
      }
      <span className="total">Total :{totalPrice}$ </span>
    </div>
  );
}

export default Checkout;