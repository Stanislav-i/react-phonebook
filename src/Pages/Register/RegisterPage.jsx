import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import css from './RegisterPage.module.css';
import { useSelector } from 'react-redux';
import { selectAuthentificated } from 'redux/authReducer';
import { Navigate } from 'react-router-dom';

export const RegisterPage = () => {
  const authintificated = useSelector(selectAuthentificated);

  if (authintificated) return <Navigate to="/contacts" />;

  return (
    <div className={css.registerContainer}>
      <h2>Create Your Account</h2>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
