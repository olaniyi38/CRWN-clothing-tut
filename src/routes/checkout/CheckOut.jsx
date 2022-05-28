import { useContext, useEffect } from "react"
import CheckOutItem from "../../components/checkout-item/CheckOutItem"
import { CartContext } from "../../contexts/cart.context"
import { Button } from "./checkout.styles"



const CheckOut = () => {
    const { cartItems, setIsActive, totalAmount} = useContext(CartContext)
  
    useEffect(()=>{
        setIsActive(false)
    }, [])

  return (
       <CheckOut className='checkout-container'>
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
        <div className='total'>TOTAL: ${totalAmount}</div>
        <Button>
          Hello
        </Button>
    </CheckOut>
  )
}

export default CheckOut