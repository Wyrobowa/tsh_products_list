// Actions
import * as actions from '../actions/productsActions';

const initState = {
  products: [],
  params: {
    search: '',
    active: false,
    promo: false,
    page: null,
    limit: null,
  },
  pagination: {
    currentPage: null,
    itemCount: null,
    itemsPerPage: null,
    totalItems: null,
    totalPages: null,
  },
};

const products = (state = initState, action) => {
  switch (action.type) {
    case actions.GET_PRODUCTS_SUCCESSFUL:
      return {
        ...state,
        products: action.payload.items,
        params: {
          ...state.params,
          page: action.payload.meta?.currentPage,
          limit: action.payload.meta?.itemsPerPage,
        },
        pagination: {
          ...action.payload.meta,
        },
      };
    case actions.SET_SEARCH:
      return {
        ...state,
        params: {
          ...state.params,
          search: action.data,
          page: null,
        },
      };
    case actions.SET_FILTERS:
      return {
        ...state,
        params: {
          ...state.params,
          [action.name]: action.data,
          page: null,
        },
      };
    case actions.SET_PAGINATION:
      return {
        ...state,
        params: {
          ...state.params,
          page: action.page,
          limit: action.limit,
        },
      };
    default:
      return state;
  }
};

export const getProducts = state => state.products.products;
export const getParams = state => state.products.params;
export const getPagination = state => state.products.pagination;

export default products;
