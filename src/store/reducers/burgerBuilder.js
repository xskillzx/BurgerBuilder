import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  PLACE_ORDER,
  SET_INGREDIENTS,
  FETCH_INGREDIENTS_FAILED
} from '../actions/actionTypes';

const initialState = {
  ingredients: null,
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
      const priceIncrease = state.totalPrice + state.ingredients[ingredientType].price;
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
      const priceDeduction = state.ingredients[ingType].price;
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
    case SET_INGREDIENTS:
      return {
        ...state,
        ingredients: action.ingredients,
        error: false
      }
    case FETCH_INGREDIENTS_FAILED:
      return {
        ...state,
        error: true
      }
    default:
      return state
  }
}

export default burgerBuilder;
