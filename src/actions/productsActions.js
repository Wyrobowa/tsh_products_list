export const GET_PRODUCTS_SUCCESSFUL = 'GET_PRODUCTS_SUCCESSFUL';
export const GET_PRODUCTS_UNSUCCESSFUL = 'GET_PRODUCTS_UNSUCCESSFUL';
export const REQUEST_GET_PRODUCTS = 'REQUEST_GET_PRODUCTS';
export const SET_SEARCH = 'SET_SEARCH';
export const SET_FILTERS = 'SET_FILTERS';

export const getProductsSuccessful = payload => ({
  type: GET_PRODUCTS_SUCCESSFUL,
  payload,
});

export const getProductsUnsuccessful = () => ({
  type: GET_PRODUCTS_UNSUCCESSFUL,
});

export const requestGetProducts = query => ({
  type: REQUEST_GET_PRODUCTS,
  query,
});

export const setSearch = data => ({
  type: SET_SEARCH,
  data,
});

export const setFilters = (name, data) => ({
  type: SET_FILTERS,
  name,
  data,
});
