
import { toggleCartOpen } from '../../store/cart/cart.actions'

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { CartIconContainer } from './cart-icon.styles'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartCount } from '../../store/cart/cart.selector'

const CartIcon = () => {

  const dispatch = useDispatch()

  const cartCount = useSelector(selectCartCount)
  
    return (
    <CartIconContainer
    onClick={ ()=>{ dispatch(toggleCartOpen()) } }>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{cartCount}</span>
    </CartIconContainer>
  )
}

export default CartIcon