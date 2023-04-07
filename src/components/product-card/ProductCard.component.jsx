import './product-card.styles.scss'
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import Button from '../Button/Button.comp';


const ProductCard = ({ prod }) => {
  let {addItemsToCart} = useContext(CartContext);
  let { name, price, imageUrl } = prod;
//  let countItems= 
  return (
    <div className="product-card-container">
      <img src={`${imageUrl}`} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        btntype="inverted"
        onClick={(() => addItemsToCart(prod))}
      >
        ADD TO CART
      </Button>
    </div>
  );
};

export default ProductCard;