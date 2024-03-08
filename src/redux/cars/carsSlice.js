import { createSlice } from "@reduxjs/toolkit";
import { getAllCars, getCars } from "./operations";

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

const handleFulfilledFilters = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.cars = action.payload;
};

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],

    isLoading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCars.pending, handlePending)
      .addCase(getCars.fulfilled, handleFulfilled)
      .addCase(getCars.rejected, handleRejected)
      .addCase(getAllCars.pending, handlePending)
      .addCase(getAllCars.fulfilled, handleFulfilledFilters)
      .addCase(getAllCars.rejected, handleRejected);
  },
});

export const carsReducer = carsSlice.reducer;
export const { onNextPage } = carsSlice.actions;
