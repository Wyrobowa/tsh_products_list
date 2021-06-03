// Actions
import { GET_PRODUCTS_SUCCESSFUL } from '../actions/productsActions';

const initState = {
  products: [],
};

const products = (state = initState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESSFUL:
      return {
        ...state,
        products: action.payload.items,
      };
    default:
      return state;
  }
};

export const getProducts = state => state.products.products;

export default products;
