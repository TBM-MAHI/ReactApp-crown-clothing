import "./checkout-item.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { select_CartItems } from "../../redux-store/cart/cart.selector";
import {
  addItemsToCart,
  reduceCartItemQuantity,
  removeItemFromCart,
} from "../../redux-store/cart/cart.action";

const CheckoutItems = ( {Item} ) => {
  //console.log(Item);
  let { imageUrl, name, quantity, price } = Item;
  let dispatch = useDispatch();

  let CartItems = useSelector(select_CartItems);

  const handleReduce = () => dispatch(reduceCartItemQuantity(CartItems, Item));
  const handleAdd = () => dispatch(addItemsToCart(CartItems, Item));
  const handleRemove = () => dispatch(removeItemFromCart(CartItems, Item));

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={handleReduce}>
          &#10094;
        </div>
        {quantity}
        <span className="arrow" onClick={handleAdd}>
          &#10095;
        </span>
      </span>
      <span className="price">{`${price}$`}</span>

      <span className="remove-button" onClick={handleRemove}>
        X
      </span>
    </div>
  );
};

export default CheckoutItems;
