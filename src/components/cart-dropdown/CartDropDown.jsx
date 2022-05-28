
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/cart.context'
import Button from '../button/Button'
import CartItem from '../cart-item/CartItem'

import {CartDropDownContainer} from './cart-dropdown.styles'

const CartDropDown = () => {

  const navigate = useNavigate()

  const navigateToCheckOut = () =>{
    navigate('/checkout')
  }

  const { cartItems } = useContext(CartContext)

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