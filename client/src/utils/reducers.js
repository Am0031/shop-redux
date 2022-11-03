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

const reducers = () => {
  //add all reducer cases with switch/case syntax
  //depends on initial state/state and actions
};

export default reducers;
