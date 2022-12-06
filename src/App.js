import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import PublicRoute from './components/publicRoute/PublicRoute';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import { Layout } from './components/Layout/Layout';

import { authOperations, authSelectors } from './redux/authorization';
import AppLoader from './components/Loader/Loader';
import { CreateLazyChunk } from './helpers/CreateLazyChunk';

const MainPage = CreateLazyChunk('MainPage', 'MainPage/MainPage');
const RegistrationPage = CreateLazyChunk(
  'RegistrationPage',
  'RegistrationPage/RegistrationPage',
);
const LoginPage = CreateLazyChunk('LoginPage', 'LoginPage/LoginPage');

const DiaryPage = CreateLazyChunk('DiaryPage', 'DiaryPage/DiaryPage');
const CalculatorPage = CreateLazyChunk(
  'CalculatorPage',
  'CalculatorPage/CalculatorPage',
);

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!isFetchingCurrentUser && ( //Щоб не моргав інтерфейс при переході на перезагрузку
        <Suspense fallback={<AppLoader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <PublicRoute restricted redirectTo="/diary">
                    <MainPage />
                  </PublicRoute>
                }
              />
              <Route
                path="registration"
                element={
                  <PublicRoute restricted redirectTo="/calculator">
                    <RegistrationPage />
                  </PublicRoute>
                }
              />
              <Route
                path="signin"
                element={
                  <PublicRoute restricted redirectTo="/diary">
                    <LoginPage />
                  </PublicRoute>
                }
              />
              <Route
                path="diary"
                element={
                  <PrivateRoute redirectTo="/signin">
                    <DiaryPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="calculator"
                element={
                  <PrivateRoute redirectTo="/signin">
                    <CalculatorPage />
                  </PrivateRoute>
                }
              />
            </Route>

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      )}

      <Toaster toastOptions={{ duration: 3000 }} />
    </>
  );
}

export default App;
