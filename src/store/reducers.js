import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  PLACE_ORDER
} from './actions/ActionTypes';

import { INGREDIENTS } from '../ingredients/ingredients';

const initialState = {
  ingredients: INGREDIENTS,
  totalPrice: 4,
}

const burgerBuilder = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      let ingredientType = action.payload.ingredientType;
      const updatedIngredients = {
        ...state.ingredients
      }
      updatedIngredients[ingredientType].quantity += 1;
      const newPrice = state.totalPrice + INGREDIENTS[ingredientType].price;
      return {
        ...state,
        totalPrice: newPrice,
        ingredients: updatedIngredients
      }
    case REMOVE_INGREDIENT:
      return {
        ...state
      }
    case PLACE_ORDER:
      return {
        ...state
      }
    default:
      return state
  }
}

export default burgerBuilder;
