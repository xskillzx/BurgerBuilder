import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  PLACE_ORDER
} from './ActionTypes';

export const addIngredient = () => {
  return {
    type: ADD_INGREDIENT
  }
};
export const removeIngredient = () => {
  return {
    type: REMOVE_INGREDIENT
  }
};
export const placeOrder = () => {
  return {
    type: PLACE_ORDER
  }
};
