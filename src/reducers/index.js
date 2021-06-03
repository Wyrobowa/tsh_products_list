import { combineReducers } from 'redux';

// Reducers
import products from './productsReducer';

export const rootReducer = combineReducers({
  products,
});
