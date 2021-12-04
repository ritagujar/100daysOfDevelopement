// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

// const counterStore = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,

//       // We need to set the showCounter property here becouse we are returning the overall state object
//       // and Redux won't merge your changes with the existing state.
//       // It instead takes what you return and replaces the existing state with it.

//       // Set all the other states when we update a piece of state becouse we override the old state.
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }

//   return state;
// };

// const store = createStore(counterSlice.reducer);

// confidureStore like createStore creates a store, but it makes merging multiple reducers into one reducer easier thereafter.

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
