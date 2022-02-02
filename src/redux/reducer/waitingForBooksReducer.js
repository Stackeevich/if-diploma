import { handleActions } from 'redux-actions';
import { WAITING_FOR_BOOKS } from '../actionCreator/waitingForBooks';
import { WAITING_FOR_RETURN_BOOKS } from '../actionCreator/waitingForReturnBooks';

const initialState = {
  waitingForBooks: [],
};

const waitingForBooksReducer = handleActions(
  {
    [WAITING_FOR_BOOKS]: (state, { payload: item }) => ({
      ...state,
      waitingForBooks: [...state.waitingForBooks, item],
    }),
    [WAITING_FOR_RETURN_BOOKS]: (state, { payload: item }) => ({
      ...state,
      waitingForBooks: state.waitingForBooks.filter((i) => i !== item),
    }),
  },
  initialState
);

export default waitingForBooksReducer;
