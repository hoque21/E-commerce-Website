import LightPng from "../assets/website/light-mode-button.png";
import DarkPng from "../assets/website/dark-mode-button.png";
import React, { useEffect } from "react";
import '../index.css';

const DarkMode = () => {

  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "light"
  );


  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // Toggle between light and dark mode
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="relative">
      {/* Render light mode or dark mode button based on the theme */}
      {theme === "light" ? (
        <img
          className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"
          src={LightPng}
          alt="Light Mode"
          onClick={toggleTheme}
        />
      ) : (
        <img
          className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"
          src={DarkPng}
          alt="Dark Mode"
          onClick={toggleTheme}
        />
      )}
    </div>
  );
};

export default DarkMode;
