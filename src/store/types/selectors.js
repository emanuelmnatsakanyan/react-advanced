export const selectTypeModule = (state) => state.types;

export const selectTypesIds = state =>
  Object.values(selectTypeModule(state).ids);

export const getTypes = (state) =>
  Object.values(selectTypeModule(state).entities);

export const selectTypeById = (state, cinemaId) =>
  selectTypeModule(state).entities[cinemaId];

export const getActiveTypeId = (state) => {
  const activeType = getTypes(state).find(type => type.isActive)
  return selectTypesIds(state).find(id => id === activeType.id)
}