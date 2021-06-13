import { combineReducers } from 'redux';

// Reducers
import appStatus from './appStatusReducer';
import product from './productReducer';
import products from './productsReducer';
import user from './userReducer';

export const rootReducer = combineReducers({
  appStatus,
  product,
  products,
  user,
});
