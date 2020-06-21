import React, { useState, useEffect } from "react";

function App() {
  const todoList = localStorage.getItem("todoList");

  function initialValue() {
    if (todoList !== "" && todoList !== null) {
      return todoList.split(",");
    } else {
      return [];
    }
  }

  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    localStorage.setItem("todoList", item);
  }, [item]);

  function addTodo(e) {
    if (e.target.previousSibling.value !== "") {
      setItem([...item, e.target.previousSibling.value]);
      e.target.previousSibling.value = "";
    }
  }

  function enterClick(e) {
    if (e.key === "Enter") {
      setItem([...item, e.target.value]);
      e.target.value = "";
    }
  }

  function deleteTodo(e) {
    setItem([...item.filter(i => i !== e.target.previousSibling.innerText)]);
  }

  return (
    <div className="App">
      <h1>Todo List App</h1>
      <div className="input">
        <input type="text" placeholder="Add Todo" onKeyDown={enterClick} />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <ul>
        {item.map(i => (
          <div
            key={Math.floor(Math.random() * 100 + 1)}
            name={i}
            className="item"
          >
            <li>{i}</li>
            <button onClick={deleteTodo}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
