import { takeEvery } from 'redux-saga/effects';

// Actions
import { getProductsSuccessful, getProductsUnsuccessful, REQUEST_GET_PRODUCTS } from '../actions/productsActions';

// Sagas
import { requestGetDataSaga } from './sagasHelper';

export function* watchGetProducts() {
  yield takeEvery(REQUEST_GET_PRODUCTS, requestGetDataSaga(
    getProductsSuccessful,
    getProductsUnsuccessful,
    'products',
  ));
}
