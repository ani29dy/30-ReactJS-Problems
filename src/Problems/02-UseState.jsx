import { React, useState } from "react";

const Two = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <span>{count}</span>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  );
};

export default Two;
