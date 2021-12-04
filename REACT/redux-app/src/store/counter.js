import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

// We prepare the slice of globle state.
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
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

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
