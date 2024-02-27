import { createSlice } from "@reduxjs/toolkit";
import { getCarId, getCars } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  // state.cars = [...state.cars, ...action.payload];
  state.cars = action.payload;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const handleFulfilledFavorites = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.isFavorite = true;
  state.cars.favorites = [...state.cars, action.payload];
}

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    favoriters:[],
    isFavorite:false,
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCars.pending, handlePending)
      .addCase(getCars.fulfilled, handleFulfilled)
      .addCase(getCars.rejected, handleRejected)
    .addCase(getCarId.pending, handlePending)
      .addCase(getCarId.fulfilled,handleFulfilledFavorites)
    .addCase(getCarId.rejected, handleRejected);
  },
});

export const carsReducer = carsSlice.reducer;
export const { toggleFavorite } = carsSlice.reducer;
