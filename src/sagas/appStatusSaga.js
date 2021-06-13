import { put, takeEvery, call } from 'redux-saga/effects';

// Actions
import * as actions from '../actions/appStatusActions';
import { hideContainerLoader, showContainerLoader } from '../actions/appStatusActions';

// Services
import { sendData } from '../services/requestService';
import { endpoints } from '../services/consts';

export function* login(action) {
  const token = localStorage.getItem('bearerToken');

  try {
    yield put(showContainerLoader());
    const requestData = yield call(sendData, token, endpoints.login, action.credentials);

    if (requestData?.access_token) {
      localStorage.setItem('bearerToken', requestData.access_token);
    }
    if (requestData?.user?.id) {
      localStorage.setItem('userId', requestData.user.id);
    }

    yield put(actions.loginSuccessful());
    yield put(hideContainerLoader());
  } catch (error) {
    yield put(actions.loginUnsuccessful());
    yield put(hideContainerLoader());
  }
}

export function* watchLogin() {
  yield takeEvery(actions.REQUEST_LOGIN, login);
}
