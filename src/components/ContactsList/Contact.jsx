import PropTypes from 'prop-types';
import css from './Contact.module.css';
import { MdContactPhone } from 'react-icons/md';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk } from 'redux/contactsReducer';
import { setEditContactData, setModalStatus } from 'redux/modalSlice';
import { selectModalStatus } from 'redux/modalSlice';
import {ModalEditContact} from 'components/ModalEditContact/ModalEditContact';
import { useEffect } from 'react';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectModalStatus);

  const onEditBtnClick = () => {
    dispatch(setModalStatus(true));
    dispatch(setEditContactData({ name, number, id }));
  }

  useEffect(()=>{

  }, [])

  return (
    
    <div className={css.contactcontainer}>
      {isModalOpen && <ModalEditContact />}
      <div className={css.contactInfo}>
        <MdContactPhone />
        <p className={css.info}>
          {name}: {number}
        </p>
      </div>
      <div className={css.contactButtons}>
        <button
          type="button"
          onClick={() => dispatch(deleteContactThunk(id))}
          className={css.button}
        >
          Delete
        </button>
        <button
          type="button"
          onClick={onEditBtnClick}
          className={css.button}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

Contact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
};
