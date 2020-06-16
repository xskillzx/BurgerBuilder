import {
  ORDER_SUCCESS,
  ORDER_FAILED
} from '../actions/actionTypes';

const initialState = {
  error: null,
  loading: false
}

const order = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false
      }
    case ORDER_FAILED:
      return {
        ...state,
        error: true,
        loading: false
      }
    default:
      return state
  }
}

export default order;
