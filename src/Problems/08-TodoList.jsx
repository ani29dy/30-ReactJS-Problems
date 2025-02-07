import React, { useState } from "react";

const TodoList = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const addTodo = () => {
    if (input.trim() !== "") {
      setTodo([...todo, input]);
      setInput("");
    }
  };

  const removeTodo = (index) => {
    const updateTodo = todo.filter((_, i) => i != index);
    setTodo(updateTodo);
  };

  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => addTodo()}>Add</button>
      <ul>
        {todo.map((item, index) => {
          return (
            <li key={index}>
              {item} <button onClick={() => removeTodo(index)}>Remove</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
