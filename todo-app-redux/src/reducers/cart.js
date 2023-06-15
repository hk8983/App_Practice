import { ADD_TO_CART, REMOVE_TO_CART } from "../Constant";

const initialState = {
  count: 0,
};
export default function cardItems(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        count: state.count + 1,
      };

    case REMOVE_TO_CART:
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
}
