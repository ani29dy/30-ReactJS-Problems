import React, { useState } from "react";

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState("#252525");

  const handleChange = (e) => {
    setSelectedColor(e.target.value);
  };

  return (
    <div>
      <input type="color" onChange={handleChange} />
      <br />
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: selectedColor,
        }}
      ></div>
    </div>
  );
};

export default ColorPicker;
