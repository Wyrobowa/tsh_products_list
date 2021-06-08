import * as actions from '../userActions';

describe('userActions', () => {
  it('should create an action to getUserSuccessful', () => {
    const expectedAction = {
      type: actions.GET_USER_SUCCESSFUL,
    };
    expect(actions.getUserSuccessful()).toEqual(expectedAction);
  });

  it('should create an action to getUserUnsuccessful', () => {
    const expectedAction = {
      type: actions.GET_USER_UNSUCCESSFUL,
    };
    expect(actions.getUserUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestGetUser', () => {
    const expectedAction = {
      type: actions.REQUEST_GET_USER,
    };
    expect(actions.requestGetUser()).toEqual(expectedAction);
  });

  it('should create an action to clearUser', () => {
    const expectedAction = {
      type: actions.CLEAR_USER,
    };
    expect(actions.clearUser()).toEqual(expectedAction);
  });
})