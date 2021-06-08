import { put, takeEvery, call } from 'redux-saga/effects';

// Actions
import * as actions from '../actions/appStatusActions';
import { hideLoader, showLoader } from '../actions/appStatusActions';

// Services
import { sendData } from '../services/requestService';

export function* login(action) {
  const token = localStorage.getItem('bearerToken');

  try {
    yield put(showLoader());
    const requestData = yield call(sendData, token, 'users/login', action.credentials);

    if (requestData?.access_token) {
      localStorage.setItem('bearerToken', requestData.access_token);
    }
    if (requestData?.user?.id) {
      localStorage.setItem('userId', requestData.user.id);
    }

    yield put(actions.loginSuccessful(requestData));
    yield put(hideLoader());
  } catch (error) {
    yield put(actions.loginUnsuccessful());
    yield put(hideLoader());
  }
}

export function* watchLogin() {
  yield takeEvery(actions.REQUEST_LOGIN, login);
}
