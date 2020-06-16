import {
  BURGER_ORDER_SUCCESS,
  BURGER_ORDER_FAILED,
  PURCHASE_BURGER_START
} from '../actions/actionTypes';

const initialState = {
  orders: [],
  loading: false
}

const order = (state = initialState, action) => {
  switch (action.type) {
    case PURCHASE_BURGER_START:
      return {
        ...state,
        loading: true
      }
    case BURGER_ORDER_SUCCESS:
      const newOrder = {
        ...action.orderData,
        id: action.orderId
      }
      return {
        ...state,
        loading: false,
        orders: state.orders.concat(newOrder)
      }
    case BURGER_ORDER_FAILED:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}

export default order;
