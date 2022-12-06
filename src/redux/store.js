import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userDayInfoApi } from './rtkSliceForDiaryPage/userDayInfoSlice';
import authReducer from './authorization/auth-slice';
import calcReducer from './calculator/calc-slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

////////Store///////////////////
const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),

    [userDayInfoApi.reducerPath]: userDayInfoApi.reducer,

    calc: calcReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    userDayInfoApi.middleware,
  ],
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export { store, persistor };

setupListeners(store.dispatch);
