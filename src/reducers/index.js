import { combineReducers } from 'redux';

// Reducers
import appStatus from './appStatusReducer';
import products from './productsReducer';
import user from './userReducer';

export const rootReducer = combineReducers({
  appStatus,
  products,
  user,
});
