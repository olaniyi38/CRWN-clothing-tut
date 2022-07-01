import {  useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import CheckOutItem from "../../components/checkout-item/CheckOutItem"

import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector"
import { CART_ACTION_TYPES } from "../../store/cart/cart.types"
import { createAction } from "../../utils/reducer/reducer.utils"

import {CheckOutContainer} from './checkout.styles'

const CheckOut = () => {
    const cartItems = useSelector(selectCartItems)

    const cartTotal = useSelector(selectCartTotal)

    const dispatch = useDispatch()
  
    useEffect(()=>{
        dispatch( createAction(CART_ACTION_TYPES.toggleIsCartOpen) )
    }, [])

  return (
       <CheckOutContainer className='checkout-container'>
         <div className='checkout-header'>
           <div className='header-block'>
             <span>Product</span>
           </div>
           <div className='header-block'>
             <span>Description</span>
           </div>
           <div className='header-block'>
             <span>Quantity</span>
           </div>
           <div className='header-block'>
             <span>Price</span>
           </div>
           <div className='header-block'>
             <span>Remove</span>
           </div>
         </div>
        {
          cartItems.map((cartItem)=>{
            return  <CheckOutItem key={cartItem.id} product={cartItem} />
          })
        }
        <div className='total'>TOTAL: ${cartTotal}</div>
          
    </CheckOutContainer>
  )
}

export default CheckOut