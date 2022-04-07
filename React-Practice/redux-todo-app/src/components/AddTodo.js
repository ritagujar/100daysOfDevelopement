import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodoAction } from "../TodoActions";

import "./style.css";

const AddTodo = () => {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();

  const Todo = useSelector((state) => state.Todo);

  const { todos } = Todo;

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(AddTodoAction(todo));
    setTodo("");
  };

  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <div>
          <input
            type="text"
            value={todo}
            onChange={(event) => setTodo(event.target.value)}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
      <div className="add_section">
        {todos && todos.map((items) => <p key={items.id}>{items.todo}</p>)}
      </div>
    </div>
  );
};

export default AddTodo;
