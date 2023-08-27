import EditContactForm from 'components/EditContactForm/EditContactForm';
import css from './ModalEditContact.module.css';
import { useDispatch } from 'react-redux';
import { setEditContactData, setModalStatus } from 'redux/modalSlice';
import { useEffect } from 'react';

export const ModalEditContact = () => {
  const dispatch = useDispatch();

  const onCloseBtnClick = () => {
    dispatch(setModalStatus(false));
    dispatch(setEditContactData(null));
  }

    const handleOverlayClick = event => {
        if (event.currentTarget === event.target) {
            dispatch(setModalStatus(false));
            dispatch(setEditContactData(null));
        }
      };
    
      useEffect(() => {
        const handleKeyDown = event => {
          if (event.code === 'Escape') {
            dispatch(setModalStatus(false));
            dispatch(setEditContactData(null));
          }
        };
    
        window.addEventListener('keydown', handleKeyDown);
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      });
    
    return <div className={css.backdrop} onClick={handleOverlayClick}>
        <div className={css.modal}>
            <p className={css.text}>You are trying to change the next contact:</p>
            <button className={css.closeButton} onClick={onCloseBtnClick}>&times;</button>
            <EditContactForm />
        </div>
    </div>
}

export default ModalEditContact;