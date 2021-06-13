export const GET_PRODUCT_SUCCESSFUL = 'GET_PRODUCT_SUCCESSFUL';
export const GET_PRODUCT_UNSUCCESSFUL = 'GET_PRODUCT_UNSUCCESSFUL';
export const REQUEST_GET_PRODUCT = 'REQUEST_GET_PRODUCT';

export const getProductSuccessful = payload => ({
  type: GET_PRODUCT_SUCCESSFUL,
  payload,
});

export const getProductUnsuccessful = () => ({
  type: GET_PRODUCT_UNSUCCESSFUL,
});

export const requestGetProduct = id => ({
  type: REQUEST_GET_PRODUCT,
  id,
});
