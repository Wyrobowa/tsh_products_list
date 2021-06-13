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
import { hideContainerLoader, showContainerLoader } from '../actions/appStatusActions';

export function* getProducts() {
  const token = localStorage.getItem('bearerToken');
  const params = yield select(getParams);
  const requestQuery = buildRequestQuery(params);

  try {
    yield put(showContainerLoader());
    const requestData = yield call(getData, token, endpoints.products, requestQuery);

    yield put(actions.getProductsSuccessful(requestData));
    yield put(hideContainerLoader());
  } catch (error) {
    yield put(actions.getProductsUnsuccessful());
    yield put(hideContainerLoader());
  }
}

export function* watchGetProducts() {
  yield takeLatest([
    actions.REQUEST_GET_PRODUCTS,
    actions.SET_FILTERS,
    actions.SET_PAGINATION,
  ], getProducts);
}
