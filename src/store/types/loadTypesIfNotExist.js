import { createAsyncThunk } from '@reduxjs/toolkit'
import { prepareData } from '../utils'
import { startLoading, successLoading, failLoading } from './index'


export const fetchTypes = createAsyncThunk(
  'users/fetchTypes',
  async (_, { dispatch, getState }) => {
    const state = getState()
    if (state.types?.length > 0)
      return
    dispatch(startLoading())
    fetch('http://localhost:3001/genres')
      .then(response => response.json())
      .then(data =>
        dispatch(successLoading(prepareData(data.data.map((type, i) => {
          return { ...type, isActive: i ? false : true }
        }))))

      )
      .catch(() => dispatch(failLoading()))
  }
)
