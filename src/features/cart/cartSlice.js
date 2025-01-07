import { createSlice } from "@reduxjs/toolkit";

const cartCache = localStorage.getItem("cart");
const initialState = {
  value: cartCache ? JSON.parse(cartCache) : [],
  isOpen: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (state.value.length === 0) {
        state.value = [action.payload];
        return;
      }
      if (state.value.some((value) => value.name === action.payload.name)) {
        state.value = state.value.map((item) => {
          return item.name === action.payload.name
            ? { ...item, qty: item.qty + 1 }
            : item;
        });
      } else {
        state.value = [...state.value, action.payload];
      }
    },
    removeFromCart: (state, action) => {
      state.value = state.value.map((item) => {
        return item.name === action.payload
          ? { ...item, qty: item.qty - 1 }
          : item;
      });

      if (state.value.find((item) => item.qty === 0)) {
        state.value = state.value.filter(
          (item) => item.name !== action.payload
        );
      }
    },
    saveCartToStorage: (state) => {
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { addToCart, removeFromCart, toggleCart, saveCartToStorage } =
  cartSlice.actions;
export default cartSlice.reducer;
