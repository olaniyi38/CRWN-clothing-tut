import { createAction } from "../../utils/reducer/reducer.utils"
import { CART_ACTION_TYPES } from "./cart.types"

// HELPER FUNCTIONS

const addCartItem = (cartItems, productToAdd) => {

    const existingItem = cartItems.find((item) => {
      return item.id === productToAdd.id
    })
  
    if (existingItem) {
     return cartItems.map((item) => { 
      return item.id === existingItem.id ? 
       { ...item, quantity: item.quantity + 1 }
       : item
      })
    }
  
  
    const newItem = {
      ...productToAdd,
      quantity: 1
    }
    return [...cartItems, newItem]
  
  }
  
  const updateItemQuantity = (cartItems, id, action) => {
    const itemToUpdate = cartItems.find((item) => {
      return item.id === id
    })
    
    if (itemToUpdate) {
      return cartItems.map((item) => {
        return item.id === id ? {
            ...item,
            quantity: action === 'add' ? item.quantity + 1 :
            action === 'minus' && item.quantity > 1 ? 
            item.quantity - 1 
            : 1
          
          } :
          item
          
      })
    }
  }
  
  const deleteCartItem = (cartItems, id) =>{
     return cartItems.filter((item)=>{
      return item.id !== id
     })
  }

/******************************** */

  export const toggleCartOpen = () => createAction(CART_ACTION_TYPES.toggleIsCartOpen)

  export const addItemToCart = (cartItems,productToAdd) =>{
    const newCartItems = addCartItem(cartItems,productToAdd)
   return createAction(CART_ACTION_TYPES.setCartItems,newCartItems)
   
   }
 
  export  const setItemQuantity = (cartItems,id, action) =>{
    const newCartItems = updateItemQuantity(cartItems, id, action)
   return createAction(CART_ACTION_TYPES.setCartItems,newCartItems)
   }
   
    
  export  const removeCartItem = (cartItems,id) =>{
     const newCartItems = deleteCartItem(cartItems, id)
    return createAction(CART_ACTION_TYPES.setCartItems,newCartItems)
   }