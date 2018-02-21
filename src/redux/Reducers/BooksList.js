const defaultState = {
  groupedBookList: {},
};

const notes = (prevState = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TO_BOOK_LIST': {
      return {
        ...prevState,
        groupedBookList: action.payload,
      };
    }
    case 'EDIT_NOTES': {
      const newArray = prevState.allNote;
      newArray[action.payload.noteIndex] = action.payload.note;
      return {
        ...prevState,
        allNote: newArray,
      };
    }
    default: {
      return prevState;
    }
  }
};

export default notes;
