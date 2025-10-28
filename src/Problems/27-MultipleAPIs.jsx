import axios from "axios";
import React, { useEffect, useState } from "react";

const MultipleAPIs = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });

    axios
      .get("https://jsonplaceholder.typicode.com/posts/2")
      .then((response) => {
        setData2(response.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });

    axios
      .get("https://jsonplaceholder.typicode.com/posts/3")
      .then((response) => {
        setData3(response.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  return (
    <div>
      <h1>MultipleAPIs</h1>
      <p>{data.id}</p>
      <p>{data.title}</p>
      <p>{data.body}</p>

      <p>{data2.id}</p>
      <p>{data2.title}</p>
      <p>{data2.body}</p>

      <p>{data3.id}</p>
      <p>{data3.title}</p>
      <p>{data3.body}</p>
    </div>
  );
};

export default MultipleAPIs;
