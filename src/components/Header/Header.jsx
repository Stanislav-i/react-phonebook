import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserThunk } from 'redux/operations';
import { selectAuthentificated, selectUserData } from 'redux/authReducer';

export const Header = () => {
  const dispatch = useDispatch();
  const authentificated = useSelector(selectAuthentificated);
  const userData = useSelector(selectUserData);

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
          <div className={css.authContainer}>
            <div>
              <NavLink className={css.headerLink} to="/contacts">
                Contacts
              </NavLink>
            </div>
            <div className={css.headerLoggedUserContainer}>
              <p>{userData.email}</p>
              <button onClick={handleLogout} className={css.headerButton}>
                Log Out
              </button>
            </div>
          </div>
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
