import { handleActions } from 'redux-actions';
import { ADD_TO_SEARCH } from '../actionCreator/addToSearch';

const initialState = {
  book: null,
};

export const addToSearchReducer = handleActions(
  {
    [ADD_TO_SEARCH]: (state, { payload: book }) => ({
      ...state,
      book,
    }),
  },
  initialState
);
