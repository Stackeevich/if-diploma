import { handleActions } from 'redux-actions';
import { SET_USER_DATA } from '../actionCreator/signUp';

const initialState = {
  username: null,
  password: null,
  isAuth: false,
};

export const authReducer = handleActions(
  {
    [SET_USER_DATA]: (state, { payload: { username: name, password: pass } }) => ({
      ...state,
      isAuth: !state.isAuth,
      username: name,
      password: pass,
    }),
  },
  initialState
);
