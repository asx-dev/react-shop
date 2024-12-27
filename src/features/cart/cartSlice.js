import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
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
      state.filter((item) => item.name !== action.payload.name),
    ],
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
