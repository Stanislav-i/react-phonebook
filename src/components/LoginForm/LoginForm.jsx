import css from './LoginForm.module.css';
import { nanoid } from 'nanoid';

export const LoginForm = () => {
    const emailInputId = nanoid();
    const passwordInputId = nanoid();

    return (
    <div className={css.registerFormContainer}>

    <form  className={css.formstyle}>

      <label htmlFor={emailInputId} className={css.inputname}>
        Number
      </label>
      <input
        type="email"
        name="email"
        className={css.inputstyle}
        title="Valid email should be provided"
        id={emailInputId}
        required
      />

<label htmlFor={passwordInputId} className={css.inputname}>
        Password
      </label>
      <input
        type="text"
        name="password"
        className={css.inputstyle}
        title="Valid email should be provided"
        id={passwordInputId}
        required
      />

      <button type="submit" className={css.button}>
        Log In!
      </button>
    </form>
        
    </div>
)}

export default LoginForm;