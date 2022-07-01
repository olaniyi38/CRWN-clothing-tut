import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";


const loggerMiddeleWare = (store) => (next) => (action) =>{

    
    const { type, payload } = action
    
    if(!type){
        next(action)
    }
    
    console.log('type:', type)
    console.log('action:', payload)
    console.log('prevstore:', store.getState())

    next(action)

    console.log('currentstore:', store.getState())

}

const middleWares = [loggerMiddeleWare]

const composedEnhancers = compose(applyMiddleware(...middleWares))

export const store = createStore(rootReducer, undefined, composedEnhancers)