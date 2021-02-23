import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  SET_INIT,
  FETCH_INGREDIENTS_FAILED
} from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  ingredients: null,
  totalPrice: 0,
  error: false
}

const addIngredient = (state, action) => {
  let ingType = action.payload.ingredientType;
  const updatedIngredient = updateObject(state.ingredients[ingType], {
    quantity: state.ingredients[ingType].quantity + 1 });
  const updatedIngredients = updateObject(state.ingredients, { [ingType]: updatedIngredient});
  const updatedState = {
    totalPrice: state.totalPrice + state.ingredients[ingType].price,
    ingredients: updatedIngredients
  };
  return updateObject(state, updatedState);
};

const removeIngredient = (state, action) => {
  let ingType = action.payload.ingredientType;
  if (state.ingredients[ingType].quantity <= 0) {
    return state;
  }
  const updatedIngredient = updateObject(state.ingredients[ingType], {
    quantity: state.ingredients[ingType].quantity - 1 });
  const updatedIngredients = updateObject(state.ingredients, { [ingType]: updatedIngredient});
  const updatedState = {
    totalPrice: state.totalPrice - state.ingredients[ingType].price,
    ingredients: updatedIngredients
  };
  return updateObject(state, updatedState);
};

const setInit = (state, action) => {
  const updatedState = {
    ingredients: action.ingredients,
    totalPrice: action.totalPrice,
    error: false
  };
  return updateObject(state, updatedState);
};

const fetchIngredientsFailed = (state, action) => {
  const updatedState = {
    error: true
  };
  return updateObject(state, updatedState);
};

const burgerBuilder = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT: return addIngredient(state, action);
    case REMOVE_INGREDIENT: return removeIngredient(state, action);
    case SET_INIT: return setInit(state, action);
    case FETCH_INGREDIENTS_FAILED: return fetchIngredientsFailed(state, action);
    default:
      return state
  }
}

export default burgerBuilder;
