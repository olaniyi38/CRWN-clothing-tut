import { CART_ACTION_TYPES } from "./cart.types"

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: []
}

export const cartReducer = ( state = INITIAL_STATE, action) => {
    const { type, payload } = action

    const { isCartOpen } = state

    switch(type){
        case CART_ACTION_TYPES.toggleIsCartOpen:
            return {
                ...state,
                isCartOpen: !isCartOpen
            }
        case CART_ACTION_TYPES.setCartItems:
            return {
                ...state,
                cartItems: payload
            }
        default:
            return state    
    }
}