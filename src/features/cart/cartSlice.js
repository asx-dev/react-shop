import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  isOpen: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.value.length === 0
        ? (state.value = [action.payload])
        : (state.value = [...state.value, action.payload]);
    },
    removeFromCart: (state, action) => [
      state.value.filter((item) => item.name !== action.payload.name),
    ],
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { addToCart, removeFromCart, toggleCart } = cartSlice.actions;
export default cartSlice.reducer;
