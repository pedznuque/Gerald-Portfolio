import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useDarkMode } from "./DarkMode";
import "./DarkModeButton.css";

function DarkModeButton({
  size = 32,
  showGlow = true,
  className = "",
}) {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <button
      className={`dark-mode-toggle ${darkMode ? "active" : ""} ${
        showGlow ? "glow" : ""
      } ${className}`}
      onClick={() => setDarkMode(!darkMode)}
      aria-label="Toggle dark mode"
      style={{ "--toggle-size": `${size}px` }}
    >
      <span className="dark-mode-icon">
        {darkMode ? <FaMoon /> : <FaSun />}
      </span>
    </button>
  );
}

export default DarkModeButton;