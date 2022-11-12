import { selectBookById } from "../books/selectors";

export const selectCart = (state) => state.cart;

export const getCartBooks = (state) => {
    return Object.values(selectCart(state).books);
}

export const getCountOfBookById = (state, id) => {
   return getCartBooks(state).find(book => book.id === id)?.count || 0
}