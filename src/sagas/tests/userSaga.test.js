import sagaTestingHelper from 'redux-saga-testing';
import { call, put } from 'redux-saga/effects';

// Actions
import { hideHeaderLoader, showHeaderLoader } from '../../actions/appStatusActions';
import { getUserSuccessful, REQUEST_GET_USER } from '../../actions/userActions';

// Sagas
import { getUser } from '../userSaga';

// Services
import { getData } from '../../services/requestService';
import { endpoints } from '../../services/consts';

describe('userSaga', () => {
  const it = sagaTestingHelper(getUser({ type: REQUEST_GET_USER }));

  it('should show loader', (result) => {
    expect(result).toEqual(put(showHeaderLoader()));
  });

  it('should get currently logged in user', (result) => {
    expect(result).toEqual(call(getData, null, endpoints.loggedInUser));
  });

  it('should set user data', (result) => {
    expect(result).toEqual(put(getUserSuccessful()));
  });

  it('should hide loader', (result) => {
    expect(result).toEqual(put(hideHeaderLoader()));
  });
});
