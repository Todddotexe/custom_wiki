import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./style/Navbar.css";
import ThemeSelection from "./ThemeSelection";


const Navbar = ({ darkMode, backgroundColor, onThemeChange, onColorChange }) => {
    return (
        <nav className={`navbar ${darkMode ? "dark" : "light"}` } style={{ backgroundColor }}>

            <div className="navbar-left">
                <h1 className="navbar-title">Placeholder</h1>
                <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
                <NavLink to="/characters" className="nav-link" activeClassName="active">Characters</NavLink>
                <NavLink to="/theworld" className="nav-link" activeClassName="active">The World</NavLink>
                <NavLink to="/sessions" className="nav-link" activeClassName="active">Sessions</NavLink>
            </div>

            <div className="navbar-right">
                <ThemeSelection onThemeChange={onThemeChange} onColorChange={onColorChange} />
            </div>
        </nav>
    );
}

export default Navbar;
