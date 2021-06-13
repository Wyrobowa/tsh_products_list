import sagaTestingHelper from 'redux-saga-testing';
import { call, put, select } from 'redux-saga/effects';

// Actions
import { hideContainerLoader, showContainerLoader } from '../../actions/appStatusActions';
import { getProductsSuccessful, REQUEST_GET_PRODUCTS } from '../../actions/productsActions';

// Reducers
import { getParams } from '../../reducers/productsReducer';

// Sagas
import { getProducts } from '../productsSaga';

// Services
import { getData } from '../../services/requestService';
import { endpoints } from '../../services/consts';

describe('productsSaga', () => {
  const it = sagaTestingHelper(getProducts({ type: REQUEST_GET_PRODUCTS }));

  it('should get params', (result) => {
    expect(result).toEqual(select(getParams));
  });

  it('should show loader', (result) => {
    expect(result).toEqual(put(showContainerLoader()));
  });

  it('should get product', (result) => {
    expect(result).toEqual(call(getData, null, endpoints.products, ''));
  });

  it('should set product data', (result) => {
    expect(result).toEqual(put(getProductsSuccessful()));
  });

  it('should hide loader', (result) => {
    expect(result).toEqual(put(hideContainerLoader()));
  });
});
