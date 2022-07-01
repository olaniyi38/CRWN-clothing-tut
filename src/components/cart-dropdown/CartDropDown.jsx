

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectCartItems } from '../../store/cart/cart.selector'

import Button from '../button/Button'
import CartItem from '../cart-item/CartItem'

import {CartDropDownContainer} from './cart-dropdown.styles'

const CartDropDown = () => {

  const navigate = useNavigate()

  const navigateToCheckOut = () =>{
    navigate('/checkout')
  }

  const cartItems = useSelector(selectCartItems)

  return (
    <CartDropDownContainer>
       <div className="cart-items">
        {
         cartItems.map((item)=>
         <CartItem key={item.id} cartItem={item} /> )
         }
       </div>
       <Button style={{padding:'0px'}} onClick={navigateToCheckOut}>GO TO CHECKOUT</Button>
       
    </CartDropDownContainer>
  )
}

export default CartDropDown