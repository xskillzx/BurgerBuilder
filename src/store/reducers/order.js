import {
  BURGER_ORDER_SUCCESS,
  BURGER_ORDER_FAILED,
  PURCHASE_BURGER_START,
  PURCHASE_INIT,
  FETCH_ORDERS_START,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAIL
} from '../actions/actionTypes';

const initialState = {
  orders: [],
  loading: false,
  purchased: false
}

const order = (state = initialState, action) => {
  switch (action.type) {
    case PURCHASE_INIT:
      return {
        ...state,
        purchased: false
      }
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
        purchased: true,
        orders: state.orders.concat(newOrder)
      }
    case BURGER_ORDER_FAILED:
      return {
        ...state,
        loading: true
      }
    case FETCH_ORDERS_START:
      return {
        ...state,
        loading: true
      }
    case FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.orders,
        loading: false
      }
    case FETCH_ORDERS_FAIL:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

export default order;
