import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import TheWorld from "./pages/TheWorld";
import Sessions from "./pages/Sessions";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("rgb(8, 97, 106)"); // Default color

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleColorChange = (color) => {setBackgroundColor(color)};

  useEffect(() => {
    // Changes the background color of the body when it updates
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]); // Re-run this effect when backgroundColor changes

  return (
    <Router>
      <div className="app-container">
        <div className={darkMode ? "dark-mode" : "light-mode"}>
          <Navbar
            darkMode={darkMode}
            backgroundColor={backgroundColor}
            onThemeChange={toggleDarkMode}
            onColorChange={handleColorChange}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/theworld" element={<TheWorld />} />
            <Route path="/sessions" element={<Sessions />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
