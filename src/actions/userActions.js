export const GET_USER_SUCCESSFUL = 'GET_USER_SUCCESSFUL';
export const GET_USER_UNSUCCESSFUL = 'GET_USER_UNSUCCESSFUL';
export const REQUEST_GET_USER = 'REQUEST_GET_USER';
export const CLEAR_USER = 'CLEAR_USER';

export const getUserSuccessful = payload => ({
  type: GET_USER_SUCCESSFUL,
  payload,
});

export const getUserUnsuccessful = () => ({
  type: GET_USER_UNSUCCESSFUL,
});

export const requestGetUser = () => ({
  type: REQUEST_GET_USER,
});

export const clearUser = () => ({
  type: CLEAR_USER,
});
