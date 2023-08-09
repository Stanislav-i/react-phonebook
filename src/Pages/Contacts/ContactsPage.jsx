import { ContactForm } from 'components/ContactsForm/ContactsForm'
import css from './ContactsPage.module.css'

export const ContactsPage = () => {
    return <div className={css.ContactsContainer}>
        <h2>Contacts</h2>
        <ContactForm />
    </div>
}

export default ContactsPage;