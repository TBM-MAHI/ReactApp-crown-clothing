import './CartIcon.styles.scss'
import { useContext } from 'react';
import { CartContext } from "../../context/cart.context";

import { ReactComponent as Carticon } from '../../assets/shopping-bag.svg'

const CartIcon = () => {
  let { iscartOpen, setIsCartOpen, totalItemsCount } = useContext(CartContext);
  const toggleCart = () => setIsCartOpen(!iscartOpen);
  return (
      <div className='cart-icon-container'>
          <Carticon className='shopping-icon' onClick={toggleCart}/>
      <span className='item-count'>{totalItemsCount}</span>
    </div>
  )
}

export default CartIcon