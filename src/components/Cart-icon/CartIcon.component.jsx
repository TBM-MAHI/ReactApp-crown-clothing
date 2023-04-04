import React from 'react'
import { ReactComponent as Carticon} from '../../assets/shopping-bag.svg'
const CartIcon = () => {
  return (
      <div>
          <Carticon>
              <span>0</span>
          </Carticon>
    </div>
  )
}

export default CartIcon