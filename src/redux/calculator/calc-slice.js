import { createSlice } from '@reduxjs/toolkit';
import calcOperations from './calc-operations';

const initialState = {
  data: null,

  isReducerSpinner: false,
};

const calcSlice = createSlice({
  name: 'calc',
  initialState,
  extraReducers: {
    [calcOperations.fetchCalculatorUser.pending](state) {
      state.isReducerSpinner = true;
    },
    [calcOperations.fetchCalculatorUser.fulfilled](state, action) {
      state.data = action.payload;
      state.isReducerSpinner = false;
    },
    [calcOperations.fetchCalculatorUser.rejected](state) {
      state.isReducerSpinner = false;
    },
  },
});

export default calcSlice.reducer;
