import './CartIcon.styles.scss'
import { useSelector,useDispatch } from "react-redux";
import { select_isCartOpen,select_CartItemsCount } from '../../redux-store/cart/cart.selector'
import {setIsCartOpen } from '../../redux-store/cart/cart.action'
import { ReactComponent as Carticon } from '../../assets/shopping-bag.svg'

const CartIcon = () => {
  let dispatch = useDispatch();
  let iscartOpen = useSelector(select_isCartOpen);
  let totalItemsCount = useSelector(select_CartItemsCount);
  const toggleCart = () =>  dispatch( setIsCartOpen(!iscartOpen) );
  
  return (
      <div className='cart-icon-container'>
          <Carticon className='shopping-icon' onClick={toggleCart}/>
      <span className='item-count'>{totalItemsCount}</span>
    </div>
  )
}

export default CartIcon