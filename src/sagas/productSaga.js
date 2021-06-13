import { call, put, takeEvery } from 'redux-saga/effects';

// Actions
import * as actions from '../actions/productActions';
import { hideModalLoader, showModalLoader } from '../actions/appStatusActions';

// Services
import { endpoints } from '../services/consts';
import { getData } from '../services/requestService';

export function* getProduct(action) {
  const token = localStorage.getItem('bearerToken');

  try {
    yield put(showModalLoader());
    const requestData = yield call(getData, token, `${endpoints.product}/${action.id}`);

    yield put(actions.getProductSuccessful(requestData));
    yield put(hideModalLoader());
  } catch (error) {
    yield put(actions.getProductUnsuccessful());
    yield put(hideModalLoader());
  }
}

export function* watchGetProduct() {
  yield takeEvery(actions.REQUEST_GET_PRODUCT, getProduct);
}
