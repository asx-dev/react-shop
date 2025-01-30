import { createSlice } from "@reduxjs/toolkit";

const bookmarksCache = localStorage.getItem("bookmarks");
const initialState = {
  value: bookmarksCache ? JSON.parse(bookmarksCache) : [],
};

export const savedItemsSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    saveItem: (state, action) => {
      if (state.value.some((item) => item.name === action.payload.name)) {
        return;
      }
      state.value = [...state.value, action.payload];
    },
    removeItem: (state, action) => {
      state.value = state.value.filter(
        (item) => item.name !== action.payload.name
      );
    },
    saveBookmarksToStorage: (state) => {
      localStorage.setItem("bookmarks", JSON.stringify(state.value));
    },
  },
});

export const { saveItem, removeItem, saveBookmarksToStorage } =
  savedItemsSlice.actions;
export default savedItemsSlice.reducer;
