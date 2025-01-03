import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  isOpen: false,
};
// TODO: Solve Cart problem when adding same podructs to cart (Map?, Immutable methods?)
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.value.length === 0
        ? (state.value = [action.payload])
        : (state.value = [...state.value, action.payload]);
    },
    removeFromCart: (state, action) => {
      state.value = state.value.filter((item) => item.name !== action.payload);
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { addToCart, removeFromCart, toggleCart } = cartSlice.actions;
export default cartSlice.reducer;
