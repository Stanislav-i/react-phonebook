import { RegisterForm } from 'components/RegisterForm/RegisterForm'
import css from './RegisterPage.module.css'

export const RegisterPage = () => {
    return <div className={css.registerContainer}>
        <h2>Create Your Account</h2>
        <RegisterForm />
        
    </div>
}

export default RegisterPage;