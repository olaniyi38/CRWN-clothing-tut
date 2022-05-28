import { useContext } from "react"
import { CartContext } from "../../contexts/cart.context"

import './checkout-item.styles.scss'

const CheckOutItem = ({product}) => {
    const { name, quantity, id, price, imageUrl } = product
    
    const { setItemQuantity, removeCartItem } = useContext(CartContext)
    
    const updateQuantity = (e) =>{
        const { name } = e.target
        setItemQuantity(id, name)
       console.log(name);
    }
    
    const clearCartItem = () => removeCartItem(id)

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