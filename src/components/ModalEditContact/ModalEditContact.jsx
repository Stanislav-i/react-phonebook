import EditContactForm from 'components/EditContactForm/EditContactForm';
import css from './ModalEditContact.module.css';
import { useDispatch } from 'react-redux';
import { setModalStatus } from 'redux/modalSlice';
import { useEffect } from 'react';

export const ModalEditContact = () => {

    const handleOverlayClick = event => {
        if (event.currentTarget === event.target) {
            dispatch(setModalStatus(false));
        }
      };
    
      useEffect(() => {
        const handleKeyDown = event => {
          if (event.code === 'Escape') {
            dispatch(setModalStatus(false));
          }
        };
    
        window.addEventListener('keydown', handleKeyDown);
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      });
    const dispatch = useDispatch();
    return <div className={css.backdrop} onClick={handleOverlayClick}>
        <div className={css.modal}>
            <p className={css.text}>This modal window is under construction! 
            Functionality is not available.</p>
            <button className={css.closeButton} onClick={()=>dispatch(setModalStatus(false))}>&times;</button>
            <EditContactForm />
        </div>
    </div>
}

export default ModalEditContact;