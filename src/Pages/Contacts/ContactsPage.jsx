import { ContactForm } from 'components/ContactsForm/ContactsForm';
import css from './ContactsPage.module.css';
import { ContactList } from 'components/ContactsList/ContactList';
import { Filter } from 'components/Filter/Filter';

export const ContactsPage = () => {

  return (
    <div className={css.ContactsContainer}>
      <h2>Contacts</h2>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
