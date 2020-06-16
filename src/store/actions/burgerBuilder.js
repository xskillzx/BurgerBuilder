import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  SET_INGREDIENTS,
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

const setIngredients = ingredients => {
  return {
    type: SET_INGREDIENTS,
    ingredients
  };
};

const fetchIngredientsFailed = () => {
  return {
    type: FETCH_INGREDIENTS_FAILED
  }
};

export const initIngredients = () => {
  return dispatch => {
    axios.get('https://react-my-burger-cfa65.firebaseio.com/ingredients.json')
      .then(res => dispatch(setIngredients(res.data)))
      .catch(error => dispatch(fetchIngredientsFailed()));
  }
};
