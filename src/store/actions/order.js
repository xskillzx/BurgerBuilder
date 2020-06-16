import {
  ORDER_SUCCESS,
  ORDER_FAILED
} from './actionTypes';

import axios from '../../axios-orders' ;

const orderSuccess = (id, orderData) => {
  return {
    type: ORDER_SUCCESS,
    orderId: id,
    orderData
  };
};

const orderFailed = (error) => {
  return {
    type: ORDER_FAILED,
    error
  }
};

export const placeOrder = orderData => {
  return dispatch => {
    axios.post('orders.json', orderData)
    .then(res => dispatch(orderSuccess(res.data, orderData)))
    .catch(error => dispatch(orderFailed(error)));
  }
};
