import React, { createContext, useContext, useEffect, useState } from "react";
import "./DarkMode.css";

const DarkModeContext = createContext();

export function useDarkMode() {
  return useContext(DarkModeContext);
}

function DarkMode({
  children,
  defaultDark = false,
  storageKey = "theme",
}) {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem(storageKey);

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return defaultDark;
  });

  useEffect(() => {
    localStorage.setItem(storageKey, darkMode ? "dark" : "light");
  }, [darkMode, storageKey]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={darkMode ? "app dark" : "app"}>
        {children}
      </div>
    </DarkModeContext.Provider>
  );
}

export default DarkMode;