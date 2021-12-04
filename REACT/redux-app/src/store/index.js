// import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

// We prepare the slice of globle state.
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // Here we don't need action becouse
    // This methods will automatically called depending on which action was triggered
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },

    // Here we use action becouse we need a data that attached to the action (Payload).
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

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
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;
export default store;
