import { createSlice } from "@reduxjs/toolkit";

const favoritesSlise = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavorites: (state, action) => {
      const index = state.favorites.findIndex(
        (favorite) => favorite.id === action.payload.id
      );

      if (index === -1) {
        state.favorites = [...state.favorites, action.payload];
        return;
      }
      state.favorites.splice(index, 1);
    },
  },
});

export const { addFavorites } = favoritesSlise.actions;
export const favoritesReducer = favoritesSlise.reducer;
