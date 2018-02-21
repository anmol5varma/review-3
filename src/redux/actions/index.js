const add = 'ADD_TO_BOOK_LIST';

export const populateTheStore = listObject => ({
  type: add,
  payload: listObject,
});
