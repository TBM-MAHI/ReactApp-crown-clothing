import "./checkout-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const CheckoutIems = ({ CartItem }) => {
  let { name, price, quantity, imageUrl } = CartItem;
  let {
   reduceCartItemQuantity,
    addItemsToCart,
    removeItemFromCart,
  } = useContext(CartContext);
  const handleReduce = () => reduceCartItemQuantity(CartItem);
  const handleAdd = () => addItemsToCart(CartItem);
  const handleRemove = () => removeItemFromCart(CartItem);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={handleReduce}
        >
          &#10094;
        </div>
         {quantity} 
        <span className="arrow" onClick={handleAdd}>
          &#10095;
        </span>
      </span>
      <span className="price">{`${price}$`}</span>

      <span
        className="remove-button"
        onClick={handleRemove}
      >
        X
      </span>
    </div>
  );
};

export default CheckoutIems;
