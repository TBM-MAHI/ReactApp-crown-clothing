import "./checkout-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const CheckoutIems = ({ CartItems }) => {
  let { name, price, quantity, imageUrl } = CartItems;
  let {
    cartItems,
    reduceCartItemQuantity,
    addItemsToCart,
    removeItemFromCart,
  } = useContext(CartContext);
  console.log(cartItems);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        {quantity}
        <span onClick={() => addItemsToCart(CartItems)}>++</span>
        <span onClick={() => reduceCartItemQuantity(CartItems)}>--</span>
      </span>
      <span className="price">{`${price}$`}</span>

      <span
        className="remove-button"
        onClick={() => removeItemFromCart(cartItems)}
      >
        X
      </span>
    </div>
  );
};

export default CheckoutIems;
