import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    carBrand: [],
    
  },
  reducers: {
    changeFilter(state, action) {
      state.carBrand = action.payload;
       
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
