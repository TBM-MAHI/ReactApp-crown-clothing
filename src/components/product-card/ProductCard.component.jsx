import './product-card.styles.scss'
import React from 'react'
import Button from '../Button/Button.comp';
const ProductCard = ({ prod}) => {
  let { name, price, imageUrl } = prod;
  console.log(name);
  return (
    
      <div className="product-card-container">
        <img src={`${imageUrl}`} alt={`${name}`} />
        <div className="footer">
          <span className="name">{ name}</span>
          <span className="price">{ price}</span>
        </div>
        <Button btntype="inverted">ADD TO CART</Button>
      </div>
    
  );
};

export default ProductCard