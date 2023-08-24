import { useDispatch, useSelector } from 'react-redux';
import css from './EditContactForm.module.css'
import { nanoid } from 'nanoid';
import { addContactThunk, selectUserContacts } from 'redux/contactsReducer';

export const EditContactForm = () => {
  const contacts = useSelector(selectUserContacts);
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (
      contacts.some(
        contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addContactThunk({ name: name, number: number }));
    }
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.formstyle}>
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
        Edit contact
      </button>
    </form>
  );
};

export default EditContactForm;
