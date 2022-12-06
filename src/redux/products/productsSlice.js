import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts, addProduct, deleteProduct } from './itemsOperations';

const initialState = {
  dailyRate: {},
  eatenProducts: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: {
    [fetchProducts.fulfilled]: (state, { payload }) => {
      state = { ...payload };
    },
    [addProduct.fulfilled]: (state, { payload }) => {
      state.dailyRate = { ...payload.dailyRate };
      state.eatenProducts = [...state.eatenProducts, payload];
    },

    [deleteProduct.fulfilled](state, { payload }) {
      state.dailyRate = { ...payload.dailyRate };
      state.eatenProducts.filter(({ id }) => {
        return id !== payload.id;
      });
    },
  },
});

export default productsSlice.reducer;
