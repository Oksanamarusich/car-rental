import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    carBrand: '',
  },
  reducers: {
    changeFilter(state, action) {
      state.carBrand = action.payload;
    },
    resetFilter(state) {
      state.carBrand = '';
    }
  },
});

export const { changeFilter,resetFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
