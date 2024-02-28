import { createSlice } from "@reduxjs/toolkit";

const favoritesSlise = createSlice({
    name: "favorites",
  initialState: {
    favorites: [],
  },
  
})

export const favoritesReducer = favoritesSlise.reducer;