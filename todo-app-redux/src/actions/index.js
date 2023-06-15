import { ADD_TO_CART, DELETE_TODO, REMOVE_TO_CART } from "../Constant";

/* todo list action */
const ADD_TODO = "ADD_TODO";
export const addTodoAction = (message) => ({
  type: ADD_TODO,
  message,
  id: Math.random(),
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});

/* cart action */
export const AddToCart = (data) => {
  return {
    type: ADD_TO_CART,
    data,
  };
};

export const RemoveToCart = (data) => {
  return {
    type: REMOVE_TO_CART,
    data,
  };
};
