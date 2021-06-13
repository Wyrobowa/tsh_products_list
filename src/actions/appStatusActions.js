export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';
export const LOGIN_UNSUCCESSFUL = 'LOGIN_UNSUCCESSFUL';
export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const CLEAR_LOGIN = 'CLEAR_LOGIN';
export const SHOW_CONTAINER_LOADER = 'SHOW_CONTAINER_LOADER';
export const HIDE_CONTAINER_LOADER = 'HIDE_CONTAINER_LOADER';
export const SHOW_HEADER_LOADER = 'SHOW_HEADER_LOADER';
export const HIDE_HEADER_LOADER = 'HIDE_HEADER_LOADER';
export const SHOW_MODAL_LOADER = 'SHOW_MODAL_LOADER';
export const HIDE_MODAL_LOADER = 'HIDE_MODAL_LOADER';

export const loginSuccessful = () => ({
  type: LOGIN_SUCCESSFUL,
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

export const showContainerLoader = () => ({
  type: SHOW_CONTAINER_LOADER,
});

export const hideContainerLoader = () => ({
  type: HIDE_CONTAINER_LOADER,
});

export const showHeaderLoader = () => ({
  type: SHOW_HEADER_LOADER,
});

export const hideHeaderLoader = () => ({
  type: HIDE_HEADER_LOADER,
});

export const showModalLoader = () => ({
  type: SHOW_MODAL_LOADER,
});

export const hideModalLoader = () => ({
  type: HIDE_MODAL_LOADER,
});
