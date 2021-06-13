import * as actions from '../productActions';

describe('productActions', () => {
  it('should create an action to getProductSuccessful', () => {
    const expectedAction = {
      type: actions.GET_PRODUCT_SUCCESSFUL,
    };
    expect(actions.getProductSuccessful()).toEqual(expectedAction);
  });

  it('should create an action to getProductUnsuccessful', () => {
    const expectedAction = {
      type: actions.GET_PRODUCT_UNSUCCESSFUL,
    };
    expect(actions.getProductUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestGetProduct', () => {
    const expectedAction = {
      type: actions.REQUEST_GET_PRODUCT,
    };
    expect(actions.requestGetProduct()).toEqual(expectedAction);
  });
});
