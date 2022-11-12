import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        books: []
    },
    reducers: {
        addBook(state, action) {
            const addedBook = state.books.find(book => book.id === action.payload.id)
            if (!addedBook)
                state.books.push(action.payload)
            else
                state.books = state.books.map(book => {
                    if (book.id === addedBook.id) {
                        return { ...book, count: action.payload.count }
                    }
                    return book
                })
        },

        // removeBook(state, action) {
        //     const id = action.payload
        //     console.log(id);
        //     const removableBook = state.books.find(book => book.id === id)
        //     console.log(removableBook);
        //     state.books = state.books.map((book, index) => {
        //         console.log(book.name);
        //         if (id === book.id && book.count > 1) 
        //             return { ...book, count: book.count - 1 }
        //         else if (book.count === 1)
        //             state.books = state.books.filter(rbook => rbook.id === id)
        //     })
        // }
        changeState(state, action) {
            state.books = action.payload
        }
    }
})

export const { addBook, changeState } = cartSlice.actions

export default cartSlice.reducer



