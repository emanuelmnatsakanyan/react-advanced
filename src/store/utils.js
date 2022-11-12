import { startLoading, successLoading } from "./books";
import { changeState } from "./cart";

export const prepareData = (items) => {
  return {
    entities: items.reduce((acc, cinema) => {
      acc[cinema.id] = cinema;
      return acc;
    }, {}),
    ids: items.map(({ id }) => id),
  };
};

export const addCount = id => (dispatch, getState) => {
  dispatch(startLoading())
  
  let state = getState().books.entities
  state = Object.keys(state).map(key => state[key])
  state = state.map(book => {
    if (book.id === id) {
      return { ...book, count: book.count + 1 }
    } else
      return book
  })

  dispatch(successLoading(prepareData(state)))
}

export const removeCount = id => (dispatch, getState) => {
  let state = getState().cart.books
  let book = state.find(rbook => rbook.id === id)

  if (book.count > 1)
    state = state.map(rbook => {
      if (rbook.id === id)
        return { ...rbook, count: rbook.count - 1 }
      else
        return rbook
    })

  else if (book?.count === 1)
    state = state.filter(rbook => rbook.id !== id)

  dispatch(changeState(state))
}
