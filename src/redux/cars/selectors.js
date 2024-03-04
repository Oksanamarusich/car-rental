import { createSelector } from "@reduxjs/toolkit";

export const selectCars = (state) => state.cars.cars;
export const selectPage = (state) => state.cars.page;
export const selectIsLoading = (state) => state.cars.isLoading;
export const selectError = (state) => state.cars.error;
export const selectFilter = (state) => state.filter.carBrand;

export const selectVisibleCars = createSelector(
  [selectCars, selectFilter],
  (cars, carBrand) => {
    if (carBrand === "" || carBrand === "All") {
      return cars;
    }
    return cars.filter((car) => car.make.includes(carBrand));
  }
);
