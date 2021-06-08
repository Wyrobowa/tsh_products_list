import { call, put, select, takeLatest } from 'redux-saga/effects';

// Actions
import * as actions from '../actions/productsActions';

// Helpers
import { buildRequestQuery } from '../helpers/requestQueryHelper';

// Reducers
import { getParams } from '../reducers/productsReducer';

// Services
import { endpoints } from '../services/consts';
import { getData } from '../services/requestService';
import { hideLoader, showLoader } from '../actions/appStatusActions';

export function* getProducts() {
  const params = yield select(getParams);
  const requestQuery = buildRequestQuery(params);

  try {
    yield put(showLoader());
    const requestData = yield call(getData, endpoints.products, requestQuery);

    yield put(actions.getProductsSuccessful(requestData));
    yield put(hideLoader());
  } catch (error) {
    yield put(actions.getProductsUnsuccessful());
    yield put(hideLoader());
  }
}

export function* watchGetProducts() {
  yield takeLatest([
    actions.REQUEST_GET_PRODUCTS,
    actions.SET_FILTERS,
    actions.SET_PAGINATION,
  ], getProducts);
}
