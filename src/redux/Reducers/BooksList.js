const defaultState = {
  groupedBookList: {},
};

const books = (prevState = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TO_BOOK_LIST': {
      return {
        ...prevState,
        groupedBookList: action.payload,
      };
    }
    default: {
      return prevState;
    }
  }
};

export default books;
