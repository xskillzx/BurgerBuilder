import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  SET_INIT,
  FETCH_INGREDIENTS_FAILED
} from './actionTypes';

import axios from '../../axios-orders' ;

export const addIngredient = ingredientType => {
  return {
    type: ADD_INGREDIENT,
    payload: {
      ingredientType
    }
  }
};
export const removeIngredient = ingredientType => {
  return {
    type: REMOVE_INGREDIENT,
    payload: {
      ingredientType
    }
  }
};

const setInit = initData => {
  return {
    type: SET_INIT,
    ingredients: initData.ingredients,
    totalPrice: initData.baseCost
  };
};

const fetchIngredientsFailed = () => {
  return {
    type: FETCH_INGREDIENTS_FAILED
  }
};

export const initIngredients = () => {
  return dispatch => {
    axios.get('https://react-my-burger-cfa65.firebaseio.com/init.json')
      .then(res => dispatch(setInit(res.data)))
      .catch(error => dispatch(fetchIngredientsFailed(error)));
  }
};
