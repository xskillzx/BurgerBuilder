import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  PLACE_ORDER
} from './ActionTypes';

export const ADD_INGREDIENT = () => {
  return {
    type: ADD_INGREDIENT
  }
};
export const REMOVE_INGREDIENT = () => {
  return {
    type: REMOVE_INGREDIENT
  }
};
export const PLACE_ORDER = () => {
  return {
    type: PLACE_ORDER
  }
};
