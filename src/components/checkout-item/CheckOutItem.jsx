
import { useDispatch, useSelector } from "react-redux"

import { removeCartItem, setItemQuantity } from "../../store/cart/cart.actions"
import { selectCartItems } from "../../store/cart/cart.selector"

import './checkout-item.styles.scss'

const CheckOutItem = ({product}) => {
  const dispatch = useDispatch()
    const { name, quantity, id, price, imageUrl } = product
    
    const cartItems = useSelector(selectCartItems)
    
    const updateQuantity = (e) =>{
        const { name } = e.target
        dispatch(setItemQuantity(cartItems, id, name))
    }
    
    const clearCartItem = () => dispatch(removeCartItem(cartItems,id))

  return (
    <div className='checkout-item-container'>
    <div className='image-container'>
      <img src={imageUrl} alt={`${name}`} />
    </div>
    <span className='name'> {name} </span>
    <span className='quantity'>
      <button name="minus" className='arrow' onClick={updateQuantity}>
        &#10094;
      </button>
      <span className='value'>{quantity}</span>
      <button name="add" className='arrow' onClick={updateQuantity}>
        &#10095;
      </button>
    </span>
    <span className='price'> {price}</span>
    <div className='remove-button' onClick={clearCartItem}>
      &#10005;
    </div>
  </div>
  )
}

export default CheckOutItem