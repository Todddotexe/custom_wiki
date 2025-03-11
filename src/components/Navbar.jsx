import { NavLink } from "react-router-dom";
import "./style/Navbar.css";
import ThemeSelection from "./ThemeSelection";


const Navbar = ({ darkMode, backgroundColor, onThemeChange, onColorChange }) => {
    return (
        <nav className={`navbar ${darkMode ? "dark" : "light"}` } style={{ backgroundColor }}>

            <div className="navbar-left">
                <h1 className="navbar-title">PLACEHOLDER</h1>
                <NavLink to="/" className="nav-link" activeClassName="active">HOME</NavLink>
                <NavLink to="/characters" className="nav-link" activeClassName="active">CHARACTERS</NavLink>
                <NavLink to="/theworld" className="nav-link" activeClassName="active">THE WORLD</NavLink>
                <NavLink to="/sessions" className="nav-link" activeClassName="active">SESSIONS</NavLink>
            </div>

            <div className="navbar-right">
                <ThemeSelection onThemeChange={onThemeChange} onColorChange={onColorChange} />
            </div>
        </nav>
    );
}

export default Navbar;
