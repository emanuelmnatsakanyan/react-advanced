export const selectTypeModule = (state) => state.books;

export const getBooks = (state) =>
  Object.values(selectTypeModule(state).entities);

export const selectBookById = (state, id) => {
  return selectTypeModule(state).entities[id]
}
