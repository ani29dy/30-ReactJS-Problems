import React, { useState } from "react";

const MultipleState = () => {
  const [state, setState] = useState({
    count: 0,
    text: "Hello World!!!",
    active: true,
  });

  const incrementCount = () => {
    setState({ ...state, count: state.count + 1 });
  };

  const decrementCount = () => {
    setState({ ...state, count: state.count - 1 });
  };

  const changeText = () => {
    setState({ ...state, text: "Text Changed" });
  };

  const changeStatus = () => {
    setState({ ...state, active: !state.active });
  };

  return (
    <div>
      <h1>Multiple States Example</h1>

      <h2>Count: {state.count}</h2>
      <h2>Text: {state.text}</h2>
      <h2>Status: {state.active ? "Active" : "Inactive"}</h2>

      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <button onClick={changeText}>Change Text</button>
      <button onClick={changeStatus}>Change Status</button>
    </div>
  );
};

export default MultipleState;
