import {
  BURGER_ORDER_SUCCESS,
  BURGER_ORDER_FAILED,
  PURCHASE_BURGER_START,
  PURCHASE_INIT
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
