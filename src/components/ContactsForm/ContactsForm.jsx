import css from './ContactsForm.module.css';
import { nanoid } from 'nanoid';

export const ContactForm = () => {

    const nameInputId = nanoid();
    const numberInputId = nanoid();
    return (

    <form className={css.formstyle}>
      <label htmlFor={nameInputId} className={css.inputname}>
        Name
      </label>
      <input
        type="text"
        name="name"
        className={css.inputstyle}
        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        id={nameInputId}
        required
      />

      <label htmlFor={numberInputId} className={css.inputname}>
        Number
      </label>
      <input
        type="tel"
        name="number"
        className={css.inputstyle}
        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        id={numberInputId}
        required
      />

      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
    }

    export default ContactForm;