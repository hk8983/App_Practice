import { combineReducers } from "redux";
import todos from "./todos";
import cardItems from "./cart";

const rootReducer = combineReducers({
  todos,
  cardItems,
});
export default rootReducer;
