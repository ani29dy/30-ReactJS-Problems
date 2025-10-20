import React from "react";
import { useTheme } from "../ThemeContext";
import "../styles/19-Themes.css";

const ChangeThemeComp = () => {
  const { isDarkMode } = useTheme();
  const themeClass = isDarkMode ? "dark-theme" : "light-theme";
  return (
    <div className={`container ${themeClass}`}>
      <p>This component uses selected theme</p>
    </div>
  );
};

export default ChangeThemeComp;
