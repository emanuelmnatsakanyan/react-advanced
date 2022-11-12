import { createSlice } from "@reduxjs/toolkit";
import { Statuses } from "../../constants/statuses";

export const booksSlice = createSlice({
    name: 'books',
    initialState: {
        entities: {},
        ids: [],
        status: Statuses.idle,
    },
    reducers: {
        startLoading: (state) => {
            state.status = Statuses.inProgress;
        },
        successLoading: (state, action) => {
            state.status = Statuses.success;
            state.entities = action.payload.entities;
            state.ids = Array.from(new Set([...state.ids, ...action.payload.ids]));
        },
        failLoading: (state) => {
            state.status = Statuses.failed;
        },
       
    }
})

export const { startLoading, successLoading, failLoading } = booksSlice.actions

export default booksSlice.reducer



