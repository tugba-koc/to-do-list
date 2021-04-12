import React from "react";
import { Input, Button } from "reactstrap";

import { ImCross } from "react-icons/im";

export default function ToDoIt({ todos, completeToDo, removeToDo }) {
  return todos.map((todo, index) => (
    <div className="input-group">
      <div key={todo.id} value={index} onClick={() => completeToDo(todo.id)}>
        <Input style={{ height: "30px", marginLeft: "0%" }} type="checkbox" />

        <Input style={{ marginLeft: "5%", border:"none" }} type="text" value={todo.text} />
      </div>

      <Button
        style={{ backgroundColor: "white", color: "black", border: "none" }}
        onClick={() => removeToDo(todo.id)}
        className="delete-icon"
      >
        <ImCross style={{ fontSize: "10px" }} />
      </Button>
    </div>
  ));
}
