import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  PLACE_ORDER
} from './actions/ActionTypes';

const initialState = {
  ingredients: null,
  totalPrice: 4,
}

const burgerBuilder = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return {
        ...state
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
