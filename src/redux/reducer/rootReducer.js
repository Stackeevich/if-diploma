import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { authReducer } from './authReducer';
import { booksReducer } from './booksReducer';
import { addToSearchReducer } from './addToSearchReducer';
import takenBooksReducer from './takenBooksReducer';
import waitingForBooksReducer from './waitingForBooksReducer';

export const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  books: booksReducer,
  addToSearch: addToSearchReducer,
  takenBooks: takenBooksReducer,
  waitingForBooks: waitingForBooksReducer,
});
