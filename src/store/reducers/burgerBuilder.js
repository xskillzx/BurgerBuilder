import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  PLACE_ORDER
} from '../actions/actionTypes';

import { INGREDIENTS } from '../../ingredients/ingredients';

const initialState = {
  ingredients: INGREDIENTS,
  totalPrice: 4,
}

const burgerBuilder = (state = initialState, action) => {
  const updatedIngredients = {
    ...state.ingredients
  }
  switch (action.type) {
    case ADD_INGREDIENT:
      let ingredientType = action.payload.ingredientType;
      updatedIngredients[ingredientType].quantity += 1;
      const priceIncrease = state.totalPrice + INGREDIENTS[ingredientType].price;
      return {
        ...state,
        totalPrice: priceIncrease,
        ingredients: updatedIngredients
      }
    case REMOVE_INGREDIENT:
      let ingType = action.payload.ingredientType;
      const oldCount = state.ingredients[ingType].quantity;
      if (oldCount <= 0) {
        return state;
      }
      const updatedCount = oldCount - 1;
      updatedIngredients[ingType].quantity = updatedCount;
      const priceDeduction = INGREDIENTS[ingType].price;
      const priceDecrease = state.totalPrice - priceDeduction;
      return {
        ...state,
        totalPrice: priceDecrease,
        ingredients: updatedIngredients
      }
    case PLACE_ORDER:
      return {
        ...state,
        ...initialState
      }
    default:
      return state
  }
}

export default burgerBuilder;
