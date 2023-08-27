import { useDispatch, useSelector } from 'react-redux';
import css from './EditContactForm.module.css'
import { nanoid } from 'nanoid';
import {editContactThunk, selectUserContacts } from 'redux/contactsReducer';
import { selectEditContactData, setEditContactData, setModalStatus } from 'redux/modalSlice';

export const EditContactForm = () => {
  const contacts = useSelector(selectUserContacts);
  const nameInputId = nanoid();
  const numberInputId = nanoid();
  const {name, number, id} = useSelector(selectEditContactData);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const newName = form.elements.name.value;
    const newNumber = form.elements.number.value;

    if (
      contacts.some(
        contact => contact.name.toLocaleLowerCase() === newName.toLocaleLowerCase()
      )
    ) {
      alert(`${newName} is already in contacts`);
    } else {
      dispatch(editContactThunk({ id: id, newContactData: {
        name: newName,
        number: newNumber,
      } }));
      dispatch(setModalStatus(false));
      dispatch(setEditContactData(null));
    }
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.formstyle}>
      <label htmlFor={nameInputId} className={css.inputname}>
        New Name
      </label>
      <input
        type="text"
        name="name"
        defaultValue={name}
        className={css.inputstyle}
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        id={nameInputId}
        required
      />

      <label htmlFor={numberInputId} className={css.inputname}>
       New Number
      </label>
      <input
        type="tel"
        name="number"
        defaultValue={number}
        className={css.inputstyle}
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
