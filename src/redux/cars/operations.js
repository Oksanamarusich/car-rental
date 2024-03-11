import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://654a41e4e182221f8d52d46a.mockapi.io";

export const getCars = createAsyncThunk(
  "cars/getAll",
  async (page, thunkAPI) => {
    try {
      const responce = await axios.get(`/cars?page=${page}&limit=12`);

      return responce.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getAllCars = createAsyncThunk(
  "cars/getAllFilters",
  async (filter, thunkAPI) => {
    try {
      const responce = await axios.get(`/cars?make=${filter}`);

      return responce.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
