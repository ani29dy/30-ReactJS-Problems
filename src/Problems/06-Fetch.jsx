import { React, useEffect, useState } from "react";

const Fetch = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  });
  return <div>{data ? <div>Title: {data.title}</div> : <p>Loading...</p>}</div>;
};

export default Fetch;
