import React, { useState } from "react";

const BgChange = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const handleClick = () => {
    const newColor = backgroundColor === "white" ? "lightblue" : "white";
    setBackgroundColor(newColor);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor,
        width: "1480px",
        height: "976px",
        cursor: "pointer",
      }}
    >
      Change BG-Color
    </div>
  );
};

export default BgChange;
