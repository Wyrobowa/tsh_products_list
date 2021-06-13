import * as actions from '../productsActions';

describe('productsActions', () => {
  it('should create an action to getProductsSuccessful', () => {
    const expectedAction = {
      type: actions.GET_PRODUCTS_SUCCESSFUL,
    };
    expect(actions.getProductsSuccessful()).toEqual(expectedAction);
  });

  it('should create an action to getProductsUnsuccessful', () => {
    const expectedAction = {
      type: actions.GET_PRODUCTS_UNSUCCESSFUL,
    };
    expect(actions.getProductsUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestGetProducts', () => {
    const expectedAction = {
      type: actions.REQUEST_GET_PRODUCTS,
    };
    expect(actions.requestGetProducts()).toEqual(expectedAction);
  });

  it('should create an action to setSearch', () => {
    const expectedAction = {
      type: actions.SET_SEARCH,
    };
    expect(actions.setSearch()).toEqual(expectedAction);
  });

  it('should create an action to setFilters', () => {
    const expectedAction = {
      type: actions.SET_FILTERS,
    };
    expect(actions.setFilters()).toEqual(expectedAction);
  });

  it('should create an action to setPagination', () => {
    const expectedAction = {
      type: actions.SET_PAGINATION,
    };
    expect(actions.setPagination()).toEqual(expectedAction);
  });
});
