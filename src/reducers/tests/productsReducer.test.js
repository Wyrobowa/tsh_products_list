import reducer from '../productsReducer';
import * as actions from '../../actions/productsActions';

const initialState = {
  products: [],
  params: {
    search: '',
    active: false,
    promo: false,
    page: null,
    limit: null,
  },
  pagination: {
    currentPage: null,
    itemCount: null,
    itemsPerPage: null,
    totalItems: null,
    totalPages: null,
  },
};

describe('productsReducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle GET_PRODUCT_SUCCESSFUL action', () => {
    const changedState = {
      ...initialState,
      products: [
        {
          id: 1,
          name: 'Test product',
          image: 'test.jpg',
          description: 'test description',
          promo: true,
          active: true,
        },
        {
          id: 2,
          name: 'Test product 2',
          image: 'test.jpg',
          description: 'test description',
          promo: true,
          active: true,
        },
      ],
      params: {
        ...initialState.params,
        page: 1,
        limit: 8,
      },
      pagination: {
        currentPage: 1,
        itemsPerPage: 8,
      },
    };

    expect(reducer(initialState, {
      type: actions.GET_PRODUCTS_SUCCESSFUL,
      payload: {
        items: [
          {
            id: 1,
            name: 'Test product',
            image: 'test.jpg',
            description: 'test description',
            promo: true,
            active: true,
          },
          {
            id: 2,
            name: 'Test product 2',
            image: 'test.jpg',
            description: 'test description',
            promo: true,
            active: true,
          },
        ],
        meta: {
          currentPage: 1,
          itemsPerPage: 8,
        },
      },
    })).toEqual(changedState);
  });

  it('should handle SET_SEARCH action', () => {
    const changedState = {
      ...initialState,
      params: {
        ...initialState.params,
        search: 'test',
      },
    };

    expect(reducer(initialState, {
      type: actions.SET_SEARCH,
      data: 'test',
    })).toEqual(changedState);
  });

  it('should handle SET_FILTERS action', () => {
    const changedState = {
      ...initialState,
      params: {
        ...initialState.params,
        active: true,
      },
    };

    expect(reducer(initialState, {
      type: actions.SET_FILTERS,
      name: 'active',
      data: true,
    })).toEqual(changedState);
  });

  it('should handle SET_PAGINATION action', () => {
    const changedState = {
      ...initialState,
      params: {
        ...initialState.params,
        page: 1,
        limit: 8,
      },
    };

    expect(reducer(initialState, {
      type: actions.SET_PAGINATION,
      page: 1,
      limit: 8,
    })).toEqual(changedState);
  });
});
