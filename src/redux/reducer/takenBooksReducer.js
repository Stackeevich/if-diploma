import { handleActions } from 'redux-actions';
import { TAKE_BOOKS } from '../actionCreator/takenBooks';
import { RETURN_BOOKS } from '../actionCreator/returnedBooks';

const initialState = {
  takenBooks: [],
};

const takenBooksReducer = handleActions(
  {
    [TAKE_BOOKS]: (state, { payload: item }) => ({
      ...state,
      takenBooks: [...state.takenBooks, item],
    }),
    [RETURN_BOOKS]: (state, { payload: item }) => ({
      ...state,
      takenBooks: state.takenBooks.filter((i) => i !== item),
    }),
  },
  initialState
);

export default takenBooksReducer;
