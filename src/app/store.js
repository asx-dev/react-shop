import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import bookmarksReducer from "../features/bookmarks/bookmarksSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    bookmarks: bookmarksReducer,
  },
});
