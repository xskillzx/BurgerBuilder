import {
  BURGER_ORDER_SUCCESS,
  BURGER_ORDER_FAILED,
  PURCHASE_BURGER_START,
  PURCHASE_INIT,
  FETCH_ORDERS_START,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAIL
} from './actionTypes';

import axios from '../../axios-orders' ;

const orderSuccess = (id, orderData) => {
  return {
    type: BURGER_ORDER_SUCCESS,
    orderId: id,
    orderData
  };
};

const orderFailed = (error) => {
  return {
    type: BURGER_ORDER_FAILED,
    error
  }
};

export const purchaseBurgerStart = () => {
  return {
    type: PURCHASE_BURGER_START
  }
};

export const purchaseInit = () => {
  return {
    type: PURCHASE_INIT
  }
};

export const placeOrder = orderData => {
  return dispatch => {
    dispatch(purchaseBurgerStart());
    axios.post('orders.json', orderData)
    .then(res => dispatch(orderSuccess(res.data.name, orderData)))
    .catch(error => dispatch(orderFailed(error)));
  }
};

export const fetchOrdersSuccess = orders => {
  return {
    type: FETCH_ORDERS_SUCCESS,
    orders
  }
}

export const fetchOrdersFail = error => {
  return {
    type: FETCH_ORDERS_FAIL,
    error
  }
}

export const fetchOrdersStart = () => {
  return {
    type: FETCH_ORDERS_START,
    
  }
}

export const fetchOrders = () => {
  return dispatch => {
    dispatch(fetchOrdersStart());
    axios.get('orders.json')
    .then(res => {
      const fetchedOrders = [];
      for (let key in res.data) {
        fetchedOrders.push({
          ...res.data[key],
          id: key
        });
      }
      dispatch(fetchOrdersSuccess(fetchedOrders));
    })
    .catch(err => {
      dispatch(fetchOrdersFail(err));
    })
  }
}
