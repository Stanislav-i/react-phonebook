import css from './RegisterForm.module.css';
import { nanoid } from 'nanoid';

export const RegisterForm = () => {
    const nameInputId = nanoid();
    const emailInputId = nanoid();
    const passwordInputId = nanoid();

    return (
    <div className={css.registerFormContainer}>

    <form  className={css.formstyle}>
      <label htmlFor={nameInputId} className={css.inputname}>
        Name
      </label>
      <input
        type="text"
        name="name"
        className={css.inputstyle}
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        id={nameInputId}
        required
      />

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
        Create My Account!
      </button>
    </form>
        
    </div>
)}

export default RegisterForm;