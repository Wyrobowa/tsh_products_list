import reducer from '../userReducer';
import * as actions from '../../actions/userActions';

const initialState = {
  user: null,
};

describe('userReducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle GET_USER_SUCCESSFUL action', () => {
    const changedState = {
      ...initialState,
      user: {
        id: 1,
        username: 'test',
        avatar: 'test.jpg',
      },
    };

    expect(reducer(initialState, {
      type: actions.GET_USER_SUCCESSFUL,
      payload: {
        id: 1,
        username: 'test',
        avatar: 'test.jpg',
      },
    })).toEqual(changedState);
  });

  it('should handle CLEAR_USER action', () => {
    const changedState = {
      ...initialState,
    };

    expect(reducer(initialState, {
      type: actions.CLEAR_USER,
    })).toEqual(changedState);
  });
});
