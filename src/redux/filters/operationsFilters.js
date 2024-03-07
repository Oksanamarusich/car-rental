import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllCars = createAsyncThunk(
  "cars/getFilters",
  async (_, thunkAPI) => {
    try {
      const responce = await axios.get("/cars?make");

      return responce.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
