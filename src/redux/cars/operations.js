import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://654a41e4e182221f8d52d46a.mockapi.io";

export const getCars = createAsyncThunk("cars/getAll", async (page, thunkAPI) => {
  try {
  const responce = await axios.get(`/cars?page=${page}&limit=12`);
    // const responce = await axios.get('/cars');

    return responce.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const getCarId = createAsyncThunk("cars/getId", async (carId, thunkAPI) => {
  try {
    const responce = await axios.get('/cars/:id');

    return responce.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
