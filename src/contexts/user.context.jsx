import { createContext,useEffect, useReducer } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

import { createAction } from "../utils/reducer/reducer.utils";

//actual value for access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
})

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const userReducer = (state, action) =>{
   const { type, payload } = action

   switch(type){
     case USER_ACTION_TYPES.SET_CURRENT_USER:
       return {
         ...state,
         currentUser: payload
       }
       default:
         throw new Error(`Unhandled type ${type} in userReducer`)
   }
}

const DEFAULT_CURRENT_USER = {
  currentUser: null
}

export const UserProvider = ({children}) =>{

   const [ {currentUser} , dispatch ] = useReducer(userReducer, DEFAULT_CURRENT_USER)

   const setCurrentUser = (user) =>{
     dispatch( createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user) )
   }

    const value = {currentUser, setCurrentUser}

    useEffect(() => {
    const unsubscribe =  onAuthStateChangedListener((user)=> {
      user && createUserDocumentFromAuth(user)

     setCurrentUser(user)
    })

    return unsubscribe
    }, [])

  return <UserContext.Provider value={value}>
        {children}
      </UserContext.Provider>
}

  

