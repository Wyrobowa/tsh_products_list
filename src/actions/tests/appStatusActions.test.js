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

  it('should create an action to showContainerLoader', () => {
    const expectedAction = {
      type: actions.SHOW_CONTAINER_LOADER,
    };
    expect(actions.showContainerLoader()).toEqual(expectedAction);
  });

  it('should create an action to hideContainerLoader', () => {
    const expectedAction = {
      type: actions.HIDE_CONTAINER_LOADER,
    };
    expect(actions.hideContainerLoader()).toEqual(expectedAction);
  });

  it('should create an action to showHeaderLoader', () => {
    const expectedAction = {
      type: actions.SHOW_HEADER_LOADER,
    };
    expect(actions.showHeaderLoader()).toEqual(expectedAction);
  });

  it('should create an action to hideHeaderLoader', () => {
    const expectedAction = {
      type: actions.HIDE_HEADER_LOADER,
    };
    expect(actions.hideHeaderLoader()).toEqual(expectedAction);
  });

  it('should create an action to showModalLoader', () => {
    const expectedAction = {
      type: actions.SHOW_MODAL_LOADER,
    };
    expect(actions.showModalLoader()).toEqual(expectedAction);
  });

  it('should create an action to hideModalLoader', () => {
    const expectedAction = {
      type: actions.HIDE_MODAL_LOADER,
    };
    expect(actions.hideModalLoader()).toEqual(expectedAction);
  });
});
