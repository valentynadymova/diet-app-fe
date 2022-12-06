import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://diet-app-be.onrender.com/api/';

const fetchCalculatorUser = createAsyncThunk(
  'calc/fetchCalculatorUser',
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();
    const idUser = state.auth.user.id;

    if (idUser === null) {
      return thunkAPI.rejectWithValue();
    }

    try {
      const { data } = await axios.post(`users/user/${idUser}`, credentials);
      console.log(data);

      toast.success('Ваша добова норма перерахована');
      return data;
    } catch (error) {
      console.log(error.message);
      toast.error('Проблеми зєднання з сервером');
    }
  },
);

const operations = {
  fetchCalculatorUser,
};

export default operations;
