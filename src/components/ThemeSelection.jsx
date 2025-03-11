import React, { useState } from "react";

const ThemeSelection = ({ onThemeChange, onColorChange }) => {
    const [showUI, setShowUI] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const toggleThemeUI = () => setShowUI(!showUI);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        onThemeChange(!darkMode ? "dark" : "light");
    };

    const colors = [
        { value: "rgb(8, 97, 106)" },   // Echoes
        { value: "rgb(56, 73, 112)" },  // Thief
        { value: "rgb(84, 4, 36)" },    // Witch
        { value: "rgb(88, 113, 46)" },  // Hero
        { value: "rgb(189, 106, 71)" }, // Adherent
        { value: "rgb(81, 43, 95)" },   // Fate
    ];

    return (
        <div className="theme-selection">
            {/* Theme Button */}
            <button className="theme-btn" onClick={toggleThemeUI}>
                THEME
            </button>

            {/* Theme UI */}
            {showUI && (
                <div className="theme-ui">
                    {/* Dark Mode Toggle*/}
                    <div className="darkmode-option">
                        <button className="darkmode-btn" onClick={toggleDarkMode}>
                            {darkMode ? "Dark Mode" : "Light Mode"}
                        </button>
                    </div>
                    
                    {/* Color Options */}
                    <div className="color-options">
                        {colors.map((color) => (
                            <button
                                key={color.value}
                                className="color-btn"
                                onClick={() => onColorChange(color.value)}
                                style={{ backgroundColor: color.value }}
                            >
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
};

export default ThemeSelection;