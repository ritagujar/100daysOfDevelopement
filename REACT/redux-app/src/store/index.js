import { createStore } from "redux";

const counterStore = (state = { counter: 0 }, action) => {
  if (action.type === "increament") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decreament") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = createStore(counterStore);

export default store;
