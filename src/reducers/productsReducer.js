// Actions
import * as actions from '../actions/productsActions';

const initState = {
  products: [],
  params: {
    search: '',
    active: false,
    promo: false,
    pagination: null,
  },
};

const products = (state = initState, action) => {
  switch (action.type) {
    case actions.GET_PRODUCTS_SUCCESSFUL:
      return {
        ...state,
        products: action.payload.items,
      };
    case actions.SET_SEARCH:
      return {
        ...state,
        params: {
          ...state.params,
          search: action.data,
        },
      };
    case actions.SET_FILTERS:
      return {
        ...state,
        params: {
          ...state.params,
          [action.name]: action.data,
        },
      };
    default:
      return state;
  }
};

export const getProducts = state => state.products.products;
export const getParams = state => state.products.params;

export default products;
