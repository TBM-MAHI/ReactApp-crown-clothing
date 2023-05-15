import './product-card.styles.scss'

import Button from '../Button/Button.comp';
import { useSelector, useDispatch } from "react-redux";
import {
select_CartItems,
} from "../../redux-store/cart/cart.selector";
import { addItemsToCart } from '../../redux-store/cart/cart.action';

const ProductCard = ({ prod }) => {
  let dispatch = useDispatch();
  let { name, price, imageUrl } = prod;
  let cartItems = useSelector(select_CartItems)
  let handleAddItemtoCart = () => dispatch(addItemsToCart(cartItems, prod));
  

return (
    <div className="product-card-container">
      <img src={`${imageUrl}`} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}$</span>
      </div>
      <Button
        btntype="inverted"
        onClick={handleAddItemtoCart}
      >
        ADD TO CART
      </Button>
    </div>
  );
};


export default ProductCard;