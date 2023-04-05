import './CartIcon.styles.scss'
import { useContext } from 'react';
import { ReactComponent as Carticon} from '../../assets/shopping-bag.svg'
import { CartContext } from "../../context/cart.context";


const CartIcon = () => {
  let {iscartOpen,setIsCartOpen} = useContext(CartContext);
  const toggleCart = () => setIsCartOpen(!iscartOpen);
  
  return (
      <div className='cart-icon-container'>
          <Carticon className='shopping-icon' onClick={toggleCart}/>
        <span className='item-count'>0</span>
    </div>
  )
}

export default CartIcon