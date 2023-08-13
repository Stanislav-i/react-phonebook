import { Route, Routes } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Suspense, lazy, useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthentificated, selectToken } from 'redux/authReducer';
import { refreshUserThunk } from 'redux/operations';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';

const HomePage = lazy(() => import('Pages/Home/HomePage.jsx'));
const ContactsPage = lazy(() => import('Pages/Contacts/ContactsPage.jsx'));
const RegisterPage = lazy(() => import('Pages/Register/RegisterPage.jsx'));
const LoginPage = lazy(() => import('Pages/Login/LoginPage.jsx'));

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const authintifacated = useSelector(selectAuthentificated);

  useEffect(() => {
    if (!token || authintifacated) return;

    dispatch(refreshUserThunk());
  }, [token, dispatch, authintifacated]);
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
        // fontSize: 40,
        color: 'white',
        paddingLeft: '15px',
        paddingRight: '15px',
      }}
    >
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login">
                  <ContactsPage />
                </PrivateRoute>
              }
            />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
