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
      state.value = [...state.value, action.payload];
    },
    saveBookmarksToStorage: (state) => {
      localStorage.setItem("bookmarks", JSON.stringify(state.value));
    },
  },
});

export const { saveItem, saveBookmarksToStorage } = savedItemsSlice.actions;
export default savedItemsSlice.reducer;
