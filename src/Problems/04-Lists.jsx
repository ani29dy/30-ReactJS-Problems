import React from "react";

const Lists = () => {
  const list = ["Item1", "Item2", "Item3", "Item4", "Item5"];

  return (
    <div>
      <ul>
        {list.map((item, id) => {
          return <li key={id}>{item}</li>;
        })}
      </ul>
      <div>
        Ordered Lists
        <ol>
          <li>Item-1</li>
          <li>Item-2</li>
          <li>Item-3</li>
          <li>Item-4</li>
          <li>Item-5</li>
        </ol>
      </div>
      <div>
        Unordered Lists
        <ul>
          <li>Item-1</li>
          <li>Item-2</li>
          <li>Item-3</li>
          <li>Item-4</li>
          <li>Item-5</li>
        </ul>
      </div>
    </div>
  );
};

export default Lists;
