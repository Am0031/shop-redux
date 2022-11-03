import {
  UPDATE_PRODUCTS,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  CLEAR_CART,
  TOGGLE_CART,
} from "./actions";

const initialState = {
  products: [],
  categories: [],
  currentCategory: "",
  cart: [],
  cartOpen: false,
};

//depends on initial state/state and actions
const reducers = (state = initialState, action) => {
  //add all reducer cases with switch/case syntax
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.product],
      };
    case ADD_MULTIPLE_TO_CART:
      return {};
    case UPDATE_CART_QUANTITY:
      return {};
    case UPDATE_CATEGORIES:
      return {};
    case UPDATE_CURRENT_CATEGORY:
      return {};
    case UPDATE_PRODUCTS:
      return {};
    case REMOVE_FROM_CART:
      return {};
    case CLEAR_CART:
      return {};
    case TOGGLE_CART:
      return {};
    default:
      return state;
  }
};

export default reducers;
