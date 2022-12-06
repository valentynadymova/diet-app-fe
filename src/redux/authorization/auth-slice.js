import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null, id: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  isReducerSpinner: false,
  userData: {
    height: null,
    age: null,
    currentWeight: null,
    desiredWeight: null,
    bloodType: null,
    calories: null,
  },
  notAllowedProducts: [],
  products: [],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.dataReg.user;
      state.token = action.payload.dataLog.token;
      state.isLoggedIn = true;
      state.userData = action.payload.dataLog.userData;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user.name = action.payload.name;
      state.user.id = action.payload.id;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.userData = action.payload.userData;
      state.notAllowedProducts = [...action.payload.notAllowedProducts];
    },
    [authOperations.logOut.pending](state) {
      state.isReducerSpinner = true;
    },
    [authOperations.logOut.fulfilled](state) {
      state.user = { name: null, email: null, id: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isReducerSpinner = false;
      state.userData = null;
      state.notAllowedProducts = [];
    },
    [authOperations.logOut.rejected](state) {
      state.isReducerSpinner = false;
    },
    [authOperations.fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.user.id = action.payload.id;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
      state.userData = action.payload.userData;
      state.notAllowedProducts = [...action.payload.notAllowedProducts];
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
    },

    /////////////Калькулятор//////////////
    [authOperations.fetchCalculatorUser.pending](state) {
      state.isReducerSpinner = true;
    },
    [authOperations.fetchCalculatorUser.fulfilled](state, action) {
      state.userData.calories = action.payload.calories;
      state.notAllowedProducts = [...action.payload.notAllowedProducts];
      state.isReducerSpinner = false;
    },
    [authOperations.fetchCalculatorUser.rejected](state) {
      state.isReducerSpinner = false;
    },
  },
});

export default authSlice.reducer;
