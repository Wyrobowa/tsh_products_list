// Actions
import * as actions from '../actions/appStatusActions';

const initState = {
  login: {
    loggedIn: false,
    errorMsg: null,
  },
  loaderStatus: false,
  headerLoaderStatus: false,
  modalLoaderStatus: false,
};

const appStatus = (state = initState, action) => {
  switch (action.type) {
    case actions.LOGIN_SUCCESSFUL:
      return {
        ...state,
        login: {
          loggedIn: true,
          errorMsg: null,
        },
      };
    case actions.LOGIN_UNSUCCESSFUL:
      return {
        ...state,
        login: {
          ...initState.login,
          errorMsg: 'Your email or password are incorrect!',
        },
      };
    case actions.CLEAR_LOGIN:
      return {
        ...state,
        login: {
          ...initState.login,
        },
      };
    case actions.SHOW_CONTAINER_LOADER:
      return {
        ...state,
        loaderStatus: true,
      };
    case actions.HIDE_CONTAINER_LOADER:
      return {
        ...state,
        loaderStatus: false,
      };
    case actions.SHOW_HEADER_LOADER:
      return {
        ...state,
        headerLoaderStatus: true,
      };
    case actions.HIDE_HEADER_LOADER:
      return {
        ...state,
        headerLoaderStatus: false,
      };
    case actions.SHOW_MODAL_LOADER:
      return {
        ...state,
        modalLoaderStatus: true,
      };
    case actions.HIDE_MODAL_LOADER:
      return {
        ...state,
        modalLoaderStatus: false,
      };
    default:
      return state;
  }
};

export const getLoginStatus = state => state.appStatus.login;
export const getLoaderStatus = state => state.appStatus.loaderStatus;
export const getHeaderLoaderStatus = state => state.appStatus.headerLoaderStatus;
export const getModalLoaderStatus = state => state.appStatus.modalLoaderStatus;

export default appStatus;
