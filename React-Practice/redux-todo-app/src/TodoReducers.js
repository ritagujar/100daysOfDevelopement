import { ADD_TODO } from "./todoConstants";

export const AddTodoReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { todos: action.payload };

    default:
      return state;
  }
};
