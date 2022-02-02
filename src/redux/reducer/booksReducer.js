import { handleActions } from 'redux-actions';
import { SET_BOOKS } from '../actionCreator/books';

const initialState = {
  books: null,
};

export const booksReducer = handleActions(
  {
    [SET_BOOKS]: (state, { payload: allBooks }) => ({
      ...state,
      books: allBooks,
    }),
  },
  initialState
);
