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

export function* getProducts() {
  const params = yield select(getParams);
  const requestQuery = buildRequestQuery(params);

  try {
    const requestData = yield call(getData, endpoints.products, requestQuery);

    yield put(actions.getProductsSuccessful(requestData));
  } catch (error) {
    yield put(actions.getProductsUnsuccessful());
  }
}

export function* watchGetProducts() {
  yield takeLatest([
    actions.REQUEST_GET_PRODUCTS,
    actions.SET_FILTERS,
    actions.SET_PAGINATION,
  ], getProducts);
}
