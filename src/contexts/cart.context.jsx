import { createContext, useState, useEffect } from "react";

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

export const CartContext = createContext({
  isActive: false,
  setIsActive: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  setItemQuantity: () => {},
  removeCartItem: () => {},
  totalAmount: 0
})

export const CartStateProvider = ({children}) =>{
  const [isActive, setIsActive] = useState(false)
  
  const [cartItems, setCartItems ] = useState([])
  
  const [cartCount, setCartCount] = useState(0)
  
  const [totalAmount, setTotalAmount] = useState(0)
 
  
 useEffect(() => {
  const newCartCount = cartItems.reduce((total, item)=> total + item.quantity ,0)
  setCartCount(newCartCount)
  }, [cartItems])

 useEffect(() => {
  const newTotalAmount = cartItems.reduce((total, item)=> total + (item.quantity * item.price) ,0)
  setTotalAmount(newTotalAmount)
  }, [cartItems])
  
  const addItemToCart = (productToAdd) =>{
    setCartItems(addCartItem(cartItems, productToAdd)) 
  }

  const setItemQuantity = (id, action) =>{
    setCartItems(updateItemQuantity(cartItems, id, action))
  }

  const removeCartItem = (id) =>{
    setCartItems(deleteCartItem(cartItems, id))
  }

  const value = {
    isActive,
    setIsActive,
    cartItems,
    addItemToCart,
    cartCount,
    setItemQuantity,
    removeCartItem,
    totalAmount 
  }
  

return <CartContext.Provider value={value}>
       {children}
    </CartContext.Provider>
}