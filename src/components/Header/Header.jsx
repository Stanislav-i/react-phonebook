import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <div>
            <nav>
            <Link to="/">Home</Link>
            <Link to="/contacts">Contacts</Link>
            <Link to="/register">Rergister</Link>
            <Link to="/login">Login</Link>
            <button>Log Out</button>
            </nav>
        </div>
    )
}