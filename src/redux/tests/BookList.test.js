const populateBooks = require('../Reducers');

test('average(1, 2, 3) is 2', () => {
  const listObject = { anmol: [] };
  const action = {
    type: 'ADD_TO_BOOK_LIST',
    payload: listObject,
  };
  const state = {
    groupedBookList: {},
  };
  const output = {
    groupedBookList: { anmol: [] },
  };
  expect(populateBooks.books(state, action)).toBe(output);
});
