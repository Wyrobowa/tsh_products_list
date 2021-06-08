export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';
export const LOGIN_UNSUCCESSFUL = 'LOGIN_UNSUCCESSFUL';
export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const CLEAR_LOGIN = 'CLEAR_LOGIN';
export const SHOW_LOADER = 'SHOW_LOADER';
export const HIDE_LOADER = 'HIDE_LOADER';

export const loginSuccessful = payload => ({
  type: LOGIN_SUCCESSFUL,
  payload,
});

export const loginUnsuccessful = () => ({
  type: LOGIN_UNSUCCESSFUL,
});

export const requestLogin = credentials => ({
  type: REQUEST_LOGIN,
  credentials,
});

export const clearLogin = () => ({
  type: CLEAR_LOGIN,
});

export const showLoader = () => ({
  type: SHOW_LOADER,
});

export const hideLoader = () => ({
  type: HIDE_LOADER,
});
