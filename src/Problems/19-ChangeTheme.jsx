import React from "react";
import { useTheme } from "../ThemeContext";

const ChangeTheme = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const themeClass = isDarkMode ? "dark-theme" : "light-theme";
  return (
    <div className={`${themeClass}`}>
      <label>
        <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
        Dark Mode
      </label>
    </div>
  );
};

export default ChangeTheme;
