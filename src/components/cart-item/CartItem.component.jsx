import './cartitem.styles.scss'

const CartItem = ({ cartItem }) => {
  let { name, quantity, imageUrl,price } = cartItem;
  return (
      <div className="cart-item-container">
          <img src={imageUrl} alt={name} />
          <div className="item-details">
              <span className="name">{name}</span>
              <h5>{quantity} x {price}$</h5>
      </div>
    </div>
  );
};

export default CartItem;