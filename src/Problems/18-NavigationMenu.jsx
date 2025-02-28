import React, { useState } from "react";
import "../styles/18-Nav.css";

const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="icon" onClick={toggleMenu}>
        <svg
          aria-hidden="true"
          height="26"
          viewBox="0 0 16 16"
          version="1.1"
          width="26"
          data-view-component="true"
          class="octicon octicon-three-bars Button-visual"
        >
          <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
        </svg>
      </div>

      <div className={`nav ${isOpen ? "open" : ""}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Profile</li>
          <li>Services</li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationMenu;
