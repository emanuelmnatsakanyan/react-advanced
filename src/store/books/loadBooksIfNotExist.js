import { createAsyncThunk } from '@reduxjs/toolkit'
import { prepareData } from '../utils'
import { startLoading, successLoading, failLoading } from './index'


export const fetchBooks = createAsyncThunk(
  'users/fetchBooks',
  async (id, { dispatch, getState }) => {
    dispatch(startLoading())
    fetch(`http://localhost:3001/genres/${id}`)
      .then(response => response.json())
      .then(data => dispatch(successLoading(prepareData(data.data.map(bookFromData => {
        const count = getState().cart.books.find(book => book.id === bookFromData.id)?.count || 0
        return { ...bookFromData, count }
      })))))
      .catch(() => dispatch(failLoading()))
  }
)
