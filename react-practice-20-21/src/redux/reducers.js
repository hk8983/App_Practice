import { CHANGE_NAME, CHANGE_LANG } from "./action";

const defaultState = {
  name: "Hardik",
  lang: "English",
};

const reducer = (state = defaultState, action) => {
  // {
  //   console.log(action);
  // }
  if (action.type === CHANGE_NAME) {
    return {
      ...state,
      name: action.payload,
      // lang: action.payload,
    };
  }
  if (action.type === CHANGE_LANG) {
    return {
      ...state,
      // name: action.payload,
      lang: action.payload,
    };
  }
  return state;
};

export default reducer;
