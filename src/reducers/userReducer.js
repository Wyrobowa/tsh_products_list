// Actions
import * as actions from '../actions/userActions';

const initState = {
  user: null,
};

const user = (state = initState, action) => {
  switch (action.type) {
    case actions.GET_USER_SUCCESSFUL:
      return {
        ...state,
        user: action.payload,
      };
    case actions.CLEAR_USER:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export const getUser = state => state.user.user;

export default user;
