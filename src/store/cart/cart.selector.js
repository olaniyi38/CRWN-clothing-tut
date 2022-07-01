import { createSelector } from "reselect"



const selectCartReducer = state => state.cart

export const selectIsCartOpen = (state) => state.cart.isCartOpen

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cartReducer) => cartReducer.cartItems
)

export const selectCartCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((total, item)=> total + item.quantity ,0)
)
    
export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((total, item)=> total + (item.quantity * item.price) ,0)
)
