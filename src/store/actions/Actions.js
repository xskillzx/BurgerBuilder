import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  PLACE_ORDER
} from './ActionTypes';

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
export const placeOrder = () => {
  return {
    type: PLACE_ORDER
  }
};
