import { LoginForm } from 'components/LoginForm/LoginForm';
import css from './LoginPage.module.css';
import { useSelector } from 'react-redux';
import { selectAuthentificated } from 'redux/authReducer';
import { Navigate } from 'react-router-dom';

export const LoginPage = () => {
  const authintificated = useSelector(selectAuthentificated);

  if (authintificated) return <Navigate to="/contacts" />;

  return (
    <div className={css.loginContainer}>
      <h2>Login</h2>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
