import React, { useState } from "react";
import ToDos from "../ToDo/ToDos";
import ToDo from "../ToDo/ToDo";
import { ImCross } from "react-icons/im";
import "../App.css";

export default function AddNewCardIt({ cards, removeCard }) {
  const [todos, setTodos] = useState([]);

  const addToDo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(...todos);
  };

  const completeToDo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeToDo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  return (
    <div className="todo-list">
      <div
        style={{ textAlign: "right", fontSize: "20px", marginTop: "-5%" }}
        className="icon"
      >
        <ImCross
          onClick={() => removeCard()}
          className="delete-icon"
        />
      </div>
      <ToDos onSubmit={addToDo} />{" "}
      <ToDo
        todos={todos}
        completeToDo={completeToDo}
        removeToDo={removeToDo}
      />
    </div>
  );
}
