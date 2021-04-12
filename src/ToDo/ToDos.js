import React, { useState } from "react";
import { Form, Label, Input, Button } from "reactstrap";
import { AiOutlinePlus } from "react-icons/ai";

function ToDo(props) {
  console.log(props);
  const [input, setInput] = useState("");
  const [inputTitle, setInputTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleChangeInputTitle = (e) => {
    setInputTitle(e.target.value);
  };

  return (
    <div>
      <Label style={{ color: "red", fontWeight: "800" }} for="title" tag="h5">
        Task
      </Label>
      <Form
        onSubmit={handleSubmit}
        className="input-group"
        style={{ backgroundColor: "white", marginBottom: "5%" }}
      >
        <Input
          onChange={handleChangeInputTitle}
          type="text"
          name="titleToDoList"
          value={inputTitle}
          placeholder="Task Name"
        />
      </Form>
      <Label style={{ color: "red", fontWeight: "600" }} for="title" tag="h7">
        To Dos
      </Label>
      <Form onSubmit={handleSubmit}>
        <div className="input-group">
          <Input
            type="text"
            placeholder="Add a todo"
            value={input}
            name="text"
            onChange={handleChange}
          />
          <Button
            style={{ backgroundColor: "white", color: "black" }}
            class="btn"
          >
            <AiOutlinePlus />{" "}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default ToDo;
