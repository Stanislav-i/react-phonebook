import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserThunk } from 'redux/operations';
import { selectAuthentificated } from 'redux/authReducer';

export const Header = () => {
  const dispatch = useDispatch();
  const authentificated = useSelector(selectAuthentificated);

  const handleLogout = () => {
    dispatch(logoutUserThunk());
  };
  return (
    <div className={css.headerLinksContainer}>
      <nav className={css.navLinksContainer}>
        <NavLink className={css.headerLink} to="/">
          Home
        </NavLink>
        {authentificated ? (
          <>
            <NavLink className={css.headerLink} to="/contacts">
              Contacts
            </NavLink>
            <div className={css.headerButtonContainer}>
              <button onClick={handleLogout} className={css.headerButton}>
                Log Out
              </button>
            </div>
          </>
        ) : (
          <>
            <NavLink className={css.headerLink} to="/register">
              Register
            </NavLink>
            <NavLink className={css.headerLink} to="/login">
              Login
            </NavLink>
          </>
        )}
      </nav>
    </div>
  );
};

export default Header;
