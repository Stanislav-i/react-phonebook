import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import {
  requestContactsThunk,
  selectContactsError,
  selectContactsIsLoading,
  selectUserContacts,
} from 'redux/contactsReducer';
import { selectAuthentificated } from 'redux/authReducer';
import { useEffect } from 'react';
import Loader from 'components/Loader/Loader';
import { selectFilter } from 'redux/filterSlice';
import { Contact } from './Contact';

export const ContactList = () => {
  const contacts = useSelector(selectUserContacts);
  const authintificated = useSelector(selectAuthentificated);
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!authintificated) return;

    dispatch(requestContactsThunk());
  }, [authintificated, dispatch]);

  const filter = useSelector(selectFilter);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts?.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  const showContacts = Array.isArray(contacts) && contacts.length > 0;

  return (
    <div>
      {isLoading && <Loader />}
      {error && <p>Error occured... Error is {error}</p>}

      <ul className={css.liststyle}>
        {showContacts &&
          getFilteredContacts().map(({ id, name, number }) => (
            <li key={id}>
              <Contact name={name} number={number} id={id} />
            </li>
          ))}
      </ul>
    </div>
  );
};
