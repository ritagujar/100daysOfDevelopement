import { ADD_TODO } from "./todoConstants";

export const AddTodoAction = (todo) => (dispatch, getState) => {
  const {
    Todo: { todos },
  } = getState();

  const hasTodo = todos.find((i) => i.todo === todo);

  if (!hasTodo && todo !== "") {
    dispatch({
      type: ADD_TODO,
      payload: [{ id: Math.random().toString(), todo }, ...todos],
    });
  }
};
