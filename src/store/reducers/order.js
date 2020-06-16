import {
  ORDER_SUCCESS,
  ORDER_FAILED
} from '../actions/actionTypes';

const initialState = {
  orders: [],
  loading: false
}

const order = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_SUCCESS:
      const newOrder = {
        ...action.orderData,
        id: action.orderId
      }
      return {
        ...state,
        loading: false,
        orders: state.orders.concat(newOrder)
      }
    case ORDER_FAILED:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}

export default order;
