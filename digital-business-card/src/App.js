import React, { useState, useEffect } from "react";
import "./App.css";
import Info from "./components/Info";
import About from "./components/About";
import Interest from "./components/Interest";
import Footer from "./components/Footer";
//import Button from "./components/Button";
// import "./index.css";

export default function App() {
  const storedDarkMode = localStorage.getItem("DARK_MODE");
  const [darkMode, setDarkMode] = useState(storedDarkMode);
  const toggleDarkMode = () => setDarkMode(darkMode ? false : true);
  useEffect(() => {
    //Just to test if its working fine:
    console.log(`Darkmode active? ${darkMode}`);
    localStorage.setItem("DARK_MODE", darkMode);
  }, [darkMode]);

  return (
    <>
      {darkMode ? (
        <div className="App dark">
          <Info />
          {/* <Button /> */}
          <div className="SwitchButton">
            <button onClick={toggleDarkMode}>
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
          <About theme={darkMode} />
          <Interest theme={darkMode} />
          <Footer theme={darkMode} />
        </div>
      ) : (
        <div className="App light">
          <Info />
          {/* <Button /> */}
          <div className="SwitchButton">
            <button onClick={toggleDarkMode}>
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
          <About />
          <Interest />
          <Footer />
        </div>
      )}
    </>

    // {/* If darkMode truthy then add .dark to the div */}

    // <Info />
    // {/* <Button /> */}
    // <button className="Button" onClick={toggleDarkMode}>
    //   {darkMode ? "Light Mode" : "Dark Mode"}
    // </button>
    // <About />
    // <Interest />
    // <Footer />
  );
}
