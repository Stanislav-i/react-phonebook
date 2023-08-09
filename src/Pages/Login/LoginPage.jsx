import { LoginForm } from 'components/LoginForm/LoginForm';
import css from './LoginPage.module.css';

export const LoginPage = () => {
    return <div className={css.loginContainer}>
        <h2>Login</h2>
        <LoginForm />
    </div>
}

export default LoginPage;