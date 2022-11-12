import { combineReducers, configureStore } from "@reduxjs/toolkit";
import typesReducer from './types'
import booksReducer from './books'
import cartReducer from './cart'

export const store = configureStore({
    reducer: combineReducers({
        types: typesReducer,
        books: booksReducer,
        cart: cartReducer
    })
})