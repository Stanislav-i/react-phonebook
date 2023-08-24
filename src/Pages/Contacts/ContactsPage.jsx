import { ContactForm } from 'components/ContactsForm/ContactsForm';
import css from './ContactsPage.module.css';
import { ContactList } from 'components/ContactsList/ContactList';
import { Filter } from 'components/Filter/Filter';
import {ModalEditContact} from 'components/ModalEditContact/ModalEditContact';
import { useSelector } from 'react-redux';
import { selectModalStatus } from 'redux/modalSlice';

export const ContactsPage = () => {
  const isModalOpen = useSelector(selectModalStatus)

  return (
    <div className={css.ContactsContainer}>
      <h2>Contacts</h2>
      <ContactForm />
      {/* <ModalEditContact /> */}
      {isModalOpen && <ModalEditContact />}
      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
