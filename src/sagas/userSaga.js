import { put, takeEvery, call } from 'redux-saga/effects';

// Actions
import * as actions from '../actions/userActions';
import { hideHeaderLoader, showHeaderLoader } from '../actions/appStatusActions';

// Services
import { getData } from '../services/requestService';

export function* getUser() {
  const token = localStorage.getItem('bearerToken');

  try {
    yield put(showHeaderLoader());
    const requestData = yield call(getData, token, 'users/me');

    yield put(actions.getUserSuccessful(requestData));
    yield put(hideHeaderLoader());
  } catch (error) {
    yield put(actions.getUserUnsuccessful());
    yield put(hideHeaderLoader());
  }
}

export function* watchGetUser() {
  yield takeEvery(actions.REQUEST_GET_USER, getUser);
}
