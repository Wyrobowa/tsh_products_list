// Actions
import * as actions from '../actions/appStatusActions';

const initState = {
  login: {
    loggedIn: false,
    errorMsg: null,
  },
  loaderStatus: false,
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
    case actions.SHOW_LOADER:
      return {
        ...state,
        loaderStatus: true,
      };
    case actions.HIDE_LOADER:
      return {
        ...state,
        loaderStatus: false,
      };
    default:
      return state;
  }
};

export const getLoginStatus = state => state.appStatus.login;
export const getLoaderStatus = state => state.appStatus.loaderStatus;

export default appStatus;