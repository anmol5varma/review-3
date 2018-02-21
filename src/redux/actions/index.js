const add = 'ADD_TO_BOOK_LIST';
const edit = 'EDIT_NOTES';

export const populateTheStore = listObject => ({
  type: add,
  payload: listObject,
});

export const editNote = (note, index) => ({
  type: edit,
  payload: {
    noteIndex: index,
    note,
  },
});
