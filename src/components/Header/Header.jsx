import { Link } from "react-router-dom";
import css from './Header.module.css';

export const Header = () => {
    return (
        <div className={css.headerLinksContainer}>
            <nav className={css.navLinksContainer}>
            <Link className={css.headerLink} to="/">Home</Link>
            <Link className={css.headerLink} to="/contacts">Contacts</Link>
            <Link className={css.headerLink} to="/register">Register</Link>
            <Link className={css.headerLink} to="/login">Login</Link>
            </nav>
            <div className={css.headerButtonContainer}>
            <button className={css.headerButton}>Log Out</button>
            </div>
        </div>
    )
}

export default Header;