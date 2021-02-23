import {
  BURGER_ORDER_SUCCESS,
  BURGER_ORDER_FAILED,
  PURCHASE_BURGER_START,
  PURCHASE_INIT,
  FETCH_ORDERS_START,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAIL
} from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  orders: [],
  loading: false,
  purchased: false
}

const purchaseInit = (state, action) => {
  const updatedState = {
    purchased: false
  };
  return updateObject(state, updatedState);
};

const purchaseBurgerStart = (state, action) => {
  const updatedState = {
    loading: true
  };
  return updateObject(state, updatedState);
};

const burgerOrderSuccess = (state, action) => {
  const newOrder = {
    ...action.orderData,
    id: action.orderId
  }
  const updatedState = {
    loading: false,
    purchased: true,
    orders: state.orders.concat(newOrder)
  };
  return updateObject(state, updatedState);
};

const burgerOrderFailed = (state, action) => {
  const updatedState = {
    loading: true
  };
  return updateObject(state, updatedState);
};

const fetchOrdersStart = (state, action) => {
  const updatedState = {
    loading: true
  };
  return updateObject(state, updatedState);
};

const fetchOrdersSuccess = (state, action) => {
  const updatedState = {
    orders: action.orders,
    loading: false
  };
  return updateObject(state, updatedState);
};

const fetchOrdersFail = (state, action) => {
  const updatedState = {
    loading: false
  };
  return updateObject(state, updatedState);
};

const order = (state = initialState, action) => {
  switch (action.type) {
    case PURCHASE_INIT: return purchaseInit(state, action);
    case PURCHASE_BURGER_START: return purchaseBurgerStart(state, action);
    case BURGER_ORDER_SUCCESS: return burgerOrderSuccess(state, action);
    case BURGER_ORDER_FAILED: return burgerOrderFailed(state, action);
    case FETCH_ORDERS_START: return fetchOrdersStart(state, action);
    case FETCH_ORDERS_SUCCESS: return fetchOrdersSuccess(state, action);
    case FETCH_ORDERS_FAIL: return fetchOrdersFail(state, action);
    default:
      return state
  }
}

export default order;
