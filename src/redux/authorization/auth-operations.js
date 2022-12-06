import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://diet-app-be.onrender.com/api/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const dataRegisration = await axios.post('auth/register', credentials);
      const { email, password } = credentials;
      const dataLogin = await axios.post('auth/login', { email, password });

      const data = {
        dataReg: dataRegisration.data,
        dataLog: dataLogin.data.data,
      };

      token.set(data.dataLog.token);

      toast.success('Введіть будь-ласка дані в форму.', { duration: 6000 });
      toast.success('Ви успішно зареєструвалися');

      return data;
    } catch (error) {
      if (error) {
        if (error.response && error.response.status === 400) {
          toast.error('Неправильна електронна адреса чи пароль');
        }
        if (error.response && error.response.status === 409) {
          toast.error(
            'Користувач із цією електронною адресою вже зареєстрований',
          );
        }
      }
      return rejectWithValue(error);
    }
  },
);

const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('auth/login', credentials);

      token.set(data.data.token);
      toast.success('Вітаємо, Ви увійшли в додаток');
      return data.data; /////Приходить з бека data: {user: name:dsfdfd,email:fdfdfdf}
    } catch (error) {
      if (error) {
        toast.error('Неправильна електронна адреса чи пароль');
      }
      return rejectWithValue(error);
    }
  },
);

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('auth/logout');
    token.unset();
  } catch (error) {
    console.log(error.message);
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('auth/user');
      return data;
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  },
);

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

      toast.success('Ваша добова норма перерахована');
      return data;
    } catch (error) {
      console.log(error.message);
      toast.error('Проблеми зєднання з сервером');
    }
  },
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
  fetchCalculatorUser,
};

export default operations;
