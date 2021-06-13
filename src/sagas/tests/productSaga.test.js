import sagaTestingHelper from 'redux-saga-testing';
import { call, put } from 'redux-saga/effects';

// Actions
import { hideModalLoader, showModalLoader } from '../../actions/appStatusActions';
import { getProductSuccessful, REQUEST_GET_PRODUCT } from '../../actions/productActions';

// Sagas
import { getProduct } from '../productSaga';

// Services
import { getData } from '../../services/requestService';
import { endpoints } from '../../services/consts';

describe('productSaga', () => {
  const it = sagaTestingHelper(getProduct({ type: REQUEST_GET_PRODUCT, id: 1 }));

  it('should show loader', (result) => {
    expect(result).toEqual(put(showModalLoader()));
  });

  it('should get product', (result) => {
    expect(result).toEqual(call(getData, null, `${endpoints.product}/1`));
  });

  it('should set product data', (result) => {
    expect(result).toEqual(put(getProductSuccessful()));
  });

  it('should hide loader', (result) => {
    expect(result).toEqual(put(hideModalLoader()));
  });
});
