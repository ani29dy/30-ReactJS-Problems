import React, { useState } from "react";

const Toggle = () => {
  const [isToggle, setIsToggle] = useState(false);
  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div>
      <input type="checkbox" onClick={handleToggle} />
      <p>{isToggle ? "On" : "Off"}</p>
    </div>
  );
};

export default Toggle;
