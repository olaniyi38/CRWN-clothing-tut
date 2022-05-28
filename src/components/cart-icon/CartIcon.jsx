
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'


const CartIcon = () => {
  const { isActive ,setIsActive, cartCount } = useContext(CartContext)

  

    return (
    <CartIcon
    onClick={ ()=>{ setIsActive(!isActive) } }>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{cartCount}</span>
    </CartIcon>
  )
}

export default CartIcon