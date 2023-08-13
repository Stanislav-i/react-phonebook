import { useDispatch } from 'react-redux';
import css from './RegisterForm.module.css';
import { nanoid } from 'nanoid';
import { registerUserThunk } from 'redux/operations';

export const RegisterForm = () => {
  const nameInputId = nanoid();
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(
      registerUserThunk({
        name,
        email,
        password,
      })
    );

    form.reset();
  };

  return (
    <div className={css.registerFormContainer}>
      <form onSubmit={handleSubmit} className={css.formstyle}>
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
          Email
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
          type="password"
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
  );
};

export default RegisterForm;
