import { prepareData } from '../utils'
import { startLoading, successLoading } from './index'
import { getTypes } from './selectors'

export const toggleTypeActive = (typeId) => (dispatch, getState) => {
  dispatch(startLoading)
  const types = getTypes(getState())
  const newTypes = types.map(type => {
    if (typeId == type.id) {
      return {
        ...type, isActive: true
      }
    } else {
      return {
        ...type, isActive: false
      }
    }
  })
  dispatch(successLoading(prepareData(newTypes)))
}