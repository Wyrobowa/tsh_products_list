import reducer from '../productReducer';
import * as actions from '../../actions/productActions';

const initialState = {
  product: null,
};

describe('productReducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle GET_PRODUCT_SUCCESSFUL action', () => {
    const changedState = {
      ...initialState,
      product: {
        id: 1,
        name: 'Test product',
        image: 'test.jpg',
        description: 'test description',
        promo: true,
        active: true,
      },
    };

    expect(reducer(initialState, {
      type: actions.GET_PRODUCT_SUCCESSFUL,
      payload: {
        id: 1,
        name: 'Test product',
        image: 'test.jpg',
        description: 'test description',
        promo: true,
        active: true,
      },
    })).toEqual(changedState);
  });
});
