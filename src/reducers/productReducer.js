// Actions
import * as actions from '../actions/productActions';

const initState = {
  product: null,
};

const product = (state = initState, action) => {
  switch (action.type) {
    case actions.GET_PRODUCT_SUCCESSFUL:
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
};

export const getProduct = state => state.product.product;

export default product;
