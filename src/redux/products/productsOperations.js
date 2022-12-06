import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://diet-app-be.onrender.com/api/';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/products`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async (product, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/contacts`, product);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const deleteProducts = createAsyncThunk(
  'products/deleteProdacts',
  async (productId, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/contacts/${productId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
