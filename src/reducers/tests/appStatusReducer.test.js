import reducer from '../appStatusReducer';
import * as actions from '../../actions/appStatusActions';

const initialState = {
  login: {
    loggedIn: false,
    errorMsg: null,
  },
  loaderStatus: false,
  headerLoaderStatus: false,
  modalLoaderStatus: false,
};

describe('appStatusReducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle LOGIN_SUCCESSFUL action', () => {
    const changedState = {
      ...initialState,
      login: {
        loggedIn: true,
        errorMsg: null,
      },
    };

    expect(reducer(initialState, {
      type: actions.LOGIN_SUCCESSFUL,
    })).toEqual(changedState);
  });

  it('should handle LOGIN_UNSUCCESSFUL action', () => {
    const changedState = {
      ...initialState,
      login: {
        ...initialState.login,
        errorMsg: 'Your email or password are incorrect!',
      },
    };

    expect(reducer(initialState, {
      type: actions.LOGIN_UNSUCCESSFUL,
    })).toEqual(changedState);
  });

  it('should handle CLEAR_LOGIN action', () => {
    const changedState = {
      ...initialState,
      login: {
        ...initialState.login,
      },
    };

    expect(reducer(initialState, {
      type: actions.CLEAR_LOGIN,
    })).toEqual(changedState);
  });

  it('should handle SHOW_CONTAINER_LOADER action', () => {
    const changedState = {
      ...initialState,
      loaderStatus: true,
    };

    expect(reducer(initialState, {
      type: actions.SHOW_CONTAINER_LOADER,
    })).toEqual(changedState);
  });

  it('should handle HIDE_CONTAINER_LOADER action', () => {
    const changedState = {
      ...initialState,
      loaderStatus: false,
    };

    expect(reducer(initialState, {
      type: actions.HIDE_CONTAINER_LOADER,
    })).toEqual(changedState);
  });

  it('should handle SHOW_HEADER_LOADER action', () => {
    const changedState = {
      ...initialState,
      headerLoaderStatus: true,
    };

    expect(reducer(initialState, {
      type: actions.SHOW_HEADER_LOADER,
    })).toEqual(changedState);
  });

  it('should handle HIDE_HEADER_LOADER action', () => {
    const changedState = {
      ...initialState,
      headerLoaderStatus: false,
    };

    expect(reducer(initialState, {
      type: actions.HIDE_HEADER_LOADER,
    })).toEqual(changedState);
  });

  it('should handle SHOW_MODAL_LOADER action', () => {
    const changedState = {
      ...initialState,
      modalLoaderStatus: true,
    };

    expect(reducer(initialState, {
      type: actions.SHOW_MODAL_LOADER,
    })).toEqual(changedState);
  });

  it('should handle HIDE_MODAL_LOADER action', () => {
    const changedState = {
      ...initialState,
      modalLoaderStatus: false,
    };

    expect(reducer(initialState, {
      type: actions.HIDE_MODAL_LOADER,
    })).toEqual(changedState);
  });
});
