import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT
} from './actionTypes';

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
