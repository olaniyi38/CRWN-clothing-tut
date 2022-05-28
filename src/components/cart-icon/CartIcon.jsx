
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import { CartIconContainer } from './cart-icon.styles'

const CartIcon = () => {
  const { isActive ,setIsActive, cartCount } = useContext(CartContext)

  

    return (
    <CartIconContainer
    onClick={ ()=>{ setIsActive(!isActive) } }>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{cartCount}</span>
    </CartIconContainer>
  )
}

export default CartIcon