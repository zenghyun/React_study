import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         counter: state.counter + 1,
//         showCounter: state.showCounter,
//       };
//     case "INCREASE":
//       return {
//         counter: state.counter + action.amount,
//         showCounter: state.showCounter,
//       };
//     case "DECREMENT":
//       return {
//         counter: state.counter - 1,
//         showCounter: state.showCounter,
//       };
//     case "TOGGLE":
//       return {
//           counter: state.counter,
//           showCounter: !state.showCounter,
//       };
//     default:
//       return state;
//   }
// };

export const { increment, decrement, increase, toggleCounter } =
  counterSlice.actions;
export default counterSlice.reducer;
