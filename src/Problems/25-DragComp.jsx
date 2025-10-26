import React, { act, useReducer, useState } from "react";

const boxReducer = (state, action) => {
  switch (action.type) {
    case "MOVE":
      return { ...state, left: action.payload.left, top: action.payload.top };
    default:
      return state;
  }
};

const DragComponent = () => {
  const [boxState, dispatch] = useReducer(boxReducer, { left: 0, top: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [initialX, setInitialX] = useState(0);
  const [initialY, setInitialY] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setInitialX(e.clientX - boxState.left);
    setInitialY(e.clientY - boxState.top);
  };

  const handleMouseUp = (e) => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const left = e.clientX - initialX;
      const top = e.clientY - initialY;

      dispatch({ type: "MOVE", payload: { left, top } });
    }
  };
  return (
    <button
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      style={{ left: boxState.left, top: boxState.top, position: "absolute" }}
    >
      Drag Me
    </button>
  );
};

export default DragComponent;
