import { createSlice } from "@reduxjs/toolkit";
// TODO: Solve the problem loading the local storage items
const cartCache = localStorage.getItem("cart");
console.log(cartCache);
const initialState = {
  value: cartCache ? [...cartCache] : [],
  isOpen: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // The cart is empty
      if (state.value.length === 0) {
        state.value = [action.payload];
        return;
      }
      // The cart already contains the product
      if (state.value.some((value) => value.name === action.payload.name)) {
        state.value = state.value.map((item) => {
          return item.name === action.payload.name
            ? { ...item, qty: item.qty + 1 }
            : item;
        });
      } else {
        // Save the new product
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
