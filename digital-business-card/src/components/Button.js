import React, { useState, useEffect } from "react";
//import styles from "./Button.module.css";
import "../index.css";

function Button() {
  const storedDarkMode = localStorage.getItem("DARK_MODE");
  const [darkMode, setDarkMode] = useState(storedDarkMode);
  const toggleDarkMode = () => setDarkMode(darkMode ? false : true);
  useEffect(() => {
    //Just to test if its working fine:
    // console.log(`Is in dark mode? ${darkMode}`);
    localStorage.setItem("DARK_MODE", darkMode);
  }, [darkMode]);
  return (
    <div data-theme={darkMode ? "dark" : "light"}>
      <button className="Button" onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default Button;
