import * as actions from '../appStatusActions';

describe('appStatusActions', () => {
  it('should create an action to loginSuccessful', () => {
    const expectedAction = {
      type: actions.LOGIN_SUCCESSFUL,
    };
    expect(actions.loginSuccessful()).toEqual(expectedAction);
  });

  it('should create an action to loginUnsuccessful', () => {
    const expectedAction = {
      type: actions.LOGIN_UNSUCCESSFUL,
    };
    expect(actions.loginUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestLogin', () => {
    const expectedAction = {
      type: actions.REQUEST_LOGIN,
    };
    expect(actions.requestLogin()).toEqual(expectedAction);
  });

  it('should create an action to clearLogin', () => {
    const expectedAction = {
      type: actions.CLEAR_LOGIN,
    };
    expect(actions.clearLogin()).toEqual(expectedAction);
  });

  it('should create an action to showLoader', () => {
    const expectedAction = {
      type: actions.SHOW_LOADER,
    };
    expect(actions.showLoader()).toEqual(expectedAction);
  });

  it('should create an action to hideLoader', () => {
    const expectedAction = {
      type: actions.HIDE_LOADER,
    };
    expect(actions.hideLoader()).toEqual(expectedAction);
  });
})