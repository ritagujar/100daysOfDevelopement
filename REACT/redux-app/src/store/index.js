import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

const counterStore = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,

      // We need to set the showCounter property here becouse we are returning the overall state object
      // and Redux won't merge your changes with the existing state.
      // It instead takes what you return and replaces the existing state with it.
      showCounter: state.showCounter,
    };
  }

  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "toggle") {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }

  return state;
};

const store = createStore(counterStore);

export default store;
